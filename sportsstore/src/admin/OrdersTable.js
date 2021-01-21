import React from "react";
import {OrdersRow} from "./OrdersRow";
import {PaginationControls} from "../PaginationControls";

export class OrdersTable extends React.Component {
    render() {
        return (
            <div>
                <h4 className="bg-info text-white text-center p-2">
                    {this.props.totalSize} Orders
                </h4>
                <PaginationControls keys={['ID', 'Name']} {...this.props}/>
                <table className="table table-sm table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th className="text-right">Total</th>
                        <th className="text-center">Shipped</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.orders.map(item =>
                        <OrdersRow key={item.id} order={item}
                                   toggleShipped={() => this.props.toggleShipped(item.id, !item.shipped)}/>)}
                    </tbody>
                </table>
            </div>
        );
    }
}