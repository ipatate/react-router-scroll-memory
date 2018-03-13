// @flow
type PageInfo = { pathname: string, scroll: number };
/**
 * search object and return object find or undefined
 * @param {array} url
 * @param {string} path
 * @return {object}
 */
export const getPage = (url: Array<PageInfo> = [], path: string): ?PageInfo => {
  const lastIndex = url.map(x => x.pathname).indexOf(path);
  return lastIndex > -1 ? url[lastIndex] : undefined;
};

/**
 * search object and return index or -1
 * @param {array} url
 * @param {string} path
 * @return {number}
 */
export const getIndexPage = (url: Array<PageInfo> = [], path: string): number => url.map(x => x.pathname).indexOf(path);

/**
 * save path and scroll in url array
 * @param {array} url
 * @param {string} pathname
 * @param {number} scroll
 * @return {array}
 */
export const saveUrl = (url: Array<PageInfo>, pathname: string = '', scroll: number = 0): Array<PageInfo> => {
  const u = Array.isArray(url) ? url : [];
  // if path exist in array replace scroll value
  const page = getIndexPage(u, pathname);
  if (page > -1) {
    u[page].scroll = scroll;
    return u;
  }
  // save actual url
  u.push({ pathname, scroll });
  return u;
};

/**
 * get the scroll of page
 * @return {number}
 */
export const getScrollPage = (): number => {
  let docScrollTop = 0;
  if (document.documentElement && document.documentElement !== null) {
    docScrollTop = document.documentElement.scrollTop;
  }
  return window.pageYOffset || docScrollTop;
};

/**
 * get the scroll of a parent element
 * @return {number}
 */
export const getScrollElement = (elementId: string): number => {
  let elemScrollTop = 0;
  const element = document.getElementById(elementId);
  if (element !== null) {
    elemScrollTop = element.scrollTop;
  }
  return elemScrollTop;
};

/**
 * scroll to y number of a page
 * @param {number} scrollnumber
 * @return {void}
 */
export const scrollTo = (scrollnumber: number = 0): number =>
  window.requestAnimationFrame(() => {
    window.scrollTo(0, scrollnumber);
  });

  /**
 * scroll to y number inside an element
 * @param {number} scrollnumber
 * @return {void}
 */
export const scrollToElement = (scrollnumber: number = 0, elementId: string): number => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scroll({
      top: scrollnumber,
    });
  }
}

/**
 * verif if window exist
 * @return boolean
 */
export const isBrowser = (): boolean => typeof window !== 'undefined';
