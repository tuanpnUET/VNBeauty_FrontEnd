import React, {useState, useEffect } from 'react'
import { Image, View, StyleSheet, Text, ScrollView, Button } from 'react-native'
import { Container, H1} from 'native-base';


const SingleSite = (props) => {

    const [item, setItem] = useState(props.route.params.item);
   
    return (
        <Container style={styles.containter}>
            <ScrollView>
                <View>
                    <Text style={styles.tasbar}>
                        Chi tiết Danh lam
                    </Text>
                    <Image 
                        source={{
                            uri: item.image ? item.image 
                            : 'https://3wga6448744j404mpt11pbx4-wpengine.netdna-ssl.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif'
                        }}
                        resizeMode="contain"
                        style={styles.image}
                    />
                </View>
                <View style={styles.contentContainer}>
                        <H1 style={styles.contentHeader}>{item.name}</H1>
                        <Text style={styles.location}>Vị trí: {item.location}</Text>
                        <Text style={styles.contentText}>Điểm đánh giá:                          {item.rating}</Text>
                </View>
                <View style={{paddingLeft: 20, paddingRight: 10, paddingTop: 20}}>
                    <H1>Giới thiệu:</H1>
                    <Text style={{ marginRight: 5, fontSize: 18, paddingBottom: 100, paddingTop: 20}}>{item.description}</Text>
                </View>
            </ScrollView>
        </Container>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%'
    },
    imageContainer: {
        backgroundColor: 'white',
        padding: 0,
        margin: 0
    },
    image: {
        width: '100%',
        height: 250
    },
    tasbar: {
        fontSize: 20,
        paddingLeft: 20
    },
    contentContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentHeader: {
        fontWeight: "bold",
        marginBottom: 10
    },
    contentText: {
        fontSize: 18,
        marginBottom: 10,
        paddingRight: 50,
        fontWeight: "bold",
    },
    location: {
        fontSize: 18,
        marginBottom: 10,
        paddingLeft: 5,
        fontWeight: "bold",
    }
})


export default SingleSite;