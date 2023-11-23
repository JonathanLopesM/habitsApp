import { Image, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import {Feather, AntDesign, FontAwesome, Ionicons} from '@expo/vector-icons/'
import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/auth";
import Hyperlink from 'react-native-hyperlink'


export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')

  const [hidePass, setHidePass] = useState(true)
  const [colorSet, setColor] = useState('')

  const {LoginContext } = useContext(AuthContext)

  function openScreen(){
    LoginContext(email, password)
  }
  return (
    <View className="flex-1 text-black items-center justify-center gap-5">
      <View className="w-full justify-center items-center">
        <Image className=" w-62 h-16 max-w-[300px] " source={require('../assets/logo_full.png')} />
      </View>
      <View className=" bg-white rounded-full ">
        <FontAwesome className="rounded-full border-2 " name="user-circle" size={100} color="black"/>
      </View>
      <View className="w-full max-w-[90%] gap-5 justify-center items-center mb-10">
        <TextInput
          className="w-[80%] text-lg bg-white p-2 rounded-md"
          placeholder="Email"
          value={email}
          onChangeText={(text)=> setEmail(text)}
         />
         <View className="flex-row w-[80%] bg-white  rounded-md  mb-5 justify-between">
          <TextInput
            className="w-[80%] text-xl p-2"
            placeholder="Senha"
            value={password}
            onChangeText={(text)=> setPassword(text)}
            secureTextEntry={hidePass}
          />
          <TouchableOpacity className="w-[20%] justify-center items-center" onPress={()=>setHidePass(!hidePass)}>
            {hidePass ? <Ionicons name="eye" color="#5a5a5a" size={25} />
            : <Ionicons name="eye-off" color="#5a5a5a" size={25} />
             }
            
          </TouchableOpacity>
         </View>
         
         <TouchableOpacity onPress={openScreen} className="bg-gray-700 px-12 py-1 rounded-md ">
          <Text className="text-xl text-gray-300">
            Entrar
          </Text>
         </TouchableOpacity>
      </View>

        <Hyperlink
        linkDefault={true}
        linkText={(url)=> url === 'https://educlube.online/password/reset' ? 'Esqueci a Senha' : url}
        >
          <Text className="font-semibold underline active:text-gray-500
           text-white text-center items-center justify-center">
            https://educlube.online/password/reset
          </Text>
        </Hyperlink>
      
    </View>
  )
}