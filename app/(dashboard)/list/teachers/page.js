import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Pagination from "@/components/Pagination";

export default function TeachersList(){

    return (
        <div className="bg-white rounded-md p-4  flex-1 mx-4">
            {/*    Top*/}
            <div className="flex justify-between  p-4 w-full">
                <h1 className="font-sm  ">All Teachers</h1>
                <div className="flex items-center gap-4">
                    <TableSearch />
                    <div className="flex items-center gap-4">
                        <button className="bg-lamaYellow rounded-full p-2">
                            <Image src="/filter.png" alt="" width={14} height={14}/>
                        </button>
                        <button className="bg-lamaYellow rounded-full p-2">
                            <Image src="/sort.png" alt="" width={14} height={14}/>
                        </button>
                        <button className="bg-lamaYellow rounded-full p-2">
                            <Image src="/plus.png" alt="" width={14} height={14}/>
                        </button>
                    </div>
                </div>

            </div>
            {/*    List*/}
            <div className=""></div>
            {/*    Pagination*/}
            <div className="">
                <Pagination />
            </div>
        </div>
    )
}