import React from 'react'
import DateDisplay from '../components/DateDisplay'
import Banner from '../components/reuseable/Banner'
import Navbar from '../components/reuseable/Navbar'
import Movement from '../components/reuseable/Movement'
import Campaigns from '../components/reuseable/Campaigns'
import Letters from '../components/reuseable/Letters'
import Footer from '../components/reuseable/Footer'

const HomePage: React.FC = () => {
    return (
       <>
        <Navbar />
        <Banner />
        <Movement />
        <Campaigns />
        <Letters />
        <Footer />
        {/* <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>Hello world!</h1>
            <DateDisplay />
        </div> */}
       </>
    )
}

export default HomePage
