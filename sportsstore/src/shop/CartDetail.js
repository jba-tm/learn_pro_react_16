import React from "react";
import {Link} from 'react-router-dom'
import {CartDetailsRows} from "./CartDetailsRows";

export class CartDetail extends React.Component {
    getLinkClasses = () => {
        return `btn btn-sm bg-dark text-white ${this.props.cartItems > 0 ? '' : 'disabled'}`
    }

    render() {
        return (
            <div className="m-3">
                <h2 className="text-center">Your cart</h2>
                <table className="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Product</th>
                        <th className="text-right">Price</th>
                        <th className="text-right">Subtotal</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    <CartDetailsRows cart={this.props.cart}
                                     cartPrice={this.props.cartPrice}
                                     updateQuantity={this.props.updateCartQuantity}
                                     removeFromCart={this.props.removeFromCart}/>
                    </tbody>
                </table>
                <div className="text-center">
                    <Link to="/shop" className="btn btn-primary m-1" >
                        Continue shopping
                    </Link>
                    <Link to="/shop/checkout" className={this.getLinkClasses()}>
                        Checkout
                    </Link>
                </div>
            </div>
        );
    }
}