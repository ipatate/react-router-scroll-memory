// @flow
/**
 * search object and return object find or undefined
 * @param {array} url
 * @param {string} path
 * @return {object}
 */
export const getPage = (url: Array<PageInfo> = [], path: string): ?PageInfo => {
  const lastIndex = url.map(x => x.pathname).lastIndexOf(path);
  return lastIndex > -1 ? url[lastIndex] : undefined;
};

/**
       * search object and return index or -1
       * @param {array} url
       * @param {string} path
       * @return {number}
       */
export const getIndexPage = (url: Array<PageInfo> = [], path: string): number =>
  url.map(x => x.pathname).lastIndexOf(path);

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
       * scroll to y number
       * @param {number} scrollnumber
       * @return {void}
       */
export const scrollTo = (scrollnumber: number = 0): number =>
  window.requestAnimationFrame(() => {
    window.scrollTo(0, scrollnumber);
  });

/**
     * verif if window exist
     * @return boolean
     */
export const isBrowser = (): boolean => typeof window !== 'undefined';

/**
     * remove from array, the x (limit) and return exctracted element
     * @param {array} url
     * @param {number} limit
     *
     * @return array
     */
export const cleanOldUrl = (url: Array<PageInfo>, limit: number): Array<PageInfo> => {
  const length = url.length;
  if (length > limit) {
    url.splice(-length, limit);
  }
  return url;
};
