import React from 'react';
import { TouchableOpacity, View, Dimensions } from 'react-native';

import SiteCard from './SiteCard';
var { width } = Dimensions.get("window");

const SiteList = (props) => {
    const { item } = props;
    return (
        <TouchableOpacity 
            onPress={() => 
                props.navigation.navigate("Site Detail", { item: item})
                }
            >
            <View style={{ 
                backgroundColor: 'blue', 
                alignItems: 'center', 
                alignContent: 'center', 
                alignSelf: 'center' }}>
                <SiteCard style={{justifyContent: 'space-between',}} {...item} />
            </View>
        </TouchableOpacity>
    )
}
export default SiteList;