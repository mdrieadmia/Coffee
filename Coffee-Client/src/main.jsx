import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './authProvider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    loader: ()=> fetch('http://localhost:5000/coffee')
  },
  {
    path:'/addCoffee',
    element: <AddCoffee/>
  },
  {
    path:'/register',
    element: <Register/>
  },
  {
    path:'/updateCoffee/:id',
    element: <UpdateCoffee/>,
    loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
