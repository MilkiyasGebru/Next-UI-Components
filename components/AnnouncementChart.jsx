
export default function AnnouncementChart(){

    return (
        <div className="bg-white rounded-md p-4">
            <div className="flex items-center justify-between">

                <h1 className=" text-xl font-semibold ">Announcements</h1>
                <span className="text-xs text-gray-400">View All</span>
            </div>
            <div className="flex flex-col gap-2 mt-4">

                <div className="bg-lamaSkyLight rounded-md p-2">
                    <div className="flex items-center justify-between p-2 font-medium">
                        <h2 className="text-md">Lorem ipsum dolor sit</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md p-1">2025-02-27</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet conscecut gray adhodf elit. Voluputam expedita Rerum</p>
                </div>

                <div className="bg-lamaSkyLight rounded-md p-2">
                    <div className="flex items-center justify-between p-2 font-medium">
                        <h2 className="text-md">Lorem ipsum dolor sit</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md p-1">2025-02-27</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet conscecut gray adhodf elit. Voluputam expedita Rerum</p>
                </div>


                <div className="bg-lamaSkyLight rounded-md p-2">
                    <div className="flex items-center justify-between  font-medium">
                        <h2 className="text-md">Lorem ipsum dolor sit</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md p-1">2025-02-27</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        Lorem ipsum dolor sit amet conscecut gray adhodf elit. Voluputam expedita Rerum
                    </p>
                </div>

            </div>

        </div>
    )
}
