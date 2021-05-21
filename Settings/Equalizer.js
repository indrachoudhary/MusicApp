import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'

const Equalizer = () => {
    return (
        <TouchableOpacity style = {styles.container}>
        <View style = {styles.container}>
            <Text>Equalizer</Text>
        </View>
        </TouchableOpacity>
    )
}

export default Equalizer

const styles = StyleSheet.create({
    container:{
        height:50,
        width:'100%',
        backgroundColor:'yellow'
    }
})
