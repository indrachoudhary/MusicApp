import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native'
import {Ionicons, SimpleLineIcons, MaterialCommunityIcons} from 'react-native-vector-icons'
import Slider from '@react-native-community/slider'
import { Audio, Video } from 'expo-av';
const MusicPlayer = ({navigation, route}) => {
    const {item} = route.params;
    return (
        <View style={styles.container}>
            <ImageBackground
            style={styles.imagebackground}
            source={item.img}
            blurRadius={8}>
            <View style={styles.header}>
              <View style={{width:"20%", height:"100%",justifyContent:"center",paddingLeft:5}}>
                  <TouchableOpacity onPress={()=> navigation.goBack()}>
                      <Ionicons name="chevron-back" size={30} color="black"/>
                  </TouchableOpacity>
              </View>
              <View style={{width:"60%", height:"100%", justifyContent:"center",flexDirection:"row",alignItems:"center"}}>
                  <Text style={{fontSize:20, fontWeight:"bold", alignItems:"center"}}>Playing Now{" "}</Text>
                  <Ionicons name="volume-medium" size={28} color="black"/>
              </View>
              <View style={{width:"20%",height:"100%",justifyContent:"center",alignItems:"flex-end",paddingRight:15}}>
                  <SimpleLineIcons name="playlist" size={28} color="black"/>
              </View>
            </View>

            <View style={{height:"70%",width:"100%",alignItems:"center"}}>
            <View style={styles.imagebackview}>
            <Image source ={item.img} style={{width:300, height: 300, borderRadius:20,}}/>
            </View>
            <View style={styles.songnamesec}>
                <View>
            <Text style={{color:"black", fontSize:20,fontWeight:"bold"}}>{item.name}</Text>
            <Text style={{color:"black", fontSize:15,fontWeight:"normal"}}>{item.artist}</Text>
            </View>
            <Ionicons name="heart" size={28} color="black"/>
            </View>
            <Slider style={{width:"85%", height:10,marginTop:50 }}
            minimumValue={0}
            maximumValue={1}

            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            />
            <View style={{width:"80%", justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
            <Text style={styles.time}>3:18</Text>
            <Text style={styles.time}>1:05</Text>
            </View>
            </View>
            <View style={{height:"20%",width:"100%",alignItems:"center",flexDirection:"row",borderTopStartRadius:40,borderTopEndRadius:40}}>
                <View style={styles.icon}>
                <MaterialCommunityIcons name="shuffle" size={28} color="black" />
                </View>
                <View style={{
        flex:1,
        justifyContent:"center",
        alignItems:"flex-start",
        padding:40
    }}>
                <Ionicons name="play-back" size={28} color="black" />
                </View>
                <View style={styles.icon}>
                    <TouchableOpacity style={styles.playpause}>
                    <Ionicons name="pause" size={28} color="grey" />
                    </TouchableOpacity>
                </View>
                <View style={{
        flex:1,
        justifyContent:"center",
        alignItems:"flex-end",
        padding:40
    }}>
                <Ionicons name="play-forward" size={28} color="black" />
                </View>
                <View style={styles.icon}>
                <MaterialCommunityIcons name="replay" size={28} color="black" />
                </View>
                
            </View>
            
            </ImageBackground>
        </View>
    )
}

export default MusicPlayer

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"black"
        
    },
    header:{
        height:"10%",
        width:"100%",
        flexDirection:"row",
        alignItems:"center"
    },
    imagebackground:{
        flex:1,
        alignItems:"center",
        width:"100%"
    },
    imagebackview:{
        height:305,
        width:305,
        borderRadius:20,
        elevation:15,
        justifyContent:"center",
        alignItems:"center"
    },
    songnamesec:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        height:50,
        paddingHorizontal:20,
        marginTop:30,
        justifyContent:"space-between"

    },
    time:{
        color:"black",
        fontSize:15,

    },
    icon:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    playpause:{
        height:70,
        width:70,
        borderRadius:70,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black"
    }
})

