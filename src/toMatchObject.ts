class TestObj {
  a: string;
  constructor(a: string) {
    this.a = a;
  }
}

export function obj() {
  return new TestObj("hello");
}
