import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './resources/routes-constants'
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.sass'
import Signup from './components/auth/Signup'
import SignIn from './components/auth/Signin'
import ResetPassword from './components/auth/Resetpassword'
import About from './pages/AboutPage'
import Success from './components/auth/SuccessMsg'
import Donate from './pages/DonatePage'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
                <Route path={'/auth/sign-up'} element={<Signup />} />
                <Route path={'/auth/sign-in'} element={<SignIn />} />
                <Route path={'/auth/reset-password'} element={<ResetPassword />} />
                <Route path={'/about'} element={<About />} />
                <Route path={'/donate'} element={<Donate />} />
                {/* <Route path={'/auth/sign-in'} element={<Success />} /> */}
               
            </Routes>
        </Router>
    )
}

export default RootComponent
