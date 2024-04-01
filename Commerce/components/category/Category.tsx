import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { categoryData } from '../../data/CategoryData'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { categoryItem } from '../../AllTsx/Interface';


const Category = () => {
    const navigation = useNavigation();
  return (
    <ScrollView horizontal = {true} showsHorizontalScrollIndicator= {false}>
    <View style={styles.container}>
        {categoryData.map((item:categoryItem)=>(

            <View key={item._id} >
            <TouchableOpacity style={styles.catContainer} onPress={()=> navigation.navigate(item.path)}>
                <FontAwesome name={item.icon} style={styles.catIcon}/>
                 <Text style={styles.catTitle}> {item.name}</Text>
            </TouchableOpacity>
        </View>
            ))}
      
    </View>
    </ScrollView>
  )
}

export default Category


const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        padding:5,
        flexDirection:'row'

    },
    catContainer :{
        padding: 15,
        justifyContent: 'center',
        alignItems:'center',
        
    },
    catIcon:{
        fontSize: 28,
        verticalAlign: 'top'
    },
    catTitle:{
        fontSize: 12
    }
})