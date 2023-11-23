import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { Loading } from "../components/Loading";
import { AuthContext } from "../Contexts/auth";
import { StackRoutes } from './stack.routes'
import { BottomTapRoutes } from "./tab.routes";

export function Routes(){
  const { authenticated, loading } = useContext(AuthContext)
 
  return (
    <NavigationContainer>
      { 
      !authenticated ? <StackRoutes /> :  <BottomTapRoutes /> 
      }
    </NavigationContainer>
  )
}