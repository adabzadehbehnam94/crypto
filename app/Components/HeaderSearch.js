import { useContext, useState } from "react"
import styles from "../page.module.css";
import { Context } from "../page";

export default function HeaderSearch() {

    const {search , handleSearch} = useContext(Context)    

    return (
        <div className="h-100 bg-[url(../public/pictures/backgroundCrypto.png)] text-white px-10 py-15">
            <h2 className="text-5xl w-100 mb-10">
                Track the world of cryptocurrencies
            </h2>
            <h4 className="text-lg text-[#9ea4af] w-80 mb-10">
                Real-time prices,charts,and market cap of 13000+ cryptocurrencies
            </h4>
            <input className={styles.search} type="text" placeholder="Search cryptocurrency..." value={search} onChange={handleSearch} name="search" />
        </div>
    )
}