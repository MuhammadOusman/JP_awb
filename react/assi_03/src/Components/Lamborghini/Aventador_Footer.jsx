import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import Diablo_Links from "./Diablo_Links";
import Huracan_AppDownload from "./Huracan_AppDownload";
import Centenario_PaymentsVerified from "./Centenario_PaymentsVerified";
import Urus_AboutDaraz from "./Urus_AboutDaraz";
import Gallardo_CategoriesBrands from "./Gallardo_CategoriesBrands";
import Sian_InternationalSocialCopyright from "./Sian_InternationalSocialCopyright";
import styles from "./Aventador_Footer.module.css"; 

const Aventador_Footer = () => {
  return (
    <>
      <div className={styles.footer1}>
        <button className={styles.footBtn}>Load More</button>
        <div className={styles.foot2}>
          <Diablo_Links />
          <Huracan_AppDownload />
        </div>
      </div>

      <Centenario_PaymentsVerified />

      <div className={styles.footer3}>
        <Urus_AboutDaraz />
        {/* Remaining text content for Urus_AboutDaraz continued from App.jsx */}
        <div className={styles["foot3-div2"]}>
          <p>
            avail exclusive offers by downloading Daraz Wallet – a closed loop
            digital wallet that offers you a secure, easy way to make payments.
            We also have easypaisa & jazzcash payment method for our customers'
            ease
          </p>
          <h6>Shop from Verified Vendors</h6>
          <p>
            Daraz understands that online shopping in Pakistan comes with its
            fair share of risks. This is why with Daraz Marketplace and Daraz
            Mall customers have the security of choosing from verified vendors
            and brands from Karachi, Lahore, Islamabad and all across Pakistan.
            Now you’ll never have to second guess authenticity because Daraz
            makes sure to do it for you!
          </p>
          <h6>Shop Around the World with Daraz Global Collection</h6>
          <p>
            International sellers and local convenience come together with Daraz
            Global collection. Get the chance to shop online from vendors around
            the world without leaving the Daraz website. Featuring thousands of
            novelty gadgets and accessories, Daraz Global Collection offers you
            a selection of products that you won’t find anywhere else when
            you’re online shopping in Pakistan.
          </p>
          <h6>Avail Exclusive Discounts, Offers, and Promotions</h6>
          <p>
            Online shopping with Daraz means you get the chance to avail
            exclusive online-only promotional packages as well as discount
            vouchers from our vendors when you shop from their pages. Our flash
            sales give you customized product offers all curated with the help
            of our advanced AI technology so you always have deals you’ll
            actually be interested in!
          </p>
          <h6>Buy Value, not Just Goods with Daraz Care</h6>
          <p>
            Daraz does not just cater online shopping in Pakistan but also aims
            to simplify the way you give back to society. With charities
            spanning across sectors of education, health care, environmental
            preservation, and shelters, you can choose to make a big difference
            with a few, simple clicks.
          </p>
          <h6>Simplify Corporate Purchases</h6>
          <p>
            Who says corporate purchases need to be a complicated affair? When
            you opt for Daraz Corporate, you get an efficient and transparent
            solution for your business’ bulk purchasing needs. We’re proud to be
            working with some of the most prestigious organizations in Pakistan
            across a number of different industries.
          </p>
        </div>
        <Gallardo_CategoriesBrands />
        {/* Remaining categories/brands from App.jsx for Gallardo_CategoriesBrands */}
        <div className={styles["foot3-div4"]}>
          <h6>Women's Fashion</h6>
          <p>
            Al-Karam Studio , Warda , Salitex , Bonanza Satrangi , Edenrobe ,
            Firdous , Junaid Jamshed , Limelight , Sana Safinaz , Mahru ,
            Pushup Bra , Women Undergarments
          </p>
          <h6>Men's Fashion</h6>
          <p>
            Men's Shirts , Men's T-Shirts
          </p>
          <h6>Online Grocery Store</h6>
          <p>
            Oil & Ghee , Basmati Rice , Dried Fruits , Chocolates , Mattresses
          </p>
          <h6>Online Book Store</h6>
          <p>
            English Books , Islamic Books , History Books , English Literature
            Books , Kids Urdu Stories , Pride & Prejudice , Harry Potter Story
            Books , Namal Novel , Nimra Ahmed Novels
          </p>
          <h6>Air Conditioners</h6>
          <p>
            Kenwood Ac , Haier Ac , Gree Ac , Dawlance Ac , Orient Ac , Ecostar
            Ac , Inverex Solar Ac , Pel Ac
          </p>
          <h6>Top Mobile Phones</h6>
          <p>
            Nokia G20 , redmi 9 , realme 7 pro , realme c15 , realme c21 , vivo
            y20s , realme c11 Price in Pakistan , itel vision 1 pro price in
            pakistan , samsung galaxy a02 price in pakistan , Infinix Hot 10 ,
            Infinix Hot 8 , Infinix Hot 9 , Infinix Note 10 Pro , Infinix Note
            7 , Infinix Note 8 , Infinix Zero 8 , Inifnix Smart 5 , iPhone 11 ,
            iPhone 12 , iphone 12 Pro Max , iPhone 12 Pro , iPhone 6 , Itel
            A25 , Mi 10T , Nokia 105 , Oppo A15 , Oppo A15S , Oppo A53 , Oppo
            A54 , Infinix Zero X Pro , Infinix Zero X Neo , Oppo F19 , Oppo
            Reno 5 , Oppo Reno 5 Pro , Xiaomi Poco M3 Pro , Realme 6 Pro ,
            Realme 8 , Realme Narzo 30A , Samsung A02S , Samsung A11 , Samsung
            A12 , Samsung A31 , Vivo Y33s , Infinix Note 11 , Tecno Spark 6 Go
            , Samsung A52s , Samsung Tab A7 Lite
          </p>
          <h6>Shop Worldwide with Lazada</h6>
          <p>
            Singapore , Malaysia , Philippines , Indonesia , Vietnam , Thailand
          </p>
          <h6>Shop Worldwide with Miravia</h6>
          <p>Spain , Portugal</p>
        </div>
      </div>

      <Sian_InternationalSocialCopyright />
    </>
  );
};

export default Aventador_Footer;