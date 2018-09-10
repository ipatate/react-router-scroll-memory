// @flow
import React from 'react';
import { withRouter } from 'react-router-dom';
import { isBrowser, getPage, saveUrl, getScrollPage, getScrollElement, scrollTo, scrollToElement } from './utils/utils';

type Props = {
  location: Object,
  elementID: string,
};

class ScrollMemory extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.detectPop = this.detectPop.bind(this);
    // stock all pathname with scroll associate
    this.url = [];
    this.requestID = 0;
  }
  componentDidMount(): void {
    if (!isBrowser()) return;
    window.addEventListener('popstate', this.detectPop);
  }
  componentWillReceiveProps(nextProps: Object): void {
    if (!isBrowser()) return;
    // actual is previous location before click on link
    const actual = this.props.location;
    // next is target location of the link
    const next = nextProps.location;
    // if hash => let the normal operation of the browser
    const locationChanged = (next.pathname !== actual.pathname || next.search !== actual.search) && next.hash === '';

    // get scroll of the page or the element before change location
    const scroll = this.props.elementID ? getScrollElement(this.props.elementID) : getScrollPage();
    if (locationChanged) {
      this.requestID = this.props.elementID ? scrollToElement(0, this.props.elementID) : scrollTo(0);
      // save path complete with hash
      const path = `${actual.pathname}${actual.search}${actual.hash}`;
      this.url = saveUrl(this.url, path, scroll);
    }
  }
  componentWillUnmount(): void {
    if (!isBrowser()) return;
    window.removeEventListener('popstate', this.detectPop);
  }
  /**
   * callback for event popstate
   *
   * @memberof ScrollMemory
   */
  detectPop(): void {
    if (!isBrowser()) return;
    const pathname = window.location.pathname;
    const nextFind = getPage(this.url, pathname);
    if (this.requestID > 0) {
      // cancel scrollTo call by componentWillReceiveProps
      window.cancelAnimationFrame(this.requestID);
      this.requestID = 0;
    }
    if (nextFind) {
      this.props.elementID ? scrollToElement(nextFind.scroll, this.props.elementID) : scrollTo(nextFind.scroll);
    }
  }
  detectPop: () => void;
  requestID: number;
  url: Array<Object>;
  render(): null {
    return null;
  }
}

export default withRouter(ScrollMemory);
