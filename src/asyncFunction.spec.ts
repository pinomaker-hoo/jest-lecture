import { okPromise, noPromise, okAsync, noAsync } from "./asyncFunction";

test("okPromise 테스트", () => {
  const okSpy = jest.fn(okPromise);
  return okSpy().then((result) => {
    expect(result).toBe("ok");
  });
});

test("noPromise 테스트", () => {
  const noSpy = jest.fn(noPromise);
  return noSpy().catch((error) => {
    expect(error).toBe("no");
  });
});

test("noPromise 테스트2", () => {
  const noSpy = jest.fn(noPromise);

  return expect(noSpy()).rejects.toBe("no");
});
