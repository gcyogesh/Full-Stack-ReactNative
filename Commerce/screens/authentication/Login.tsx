import { View, Text,Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../components/form/InputBox'

const Login = ({navigation}) => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const loginImage = "https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&w=600"

    const handleLogin  = ()=>{
      if(!email || !password){
          return alert("Please add email or password")
      }
      alert("Login Succeess")
      navigation.navigate("home")
    }
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: loginImage}}/>
      <InputBox placeholder={`Enter your email`} value={email} setValue={setEmail} autoComplete={'email'} />
      <InputBox placeholder={`Enter your Password`} value={password} setValue={setPassword} secureTextEntry={true}/>
      <View style= {styles.btnContainer}>
      <TouchableOpacity style= {styles.loginBtn} onPress={handleLogin}>
        <Text style= {styles.loginBtnText}>Login</Text>
      </TouchableOpacity>
      <Text>
        New Here?{""} <Text style= {styles.link} onPress={()=> navigation.navigate("register")}> Register</Text>
      </Text>
      </View> 
    </View>
  )
}

export default Login

const styles= StyleSheet.create({
        container:{
            justifyContent:'center',
            // alignItems:'center',
            height:"100%"
        },
        image:{
            height:200,
            width:"100%",
            resizeMode:'contain',
           
        },
        loginBtn :{
          backgroundColor:'#000000',
          width:"80%",
          justifyContent:"center",
          height:40,
          borderRadius:10,
          marginVertical:20
          
        },
        btnContainer:{
          justifyContent:'center',
          alignItems:'center',
        },
        loginBtnText:{
          color:'#ffffff',
          textAlign:'center',
          textTransform:'uppercase',
          fontWeight:"500",
          fontSize:18
        },
        link:{
          color:"red",

        }
        
})