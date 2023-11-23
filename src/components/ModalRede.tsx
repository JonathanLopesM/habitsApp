import { useContext } from "react";
import { View , Text, SafeAreaView, TouchableOpacity } from "react-native";
import { AuthContext } from "../Contexts/auth";

export function ModalRede ({handleclose}:any){

  const { GetRedeAfiliados, afiliate} = useContext(AuthContext)

  const { TotalCalcRede,TotalPeaple, TotalCalcRedeAtivo, totalRedeInativa, peapleRedeAtivo} = afiliate
  

  const ValueRedeFormat = new Intl.NumberFormat('pt-BR',{
    style: "currency",
    currency:"BRL"
  }).format(!TotalCalcRede ? 0 : TotalCalcRede)

  const ValueActiveUsers = new Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: "BRL"
  }).format(TotalCalcRedeAtivo)

  
  return (
    <SafeAreaView className="flex-1 bg-black opacity-90">
      <TouchableOpacity onPress={handleclose} className="flex-1 z-10 items-end">
        <Text className="text-white text-xl p-4 ">
          X
        </Text>
      </TouchableOpacity>
      <View className=" z-50 gap-2 items-center opacity-100">
        <View className="bg-white overflow-hidden w-[90%] h-36 rounded-3xl items-center opacity-100">
              <Text className="text-xl font-bold bg-cyan-500 h-16 w-full text-center text-white py-4">
                Tamanho da sua rede
              </Text>
              <Text className="text-2xl  font-bold">
                {afiliate ? TotalPeaple : '0'} pessoa(s) ativa(s)  
              </Text>
              <Text className="text-2xl  font-bold">
                {afiliate ? totalRedeInativa : '0'} pessoa(s) inativa(s)  
              </Text>
        </View>
        <View className="bg-white overflow-hidden w-[90%] h-36 rounded-3xl items-center opacity-100">
              <Text className="text-xl font-bold bg-cyan-500 h-16 w-full text-center text-white py-4">
                Ganho com usuário(s) ativo(s)
              </Text>
              <Text className="text-2xl py-2 font-bold">
                {ValueActiveUsers}
              </Text>
        </View>
        <View className="bg-white overflow-hidden w-[90%] h-36 rounded-3xl items-center opacity-100">
              <Text className="text-xl font-bold bg-cyan-500 h-16 w-full text-center text-white py-4">
                Perda com usuário(s) inativo(s)
              </Text>
              <Text className="text-2xl py-2 font-bold">

                {ValueRedeFormat ? ValueRedeFormat : '0,00'}
              </Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleclose} className="flex-1 z-10">
      </TouchableOpacity>
    </SafeAreaView>
  )
}