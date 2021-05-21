import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const MusicList = ({name, details}) => {
    
    return (
        <View style={styles.container}>
            
            <View style={{width:'100%', padding:10}}>
                <Text style={{fontSize:18,fontWeight:'bold', color:'white'}}>
                    {name}
                </Text>
                <Text style={{color:'#3edbf0'}}>
                    {details}
                </Text>
            </View>
            
        </View>
    )
}

export default MusicList

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:150,
        width:150,
        alignItems:'center',
        backgroundColor:'black',

    }
})
