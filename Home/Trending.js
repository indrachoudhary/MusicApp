import React, { Component, useState} from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";

export default function Trending(props) {
 const [songname, Setsongname] = useState( [
  {
    name: "Hold On",
    img: {
      uri: "https://i.ytimg.com/vi/kXgSWHmTpW8/hqdefault.jpg",
    },
    id: "1",
  },
  {
    name: "Nayan",
    img: {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_yHykc3eaoQxl2KXbncNbCyQQrjcStEizFw&usqp=CAU"},
    id: "2",
  },
  {
    name: "Nadiyon Paar",
    img: {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSg1BHTu-CuPV7BjBaryffiJUs532Rae-cA&usqp=CAU"},
    id: "3",
  },
  {
    name: "Positions",
    img: {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3OAg_J0MnH8Gp33a2lBwM719FZry9PRHaA&usqp=CAU"},
    id: "4",
  },
  {
    name: "Befikar",
    img:{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJu-1pS4gDRcsWW21FLxVXwWatub061FusA&usqp=CAU"},
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
          Trending
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

