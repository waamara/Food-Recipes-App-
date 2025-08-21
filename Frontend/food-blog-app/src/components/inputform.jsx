import axios from 'axios'



const inputform = ({setIsOpen}) => {
    const handleOnSubmit = (e) => {
        const [email,setEmail] = useState("")
        const [password,setPassword]=useState("")
        const [isSignUp,setIsSignUp]=useState(false)
        
        const handleOnSubmit=(e)=>{
            e.preventDefault() 
            let endpoint=(isSignUp) ? "SignUp" : "Login"
            await axios.post(`http://localhost:5000/${endpoint}`,{email,password})
            .then((res=>){
                localStorage.setItem("token",res.data.token)
                localStorage.setItem("user",JSON.stringify(res.data.user))
                setIsOpen()
            }
        )
        }
    }
    return (
        <>
            <form className="form" onSubmit={handleOnSubmit}>
                <div className="form-control">
                    <label >Email</label>
                    <input type="email" className="input" onChange={(e)=>setEmail(e.target.value)} required />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" className="input" onChange={(e)=>setPassword(e.target.value)} required />
                </div>
                <button type="submit">{(isSignUp)?"Sign Up" : "Login"}Login</button><br />
                <p onClick={()=>setIsSignUp(pre=>!pre)}>{(isSignUp) ? "Already have an Account" : "Create New Account"}</p>
            </form>
        </>        
    )
}

export default inputform