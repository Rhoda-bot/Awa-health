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
import Donate from './pages/DonatePage'
import Volunteers from './pages/VolunteersPage'
import Search from './pages/SearchPage'
import SearchDetails from './components/search/searchDetails'
import Contact from './pages/contact'
import Profile from './pages/ProfilePage'


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
                <Route path={'/volunteers'} element={<Volunteers />} />
                <Route path={'/search'} element={<Search />} />
                <Route path={'/search/details'} element={<SearchDetails />} />
                <Route path={'/contact'} element={<Contact />} />
                <Route path={'/profile'} element={<Profile />} />
                {/* <Route path={'/auth/success'} element={<SuccessMsg />} /> */}
               
            </Routes>
        </Router>
    )
}

export default RootComponent
