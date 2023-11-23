import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-notify-5ewf.onrender.com'
})
//http://localhost:3333/

export const createSession = async ( email: string, password: string) => {
  let errors = []
    const response = await api.post('/auth/login', { email, password}, { validateStatus: false} as any)
    errors = response.data

    return response
}

export const calcTotal = async (id:number , day:any) => {
  let errors = []
  const response = await api.post('/v1/finance', { id, day }, { validateStatus: false} as any)

  errors = response.data
  return response
}

export const updatedActiveNotify = async (active:number , email:string) => {
  let errors = []
  const response = await api.post(`/v1/active-notify`, { active, email }, { validateStatus: false} as any)

  errors = response.data
  return response
}
export const updatedActiveNotifyNewUser = async (activeNewUsers:number, email:string) => {

  let errors = []
  const response = await api.post(`/v1/active-notify-new-user`, { activeNewUsers, email }, { validateStatus: false} as any)

  errors = response.data
  return response
}

//v1/indicator/educlube
export const getRedeDeAfiliados = async (username:any) => {
  let errors = []
  const response = await api.get(`/v1/indicator/${username}`,  { validateStatus: false} as any)

  errors = response.data
  return response
}