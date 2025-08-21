import { useState } from "react"


const inputform = () => {
    const handleOnSubmit = (e) => {
        const [email,setEmail] = useState("")
        const [password,setPassword]=useState("")
        const [isSignUp,setIsSignUp]=useState(false)
        e.preventDefault()
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
                <p onClick={()=>setIsSignUp(true)}>{(isSignUp) ? "Already have an Account" : "Create New Account"}</p>
            </form>
        </>        
    )
}

export default inputform