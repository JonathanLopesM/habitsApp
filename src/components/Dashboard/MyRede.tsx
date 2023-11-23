import React, { useContext, useState } from "react"
import { View,Text, TouchableOpacity } from "react-native"
import { AuthContext } from "../../Contexts/auth"
import { FontAwesome, Ionicons, Feather, Fontisto,MaterialIcons, FontAwesome5 } from '@expo/vector-icons';


export function MyRede({navigation}:any){
  const {logout, ActiveNotify, active, setActive, GetRedeAfiliados,afiliate, activeNewUsers, setActiveNewUsers, UpdatedActiveNotifyNewUser, user} = useContext(AuthContext)
  const [modalActive, setModalActive] = useState(false)
  return (
    <View className="w-full pt-5 gap-y-2">

            <Text className="text-xl font-semibold text-white">
                Minha Rede
            </Text>
            <View className="gap-y-4 text-center  items-center">
              <TouchableOpacity 
                onPress={() => setModalActive(true)}
              className="flex-row w-full border border-white px-2 py-2 rounded-xl"
              >
                <Fontisto name="persons" size={30} color="white" />
                <Text className="ml-3 text-center w-[80%] text-xl font-semibold text-white ">
                  Rede Geral
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={()=> navigation.navigate('DetailsUsers')}
                className="flex-row w-full  border border-white px-2 py-2 rounded-xl"
              >
                <Fontisto name="persons" size={30} color="white" />
                <Text className="ml-3 text-center w-[80%] text-xl font-semibold text-white ">
                  Meus indicados
                </Text>
              </TouchableOpacity>
            </View>
          </View>
  )
}