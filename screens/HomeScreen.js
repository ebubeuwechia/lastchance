import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ImageBackground, ImageBackgroundComponent, ImageBackgroundBase, ScrollView, } from "react-native";
import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { theme } from "../theme";
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import {MapPinIcon } from 'react-native-heroicons/solid';
export default function HomeScreen() {
   const [showSearch, toggleSearch ] = useState(false);
   const [locations, setLocation]  = useState([1,2,3]); //three results to appear

   const handleLocation = (loc) => {
      console.log('location:', loc);
   }

   return (
    <View classname = "flex-1 re" >
      <StatusBar style = "light" />
      <ImageBackground  blurRadius = {10} source={require('../assets/sky.png')}
      style = {{height: '100%',  width: "100%"}}> 

      <SafeAreaView classname="flex flex-1">
         <Text style= {{display: 'flex',fontSize:'30%', textAlign: 'center', top: 50}}>
             Welcome to Check Weather!
         </Text>
         <Text style= {{display: 'flex',fontSize:'20%', textAlign: 'center', top: 100}}>
             Enter the city below to get started</Text>
         {/*search section*/}
         <View style = {{ height: '70%', position:'relative',marginHorizontal:16,zIndex:50 }} classname = "mx-4 relative z-50">
            <View classname="flex-row justify-end items-center rounded-full"
            style={{backgroundColor: showSearch? theme.bgPink(0.5): '.05', height:'1%', paddingLeft: '1.5%', flex:.1, borderWidth: '5', 
            flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 50,
              top: 125}}>
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
                  <MagnifyingGlassIcon size = "29" color="black"> </MagnifyingGlassIcon>
               </TouchableOpacity>
            </View>
            {
               locations.length>0 && showSearch? (
                  <View style={{ position: "absolute", width:'100%', 
                  backgroundColor:"#C8A2C8", top:177, borderRadius:20, padding:16, paddingTop:16, flex:1}}>
                     {
                        locations.map((loc,index)=> {
                           let showBorder = index+1 != locations.length;
                           return (
                              <TouchableOpacity
                              onPress={() => handleLocation(loc)}
                               key={index} 
                              style={{flex: 1, justifyContent: 'center', alignItems: 'center',flexDirection: 'row', padding:12,
                              paddingHorizontal: 16, marginBottom: 4, borderBottomColor: "black", borderBottomWidth:2, width:"100%"}}>
                                 <MapPinIcon size='20' color= "teal"></MapPinIcon>
                                 <Text>Houston, Texas</Text>
                              </TouchableOpacity>
                           )
                        })
                     }
                  </View>
               ):null
            }
             {/*forecast section*/}
         </View>
         <View style={{flex: 1,marginHorizontal: 16, marginBottom: 3, flex: 1,
            flexDirection: 'row', justifyContent: 'space-around', top:-100, height:-1000, width:-100000 }}>
         <ScrollView
                  vertical
                  contentContainerStyle={{paddingVertical:100}}
                  showsHorizontalScrollIndicator={false}
               >
              
               <View style={{flex: 1,marginHorizontal: 16, marginBottom: 2, flexDirection: 'row', justifyContent: 'space-around'}}>
                  {/*location*/}
                  <Text style={{color: 'black', textAlign: 'center', fontSize: 18, top:-100, left:110,
                   fontWeight: 'bold', flex: 1, justifyContent: 'center', alignItems: 'center'}}
                  > Houston,
                     <Text style={{fontSize: 13, fontWeight: '60',color: '#808080', flex: 1,
                     justifyContent: 'center', alignItems: 'center', top:-175, left:0}}> Texas
                     </Text>
                  </Text>
                  
                  {/*weather image*/}
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1,}}>
                     <Image source={require('../assets/images/partlycloudy.png')}
                      style={{ width:"100%", height:"170%", top:-63, left:0, right:0, size:"90%", width: 50, height:50}}>
                     </Image>
                  </View>
                  <View style ={{ flex: 1, justifyContent: 'space-between', marginVertical: 2,}}>
                     {/* degree celcius*/}
                     <Text style = {{flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center', 
                     fontWeight: 'bold', color: 'black', fontSize: 18, marginLeft: 20, top:-15, left:-112, right:60 }}>
                        23&#176;
                     </Text>
                     <Text style = {{flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center', 
                     fontWeight: 'bold', color: 'black', fontSize: 20, marginLeft: 20, top:-15, left:-145, right:60, width:160}}>
                        Partly Cloudy
                     </Text>
                  </View>
               </View>
               </ScrollView>
            </View>
      </SafeAreaView>
    </ImageBackground>
   </View>

    
   )
}