import { DataForGainAndLos, fearAndGreedIndexData, fetchData, testNewApi, totalMarketData, totalMarketHistory } from "./Components/serverAction";
import Main from "./main";

export default async function Home(){
    const data = await fetchData()
    const TotalMarket = await totalMarketData()
    const FearAndGreedIndex = await fearAndGreedIndexData()
    const MarketHistory = await totalMarketHistory()


    const GainAndLos = await DataForGainAndLos()
    return(
        <Main 
        data={data} 
        gainAndLos={GainAndLos} 
        totalMarket={TotalMarket} 
        fearAndGreedIndex={FearAndGreedIndex}
        marketHistory={MarketHistory}
        />
    )
}