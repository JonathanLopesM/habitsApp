import { LinearGradient } from "expo-linear-gradient";
import { Text, View, Image, TouchableOpacity, Modal, Switch } from "react-native";
import { FontAwesome, Ionicons, Feather, Fontisto,MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/auth";
import { ModalRede } from "../components/ModalRede";

export function ProfileScreen({navigation}:any){
  const {logout, ActiveNotify, active, setActive, GetRedeAfiliados,afiliate, activeNewUsers, setActiveNewUsers, UpdatedActiveNotifyNewUser, user} = useContext(AuthContext)
  const [modalActive, setModalActive] = useState(false)

  const [activeNotify, setActiveNotify] = useState(active === 0 ? true : false)
  const [activeNotifyNewUser, setActiveNotifyNewUser] = useState(activeNewUsers === 0 ? true : false)

  function handleLogout(){
    logout()
  }
  function handleToggle(){
    setActiveNotify(!activeNotify)
    if(activeNotify === true){
      setActive(0)  
    } else if(activeNotify === false) {
      setActive(1)
    }
    ActiveNotify(active, user?.email)
  }

  function handleToggleNewUser(){
    setActiveNotifyNewUser(!activeNotifyNewUser)
    if(activeNotifyNewUser === true){
      setActiveNewUsers(0)  
    } else if(activeNotifyNewUser === false) {
      setActiveNewUsers(1)
    }
    UpdatedActiveNotifyNewUser(activeNewUsers, user?.email)
  }
  return(
    <LinearGradient 
    colors={['#36fcff', '#0056b7' ]} 
    className=' w-full h-full'  >
      <View className="w-full h-full items-center px-10 ">
          <View className="w-full justify-center items-center mt-5">
              <FontAwesome name="user-circle" size={50} color="white" />
              <Text className="text-xl text-white font-semibold mt-5">
                {user ? user.name : ''}
              </Text>
              <Text className="text-xl text-white">
              {user ? user.email : ''}
              </Text>
          </View>
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
          <View className="w-full pb-20 pt-10 gap-5">
            <Text className="text-xl font-semibold text-white">
              Notificações
            </Text>
            <View className="flex-row text-center  items-center">
              <MaterialIcons name="monetization-on" size={40} color="white" />
              <View className="w-full flex-row justify-between pr-5">
                <Text className="ml-3 text-xl font-semibold text-white ">
                  Vendas geradas 
                </Text>
                <Switch
                  className=""
                  trackColor={{ false: '#d5d5d5', true:'#29bc00' }}
                  thumbColor={activeNotify ? '#d5d5d5': ''}
                  value={activeNotify}
                  onValueChange={handleToggle}
                />
              </View>
            </View>
            <View className="flex-row text-center  items-center">

              <FontAwesome5 name="user-check" size={30} color="white" />
              <View className="w-full flex-row justify-between pr-5">
                <Text className="ml-3 text-xl font-semibold text-white ">
                  Novos usuários 
                </Text>
                <Switch
                  trackColor={{ false: '#d5d5d5', true:'#29bc00' }}
                  thumbColor={activeNotifyNewUser ? '#d5d5d5': ''}
                  value={activeNotifyNewUser}
                  onValueChange={handleToggleNewUser}
                />
              </View>
            </View>
          </View>
            <View className="w-full">
              <TouchableOpacity className="flex-row " onPress={handleLogout}>
                <Ionicons name="exit-outline" size={32} color="white" />
                <Text className="text-xl font-semibold text-white ">
                  Sair
                </Text>
              </TouchableOpacity>
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