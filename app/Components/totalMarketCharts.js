"use client"
import { ResponsiveContainer , LineChart , Line } from "recharts"
import { priceColor } from "./functions"

export default function TotalMarketCharts({priceData , color}) {
    return (
        <ResponsiveContainer width="100%" height={50}>
            <LineChart data={priceData.map((item) => (item))}>
                <Line strokeWidth={2} width="100%" height="auto" dataKey={"value"} type="monotone" dot={false} stroke={priceColor(color)} />
            </LineChart>
        </ResponsiveContainer>
    )
}