import { userActionType } from "./user.type";


export const setCurrentUser = user=>({
    type:userActionType.SET_USER_ACTION,
    payload: user
});