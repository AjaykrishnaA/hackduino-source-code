import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          alt=""
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price="39"
            rating="5"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eQ4LF8vQbdEpehLG7GbkngAAAA%26pid%3DApi&f=1"
          />
          <Product
            id="2"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price="29"
            rating="5"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eQ4LF8vQbdEpehLG7GbkngAAAA%26pid%3DApi&f=1"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price="49"
            rating="5"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eQ4LF8vQbdEpehLG7GbkngAAAA%26pid%3DApi&f=1"
          />
          <Product
            id="4"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price="29"
            rating="5"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eQ4LF8vQbdEpehLG7GbkngAAAA%26pid%3DApi&f=1"
          />
          <Product
            id="5"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price="29"
            rating="5"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eQ4LF8vQbdEpehLG7GbkngAAAA%26pid%3DApi&f=1"
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price="29"
            rating="5"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eQ4LF8vQbdEpehLG7GbkngAAAA%26pid%3DApi&f=1"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
