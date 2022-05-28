import { useStateValue } from "../global_state/StateProvider"

export default function Login({setUser}){
const [{ user }, dispatch] = useStateValue()

const login = () =>{
    dispatch(
        {
        type: 'SET_USER',
        user: 'Gopal'
        }
    )
}
    return(
        <>
        <h1>Login Page</h1>
        <button onClick={login}>Login</button>
        </>
    )
}