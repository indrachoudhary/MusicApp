import React, { Component } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";

export class MusicCatog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/*----------------------------------------Music Category-------------------------------*/}
    let categories = [
      {
        name: "Rock",
        img: {uri:"data:image/jpeg;base64,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"},
        id: "1",
      },
      {
        name: "HipHop",
        img: {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4AjP4Y7GXF8Ofifsm15Cm9m0Cyyp8kSsvA&usqp=CAU"},
        id: "2",
      },
      {
        name: "Jazz",
        img: {uri:"data:image/png;base64,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"},
        id: "3",
      },
      {
        name: "Classical",
        img: {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQucskHt1xghcl0vXiAGjhkz_tL27pFbmBYgQ&usqp=CAU"},
        id: "4",
      },
      {
        name: "Metal",
        img: {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-PL3iDhO7zwpPlQIV7UoHfmy2B2yfhKvVA&usqp=CAU"},
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
          Categories
        </Text>
        <FlatList
          keyExtractor={(item) => item.id}
          data={categories}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity>
              <Surface style={styles.surface}>
                <Image
                  style={{ width: 100, height: 100, borderRadius: 20 }}
                  source={item.img}
                />
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "700",marginTop:2 }}
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

export default MusicCatog;