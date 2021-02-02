import React from "react";

export class Message extends React.Component {
    static defaultProps = {
        name: 'Stranger',
        greeting: 'Greeting',

    }

    render() {
        const props = this.props;
        let classes;
        switch (props.name) {
            case "Bob":
                classes = "bg-warning p-2";
                break;
            case "Dora":
                classes = "bg-secondary text-white text-center p-2"
                break;
            default:
                classes = "bg-success text-white text-center p-2"
        }
        return <h4 className={classes}>
            {props.greeting}, {props.name}
        </h4>
    }
}