export default function Pagination(){

    return (
        <div className="p-4 flex items-center justify-between text-gray-500">
            <button disabled={true}
                    className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-50">Prev
            </button>

            <div className="flex gap-2 text-xs items-center">
                <button className="px-2 py-1 rounded-md bg-lamaSky">1</button>
                <button className="px-2 py-1 rounded-md bg-lamaSky">2</button>
            </div>

            <button disabled={true}
                    className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-50">Next
            </button>

        </div>
    )
}