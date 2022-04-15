import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Verizon(props) {
  const data = [
    {
      text: 'Chat with us',
    },
    {
      text: 'We ll call you',
    },
    {
      text: 'Call us',
    },
    {
      text: 'Shop with us',
    },
    {
      text: 'Visit us',
    },
  ];

  return (
    <View style={styles.background}>
      <Text
        style={{width: width * 0.8}}
        onPress={() => props.navigation.goBack()}>
        Go Back
      </Text>
      <View style={{width: width * 0.8, marginTop: height * 0.02}}>
        <Text style={{fontWeight: 'bold', fontSize: scale(20), color: 'black'}}>
          Hi, Rene
        </Text>
        <Text>Here are ways for you to get in touch</Text>
      </View>
      <View style={{width: width * 0.8}}>
        {data.map((item, index) => (
          <View style={{marginVertical: height * 0.03}} key={index}>
            <Text>{item.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
