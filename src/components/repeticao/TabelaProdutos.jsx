import React from 'react'
import products from '../../data/produtos'
import '../layout/Table.css'

export default props => {
    const trProd = products.map(product => {
        return (
            <tr key={product.id} className={ product.id%2 == 0 ? 'Par' : 'Impar' } >
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>R$ {product.price.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {trProd}
            </tbody>
        </table>
    )
}