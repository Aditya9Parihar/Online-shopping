import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_photo"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Home"
        />
        <div className="home_row">
          <Product
            id={12345671}
            title="The lean startup"
            price={19.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id={12345672}
            title="Bare Home Comforter Set - Queen Size - Goose Down Alternative - Ultra-Soft - Premium 1800 Series - Hypoallergenic - All Season Breathable Warmth (Queen, Grey)"
            price={39.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81AyCxRB0xS._AC_SL1500_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id={12345673}
            title="AIFUSI Baseball Display Case, UV Protected Acrylic Cube Baseball Holder Square Clear Box Memorabilia Display Storage Sports Official Baseball Autograph..."
            price={12.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/618U19KPkXL._AC_SL1500_.jpg"
          />
          <Product
            id={12345674}
            title="Microsoft Surface Pro 7 – 12.3 Touch-Screen  - 10 th Gen Intel Core i5 - 8GB Memory - 128GB SSD (Latest Model) – Platinum (VDV-00001)"
            price={737.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71kBlSKi3eL._AC_SL1500_.jpg"
          />
          <Product
            id={12345675}
            title="Apple EarPods with Lightning Connector - White"
            price={90}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41wYbyr3LLL._AC_SL1144_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id={12345676}
            title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black
              Style:Monitor only"
            price={121.5}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SL1500_.jpg"
          />
        </div>
      </div>
      <footer className="home_footer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} >Back to top</footer>
      <div className="home_info">
        <div className="info_section">
          <h3>Get to know Us</h3>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
        </div>
        <div className="info_section">
          <h3>Make money for Us</h3>
          <p>Sell product on Amazon</p>
          <p>Sell on Amazon Business</p>
          <p>Become an Affiliate</p>
          <p>Advertize Your Products</p>
          <p>Self-Publish with Us</p>
          <p>Host an Amazon HUb</p>
          <p>See more make Money with Us</p>
        </div>
        <div className="info_section">
          <h3>Amazon Payment Products</h3>
          <p>Amazon Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </div>
        <div className="info_section">
          <h3>Let Us Help You</h3>
          <p>Amazon and COVID-19</p>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates & Policies</p>
          <p>Returns & Replacements</p>
          <p>Manage Your Content and Devices</p>
          <p>Amazon Assistant</p>
          <p>Help</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
