import { NavigationHelpersContext } from '@react-navigation/core'
import React,  { useState, useEffect }  from 'react'
import { View, Text, TextInput, Button, TouchableOpacity,StyleSheet,ImageBackground } from 'react-native'
import { auth, db } from '../Config'

const Login = ({navigation}) => {
    const [email, setEmail]=useState("");
    const [password, setPassword]= useState("");
    const [loading, setLoading]= useState(true);

    useEffect(() => {
        const unsub = auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            navigation.replace("Home"),
              setLoading(false),
              console.log("user Present ");
          } else {
            console.log("no user");
          }
        });
        return unsub;
      }, []);
    
      const login = () => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then((authUser) => {
            navigation.navigate("Home");
          })
          .catch((error) => alert(error));
      };
    return (
        
        <View style={styles.container}>
        <ImageBackground 
        blurRadius={2}
        mode='cover'
        style={styles.img}
        source={{uri:"https://cdn.wallpapersafari.com/56/47/XZvFor.jpg"}}>
            <TextInput
            placeholder='Email'
            style={styles.input1}
            placeholderTextColor='black'
            value={email}
            onChangeText={(text)=> setEmail(text) }
            />
            <TextInput
            placeholder='Password'
            style={styles.input2}
            placeholderTextColor='black'
            value={password}
            onChangeText={(text)=> setPassword(text)}
            />
            <TouchableOpacity style={styles.button1} onPress={login}>
                <Text style={{fontSize:18, fontWeight:'bold'}}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={()=> navigation.navigate('SignUp')}>
                <Text style={{fontSize:18, fontWeight:'bold'}}>
                    SignUp
                </Text>
            </TouchableOpacity>
            </ImageBackground>  
        </View>
        
    
            
        
    );
}


export default Login
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width:"100%",
        height:"100%",
        alignItems:'center',
        justifyContent:'center',
    },
    input1:{
      backgroundColor: "white",
      height: 45,
      width: "80%",
      borderRadius: 20,
      paddingLeft: 10,
      color: "black",
      fontSize: 15,
      borderWidth: 1,
      borderColor: "black",
      borderBottomWidth: 4,
      margin: 5,
      marginTop:200
    },
    input2:{
      backgroundColor: "white",
      height: 45,
      width: "80%",
      borderRadius: 20,
      paddingLeft: 10,
      color: "black",
      fontSize: 15,
      borderWidth: 1,
      borderColor: "black",
      borderBottomWidth: 4,
      margin: 10,
    },
    button1: {
      backgroundColor: "#3edbf0",
      height: 40,
      width: 120,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      borderWidth: 2,
      borderColor: "black",
      borderBottomWidth: 4,
      marginTop:180
    },
    button2: {
      backgroundColor: "#3edbf0",
      height: 40,
      width: 120,
      alignItems: "center",
      justifyContent: "center",
      margin: 10,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: "black",
      borderBottomWidth: 4,
    },
})
