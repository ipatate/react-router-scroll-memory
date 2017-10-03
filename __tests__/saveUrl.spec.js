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

test('update url', () => {
  let url = [];
  url = saveUrl(url, '/foo', 20);
  url = saveUrl(url, '/foo', 100);
  url = saveUrl(url, '/bar');
  url = saveUrl(url, '/bar', 320);
  expect(url[0].scroll).toBe(100);
  expect(url[1].scroll).toBe(320);
});
