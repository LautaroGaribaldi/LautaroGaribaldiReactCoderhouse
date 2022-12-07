import React from 'react'
import { useState, useEffect } from 'react';
import { getProducts } from '../../Data/productos'
import { useParams } from 'react-router-dom'

const itemDetailConteiner = () => {
    const[detalleProducto,setDetalleProducto] = useState({});
    const { id } =useParams();
    useEffect(()=> {
        getProducts
                    .then((res)=> setDetalleProducto(res.find((item)=> item.id === id)))
    })
  return (
    <div>itemDetailConteiner</div>
  )
}

export default itemDetailConteiner;
