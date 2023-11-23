import { Linking, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

export function UsersIndicated ({...item}) {
 
  return (
    <ScrollView key={item.id} className=" p-1 ">
      <View className=" bg-gray-100 border-2 border-white rounded-xl px-4 w-full py-2">
        <View className="flex-row justify-between">
          <Text className="text-xl font-semibold text-gray-700 max-w-[80%]">
            {item.name}
          </Text>

            {item.ativo == 0 ? (
              <Text className="h-9 text-xl text-white font-bold bg-red-500 px-2 rounded-xl">
                Inativo
              </Text>) : (
              <Text className="h-9 text-xl text-white font-bold bg-green-500 px-2 rounded-xl">
                Ativo
              </Text>
                )}
        </View>
        <TouchableOpacity onPress={()=> {
          Linking.openURL(`mailto:${item.email}`)
        }}>
          <Text className="text-xl font-semibold text-gray-700 my-1 ">
            {item.email}
          </Text>
        </TouchableOpacity>
        {item.celular ? (
          <TouchableOpacity onPress={()=> {
            Linking.openURL(`tel:${item.celular}`)
          }}>
            <Text className="text-xl font-semibold text-gray-700">
              {item.celular}
            </Text>
          </TouchableOpacity>
        ):(
          
            <Text className="text-xl font-semibold text-gray-400">
              Sem celular cadastrado
            </Text>
        )}
        
      </View>
    </ScrollView>
  )
}