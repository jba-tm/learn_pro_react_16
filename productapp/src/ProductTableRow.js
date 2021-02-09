import React from "react"

export class ProductTableRow extends React.Component{
    render() {
        let p =this.props.product
        return (
            <tr>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td className="text-right">${Number(p.price).toFixed(2)}</td>
                <td>
                    <button onClick={()=>this.props.editCallback(p)} className="btn btn-sm btn-warning m-1">
                        Edit
                    </button>
                    <button onClick={()=>this.props.deleteCallback(p)} className="btn btn-sm btn-danger m-1">
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}