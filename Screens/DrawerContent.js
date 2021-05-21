import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
} from "react-native-vector-icons";

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userinfo}>
            <TouchableOpacity activeOpacity={0.5}
            onPress={()=> props.navigation.navigate("Account")} >
            <View style={{ flexDirection: "row" }}>
              <Avatar.Image
                source={{
                  uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.seekpng.com%2Fipng%2Fu2w7y3e6o0o0i1q8_login-panel%2F&psig=AOvVaw3AUHoYQdjdEnwhcz8kmuex&ust=1621335193077000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCio7jG0PACFQAAAAAdAAAAABAJ",
                }}
                size={60}
              />
              <View style={{ marginLeft: 10 }}>
                <Title style={{ color: "white" }}>Indra Choudhary</Title>
                <Caption style={{ fontSize: 15, color: "grey" }}>
                  @indrachoudhary
                </Caption>
              </View>
            </View>
            </TouchableOpacity>
          </View>

          <Drawer.Section style={styles.section}>
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="musical-notes" color="#3edbf0" size={size} />
              )}
              label={() => <Text style={{ color: "#3edbf0", fontSize:18 }}>Music</Text>}
              activeBackgroundColor="red"
              pressColor="black"
              style={{}}
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="settings" color="#3edbf0" size={size} />
              )}
              label={() => <Text style={{ color: "#3edbf0", fontSize:18 }}>Settings</Text>}
              pressColor="black"
              style={{}}
              onPress={() => {
                props.navigation.navigate("Settings");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    padding: 10,
  },
  userinfo: {
    flexDirection: "row",
  },
  section: {
    paddingTop: 220,
  },
  bottomDrawer: {
    marginBottom: 15,
  },
});