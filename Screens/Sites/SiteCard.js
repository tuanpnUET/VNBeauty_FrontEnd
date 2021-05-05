import React from 'react'
import {
        StyleSheet,
        View,
        Dimensions,
        Image,
        Text,
} from 'react-native'

var { width } = Dimensions.get("window");

const SiteCard = (props) => {
    const { name, rating, image, location, description } = props;


    return (
        <View style={styles.container}>
            <View style={styles.card}>
            <Image 
            style={styles.image}
            resizeMode="contain"
            source={{uri: image ? image : 'https://3wga6448744j404mpt11pbx4-wpengine.netdna-ssl.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif'}}
            />
            
            <Text style={styles.title}>
                {name.length > 35 ? name.substring(0, 35 - 3)
                    + '...' : name    
            }
            </Text>
            <Text style={styles.rating}>Đánh giá: {rating}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: width,
        height: width / 1.4,
        padding: 5,
        elevation: 8,
        paddingBottom: 20,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        borderRadius: 14,
        width: width,
        height: width / 2.1,
        position: 'absolute',
        marginTop: 10,
        marginBottom: 20,
        opacity: 1
    },
    card: {
        paddingLeft: 10,
        // marginBottom: 20,
        width: width - 30,
        alignItems:'center',
        height: width / 1.5,
        backgroundColor: 'transparent',
        borderRadius: 14,
        paddingBottom: 20
    },
    title: {
        paddingTop: width / 1.9,
        fontWeight: 'bold',
        fontSize: 18,
        // textAlign: 'left',
        textAlign: 'center'
    },
    rating: {
        fontWeight:'bold',
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
        paddingBottom: 10,

    },
})
export default SiteCard;