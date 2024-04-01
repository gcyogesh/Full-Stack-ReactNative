import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import ProductCard from './ProductCard'
import { Product } from '../../AllTsx/Interface'

const Products = () => {
    const [data, setData] = useState<Product[]>([])
    const api = "https://e-commerce-7rma.onrender.com/sportwear"

    const fetchData = async()=>{
       try{
        const response = await fetch(api);
        const result = await response.json();
        setData(result);
       }catch(err){
        console.log(err)
       }

    }

    

    useEffect(()=>{
        fetchData();
    }, [])


  return (
    <View>
       <ProductCard data={data}/>
    </View>
  )
}

export default Products;