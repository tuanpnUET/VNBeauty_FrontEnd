import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'

import SiteContainer from "../Screens/Sites/SiteContainer"
import SingleSite from "../Screens/Sites/SingleSite"
const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={SiteContainer}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Site Detail"
                component={SingleSite}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default function HomeNavigator() {
    return <MyStack />
}