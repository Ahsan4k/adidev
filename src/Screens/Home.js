import {StyleSheet, Text, View, Button, Dimensions} from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Home(props) {
  return (
    <View style={styles.background}>
      <Button
        title="Verizon"
        onPress={() => props.navigation.navigate('Verizon')}
      />
      <Button
        title="Best Buy"
        onPress={() => props.navigation.navigate('BestBuy')}
      />
      <Button
        title="Carrier 360"
        onPress={() => props.navigation.navigate('Carrier')}
      />
      <Button
        title="BreakingBad"
        onPress={() => props.navigation.navigate('BreakingBad')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
