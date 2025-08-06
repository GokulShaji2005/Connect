
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import Login from './Auth/login'
import { SignUp } from './Auth/signUp'

function App() {

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
      path:'/Login',
  element:<Login/>,
  },
  {
    path:'/SignUp',
    element:<SignUp />
  }


])
return(
<RouterProvider router={router}/>
)

}

export default App
