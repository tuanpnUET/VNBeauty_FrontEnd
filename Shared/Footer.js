import React from 'react'
import {StyleSheet, Image, SafeAreaView, Text, View, H1, Dimensions} from 'react-native'

var width = Dimensions.get('window')
const Footer = () => {
    return (
        <View style={{alignItems: 'center'}}>
        <SafeAreaView style={styles.footer}>
            <View >
                <View>
                <Text style={ styles.slogan}>
                Quảng bá hình ảnh Việt Nam
                </Text> 
                </View>
                <View>
                <Text style={ styles.contact}>
                Liên hệ: 0928230347
                </Text> 
                <Text style={ [styles.contact, {marginBottom: 50}]}>
                Email   : tuanpn.tb@gmail.com
                </Text>
                </View>
            </View>
        </SafeAreaView>
        <View>
            <Text style={styles.title}>
                edit by tuanpn github https://github.com/tuanpnUET
            </Text>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    footer: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: '#03bafc'
    },
    slogan: { 
        textAlign: 'center',
        fontSize: 20, 
        fontWeight: 'bold', 
        paddingTop: 30,
        color: 'white'
    },
    contact: {
        paddingLeft: 70,
        fontSize: 14,
        color: 'white',
    },
    title: {
        alignContent: 'center',
        textAlign: 'center',
        paddingBottom:5,
        width: 360,
        fontWeight: 'bold',
        paddingTop: 5,
        fontSize: 8,
        color: 'black',
        paddingTop: 10
    }
})

export default Footer;