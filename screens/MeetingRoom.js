import React , {useState , useEffect} from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import StartMeeting from '../components/StartMeeting'

const MeetingRoom = () => {
  const [name , setName] = useState('')
  const [roomId , setRoomId] = useState('')

  useEffect(() => {
      
     
  }, [])
    return (
        <View style={styles.container}>
            <StartMeeting 
            name={name} 
            setName={setName}
            roomId={roomId}
            setRoomId={setRoomId}
            />
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
