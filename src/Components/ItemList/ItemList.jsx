import React from 'react'

const ItemList = ({productos}) => {
  return (
    <div>{productos.map((producto) => {return <p>{producto.name}</p>})}</div>
  )
}

export default ItemList