"use client"

import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from "next/image";

const data = [


    {
        name: 'Total',
        count: 106,
        pv: 2400,
        fill: 'white',
    },

    {
        name: 'Girls',
        count: 43,
        pv: 2400,
        fill: '#FAE27C',
    },
    {
        name: 'Boys',
        count: 72,
        pv: 4567,
        fill: '#C3EBFA',
    }
];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

export default function CountChart() {
    const demoUrl = 'https://codesandbox.io/p/sandbox/simple-radial-bar-chart-gnwjjg';

        return (
            <div className="bg-white  w-full h-full p-4 rounded-xl">
                {/*  Title  */}
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-bold text-black">Students</h1>
                    <Image src="/moreDark.png" alt="" width={20} height={20}/>
                </div>

                {/*    Chart*/}
                <div className="w-full h-[75%] relative">
                    <ResponsiveContainer >
                        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                            <RadialBar
                                minAngle={15}
                                // label={{ position: 'insideStart', fill: '#fff' }}
                                background
                                clockWise
                                dataKey="count"
                            />
                            {/*<Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />*/}
                        </RadialBarChart>
                    </ResponsiveContainer>
                    <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
                </div>

            {/*    Bottom*/}
                <div className="flex justify-center gap-16">
                    <div className="flex flex-col gap-1 items-start">
                        <div className="w-5 h-5 bg-lamaSky rounded-full"></div>
                        <h1 className="font-bold">1,234</h1>
                        <h2 className="font-xs text-gray-300">Boys (55%)</h2>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <div className="w-5 h-5 bg-lamaYellow rounded-full"></div>
                        <h1 className="font-bold">1,234</h1>
                        <h2 className="font-xs text-gray-300">Girls (45%)</h2>
                    </div>
                </div>


            </div>
        );

}
