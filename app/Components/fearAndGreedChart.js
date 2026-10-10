"use client"

import { PieChart, Pie} from "recharts";


export default function FearAndGreedChart({ value = 74 }) {

    const chartData = [
        { name: 'A', value: 25, fill: '#e33a23' },
        { name: 'B', value: 25, fill: '#b87a1b' },
        { name: 'C', value: 25, fill: '#658718' },
        { name: 'D', value: 25, fill: '#41c728' },
    ];

    const cx = 150;
    const cy = 60;
    const needleLength = 50;

    const needleAngle = 180 - (value / 100) * 180;

    const angleInRadians = (needleAngle * Math.PI) / 180;


    const needleX =
        cx + needleLength * Math.cos(angleInRadians);

    const needleY =
        cy - needleLength * Math.sin(angleInRadians);

    return (
        <div className="flex flex-col items-center">
            <PieChart width={300} height={110} className="w-full h-50" >
                <Pie
                    data={chartData}
                    dataKey="value"
                    cx={cx}
                    cy={cy}
                    innerRadius={40}
                    outerRadius={60}
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

                <g>
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