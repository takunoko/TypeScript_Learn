import { Calc } from "@/Calc";

describe("calc", (): void => {
  var c = new Calc();
  test("add", (): void => {
    expect(c.add(100, 200)).toBe(300);
    expect(c.add(-1, -2)).toBe(-3);
    expect(c.add(0, -1)).toBe(-1);
    expect(c.add(12345, 54321)).toBe(66666);
    expect(c.add(1, 1)).not.toBe(3);
    expect(c.add(0.1, 0.2)).not.toBe(0.3); // 丸め誤差で等しくはならない
    expect(c.add(0.1, 0.2)).toBeCloseTo(0.3); // 丸め誤差を考慮した比較
  });

  test("sub", (): void => {
    expect(c.sub(100, 1)).toBe(99);
    expect(c.sub(100, 100)).toBe(0);
    expect(c.sub(100, 101)).toBe(-1);
    expect(c.sub(0, 0)).toBe(0);
  });

  test("larger", (): void => {
    expect(c.larger(1, 2)).toBe(2);
    expect(c.larger(3, 2)).toBe(3);
    expect(c.larger(-3, 1)).toBe(1);
  });
});
