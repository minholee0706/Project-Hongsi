import { combineReducers } from "redux";
// combineReducers는 여러 리듀서의 state에서 combine리듀서를 통해서  rootreducer에서 하나로 합쳐주는것
import user from './user_reducer.js';

const rootReducer = combineReducers({
    user
})

export default rootReducer;