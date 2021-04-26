import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Booktransaction from './screens/booktransaction'
import Searchscreen from './screens/searchscreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

export default function App() {
  return (
   <Appcontainer/>
  );
}

const Tabnavigator = createBottomTabNavigator({
  Transaction:{screen:Booktransaction},
  Search:{screen:Searchscreen}
})
const Appcontainer = createAppContainer(Tabnavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
