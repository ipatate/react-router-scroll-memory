import { deletePage } from '../src/utils/utils';

test('deletePage', () => {
  const url = [{ pathname: '/', scroll: 30 }, { pathname: '/list', scroll: 80 }, { pathname: '/detail', scroll: 0 }];
  expect(deletePage(url, 2)).toMatchSnapshot();
});

test('deletePage', () => {
  const url = [{ pathname: '/', scroll: 30 }, { pathname: '/list', scroll: 80 }, { pathname: '/detail', scroll: 0 }];
  expect(deletePage(url, 0)).toMatchSnapshot();
});