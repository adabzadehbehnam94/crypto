"use client"

import styles from "./page.module.css";
import { fetchData } from "./Components/serverAction";
import Image from "next/image";
import { useEffect, useState } from "react";



export default function Home() {
    const [coins,setcoins] = useState([])
    const [search , setsearch] = useState("")
    useEffect(()=>{
      const fetchApi = async()=>{
        const data = await fetchData()
        setcoins(data)
      }
      fetchApi()
    },[])

    const handleSearch = (event)=>{
      setsearch(event.target.value)
    }

    const priceColor = (price)=>{
      
      if(price < 0){
        return "red"
      }
      if(price > 0 ){
        return "green"
      }else{
        return "black"
      }
    }
    const searchCoin = coins.filter((item) => item.name.toLowerCase().includes(search))
  return (
    <div className={styles.container}>
      <input className={styles.search} type="text" placeholder="Search" value={search} onChange={handleSearch} name="search"/>
      <div className={styles.mainBoard}>
        {searchCoin.map((item)=>(
          <div className={styles.cryptoItem} key={item.id}>
            <Image src={item.image} alt="crypto-image" width={20} height={20}/>
            <span className="">{item.symbol.toUpperCase()}</span>
            <span className="">{item.name}</span>
            <span className="">{item.current_price}</span>
            <span className="" style={{color : priceColor(item.price_change_24h)}}>{item.price_change_24h.toFixed(3)}</span>
            <span className="">{item.market_cap.toLocaleString()}</span>
          </div>
        ))}
        
      </div>
    </div>
  );
}
