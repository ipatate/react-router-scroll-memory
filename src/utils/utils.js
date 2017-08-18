// @flow
export const saveUrl = (url: Array<Object>, pathname: string = '', scroll: number = 0): Array<Object> => {
  const u = Array.isArray(url) ? url : [];
  // save actual url
  u.unshift({ pathname, scroll });
  // remove last url in array
  return u.slice(0, 2);
};

export const getScrollPage = (): number => {
  let docScrollTop = 0;
  if (document.documentElement && document.documentElement !== null) {
    docScrollTop = document.documentElement.scrollTop;
  }
  return window.pageYOffset || docScrollTop;
};

export const scrollTo = (scrollTo: number = 0): void => {
  window.requestAnimationFrame(() => {
    window.scrollTo(0, scrollTo);
  });
};

export default saveUrl;
