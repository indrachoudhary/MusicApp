import { StyleSheet, Text, TouchableOpacity, View,Switch, ScrollView } from 'react-native';
import React,{useState} from 'react';
import Equalizer from '../Settings/Equalizer';
import DownloadQuality from '../Settings/DownloadQuality';
import LanguagePref from '../Settings/LanguagePref';
import StreamingQuality from '../Settings/StreamingQuality'
import {Feather, FontAwesome5, MaterialIcons, MaterialCommunityIcons} from 'react-native-vector-icons';

const Settings = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
        <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{ width: "10%", justifyContent: "center", paddingLeft: 10 }}
        >
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <Feather name="menu" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "80%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 22, color: "black", fontWeight: "700" }}>
            Settings
          </Text>
        </View>
        <View style={{ width: "10%" }}></View>
      </View>
      <ScrollView style={{width:'100%'}}>
      <Text
        style={{ fontWeight: "bold", fontSize: 18, color: "white", padding: 5 }}
      >
        Language settings
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("LanguagePref")}
      >
        <View style={styles.list}>
          <View
            style={{
              alignItems: "flex-start",
              width: "50%",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white",fontSize:16, fontWeight:'600'}}>Language Preference</Text>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              width: "50%",
              justifyContent: "center",
            }}
          >
            <FontAwesome5 name="language" size={24} color="grey" />
          </View>
        </View>
      </TouchableOpacity>
      <Text
        style={{ fontWeight: "bold", fontSize: 18, color: "white", padding: 5 }}
      >
        Music Quality
      </Text>
      <TouchableOpacity onPress={() => props.navigation.navigate("Equalizer")}>
        <View style={styles.list}>
          <View
            style={{
              width: "50%",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white",fontSize:16, fontWeight:'600'}}>Equalizer</Text>
          </View>
          <View
            style={{
              width: "50%",
              alignItems: "flex-end",
              justifyContent: "center",
              padding: 5
            }}
          >
            <MaterialIcons name="equalizer" size={28} color="grey" />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("StreamingQuality")}
      >
        <View style={styles.list}>
          <View
            style={{
              width: "50%",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white",fontSize:16, fontWeight:'600'}}>Streaming Quality</Text>
          </View>
          <View
            style={{
              width: "50%",
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="quality-high"
                size={26}
                color="grey"
                style={{ padding: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="quality-medium"
                size={26}
                color="grey"
                style={{ padding: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="quality-low"
                size={26}
                color="grey"
                style={{ paddingLeft: 5 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("DownloadQuality")}
      >
        <View style={styles.list}>
          <View
            style={{
              width: "50%",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white",fontSize:16, fontWeight:'600'}}>Download Quality</Text>
          </View>
          <View
            style={{
              width: "50%",
              justifyContent: "flex-end",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="quality-high"
                size={26}
                color="grey"
                style={{ padding: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="quality-medium"
                size={26}
                color="grey"
                style={{ padding: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="quality-low"
                size={26}
                color="grey"
                style={{ paddingLeft: 5 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{flexDirection:'row', alignItems:'center',width:'100%'}}>
        <Text style={{color:'white', padding:5,fontSize:18, fontWeight:'bold'}}>
          Data Usage
        </Text>
        <Text style={{color:'grey', padding:5,marginTop:3, marginLeft:10}}> 218.9MB </Text>
      </View>
      
        <View style={styles.list}>
          <View
            style={{
              alignItems: "flex-start",
              width: "80%",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white",fontSize:16, fontWeight:'600'}}>Data Saver</Text>
            <Text style={{color:'grey',fontSize:12}} >
              Sets your music quality to low and disables artist canvases</Text>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              width: "20%",
              justifyContent: "center",
            }}
          >
            <Switch
              trackColor={{ false: "#767577", true: "#3edbf0" }}
              thumbColor={isEnabled ? "yellow" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
     
     
        <View style={styles.list}>
          <View
            style={{
              alignItems: "flex-start",
              width: "80%",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white",fontSize:16, fontWeight:'600'}}>Data Usage Warning</Text>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              width: "20%",
              justifyContent: "center",
    
            }}
          >
            <Switch
              trackColor={{ false: "#767577", true: "#3edbf0" }}
              thumbColor={isEnabled ? "yellow" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <TouchableOpacity onPress={()=> props.navigation.navigate("Navigation")}>
        <Text  style={{ color: "white",fontSize:18, fontWeight:'600', padding:5}}>
          Connect to App
        </Text>
        <View style={styles.list}>
          <View
            style={{
              alignItems: "flex-start",
              width: "80%",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white",fontSize:16, fontWeight:'600'}}>Navigation</Text>
            <Text style={{color:'grey',fontSize:12}} >
              connect to navigation app</Text>
          </View>
  
          <View
            style={{
              alignItems: "flex-end",
              width: "20%",
              justifyContent: "center",
              paddingRight:5,
            }}
          >
            <Feather name="Navigation" size={24} color="white"/>
           
          </View>
        </View>
        </TouchableOpacity>
        </ScrollView>
        
      

    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    backgroundColor: "#3edbf0",
    height: 60,
    width: "100%",
    flexDirection: "row",
  },
  list: {
    backgroundColor: "#222831",
    height: 60,
    width: "100%",
    padding: 5,
    flexDirection: "row",
  },
});
