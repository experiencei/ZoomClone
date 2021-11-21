import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
const Header = () => {
    return (
        <View style={styles.container}>
            <Entypo name="notification" size={30} color="#efefef" />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
  container: {
      
  }
})
