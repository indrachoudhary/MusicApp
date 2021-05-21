import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";

export class Trending extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let categories = [
      {
        name: "Hold On",
        img: {
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbnicTv7Hye-FNAez2_cLaicR1NWOuYyIzQ&usqp=CAU",
        },
        id: "1",
      },
      {
        name: "Nayan",
        img: require("../assets/favicon.png"),
        id: "2",
      },
      {
        name: "Nadiyon Paar",
        img: require("../assets/favicon.png"),
        id: "3",
      },
      {
        name: "Positions",
        img: require("../assets/favicon.png"),
        id: "4",
      },
      {
        name: "Befikar",
        img: require("../assets/favicon.png"),
        id: "5",
      },
    ];
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
          data={categories}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              <Surface style={styles.surface}>
                <ImageBackground
                  style={{ width: 110, height: 110, borderRadius: 10 }}
                  source={item.img}
                ></ImageBackground>
                <Text
                  style={{ color: "white", fontSize: 12, fontWeight: "700" }}
                >
                  {item.name}
                </Text>
              </Surface>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: "100%",
  },
  surface: {
    width: 130,
    padding: 5,
    backgroundColor: "#2d2d2d",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default Trending;