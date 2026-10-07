"use client"

import { fearAndGreedIndexData, totalMarketData } from "./serverAction";
import TotalMarketCard from "./totalMarketCard";
import Image from "next/image";
import marketcapIcon from "@/public/icons/marketCap.png"
import TradinVolumeIcon from "@/public/icons/TradinVolume.png"
import BTCIcon from "@/public/icons/BTC Dominance.png"
import fearAndgreedIcon from "@/public/icons/Fear&greed Index.png"
import { fearAndGreed, priceColor, summaryPrice } from "./functions";

export default function TotalMarket({totalMarketData , fearAndGreedData}) {

    


    return (
        <section className="p-5  text-white">

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-3">

                <div className="border-2 border-[#0f1828] rounded-lg bg-[#050f1e] p-3">
                    <div className="flex gap-2 mb-3">
                        <Image className="h-[fit-content]" src={marketcapIcon} alt="image" width={40} height={40} />
                        <div>
                            <p className="text-md">Market Cap</p>
                            <p className="text-xs text-[#9ea3af]">{summaryPrice(totalMarketData.total_market_cap.usd)}</p>
                            <p className="mb-3" style={{color : priceColor(totalMarketData.market_cap_change_percentage_24h_usd)}}>{totalMarketData.market_cap_change_percentage_24h_usd.toFixed(2)}%</p>
                        </div>
                    </div>

                </div>

                <div className="border-2 border-[#0f1828] rounded-lg bg-[#050f1e] p-3">
                    <div className="flex gap-2 mb-3">
                        <Image className="h-[fit-content]" src={TradinVolumeIcon} alt="image" width={40} height={40} />
                        <div>
                            <p className="text-md">24h Trading Volume</p>
                            <p className="text-xs text-[#9ea3af]">{summaryPrice(totalMarketData.total_volume.usd)}</p>
                            <p className="mb-3" style={{color : priceColor(totalMarketData.volume_change_percentage_24h_usd)}}>{totalMarketData.volume_change_percentage_24h_usd.toFixed(2)}%</p>
                        </div>
                    </div>

                </div>

                <div className="border-2 border-[#0f1828] rounded-lg bg-[#050f1e] p-3">
                    <div className="flex gap-2 mb-3">
                        <Image className="h-[fit-content]" src={BTCIcon} alt="image" width={40} height={40} />
                        <div>
                            <p className="text-md">BTC Dominance</p>
                            <p className="text-xs text-[#9ea3af]">{totalMarketData.market_cap_percentage.btc.toFixed(2)}%</p>
                            {/* <p className="mb-3">${totalMarket.market_cap_change_percentage_24h_usd}</p> */}
                        </div>
                    </div>

                </div>

                <div className="border-2 border-[#0f1828] rounded-lg bg-[#050f1e] p-3">
                    <div className="flex gap-2 mb-3">
                        <Image className="h-[fit-content]" src={fearAndgreedIcon} alt="image" width={40} height={40} />
                        <div>
                            <p className="text-md">{fearAndGreedData.name}</p>
                            <p className="text-xs text-[#9ea3af]">{fearAndGreedData.data[0].value}</p>
                            <p className={`mb-3 ${fearAndGreed(fearAndGreedData.data[0].value_classification)}`}>{fearAndGreedData.data[0].value_classification}</p>
                        </div>
                    </div>

                </div>


            </div>
        </section>
    )
}