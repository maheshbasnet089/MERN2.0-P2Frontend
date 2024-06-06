import { register, resetStatus } from "../../../store/authSlice"
import Form from "../Form"
import { UserDataType } from "../types"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { Status } from "../../../globals/types/types"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


const Register = () => {
  const navigate = useNavigate()
  const {status}  = useAppSelector((state)=>state.auth)
  const dispatch = useAppDispatch()
  const handleRegister = async (data:UserDataType)=>{
    dispatch(register(data))
  }
  useEffect(()=>{
    if(status === Status.SUCCESS){
      dispatch(resetStatus())
      navigate("/login")
    }
  },[status,navigate,dispatch])
  return (
    <Form type="register" onSubmit={handleRegister}/>
  )
}

export default Register