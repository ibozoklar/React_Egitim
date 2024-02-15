import React from 'react'

function ProductBox(props) {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>UnitPrice: {props.unitPrice}</h2>
    <hr />
    <ul>
        {
            props.points.map(item => <li>{item}</li>)
        }
    </ul>
    </>
  )
}

export default ProductBox