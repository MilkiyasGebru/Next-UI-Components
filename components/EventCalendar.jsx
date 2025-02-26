"use client"

import {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Image from "next/image";


export default function EventCalendar() {

    const [value, setValue] = useState([new Date()]);
    const events = [
        {
            id: 1,
            title: "Lorem ipsum dolor",
            time: "12:00 PM - 2:00 PM",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 2,
            title: "Lorem ipsum dolor",
            time: "12:00 PM - 2:00 PM",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 3,
            title: "Lorem ipsum dolor",
            time: "12:00 PM - 2:00 PM",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ];

    return (
        <div className="bg-white p-4 rounded-md">
            <Calendar onChange={setValue} value={value}/>
            <div>
                <div className="flex justify-between items-center my-4">
                    <h1 className="font-bold">Events</h1>
                    <Image src="/moreDark.png" alt="" width={20} height={20}/>
                </div>
                <div className="flex flex-col gap-4 ">
                {events.map((event) => (
                    <div key={event.id} className="p-4 border-2 border-gray-100 rounded-md">

                        <div className="flex justify-between items-center">
                            <h1 className="font-semibold text-gray-600">{event.title}</h1>
                            <span className="text-gray-300 text-xs">{event.time}</span>
                        </div>

                        <p className="mt-2 text-sm">{event.description}</p>

                    </div>
                ))}
            </div>
            </div>
        </div>


    )
}