"use client"

import {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


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
        <div>
            <Calendar  onChange={setValue} value={value} className="bg-white p-4 rounded-md"/>
        </div>
    )
}