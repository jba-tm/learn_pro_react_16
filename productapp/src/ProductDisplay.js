import React from "react";

export class ProductDisplay extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selectedProduct: null
        }
    }

    startEditing=()=>{
        this.setState({showEditor: true, selectedProduct: {}})
    }


}