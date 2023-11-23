import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen } from '../screens/Profile';
import { DetailsUsers } from '../screens/DetailsUsers';

const {Navigator, Screen} = createNativeStackNavigator()

export function DetailsNavigation (){
  return (
    <Navigator
      screenOptions={{
      headerShown:false, 
      }}
    >
      <Screen 
        name="ProfileScreen" 
        component={ProfileScreen}      
        />
      <Screen 
        name="DetailsUsers" 
        component={DetailsUsers}
        options={{
          headerShown: true, 
          headerTitle: 'Indicações de 1º Nivel',
          headerTitleAlign: 'center',
        }} 
      />
    </Navigator>
  )
}

