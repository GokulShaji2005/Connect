
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Landing from "./pages/Landing"
import Login from './Auth/login'
import { SignUp } from './Auth/signUp'
import Home from './pages/Home'

function App() {

const router=createBrowserRouter([
  {
    path:'/',
    element:<Landing/>
  },
  {
      path:'/Login',
  element:<Login/>,
  },
  {
    path:'/SignUp',
    element:<SignUp />
  },
    {
    path:'/Home',
    element:<Home/>
  },


])
return(
<RouterProvider router={router}/>
)

}

export default App
