import React from "react";
// import {Editor} from "./Editor";
// import {ProductTable} from "./ProductTable";
// import {ColorInvalidElements} from "./jQueryColorizer";
import {ForwardFormField} from "./FormField";
import {PortalWrapper} from "./PortalWrapper";


// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             products: []
//         }
//         this.editorRef = React.createRef()
//     }
//
//     addProduct = (product) => {
//         if (this.state.products.indexOf(product.name) === -1) {
//             this.setState({products: [...this.state.products, product]})
//         }
//     }
//
//     colorFields = () => {
//         ColorInvalidElements(this.editorRef.current)
//     }
//
//     // render() {
//     //     return (
//     //         <div>
//     //             <Editor callback={this.addProduct}/>
//     //             <h6 className="bg-secondary text-white m-2 p-2">
//     //                 Products
//     //             </h6>
//     //             <div className="m-2">
//     //                 {this.state.products.length === 0 ? <div className="text-center">No products</div> :
//     //                     <ProductTable products={this.state.products}/>}
//     //             </div>
//     //         </div>
//     //     );
//     // }
//
//     render() {
//         return (
//             <div>
//                 <div className="text-center m-2">
//                     <button onClick={this.colorFields} className="btn btn-primary">
//                         jQuery
//                     </button>
//                 </div>
//
//                 <div ref={this.editorRef}>
//                     <Editor callback={this.addProduct}/>
//                 </div>
//                 <h6 className="bg-secondary text-white m-2 p-2">Products</h6>
//                 <div className="m-2">
//                     {
//                         this.state.products.length === 0
//                             ? <div className="text-center">No Products</div>
//                             : <ProductTable products={this.state.products}/>
//                     }
//                 </div>
//             </div>
//         );
//     }
// }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.fieldRef = React.createRef()

        this.portalFieldRef = React.createRef();
    }

    handleClick = () => {
        this.fieldRef.current.focus()
    }

    focusLocal = () => {
        this.fieldRef.current.focus();
    }
    focusPortal = () => {
        this.portalFieldRef.current.focus();
    }

    // render() {
    //     return (
    //         <div className="m-2">
    //             <FormField label="Name" fieldRef={this.fieldRef}/>
    //             <div className="text-center m-2">
    //                 <button onClick={this.handleClick} className="btn btn-primary">
    //                     Focus
    //                 </button>
    //             </div>
    //         </div>
    //     );
    // }

    // render() {
    //     return <div>
    //         <ForwardFormField label="Name" ref={ this.fieldRef } />
    //         <div className="text-center m-2">
    //             <button className="btn btn-primary"
    //                     onClick={ this.handleClick }>
    //                 Focus
    //             </button>
    //         </div>
    //     </div>
    // }

    render() {
        return <div>
            <PortalWrapper>
                <ForwardFormField label="Name" ref={this.portalFieldRef}/>
            </PortalWrapper>
            <ForwardFormField label="Name" ref={this.fieldRef}/>
            <div className="text-center m-2">
                <button className="btn btn-primary m-1"
                        onClick={this.focusLocal}>
                    Focus Local
                </button>
                <button className="btn btn-primary m-1"
                        onClick={this.focusPortal}>
                    Focus Portal
                </button>
            </div>
        </div>

    }

}

export default App;


