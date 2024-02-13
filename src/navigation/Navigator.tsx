import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ROUTES } from "./routes"
import WelcomeScreen from "screens/WelcomeScreen"
import HomeScreen from "screens/HomeScreen"

const NavigationStack = createNativeStackNavigator()

const Navigator = () => (
  <NavigationStack.Navigator
    initialRouteName={ROUTES.WelcomeScreen}
    screenOptions={{
      headerShown: false,
    }}
  >
    <NavigationStack.Screen
      component={WelcomeScreen as React.FC}
      name={ROUTES.WelcomeScreen}
    />
    <NavigationStack.Screen
      component={HomeScreen as React.FC}
      name={ROUTES.HomeScreen}
    />
  </NavigationStack.Navigator>
)

export default Navigator
