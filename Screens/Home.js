import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import MusicList from '../CustomList/MusicList';
import MusicCatog from '../Home/MusicCatog';
import RecentlyPlayed from '../Home/RecentlyPlayed';
import TodaysPick from '../Home/TodaysPick';
import Trending from '../Home/Trending';
const Home = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <View style={{width:'10%'}}>
            <TouchableOpacity onPress={()=> props.navigation.openDrawer()}>
            <MaterialIcons name="menu" size={30} color="black" />
            </TouchableOpacity>
            </View>
            <View style={{width:'80%',alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>
                    MySongs
                </Text>
            </View>
            <View style={{width:'10%'}}>
            </View>
            </View>
            <View style={styles.search}>
                <View style={{width:'90%', flexDirection:'row'}}>
          <FontAwesome name="search" size={24} color="#929695" />
          <TextInput placeholder="Search" style={styles.input} />
          </View>
          <View style={{ width: "10%", alignItems: "flex-end" }}>
            <MaterialIcons name="keyboard-voice" size={28} color="#929695" />
          </View>
        </View>
            <ScrollView style={{flex:1, width:'100%'}}>
           {/* <View style={{width:'100%', padding:5}}>
            <Text style={{fontSize:18, color:'#3edbf0', fontWeight:'bold'}}>Recently Played...</Text>
            </View>
            
            <ScrollView style={{width:'100%'}} horizontal={true}>
                <MusicList name='Dil ne kaha Reprise' details='Jassie Gill, Asees Kaur' />
                <MusicList name='Makhna' details='Yasser Desai, Asees Kaur' />
                <MusicList name='Qaafirana' details='Arijit Singh' />
                <MusicList name='On My Way' details='Alan Walker, Sabrina Carpenter, Farruko'/>

            </ScrollView>

            <View style={{width:'100%', padding:5}}>
            <Text style={{fontSize:18, color:'#3edbf0', fontWeight:'bold'}}>Today's Pick...</Text>
            </View>
            <ScrollView style={{width:'100%'}} horizontal={true}>
                <MusicList name='Dil ne kaha Reprise' details='Jassie Gill, Asees Kaur' />
                <MusicList name='Makhna' details='Yasser Desai, Asees Kaur' />
                <MusicList name='Qaafirana' details='Arijit Singh' />
                <MusicList name='On My Way' details='Alan Walker, Sabrina Carpenter, Farruko'/>

    </ScrollView>*/}
            <MusicCatog navigation={props.navigation}/>
            <RecentlyPlayed navigation={props.navigation}/>
            <TodaysPick navigation={props.navigation}/>
            <Trending navigation={props.navigation}/>
            
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'black',
        marginBottom:50,
        marginTop:50
        
    },
    header:{
        flexDirection:'row',
        width:'100%',
        height:50,
        backgroundColor:'#3edbf0',
        justifyContent:'center',
        alignItems:'center',
        
    },
    search: {
        backgroundColor: "white",
        width: "80%",
        maxWidth:1000,
        height: 40,
        alignItems: "center",
        margin: 13,
        flexDirection: "row",
        borderRadius: 20,
        paddingHorizontal:15
      },
      input: {
        width: "82%",
        paddingLeft:10,
        fontSize:18,
      },
    
    
})
