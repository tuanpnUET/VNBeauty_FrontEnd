import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Header, Item, Input } from "native-base"
import Icon from "react-native-vector-icons/FontAwesome"
import { useFocusEffect } from "@react-navigation/native"
import ListSite from "./ListSite"
import { SearchBar } from 'react-native-elements';

import axios from "axios"
import baseURL from "../../assets/common/baseUrl"
import AsyncStorage from "@react-native-community/async-storage"
import MyButton from "../../Shared/MyButton";

var { height, width } = Dimensions.get("window")

const ListHeader = () => {
    return(
        <View
            elevation={1}
            style={styles.listHeader}
        >
            <View style={styles.headerItem}></View>
            <View style={styles.headerItem}>
                <Text style={{ fontWeight: '600'}}>Tên</Text>
            </View>
            <View style={styles.headerItem}>
                <Text style={{ fontWeight: '600'}}>Địa chỉ</Text>
            </View>
            <View style={styles.headerItem}>
                <Text style={{ fontWeight: '600'}}>Điểm đánh giá</Text>
            </View>
        </View>
    )
}

const Sites = (props) => {

    const [siteList, setSiteList] = useState();
    const [siteFilter, setSiteFilter] = useState();
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState();

    useFocusEffect(
        useCallback(
            () => {
                // Get Token
                AsyncStorage.getItem("jwt")
                    .then((res) => {
                        setToken(res)
                    })
                    .catch((error) => console.log(error))

                axios
                    .get(`${baseURL}/sites`)
                    .then((res) => {
                        setSiteList(res.data);
                        setSiteFilter(res.data);
                        setLoading(false);
                    })

                return () => {
                    setSiteList();
                    setSiteFilter();
                    setLoading(true);
                }
            },
            [],
        )
    )

    const searchSite = (text) => {
        if (text == "") {
            setSiteFilter(siteList)
        }
        setSiteFilter(
            siteList.filter((i) => 
                i.name.toLowerCase().includes(text.toLowerCase())
            )
        )
    }

    const deleteSite = (id) => {
        axios
            .delete(`${baseURL}/sites/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                const sites = siteFilter.filter((item) => item.id !== id)
                setSiteFilter(sites)
            })
            .catch((error) => console.log(error));
    }

  return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <MyButton
                secondary
                medium
                onPress={() => props.navigation.navigate("SiteForm")}
            >
                <Icon name="plus" size={18} color="white" />
                <Text style={styles.buttonText}>Thêm danh lam</Text>
            </MyButton>
            <MyButton
                secondary
                medium
                onPress={() => props.navigation.navigate("Categories")}
            >
                <Icon name="plus" size={18} color="white" />
                <Text style={styles.buttonText}>Thể loại</Text>
            </MyButton>
        </View>
      <View>
            <SearchBar
              showLoading={false}
              platform={Platform.OS}
              inputStyle={{backgroundColor: '#EEEEEE', marginLeft: 12, borderRadius: 25, paddingLeft: 20}}
              containerStyle={{backgroundColor: 'white'}}
              style={styles.searchBar}
              searchIcon={{ size: 30 }}
              placeholder="Tìm kiếm"
              onChangeText={(text) => searchSite(text)}
            />
         
      </View>

      {loading ? (
          <View style={styles.spinner}> 
              <ActivityIndicator size="large" color="red" />
          </View>
      ) : (
          <FlatList 
            data={siteFilter}
            ListHeaderComponent={ListHeader}
            renderItem={({ item, index }) => (
                <ListSite 
                    {...item}
                    navigation={props.navigation}
                    index={index}
                    delete={deleteSite}
                />
            )}
            keyExtractor={(item) => item.id}
          />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    listHeader: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: 'gainsboro'
    },
    headerItem: {
        margin: 3,
        width: width / 6
    },
    spinner: {
        height: height / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        marginBottom: 160,
        backgroundColor: 'white'
    },
    buttonContainer: {
        margin: 20,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    buttonText: {
        marginLeft: 4,
        color: 'white'
    }
})

export default Sites;