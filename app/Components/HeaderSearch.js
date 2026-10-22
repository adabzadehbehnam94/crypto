import { useContext, useState } from "react"
import styles from "../page.module.css";
import { Context } from "../main";

export default function HeaderSearch() {

    const {search , handleSearch} = useContext(Context)    

    return (
        <div className="md:h-100 bg-[url(../public/pictures/backgroundCrypto.png)] text-white md:px-10 px-5 py-15">
            <h2 className="text-4xl md:text-5xl md:w-100 mb-10">
                Track the world of cryptocurrencies
            </h2>
            <h4 className="text-md md:text-lg text-[#9ea4af] md:w-80 mb-10">
                Real-time prices,charts,and market cap of 13000+ cryptocurrencies
            </h4>
            <input className={`${styles.search} w-full md:w-150`} type="text" placeholder="Search cryptocurrency..." value={search} onChange={handleSearch} name="search" />
        </div>
    )
}