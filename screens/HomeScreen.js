import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ImageBackground, ImageBackgroundComponent, ImageBackgroundBase, } from "react-native";
import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { theme } from "../theme";
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
export default function HomeScreen() {
   const [showSearch, toggleSearch ] = useState(false);
   const [locations, setLocation]  = useState([1,2,3]); //three results to appear
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
             Enter the city below to get started</Text>
         {/*search section*/}
         <View style = {{ height: '70%', position:'relative',marginHorizontal:16,zIndex:50 }} classname = "mx-4 relative z-50">
            <View classname="flex-row justify-end items-center rounded-full"
            style={{backgroundColor: showSearch? theme.bgPink(0.5): '.05', height:'1%', paddingLeft: '1.5%', flex:.1, borderWidth: '5', 
            flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 50,
              top: 250}}>
               {
                  showSearch? (
                  <TextInput placeholder="Enter city here" style={{paddingLeft: 24, height: 40, flex: 1, fontSize: 16,}}
                  placeholderTextColor={'white'} place
                  classname="searchbar"/>
                  ):null
               }
               <TouchableOpacity
               onPress={() => toggleSearch(!showSearch)}
               style = {{backgroundColor: theme.bgPink(0.5), padding: 3, margin: 1, borderRadius: 50}}
               classname = "rounded-full p-3 m-1">
                  <MagnifyingGlassIcon size = "25" color="black"> </MagnifyingGlassIcon>
               </TouchableOpacity>
            </View>
            {
               locations.length>0 && showSearch? (
                  <View style={{ position: "absolute", width:'100%', 
                  backgroundColor:"#C8A2C8", top:300, borderRadius:20, padding:16, paddingTop:16, flex:1}}>
                     {
                        locations.map((loc,index)=> {
                           return (
                              <TouchableOpacity>
                                 <Text>London</Text>
                              </TouchableOpacity>
                           )
                        })
                     }
                  </View>
               ):null
            }
         </View>
      </SafeAreaView>
    </ImageBackground>
   </View>

    
   )
}