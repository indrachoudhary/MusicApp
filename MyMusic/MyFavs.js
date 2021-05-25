import React from 'react'
import { StyleSheet, Text, View,ScrollView, TouchableOpacity } from 'react-native'
import { Ionicons , FontAwesome} from "react-native-vector-icons";
import MusicList from '../CustomList/MusicList';
const MyFavs = (props) => {
    return (
        <View style={styles.container}>
             {/*----------------------------------------header-------------------------------*/}
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
            <Text style={styles.headertext}>My Favourites</Text>
          </View>
  
          <View style={{ width: "10%",justifyContent:"center", paddingRight:10, alignItems:"flex-end"}}>
          <FontAwesome name="search" size={22} color="black" />
          </View>
        </View>
        
        <ScrollView style={{ width: "100%" }}>
    
          <TouchableOpacity>
        <MusicList name="Dil mere" artist="Local train" />
        </TouchableOpacity>
       
        <TouchableOpacity>
        <MusicList name="Dusk till down" artist="Zyan"/>
        </TouchableOpacity>
      
        <TouchableOpacity>
        <MusicList name="Treat you better" artist="Zyan" />
        </TouchableOpacity>
      
        <TouchableOpacity>
        <MusicList name="Zindagi" artist="Jubin Nautiyal" />
        </TouchableOpacity>
       
        <TouchableOpacity>
        <MusicList name="Channa mereya" artist="Artist:ABC" />
        </TouchableOpacity>
       
        <TouchableOpacity>
        <MusicList name="Tum mile" artist="Unknown" />
        </TouchableOpacity>
      </ScrollView>
        </View>
        
        
        
    )
}

export default MyFavs

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
      headertext: {
        fontSize: 22,
        fontWeight: "bold",
      }
})

