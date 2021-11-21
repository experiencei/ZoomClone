import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ChatHeader from './ChatHeader'

const Chat = ({ modalVisible ,setModalVisible}) => {
    return (
        <View style={styles.container}>
            <ChatHeader/>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
  container: {}

})
