import { View, Image, Modal, SafeAreaView } from "react-native"
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useEffect, useState } from "react";
import { FilterDate } from "../components/ModalFilter"
import { AuthContext } from "../Contexts/auth";
import OneSignal from "react-native-onesignal";

import { Loading } from "../components/Loading";
import { RedeUsers } from "../components/Dashboard/Rede";

export function Dashboard(){
  const {  value, afiliate, CalculateTotal, totalValuenull,GetRedeAfiliados,user} = useContext(AuthContext)
  const [modalLoad, setModalLoad] = useState(false)
  useEffect(()=>{
    var id = user?.id as any
      var day = value
      
      if(totalValuenull == undefined){
    
        setModalLoad(true)
         CalculateTotal(id, day )
      }
      
  },[user])
  
  
  useEffect(()=>{
    if(!afiliate){
      GetRedeAfiliados(user?.username)
    }
  },[afiliate])
  useEffect(()=>{
    setTimeout(()=>setModalLoad(false), 2000)
  },[user])

  OneSignal.setEmail(user?.email as string)

  return (
    <LinearGradient 
    colors={['#36fcff', '#0056b7' ]} 
    className=' w-full h-full'  
    >
      <Modal
        visible={modalLoad}
        transparent={true}
        onRequestClose={()=> setModalLoad(false)}
      >
        <SafeAreaView className="flex-1 bg-black opacity-90">
          <Loading />
        </SafeAreaView>
      </Modal>
      <View className="w-full h-full mt-10 ">
            <View className="w-full justify-center items-center ">
              <Image className=" w-full h-11 max-w-[200px] t.objectContain" source={require('../assets/logo_full.png')} />
            </View>
            <FilterDate />
            
            <View className="w-full mt-20 items-center">
               {/* <ChartDashboard /> */}
               {afiliate && <RedeUsers />}
               {/* <MyRede/> */}
            </View>
            
        </View>
      </LinearGradient>
  )
}