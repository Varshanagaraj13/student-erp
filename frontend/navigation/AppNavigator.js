import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AttendanceScreen from "../screens/AttendanceScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator(){

return(

<NavigationContainer>

<Stack.Navigator
initialRouteName="Login">

<Stack.Screen
name="Login"
component={LoginScreen}
/>

<Stack.Screen
name="Dashboard"
component={DashboardScreen}
/>

<Stack.Screen
name="Profile"
component={ProfileScreen}
/>

<Stack.Screen
name="Attendance"
component={AttendanceScreen}
/>

</Stack.Navigator>

</NavigationContainer>

);

}