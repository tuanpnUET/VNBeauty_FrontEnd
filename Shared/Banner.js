import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Dimensions, View, ScrollView } from 'react-native'
import Swiper from 'react-native-swiper';

var { width } = Dimensions.get("window");

const Banner = () => {
    const [ bannerData, setBannerData ] = useState([])

    useEffect(() => {
        setBannerData([
            "https://jasminelipska.com/wp-content/uploads/2019/09/vietnam-blog.jpg",
            "https://blog.kalzen.com/wp-content/uploads/2019/03/Influencer-Marketing---Lan-song-moi-cho-nganh-du-lich.jpg",
            "https://baoquocte.vn/stores/news_dataimages/phamthuan/022021/26/15/croped/kham-pha-viet-nam-cuon-sach-mo-ra-ca-mot-the-gioi.jpg",
        ]);
        return () => {
            setBannerData([]);
        };
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.swiper}>
                <Swiper
                style={{height: width / 2}}
                showsButtons={false}
                autoplay={true}
                autoplayTimeout={3}
                >
                    {bannerData.map((item) => {
                        return (
                            <Image
                            key={item}
                            style={styles.imageBanner}
                            resizeMode="contain"
                            source={{uri: item}}
                            />
                        )
                    })}
                </Swiper>
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gainsboro'
    },
    swiper: {
        width: width,
        alignItems: 'center',
        paddingLeft: 10,
    },
    imageBanner: {
        marginTop: 10,
        marginBottom: 10,
        height: width / 2.2, 
        width: width - 60,
        borderRadius: 20,
        marginHorizontal: 20,
    }
})

export default Banner;