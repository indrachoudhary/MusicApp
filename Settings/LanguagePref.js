import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'

const LanguagePref = () => {
    return (
        <TouchableOpacity style = {styles.container}>
        <View style = {styles.container}>
            <Text>LanguagePref</Text>
        </View>
        </TouchableOpacity>
    )
}

export default LanguagePref

const styles = StyleSheet.create({
    container:{
        height:50,
        width:'100%',
        backgroundColor:'yellow'
    }
})
