import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from "react-native-vector-icons";

const Podcast = (props) => {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
          <View
            style={{ width: "10%", justifyContent: "center", paddingLeft: 5 }}
          >
           
              <Ionicons name="chevron-back" size={30} color="black" />
           
          </View>
          <View
            style={{
              width: "80%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.headertext}>Podcast</Text>
          </View>
  
          <View style={{ width: "10%" }}></View>
        </View>
        
        </View>
        
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
})
