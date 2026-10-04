import { fearAndGreedIndexData, totalMarketData } from "./serverAction";
import TotalMarketCard from "./totalMarketCard";
import marketcapIcon from "@/public/icons/marketCap.png"
import TradinVolumeIcon from "@/public/icons/TradinVolume.png"
import BTCIcon from "@/public/icons/BTC Dominance.png"
import fearAndgreedIcon from "@/public/icons/Fear&greed Index.png"

export default async function TotalMarket() {

    const totalMarket = await totalMarketData()
    const fearAndGreedIndex = await fearAndGreedIndexData()


    return (
        <section className="p-5  text-white">

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-3">

                {/* <TotalMarketCard 
                image={marketcapIcon}
                 name={"Market Cap"} 
                 price={totalMarket.total_market_cap.usd} 
                 percent={totalMarket.market_cap_change_percentage_24h_usd} />


                <TotalMarketCard 
                image={TradinVolumeIcon}
                 name={"24h Trading Volume"} 
                 price={totalMarket.total_volume.usd} 
                 percent={totalMarket.volume_change_percentage_24h_usd} />

                 <TotalMarketCard 
                image={BTCIcon}
                 name={"BTC Dominance"} 
                 price={totalMarket.market_cap_percentage.btc}
                 percent={totalMarket.market_cap_change_percentage_24h_usd} />

                 <TotalMarketCard 
                image={marketcapIcon}
                 name={"Market Cap"} 
                 price={totalMarket.total_market_cap.usd} 
                 percent={totalMarket.market_cap_change_percentage_24h_usd} /> */}

                <div className="border-2 border-[#0f1828] rounded-lg bg-[#050f1e] p-3">
                    <div className="flex gap-2 mb-3">
                        <Image className="h-[fit-content]" src={marketcapIcon} alt="image" width={40} height={40} />
                        <div>
                            <p className="text-md">Market Cap</p>
                            <p className="text-xs text-[#9ea3af]">{totalMarket.total_market_cap.usd}</p>
                            <p className="mb-3">${totalMarket.market_cap_change_percentage_24h_usd}</p>
                        </div>
                    </div>

                </div>

                <div className="border-2 border-[#0f1828] rounded-lg bg-[#050f1e] p-3">
                    <div className="flex gap-2 mb-3">
                        <Image className="h-[fit-content]" src={TradinVolumeIcon} alt="image" width={40} height={40} />
                        <div>
                            <p className="text-md">24h Trading Volume</p>
                            <p className="text-xs text-[#9ea3af]">{totalMarket.total_volume.usd}</p>
                            <p className="mb-3">${totalMarket.volume_change_percentage_24h_usd}</p>
                        </div>
                    </div>

                </div>

                <div className="border-2 border-[#0f1828] rounded-lg bg-[#050f1e] p-3">
                    <div className="flex gap-2 mb-3">
                        <Image className="h-[fit-content]" src={BTCIcon} alt="image" width={40} height={40} />
                        <div>
                            <p className="text-md">BTC Dominance</p>
                            <p className="text-xs text-[#9ea3af]">{totalMarket.market_cap_percentage.btc}</p>
                            {/* <p className="mb-3">${totalMarket.market_cap_change_percentage_24h_usd}</p> */}
                        </div>
                    </div>

                </div>

                <div className="border-2 border-[#0f1828] rounded-lg bg-[#050f1e] p-3">
                    <div className="flex gap-2 mb-3">
                        <Image className="h-[fit-content]" src={fearAndgreedIcon} alt="image" width={40} height={40} />
                        <div>
                            <p className="text-md">{fearAndGreedIndex.name}</p>
                            <p className="text-xs text-[#9ea3af]">{fearAndGreedIndex.data[0].value}</p>
                            <p className="mb-3">${fearAndGreedIndex.data[0].value_classification}</p>
                        </div>
                    </div>

                </div>


            </div>
        </section>
    )
}