import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";

const teachersData = [
    {
        id: 1,
        teacherId: "1234567890",
        name: "John Doe",
        email: "john@doe.com",
        photo:
            "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: ["Math", "Geometry"],
        classes: ["1B", "2A", "3C"],
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 2,
        teacherId: "1234567890",
        name: "Jane Doe",
        email: "jane@doe.com",
        photo:
            "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: ["Physics", "Chemistry"],
        classes: ["5A", "4B", "3C"],
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 3,
        teacherId: "1234567890",
        name: "Mike Geller",
        email: "mike@geller.com",
        photo:
            "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: ["Biology"],
        classes: ["5A", "4B", "3C"],
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 4,
        teacherId: "1234567890",
        name: "Jay French",
        email: "jay@gmail.com",
        photo:
            "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: ["History"],
        classes: ["5A", "4B", "3C"],
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 5,
        teacherId: "1234567890",
        name: "Jane Smith",
        email: "jane@gmail.com",
        photo:
            "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: ["Music", "History"],
        classes: ["5A", "4B", "3C"],
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 6,
        teacherId: "1234567890",
        name: "Anna Santiago",
        email: "anna@gmail.com",
        photo:
            "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: ["Physics"],
        classes: ["5A", "4B", "3C"],
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 7,
        teacherId: "1234567890",
        name: "Allen Black",
        email: "allen@black.com",
        photo:
            "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: ["English", "Spanish"],
        classes: ["5A", "4B", "3C"],
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 8,
        teacherId: "1234567890",
        name: "Ophelia Castro",
        email: "ophelia@castro.com",
        photo:
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: ["Math", "Geometry"],
        classes: ["5A", "4B", "3C"],
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 9,
        teacherId: "1234567890",
        name: "Derek Briggs",
        email: "derek@briggs.com",
        photo:
            "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: ["Literature", "English"],
        classes: ["5A", "4B", "3C"],
        address: "123 Main St, Anytown, USA",
    },
    {
        id: 10,
        teacherId: "1234567890",
        name: "John Glover",
        email: "john@glover.com",
        photo:
            "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
        phone: "1234567890",
        subjects: ["Biology"],
        classes: ["5A", "4B", "3C"],
        address: "123 Main St, Anytown, USA",
    },
];

const columns = [
    {
        header:"Info", accessor: "info",
    },
    {
        header:"TeacherID", accessor: "teacher_id",
    },
    {
        header:"Subjects", accessor: "subjects",
    },
    {
        header:"Classes", accessor: "classes",
    },
    {
        header:"Phone", accessor: "phone",
    },
    {
        header:"Address", accessor: "address",
    },
    {
        header:"Actions", accessor: "actions",
    },
]
export default function TeachersList(){
    // This is to Render the Teachers Row only
    const renderRow = (item)=> (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
            <td className="flex items-center gap-4 p-2">
                <Image src={item.photo} alt="" width={40} height={40} className="rounded-full w-10 h-10 object-cover"/>
                <div className="flex flex-col">

                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item?.email}</p>
                </div>
            </td>
            <td>{item.teacherId}</td>
            <td>{item.subjects.join(",")}</td>
            <td>{item.classes.join(",")}</td>
            <td>{item.phone}</td>
            <td>{item.address}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/teachers/${item.id}`}>
                        <button className="bg-lamaSky w-7 h-7 rounded-full flex items-center justify-center">
                            <Image src="/view.png" alt="" width={16} height={16}/>
                        </button>
                    </Link>
                    <button className="bg-lamaPurple w-7 h-7 rounded-full flex items-center justify-center">
                        <Image src="/delete.png" alt="" width={16} height={16}/>
                    </button>
                </div>
            </td>

        </tr>


    )

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
            <div className="">
                <Table renderRow={renderRow} data={teachersData} columns={columns} />
            </div>
            {/*    Pagination*/}
            <div className="">
                <Pagination />
            </div>
        </div>
    )
}