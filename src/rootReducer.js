import { combineReducers } from 'redux';
import votes from "./votes.reducer";

const rootReducer = combineReducers({
  votes
})
export default rootReducer;
