import React from 'react';
import BarMenu from '../components/reuseable/Bar';
import Footer from '../components/reuseable/Footer';
import Letters from '../components/reuseable/Letters';
import Navbar from '../components/reuseable/Navbar';
import SearchForm from '../components/search/searchForm';

const Search = () => {
    return (
        <>
            <BarMenu />
            <SearchForm />
            <Letters />
            <Footer />
        </>
    )
}
export default Search;