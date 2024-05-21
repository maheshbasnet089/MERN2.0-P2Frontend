import { useDispatch } from "react-redux"
import { register } from "../../../store/authSlice"
import Form from "../Form"
import { UserDataType } from "../types"
import axios from "axios"


const Register = () => {
  const dispatch = useDispatch()
  const handleRegister = async (data:UserDataType)=>{
    console.log(data)
    // dispatch(register(data))
    const response = await axios.post('http://localhost:3000/register',data)

  }
  return (
    <Form type="register" onSubmit={handleRegister}/>
  )
}

export default Register