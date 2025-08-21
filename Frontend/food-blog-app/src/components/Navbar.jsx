
import { useState } from "react"
import { NavLink } from "react-router-dom"



export default function Navbar() {
    const [isOpen,setIsOpen]=useState(false)
    const checkLogin=()=>{
        setIsOpen(false)
    }
    return (
        <>
            <header>
                <h2>Food Blog</h2>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/myRecipe">Myrecipe</NavLink></li>
                    <li><NavLink to="/favRecipe">Favorites</NavLink></li>
                    <li onClick={checkLogin}><p className="login">Login</p></li>
                </ul>
            </header>
            {(isOpen) && <Modal onClose={() => setIsOpen(false)}> <InputForm setIsOpen={()=>setIsOpen(false)}/></Modal>}
        </>
    )
}