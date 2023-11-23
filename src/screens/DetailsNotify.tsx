
import { LinearGradient } from "expo-linear-gradient";
import { useContext } from "react";
import { View, Text, FlatList, ScrollView, SafeAreaView, ListRenderItemInfo } from "react-native";

import { PaymentComponent } from "../components/PaymentComponent";
import { AuthContext } from "../Contexts/auth";

export function DetailsNotify(){
  const { user, totalValuenull, finances} = useContext(AuthContext)

  interface Itypeitem{
    id: string;
    valor:number;
    created_at:string;
    descricao:string;
  }

  function renderItem ({item}:ListRenderItemInfo<Itypeitem>){
    return <PaymentComponent {...item} />
  }

  const valueTonull =new Intl.NumberFormat('pt-BR',{
    style: "currency",
    currency:"BRL"
  }).format(totalValuenull)
  return (
    <SafeAreaView className="w-full">
    <LinearGradient 
    colors={['#36fcff', '#0056b7' ]} 
    className=' w-full h-full'  
    >
      
        <View className="flex w-full items-center p-8 border-b border-white">
          <Text className="font-bold text-xl text-gray-50">
            Ganhos com Educlube
          </Text>
        </View>
        <View className="w-full justify-center p-8 ">
          <Text className="text-2xl font-bold text-white">
            Total:
            {totalValuenull !== undefined ? valueTonull : '0,00'}
          </Text>
        </View>
        <View className="flex-1 ">
          {finances !== undefined ? (
            <FlatList
            keyExtractor={item => item.id}
            data={finances.reverse()}
            renderItem={renderItem }
            ListFooterComponent={()=><View className="mb-24" />}

            />
          ): <View />}
        </View>
      
    </LinearGradient>
    </SafeAreaView>   
  )
}