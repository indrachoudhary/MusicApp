import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import {
  Ionicons,
  AntDesign,
} from "react-native-vector-icons";

const MusicList = ({ name, artist }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "90%", flexDirection: "row",alignItems:"center" }}>
        <Ionicons name="musical-notes" size={24} color="white" />
        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontWeight: "700", fontSize: 17 , color:"white"}}>{name}</Text>
          <Text style={{ color: "#3edbf0" }}>{artist}</Text>
        </View>
      </View>

      <View style={{ width: "10%", alignItems: "flex-end" }}>
        <AntDesign name="heart" size={24} color="white" />
      </View>
    </View>
  );
};

export default MusicList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111111",
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 0.2,
    borderBottomColor: "#393e46",
    flexDirection: "row",
    padding: 10,
  },
});
