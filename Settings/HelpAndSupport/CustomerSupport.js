import React from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons , FontAwesome, MaterialIcons} from "react-native-vector-icons";

const CustomerSupport = (props) => {
    return (
        <View style={styles.container}>
            {/*--------------------Header-------------------*/}
        <View style={styles.header}>
        
          <View style={{ width: "10%", justifyContent: "center", paddingLeft: 5 }}>
              <TouchableOpacity onPress={()=> props.navigation.navigate("Settings")}>
              <Ionicons name="chevron-back" size={30} color="black" />
              </TouchableOpacity>
          </View>
         
          <View style={{ width: "80%",alignItems: "center",justifyContent: "center",}}>
            <Text style={styles.headertext}>Customer Support</Text>
          </View>
  
          <View style={{ width: "10%" }}></View>
       
        </View>
        <ScrollView style={{width:"100%"}}
        contentContainerStyle={{alignItems:"center"}}>
       
        {/*-----------------------------------Contact Us-----------------------------------*/}
        
        <Text style={{color:"white", fontSize:18, fontWeight:"600", marginTop:10}}>Contact Us</Text>
        
         {/*------------------------------------Phone--------------------------------------*/}
        
        <TouchableOpacity onPress={()=> {}} style={styles.contact}>
        <View style={styles.list}>
        <FontAwesome name="phone" size={24} color="white"/>
        <Text style={{color:"white",marginTop:1.5, fontWeight:"600", fontSize:16}}>
            {"   "}:{"   "}1234567890
        </Text>
        </View>
        </TouchableOpacity>
        {/*------------------------------------Email--------------------------------------*/}
        <TouchableOpacity  onPress={()=> {}} style={styles.contact}>
        <View style={styles.list}>
        <MaterialIcons name="email" size={24} color="white" />
        <Text style={{color:"white",marginTop:1, fontWeight:"600", fontSize:16}}>
            {"   "}:{"   "}xyz@gmail.com
        </Text>
        </View>
        </TouchableOpacity>
        {/*------------------------------------FAQ header--------------------------------------*/}
        <Text style={{color:"white", fontSize:16,fontWeight:"600", marginBottom:10, paddingTop:20}}>FAQ</Text>
        {/*------------------------------------FAQ--------------------------------------*/}
           <View style={{width:"100%"}}>
           {/*Couldn't download songs*/}
           <TouchableOpacity style={styles.que}>
           <View >
             <Text style={{color:"white"}}>Couldn't download song?</Text>
           </View>
           </TouchableOpacity>
            {/*Equalizer not working*/}
           <TouchableOpacity style={styles.que}>
           <View >
             <Text style={{color:"white"}}>Equalizer not working?</Text>
           </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.que}>
           <View >
             <Text style={{color:"white"}}>Streaming Issues?</Text>
           </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.que}>
           <View >
             <Text style={{color:"white"}}>Not showing downloads?</Text>
           </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.que}>
           <View >
             <Text style={{color:"white"}}>Podcast Issues?</Text>
           </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.que}>
           <View >
             <Text style={{color:"white"}}>Player not working?</Text>
           </View>
           </TouchableOpacity>
           </View>
           <TextInput
           placeholder="Enter your Query"
           placeholderTextColor="#3edbf0" 
           style={styles.query}/>
          

          <View style={styles.submit}>
            <TouchableOpacity>
              <Text style={{fontSize:18,fontWeight:"bold",color:"black"}}>Submit</Text>
            </TouchableOpacity>
          </View>
          
          
           </ScrollView>

        </View>
        
    )
}

export default CustomerSupport

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
    contact:{
        width:"100%",
         paddingLeft:10, 
         flexDirection:"row",
         marginTop:10,
        },
    list:{
         width:"100%", 
         paddingLeft:10, 
        flexDirection:"row",
        marginTop:10},
    que:{
      height:40,
      padding:10,
      borderWidth:2,
      borderRadius:20,
      borderColor:"#3edbf0",
      alignItems:"center",
      justifyContent:"center",
      margin:5
    },
    query:{
      width:"70%",
      maxWidth:700,
      height:40,
      borderRadius:20,
      backgroundColor:"#111111",
      paddingLeft:10,
      fontSize:16,
      marginTop:20,
      
    },
    submit:{
      width:100,
      height:40,
      alignItems:"center",
      justifyContent:"center",
      marginTop:20,
      borderRadius:20,
      backgroundColor:"#3edbf0"
    }
})

