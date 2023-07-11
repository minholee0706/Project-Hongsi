import { LOGIN_USER } from "../_actions/types.js";

export default function Login_user(state = {}, action){

    switch (action.type){
        case LOGIN_USER:
            return { ...state, loginSuccess : action.payload};
            break;

        default:
            return state;
    }
    
};