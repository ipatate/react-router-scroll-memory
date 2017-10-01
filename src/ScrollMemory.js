// @flow
import React from 'react';
import { withRouter } from 'react-router-dom';
import { cleanOldUrl, isBrowser, getPage, saveUrl, getScrollPage, scrollTo } from './utils/utils';

type Props = {
  location: Object,
};
const limit = 20;
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
    const locationChanged = next !== actual;
    // get scroll of the page before change location
    const scroll = getScrollPage();
    if (locationChanged) {
      this.requestID = scrollTo(0);
      this.url = saveUrl(this.url, actual.pathname, scroll);
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
      scrollTo(nextFind.scroll);
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
