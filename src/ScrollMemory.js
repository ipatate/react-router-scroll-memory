// @flow
import React from 'react';
import { withRouter } from 'react-router-dom';
import { saveUrl, getScrollPage, scrollTo } from './utils/utils';

type Props = {
  location: Object,
};
const url: Array<Object> = [];
class ScrollMemory extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.scrollTo = 0;
  }
  componentWillReceiveProps(nextProps: Object): void {
    if (typeof window === 'undefined') {
      return;
    }
    const actual = this.props.location;
    const next = nextProps.location;
    const locationChanged = next !== actual;

    const scroll = getScrollPage();
    this.scrollTo = 0;
    if (locationChanged) {
      const previous = url[0] || { pathname: '', scroll: 0 };
      if (previous && previous.pathname === next.pathname) {
        this.scrollTo = previous.scroll;
      }
      scrollTo(this.scrollTo);
      saveUrl(url, actual.pathname, scroll);
    }
  }
  scrollTo: number;
  render(): null {
    return null;
  }
}

export default withRouter(ScrollMemory);
