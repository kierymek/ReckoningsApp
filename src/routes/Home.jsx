import React from 'react'
import AddCity from '../components/AddCity'
import AddCountry from '../components/AddCountry'
import AddHotel from '../components/AddHotel'
import CitiesList from '../components/CitiesList'
import CountriesList from '../components/CountryList'
import Header from '../components/Header'
import HotelList from '../components/HotelList'
import LogUser from '../components/LogUser'
import NoAccount from '../components/NoAccount'

const Home = () => {
    return (
        <div>
            <Header/>
            <div className="row">
                <div className="col">
                    <LogUser/>
                </div>
                <div className="col">
                    <NoAccount/>
                </div>
            </div>
        </div>
    )
}

export default Home
