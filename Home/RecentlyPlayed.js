import React, { Component } from "react";
import { useState } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";

export default function RecentlyPlayed(props) {
  const [songname,Setsongname ]=useState([{
    name: "Dilne Kaha Reprise",
    img: {
      uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUSI2pGUlfJBzuMNvYg0iEaaC16YT0BaokPw&usqp=CAU", 
    },
    id: "1",
  },
  {
    name: "Hosanna",
    img: {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLG-8U3O9gvjbBzfHFEMqcYu-3G_Wr77IOnQ&usqp=CAU',
    },
    id: "2",
  },
  {
    name: "Tera Ban Jaunga",
    img: {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNP2DSa-AOxLocHX9AXb2k6A4Wb47KJvfYLg&usqp=CAU"},
    id: "3",
  },
  {
    name: "EK Main Aur Ekk Tu",
    img: {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJphdYxSqlXzQ61i-a04p0Wo50Cq4c_uUeCQ&usqp=CAU"},
    id: "4",
  },
  {
    name: "Zaalima",
    img: {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqO8eGVzzyhl-_4Pn5zYiV4EkfazmvWqSYQ&usqp=CAU"},
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
          Recently Played
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
                  style={{ width: 100, height: 100, borderRadius: 10,marginBottom:3 }}
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

