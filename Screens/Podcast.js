import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from "react-native-vector-icons";
import {LinearGradient} from 'expo-linear-gradient'
import PopularRadioList from '../CustomList/PopularRadioList';

const Podcast = (props) => {
    return (
      <LinearGradient
      style={styles.conatiner}
      colors={["#e1701a", "#ff8303", "#ff8303", "orange", "orange"]}
    >
      <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
        Podcast
      </Text>
      {/*-------------------------------------Content--------------------------------------------------------------------------------------------------------------------- */}
      {/* <PodcastCaraousel /> */}
      <PopularRadioList navigation={props.navigation} />
    </LinearGradient>  
        
    )
}

export default Podcast

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
      },
      header: {
        backgroundColor: "#3edbf0",
        width: "100%",
        height: 60,
        flexDirection: "row",
      },
      headertext:{
        fontSize:18,
        fontWeight:'bold',
        color:'black'
    },
})
