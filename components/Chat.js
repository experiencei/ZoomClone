import React from 'react'
import { StyleSheet, Text, View , SafeAreaView } from 'react-native'
import ChatHeader from './ChatHeader'

const Chat = ({ modalVisible ,setModalVisible}) => {
    return (
        <View style={styles.container}>
            <SafeAreaView  style={{ height: "100%"}}>
                <ChatHeader setModalVisible={setModalVisible}/>
            </SafeAreaView>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
  container: {}

})
