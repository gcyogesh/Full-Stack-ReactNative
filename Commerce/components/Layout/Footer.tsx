import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useRoute, useNavigation } from '@react-navigation/native'

const Footer = () => {

  const route = useRoute();
  const navigation = useNavigation();

  const handleLogOut = ()=>{
    alert("Logout successfully")
    navigation.navigate("login")
  }


  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuContainer} onPress={()=> navigation.navigate("home" as never)}> 
        <AntDesign style={[styles.icon, route.name == 'home' && styles.iconActive]} name="home"/>
        <Text style={[styles.iconText, route.name === 'home' && styles.iconActive]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuContainer} onPress={()=> navigation.navigate("notification" as never)}> 
        <AntDesign style={[styles.icon, route.name == 'notification' && styles.iconActive]} name="bells"/>
        <Text style={[styles.iconText, route.name === 'notification' && styles.iconActive]}>Notification</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuContainer} onPress={()=> navigation.navigate("account" as never)}> 
        <AntDesign style={[styles.icon, route.name == 'account' && styles.iconActive]} name="user"/>
        <Text style={[styles.iconText, route.name === 'account' && styles.iconActive]}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuContainer} onPress={()=> navigation.navigate("cart" as never)}> 
        <AntDesign style={[styles.icon, route.name == 'cart' && styles.iconActive]} name="shoppingcart"/>
        <Text style={[styles.iconText, route.name === 'cart' && styles.iconActive]}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuContainer} onPress={handleLogOut}> 
        <AntDesign style={styles.icon} name="logout"/>
        <Text style={styles.iconText}>Logout</Text>
      </TouchableOpacity>
  
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    
  },
  menuContainer:{
    alignItems:"center",
    justifyContent:"center",
    
  },
  icon:{
    fontSize: 25,
    color: '#000000'
  },
  iconText:{
    color:"#000000",
    fontSize: 10
  },
  iconActive:{  
    color:"blue"
  }

})