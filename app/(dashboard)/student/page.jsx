"use client"

import EventCalendar from "@/components/EventCalendar";
import AnnouncementChart from "@/components/AnnouncementChart";
import BigCalendar from "@/components/BigCalendar";

export default function StudentPage(){
    return (
        <div className="p-4 flex flex-col lg:flex-row">

        {/*    Left*/}
            <div className="w-full lg:w-2/3">

                <div className="h-full bg-white p-4 rounded-md">
                    <h1 className="text-xl font-bold">Schedule (4A) </h1>
                    <BigCalendar />
                </div>

            </div>

            {/*Right*/}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                <EventCalendar/>
                <AnnouncementChart/>
            </div>

        </div>
    )
}