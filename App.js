import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigatorContainer } from "@react-navigation/native";
import Modification from './Modification';



export default function App() {
  return (
    <Modification/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
