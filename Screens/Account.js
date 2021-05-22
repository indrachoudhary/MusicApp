import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native'
import {MaterialIcons, FontAwesome, Feather} from 'react-native-vector-icons'

const Account = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{width:'10%',justifyContent:'center',paddingLeft:10}}>
                <TouchableOpacity onPress={()=> props.navigation.openDrawer()}>
            <MaterialIcons name="menu" size={30} color="black" />
            </TouchableOpacity>  
                </View>
                <View style={{width:'80%', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:20, fontWeight:'bold',}}>
                        Account
                    </Text>
                </View>
                <View style={{width:'10%'}}></View>
            </View>
            <ImageBackground
            source= {{uri:"https://www.adobe.com/express/create/media_141efea30cca217e8cb7fb3abb8ed9d663c29d550.jpeg?width=2000&format=webply&optimize=medium",}}
            style={{width:280,height:280,marginTop:20 , marginBottom:20 }}
            imageStyle={{borderRadius:200}}>
                <FontAwesome name="camera" size={30} color="grey"
                style={{position: "absolute",top:155, left:155 }}/>

            </ImageBackground>
            <ScrollView style={{width:'100%'}}
            contentContainerStyle={{alignItems:'center'}}>
            <View style={styles.userinfo}>
                <View style={{width:'90%'}}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Display name</Text>
            <TextInput
            placeholder='Indra Choudhary'
            placeholderTextColor='blue'
            style={styles.userinput} />
            </View>
            <View style={{width:'10%',justifyContent:'center' ,paddingBottom:5}}>
                <MaterialIcons name='edit' size={30} color='white'/>
            </View>
            </View>
            <View style={styles.userinfo}>
                <View style={{width:'90%'}}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Username</Text>
            <TextInput
            placeholder='indrachoudhary'
            placeholderTextColor='blue'
            style={styles.userinput} />
            </View>
            <View style={{width:'10%', justifyContent:'flex-end' ,paddingBottom:5}}>
                <MaterialIcons name='edit' size={30} color='white'/>
            </View>
            </View>

            <View style={styles.userinfo}>
                <View style={{width:'90%'}}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Email</Text>
            <TextInput
            placeholder='indrachoudhary@gmail.com'
            placeholderTextColor='blue'
            style={styles.userinput} />
            </View>
            <View style={{width:'10%',justifyContent:'center' ,paddingBottom:5}}>
                <MaterialIcons name='edit' size={30} color='white'/>
            </View>
            </View>
            <View style={styles.userinfo}>
                <View style={{width:'90%'}}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Contact</Text>
            <TextInput
            placeholder='123456789'
            placeholderTextColor='blue'
            style={styles.userinput} />
            </View>
            <View style={{width:'10%',justifyContent:'center' ,paddingBottom:5}}>
                <MaterialIcons name='edit' size={30} color='white'/>
            </View>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={()=> props.navigation.navigate("Login")}>
                    <Text style={{color:'white',}}>SignOut</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        alignItems:'center'
    
    },
    header:{
        height:60,
        width:'100%',
        backgroundColor:'blue',
        flexDirection:'row',
    },
    userinput:{
        width:'70%',
        height:60
    },
    userinfo:{
        width:'100%',
        height:70,
        padding:5,
        flexDirection:'row'
    },
    button:{
        backgroundColor:'blue',
        height:50,
        width:150,
        justifyContent:'center',
        borderRadius:20,
        alignItems:'center'
    }
})
