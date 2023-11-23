import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useEffect, useState } from "react";
import { FlatList, ListRenderItemInfo, Modal, Text, TouchableOpacity, View } from "react-native";
import { UsersIndicated } from "../components/usersIndicated";
import { FontAwesome, Ionicons, Feather, Fontisto,MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { ModalRede } from "../components/ModalRede";
import { AuthContext } from "../Contexts/auth";

export function DetailsUsers (){
  const { GetRedeAfiliados, afiliate } = useContext(AuthContext)
  useEffect(()=>{
    if(!afiliate){
      GetRedeAfiliados()
    }
  },[])
    const { PeapleActive } = afiliate
  
  interface Iitemtype {
    id: string;
    name: string;
    username:string;
    email:string;
    celular: string;
  }

  const [modalActive, setModalActive] = useState(false)
  function renderItem ({item}:ListRenderItemInfo<Iitemtype>){
    return  <UsersIndicated {...item} />
  }
  return (
    <LinearGradient 
    colors={['#36fcff', '#0056b7' ]} 
    className=' w-full h-full'  >
      <View className="mt-10 justify-center items-center">
        <View className="bg-white px-4 py-2 rounded-lg">
          <Text className="font-bold text-xl">
            Minhas indicações diretas:
          </Text>
        </View>

        <View className="mt-5 w-[90%]">
          <FlatList
            keyExtractor={item => item.username}
            data={PeapleActive}
            renderItem={renderItem }
            ListFooterComponent={()=><View className="mb-36" />}

            />
        </View>
        <Modal
              visible={modalActive}
              transparent={true}
              onRequestClose={()=> setModalActive(false)}
            >
              <ModalRede handleclose={()=> setModalActive(false)} />
            </Modal>
      </View>
    </LinearGradient>
  )
}