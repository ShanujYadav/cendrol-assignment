import { useState, useEffect } from 'react';
import { Alert, Dimensions } from 'react-native'
import { Card, Text } from 'react-native-paper'
import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
const API_KEY = "pub_21219108bca5c978c2e3c14614477699bb018";

const Home = ({navigation}) => {
  const MainCard=(props)=>{
    return (
      <View style={{marginTop:20}}>
        <Card style={{ backgroundColor: '#fff' }} contentStyle={{ width: Dimensions.get("window").width }}>
          <Card.Content style={{textAlign: 'justify'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Details',{
              title:props.item.title,
              desc:props.item.content,
              date:props.item.pubDate,
            })}>
          <Text
              textBreakStrategy='highQuality'
              variant='headlineSmall'
              style={{ textAlign: 'left', marginVertical: 10 ,color:'#80bfff'}}>{props.item.title}</Text>
              </TouchableOpacity>
          </Card.Content>
        </Card>
      </View>
    )
    }
    const [data, setData] = useState([])
    useEffect(() =>{
        async function getData(){
        const res = await fetch(`https://newsdata.io/api/1/news?apikey=${API_KEY}&country=in&language=en`)
        const response = await res.json()
        setData(response.results)
        console.log(data)
    }getData()
  },[])
 
    return (
      <FlatList 
       keyExtractor={(item)=>item.title}
       data={data}
       renderItem={MainCard}
       />
    )
          }

        

export default Home;
const styles = StyleSheet.create({})

1323334005