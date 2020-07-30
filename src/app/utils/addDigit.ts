import { GlobalObj } from "../global/types";

const addDigit = (e: Event, obj: GlobalObj) => {
  const digit = (<HTMLButtonElement>e.target).value;
  obj.action === "" ? (obj.num1 += digit) : (obj.num2 += digit);
  console.log(obj);
};
export default addDigit;
