const showResult = (
  obj: { num1: string; num2: string; action: string; result: string },
  obj2: { numberDisplay: Element | null; actionDisplay: Element | null }
) => {
  const { result, action, num1, num2 } = obj;
  console.log(obj);

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

  if (obj2.numberDisplay && obj2.numberDisplay.innerHTML === "") {
    obj2.numberDisplay.innerHTML = "0";
  }
};

export default showResult;
