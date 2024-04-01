import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Product } from '../../AllTsx/Interface'

const ProductCard = ({data}) => {
  const navigation = useNavigation();

  // more details button 
  const handleDetails = (id: string) => {
    navigation.navigate("productDetails" , {id:id});
    console.log(id)
}
  //  add to cart 
  const handeleAddCart = ()=>{
    alert("Item addedd mate");

  }


  return (
    <ScrollView contentContainerStyle={styles.container}>
    {data.map((item:Product, index)=>{
      const {_id, image, productName, description } = item;
        return(
          <View key={index} style={styles.card}>
         <Image style= {styles.cardImage} source={{uri:`https://e-commerce-7rma.onrender.com/users/${image}`}}/>
         <Text style={styles.cardTitle}>{productName}</Text>
         <Text style= {styles.cardDescription}>{description.substring(0-20)}...More</Text>
         <View style= {styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={()=> handleDetails(_id)}>
           <Text style={styles.btnText}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCard} onPress={handeleAddCart}>
          <Text style={styles.btnText}>Add to Cart</Text>
          </TouchableOpacity>
         
         </View>
          </View>
        )
      })}
    </ScrollView>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  container: {
     flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  card:{
    display: "flex",
    borderWidth: 1,
    borderColor:"lightgray",
    marginVertical: 5,
    marginHorizontal: 8,
    width: "45%",
    padding: 10,
    backgroundColor: "white",
    justifyContent: "center"
  },
  cardImage:{
   height: 120,
   width: "100%",
   marginBottom: 10
  },
  cardTitle:{
   fontSize: 10,
   fontWeight: "bold",
   marginBottom: 5,

  },
  cardDescription:{
  fontSize: 10,
  textAlign:"left"
  },

  btnContainer:{
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignContent: "center",
  },

  btn:{
   backgroundColor:'#000000',
   height: 20,
   width: 75,
   borderRadius: 5,
   justifyContent: "center"
   
  },
  btnCard:{
   backgroundColor:'orange',
   height: 20,
   width: 75,
   borderRadius: 5,
   justifyContent: "center"
   
  },
  btnText:{
    color: '#ffffff',
    textAlign: "center",
    fontSize: 10,
    fontWeight:"bold",

  }
  
})