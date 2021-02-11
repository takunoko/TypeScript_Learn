export class Calc {
  constructor() {}

  add(num1: number, num2: number) {
    return num1 + num2;
  }

  sub(num1: number, num2: number) {
    return num1 - num2;
  }

  larger(num1: number, num2: number) {
    return num1 > num2 ? num1 : num2;
  }
}
