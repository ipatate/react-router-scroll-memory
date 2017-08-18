// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

type Props = {
  location: Object,
};

class ScrollMemory extends Component {
  static getScrollPage(): number {
    let docScrollTop = 0;
    if (document.documentElement && document.documentElement !== null) {
      docScrollTop = document.documentElement.scrollTop;
    }
    return window.pageYOffset || docScrollTop;
  }
  constructor(props: Props) {
    super(props);
    this.scrollElement = this.scrollElement.bind(this);
    this.saveUrl = this.saveUrl.bind(this);
    this.url = [];
    this.scrollTo = 0;
  }
  componentWillReceiveProps(nextProps: Object): void {
    if (typeof window === 'undefined') {
      return;
    }
    const actual = this.props.location;
    const next = nextProps.location;
    const locationChanged = next !== actual;

    const scroll = ScrollMemory.getScrollPage();
    this.scrollTo = 0;
    if (locationChanged) {
      const previous = this.url[0] || { pathname: '', scroll: 0 };
      if (previous && previous.pathname === next.pathname) {
        this.scrollTo = previous.scroll;
      }
      this.scrollElement();
      this.saveUrl(actual, scroll);
    }
  }
  getScrollPage: Function;
  scrollElement: Function;
  url: Array<Object>;
  saveUrl: Function;
  scrollTo: number;
  saveUrl(actual: Object, scroll: number): void {
    // save actual url
    this.url.unshift({ pathname: actual.pathname, scroll });
    // remove last url in array
    this.url = this.url.slice(0, 2);
  }
  scrollElement(): void {
    const t = this;
    window.requestAnimationFrame(() => {
      window.scrollTo(0, t.scrollTo);
    });
  }
  render(): null {
    return null;
  }
}

export default withRouter(ScrollMemory);
