import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

const homeScreen :FC = () => {
    return (
        <View style={styles.container}>
            <Text>homeScreen</Text>
        </View>
    )
}

export default homeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    }
})

