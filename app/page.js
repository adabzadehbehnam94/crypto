import styles from "./page.module.css";
import { fetchData } from "./Components/serverAction";
import Image from "next/image";

export default async function Home() {
  const data = await fetchData()
  return (
    <div className={styles.container}>
      <div className={styles.mainBoard}>
        {data.map((item)=>(
          <div className={styles.cryptoItem} key={item.id}>
            <Image src={item.image} alt="crypto-image" width={20} height={20}/>
            <span className="">{item.symbol.toUpperCase()}</span>
            <span className="">{item.name}</span>
            <span className="">{item.current_price}</span>
            <span className="">{item.price_change_24h}</span>
            <span className="">{item.market_cap}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
