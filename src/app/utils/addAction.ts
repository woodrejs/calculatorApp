import { GlobalObj } from "../global/types";

const addAction = (e: Event, obj: GlobalObj) => {
  const action = (<HTMLButtonElement>e.target).value;
  obj.action = action;
};
export default addAction;
