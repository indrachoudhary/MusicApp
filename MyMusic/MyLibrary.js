import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Mylibrary = () => {
    return (
        <TouchableOpacity style = {styles.container}>
        <View>
            <Text>Mylibrary</Text>
        </View>
        </TouchableOpacity>
    )
}

export default Mylibrary

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:50,
        width:'100%',
        backgroundColor:'yellow'
    }
})
