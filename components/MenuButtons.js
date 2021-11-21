import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"


const items = [
  {
      id : 1,
      name : "video-camera",
      title : "New Meeting"
  },
  {
      id : 2,
      name : "plus-square",
      title : "join"
  },
  {
      id : 3,
      name : "calendar",
      title : "Schedule"
  },
  {
      id : 1,
      name : "upload",
      title : "Share Screen"
  },
]


const MenuButtons = () => {
    return (
        <View style={styles.container}>
        {/* {items.map((index , {title , name} ) =>( */}
            <View style={styles.buttonContainer} >
                <TouchableOpacity
                style={styles.button}>
                     <FontAwesome name="video-camera" size={23} color="#efefef" />
                </TouchableOpacity>
                <Text style={styles.menuText}>
                New Meeting
                </Text>
            </View>
            <View style={styles.buttonContainer} >
                <TouchableOpacity
                style={styles.button}>
                     <FontAwesome name="plus-square" size={23} color="#efefef" />
                </TouchableOpacity>
                <Text style={styles.menuText}>
                join
                </Text>
            </View>
            <View style={styles.buttonContainer} >
                <TouchableOpacity
                style={styles.button}>
                     <FontAwesome name="calendar" size={23} color="#efefef" />
                </TouchableOpacity>
                <Text style={styles.menuText}>
                 Schedule
                </Text>
            </View>
            <View style={styles.buttonContainer} >
                <TouchableOpacity
                style={styles.button}>
                     <FontAwesome name="upload" size={23} color="#efefef" />
                </TouchableOpacity>
                <Text style={styles.menuText}>
                  Share Screen
                </Text>
            </View>
        {/* )} */}
           
        </View>
    )
}

export default MenuButtons

const styles = StyleSheet.create({
    container: {
        marginTop : 25,
        paddingBottom : 10,
        borderBottomColor: "#1F1F1F",
        borderBottomWidth : 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonContainer : {
           alignItems : "center",

    },
    menuText : {
        color: "#858585",
        fontSize:12,
        paddingTop : 10,
        fontWeight: "700"
    },
    button : {
        width : 50,
        height : 50,
        backgroundColor :"blue",
        borderRadius : 15,
        justifyContent : "center",
        alignItems : "center",
    }
})
