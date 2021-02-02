import React from "react";
import PropTypes from "prop-types";

export class SimpleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // counter: 0,
            hasButtonBeenClicked: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.incrementCallback(5)
        this.setState({hasButtonBeenClicked: true});
        this.props.callback();
    }

    render() {
        return (
            <button onClick={this.handleClick} className={this.props.className}
                    disabled={this.props.disabled === "true" || this.props.disabled === true}>
                {this.props.text} {this.props.counter}
                {this.state.hasButtonBeenClicked &&
                <div>Button Clicked!</div>
                }
            </button>
        );
    }

    static defaultProps = {
        disabled: false
    }
    static propTypes = {
        text: PropTypes.string,
        theme: PropTypes.string,
        callback: PropTypes.func,
        disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string ])
    }
}

// SimpleButton.defaultProps = {
//     disabled: false
// }
// SimpleButton.propTypes = {
//     text: PropTypes.string,
//     theme: PropTypes.string,
//     callback: PropTypes.func,
//     disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
// }

// export function SimpleButton(props) {
//     return (
//         <button onClick={ props.callback } className={props.className}
//                 disabled={ props.disabled === "true" || props.disabled === true }>
//             { props.text}
//         </button>
//     )
// }
