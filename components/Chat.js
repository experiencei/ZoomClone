import React from 'react'
import { StyleSheet, Text, View , SafeAreaView, TextInput } from 'react-native'
import ChatHeader from './ChatHeader'

const Chat = ({ modalVisible ,setModalVisible}) => {
    return (
        <View style={styles.container}>
            <SafeAreaView  style={{ height: "100%"}}>
                <ChatHeader setModalVisible={setModalVisible}/>
                 {/* chat Messages */}
                <View style={styles.chatMessages}>

                </View>
                {/* type message */}
                <View style={styles.chatFormContainer}>
                     <Text style={{color: "white"}}> Send to : Everyone</Text>
                     <View style={styles.chatForm}>
                         <TextInput
                             style={styles.textInput}
                             placeholder="Tap here to chat"
                         />
                     </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
  container: {
      flex : 1,
      backgroundColor : "#1c1c1c"
  },
  chatMessages : {

  }

})
