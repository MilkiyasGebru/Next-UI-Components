"use client"

import Image from "next/image";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function FinanceChart() {


    const data = [
        {
            name: 'Jan  ',
            income: 4000,
            expense: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            income: 3000,
            expense: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            income: 2000,
            expense: 9800,
            amt: 2290,
        },
        {
            name: 'Apr',
            income: 2780,
            expense: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            income: 1890,
            expense: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            income: 2390,
            expense: 3800,
            amt: 2500,
        },
        {
            name: 'Jul',
            income: 3490,
            expense: 4300,
            amt: 2100,
        },
    ];



    return (
        <div className="w-full h-full p-4 bg-white rounded">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Students</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <div className="w-full h-full">
                <ResponsiveContainer width="100%" height="90%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 3,
                            left: 2,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#ddd" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:"#d1d5db"}} tickMargin={10}/>
                        <YAxis axisLine={false} tickLine={false} tick={{fill:"#d1d5db"}} tickMargin={15}/>
                        <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}} />
                        <Legend align="center" verticalAlign="top"/>
                        <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
                        <Line type="monotone" dataKey="expense" stroke="#82ca9d" strokeWidth={2}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}