// import {createStore} from "redux";
// import modelReducer from "./modelReducer";
//
// export default createStore(modelReducer);
// export {
//     saveProduct, saveSupplier, deleteProduct, deleteSupplier
// }
//     from "./modelActionCreators";

// import {createStore, combineReducers} from "redux";
// import modelReducer from "./modelReducer";
// import stateReducer from "./stateReducer";
//
// export default createStore(combineReducers(
//     {
//         modelData: modelReducer,
//         stateData: stateReducer
//     }));
//
// export {
//     saveProduct, saveSupplier, deleteProduct, deleteSupplier
// }
//     from "./modelActionCreators";

// import {createStore, combineReducers} from "redux";
// import modelReducer from "./modelReducer";
// import stateReducer from "./stateReducer";
// import {customReducerEnhancer} from "./customReducerEnhancer";
//
// const enhancedReducer = customReducerEnhancer(
//     combineReducers(
//         {
//             modelData: modelReducer,
//             stateData: stateReducer
//         })
// );
//
// export default createStore(enhancedReducer);
// export {
//     saveProduct, saveSupplier, deleteProduct, deleteSupplier
// }
//     from "./modelActionCreators";

// import {createStore, combineReducers, applyMiddleware} from "redux";
// import modelReducer from "./modelReducer";
// import stateReducer from "./stateReducer";
// import {customReducerEnhancer} from "./customReducerEnhancer";
// import {multiActions} from "./multiActionMiddleware";
//
// const enhancedReducer = customReducerEnhancer(
//     combineReducers(
//         {
//             modelData: modelReducer,
//             stateData: stateReducer
//         })
// );
//
// export default createStore(enhancedReducer, applyMiddleware(multiActions));
// export {
//     saveProduct, saveSupplier, deleteProduct, deleteSupplier
// }
//     from "./modelActionCreators";

import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import modelReducer from "./modelReducer";
import stateReducer from "./stateReducer";
import {customReducerEnhancer} from "./customReducerEnhancer";
import {multiActions} from "./multiActionMiddleware";
import {asyncEnhancer} from "./asyncEnhancer";

const enhancedReducer = customReducerEnhancer(
    combineReducers(
        {
            modelData: modelReducer,
            stateData: stateReducer
        })
);
export default createStore(enhancedReducer,
    compose(applyMiddleware(multiActions), asyncEnhancer(2000)));
export {
    saveProduct, saveSupplier, deleteProduct, deleteSupplier
}
    from "./modelActionCreators";