import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'

const MyDownload = () => {
    return (
        <TouchableOpacity style = {styles.container}>
        <View style = {styles.container}>
            <Text>MyDownload</Text>
        </View>
        </TouchableOpacity>
    )
}

export default MyDownload

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:50,
        width:'100%',
        backgroundColor:'yellow'
    }
})
