import React, { useContext, useState, useCallback } from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { Container } from "native-base"
import { useFocusEffect} from "@react-navigation/native"
import AsyncStorage from "@react-native-community/async-storage"
import axios from "axios"
import baseURL from "../../assets/common/baseUrl"
import Input from '../Form/Input';
import AuthGlobal from "../../Context/store/AuthGlobal"
import { logoutUser } from "../../Context/actions/Auth.actions"


const UserProfile = (props) => {
    const context = useContext(AuthGlobal)
    const [userProfile, setUserProfile] = useState()

    useFocusEffect(
        useCallback(() => {
        if (
            context.stateUser.isAuthenticated === false || 
            context.stateUser.isAuthenticated === null
        ) {
            props.navigation.navigate("Login")
        }

        AsyncStorage.getItem("jwt")
            .then((res) => {
                const AuthStr = 'Bearer '.concat(res); 
                axios.get(`${baseURL}/users/getCurrentUser`, { headers: { Authorization: AuthStr } })
                    .then((user) => setUserProfile(user.data))
                    .then(res => {
                        // If request is good...
                        console.log("Good request "+res.data);
                    })
                    .catch((error) => {
                        console.log('error ' + error);
                    });
            })
            .catch((error) => console.log(error))


        return () => {
            setUserProfile();
        }

    }, [context.stateUser.isAuthenticated]))

    return (
       <Container style={styles.container}>
           <ScrollView contentContainerStyle={styles.subContainer}> 
                <View style={{alignItems: 'center'}}>
                    <Text style={{ 
                    fontSize: 22, 
                    fontWeight: "bold", 
                    paddingTop: 20,
                    paddingBottom: 30,
                    }}> Thông tin khách hàng </Text> 
                </View>
                <Text style={{ fontSize: 18, paddingLeft: 10 }}>Họ và tên:</Text>
                <Text style={styles.text}>
                     {userProfile ? userProfile.name : "" }
                </Text>  
                <Text style={{ fontSize: 18, paddingLeft: 10 }}>Email:</Text>    
               <Text style={styles.text}>
                     {userProfile ? userProfile.email : "" }
               </Text>

               <View style={{ marginTop: 80, width: 100, alignItems: 'center', alignSelf: 'center' }}>
                    <Button 
                        style={{ borderRadius: 20, textAlign: 'center'}}
                        title={"Đăng xuất"} onPress={() => [
                        AsyncStorage.removeItem("jwt"),
                        logoutUser(context.dispatch)
                    ]}/>
               </View>
           </ScrollView>
       </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        paddingLeft: 10,
        marginTop: 30
    },
    text: {
        fontSize: 20, 
        backgroundColor: '#D6D5D5', 
        borderRadius: 20, 
        paddingLeft: 10, 
        padding: 5, 
        paddingBottom: 5 ,
        marginBottom: 5,
        borderWidth: 2,
        borderColor: '#D6D5D5'
    }
})

export default UserProfile;