// @flow
/**
 * save path and scroll in url array
 * @param {array} url
 * @param {string} pathname
 * @param {number} scroll
 * @return {array}
 */
export const saveUrl = (url: Array<PageInfo>, pathname: string = '', scroll: number = 0): Array<PageInfo> => {
  const u = Array.isArray(url) ? url : [];
  // save actual url
  u.unshift({ pathname, scroll });
  // remove last url in array
  return u.slice(0, 2);
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
 * scroll to y number
 * @param {number} scrollnumber
 * @return {void}
 */
export const scrollTo = (scrollnumber: number = 0): void => {
  window.requestAnimationFrame(() => {
    window.scrollTo(0, scrollnumber);
  });
};

/**
 * search object and return object find or undefined
 * @param {array} url
 * @param {string} path
 * @return {object}
 */
export const getPage = (url: Array<PageInfo> = [], path: string): ?PageInfo => url.find(u => u.pathname === path);

/**
 * search object and return index or -1
 * @param {array} url
 * @param {string} path
 * @return {number}
 */
export const getIndexPage = (url: Array<PageInfo> = [], path: string): number =>
  url.findIndex(u => u.pathname === path);

/**
 *
 * @param {number} actualKey
 * @param {number} previousKey
 * @return {boolean}
 */
export const shouldRenderScroll = (actualKey: number, previousKey: number): boolean =>
  actualKey + 1 === previousKey || actualKey - 1 === previousKey;

/**
   *
   * @param {array} url
   * @param {number} key
   * @return {array}
   */
export const deletePage = (url: Array<PageInfo>, key: number): Array<PageInfo> => {
  url.splice(key, 1);
  return url;
};

/**
 *
 * @param {array} url
 * @param {number} end
 * @return {array}
 */
export const deleteEndOfArray = (url: Array<PageInfo>, end: number): Array<PageInfo> => url.slice(0, end + 1);

export default saveUrl;