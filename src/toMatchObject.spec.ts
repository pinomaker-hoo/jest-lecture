import { obj } from "./toStrictEqual";

test("obj 함수는 객체를 반환해야한다", () => {
  expect(obj()).toMatchObject({ a: "hello" });
});
