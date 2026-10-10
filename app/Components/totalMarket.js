"use client"

import { fearAndGreedIndexData, totalMarketData } from "./serverAction";
import TotalMarketCard from "./totalMarketCard";
import Image from "next/image";
import marketcapIcon from "@/public/icons/marketCap.png"
import TradinVolumeIcon from "@/public/icons/TradinVolume.png"
import BTCIcon from "@/public/icons/BTC Dominance.png"
import fearAndgreedIcon from "@/public/icons/Fear&greed Index.png"
import { fearAndGreed, priceColor, summaryPrice } from "./functions";
import { Line, LineChart, ResponsiveContainer } from "recharts"; import FearAndGreedChart from "./fearAndGreedChart";
;

export default function TotalMarket({ totalMarketData, fearAndGreedData, totalMarketHistory }) {

    const marketCap = totalMarketHistory.map((item) => ({ time: item.t, value: item.mcap }))

    const volumeData = totalMarketHistory.map((item) => ({ time: item.t, value: item.vol }))

    const dominanceData = totalMarketHistory.map((item) => ({ time: item.t, value: item.btcDom }))



    return (
        <section className="p-5 text-white">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">

                <div className=" flex flex-col justify-center h-50  border-2 border-[#0f1828] rounded-lg bg-[#050f1e] p-6">
                    <div className="flex gap-5 mb-3 items-center">
                        <Image className="h-[fit-content]" src={marketcapIcon} alt="image" width={70} height={70} />
                        <div>
                            <p className="text-md text-[#9ea3af]">Market Cap</p>
                            <p className="text-3xl">{summaryPrice(totalMarketData.total_market_cap.usd)}</p>
                            <p className="mb-3 text-md" style={{ color: priceColor(totalMarketData.market_cap_change_percentage_24h_usd) }}>{totalMarketData.market_cap_change_percentage_24h_usd.toFixed(2)}%</p>
                            
                        </div>
                    </div>

                    <ResponsiveContainer width="100%" height={50}>
                        <LineChart data={marketCap.map((item) => (item))}>
                            <Line dataKey={"value"} strokeWidth={2} type="monotone" dot={false} stroke={priceColor(totalMarketData.market_cap_change_percentage_24h_usd)} />
                        </LineChart>
                    </ResponsiveContainer>

                </div>

                <div className="border-2 border-[#0f1828] h-50 rounded-lg bg-[#050f1e] p-6">
                    <div className="flex gap-5 mb-3 items-center">
                        <Image className="h-[fit-content]" src={TradinVolumeIcon} alt="image" width={70} height={70} />
                        <div>
                            <p className="text-md text-[#9ea3af]">24h Trading Volume</p>
                            <p className="text-3xl">{summaryPrice(totalMarketData.total_volume.usd)}</p>
                            <p className="mb-3 text-md" style={{ color: priceColor(totalMarketData.volume_change_percentage_24h_usd) }}>{totalMarketData.volume_change_percentage_24h_usd.toFixed(2)}%</p>

                        </div>
                    </div>
                    <ResponsiveContainer  width="100%" height={50}>
                        <LineChart data={volumeData.map((item) => (item))}>
                            <Line strokeWidth={2} dataKey={"value"} type="monotone" dot={false} stroke={priceColor(totalMarketData.volume_change_percentage_24h_usd)} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="border-2 border-[#0f1828] h-50 rounded-lg bg-[#050f1e] p-6">
                    <div className="flex gap-5 mb-3">
                        <Image className="h-[fit-content]" src={BTCIcon} alt="image" width={70} height={70} />
                        <div>
                            <p className="text-md text-[#9ea3af]">BTC Dominance</p>
                            <p className="text-3xl">{totalMarketData.market_cap_percentage.btc.toFixed(2)}%</p>
                            {/* <p className="mb-3">${totalMarket.market_cap_change_percentage_24h_usd}</p> */}

                        </div>
                    </div>
                    <ResponsiveContainer  width="100%" height={50} >
                        <LineChart data={dominanceData.map((item) => (item))}>
                            <Line dataKey={"value"} strokeWidth={2} type="monotone" dot={false} stroke={priceColor(totalMarketData.volume_change_percentage_24h_usd)} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="border-2 border-[#0f1828] h-50 rounded-lg bg-[#050f1e] p-6">
                    <div className="flex gap-5">
                        <Image className="h-[fit-content]" src={fearAndgreedIcon} alt="image" width={70} height={70} />
                        <div>
                            <p className="text-md text-[#9ea3af]">{fearAndGreedData.name}</p>
                            <p className="text-3xl">{fearAndGreedData.data[0].value}</p>
                            <p className={`text-md ${fearAndGreed(fearAndGreedData.data[0].value_classification)}`}>{fearAndGreedData.data[0].value_classification}</p>

                        </div>
                    </div>

                    <FearAndGreedChart value={fearAndGreedData.data[0].value} />

                </div>


            </div>
        </section>
    )
}