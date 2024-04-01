import { View, Text, StyleSheet, Image , TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import InputBox from '../../components/form/InputBox'

const Register = ({navigation}) => {


    const [email , setEmail] = useState('');
    const [name , setName] = useState('');
    const [password , setPassword] = useState('');
    const [rePassword , setRePassword] = useState('');
    const loginImage = "https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&w=600"

    const handleRegister  = ()=>{
      if(!email || !password || !name || !rePassword){
        
          return alert("Please add email or password and name")
      }else if(password!==rePassword){
        return alert("You must have same password")
             
      }
      alert("Register Succesfull")
      navigation.navigate("login")
    }






    return(

        <View style={styles.container}>
    <Image style={styles.image} source={{uri: loginImage}}/>
  <InputBox placeholder={`Enter your Name`} value={name} setValue={setName} autoComplete={'name'} />
  <InputBox placeholder={`Enter your email`} value={email} setValue={setEmail} autoComplete={'email'} />
  <InputBox placeholder={`Enter your password`} value={password} setValue={setPassword} secureTextEntry={true} />
  <InputBox placeholder={`Re-Type the password`} value={rePassword} setValue={setRePassword} secureTextEntry={true}/>
  <View style= {styles.btnContainer}>
  <TouchableOpacity style= {styles.loginBtn} onPress={handleRegister}>
    <Text style= {styles.loginBtnText}>Register</Text>
  </TouchableOpacity>
  <Text>
    Already a user? {""} <Text style= {styles.link} onPress={()=> navigation.navigate("login")}>Login here</Text>
  </Text>
  </View> 
</View>
)
}

export default Register


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