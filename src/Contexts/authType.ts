
export interface IUser {
  id?: number;
  email?: string;
  name?: String,
  token?: string;
  username?: string;
  notificacaoAtiva?: number;
  notificacaoNewUser?:number;
  userReturn?: (email:string, id:string, name:string, username: string, notificacaoAtiva: number, notificacaoNewUser:number)=> Promise<void>;

}

export interface ICustomer {
  _id:string; 
}

export interface IContext extends IUser {
  LoginContext : (email:string, password:string) => Promise<void>;
  logout(): void;
  authenticated: boolean;
  user: IUser | null;
  totalValue: any
  CalculateTotal(id: number, day: number): Promise<void>
  value: any
  setValue: any
  token:any 
  setToken:any
  title:any
  setTitle:any
  finances: any
  totalValue14:any 
  totalValue30:any
  totalValuenull:any
  active:any
  setActive:any
  ActiveNotify:any
  GetRedeAfiliados:any 
  afiliate:any
  setAfiliate:any
  activeNewUsers:any
  setActiveNewUsers:any
  UpdatedActiveNotifyNewUser:any
  loading:boolean
  setLoading:any
  chart30:any
}

export interface IAuthProvider {
  children: JSX.Element;
}