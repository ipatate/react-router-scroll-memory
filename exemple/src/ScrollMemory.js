// @flow
import React from 'react';
import { withRouter } from 'react-router-dom';
import { getIndexPage, getPage, saveUrl, getScrollPage, scrollTo } from './utils/utils';

type Props = {
  location: Object,
};
const limit = 10;
class ScrollMemory extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.detectPop = this.detectPop.bind(this);
    this.url = [];
    this.requestID = 0;
  }
  componentDidMount(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', this.detectPop);
    }
  }
  componentWillReceiveProps(nextProps: Object): void {
    if (typeof window === 'undefined') {
      return;
    }
    // actual is previous location before click on link
    const actual = this.props.location;
    // next is target location of the link
    const next = nextProps.location;
    const locationChanged = next !== actual;
    // get scroll of the page before change location
    const scroll = getScrollPage();
    if (locationChanged) {
      // catch the request id for cancel if necessary
      this.requestID = scrollTo(0);
      this.url = saveUrl(this.url, actual.pathname, scroll);
      let index = getIndexPage(this.url, actual.pathname);
      if (this.url.length > limit * 2) {
        index = index - limit < 0 ? 0 : index - limit;
        this.url.splice(index, limit);
      }
    }
  }
  componentWillUnmount(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('popstate', this.detectPop);
    }
  }
  detectPop(): void {
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
  detectPop: () => void; // eslint-disable-line
  requestID: number; // eslint-disable-line
  url: Array<Object>; // eslint-disable-line
  render(): null {
    return null;
  }
}

export default withRouter(ScrollMemory);
