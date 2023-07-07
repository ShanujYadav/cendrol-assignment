import React,{useState} from 'react';
import { Alert, Dimensions, View } from 'react-native'
import { Card, Text } from 'react-native-paper'
import img from './heart.png'
import { TouchableOpacity } from 'react-native';
const MainCard = (props) => {
  console.log(props.item)
  return (
    <View>
      <Card style={{ backgroundColor: '#fff' }} contentStyle={{ width: Dimensions.get("window").width }}>
        <Card.Content>
          <TouchableOpacity onPress={()=>navigation.navigate('Details')}>
        <Text
            textBreakStrategy='highQuality'
            variant='headlineSmall'
            style={{ textAlign: 'left', marginVertical: 10 }}>{props.item.title}</Text>
            </TouchableOpacity>
        </Card.Content>
      </Card>
    </View>
  )
}

export default MainCard;