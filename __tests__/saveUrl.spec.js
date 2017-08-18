import { saveUrl } from '../src/utils/utils';

test('no array in first param', () => {
  const r = saveUrl('lol', '/', 0);
  expect(r).toMatchSnapshot();
});

test('only 2 params', () => {
  const r = saveUrl('lol', '/');
  expect(r).toMatchSnapshot();
});

test('3 url insert', () => {
  let url = [];
  url = saveUrl(url, '/');
  url = saveUrl(url, '/foo');
  url = saveUrl(url, '/bar');
  expect(url).toMatchSnapshot();
});
