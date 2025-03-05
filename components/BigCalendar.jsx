import {Calendar, momentLocalizer, Views} from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import {useState} from "react";

const localizer = momentLocalizer(moment)
//  Found a bug on the Big calendar
export default function BigCalendar() {

    const calendarEvents = [
        {
            title: "Math",
            allDay: false,
            start: new Date(2025, 1, 27, 8, 0),
            end: new Date(2025, 1, 27, 11, 45),
        },
        {
            title: "English",
            allDay: false,
            start: new Date(2025, 3, 27, 9, 0),
            end: new Date(2025, 3, 27, 9, 45),
        },
        {
            title: "Biology",
            allDay: false,
            start: new Date(2024, 7, 12, 10, 0),
            end: new Date(2024, 7, 12, 10, 45),
        },
        {
            title: "Physics",
            allDay: false,
            start: new Date(2024, 7, 12, 11, 0),
            end: new Date(2024, 7, 12, 11, 45),
        },
        {
            title: "Chemistry",
            allDay: false,
            start: new Date(2024, 7, 12, 13, 0),
            end: new Date(2024, 7, 12, 13, 45),
        },
        {
            title: "History",
            allDay: false,
            start: new Date(2024, 7, 12, 14, 0),
            end: new Date(2024, 7, 12, 14, 45),
        },
        {
            title: "English",
            allDay: false,
            start: new Date(2024, 7, 13, 9, 0),
            end: new Date(2024, 7, 13, 9, 45),
        },
        {
            title: "Biology",
            allDay: false,
            start: new Date(2024, 7, 13, 10, 0),
            end: new Date(2024, 7, 13, 10, 45),
        },
        {
            title: "Physics",
            allDay: false,
            start: new Date(2024, 7, 13, 11, 0),
            end: new Date(2024, 7, 13, 11, 45),
        },

        {
            title: "History",
            allDay: false,
            start: new Date(2024, 7, 13, 14, 0),
            end: new Date(2024, 7, 13, 14, 45),
        },
        {
            title: "Math",
            allDay: false,
            start: new Date(2024, 7, 14, 8, 0),
            end: new Date(2024, 7, 14, 8, 45),
        },
        {
            title: "Biology",
            allDay: false,
            start: new Date(2024, 7, 14, 10, 0),
            end: new Date(2024, 7, 14, 10, 45),
        },

        {
            title: "Chemistry",
            allDay: false,
            start: new Date(2024, 7, 14, 13, 0),
            end: new Date(2024, 7, 14, 13, 45),
        },
        {
            title: "History",
            allDay: false,
            start: new Date(2024, 7, 14, 14, 0),
            end: new Date(2024, 7, 13, 14, 45),
        },
        {
            title: "English",
            allDay: false,
            start: new Date(2024, 7, 15, 9, 0),
            end: new Date(2024, 7, 15, 9, 45),
        },
        {
            title: "Biology",
            allDay: false,
            start: new Date(2024, 7, 15, 10, 0),
            end: new Date(2024, 7, 15, 10, 45),
        },
        {
            title: "Physics",
            allDay: false,
            start: new Date(2024, 7, 15, 11, 0),
            end: new Date(2024, 7, 15, 11, 45),
        },

        {
            title: "History",
            allDay: false,
            start: new Date(2024, 7, 15, 14, 0),
            end: new Date(2024, 7, 15, 14, 45),
        },
        {
            title: "Math",
            allDay: false,
            start: new Date(2024, 7, 16, 8, 0),
            end: new Date(2024, 7, 16, 8, 45),
        },
        {
            title: "English",
            allDay: false,
            start: new Date(2024, 7, 16, 9, 0),
            end: new Date(2024, 7, 16, 9, 45),
        },

        {
            title: "Physics",
            allDay: false,
            start: new Date(2024, 7, 16, 11, 0),
            end: new Date(2024, 7, 16, 11, 45),
        },
        {
            title: "Chemistry",
            allDay: false,
            start: new Date(2024, 7, 16, 13, 0),
            end: new Date(2024, 7, 16, 13, 45),
        },
        {
            title: "History",
            allDay: false,
            start: new Date(2024, 7, 16, 14, 0),
            end: new Date(2024, 7, 16, 14, 45),
        },
    ];
    const [view,setView] = useState(Views.WORK_WEEK)

    const handleOnChangeView = (selected_view) => {
        console.log(selected_view," the selected_view")
        setView(selected_view)
    }

    return (
        <div className="h-[55%]">
            <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                views={["work_week","day"]}
                view={view}
                style={{ height: "95%" }}
                onView={handleOnChangeView}
                min={new Date(2025,2,5,8)}
                max={new Date(2025,2,5,17)}
            />
        </div>
    )
}