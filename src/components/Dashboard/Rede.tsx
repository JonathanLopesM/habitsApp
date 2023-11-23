import { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { AuthContext } from "../../Contexts/auth";

export function RedeUsers (){
  const { GetRedeAfiliados, afiliate} = useContext(AuthContext)
  
  useEffect(()=>{
    if(!afiliate){
      GetRedeAfiliados()
    }
  },[])
  const { TotalCalcRede,TotalPeaple, TotalCalcRedeAtivo, totalRedeInativa, peapleRedeAtivo} = afiliate ? afiliate : ''
  

  const ValueRedeFormat = new Intl.NumberFormat('pt-BR',{
    style: "currency",
    currency:"BRL"
  }).format(!TotalCalcRede ? 0 : TotalCalcRede)

  const ValueActiveUsers = new Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: "BRL"
  }).format(!TotalCalcRedeAtivo ? 0 : TotalCalcRedeAtivo)
  return (
    <View className=" gap-2 items-center w-[95%]">
        <View className="bg-white overflow-hidden w-full  rounded-3xl items-center opacity-100">
              <Text className="text-xl font-bold bg-[#0a4773] w-full text-center text-white ">
                Tamanho da sua rede
              </Text>
              <Text className="text-xl  font-bold">
                {afiliate ? TotalPeaple : '0'} pessoa(s) ativa(s)  
              </Text>
              <Text className="text-xl  font-bold">
                {afiliate ? totalRedeInativa : '0'} pessoa(s) inativa(s)  
              </Text>
        </View>
        <View className="bg-white overflow-hidden w-full  rounded-3xl items-center opacity-100">
              <Text className="text-xl font-bold bg-[#0a4773] w-full text-center text-white ">
                Ganho com usuário(s) ativo(s)
              </Text>
              <Text className="text-xl py-2 font-bold">
                {ValueActiveUsers}
              </Text>
        </View>
        <View className="bg-white overflow-hidden w-full  rounded-3xl items-center opacity-100">
              <Text className="text-xl font-bold bg-[#0a4773] w-full text-center text-white ">
                Perda com usuário(s) inativo(s)
              </Text>
              <Text className="text-xl py-2 font-bold">

                {ValueRedeFormat ? ValueRedeFormat : '0,00'}
              </Text>
        </View>
      </View>
  )
}