import React , {useState , useEffect} from 'react'
import {Modal, StyleSheet, Text, TextInput, TouchableOpacity, View ,SafeAreaView, Alert } from 'react-native'
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
  const [activeUsers , setActiveUsers] = useState(["Experience" , "Makfeni" , "Aloma"])
  const [startCameras , setStartCameras] = useState(false)
  const [modalVisible , setModalVisible] = useState(flase)

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
        //   users = users.filter( user => ( user.userName != name))
        setActiveUsers(users)
      })
  }, [])
    return (
        <View style={styles.container}>
        {startCameras ? (
            <SafeAreaView style={{flex : 1}}>
             <Modal 
               animationType="slide"
               transparent={false}
               presentationStyle={"fullScreen"}
               visible={modalVisible}
               onRequestClose={() => {
                   Alert.alert
               }}
             >



             </Modal>
    
    

            <View style={styles.activeUsersContainer}>
              <View style={styles.cameraContainer}>
                        <Camera
                    type={"front"}
                    style={{
                        width : activeUsers.length <= 1 ?"100%" : 200,
                        height : activeUsers.length <= 1 ?  600 : 200,
                    }}
                    > </Camera>
                    {activeUsers.filter( user => ( user.userName != name)).map((user , index) =>
                    <View key={index} style={styles.activeUserContainer}>
                       <Text style={{color : "white"}}>{user.userName}</Text>
                    </View>
                    )}
              </View>
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
        justifyContent : "center",
        flexDirection : "row",
        flexWrap : "wrap",
        alignItems : "center"
    },
    activeUserContainer : {
        borderColor : "gray",
        borderWidth : 1,
        width : 200,
        height : 200,
        justifyContent : "center",
        alignItems : "center"
    },
    activeUsersContainer : {
        flex: 1,
        width:  "100%",
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "black",
    }
})
