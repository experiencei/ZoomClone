import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/Home';
import MeetingRoom from './screens/MeetingRoom';

function Modification() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Home}>
                  <Stack.Screen
                      name="Home"
                      component={Home}
                      options={{headerShown : false}}
                  />
                  <Stack.Screen
                      name="Room"
                      component={MeetingRoom}
                      options={{title : "Start a Meeting",
                      headerStyle : {
                          backgroundColor : "#1c1c1c",
                          shadowOpacity : 0,
                      },
                      headerTintColor : "white"
                      }}
                  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Modification

const styles = StyleSheet.create({})










