  import { View, Text , Image, StyleSheet, TouchableOpacity} from 'react-native'
  import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout';

  const ProductDetails = ({ route }) => {
      const { id } = route.params; // Extracting product ID from route params
      const [productDetail, setProductDetail] = useState(null);
      const [quantity, setQuantity] = useState(1)

      // function for plus and minus 
    const handleAdd =()=>{ 
      if(quantity === 10) return alert("Enoughhhhhhhhh")
     
      setQuantity((prev)=> prev+1)
      
    }
    const handleMinus =()=>{
      if(quantity === 1) return alert("Broke MF")
      setQuantity((prev)=> prev-1)
    }

      useEffect(() => {
          const fetchProductDetail = async () => {
              try {
                  const response = await fetch(`https://e-commerce-7rma.onrender.com/sportwear/${id}`);
                  const data = await response.json();
                  setProductDetail(data); // Set product detail state
              } catch (error) {
                  console.error('Error fetching product detail:', error);
              }
          };

          fetchProductDetail(); // Call the fetchProductDetail function
      }, [id]); // Dependency on ID to trigger useEffect when ID changes

      if (!productDetail) {
          return (
              <View>
                  <Text>Loading...</Text>
              </View>
          );
      }

      return (
          <Layout>

              <Image style={styles.image} source={{uri: `https://e-commerce-7rma.onrender.com/users/${productDetail.image}`}}/>
              <View style={styles.container}>
              <Text style={styles.productName}>{productDetail.productName}</Text>
              <Text style={styles.productName}>About:{productDetail.productSubTitle}</Text>
              <Text style={styles.productName}>Price: ${productDetail.price}</Text>
              <Text style={styles.desc}>{productDetail.description}</Text>
              <Text style={{fontWeight:'bold'}}>BrandName:{productDetail.brandName}</Text>
              <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnCard} onPress={()=> alert(`${quantity} added to cart`)}>
                  <Text style={styles.btnCartText}>Add To Cart</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnQty} onPress={handleMinus} >
                    <Text style={styles.btnQtyText}>-</Text>
                </TouchableOpacity>
                <Text >
                  {quantity}
                </Text>
                <TouchableOpacity style={styles.btnQty} onPress={handleAdd}>
                    <Text style={styles.btnQtyText}>+</Text>
                </TouchableOpacity>
              </View>
              </View>
              {/* Render other product details */}
          </Layout>
      );
  }

  export default ProductDetails;

  const styles = StyleSheet.create({
    image:{
        height: 300,
        width:"100%",
    },
    container:{
      marginVertical: 15,
      marginHorizontal: 10
    },

    productName:{
      fontSize: 18,
      textAlign:'left'
    },
    desc:{
      fontSize: 12,
      textTransform: 'capitalize',
      textAlign: 'justify',
    marginVertical:10 ,

    },
    btnContainer:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',
      marginVertical : 20,
      marginHorizontal:10

    },
    btnCard:{
      width: 180,
      backgroundColor: "#000000",
      borderRadius: 5,
      height: 40,
      justifyContent: 'center'
    },
    btnCartText:{
      color:"#ffffff",
      fontWeight:"bold",
      textAlign:"center",
      fontSize: 16
    },
    btnQty:{
      backgroundColor:"lightgray",
      width: 40,
      alignItems: 'center',
      marginHorizontal: 10
    },
    btnQtyText:{
    fontSize:20,
    //  fontWeight:"bold"
    }
    
  })