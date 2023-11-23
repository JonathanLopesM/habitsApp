import { View, Text, Modal, TouchableOpacity, SafeAreaView } from "react-native"
import { FontAwesome5,  } from '@expo/vector-icons';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Ionicons} from '@expo/vector-icons/'


export const FilterDate = () => {
  const { user, totalValue, value, setValue, CalculateTotal, title, setTitle, totalValue14,totalValue30,totalValuenull} = useContext(AuthContext)
  const [viewValue, setViewValue] = useState(false)
  const [visibleMenu2, setVisibleMenu2] = useState(false)

  const id = Number(user?.id)
  const options = [
    {
      title: '7 dias',
      value: 7,
      action: ()=> setValue(7)
    },
    {
      title: '14 dias',
      value: 14,
      action: ()=> setValue(14)
    },
    {
      title: '30 dias',
      value: 30,
      action: ()=> setValue(30)
    },
    {
      title: 'total',
      value: null,
    }
  ]
  const valueTo7days = new Intl.NumberFormat('pt-BR',{
    style: "currency",
    currency:"BRL"
  }).format(totalValue)

  const valueTo14days = new Intl.NumberFormat('pt-BR',{
    style: "currency",
    currency:"BRL"
  }).format(totalValue14)
  const valueTo30days = new Intl.NumberFormat('pt-BR',{
    style: "currency",
    currency:"BRL"
  }).format(totalValue30)
  const valueTonull =new Intl.NumberFormat('pt-BR',{
    style: "currency",
    currency:"BRL"
  }).format(totalValuenull)


  return (
    <View className=" justify-between mt-10 items-center ">
                <View className="flex-row w-[90%] justify-between">
                  <View className="justify-end">
                    <Text className="text-xl text-white font-bold">
                      Receita 
                    </Text>
                  </View>
                </View>
              
                  <View
                    className="flex mt-5 "
                    >
                    <View className="flex-row gap-2">
                      {options.map((opt, i) => (
                        <TouchableOpacity
                          className={`py-2 px-4 rounded-3xl ${value == opt.value ? 'bg-black' : 'bg-white'} `}
                        key={i} onPress={()=>{                          
                          setValue(opt.value),
                          setTitle(opt.title)
                        }
                          }>
                          <Text
                            className={`text-lg ${value == opt.value ? 'text-white' : ''}`}
                          >{opt.title}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                  <TouchableOpacity
                  className="flex-1  "
                  onPress={()=>setVisibleMenu2(false)}
                  >
                  </TouchableOpacity>
                  <View className="flex mx-auto  mt-5 -mb-10">
                    <View className="flex-row w-full gap-2 justify-between">
                        <Text  className="text-[50px] text-white font-bold pl-4">
                          {viewValue && value == 7 && valueTo7days }
                          {viewValue && value == 14 && valueTo14days }
                          {viewValue && value == 30 && valueTo30days }
                          {viewValue && value == null && valueTonull}
                          {/* {viewValue && value == 7 && 'R$ 100,00' } */}
                          {!viewValue && 'R$ - - - - -'}
                        </Text>
                      <TouchableOpacity className="flex-1 w-[10%] max-w-[70px] justify-center items-center" onPress={()=>setViewValue(!viewValue)}>
                        {viewValue ? <Ionicons name="eye" color="#fff" size={44} />
                        : <Ionicons name="eye-off" color="#ffff" size={44} />
                        }
                      </TouchableOpacity>
                    </View>
                 </View>
            </View>
  )
} 