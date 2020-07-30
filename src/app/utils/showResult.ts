import { GlobalObj, DisplayObj } from "../global/types";

const showResult = (obj: GlobalObj, obj2: DisplayObj) => {
  const { result, action, num1, num2 } = obj;

  if (obj2.numberDisplay) {
    if (num2 === "" && result == "") obj2.numberDisplay.innerHTML = num1;
    else if (result === "" && action !== "")
      obj2.numberDisplay.innerHTML = num2;
    else obj2.numberDisplay.innerHTML = result;
  }
  if (obj2.actionDisplay) {
    if (result === "") obj2.actionDisplay.innerHTML = action;
    else obj2.actionDisplay.innerHTML = "";
  }
};

export default showResult;

/*
 const resultLength = obj.result.toString().length;
  if (resultLength > 12) container.innerHTML = result.toPrecision(8);
  else container.innerHTML = result;

  */
