import React , {useState} from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import StartMeeting from '../components/StartMeeting'

const MeetingRoom = () => {
  const [name , setName] = useState('')
  const [roomId , setRoomId] = useState('')
    return (
        <View style={styles.container}>
            <StartMeeting/>
        </View>
    )
}

export default MeetingRoom

const styles = StyleSheet.create({
    container: {
         backgroundColor : "#1c1c1c",
         flex: 1,
    },
})
