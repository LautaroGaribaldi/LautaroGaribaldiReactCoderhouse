import React from 'react'
import { useState } from 'react';

const ItemCount = () => {
const stock = 22;
const [cantidad, setCantidad] = useState(0);
const sumar = () => {if(cantidad<stock){setCantidad(cantidad + 1)}};
const restar = () => {if (cantidad >0){setCantidad(cantidad - 1)}};
const comprar = () =>{document.getElementById("cardWidget").innerHTML = (parseInt(document.getElementById("cardWidget").innerHTML) + cantidad)}

  return (
    <div>
        <input type="button" value="-" onClick={restar}></input>
        <input type="number" value={cantidad}/>
        <input type="button"  value="+" onClick={sumar}></input>
        <button onClick={comprar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount