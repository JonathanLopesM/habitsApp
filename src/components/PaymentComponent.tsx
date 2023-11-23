import { View, Text, ScrollView } from "react-native";
import Moment from "moment";

export function PaymentComponent ({...item}) {
  var date = '' 
  if (item.created_at !== undefined){
      date= new Date(item.created_at) as any
  }
  Moment.locale('pt')

  const valueToItem = new Intl.NumberFormat('pt-BR',{
    style: "currency",
    currency:"BRL"
  }).format(item.valor)
  
  
  return (
    <ScrollView className="w-full px-4 " >

        <View className=" w-full overflow-auto  gap-y-4 border-b">
          <View className=" flex-row w-full items-center gap-4 justify-between overflow-auto pb-4">
            <View className="flex-row items-center">
              <Text className=" text-xl text-white font-bold">
                {valueToItem}
                
              </Text>
              <Text className="text-xs pl-1 text-white">
                  reais
                </Text>
            </View>
            <View className="">
              <Text
                className="text-white"
              >
                {Moment(item.created_at).format('DD/MM/YYYY')}
              </Text>
              <Text className="w-[200] text-white">
                {item.descricao}
              </Text>
            </View>
          </View>
        </View>

    </ScrollView>
  )
}