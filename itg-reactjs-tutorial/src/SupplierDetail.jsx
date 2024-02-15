import React from 'react'
import { useParams } from 'react-router-dom'

function SupplierDetail() {

    const {id} = useParams();

  return (

    <>
    <h1>Detail</h1>
    <h1>Id: {id} </h1>
    </>
  )
}

export default SupplierDetail