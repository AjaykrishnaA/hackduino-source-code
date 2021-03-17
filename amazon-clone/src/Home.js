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
            id="3"
            key="3"
            title="Apple iPhone XS Max, 64GB, Silver - Fully Unlocked (Renewed)"
            price="589.97"
            rating="5"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZxTQnriwjiFJ0e9M_PGClgHaHa%26pid%3DApi&f=1"
          />
          <Product
            id="4"
            key="4"
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
            price="49.99"
            rating="4"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.MGMBv4639SICuS4CDq8iMgAAAA%26pid%3DApi&f=1"
          />
          <Product
            id="5"
            key="5"
            title="Xiaomi Mi Band 4 AMOLED Color Screen Wristband BT5.0 Fitness Tracker Smart Wristbands (Black)"
            price="33.99"
            rating="3"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ResmWcRcFPd1j7aCU1MfuQHaHA%26pid%3DApi&f=1"
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            key="6"
            title="Samsung BET-H Series 43 inch 4K PRO TV UHD + HDR (LH43BETHLGFXGO)"
            price="346.89"
            rating="4"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.eAsi-9XL1KmUoSRFgoitzgHaD_%26pid%3DApi&f=1"
          />
        </div>
        <div className="home__row">
          <Product
            id="1"
            key="1"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price="29.99"
            rating="4"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eQ4LF8vQbdEpehLG7GbkngAAAA%26pid%3DApi&f=1"
          />
          <Product
            id="2"
            key="2"
            title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black"
            price="349.99"
            rating="3"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3bL3NAkM_F3yiKR8BxYQIwHaHa%26pid%3DApi&f=1"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
