import UserCard from "@/components/UserCard";

export default function AdminPage(){

    return (

        <div className="p-4 flex gap-y-4 flex-col md:flex-row">


            {/*    Left*/}
            <div className="w-full lg:w-2/3">
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                </div>

            </div>
            {/*    Right*/}
            <div className="w-full lg:w-1/3">
                right
            </div>


        </div>

    )
}