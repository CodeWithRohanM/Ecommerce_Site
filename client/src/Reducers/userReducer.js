import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "displayCartNumberSlice",
    initialState: {
        cartNumber: 0,
        cartStatus: false,
    },
    reducers: {

        getCartNumber(state, action) {
            return {
                ...state,
                cartNumber: action.payload,
            }
        },

        getCartStatus(state, action) {
            return {
                ...state,
                cartStatus: action.payload,
            }
        },
    },
});

export default userSlice.reducer;
export const { getCartNumber, getCartStatus }  = userSlice.actions;






// const initialState = {
//     cartNumber: 0,
//     cartNumberStatus: false,
// };

// const userReducer = (state = initialState, action) => {

//     switch (action.type) {
//         case "CART_NUMBER": {
//             return {
//                 ...state,
//                 cartNumber: action.payLoad,
//             }
//         };

//         case "SHOW_CART_NUMBER":{
//             return {
//                 ...state,
//                 cartNumberStatus: action.payLoad,
//             }
//         }

//         default: return initialState;
//     }

// };

// export default userReducer;