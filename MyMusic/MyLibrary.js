import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from "react-native-vector-icons";
const Mylibrary = (props) => {
    return (
<View style={styles.container}>
     {/*----------------------------------------header---------------------------------*/}
        <View style={styles.header}>
          <View
            style={{ width: "10%", justifyContent: "center", paddingLeft: 5 }}
          >
            <TouchableOpacity
              onPress={() => props.navigation.navigate("MyMusic")}
            >
              <Ionicons name="chevron-back" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "80%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.headertext}>My Library</Text>
          </View>
  
          <View style={{ width: "10%" }}></View>
        </View>
        
        </View>
        
    )
}

export default Mylibrary

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
