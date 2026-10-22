"use client"

import styles from "./page.module.css";
import { priceColor, summaryPrice } from "./Components/functions";
import Image from "next/image";
import { createContext, useEffect, useState } from "react";
import HeaderSearch from "./Components/HeaderSearch";
import TrendingCoins from "./Components/trendingCoins";
import TotalMarket from "./Components/totalMarket";
import { Line, LineChart, ResponsiveContainer } from "recharts";


export const Context = createContext()

export default function Main({ data, gainAndLos, totalMarket, fearAndGreedIndex, marketHistory }) {
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

        <div className="container mx-auto px-3 md:px-5 ">
          <HeaderSearch />
          <TotalMarket totalMarketData={totalMarket} fearAndGreedData={fearAndGreedIndex} totalMarketHistory={marketHistory} />
          <TrendingCoins data={coins} />

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-3 my-5">
            <div className={`${styles.mainBoard}  lg:col-span-3 border-2 border-[#0f1828] order-last lg:order-first`}>
              <div className="invisible md:visible xl:visible grid grid-cols-6 text-[#7c838e] ml-4 border-b-2 border-[#0f1828] py-5">
                <div className="flex gap-10">

                  <p>#</p>
                  <p>Coin</p>
                </div>
                <p>Price</p>
                <p>24h %</p>
                <p>Market Cap</p>
                <p>Volume (24h)</p>
                <p className="justify-end">Last 7 Days</p>
              </div>
              {searchCoin.slice(0, 10).map((item) => (
                <div className={`${styles.cryptoItem} grid grid-cols-3 md:grid-cols-6`} key={item.id} >
                  <div className="flex items-center">
                    <p className="mr-5">{searchCoin.indexOf(item) + 1}</p>
                    <Image className="h-[fit-content]" src={item.image} alt="crypto-image" width={20} height={20} />
                    <div className="flex flex-col text-center">
                      <span className="">{item.name}</span>
                      <span className="">{item.symbol}</span>
                    </div>
                  </div>
                  <p className="md:ml-5 ml-3">${item.current_price.toFixed(2)}</p>
                  <p style={{ color: priceColor(item.price_change_percentage_24h) }}>{`${item.price_change_percentage_24h?.toFixed(3)}%`}</p>
                  <p>{summaryPrice(item.market_cap)}</p>
                  <p>{summaryPrice(item.total_volume)}</p>
                  <ResponsiveContainer width={100} height={40}>

                    <LineChart data={item.sparkline_in_7d.price.map((price) => ({ price, }))} className="w-full h-[fit-content]">
                      <Line dataKey={"price"} type={"monotone"} dot={false} stroke={priceColor(item.price_change_percentage_24h)} strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              ))}
            </div>
            <div className="md:flex lg:block  lg:col-span-1 justify-between flex-row bg-[#050e1f] rounded-lg border-2 border-[#0f1828] px-3 order-first lg:order-last">
              <div className="border-b-2  border-[#0f1828] text-white">
                <h3 className="text-2xl mt-4 mb-6">top Gainers</h3>
                {gainersArray(gainersData).slice(0, 5).map((item) => (
                  <div key={item.id} className="flex justify-between lg:flex-col xl:flex-row mb-3 gap-3">
                    <div className="flex gap-2">
                      <p>{gainersArray(gainersData).indexOf(item) + 1}</p>
                      <Image className="h-[fit-content]" alt="image" src={item.image} width={30} height={30} />
                      <p>{item.name}</p>
                      <p>({item.symbol})</p>
                    </div>
                    <p className="text-green-500">{item.price_change_percentage_24h.toFixed(2)}%</p>
                  </div>
                ))}

              </div>
              <div className="text-white">
                <h3 className="text-2xl mt-4 mb-6">top Losers</h3>
                {losersArray(losersData).slice(0, 5).map((item) => (

                  <div key={item.id} className="flex justify-between lg:flex-col xl:flex-row mb-3 gap-3">
                    <div className="flex gap-2">
                      <p>{losersArray(losersData).indexOf(item) + 1}</p>
                      <Image className="h-[fit-content]" alt="image" src={item.image} width={30} height={30} />
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
