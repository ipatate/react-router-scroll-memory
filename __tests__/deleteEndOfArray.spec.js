import { deleteEndOfArray } from '../src/utils/utils';

test('deleteEndOfArray => detail', () => {
  const url = [
    { pathname: '/', scroll: 30 },
    { pathname: '/list', scroll: 80 },
    { pathname: '/detail', scroll: 0 },
    { pathname: '/foo', scroll: 0 },
    { pathname: '/bar', scroll: 0 },
  ];
  expect(deleteEndOfArray(url, 2)).toMatchSnapshot();
});

test('deleteEndOfArray => foo ', () => {
  const url = [
    { pathname: '/', scroll: 30 },
    { pathname: '/list', scroll: 80 },
    { pathname: '/detail', scroll: 0 },
    { pathname: '/foo', scroll: 0 },
    { pathname: '/bar', scroll: 0 },
  ];
  expect(deleteEndOfArray(url, 3)).toMatchSnapshot();
});