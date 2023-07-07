import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const Details = ({route}) => {
  const title=route.params.title;
  const desc=route.params.desc;
  const date=route.params.date;
  return (
    <ScrollView>
      <View style={{alignItems: 'center',marginVertical: 15}}>
        <Text style={{fontSize:25,color:'#80bfff',}}>{title}</Text>
      </View>
      <View style={{paddingLeft:5}}>
      <Text style={{fontSize:15,color:'gray',}}>{date}</Text>
      </View>
      <View style={{alignItems:'center',marginHorizontal:5,textAlign: 'justify' }}>
      <Text style={{fontSize:20}}>{desc}</Text>
      </View>
    </ScrollView>
  )
}

export default Details

const styles = StyleSheet.create({})