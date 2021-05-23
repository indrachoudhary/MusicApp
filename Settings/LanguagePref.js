import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity,  ScrollView} from 'react-native'
import { Ionicons } from 'react-native-vector-icons';
const LanguagePref = (props) => {
    return (
        
        <View style = {styles.container}>
            <View style={styles.header}>
                <View style={{width:'10%',justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=> props.navigation.navigate("Settings")}>
                <Ionicons name="chevron-back" size={30} color="black" />
                </TouchableOpacity>
                </View>
                <View style={{width:'80%', justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.headertext}>Set Language</Text>
                </View>
                <View style={{width:'10%'}}>
                
                </View>
                </View> 
                <ScrollView style={{width:'100%'}}>
                    <View style={styles.lang}> 
                        <Text style={styles.langtext}>Arabic</Text>
                        </View>
                        <View style={styles.lang}> 
                        <Text style={styles.langtext}>Arabic</Text>
                        </View>
                        <View style={styles.lang}> 
                        <Text style={styles.langtext}>Arabic</Text>
                        </View>
                        <View style={styles.lang}> 
                        <Text style={styles.langtext}>Arabic</Text>
                        </View>
                        <View style={styles.lang}> 
                        <Text style={styles.langtext}>Arabic</Text>
                        </View>
                        
                        
                        
                        
                       
                </ScrollView>
                
        </View>
        
    )
}

export default LanguagePref

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        
    },
    header:{
        backgroundColor:'#3edbf0',
        width:'100%',
        height:60,
        flexDirection:'row',
        marginBottom:10

    },
    headertext:{
        fontSize:18,
        fontWeight:'bold',
        color:'black'
    },
    lang:{
        width:'100%',
        height:40,
        justifyContent:'center',
        paddingLeft:10,
        borderTopWidth:1
    },
    langtext:{
        fontSize:18,
        color:"white",
        fontWeight:"600",
    },
}) 

