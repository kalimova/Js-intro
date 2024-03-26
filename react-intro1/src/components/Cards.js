import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'

const Cards = ({ isDark, setNum, search }) => {
    const [products, setProducts] = useState([])

       useEffect (() => {
            axios("https://fakestoreapi.com/products")
            .then(({ data }) => setProducts(data))
        },[])

    return (
        <>
            <div className='marrgarita'>
{products.map((el) => (
<Margarita product={el} search={search}/>
))}
            </div>
        </>
    )
}

export default Cards

