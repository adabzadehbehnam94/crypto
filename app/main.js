"use client"

import styles from "./page.module.css";
import { priceColor } from "./Components/functions";
import Image from "next/image";
import { createContext, useEffect, useState } from "react";
import HeaderSearch from "./Components/HeaderSearch";
import TrendingCoins from "./Components/trendingCoins";
import TotalMarket from "./Components/totalMarket";


export const Context = createContext()

export default function Main({data , gainAndLos , totalMarket , fearAndGreedIndex}) {
  const [coins, setcoins] = useState(data)


  const handleSearch = (event) => {
    setsearch(event.target.value)
  }
  const [search, setsearch] = useState("")
  const [GainAndLos, setGainAndLos] = useState(gainAndLos)
  

  const searchCoin = coins.filter((item) => item.name.toLowerCase().includes(search))

  const gainersData = GainAndLos.filter((item) => item.price_change_percentage_24h > 0)

  const losersData = GainAndLos.filter((item) => item.price_change_percentage_24h < 0)

  const gainersArray = (array) => {
    const sorter = [...array]
    for (const item of sorter) {
      let priceFirst = item.price_change_percentage_24h
      let nameFirst = item.name
      let imageFirst = item.image
      let symbolFirst = item.symbol
      for (let i = sorter.indexOf(item) + 1; i < sorter.length; i++) {
        let priceSecond = sorter[i].price_change_percentage_24h
        let nameSecond = sorter[i].name
        let imageSecond = sorter[i].image
        let symbolSecond = sorter[i].symbol
        if (priceSecond > priceFirst) {
          item.price_change_percentage_24h = priceSecond
          item.name = nameSecond
          item.image = imageSecond
          item.symbol = symbolSecond
          sorter[i].price_change_percentage_24h = priceFirst
          sorter[i].name = nameFirst
          sorter[i].image = imageFirst
          sorter[i].symbol = symbolFirst

          priceSecond = sorter[i].price_change_percentage_24h
          nameSecond = sorter[i].name
          imageSecond = sorter[i].image
          symbolSecond = sorter[i].symbol
          priceFirst = item.price_change_percentage_24h
          nameFirst = item.name
          imageFirst = item.image
          symbolFirst = item.symbol

        }
      }
    }

    return sorter

  }


  const losersArray = (array) => {
    const sorter = [...array]
    for (const item of sorter) {
      let priceFirst = item.price_change_percentage_24h
      let nameFirst = item.name
      let imageFirst = item.image
      let symbolFirst = item.symbol
      for (let i = sorter.indexOf(item) + 1; i < sorter.length; i++) {
        let priceSecond = sorter[i].price_change_percentage_24h
        let nameSecond = sorter[i].name
        let imageSecond = sorter[i].image
        let symbolSecond = sorter[i].symbol
        if (priceSecond < priceFirst) {
          item.price_change_percentage_24h = priceSecond
          item.name = nameSecond
          item.image = imageSecond
          item.symbol = symbolSecond
          sorter[i].price_change_percentage_24h = priceFirst
          sorter[i].name = nameFirst
          sorter[i].image = imageFirst
          sorter[i].symbol = symbolFirst

          priceSecond = sorter[i].price_change_percentage_24h
          nameSecond = sorter[i].name
          imageSecond = sorter[i].image
          symbolSecond = sorter[i].symbol
          priceFirst = item.price_change_percentage_24h
          nameFirst = item.name
          imageFirst = item.image
          symbolFirst = item.symbol

        }
      }
    }

    return sorter

  }



  return (
    <Context.Provider value={{ search, setsearch, handleSearch, searchCoin }}>
      <div className="bg-[#020b1b]">

        <div className="container mx-auto px-5 ">
          <HeaderSearch />
          <TotalMarket totalMarketData={totalMarket} fearAndGreedData={fearAndGreedIndex}/>
          <TrendingCoins data={coins} />
          
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
                <h3 className="text-2xl mb-4">top Gainers</h3>
                {gainersArray(gainersData).slice(0, 5).map((item) => (
                  <div key={item.id} className="flex justify-between mb-3">
                    <div className="flex gap-2">
                      <p>{gainersArray(gainersData).indexOf(item) + 1}</p>
                      <Image alt="image" src={item.image} width={30} height={30} />
                      <p>{item.name}</p>
                      <p>({item.symbol})</p>
                    </div>
                    <p className="text-green-500">{item.price_change_percentage_24h.toFixed(2)}%</p>
                  </div>
                ))}

              </div>
              <div className="text-white">
                <h3 className="text-2xl mb-4">top Losers</h3>
                {losersArray(losersData).slice(0, 5).map((item) => (

                  <div key={item.id} className="flex justify-between  mb-3">
                    <div className="flex gap-2">
                      <p>{losersArray(losersData).indexOf(item) + 1}</p>
                      <Image alt="image" src={item.image} width={30} height={30} />
                      <p>{item.name}</p>
                      <p>({item.symbol})</p>
                    </div>
                    <p className="text-red-500">{item.price_change_percentage_24h.toFixed(2)}%</p>
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
