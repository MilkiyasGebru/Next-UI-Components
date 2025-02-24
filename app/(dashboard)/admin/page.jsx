import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";

export default function AdminPage(){

    return (

        <div className="p-4 flex gap-y-4 flex-col md:flex-row">


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
                    <div>

                    </div>

                </div>

            </div>
            {/*    Right*/}
            <div className="w-full lg:w-1/3">
                right
            </div>


        </div>

    )
}