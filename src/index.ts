import addDigit from "./app/utils/addDigit";
import addAction from "./app/utils/addAction";
import showResult from "./app/utils/showResult";
import clear from "./app/utils/clear";
import "./index.scss";
import {
  getDoubleDigitsResult,
  getSingleDigitResult,
} from "./app/utils/getResult";
import {
  digitsBtns,
  actionBtns,
  extBtns,
  clearBtn,
  sumBtn,
} from "./app/global/elements";
import { GLOBAL, DISPLAYS } from "./app/global/objects";

window.onload = () => {
  ///DIGIT BTNS
  for (const btn of digitsBtns)
    btn.addEventListener("click", (e) => {
      addDigit(e, GLOBAL);
      showResult(GLOBAL, DISPLAYS);
    });
  //ACTION BTNS
  for (const btn of actionBtns)
    btn.addEventListener("click", (e) => {
      addAction(e, GLOBAL);
      if (GLOBAL.num1 === "") clear(GLOBAL, DISPLAYS);
      showResult(GLOBAL, DISPLAYS);
    });
  //EXT BTNS
  for (const btn of extBtns)
    btn.addEventListener("click", (e) => {
      getSingleDigitResult(e, GLOBAL);
      showResult(GLOBAL, DISPLAYS);
      if (GLOBAL.num1 === "") clear(GLOBAL, DISPLAYS);
    });

  //'SUM' BTN
  if (sumBtn)
    sumBtn.addEventListener("click", () => {
      getDoubleDigitsResult(GLOBAL);
      showResult(GLOBAL, DISPLAYS);
      clear(GLOBAL, DISPLAYS);
    });
  //'CLEAR' BTN
  if (clearBtn)
    clearBtn.addEventListener("click", () => clear(GLOBAL, DISPLAYS));
};
