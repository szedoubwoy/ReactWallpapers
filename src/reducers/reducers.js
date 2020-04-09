import { combineReducers } from "redux";
import handleNature from "./handle_nature";
import handleArchitecture from "./handle_architecture";
import handleSpirituality from "./handle_spirituality";

const reducers = combineReducers({
  HandleNature: handleNature,
  HandleArchitecture: handleArchitecture,
  HandleSpirituality: handleSpirituality
});

export default reducers;
