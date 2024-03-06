import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

import Home from "./src/screens/Home";
import Contact from "./src/screens/Contact";
import Profile from "./src/screens/Profile";

export default function App() {
  const Tab = createBottomTabNavigator;
  return (
    <NavigationContainer>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="blue" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Contato"
        component={Contact}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="Contact" color="Black" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="Perfil" color="Red" size={26} />
          ),
        }}
      />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
