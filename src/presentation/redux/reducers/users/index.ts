const initialState = {
    users: [],
    user: {},
    success: false
}
export const usersReducer = (state = initialState, action: any) => {
    switch(action.type){
        case 'GET_ALL_PRODUCTS': {
            return {
                ...state,
                users: [{}]
            }
        }
        default: {
            return state;
        }
    }
}
