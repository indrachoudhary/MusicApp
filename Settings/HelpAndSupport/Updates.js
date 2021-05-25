import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import { Ionicons, MaterialIcons } from "react-native-vector-icons";
const Updates = (props) => {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
          
          <View style={{ width: "10%", justifyContent: "center", paddingLeft: 5 }} > 
           <TouchableOpacity onPress={()=> props.navigation.navigate("Settings")}>
              <Ionicons name="chevron-back" size={30} color="black" />
              </TouchableOpacity> 
          </View>
         
          <View style={{ width: "80%", alignItems: "center", justifyContent: "center", }}>
            <Text style={styles.headertext}>Updates</Text>
          </View>
  
          <View style={{ width: "10%" }}></View>
        </View>
    
    
      {/*------------------------------Bell------------------------------------------*/}
        <Image source={require('../../assets/Bell.jpeg')} style={styles.bell}/>
        <View style={{width:"100%",padding:10}} >

          {/*--------------------------Update Info--------------------------*/}
         <Text style={{fontSize:17,padding:10, fontWeight:"600", color:"white"}}>
           Software Update Information</Text> 
           <Text style={styles.updateInfo}>. version : I123456789</Text>
           <Text style={styles.updateInfo}>. size : 20.21</Text>
           <Text style={styles.updateInfo}>Security Patch Level : 19th April 2021</Text>  
        </View>
        {/*--------------------------------What's new-------------------------*/}
        <View style={{width:"100%",padding:10}}>
        <View style={{flexDirection:"row",width:"100%"}}>
          <Text style={{fontSize:17,padding:10, fontWeight:"600", color:"white"}}>
            What's New
          </Text>
          <MaterialIcons name="celebration" size={30} color="white" />
          </View>
         
          <Text style={styles.updateInfo}>Updated Podcast</Text>
           <Text style={styles.updateInfo}>New Navigation Feature Available</Text>
           <Text style={styles.updateInfo}>Improved Streaming Quality</Text>
           
        </View>
      
        <View style={{width:"100%",padding:10}}> 
        <Text style={{fontSize:17,padding:10, fontWeight:"600", color:"white"}}>
           Learn more at:</Text> 
        <Text style={styles.updateInfo}>http://doc.horenmusik.com/kyugulhiou8iy7t6r/doc.com</Text>
        </View>
        </View>
        
    )
}

export default Updates

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems:"center"
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
    bell:{
     height:200,
     width:200,
     marginTop:30 ,
     marginBottom:20
    },
    updateInfo:{
      fontWeight:"400",
      color:"grey",
      fontSize:15,
      marginLeft:10,
      marginTop:5
    }
})


