import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { LogBox, Text, View } from "react-native";

const stack = createNativeStackNavigator();
LogBox.ignoreLogs([
    'non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="Home" options = {{headerShown:false}} component={HomeScreen}></stack.Screen>

            </stack.Navigator>
        </NavigationContainer>
    )
}
