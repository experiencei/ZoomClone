import React , {useState , useEffect} from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View ,SafeAreaView } from 'react-native'
import StartMeeting from '../components/StartMeeting'
import { io } from "socket.io-client";
import { Camera } from 'expo-camera';
 
let socket;


const MeetingRoom = () => {
  const [name , setName] = useState()
  const [roomId , setRoomId] = useState()
  const [activeUsers , setActiveUsers] = useState()
  const [startCameras , setStartCameras] = useState(false)

  const startCamera = async () => {
      const status = await Camera.requestPermissionAsync();
      if (status === "granted"){
        setStartCameras(true)
      }  else {
          Alert.alert("Access denied")
      }
  }

  const joinRoom = () => {
      startCamera()
      socket.emit('join-room' , {
          roomId : roomId , userName : name
      })
  }

  useEffect(() => {
    //   const API_URL = "http://e70b4b991fc5.ngrok.io"
      socket =io('http://e70b4b991fc5.ngrok.io')
      socket.on("connection" , ()=> {
       
      })
      socket.on("all-users" , users => {
        setActiveUsers(users)
      })
  }, [])
    return (
        <View style={styles.container}>
        {startCameras ? (
            <SafeAreaView>
            <Camera
           type={"front"}
           style={{
               width : "100%",
               height : 600,
           }}
        > </Camera>
        </SafeAreaView>) : (
            <StartMeeting 
            name={name} 
            setName={setName}
            roomId={roomId}
            setRoomId={setRoomId}
            joinRoom={joinRoom}
            />
        )}
          
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
