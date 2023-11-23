import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAvoidingView, View } from "react-native";
import { Header } from "../components/Header";
import { Login } from "../components/Login";

export function Home () {
  return (
    <LinearGradient 
    colors={['#36fcff', '#0056b7' ]} 
    className=' w-full h-full' 
    >
      <KeyboardAvoidingView className="flex-1 px-8 pt-16">
        <Login />
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}