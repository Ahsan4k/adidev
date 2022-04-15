import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Carrier(props) {
  const data = [
    {
      region: 'Atlanta, GA',
      time: '8:00am EST',
      date: 'Feb 18',
    },
    {
      region: 'Dallas, TX',
      time: '1:00pm CST',
      date: 'Feb 20',
    },
  ];

  return (
    <View style={styles.background}>
      <Text onPress={() => props.navigation.goBack()}>Go Back</Text>
      {data.map((item, index) => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: width * 0.8,
            alignItems: 'center',
            marginVertical: height * 0.02,
            alignSelf: 'center',
          }}
          key={index}>
          <View>
            <Text>{item.region}</Text>
            <Text>{item.time}</Text>
          </View>
          <View>
            <Text>{item.date}</Text>
          </View>
        </View>
      ))}
      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: width * 0.8,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: scale(3),
            borderColor: 'blue',
            width: width * 0.3,
            height: height * 0.06,
            borderRadius: scale(10),
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'blue',
            }}>{`Upload\nDocuments`}</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'blue',
            width: width * 0.3,
            height: height * 0.06,
            borderRadius: scale(10),
          }}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>
            Create Invoice
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    backgroundColor: 'white',
  },
});
