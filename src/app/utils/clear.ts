import { GlobalObj, DisplayObj } from "../global/types";

const clear = (obj: GlobalObj, obj2: DisplayObj) => {
  //clear screens
  if (obj.result === "" && obj2.numberDisplay && obj2.actionDisplay) {
    obj2.numberDisplay.innerHTML = "";
    obj2.actionDisplay.innerHTML = "";
  }
  //clear global vars
  obj.num1 = "";
  obj.num2 = "";
  obj.action = "";
  obj.result = "";
};
export default clear;
