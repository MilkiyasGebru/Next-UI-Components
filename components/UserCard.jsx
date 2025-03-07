import Image from "next/image";

export default function UserCard() {

    return (
        <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
            <div className="flex justify-between items-center">
                <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">2024/25</span>
                <Image src="/more.png" alt="more" width={20} height={20} />
            </div>
            <h1 className="my-4 font-semibold text-2xl">1234</h1>
            <h2 className="capitalize font-medium text-sm text-gray-500">student</h2>
        </div>
    )
}