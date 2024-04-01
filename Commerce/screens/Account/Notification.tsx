import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout/Layout'

const Notification = () => {
  return (
    <Layout>

    <View style={{justifyContent:'center', alignItems:'center', height:"100%"}}>
      <Text>Oops! You do't have any notification for now .</Text>
    </View>
    </Layout>
  )
}

export default Notification