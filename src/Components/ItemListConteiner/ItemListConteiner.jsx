import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../Data/productos'
import { useState, useEffect } from 'react';

const ItemListConteiner = (props) => {
  const [productos,setProductos] = useState([])
  useEffect(() =>{
    getProducts().then((products)=>{
      setProductos(products);
    })
  },[]);
  return (
    <div>Hola, {props.name}, bienvenido a Logic Work! Los mejores compentes de PC al menor precio!. <ItemCount /> <ItemList productos={productos}/> </div>
  )
}

export default ItemListConteiner