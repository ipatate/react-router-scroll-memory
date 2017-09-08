import { getIndexPage } from '../src/utils/utils';

test('getPage', () => {
  const url = [{ pathname: '/', scroll: 30 }, { pathname: '/list', scroll: 80 }, { pathname: '/detail', scroll: 0 }];
  expect(getIndexPage(url, '/list')).toBe(1);
  expect(getIndexPage(url, '/')).toBe(0);
  expect(getIndexPage(url, '/foo')).toBe(-1);
});