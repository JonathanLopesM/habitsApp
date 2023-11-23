import React from "react";
import { View, Text } from "react-native";
import { Ionicons, FontAwesome, FontAwesome5, Feather } from '@expo/vector-icons';



export function NavHome ({size, color}:any){
return (
  <View className=" w-14 h-14 bg-white rounded-full px-2 mb-14 items-center justify-center border-x border-b-2 border-[#0a4773]">
    <Ionicons name="md-bar-chart" size={size} color={'black'} />
  </View>
)
}