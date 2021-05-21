import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";

export class RecentlyPlayed extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let categories = [
      {
        name: "Dilne Kaha Reprise",
        img: {
          uri: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fa10.gaanacdn.com%2Fimages%2Fsong%2F87%2F29267187%2Fcrop_480x480_1579006749.jpg&imgrefurl=https%3A%2F%2Fgaana.com%2Fsong%2Fdil-ne-kaha-reprise&tbnid=Xk4k0iabEF1NWM&vet=12ahUKEwjO0t_gudrwAhWKSCsKHVhWBSwQMygAegUIARCeAQ..i&docid=hEtr-_LmdFNoBM&w=480&h=480&q=dil%20ne%20kaha%20reprise&ved=2ahUKEwjO0t_gudrwAhWKSCsKHVhWBSwQMygAegUIARCeAQ',
        },
        id: "1",
      },
      {
        name: "Hosanna",
        img: {
          uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.baapmusic.com%2Fwp-content%2Fuploads%2F2020%2F07%2FMV5BZDBjOWY1NTQtMmU0MS00NGQ3LTk0YWEtNmI0YTJiZjg0Y2Y5XkEyXkFqcGdeQXVyMjY1MjkzMjE%40._V1_SX300-4.jpg&imgrefurl=https%3A%2F%2Fwww.baapmusic.com%2Fhosanna-mp3-song-ekk-deewana-tha%2F&tbnid=x2O6MZdmJXDORM&vet=12ahUKEwiNgoa_utrwAhWCNCsKHbxFD-UQMygLegUIARDXAQ..i&docid=nfhMq7yey26noM&w=225&h=320&q=hosanna%20song&ved=2ahUKEwiNgoa_utrwAhWCNCsKHbxFD-UQMygLegUIARDXAQ',
        },
        id: "2",
      },
      {
        name: "Tera Ban Jaunga",
        img: require("../assets/favicon.png"),
        id: "3",
      },
      {
        name: "EK Main Aur Ekk Tu",
        img: require("../assets/favicon.png"),
        id: "4",
      },
      {
        name: "Zaalima",
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
          Recently Played
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

export default RecentlyPlayed;