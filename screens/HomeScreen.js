import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ImageBackground, ImageBackgroundComponent, ImageBackgroundBase, } from "react-native";
import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { theme } from "../theme";
export default function HomeScreen() {
   const [showSearch, toggleSearch ] = useState(false);
   return (
    <View classname = "flex-1 re" >
      <StatusBar style = "light" />
      <ImageBackground  blurRadius = {10} source={require('../assets/sky.png')}
      style = {{height: '100%',  width: "100%"}}> 

      <SafeAreaView classname="flex flex-1">
         <Text style= {{display: 'flex',fontSize:'30%', textAlign: 'center', top: 100}}>
             Welcome to Check Weather!
         </Text>
         <Text style= {{display: 'flex',fontSize:'20%', textAlign: 'center', top: 150}}>
             Enter you name below to get started</Text>
         {/*search section*/}
         <View style = {{ height: '70%' }} classname = "mx-4 relative z-50">
            <View classname="flex-row justify-end items-center rounded-full"
            style={{backgroundColor:  theme.bgPink(0.5), height:'1%', paddingLeft: '1.5%', flex:.1, borderWidth: '5', 
            flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 50,
              top: 250}}>
               <TextInput placeholder="Enter name here" style={{paddingLeft: 24, height: 40, flex: 1, fontSize: 16,}}
               placeholderTextColor={'white'} place
               classname="pl-6 h-10 flex-1 text-base text-white"/>

               <TouchableOpacity
               onPress={() => toggleSearch(showSearch)}
               style = {{backgroundColor: theme.bgPink(0.5)}}
               classname = "rounded-full p-3 m-1">
                  
               </TouchableOpacity>
            </View>
         </View>
      </SafeAreaView>
    </ImageBackground>
   </View>

    
   )
}