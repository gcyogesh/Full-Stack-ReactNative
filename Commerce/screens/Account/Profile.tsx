import { View, Text , StyleSheet, ScrollView, Image, Pressable, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import Layout from '../../components/Layout/Layout'
import { userData } from '../../data/UserData';
import InputBox from '../../components/form/InputBox';

const Profile = ({navigation}) => {

    const [email , setEmail] = useState(userData.email);
    const [name , setName] = useState(userData.name);
    const [password , setPassword] = useState(userData.password);
    const [rePassword , setRePassword] = useState(userData.repassword);
    const [profilePic , setProfilePic] = useState(userData.proilepicture);


    // updatProfile
    const handleUpdate  = ()=>{
        if(!email || !password || !name || !rePassword){
          
            return alert("Please add email or password and name")
        }else if(password!==rePassword){
          return alert("You must have same password")
               
        }
        alert("Profile update Succesfull")
        navigation.navigate("account")
      }
    



  return (
    <Layout>
     <View style={styles.container}>
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: profilePic}}/>
                <Pressable onPress={()=> alert("Profile dialogbox")}>
                    <Text style={{color:'red'}}> 
                        Update Your profile Picture
                    </Text>
                </Pressable>
            </View>
                    <InputBox  value={name} setValue={setName} placeholder={"Enter your name" }autoComplete={"name"}/>
                    <InputBox  value={email} setValue={setEmail} placeholder={"Enter your Email" }autoComplete={"email"}/>
                    <InputBox  value={password} setValue={setPassword} placeholder={"Enter your password" }autoComplete={"password"}/>
                    <InputBox  value={rePassword} setValue={setRePassword} placeholder={"Enter your password again" }autoComplete={"password"}/>

                    <TouchableOpacity style={styles.updateBtn} onPress={handleUpdate}>
                        <Text style={styles.btnUpdateText}>Update profile</Text>
                    </TouchableOpacity>
        </ScrollView>
     </View>
    </Layout>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
     marginVertical:20
    },
    imageContainer:{
      justifyContent:'center',
      alignItems:'center'
    },
    image:{
        height:100,
        width:"100%",
        resizeMode:'contain'
    },
    updateBtn:{
        backgroundColor:'#000000',
        height:40,
        borderRadius:20,
        marginHorizontal:30,
        justifyContent:'center',
        marginTop:10,
    },
    btnUpdateText:{
        color:"#ffffff",
        fontSize:18,
        textAlign:'center'
    }


})