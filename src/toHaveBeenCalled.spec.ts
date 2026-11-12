import { sum, obj } from "./toBe";

test("sum 함수가 호출 되었다.", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalled();
});

test("sum 함수가 1번 호출 되었다.", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalledTimes(1);
});

test("sum 함수가 1과 2를 전달하여 호출 되었다.", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenNthCalledWith(1, 1, 2);
});

test("obj.minuus 함수가 1번 호출되었다.", () => {
  const minusSpy = jest.spyOn(obj, "minus");
  minusSpy(1, 2);
  expect(minusSpy).toHaveBeenCalledTimes(1);
});
