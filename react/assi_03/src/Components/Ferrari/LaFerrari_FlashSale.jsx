import React from "react";
import Sls from "../Merc/Sls";
import { data } from "../../data";
import styles from "./LaFerrari_FlashSale.module.css";

const LaFerrari_FlashSale = () => {
    return (
        <div className={styles.heading}>
            <h4>Flash Sale</h4>
            <div className={styles.cardContainer}>
                {data.map((e, i) => (
                    <Sls
                        key={i}
                        img={e.image}
                        title={e.title}
                        price={e.price}
                        desc={e.desc}
                        count={e.rating.count}
                        category={e.category}
                    />
                ))}
            </div>
        </div>
    );
};

export default LaFerrari_FlashSale;