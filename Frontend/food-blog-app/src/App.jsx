import './App.css'
import {creatBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './pages/Home'

const router = creatBrowserRouter([
  {path:"/",element:<Home/>}
])

export default function App() {
  return (
    <div></div>
  )
}
