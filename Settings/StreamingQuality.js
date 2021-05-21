import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'

const StreamingQuality = () => {
    return (
        <TouchableOpacity style = {styles.container}>
        <View style = {styles.container}>
            <Text>StreamingQuality</Text>
        </View>
        </TouchableOpacity>
    )
}

export default StreamingQuality

const styles = StyleSheet.create({
    container:{
        height:50,
        width:'100%',
        backgroundColor:'yellow'
    }
})
