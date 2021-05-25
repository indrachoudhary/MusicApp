import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MyDownload from '../MyMusic/MyDownload';
import MyFavs from '../MyMusic/MyFavs';
import Mylibrary from '../MyMusic/MyLibrary';
import { AntDesign } from '@expo/vector-icons';


const MyMusic = (props) => {
    return (
        <View style={styles.container}>
             {/*--------------------------------Header-----------------------------*/}
            <View style={styles.header}>
                
                <View style={{alignItems:'center', width:'100%'}}>
                <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>
                    Mymusic
                </Text>
                </View>
                
                
            </View>
             {/*--------------------------------My Download-----------------------------*/}
            <TouchableOpacity onPress={()=> props.navigation.navigate('MyDownload')}
            style={{width:'100%',height:50}}
            activeOpacity={0.5} >
                <View style={styles.list}>
                    <View style={{width:'10%',justifyContent:'center', alignItems:'center', }}>
                    <AntDesign name="playcircleo" size={35} color="white" />
                    </View>
                    <View style={{width:'80%', justifyContent:'center'}}>
                    <Text style={{color:"white"}}>MyDownload</Text>
                    <Text style={{color:"white"}}>6 songs</Text>
                    </View>
                    <View style={{width:'10%',justifyContent:'center', alignItems:'center', alignItems:'flex-end'}}>
                    <AntDesign name="right" size={30} color="white" />
                    </View>
                </View>
            </TouchableOpacity>
             {/*--------------------------------My Favs-----------------------------*/}
            <TouchableOpacity onPress={()=> props.navigation.navigate('MyFavs')}
            style={{width:'100%',height:50}}
            activeOpacity={0.5} >
                <View style={styles.list1}>
                <View style={{width:'10%',justifyContent:'center', alignItems:'center',}}>
                    <AntDesign name="playcircleo" size={35} color="white" />
                    </View>
                    <View style={{width:'80%', justifyContent:'center'}}>
                    <Text style={{color:"white"}}>MyFavs</Text>
                    </View>
                    <View style={{width:'10%',justifyContent:'center', alignItems:'center', alignItems:'flex-end'}}>
                    <AntDesign name="right" size={35} color="white" />
                    </View>
                    
                </View>    
            </TouchableOpacity>
             {/*--------------------------------My Library-----------------------------*/}
            <TouchableOpacity onPress={()=> props.navigation.navigate('MyLibrary')}
            style={{width:'100%',height:50}}
            activeOpacity={0.5} >
                <View style={styles.list2}>
                <View style={{width:'10%',justifyContent:'center', alignItems:'center'}}>
                    <AntDesign name="playcircleo" size={30} color="white" />
                    </View>
                    <View  style={{width:'80%', justifyContent:'center'}} >
                    <Text style={{color:"white"}}>MyLibrary</Text>
                    </View>
                    <View style={{width:'10%',justifyContent:'center', alignItems:'center', alignItems:'flex-end'}}>
                    <AntDesign name="right" size={30} color="white" />
                    </View>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default MyMusic

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        backgroundColor:'black'
        
    },
    header:{
        flexDirection:'row',
        height:60,
        width:'100%',
        backgroundColor:'#3edbf0',
        alignItems:'center'
    },
    list:{
        height:50,
         width:'100%',
         padding:5,
         flexDirection:'row'
        
        },
     list1:{
            height:50,
             width:'100%',
             padding:5,
             flexDirection:'row'
            
            },
     list2:{
             height:50,
             width:'100%',
             padding:5,
             flexDirection:'row'
                
             },
                
    
})
