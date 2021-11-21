import React , {useState} from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const MeetingRoom = () => {
  const [name , setName] = useState('')

    return (
        <View style={styles.container}>
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

                 </View>
            </View>
        </View>
    )
}

export default MeetingRoom

const styles = StyleSheet.create({
    container: {
         backgroundColor : "#1c1c1c",
         flex: 1,
    },
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
    }
})
