import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/71MwDPWV9XL._SX3000_.jpg"
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row header__home__row">
        {/* Products */}
        <Product
          id={12425466}
          title="Microsoft - Xbox One S 1TB All-Digital Edition Console with Xbox One Wireless Controller"
          price={499.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71XHuIVqJbL._AC_SX466_.jpg"
        />
        <Product
          id={12425466}
          title="HP Stream 14 inches HD(1366x768) Display, Intel Celeron N4000 Dual-Core Processor"
          price={949.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81RCOr3hJOL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        {/* Products */}
        <Product
          id={12425466}
          title="Fire TV Stick streaming media player"
          price={39.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/51ZdmnHKukL._AC_UL480_SR480,480_.jpg"
        />
        <Product
          id={12425466}
          title="OnePlus 8 Pro Onyx Black,​ 5G Android Smartphone"
          price={998.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/31d0HeVgCSL._AC_.jpg"
        />
        <Product
          id={12425466}
          title="Winston Echo Cushion - Sofa - Fog Frame - Beech Wood Armcaps - Sunbrella Cast Ash Fabric"
          price={2248.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71PzDeA6COL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        {/* Products */}
        <Product
          id={17527853}
          title="Toshiba TF-32A710U21 32-inch Smart HD TV - Fire TV Edition"
          price={139.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/614bao-CmtL._AC_SL1000_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
