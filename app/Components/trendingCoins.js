"use client"

import Image from "next/image";
import { priceColor } from "./functions";

export default function TrendingCoins({data}) {
   
    return (
        <section className="p-5 border-2 border-[#0f1828] rounded-lg text-white">
            <h1>Trending Coins</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-3">
                {data?.slice(0,6).map((item) => (
                   
                    <div key={item.id} className="border-2 border-[#0f1828] rounded-lg bg-[#050f1e] p-3">
                        <div className="flex gap-2 mb-3">
                            <Image className="h-[fit-content]" src={item.image} alt="image" width={40} height={40} />
                            <div>
                                <p className="text-md">{item.symbol}</p>
                                <p className="text-xs text-[#9ea3af]">{item.name}</p>
                            </div>
                        </div>
                        <p className="mb-3">${item.current_price}</p>
                        <p style={{color : priceColor(item.price_change_percentage_24h)}}>{item.price_change_percentage_24h.toFixed(2)}%</p>
                    </div>
                ))}
            </div>
        </section>
    )
}