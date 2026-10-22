"use client"

import { PieChart, Pie } from "recharts";

import { useEffect, useRef, useState } from "react";


export default function FearAndGreedChart({ value = 74 }) {

    const chartData = [
        { name: 'A', value: 25, fill: '#e33a23' },
        { name: 'B', value: 25, fill: '#b87a1b' },
        { name: 'C', value: 25, fill: '#658718' },
        { name: 'D', value: 25, fill: '#41c728' },
    ];

   

    const containertRef = useRef(null)
    const [size, setSize] = useState({ width: 0, height: 100 })

    useEffect(() => {
        const element = containertRef.current

        if (!element) {
            return
        }

        const observer = new ResizeObserver((entries) => {
            const entry = entries[0]

            if (!entry) {
                return
            }

            const width = entry.contentRect.width

            setSize((previous) => {

                if (previous.width === width) {
                    return previous
                }

                return {
                    ...previous,
                    width
                }
            })
        })

        observer.observe(element)

        return () => observer.disconnect()

    }, [])

    if (size.width === 0) {
        return (
            <div ref={containertRef} className="w-full h-[110px]" />
        )
    }

    const widthSize = size.width
    const heightSize = size.height

    const cx = widthSize / 2
    const cy = heightSize;

    const outerRadius = Math.min(widthSize * 0.34, heightSize * 0.75)
    const innerRadius = outerRadius * 0.55
    const safeValue = Math.max(0, Math.min(100, Number(value) || 0))
    const needleLength = outerRadius * 0.72;
    const angle = Math.PI - (safeValue / 100) * Math.PI

    const needleX =
        cx + needleLength * Math.cos(angle);

    const needleY =
        cy - needleLength * Math.sin(angle);


    return (
        <div ref={containertRef} className="w-full h-[110px] overflow-hidden">
            
                <PieChart width={widthSize} height={heightSize}>
                    <Pie
                        data={chartData}
                        dataKey="value"
                        cx={cx}
                        cy={cy}
                        innerRadius={innerRadius}
                        outerRadius={outerRadius}
                        startAngle={180}
                        endAngle={0}
                        paddingAngle={2}
                        stroke="none"
                    >
                        {chartData.map((item, index) => (
                            <Pie
                                key={index}
                                dataKey={"value"}
                                fill={item.fill}
                            />
                        ))}
                    </Pie>

                    <g className="mx-auto">
                        <line
                            x1={cx}
                            y1={cy}
                            x2={needleX}
                            y2={needleY}
                            stroke="#d1d5db"
                            strokeWidth={3}
                            strokeLinecap="round"
                        />

                        <circle
                            cx={cx}
                            cy={cy}
                            r={4}
                            fill="#d1d5db"
                        />
                    </g>

                    
                </PieChart>
            
        </div>
    )
}