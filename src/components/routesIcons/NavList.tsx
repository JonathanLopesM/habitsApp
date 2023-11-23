import React from "react";
import { View, Text } from "react-native";
import { Ionicons, FontAwesome, FontAwesome5, Feather } from '@expo/vector-icons';



export function NavList ({size, color}:any){
return (
  <View className=" w-14 h-14 bg-white rounded-full px-2 mb-10 items-center justify-center border-x border-b-2 border-[#0a4773]">
    <FontAwesome name="list" size={size} color="black" />
  </View>
)
}