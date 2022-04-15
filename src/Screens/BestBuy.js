import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function BestBuy(props) {
  return (
    <View style={styles.background}>
      <Text onPress={() => props.navigation.goBack()}>Go Back</Text>
      <View style={{alignSelf: 'center'}}>
        <Image
          source={require('../Assets/yoda.jpeg')}
          resizeMode="contain"
          style={{width: width * 0.5, height: height * 0.5}}
        />
      </View>
      <View style={{alignSelf: 'center', width: width * 0.9}}>
        <Text>Star Wars</Text>
        <Text>Star Wars - The Child 8" Plush - Green</Text>
        <Text>Model:GWH23 | SKU:6416340</Text>
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
