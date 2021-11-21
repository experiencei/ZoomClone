import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigatorContainer } from "@react-navigation/native";
import Home from './screens/Home';
import MeetingRoom from './screens/MeetingRoom';

const Navigation = () => {
    const Stack = createStackNavigator();

    return (
        <NavigatorContainer>
            <Stack.Navigator>
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

export default Navigation

const styles = StyleSheet.create({})
