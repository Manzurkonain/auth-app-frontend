import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import RootLayout from './pages/RootLayout.tsx'
import About from './pages/About.tsx'
import Login from './pages/Login.tsx'
import Services from './pages/Services.tsx'
import Signup from './pages/Signup.tsx'
import Userlayout from './pages/User/Userlayout.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<RootLayout />}>

                <Route path='' element={<App />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/services' element={<Services />}></Route>
                <Route path='/about' element={<About />}></Route>     
                <Route path='/dashboard' element={<Userlayout />}></Route>     

            </Route>
        </Routes>
    </BrowserRouter>

)
