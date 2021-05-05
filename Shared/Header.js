import React from 'react'
import { View, StyleSheet, Image, SafeAreaView, Dimensions } from 'react-native'

const {width} = Dimensions.get("window")

const Header = () => {
    return (
        <View style={styles.header}>
        <Image
            source={require("../assets/logo.jpg")}
            resizeMode="contain"
            style={{ height: 90 , padding: 5}}
        />
        </View>
    )    
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 5,
        width: width,
        height: 110,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E5E5E5'
    }
})

export default Header;