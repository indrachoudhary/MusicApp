import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity,ScrollView, TextInput} from 'react-native'
import { Ionicons, FontAwesome } from "react-native-vector-icons";
import MusicList from '../CustomList/MusicList';
const MyDownload = (props) => {
    return (
        <View style={styles.container}>
         {/*----------------------------------------Header-------------------------------*/}
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
            <Text style={styles.headertext}>My Downloads</Text>
          </View>
  
          <View style={{ width: "10%",justifyContent:"center", paddingRight:10 , alignItems:"flex-end"}}>
          <FontAwesome name="search" size={22} color="black" />
          </View>
        </View>

        {/*<View style={styles.search}>
                <View style={{width:'90%', flexDirection:'row'}}>
          <FontAwesome name="search" size={20} color="#929695" />
          <TextInput placeholder="Search" style={styles.input} />
          </View>
          </View>*/}
       
       
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

export default MyDownload

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
      headertext: {
        fontSize: 22,
        fontWeight: "bold",
      },
      search: {
        backgroundColor: "white",
        width: "80%",
        maxWidth:1000,
        height: 30,
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
