import { LOGIN_USER } from "../_actions/types.js";

const initialState = {
    loginSuccess : [],
}

export default function (state = initialState, action){
    
    switch (action.type){
        case LOGIN_USER:
            return {...state, loginSuccess : action.payload}
            break;

        default:
            return state;
    }
    
};