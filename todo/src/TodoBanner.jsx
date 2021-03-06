import React from "react";

class TodoBanner extends React.Component{
    render() {
        return (
            <h4 className="bg-primary text-white text-center p-2">
                {this.props.name}'s To Do List
                ({this.props.tasks.filter(t=>!t.done).length} items to do)
            </h4>
        );
    }
}

export default TodoBanner