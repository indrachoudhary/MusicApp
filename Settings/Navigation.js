import React, {useState} from 'react';
import { StyleSheet, Text, View ,Switch,TouchableOpacity, Image} from 'react-native';
import { Ionicons } from "react-native-vector-icons";



const Navigation = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
        <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ width: "10%", justifyContent: "center", paddingLeft: 5 }}
          >
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Settings")}
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
            <Text style={styles.headertext}>Connect To Apps</Text>
          </View>
          <View style={{ width: "10%" }}></View>
        </View>

        {/*---------Navigation Info--------*/}
        <View style={{width:'100%', alignItems:'center',marginTop:20, marginBottom:20}}>
            <Text style={styles.heading}>
                Navigation
            </Text>
            <Text style={styles.caption}>BE SAFE. DO NOT TOGGLE WITH THE NAVIGATION APP PROMPTS BELOW WHILE DRIVING A MOTOR VEHICLE</Text>
        <View style={{width:'100%', flexDirection:"row"}}>
            <View style={{width:'80%'}}>
            <Text style={{color:"white",marginTop:20}}>Get a reminder to use navigation apps when you're in your Car

            </Text>
            </View>
            <View style={{width:'20%', alignItems:"flex-end", padding:20}}>
            <Switch
              trackColor={{ false: "#767577", true: "#3edbf0" }}
              thumbColor={isEnabled ? "yellow" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            </View>

        </View>
        </View>
         {/*---------Google Maps-------*/}
       <View style={styles.googlemap}>
         <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image style={styles.googleimg}
        source={require("../assets/googlemap.jpeg")}
        />
        <Text style={{color:"white",fontSize:20,fontWeight:"bold",paddingLeft:5}}>Google Maps</Text>
        </View>
        <Text style={{color:"white", fontSize:16, textAlign:'center',marginTop:5}}>Play Music and Podcasts in Googlemaps</Text>
         <View style={{width:"100%",alignItems:"center"}}>
         <View style={styles.connect}>
         <TouchableOpacity>
           <Text style={{color:"white", fontWeight:"600",fontSize:15}}>Connect</Text>
         </TouchableOpacity>
         </View>
         </View>

       </View>

                {/*-------------Waze------------*/}
                <View style={styles.googlemap}>
         <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image style={styles.googleimg}
        source={require("../assets/waze.jpeg")}
        />
        <Text style={{color:"white",fontSize:20,fontWeight:"bold",paddingLeft:5}}>Waze</Text>
        </View>
        <Text style={{color:"white", fontSize:16, textAlign:'center',marginTop:5}}>Control your music while navigating</Text>
         <View style={{width:"100%",alignItems:"center"}}>
         <View style={styles.connect}>
         <TouchableOpacity>
           <Text style={{color:"white", fontWeight:"600",fontSize:15}}>Get App</Text>
         </TouchableOpacity>
         </View>
         </View>

       </View>

        </View>
    )
}

export default Navigation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems:'center'
      },
      caption:{
          fontSize:15,
          color:'#3edbf0',
          textAlign:"center",
          marginTop:30,
      },
      heading:{
          fontSize:20,
          fontWeight:"600",
          color:'white'
      },
      header: {
        backgroundColor: "#3edbf0",
        width: "100%",
        height: 60,
        flexDirection: "row",
      },
      headertext: {
        fontSize: 22,
        fontWeight: "bold",
      },
      googlemap:{
          height:150,
          width:'95%',
          backgroundColor:'#172026',
          marginTop:10,
          borderRadius:20
      },
      googleimg:{
          height:60,
          width:60,
      },
      connect:{
        backgroundColor:"#172026",
        borderColor:"white",
        borderWidth:1,
        height:40,
        width:100,
        justifyContent:"center",
        alignItems:"center",
        marginTop:10,
        borderRadius:10
      }
});
