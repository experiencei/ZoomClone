import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigatorContainer } from "@react-navigation/native";
import Home from './screens/Home';
import MeetingRoom from './screens/MeetingRoom';

function Modification() {
    const Stack = createStackNavigator();

    return (
        <NavigatorContainer>
            <Stack.Navigator initialRouteName={Home}>
                  <Stack.Screen
                      name="Home"
                      component={Home}
                  />
                  <Stack.Screen
                      name="Room"
                      component={MeetingRoom}
                  />
            </Stack.Navigator>
        </NavigatorContainer>
    )
}

export default Modification

const styles = StyleSheet.create({})










