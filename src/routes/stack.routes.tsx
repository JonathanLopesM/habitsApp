
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts/auth";
const { Screen, Navigator } = createNativeStackNavigator()

import { Dashboard } from "../screens/Dashboard";
import { DetailsNotify } from "../screens/DetailsNotify";
import { Home } from "../screens/Home";

export function StackRoutes () {

  return (
    <Navigator screenOptions={{headerShown:false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Dashboard" component={Dashboard} />
    </Navigator>
  )
}

