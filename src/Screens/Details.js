import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Details = props => {
  const item = props.route.params;

  return (
    <View style={styles.background}>
      <View>
        <Image
          source={{uri: `${item.img}`}}
          resizeMode="contain"
          style={{width: width * 0.5, height: height * 0.4}}
        />
        <View style={{alignSelf: 'center'}}>
          <Text
            style={{fontSize: scale(20), fontWeight: 'bold', color: 'black'}}>
            {item.name}
          </Text>
          <Text
            style={{fontSize: scale(20), fontWeight: 'bold', color: 'black'}}>
            {item.occupation[0]}
          </Text>
          <Text
            style={{fontSize: scale(20), fontWeight: 'bold', color: 'black'}}>
            {item.status}
          </Text>
          <Text
            style={{fontSize: scale(20), fontWeight: 'bold', color: 'black'}}>
            {item.nickname}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
