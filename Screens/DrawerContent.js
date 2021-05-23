import React from "react";
import { View, StyleSheet, TouchableOpacity , Alert} from "react-native";
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
  MaterialIcons,
  Ionicons,
} from "react-native-vector-icons";
import {ProgressBar, Colors} from 'react-native-paper';

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <DrawerContentScrollView {...props}>
        {/*------DrawerContent--------*/}
        <View style={styles.drawerContent}>

          {/*------UserInfo------*/}
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
                <Caption style={{ fontSize: 15, color: "#3edbf0" }}>
                  @indrachoudhary
                </Caption>
              </View>
            </View>
            </TouchableOpacity>
          </View>
            {/*-------DrawerSection-----*/}
          <Drawer.Section style={styles.section}>
            {/*-------DrawerItem-----*/}
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="musical-notes" color="white" size={size} />
              )}
              label={() => <Text style={{ color: "white", fontSize:16 }}>Music</Text>}
              activeBackgroundColor="red"
              pressColor="black"
              style={{}}
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="settings" color="white" size={size} />
              )}
              label={() => <Text style={{ color: "white", fontSize:16 }}>Settings</Text>}
              pressColor="black"
              style={{}}
              onPress={() => {
                props.navigation.navigate("Settings");
              }}
            />
            {/*-------Storage-----*/}
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="storage" color="white" size={size} />
              )}
              label={() => <Text style={{ color: "white", fontSize:16 }}>Storage</Text>}
              pressColor="black"
              style={{}}
              onPress={() => {  }}
            />
            <ProgressBar progress={0.2} color={"#3edbf0"} 
            style={{width:"70%", marginLeft:20 }} />
            <View style={{flexDirection:'row', width:"100%"}}>
            <Text style={{color:'white', marginLeft:20}}>
              24.0 GB
            </Text>
            <Text style={{color:'white', marginLeft:68}}>
              101.8 GB free
            </Text>
            </View>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="broom" color="white" size={size} />
              )}
              label={() => <Text style={{ color: "white", fontSize:16 }}>Clear Cache</Text>}
              pressColor="black"
              style={{}}
              onPress={() => {Alert.alert('Clear Cache'); }}
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
    paddingTop: 150,
  },
  bottomDrawer: {
    marginBottom: 15,
  },
  
});