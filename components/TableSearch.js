import Image from "next/image";

export default function TableSearch(){

    return (
        <div className=" text-xs flex gap-4 ring-[1.5px] ring-gray-300 px-2 py-1 rounded-full w-full md:w-auto">
            <Image src="/search.png" alt="" width={12} height={12} />
            <input
                type="search"
                placeholder="Search..."
                className="bg-transparent w-[200px] outline-none "
            />
        </div>
    )
}