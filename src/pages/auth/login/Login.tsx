import { useNavigate } from "react-router-dom"
import Form from "../Form"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { UserLoginType } from "../types"
import { login, resetStatus } from "../../../store/authSlice"
import { useEffect } from "react"
import { Status } from "../../../globals/types/types"


const Login = () => {
  const navigate = useNavigate()
  const {status}  = useAppSelector((state)=>state.auth)
  const dispatch = useAppDispatch()
  const handleLogin = async (data:UserLoginType)=>{
    dispatch(login(data))
  }
  useEffect(()=>{
    if(status === Status.SUCCESS){
      dispatch(resetStatus())
      navigate("/")
    }
  },[status,navigate,dispatch])
  return (
    <Form type="login" onSubmit={handleLogin}/>

  )
}

export default Login