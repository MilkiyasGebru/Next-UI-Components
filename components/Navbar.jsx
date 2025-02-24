import Image from "next/image";
export default function Navbar() {

    return (
        <div className="flex items-center justify-end md:justify-between p-4">
        {/*    THis the search bar*/}
            <div className=" gap-2 text-xs  rounded-full px-2  ring-1 ring-gray-300 hidden md:flex">
                <div className="flex items-center">
                    < Image src="/search.png" alt="search" width={20} height={20} />
                </div>

                <input type="text" placeholder="Search..."  className="bg-transparent outline-none p-2 w-[300px]"/>
            </div>
        {/*    Icons and Profile */}
            <div className="flex items-center gap-6 justify-end">
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                    < Image src="/message.png" alt="message" width={20} height={20}/>
                </div>

                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center relative cursor-pointer">
                    < Image src="/announcement.png" alt="announcement" width={20} height={20}/>
                    <div className="absolute -top-3 -right-3 w-3 h-5 bg-purple-600 flex items-center justify-center text-white rounded-full text-xs">
                        1
                    </div>
                </div>

                <div className="flex flex-col">
                    <span className="text-xs leading-3 font-medium">John Doe</span>
                    <span className="text-gray-500 text-[10px] text-right">Teacher</span>
                </div>

                <div className="">
                    < Image src="/avatar.png" alt="avatar" width={20} height={20} className="rounded-full cursor-pointer"/>
                </div>

            </div>
        </div>
    )
}

