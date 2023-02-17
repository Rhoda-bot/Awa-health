import React from "react";
import Slider from "react-slick";
import CARD__SCHEMA from '../../resources/data.json'

const Cards = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function(index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
    return(
        <> 
              <div>
                  <Slider {...settings}>
                    {
                      CARD__SCHEMA?.map((val: any) => (
                        <div className="col-md-12 col-sm-12 p-2" key={val.id}>
                           <div className="card p-2">
                              <img src={val.image} className="card-img-top" alt="" />
                                <div className="card-body">
                                  <p className="mb-3">
                                   {val.description}
                                  </p>
                                  <button type="button" className="campaigns__col--btn">Donate</button>
                                </div>
                            </div>
                        </div>
                      ))
                    }
                  </Slider>
              </div>
        </>
    )
}
export default Cards;