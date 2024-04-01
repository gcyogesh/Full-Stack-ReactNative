import { View, Text, StyleSheet , Image, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'

const CartItem = ({item}) => {
  const [quantity, setQuantity] = useState(1)

  const handleAdd =()=>{ 
    if(quantity === 10) return alert("Enoughhhhhhhhh")
   
    setQuantity((prev)=> prev+1)
    
  }
  const handleMinus =()=>{
    if(quantity === 1) return alert("Broke MF")
    setQuantity((prev)=> prev-1)
  }



    // console.log(item)
  return (
    <View style= {styles.container}> 
    <Image source={{uri: `https://e-commerce-7rma.onrender.com/users/${item.image}` }} style={styles.image}/>
    <View>
      <Text style={styles.productName}>{item.productName}</Text>
      <Text style={styles.productName}>${item.price}</Text>
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
  )
}

export default CartItem;


const styles = StyleSheet.create({
    container:{
        margin:10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:"center",
    },
    image:{
        height:50,
        width:50,
        resizeMode:'contain',
    },
    productName:{
      fontSize:10
    } ,

    btnContainer:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',
      marginVertical : 20,
      marginHorizontal:10

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