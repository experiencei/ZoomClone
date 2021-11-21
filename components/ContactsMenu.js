import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";


const contactsMenuButtons = [
    {
        type: 'starred',
        
    },
    {
        type: 'contact',
        name : "jessy The",
        photo : require('../assets/home_bg.jpg')
    },
    {
        type: 'contact',
        name : "Experience Iq",
        photo : require('../assets/home_bg.jpg')
    },
    {
        type: 'contact',
        name : "Xperience jr",
        photo : require('../assets/home_bg.jpg')
    },
]

const ContactsMenu = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                    <View style={styles.starredIcon}>
                         <AntDesign name="star" size={30} color="#efefef" />
                    </View>
                    <Text style={styles.text}>
                        Starred
                    </Text>
            </View>
        </View>
    )
}

export default ContactsMenu

const styles = StyleSheet.create({
    container: {

    },
    text : {
        color: "white",
        paddingLeft : 15,
        fontSize : 18
    },
    row : {
        flexDirection : 'row',
        marginTop : 20,
        alignItems : 'center'
    },
    starredIcon :{
        backgroundColor : "#333333",
        width : 55,
        height : 55,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 200
    }
})
