"use client"

import { fearAndGreedIndexData, totalMarketData } from "./serverAction";
import TotalMarketCard from "./totalMarketCharts";
import Image from "next/image";
import marketcapIcon from "@/public/icons/marketCap.png"
import TradinVolumeIcon from "@/public/icons/TradinVolume.png"
import BTCIcon from "@/public/icons/BTC Dominance.png"
import fearAndgreedIcon from "@/public/icons/Fear&greed Index.png"
import { fearAndGreed, priceColor, summaryPrice } from "./functions";
import { Line, LineChart, ResponsiveContainer } from "recharts"; import FearAndGreedChart from "./fearAndGreedChart";
import TotalMarketCharts from "./totalMarketCharts";
;

export default function TotalMarket({ totalMarketData, fearAndGreedData, totalMarketHistory }) {

    const marketCap = totalMarketHistory.map((item) => ({ time: item.t, value: item.mcap }))

    const volumeData = totalMarketHistory.map((item) => ({ time: item.t, value: item.vol }))

    const dominanceData = totalMarketHistory.map((item) => ({ time: item.t, value: item.btcDom }))



    return (
        <section className="pt-5 pb-5 text-white">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">

                <div className=" flex flex-col  border-2 border-[#0f1828] rounded-lg bg-[#050f1e] lg:p-2 xl:p-6">
                    <div className="flex lg:flex-row flex-col gap-2 lg:gap-5 mb-3 mt-2  items-center">
                        <Image className="h-[fit-content] w-10 lg:w-15 xl:w-20" src={marketcapIcon} alt="image" width={70} height={70} />
                        <div>
                            <p className=" lg:text-md text-[#9ea3af]">Market Cap</p>
                            <p className="text-2xl lg:text-3xl">{summaryPrice(totalMarketData.total_market_cap.usd)}</p>
                            <p className="mb-3 text-md" style={{ color: priceColor(totalMarketData.market_cap_change_percentage_24h_usd) }}>{totalMarketData.market_cap_change_percentage_24h_usd.toFixed(2)}%</p>

                        </div>
                    </div>

                    <TotalMarketCharts priceData={marketCap} color={totalMarketData.market_cap_change_percentage_24h_usd}/>

                </div>

                <div className="border-2 border-[#0f1828]  rounded-lg bg-[#050f1e] lg:p-2 xl:p-6">
                    <div className="flex lg:flex-row flex-col gap-2 lg:gap-5 mb-3 mt-2 items-center">
                        <Image className="h-[fit-content] w-10 lg:w-15 xl:w-20" src={TradinVolumeIcon} alt="image" width={70} height={70} />
                        <div>
                            <p className="lg:text-md text-[#9ea3af]">24h Trading Volume</p>
                            <p className="text-2xl lg:text-3xl">{summaryPrice(totalMarketData.total_volume.usd)}</p>
                            <p className="mb-3 text-md" style={{ color: priceColor(totalMarketData.volume_change_percentage_24h_usd) }}>{totalMarketData.volume_change_percentage_24h_usd.toFixed(2)}%</p>

                        </div>
                    </div>
                    
                    <TotalMarketCharts priceData={volumeData} color={totalMarketData.volume_change_percentage_24h_usd}/>
                </div>

                <div className="border-2 border-[#0f1828]  rounded-lg bg-[#050f1e] lg:p-6">
                    <div className="flex lg:flex-row flex-col gap-2 lg:gap-5 mb-3 mt-2 items-center">
                        <Image className="h-[fit-content] w-10 lg:w-15 xl:w-20" src={BTCIcon} alt="image" width={70} height={70} />
                        <div>
                            <p className="lg:text-md text-[#9ea3af]">BTC Dominance</p>
                            <p className="text-2xl lg:text-3xl">{totalMarketData.market_cap_percentage.btc.toFixed(2)}%</p>
                            {/* <p className="mb-3">${totalMarket.market_cap_change_percentage_24h_usd}</p> */}

                        </div>
                    </div>
                    
                    
                </div>

                <div className="border-2 border-[#0f1828] rounded-lg bg-[#050f1e] lg:p-4 xl:p-6">
                    <div className="flex lg:flex-row flex-col gap-2 lg:gap-5 mb-3 mt-2 items-center">
                        <Image className="h-[fit-content] w-10 lg:w-15 xl:w-20" src={fearAndgreedIcon} alt="image" width={70} height={70} />
                        <div>
                            <p className="lg:text-md xl:text-center text-[#9ea3af]">{fearAndGreedData.name}</p>
                            <p className="text-2xl lg:text-3xl">{fearAndGreedData.data[0].value}</p>
                            <p className={`text-md ${fearAndGreed(fearAndGreedData.data[0].value_classification)}`}>{fearAndGreedData.data[0].value_classification}</p>

                        </div>
                    </div>

                    <FearAndGreedChart value={fearAndGreedData.data[0].value} />

                </div>


            </div>
        </section>
    )
}