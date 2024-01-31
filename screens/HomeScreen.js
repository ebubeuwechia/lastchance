import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ImageBackground, ImageBackgroundComponent, } from "react-native";
import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { theme } from "../theme";
export default function HomeScreen() {
   return (
    <View classname = "flex-1 re" >
      <StatusBar style = "light" />
      <ImageBackground  blurRadius = {70} source={require('../assets/sky.png')}
      classname = "absolute h-full w-full"> 

      <SafeAreaView classname="flex flex-1">
         <Text> Welcome Use the Search Bar Below to locate a City's Weather</Text>
         {/*search section*/}
         <View style = {{ height: '70%', }} classname = "mx-4 relative z-50">

            
            <View classname="flex-row justify-end items-center rounded-full"
            style={{backgroundColor:theme.bgPink(0.2)}}>
               <TextInput placeholder="search city" placeholderTextColor={'lightgray'}
               classname="pl-6 h-10 flex-1 text-base text-white"/>
               <TouchableOpacity
               style = {{backgroundColor: theme.bgPink(0.3)}}
               classname = "rounded-full p-3 m-1" ></TouchableOpacity>
            </View>
         </View>
         
    </SafeAreaView>
    </ImageBackground>
   </View>

    
   )
}