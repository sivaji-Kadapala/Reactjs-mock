import React, { Component } from 'react'

export default class Props extends Component {
    render() {
        return (
            <div>
                {this.props.data.map((product)=><li key={product.id}>{product.id}</li>)}
            </div>
        )
    }
}
