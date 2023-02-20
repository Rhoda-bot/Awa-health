import React, { useEffect, useState } from 'react'
import CardList from '../reuseable/CardList';

const images = [
    '/assets/hr1.png',
    '/assets/hr2.png',
    '/assets/hr3.png',
    '/assets/hr4.png',
    
]
const SearchForm = () => {
    const [currentImage, setCurrentImage] = useState(0);
    useEffect(() => {
        const intervalId  = setInterval(() => {
            if(currentImage === images.length -1){
                setCurrentImage(0);
            }else{
                setCurrentImage(currentImage + 1)
            }
        }, 5000)
        return () => clearInterval(intervalId)
    }, [currentImage])
    return(
        <>
            <div className="searchForm py-5" style={{
                backgroundImage: `url(${images[currentImage]})`
            }}>
                <div className="container py-5 my-5">
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
         <CardList />
        </>
    )
}
export default SearchForm;