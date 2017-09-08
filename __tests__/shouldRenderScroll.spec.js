import { shouldRenderScroll } from '../src/utils/utils';

test('shouldRenderScroll is true', () => {
  const actualKey = 1;
  const previousKey = 2;
  expect(shouldRenderScroll(actualKey, previousKey)).toBeTruthy();
});

test('shouldRenderScroll is false', () => {
  const actualKey = 1;
  const previousKey = 3;
  expect(shouldRenderScroll(actualKey, previousKey)).toBeFalsy();
});

test('shouldRenderScroll is true', () => {
  const actualKey = 3;
  const previousKey = 4;
  expect(shouldRenderScroll(actualKey, previousKey)).toBeTruthy();
});