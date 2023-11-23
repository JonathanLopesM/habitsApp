import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import mysql from 'mysql';
// import MySQLEvents from '@rodrigogs/mysql-events';
import { calcTotal, createSession, getRedeDeAfiliados, updatedActiveNotify, updatedActiveNotifyNewUser } from '../services/api';
import { IAuthProvider, IContext, IUser } from './authType';
import { Loading } from '../components/Loading';
import { tagUserEmailCreate } from '../Notificantions/NotificationsTag';

export const AuthContext = createContext<IContext>({}as IContext)

export function AuthProvider({children}:IAuthProvider){
  const [user, setUser] = useState<IUser | null>(null)
  const [loading, setLoading] = useState(false)

  const [totalValue, setTotalValue] = useState()
  const [totalValue14, setTotalValue14] = useState()
  const [totalValue30, setTotalValue30] = useState()
  const [totalValuenull, setTotalValuenull] = useState()
  const [chart30, setChart30] = useState()
  
  const [finances, setFinances ] = useState()
  const [value, setValue] = useState<number | null>(30)
  const [title, setTitle] = useState<string>('total')
  const [token, setToken] = useState<string>()

  const [active, setActive] = useState<number>(0)
  const [activeNewUsers, setActiveNewUsers] = useState<number>(0)
  const [afiliate, setAfiliate] = useState() as any

  const [invalid, setInvalid] = useState('') as any
  

  useEffect(()=>{
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem("@EClube:user")
      const storagedToken = await AsyncStorage.getItem("@EClube:token")

      if(storagedToken && storagedUser){
        setUser(JSON.parse(storagedUser))
        setToken(storagedToken)
      }

    }
    loadStoragedData()
  }, [])


  async function LoginContext(email:string, password:string){
    const response = await createSession(email, password)

      
      if(response.data.token){
        await AsyncStorage.setItem("@EClube:user", JSON.stringify(response.data.userReturn ))
        await AsyncStorage.setItem("@EClube:token", response.data.token)
        //Aderir o token 
        const token = AsyncStorage.getItem("@EClube:token")
        setUser(response.data?.userReturn)
        setInvalid('')
        setLoading(true)

        setActive(response.data?.userReturn.notificacaoAtiva)
        setActiveNewUsers(response.data?.userReturn.notificacaoNewUser)
        tagUserEmailCreate(email)

        
      } else {
        setInvalid(response.data?.message)
      }

      CalculateTotal(response.data.userReturn?.id, value )
     
  }
  async function logout(){
    AsyncStorage.clear().then((a)=> {
      setUser(null)
    })
  }

  async function CalculateTotal(id:number, day:any) {
    const response = await calcTotal(id, day)

    setFinances(response.data.finances)
    setTotalValue(response.data.valueTotal)
    setTotalValue14(response.data.valueTotal14)
    setTotalValue30(response.data.valueTotal30)
    setTotalValuenull(response.data.valueTotalnull)
    setChart30(response.data.chart30fil)
    setLoading(false)
  }

  async function ActiveNotify(active:number, email:string){
    const response = await updatedActiveNotify( active, email)

  }

  async function UpdatedActiveNotifyNewUser (activeNewUsers:number, email:string){

   const response = await updatedActiveNotifyNewUser(activeNewUsers, email)
  }

  async function GetRedeAfiliados(username:string) {
    const response = await getRedeDeAfiliados(username)
    if(response.data){
      setAfiliate(response.data)
    } else {
      const response = await getRedeDeAfiliados(username)
      setAfiliate(response.data)
    }
  }

  return (
    <AuthContext.Provider value={{authenticated: !!user,  LoginContext, logout, CalculateTotal, totalValue, value, setValue, token, setToken, title, setTitle, finances, totalValue14,totalValue30,totalValuenull, active, setActive, ActiveNotify, GetRedeAfiliados, afiliate, setAfiliate, activeNewUsers, setActiveNewUsers, UpdatedActiveNotifyNewUser, loading, setLoading,chart30, user}}>
      {children}
    </AuthContext.Provider>
  )
}