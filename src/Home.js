import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup. Book for inspiration, smaple text for covering description, this should do"
            price="29.99"
            image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="49528094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, DOugh Hook and Whisk, 5 Litre Glass Bowl"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="49528050"
            title="Samsung LC4xxxxxxxxEN Curved Gaming Monitor"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={3}
          />
          <Product
            id="49528096"
            title="Amazon Echo 3rd Generation smart speaker with alexa, CHarcoal Fabric"
            price={98.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={4}
          />
          <Product
            id="49528094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, DOugh Hook and Whisk, 5 Litre Glass Bowl"
            price="29.99"
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="49528051"
            title="Samsung LC4xxxxxxxxEN Curved Gaming Monitor"
            price={1094.98}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
