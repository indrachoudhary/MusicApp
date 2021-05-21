import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'

const DownloadQuality = () => {
    return (
        <TouchableOpacity style = {styles.container}>
        <View style = {styles.container}>
            <Text>DownloadQuality</Text>
        </View>
        </TouchableOpacity>
    )
}

export default DownloadQuality

const styles = StyleSheet.create({
    container:{
        height:50,
        width:'100%',
        backgroundColor:'yellow'
    }
})
