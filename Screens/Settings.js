import { StyleSheet, Text, TouchableOpacity, View,Switch, ScrollView } from 'react-native';
import React,{useState} from 'react';
import {Feather, FontAwesome5, MaterialIcons, MaterialCommunityIcons, AntDesign} from 'react-native-vector-icons';

const Settings = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
        <View style={styles.container}>
          {/*--------------------------------Header-----------------------------*/}
      <View style={styles.header}>

        <View style={{ width: "10%", justifyContent: "center", paddingLeft: 10 }} >
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <Feather name="menu" size={24} color="black" />
          </TouchableOpacity>
        </View>
       
        <View style={{width: "80%", alignItems: "center",justifyContent: "center",}}>
          <Text style={{ fontSize: 22, color: "black", fontWeight: "700" }}>
            Settings
          </Text>
        </View>
       
        <View style={{ width: "10%" }}></View>
     
      </View>
       
       
       {/*--------------------------------ScrollView-----------------------------*/}
     
     
      <ScrollView style={{width:'100%'}}>
       
         {/*--------------------------------Language Setting-----------------------------*/}
     
      <Text style={styles.titlehead}>
        Language settings
      </Text>
      
       {/*--------------------------------Language Preference-----------------------------*/}
      <TouchableOpacity onPress={() => props.navigation.navigate("LanguagePref")} >
        <View style={styles.list}>
          <View style={styles.titlebox}>
            <Text style={styles.title}>Language Preference</Text>
            <Text style={styles.description} >
              Set Your Language</Text>
          </View>
         
          <View style={styles.fontview}>
            <FontAwesome5 name="language" size={24} color="grey" />
         
          </View>
        </View>
      </TouchableOpacity>
      
      
       {/*----------------------------Music Quality Header---------------------------------*/}
      <Text style={styles.titlehead}>
        Music Quality
      </Text>
      
       {/*--------------------------------Equalizer-----------------------------*/}
      <TouchableOpacity onPress={() => props.navigation.navigate("Equalizer")}>
        <View style={styles.list}>
          <View style={styles.titlebox}>
            <Text style={styles.title}>Equalizer</Text>
            <Text style={styles.description} >
              Manipulate Frequencies</Text>
          </View>
         
          <View style={styles.fontview} >
            <MaterialIcons name="equalizer" size={28} color="grey" />
          </View>
       
        </View>
      </TouchableOpacity>
       {/*-------------------------------Streaming Quality -----------------------------*/}
        <View style={styles.list}>
          <View style={styles.titlebox}>
            <Text style={styles.title}>Streaming Quality</Text>
            <Text style={styles.description} >
              Set your Streaming Quality</Text>  
          </View>
         
          <View style={styles.box}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="quality-high" size={26} color="grey"
                style={{ padding: 5 }} />
            </TouchableOpacity>
           
            <TouchableOpacity>
              <MaterialCommunityIcons name="quality-medium" size={26} color="grey"
                style={{ padding: 5 }} />
            </TouchableOpacity>
           
            <TouchableOpacity>
              <MaterialCommunityIcons name="quality-low" size={26} color="grey"
                style={{ paddingLeft: 5 }} />
            </TouchableOpacity>
        
          </View>
        </View>
      
         {/*--------------------------------Download Quality-----------------------------*/}
        <View style={styles.list}>
          <View style={styles.titlebox}>
            <Text style={styles.title}>Download Quality</Text>
            <Text style={styles.description} >
              Set your Download Quality</Text>
          </View>
         
          <View style={styles.box}>
        
            <TouchableOpacity>
              <MaterialCommunityIcons name="quality-high" size={26} color="grey"
                style={{ padding: 5 }} />
            </TouchableOpacity>
            
            <TouchableOpacity>
              <MaterialCommunityIcons name="quality-medium" size={26} color="grey"
                style={{ padding: 5 }} />
            </TouchableOpacity>
          
            <TouchableOpacity>
              <MaterialCommunityIcons name="quality-low" size={26} color="grey"
                style={{ paddingLeft: 5 }} />
            </TouchableOpacity>
          
          </View>
        </View>
      
      
       {/*--------------------------------Data Usage Header-----------------------------*/}
      <View style={{flexDirection:'row', alignItems:'center',width:'100%'}}>
        <Text style={styles.titlehead}>
          Data Usage
        </Text>
        <Text style={{color:'grey', padding:5,marginTop:3, marginLeft:10}}> 218.9MB </Text>
      </View>
      
       {/*--------------------------------data saver section-----------------------------*/}
        <View style={styles.list}>
         
          <View style={styles.titlebox1} >
            <Text style={styles.title}>Data Saver</Text>
            <Text style={styles.description} >
              Sets your music quality to low and disables artist canvases</Text>
          </View>
         
          <View style={styles.titlebox2}>
            <Switch
              trackColor={{ false: "#767577", true: "#3edbf0" }}
              thumbColor={isEnabled ? "#3edbf0" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        
        </View>
         
         {/*--------------------------------Data Usage Warning-----------------------------*/}
     
        <View style={styles.list}>
         
          <View style={styles.titlebox1}>
            <Text style={styles.title}>Data Usage Warning</Text>
            <Text style={styles.description} >
              warns about excess data usage</Text>
          </View>
         
          <View style={styles.titlebox2} >
            <Switch
              trackColor={{ false: "#767577", true: "#3edbf0" }}
              thumbColor={isEnabled ? "#3edbf0" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
       
        </View>
      
      
       {/*--------------------------------Header Connect To App-----------------------------*/}
       
        <Text  style={styles.titlehead}>
          Connect to App
        </Text>
        
         {/*--------------------------------Navigation-----------------------------*/}
        <TouchableOpacity onPress={()=> props.navigation.navigate("Navigation")}>
        <View style={styles.list}>
         
          <View style={styles.titlebox1}>
            <Text style={styles.title}>Navigation</Text>
            <Text style={styles.description} >
              connect to navigation app</Text>
          </View>
  
          <View style={styles.titlebox2}>
            <Feather name="navigation" size={24} color="white"/> 
          </View>
       
        </View>
        </TouchableOpacity>
        
        
          {/*--------------------------------Car Mode-----------------------------*/}
        
        <View style={styles.list}>
          <View style={styles.titlebox1}>
            <Text style={styles.title}>Car Mode</Text>
            <Text style={styles.description}>
              Turns on your Auto Play</Text>
          </View>
        
          <View style={styles.titlebox2}>
            <Switch
              trackColor={{ false: "#767577", true: "#3edbf0" }}
              thumbColor={isEnabled ? "#3edbf0" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
       
        </View>
        
        
         {/*--------------------------------Sleep Mode-----------------------------*/}
        <TouchableOpacity onPress={() => {}}> 
        <View style={styles.list}>
         
          <View style={styles.titlebox1} >
            <Text style={styles.title}>Sleep Mode</Text>
            <Text style={styles.description} >
              Set Timer for your music</Text>
          </View>
          
          <View style={styles.titlebox2}>
            <Switch
              trackColor={{ false: "#767577", true: "#3edbf0" }}
              thumbColor={isEnabled ? "#3edbf0" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text style={{color:'grey',}}>10 min</Text>
          </View>
         
          </View>
        </TouchableOpacity>

        {/*------------------------------------Header HelpAndSupport------------------------------*/}
      
        <Text style={styles.titlehead}>
          Help And Support
        </Text>
        
         {/*--------------------------------Customer Support-----------------------------*/}
        <TouchableOpacity onPress={() => props.navigation.navigate("CustomerSupport")}>
        <View style={styles.list}>
         
          <View style={styles.titlebox}>
            <Text style={styles.title}>Customer Support</Text>
            <Text style={styles.description} >
              Contact Us</Text>
          </View>
          
          <View style={styles.fontview}>
            <AntDesign name="customerservice" size={28} color="white" />
          </View>
       
        </View>
      </TouchableOpacity>
      
      
       {/*--------------------------------Updates-----------------------------*/}
      <TouchableOpacity onPress={() => props.navigation.navigate("Updates")}>
        <View style={styles.list}>
          
          <View style={styles.titlebox}>
            <Text style={styles.title}>Updates</Text>
            <Text style={styles.description} >
              Check for Updates</Text>
          </View>
         
          <View style={styles.fontview}>
            <MaterialIcons name="update" size={28} color="white" />
          </View>
       
        </View>
      </TouchableOpacity>
       
        </ScrollView>
         {/*--------------------------------End-----------------------------*/}
      

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
    backgroundColor: "#111111",
    height: 65,
    width: "100%",
    padding: 5,
    flexDirection: "row",
  },
  description:{
    color:'grey',
    fontSize:12
  },
  title:{ 
    color: "white",
    fontSize:16, 
    fontWeight:'600'
  },
  box:{
    width: "50%",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  titlehead:{ 
    fontWeight: "bold", 
    fontSize: 18, 
    color: "white", 
    padding: 5 
  },
  titlebox:{
    alignItems: "flex-start",
    width: "50%",
    justifyContent: "center",
    
  },
  fontview:{
    alignItems: "flex-end",
    width: "50%",
    justifyContent: "center",
    padding:5
  },
  titlebox1:{
    alignItems: "flex-start",
    width: "80%",
    justifyContent: "center",
  },
  titlebox2:{
    alignItems: "flex-end",
    width: "20%",
    justifyContent: "center",
    padding:5
  }
  
});
