"use client"

import styles from "./page.module.css";
import { fetchData } from "./Components/serverAction";
import Image from "next/image";
import { createContext, useEffect, useState } from "react";
import HeaderSearch from "./Components/HeaderSearch";


export const Context = createContext()

export default function Home() {
  const [coins, setcoins] = useState([])
  

  const handleSearch = (event) => {
    setsearch(event.target.value)
  }
  const [search, setsearch] = useState("")

  const searchCoin = coins.filter((item) => item.name.toLowerCase().includes(search))

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchData()
      setcoins(data)
    }
    fetchApi()
  }, [])



  const priceColor = (price) => {

    if (price < 0) {
      return "red"
    }
    if (price > 0) {
      return "green"
    } else {
      return "black"
    }
  }

  return (
    <Context.Provider value={{search , setsearch ,handleSearch, searchCoin}}>
      <div className="bg-[#020b1b]">

        <div className="container mx-auto px-5 ">
          <HeaderSearch />
          <div className={styles.mainBoard}>
            {searchCoin.map((item) => (
              <div className={styles.cryptoItem} key={item.id} >
                <Image src={item.image} alt="crypto-image" width={20} height={20} />
                <span className="">{item.symbol.toUpperCase()}</span>
                <span className="">{item.name}</span>
                <span className="">{item.current_price}</span>
                <span className="" style={{ color: priceColor(item.price_change_24h) }}>{item.price_change_24h?.toFixed(3)}</span>
                <span className="">{item.market_cap.toLocaleString()}</span>
              </div>
            ))}

          </div>
        </div>
      </div>
    </Context.Provider>
  );
}
