import React from 'react'

const Row = () => {
    return (
        <div>
            <tr>
                <td className="h6">{this.props.ticket.ticket_code}</td>
                <td>{this.props.ticket.name.toUpperCase()}</td>
                <td>{this.props.ticket.department}</td>
                <td>{this.props.ticket.priority}</td>
                <td>{this.props.ticket.message}</td>
                <td>{this.props.ticket.status}</td>
                <td>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" onClick={this.props.handleCheck} />
                            </div>
                        </div>
                        <button className="btn btn-warning" onClick={this.props.handleDelete}>Delete</button>
                    </div>
                </td>
            </tr>
        </div>
    )
}

export default Row
