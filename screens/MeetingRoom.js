import React , {useState , useEffect} from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View ,SafeAreaView } from 'react-native'
import StartMeeting from '../components/StartMeeting'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { io } from "socket.io-client";
import { Camera } from 'expo-camera';
 
let socket;


const menuIcons = [
    {
        id : 1,
        name : "microphone",
        title : "Mute",
        customColor : "#efefef"
    },
    {
        id : 2,
        name : "video-camera",
        title : "Stop Video",
        
    },
    {
        id : 3,
        name : "upload",
        title : "Share Content",
    },
    {
        id : 4,
        name : "group",
        title : "Participants",
    },
]

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
            <SafeAreaView style={{flex : 1}}>
              <View style={styles.cameraContainer}>
                        <Camera
                    type={"front"}
                    style={{
                        width : "100%",
                        height : 600,
                    }}
                    > </Camera>
              </View>
           
          <View style={styles.menu}>
          {menuIcons.map((icon , index) => 
                 <TouchableOpacity
                      style={styles.tile}
                      key={index}
                 >
                     <FontAwesome name={icon.name} size={24} color="#efefef" />
                     <Text style={styles.textTile}>{icon.title}</Text>
                 </TouchableOpacity>   
                 )}
          </View>
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
    tile : {
        justifyContent : "center",
        alignItems : "center",
        marginTop : 15,
        height : 50,
    },
    textTile : {
        color: "white",
        marginTop :10
    },
    menu :{
        flexDirection : "row",
        justifyContent : "space-around"
    } ,
    cameraContainer : {
        flex: 1,
        backgroundColor : "black"
    }
})
