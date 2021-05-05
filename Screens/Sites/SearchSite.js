import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native'
import { Content, Left, Body, ListItem, Thumbnail, Text} from 'native-base';

var { width } = Dimensions.get("window")

const SearchSite = (props) => {
    const { sitesFiltered } = props;
    return (
        <Content style={{ width: width}}>
            {sitesFiltered.length > 0 ? (
                sitesFiltered.map((item) => (
                    <ListItem
                        onPress={() => {
                            props.navigation.navigate("Site Detail", {item : item})
                        }}
                        key={item._id}
                    >
                        <Left>
                            <Thumbnail 
                                source={{uri: item.image ? 
                                    item.image : 'https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg'
                                }}
                            />
                        </Left>
                        <Body>
                            <Text>{item.name}</Text>
                            <Text note>{item.location}</Text>
                        </Body>
                    </ListItem>
                ))
    ) : (
        <View style={styles.center}>
            <Text style={{ alignSelf: 'center'}}>
                Không tìm thấy danh lam nào!
            </Text>
        </View>
    )}
        </Content>
    );
};

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default SearchSite;