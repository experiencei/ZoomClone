import React , {useState , useEffect} from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import StartMeeting from '../components/StartMeeting'
import { io } from "socket.io-client";
 
const MeetingRoom = () => {
  const [name , setName] = useState('')
  const [roomId , setRoomId] = useState('')

  let socket;


  useEffect(() => {
      const API_URL = "http://localhost:3001"
         socket =io(`${API_URL}`)
      socket.on("connection" , ()=> {

      })
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
