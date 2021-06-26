import React, {useEffect,useState} from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View,ImageBackground } from 'react-native'
import { db,auth } from '../Config';
const SignUp = ({navigation}) => {
    const [email, setEmail]=useState("");
    const [password, setPassword]= useState("");
    const [username, setUsername]= useState("");

    const register = () => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((authUser) => {
            authUser.user.updateProfile({
              displayName: username,
            });
            db.collection("users").doc(auth.currentUser.uid).set({
              name: username,
              email: email,
              imgUrl: "",
              phone: "",
            });
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
            placeholder='Username'
            style={styles.input}
            placeholderTextColor='black'
            value={username}
            onChangeText={(text)=> setUsername(text) }
            />
            <TextInput
            placeholder='Email'
            style={styles.input}
            placeholderTextColor='black'
            value={email}
            onChangeText={(text)=> setEmail(text) }
            />
            <TextInput
            placeholder='Password'
            style={styles.input}
            placeholderTextColor='black'
            value={password}
            onChangeText={(text)=> setPassword(text) }
            />
            <TextInput
            placeholder='Confirm Password'
            style={styles.input}
            placeholderTextColor='black'
            
            />
            <TouchableOpacity style={styles.button} onPress={register}>
                <Text style={{fontSize:18, fontWeight:'bold'}}>
                    SignUp
                </Text>

            </TouchableOpacity>
            </ImageBackground>
        </View>
       
    );
}

export default SignUp

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
input:{
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
  marginTop:20
},

button: {
  backgroundColor :"#3edbf0",
  height: 40,
  width: 100,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 20,
  borderWidth: 2,
  borderColor: "black",
  borderBottomWidth: 4,
  marginTop:100
},

})

