import { cleanOldUrl } from '../src/utils/utils';

test('cleanOldUrl 10 elements remove 5, limit is 5', () => {
  const url = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(cleanOldUrl(url, 5)).toEqual([5, 6, 7, 8, 9]);
});

test('cleanOldUrl 10 elements remove 0 element, limit is 10', () => {
  const url = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(cleanOldUrl(url, 10)).toEqual(url);
});

test('cleanOldUrl 5 elements remove 0 element, limit is 10', () => {
  const url = [0, 1, 2, 3, 4];
  expect(cleanOldUrl(url, 10)).toEqual(url);
});
