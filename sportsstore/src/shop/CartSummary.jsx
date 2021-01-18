import React from "react";
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

export class CartSummary extends React.Component {
    getSummary = () => {
        console.log(this.props.cartItems)
        if (this.props.cartItems > 0) {
            return (
                <span>
                    {this.props.cartItems} item(s)
                    ${this.props.cartPrice.toFixed(2)}
                </span>
            )
        } else {
            return (
                <span>
                    Your cart: (empty)
                </span>
            )
        }
    }

    getLinkClasses = () => {
        return `btn btn-sm bg-dark text-white ${this.props.cartItems > 0 ? '' : 'disabled'}`
    }

    render() {
        return (
            <div className="float-right">
                {this.getSummary()}
                <Link to="/shop/cart" className={this.getLinkClasses()}>
                    <FontAwesomeIcon icon={faShoppingCart}/>
                </Link>
            </div>
        );
    }
}