import { getScrollPage } from '../src/utils/utils';

test('get scroll 10 value', () => {
  Object.defineProperty(window, 'pageYOffset', { value: 10, writable: true });
  const r = getScrollPage();
  expect(r).toMatchSnapshot();
});
