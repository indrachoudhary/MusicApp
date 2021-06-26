import React, { Component } from "react";
import { useState } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";

export default function TodaysPick(props){
  const [songname, setSongname] = useState([{
    name: "Tom Cruise",
    img: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQR0vatXNLXrX5NTppRLfox8nUBgVtd8eOaA&usqp=CAU",
    },
    id: "1",
    artist:"Indra",
  },
  {
    name: "Leja Leja",
    img: {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21wV63PyVVq05vvDOSuzoQD-6GwrCLF6msQ&usqp=CAU"},
    id: "2",
  },
  {
    name: "Raabta",
    img: {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWrHODdmVtWhDrdwkXXV2K73P2npZkjJbnCw&usqp=CAU"},
    id: "3",
  },
  {
    name: "Hawayein",
    img: {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPrkUuNLm88hRRiA-wWyz3eGwwsAYeoezSSA&usqp=CAU"},
    id: "4",
  },
  {
    name: "Chamiya",
    img: {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2nS4GGbPFQhQXRpUTp-0kNfK_6Q2g2y9wA&usqp=CAU"},
    id: "5",
  },])
 
 
    
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            paddingLeft: 5,
          }}
        >
         Todays Pick
        </Text>
        <FlatList
          keyExtractor={(item) => item.id}
          data={songname}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress={()=> props.navigation.navigate("MusicPlayer", {item})}>
              <Surface style={styles.surface}>
                <ImageBackground
                  style={{ width: 100, height: 100, borderRadius: 10 }}
                  source={item.img}
                ></ImageBackground>
                <Text
                  style={{ color: "white", fontSize: 12, fontWeight: "700" }}
                >
                  {item.name}
                </Text>
              </Surface>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    height: 180,
    width: "100%",
  },
  surface: {
    width: 130,
    padding: 5,
    backgroundColor: "#111111",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

