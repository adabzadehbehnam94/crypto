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
  // const [gainers, setgainers] = useState("")
  // const [losers, setlosers] = useState("")

  

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchData()
      setcoins(data)
    }
    fetchApi()
  }, [])

  const searchCoin = coins.filter((item) => item.name.toLowerCase().includes(search))
  const gainers = coins.filter((item)=> item.price_change_percentage_24h > 1)
  const losers = coins.filter((item)=> item.price_change_percentage_24h < -1)

  // const calGainers = ()=>{
  //   coins.filter((item)=> item.price_change_percentage_24h > 0)
  // }



  const priceColor = (price) => {

    if (price < 0) {
      return "#f52c39"
    }
    if (price > 0) {
      return "#38a650"
    } else {
      return "black"
    }
  }

  return (
    <Context.Provider value={{ search, setsearch, handleSearch, searchCoin }}>
      <div className="bg-[#020b1b]">

        <div className="container mx-auto px-5 ">
          <HeaderSearch />
          <div className="grid grid-cols-4 gap-3">
            <div className={`${styles.mainBoard} col-span-3 border-2 border-[#0f1828]`}>
              {searchCoin.map((item) => (
                <div className={styles.cryptoItem} key={item.id} >
                  <span>{searchCoin.indexOf(item) + 1}</span>
                  <Image src={item.image} alt="crypto-image" width={20} height={20} />
                  <div className="flex flex-col text-center">
                    <span className="">{item.name}</span>
                    <span className="">{item.symbol}</span>
                  </div>
                  <span className="">${item.current_price}</span>
                  <span className="" style={{ color: priceColor(item.price_change_percentage_24h) }}>{`${item.price_change_percentage_24h?.toFixed(3)}%`}</span>
                  <span className="">${item.market_cap.toLocaleString()}</span>
                  <span className="">${item.total_volume.toLocaleString()}</span>
                </div>
              ))}

            </div>
            <div className="col-span-1 bg-[#050e1f] rounded-lg border-2 border-[#0f1828] px-3">
              <div className="border-b-2 border-[#0f1828] text-white">
                <h3 className="text-2xl">top Gainers</h3>
                {gainers.map((item)=>(
                  <div key={item.id}>
                    <p>{item.name}</p>
                    <p className="text-green-500">{item.price_change_percentage_24h}%</p>
                  </div>
                ))}
                {gainers.length}
              </div>
              <div className="text-white">
                <h3 className="text-2xl ">top Losers</h3>
                {losers.map((item)=>(
                  <div key={item.id}>
                    <p>{item.name}</p>
                    <p className="text-red-500">{item.price_change_percentage_24h}%</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}
