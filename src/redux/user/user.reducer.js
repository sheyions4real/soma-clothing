import { userActionType } from "./user.type"

const INITIAL_USER_STATE ={
    currentUser:null
}

const userReducer =(state = INITIAL_USER_STATE, action)=>{
    switch(action.type)
    {
        case userActionType.SET_USER_ACTION :
            return{
                ...state,
                currentUser:action.payload
            };
            default:
                return state;

    }
}

export default userReducer;