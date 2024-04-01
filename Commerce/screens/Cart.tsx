import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import PriceTable from '../components/cart/PriceTable';
import Layout from '../components/Layout/Layout';
import CartItem from '../components/cart/CartItem';
// import { useNavigation } from '@react-navigation/native';

const Cart = ({navigation}) => {
  const api = "https://e-commerce-7rma.onrender.com/sportwear";
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(api);
      const result = await response.json();
      setCartItem(result)

    }
    fetchData();
  }, []); // Fetch data again if `api` changes

  return (
    <Layout>
      <ScrollView>
        <Text style={styles.heading}>
          {cartItem?.length > 0 ? `You have ${cartItem?.length} items left in your cart` : 'Oops, not getting any data'}
        </Text>
        {
          cartItem && (
            <>
              <ScrollView>
                {cartItem.map(item => (
                  <CartItem key={item._id} item={item} />
                ))}
              </ScrollView>

              <View>
                <PriceTable title={'Price'} price={999} />
                <PriceTable title={'Tax'} price={1} />
                <PriceTable title={'Shipping'} price={1} />
              </View>
              <View style={styles.grandTotal}>
                <PriceTable title={'Grand Total'} price={1001} />
              </View>
              <TouchableOpacity style={styles.btnCheckout} onPress={()=> navigation.navigate('checkout')}>
                <Text style={styles.btnCheckoutText}>CHECKOUT</Text>
              </TouchableOpacity>
            </>
          )
        }
      </ScrollView>
    </Layout>
  );
};

export default Cart;

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    color: "green",
    marginTop: 10
  },
  grandTotal: {
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderColor: "gray",
    padding: 5,
    margin: 5,
    marginHorizontal: 20,
  },
  btnCheckout:{
    marginTop:20,
    alignItems:"center",
    justifyContent:"center",
    height:40,
    backgroundColor:"#000000",
    width:"90%",
    marginHorizontal:20,
    borderRadius:20,
    marginBottom:20
    

  },
  btnCheckoutText:{
    color:"#ffffff",
    fontWeight:'bold',
    fontSize:18
    
  }
});
