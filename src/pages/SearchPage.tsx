import React from 'react';
import Footer from '../components/reuseable/Footer';
import Letters from '../components/reuseable/Letters';
import Navbar from '../components/reuseable/Navbar';
import SearchForm from '../components/search/searchForm';

const Search = () => {
    return (
        <>
            <Navbar />
            <SearchForm />
            <Letters />
            <Footer />
        </>
    )
}
export default Search;