// import {createStore} from "redux";
// import modelReducer from "./modelReducer";
//
// export default createStore(modelReducer);
// export {
//     saveProduct, saveSupplier, deleteProduct, deleteSupplier
// }
//     from "./modelActionCreators";

import {createStore, combineReducers} from "redux";
import modelReducer from "./modelReducer";
import stateReducer from "./stateReducer";

export default createStore(combineReducers(
    {
        modelData: modelReducer,
        stateData: stateReducer
    }));

export {
    saveProduct, saveSupplier, deleteProduct, deleteSupplier
}
    from "./modelActionCreators";