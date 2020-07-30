import * as actions from "./actions";
import { GlobalObj } from "../global/types";

export const getDoubleDigitsResult = (obj: GlobalObj) => {
  const { add, sub, div, multi } = actions;
  const num1 = +obj.num1;
  const num2 = +obj.num2;

  switch (obj.action) {
    case "+":
      return (obj.result = add(num1, num2));
    case "-":
      return (obj.result = sub(num1, num2));
    case "*":
      return (obj.result = multi(num1, num2));
    case "/":
      return (obj.result = div(num1, num2));
    default:
      break;
  }
};

export const getSingleDigitResult = (
  e: Event,
  obj: {
    num1: string;
    num2: string;
    action: string;
    result: string;
  }
) => {
  const { pow, sqrt } = actions;
  const num1 = +obj.num1;
  const num2 = +obj.num2;
  const action = (<HTMLButtonElement>e.target).value;

  switch (action) {
    case "x²":
      return obj.num2 === "" ? (obj.num1 = pow(num1)) : (obj.num2 = pow(num2));
    case "√":
      return obj.num2 === ""
        ? (obj.num1 = sqrt(num1))
        : (obj.num2 = sqrt(num2));
    case "±":
      return obj.num2 === ""
        ? (obj.num1 = `${num1 * -1}`)
        : (obj.num2 = `${num2 * -1}`);
    default:
      break;
  }
};
