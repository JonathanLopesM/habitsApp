import React,{useContext, useEffect, useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import OneSignal from 'react-native-onesignal';

import { 
  useFonts, 
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter'
import { LinearGradient } from 'expo-linear-gradient';
import { Loading } from './src/components/Loading';
import { AuthProvider } from './src/Contexts/auth';
import { Routes } from './src/routes';
import { AuthContext } from './src/Contexts/auth';
import type {StatusBarStyle} from 'react-native';

OneSignal.setAppId('9ebaf74c-a28b-46df-8140-0565cdb8dd79')

const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

export default function App() {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0],
  );
  const [statusBarTransition, setStatusBarTransition] = useState<
    'fade' | 'slide' | 'none'
  >(TRANSITIONS[0]);

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };

  const [fontsLoaded]=useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })
  if(!fontsLoaded) {
    return (
      <Loading />
    )
  }
  return (
      <SafeAreaProvider>
        <LinearGradient 
          colors={['#36fcff', '#0056b7' ]} 
          className=' w-full h-full' 
        >
          <AuthProvider>
              <>
                <StatusBar
                  animated={true}
                  backgroundColor="#0056b7"
                  barStyle={statusBarStyle}
                  showHideTransition={statusBarTransition}
                  hidden={hidden}
                />
                <Routes />
              </>
          </AuthProvider>
        </LinearGradient>
      </SafeAreaProvider>
  );
}
