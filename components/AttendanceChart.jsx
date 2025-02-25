"use client"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import Image from "next/image";
export default function AttendanceChart() {

    const data = [
        {
            name: 'Mon',
            present: 4000,
            absent: 2400,
        },
        {
            name: 'Tue',
            present: 3000,
            absent: 1398,
        },
        {
            name: 'Wed',
            present: 2000,
            absent: 9800,
        },
        {
            name: 'Thur',
            present: 2780,
            absent: 3908,
        },
        {
            name: 'Fri',
            present: 1890,
            absent: 4800,
        },
        {
            name: 'Sat',
            present: 2390,
            absent: 3800,
        },
        {
            name: 'Sun',
            present: 3490,
            absent: 4300,
        },
    ];

    return (
        <div className=" h-full w-full  text-gray-500 p-4 rounded-2xl bg-white">
            <div className="w-full flex justify-between font-semibold">
                <h1 className="text-lg  font-bold text-gray-900">Attendance </h1>
                <Image src="/moreDark.png" alt="" width={20} height={20}/>
            </div>
            <div className="w-full h-full mt-2 ">
                <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 10,
                        left: 10,
                        bottom: 1,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:"#d1d5db"}}/>
                    <YAxis axisLine={false} tickLine={false} tick={{fill:"#d1d5db"}}/>
                    <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
                    <Legend  align="left" verticalAlign="top" wrapperStyle={{paddingTop: "20px", paddingBottom: "20px"}}/>
                    <Bar
                        dataKey="present"
                        fill="#FAE27C"
                        // activeBar={<Rectangle fill="pink" stroke="blue" />}
                        legendType="circle"
                        radius={[10,10,0,0]}
                    />

                    <Bar
                        dataKey="absent"
                        fill="#C3EBFA"
                        // activeBar={<Rectangle fill="gold" stroke="purple" />}
                        legendType="circle"
                        radius={[10,10,0,0]}
                    />
                </BarChart>
            </ResponsiveContainer>
            </div>

        </div>
    )
}