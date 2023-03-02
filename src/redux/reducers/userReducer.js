const INITIAL_STATE = {
userList : []
}

export const userReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
    case "GET_USER" :
        console.log("dari reduce", action.payload)
        return {
            ...state,
            userList: action.payload
        }
        default :
        return state
   }
}