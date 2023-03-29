import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Reducers/userReducer";

const Store = configureStore({
    reducer:{
        rootSlice: userSlice,
    }
});

export default Store;









// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./Reducers/rootReducer";

// const Store = createStore(rootReducer, compose(applyMiddleware(thunk)));

// export default Store;