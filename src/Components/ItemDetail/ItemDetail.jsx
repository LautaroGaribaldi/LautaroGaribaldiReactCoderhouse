import React from 'react'

const ItemDetail = ({ detalleProducto }) => {
    const { img,name,description,price,stock} = detalleProducto;
    const onAdd = (cantidad) => {
        console.log(`compraste ${cantidad} items`)
    }
  return (
    <div>
        <h2>Detalle de:{name}</h2>
        <img src={img} alt="" />
        <div>
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p>
            <p>{stock}</p>
        </div>
    </div>
  )
}


export default ItemDetail;