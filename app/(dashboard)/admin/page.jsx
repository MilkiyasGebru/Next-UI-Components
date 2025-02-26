import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import AttendanceChart from "@/components/AttendanceChart";
import FinanceChart from "@/components/FinanceChart";
import EventCalendar from "@/components/EventCalendar";

export default function AdminPage(){

    return (

        <div className="p-4 flex gap-y-4 gap-x-3 flex-col md:flex-row">


            {/*    Left*/}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/*User Cards*/}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                </div>
                {/*Middle Charts*/}
                <div className=" flex flex-col gap-4 lg:flex-row">
                    {/*Count Chart*/}
                    <div className="w-full h-[450px] lg:w-1/3">
                        <CountChart />
                    </div>

                {/*    Attendance Chart*/}
                    <div className="w-full h-[450px] lg:w-2/3">
                        <AttendanceChart />
                    </div>


                </div>

                {/*    Bottom Chart*/}
                <div className="w-full h-[500px]">
                    <FinanceChart />
                </div>


            </div>
            {/*    Right*/}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                <EventCalendar />
            </div>


        </div>

    )
}