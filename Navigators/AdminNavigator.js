import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Sites from "../Screens/Admin/Sites"
import SiteForm from "../Screens/Admin/SiteForm"
import Categories from "../Screens/Admin/Categories"
import EditSite from "../Screens/Admin/EditSite"

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Sites"
                component={Sites}
                options={{
                    title: "Sites"
                }}
            />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="SiteForm" component={SiteForm} />
            <Stack.Screen name="Edit Site" component={EditSite} />
        </Stack.Navigator>
    )
}
export default function AdminNavigator() {
    return <MyStack />
}