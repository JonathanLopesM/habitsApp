import { useContext, useEffect } from "react"
import { ActivityIndicator, View } from "react-native"
import { AuthContext } from "../Contexts/auth"


export function Loading(){

  return (
    <View className="flex-1 justify-center items-center" >
      <ActivityIndicator color="#3a99ed" size={100} />
    </View>
  )
}