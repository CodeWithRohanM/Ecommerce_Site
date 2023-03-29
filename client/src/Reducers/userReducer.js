const initialState = {
    cartNumber: 0,
    cartNumberStatus: false,
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case "CART_NUMBER": {
            return {
                ...state,
                cartNumber: action.payLoad,
            }
        };

        case "SHOW_CART_NUMBER":{
            return {
                ...state,
                cartNumberStatus: action.payLoad,
            }
        }

        default: return initialState;
    }

};

export default userReducer;