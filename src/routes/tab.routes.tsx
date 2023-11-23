import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons, FontAwesome, FontAwesome5, Feather } from '@expo/vector-icons';
import { DetailsNotify } from "../screens/DetailsNotify";
import { NavHome } from "../components/routesIcons/NavHome";
import { NavList } from "../components/routesIcons/NavList";
import { NavProfile } from "../components/routesIcons/NavProfile";
import { DetailsNavigation } from "./details.routes";
import { Loading } from "../components/Loading";
import { useContext } from "react";
import { AuthContext } from "../Contexts/auth";
import { Dashboard } from "../screens/Dashboard";

const { Screen, Navigator } = createBottomTabNavigator()

export function BottomTapRoutes () {
  const {loading } = useContext(AuthContext)
  
  return (
        <Navigator screenOptions={{
          headerShown:false, 
          tabBarShowLabel:false,
          unmountOnBlur:true,
          tabBarStyle: {
            position: "absolute",
            borderTopWidth: 0,
            marginHorizontal: 15,
            borderRadius: 15,
            marginBottom: 8
            }
          }}
        >
          <Screen 
                name="Dashboard" 
                component={Dashboard}
                options={{
                  tabBarIcon: ({ color, size, focused})=>{
                    if(focused){
                      return <NavHome size={size} color={color} />
                    }
                    return <Ionicons name="md-bar-chart-outline" size={28} color={color} />
                  }
                }} 
          />
          <Screen 
                name="DetailsNotify" 
                component={DetailsNotify}
                options={{
                  tabBarIcon: ({ color, size, focused})=>{
                    if(focused){
                      return <NavList size={size} color={color} />
                    }
                    return <Feather name="list" size={size} color={color} />
                  }
                }} 
          />
          <Screen 
                name="DetailsNavigation" 
                component={DetailsNavigation}
                options={{
                  tabBarIcon: ({ color, size, focused})=>{
                    if(focused){
                      return <NavProfile size={size} color={color} />
                    }
                    return <FontAwesome5 name="user" size={size} color={color} />
                  }
                }}
          />
        </Navigator>

  )
}

