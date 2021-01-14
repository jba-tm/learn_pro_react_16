import React from "react";


class TodoCreator extends React.Component{
    constructor(props) {
        super(props);
        this.state = {newItemText: ''}

    }

    updateNewTextValue = (e)=>{
        this.setState({newItemText: e.target.value})
    }

    createNewTodo = ()=>{
        this.props.callback(this.state.newItemText)
        this.setState({newItemText: ''})
    }

    render() {
        return (
            <div className="my-1">
                <input type="text" className="form-control" value={this.state.newItemText}
                       onChange={this.updateNewTextValue}/>
                <button onClick={this.createNewTodo} className="btn btn-primary mt-1">
                    Add
                </button>
            </div>
        );
    }

}

export default TodoCreator