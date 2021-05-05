import React, { useState, useCallback } from 'react';
import { 
        ScrollView, 
        View, 
        StyleSheet, 
        ActivityIndicator, 
        Dimensions 
        } from 'react-native';
import { Container, Icon,  Text} from 'native-base';
import { SearchBar } from 'react-native-elements';

import baseURL from "../../assets/common/baseUrl";
import axios from 'axios';

import Footer from '../../Shared/Footer'
import SiteList from './SiteList';
import SearchSite from './SearchSite';
import Banner from '../../Shared/Banner';
import CategoryFilter from './CategoryFilter';
import { useFocusEffect } from '@react-navigation/native'


var { height, width } = Dimensions.get("window")

const SiteContainer = (props) => {
    const [sites, setSites] = useState([]);
    const [sitesFiltered, setSitesFiltered] = useState([]);
    const [focus, setFocus] = useState();
    const [categories, setCategories] = useState([]);
    const [sitesCtg, setSitesCtg] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState([]);
    const [loading, setLoading] = useState(true)
  
    useFocusEffect((
      useCallback(
        () => {
          setFocus(false);
          setActive(-1);
          
          // Sites
          axios
            .get(`${baseURL}/sites`)
            .then((res) => {
              setSites(res.data);
              setSitesFiltered(res.data);
              setSitesCtg(res.data);
              setInitialState(res.data);
              setLoading(false)
            })
            .catch((error) => {
              console.log('Api call error')
            })
      
          // Categories
          axios
            .get(`${baseURL}/categories`)
            .then((res) => {
              setCategories(res.data)
              // console.log(res.data)
            })
            .catch((error) => {
              console.log('Api call error')
            })
      
          return () => {
            setSites([]);
            setSitesFiltered([]);
            setFocus();
            setCategories([]);
            setActive();
            setInitialState();
          };
        },
        [],
      )
    ))
      
     
    
  
    // Site Methods
    const searchSite = (text) => {
      setSitesFiltered(
        sites.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
      );
    };

  const openList = () => {
    setFocus(true);
  }

  const onBlur = () => {
    setFocus(false);
  }
  
  //categories
  const changeCtg = (ctg) => {
    {
      ctg === "all"
        ? [setSitesCtg(initialState), setActive(true)]
        : [
            setSitesCtg(
              sites.filter((i) => i.category._id === ctg),
              setActive(true),
             
            ),
          ];
    }
  };

  return (
    <>
    {loading == false ? (
      <Container>
      <ScrollView>
      <View>
            <SearchBar
              showLoading={false}
              platform={Platform.OS}
              inputStyle={{backgroundColor: '#EEEEEE', marginLeft: 12, borderRadius: 25}}
              containerStyle={{backgroundColor: 'white'}}
              style={styles.searchBar}
              searchIcon={{ size: 30 }}
              placeholder="Tìm kiếm"
              onFocus={openList}
              onChangeText={(text) => searchSite(text)}
            />
            {focus == true ? (
              <Icon onPress={onBlur} name="ios-close" />
            ) : null}
        {focus == true ? (
          <SearchSite
            navigation={props.navigation}
            sitesFiltered={sitesFiltered} 
            />
        ) : (
            <View >
              <View>
                <Banner />
              </View>
              
              <View>
              <CategoryFilter
                categories={categories}
                categoryFilter={changeCtg}
                sitesCtg={sitesCtg}
                active={active}
                setActive={setActive}
              />
              </View>
              <View>
              <Text
                style={{ paddingTop: 5, paddingBottom: 5, fontSize: 20 }}
              >
              Việt Nam Tươi Đẹp
              </Text>   
              </View>
              {sitesCtg.length > 0 ? (
              <View style={styles.listContainer}>
                  {sitesCtg.map((item) => {
                      return(
                          <SiteList
                              navigation={props.navigation}
                              key={item.name}
                              item={item}
                          />
                      )
                  })}
                </View>
              ) : (
                <View style={styles.center, { height: height/2}}>
                  <Text>Không có danh lam nào</Text>
                </View>
              )}
            </View>
        )}
        <Footer />
      </View>
      </ScrollView>
      </Container>
   ):(
     //Loading
      <Container style={[styles.center, { backgroundColor: "#f2f2f2"}]}>
        <ActivityIndicator size="large" color="red" />
      </Container> 
  )}
  </>
  );
};

const styles = StyleSheet.create({
 
  listContainer: {
    alignContent: 'center',
    alignSelf: 'center',
    width: width,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  searchBar: {
    paddingLeft: 10,
  },
  center: {
    justifyContent: 'center',
    alignContent: 'center'
  }
})
export default SiteContainer;