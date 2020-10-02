// @flow
import { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  isBrowser,
  getScrollPage,
  getScrollElement,
  scrollTo,
  scrollToElement,
} from "./utils/utils";

type ScrollProps = {
  location: Object,
  elementID?: string,
  timeout?: number,
};

class ScrollMemory extends Component<ScrollProps> {
  detectPop: () => void;
  url: Map<string, number>;

  constructor(props: ScrollProps) {
    super(props);
    // add event for click on previous or next browser button
    this.detectPop = this.detectPop.bind(this);
    // stock location key with scroll associate
    this.url = new Map();
  }

  componentDidMount(): void {
    window.addEventListener("popstate", this.detectPop);
  }

  componentWillUnmount(): void {
    window.removeEventListener("popstate", this.detectPop);
  }

  shouldComponentUpdate(nextProps: ScrollProps): boolean {
    if (!isBrowser()) return false;
    const { location } = this.props;
    // location before change url
    const actual = location;
    // location after change url
    const next = nextProps.location;
    // the first page has not key, set "enter" for key
    const key = actual.key || "enter";

    // if hash => let the normal operation of the browser
    const locationChanged =
      (next.pathname !== actual.pathname || next.search !== actual.search) &&
      next.hash === "";

    // get scroll of the page or the element before change location
    const scroll = this.props.elementID
      ? getScrollElement(this.props.elementID)
      : getScrollPage();

    if (locationChanged) {
      // pass page or element scroll to top
      this.props.elementID
        ? scrollToElement(0, this.props.elementID)
        : scrollTo(0);
      // save scroll with key location
      this.url.set(key, scroll);
    }
    // never render
    return false;
  }

  /**
   * callback for event popstate
   *
   * @memberof ScrollMemory
   */
  detectPop(location: Object): void {
    if (!isBrowser()) return;
    const { state } = location;
    // key or enter page
    const key = state && state.key ? state.key : "enter";
    // get the next for scroll position
    const nextFind = this.url.get(key);

    // if find in url map => scroll to position
    if (nextFind) {
      //if timeout is set, apply it
      if (this.props.timeout !== undefined && this.props.timeout !== null) {
        setTimeout(() => {
          this.props.elementID
            ? scrollToElement(nextFind, this.props.elementID)
            : scrollTo(nextFind);
        }, this.props.timeout);
      } else {
        this.props.elementID
          ? scrollToElement(nextFind, this.props.elementID)
          : scrollTo(nextFind);
      }
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollMemory);
