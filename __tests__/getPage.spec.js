import { getPage } from '../src/utils/utils';

test('getPage', () => {
  const url = [{ pathname: '/', scroll: 30 }, { pathname: '/list', scroll: 80 }, { pathname: '/detail', scroll: 0 }];
  expect(getPage(url, '/list')).toMatchSnapshot();
  expect(getPage(url, '/')).toMatchSnapshot();
  expect(getPage(url, '/foo')).toMatchSnapshot();
});