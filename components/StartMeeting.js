import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


const StartMeeting = ({ name , setName , roomId , setRoomId , joinRoom}) => {
    return (
        <View style={styles.startMeetingContainer}>
                 <View style={styles.info}>
                     <TextInput 
                         style={styles.textInput}
                         value={name}
                         placeholder="Enter name"
                         onChangeText={text => setName(text)}
                         placeholderTextColor="#767476"
                     />
                 </View>
                 <View style={styles.info}>
                    <TextInput 
                            style={styles.textInput}
                            value={roomId}
                            placeholder="Enter Room Id"
                            onChangeText={text => setRoomId(text)}
                            placeholderTextColor="#767476"
                        />
                 </View>
                 <View style={{alignItems: 'center'}}>
                      <TouchableOpacity 
                      onPress={() =>joinRoom()}
                      style={styles.startMeetingButton}
                      >
                      <Text style={{color : "white" , fontWeight : "bold"}}>Start Meeting</Text>
                      </TouchableOpacity>
                 </View>
            </View>
    )
}

export default StartMeeting

const styles = StyleSheet.create({
    startMeetingContainer : {

    },
    info : {
        width : "100%",
        backgroundColor : "#373538",
        height: 50 ,
        borderBottomWidth : 1,
        borderTopWidth : 1,
        borderColor : "#484648",
        padding : 12,
       justifyContent : "center",
    },
    textInput:{
        color: "white",
        fontSize : 18
    },
    startMeetingButton : {
        width: 350,
        marginTop : 20,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#0470DC",
        height: 50,
        borderRadius : 15,
    }
})
