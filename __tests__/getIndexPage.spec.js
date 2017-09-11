import { getIndexPage } from '../src/utils/utils';

test('getPage', () => {
  const url = [
    { pathname: '/', scroll: 30 },
    { pathname: '/detail/3', scroll: 80 },
    { pathname: '/detail', scroll: 0 },
  ];
  expect(getIndexPage(url, '/detail/3')).toBe(1);
  expect(getIndexPage(url, '/')).toBe(0);
  expect(getIndexPage(url, '/foo')).toBe(-1);
});
