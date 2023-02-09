import React from 'react'

const SearchForm = () => {
    return(
        <>
            <div className="searchForm py-5">
                <div className="container">
                    <div className="row mx-auto searchForm__row">
                       <div className='col-md-8'>
                        <form className="searchForm__wrapper d-flex"role="search">
                                <input type="search" className="searchForm__wrapper--inp form-control" aria-label="Search"  />
                                    <img src="/assets/search-icon.png" className=" searchForm__wrapper--search" alt="" />
                        </form>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchForm;