import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Verizon from '../Screens/Verizon';
import BestBuy from '../Screens/BestBuy';
import Carrier from '../Screens/Carrier';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verizon"
        component={Verizon}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BestBuy"
        component={BestBuy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Carrier"
        component={Carrier}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
