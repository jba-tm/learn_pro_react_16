// import {connect} from "react-redux";
// import {startEditingProduct, startEditingSupplier} from "./stateActions";
// import {deleteProduct, deleteSupplier} from "./modelActionCreators";
// import {PRODUCTS, SUPPLIERS} from "./dataTypes";
//
// export const TableConnector = (dataType, presentationComponent) => {
//     const mapStateToProps = (storeData) => ({
//         products: storeData.modelData[PRODUCTS],
//         suppliers: storeData.modelData[SUPPLIERS]
//     })
//     const mapDispatchToProps = {
//         editCallback: dataType === PRODUCTS
//             ? startEditingProduct : startEditingSupplier,
//         deleteCallback: dataType === PRODUCTS ? deleteProduct : deleteSupplier
//     }
//     return connect(mapStateToProps, mapDispatchToProps)(presentationComponent);
// }

import {connect} from "react-redux";
//import { startEditingProduct, startEditingSupplier } from "./stateActions";
import {deleteProduct, deleteSupplier} from "./modelActionCreators";
import {PRODUCTS, SUPPLIERS} from "./dataTypes";
import {withRouter} from "react-router-dom";
import {getData} from "../webservice/RestMiddleware";
import {DataGetter} from "../DataGetter";

// export const TableConnector = (dataType, presentationComponent) => {
//     const mapStateToProps = (storeData, ownProps) => {
//         if (dataType === PRODUCTS) {
//             return {products: storeData.modelData[PRODUCTS]};
//         } else {
//             return {
//                 suppliers: storeData.modelData[SUPPLIERS].map(supp => ({
//                     ...supp,
//                     products: supp.products.map(id =>
//                         storeData.modelData[PRODUCTS]
//                             .find(p => p.id === Number(id)) || id)
//                         .map(val => val.name || val)
//                 }))
//             }
//         }
//     }
//     const mapDispatchToProps = (dispatch, ownProps) => {
//         if (dataType === PRODUCTS) {
//             return {
// //editCallback: (...args) => dispatch(startEditingProduct(...args)),
//                 deleteCallback: (...args) => dispatch(deleteProduct(...args))
//             }
//         } else {
//             return {
// //editCallback: (...args) => dispatch(startEditingSupplier(...args)),
//                 deleteCallback: (...args) => dispatch(deleteSupplier(...args))
//             }
//         }
//     }
//     const mergeProps = (dataProps, functionProps, ownProps) => {
//         let routedDispatchers = {
//             editCallback: (target) => {
//                 ownProps.history.push(`/${dataType}/edit/${target.id}`);
//             },
//             deleteCallback: functionProps.deleteCallback
//         }
//         return Object.assign({}, dataProps, routedDispatchers, ownProps);
//     }
//     return withRouter(connect(mapStateToProps,
//         mapDispatchToProps, mergeProps)(presentationComponent));
// }

export const TableConnector = (dataType, presentationComponent) => {
    const mapStateToProps = (storeData, ownProps) => {
        if (dataType === PRODUCTS) {
            return {products: storeData.modelData[PRODUCTS]};
        } else {
            return {
                suppliers: storeData.modelData[SUPPLIERS].map(supp => ({
                    ...supp,
                    products: supp.products.map(id =>
                        storeData.modelData[PRODUCTS]
                            .find(p => p.id === Number(id)) || id)
                        .map(val => val.name || val)
                }))
            }
        }
    }
    const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            getData: (type) => dispatch(getData(type)),
            deleteCallback: dataType === PRODUCTS
                ? (...args) => dispatch(deleteProduct(...args))
                : (...args) => dispatch(deleteSupplier(...args))
        }
    }
    const mergeProps = (dataProps, functionProps, ownProps) => {
        let routedDispatchers = {
            editCallback: (target) => {
                ownProps.history.push(`/${dataType}/edit/${target.id}`);
            },
            deleteCallback: functionProps.deleteCallback,
            getData: functionProps.getData
        }
        return Object.assign({}, dataProps, routedDispatchers, ownProps);
    }
    return withRouter(connect(mapStateToProps,
        mapDispatchToProps, mergeProps)(DataGetter(dataType,
        presentationComponent)));
}