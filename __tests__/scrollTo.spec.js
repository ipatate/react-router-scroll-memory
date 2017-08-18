import { scrollTo } from '../src/utils/utils';

test('scrollTo 100', () => {
  global.scrollTo = jest.fn();
  global.requestAnimationFrame = jest.fn(cb => {
    cb();
  });
  scrollTo(100);
  expect(global.scrollTo).toHaveBeenCalledWith(0, 100);
});
