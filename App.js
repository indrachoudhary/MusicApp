import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';
import Settings from './Screens/Settings';
import Notifications from './Screens/Notifications';
import Account from './Screens/Account';
import SignOut from './Screens/SignOut';
import MyMusic from './Screens/MyMusic';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {DrawerContent} from './Screens/DrawerContent';
import Podcast from './Screens/Podcast';
import Equalizer from './Settings/Equalizer';
import LanguagePref from './Settings/LanguagePref';
import DownloadQuality from './Settings/DownloadQuality';
import StreamingQuality from './Settings/StreamingQuality';
import MyDownload from './MyMusic/MyDownload';
import MyFavs from './MyMusic/MyFavs';
import Mylibrary from './MyMusic/MyLibrary';
import Navigation from './Settings/Navigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Login' component={Login}
        options={{headerShown:false}}/>
        <Stack.Screen name = 'SignUp' component={SignUp}
        options={{headerShown:false}}/>
        <Stack.Screen name = 'Home' component={DrawerNavigator}
        options={{headerShown:false}}/>
                <Stack.Screen name = 'Equalizer' component={Equalizer}
        options={{headerShown:false}}/>
         <Stack.Screen name = 'LanguagePref' component={LanguagePref}
        options={{headerShown:false}}/>
         <Stack.Screen name = 'DownloadQuality' component={DownloadQuality}  
        options={{headerShown:false}}/>
        <Stack.Screen name = 'StreamingQuality' component={StreamingQuality}  
        options={{headerShown:false}}/>
        <Stack.Screen name = 'MyDownload' component={MyDownload}  
        options={{headerShown:false}}/>
        <Stack.Screen name = 'MyFavs' component={MyFavs}  
        options={{headerShown:false}}/>
        <Stack.Screen name = 'MyLibrary' component={Mylibrary}  
        options={{headerShown:false}}/>
        <Stack.Screen name = 'Navigation' component={Navigation}  
        options={{headerShown:false}}/>


      </Stack.Navigator>
    </NavigationContainer>
  
  );
}
const Tab = createMaterialBottomTabNavigator();
function BottomTab(){
  return(
    <Tab.Navigator 
    activeColor='#3edbf0'
    barStyle={{backgroundColor:'black'}}
    shifting={true} >
      <Tab.Screen name = 'Home' component={Home}
      options={{
        tabBarIcon:({color})=>(
        <Fontisto name="home" size={24} color={color} />
        ),
      }} />
      <Tab.Screen name = 'Podcast' component={Podcast}
      options={{
        tabBarIcon:({color})=>(
          <FontAwesome name="podcast" size={24} color={color} />
        ),
      }} />
      <Tab.Screen name = 'MyMusic' component={MyMusic}
      options={{
        tabBarIcon:({color})=>(
          <MaterialIcons name="my-library-music" size={24} color={color} />
        ),
      }} 
      />

      
    </Tab.Navigator>
  )
}
const Drawer = createDrawerNavigator();
function DrawerNavigator(){
  return(
    <Drawer.Navigator drawerContent={(props)=><DrawerContent{...props} /> }>
      <Drawer.Screen name = 'Home' component={BottomTab}/>
      <Drawer.Screen name = 'Account' component={Account}/>
      <Drawer.Screen name = 'Notifications' component={Notifications}/>
      <Drawer.Screen name = 'Settings' component={Settings}/>
    </Drawer.Navigator>
  );
}

