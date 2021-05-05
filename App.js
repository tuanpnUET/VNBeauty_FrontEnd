import React from 'react';
import { LogBox} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { Root } from 'native-base'
import Toast from "react-native-toast-message";

// context api
import Auth from "./Context/store/Auth"

//Navigators
import Main from './Navigators/Main';

//Screens
import Header from './Shared/Header';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Root>
      <Auth>
        <NavigationContainer>
          <Header />
          <Main />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </Auth>
    </Root>
  );
}
