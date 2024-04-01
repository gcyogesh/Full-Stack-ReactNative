import { View, Text, TouchableOpacity , StyleSheet} from 'react-native'
import React from 'react'
import Layout from '../components/Layout/Layout'

const CheckOut = ({navigation}) => {

    const handleCashOnDelivery =()=>{
        alert('Thanks for choosing Cash Method')
    }
    const handleOnline =()=>{
        navigation.navigate("payment");
        alert('Thanks for choosing Online Method')
    }

    
  return (
    <Layout>
    <View style={styles.container}>
      <Text style={styles.heading}>Payment Optins</Text>
      <Text style={styles.price}>Total Amout : $333</Text>
      <View  style={styles.pagymentCard}>
        <Text style={styles.paymentHeading}>How you wanna pay?</Text>
        <TouchableOpacity style={styles.paymentButton} onPress={handleCashOnDelivery}>
        <Text style={styles.paymentButtonText}>Cash On Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentButton} onPress={handleOnline}>
        <Text style={styles.paymentButtonText}>Online(CREDIT | DEBIT CARD)</Text>
        </TouchableOpacity>
      </View>
    </View>
    </Layout>

  )
}

export default CheckOut

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:'center',
        height: "90%",
    },
    heading:{
            fontSize:25,
            fontWeight:"500",
            marginVertical:10
    },
    price:{
        fontSize:20,
        marginBottom:10,
        color:'gray'
    },
    pagymentCard:{
        backgroundColor:'#ffffff',
        width:"90%",
        borderRadius:10,
        padding: 30,
        marginVertical:10, 
    },
    paymentHeading:{
        color:'gray',
        marginBottom:10,

    },
    paymentButton:{
        backgroundColor:"#000000",
        height:40,
        borderRadius:10,
        justifyContent:'center',
        marginVertical:10
    },
    paymentButtonText:{
        color:'#ffffff',
        textAlign:'center',

    }
})