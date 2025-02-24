import Link from "next/link";
import Image from "next/image";
export default function Menu(){

    const menuItems = [
        {
            title: "MENU",
            items: [
                {
                    icon: "/home.png",
                    label: "Home",
                    href: "/",
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    icon: "/teacher.png",
                    label: "Teachers",
                    href: "/list/teachers",
                    visible: ["admin", "teacher"],
                },
                {
                    icon: "/student.png",
                    label: "Students",
                    href: "/list/students",
                    visible: ["admin", "teacher"],
                },
                {
                    icon: "/parent.png",
                    label: "Parents",
                    href: "/list/parents",
                    visible: ["admin", "teacher"],
                },
                {
                    icon: "/subject.png",
                    label: "Subjects",
                    href: "/list/subjects",
                    visible: ["admin"],
                },
                {
                    icon: "/class.png",
                    label: "Classes",
                    href: "/list/classes",
                    visible: ["admin", "teacher"],
                },
                {
                    icon: "/lesson.png",
                    label: "Lessons",
                    href: "/list/lessons",
                    visible: ["admin", "teacher"],
                },
                {
                    icon: "/exam.png",
                    label: "Exams",
                    href: "/list/exams",
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    icon: "/assignment.png",
                    label: "Assignments",
                    href: "/list/assignments",
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    icon: "/result.png",
                    label: "Results",
                    href: "/list/results",
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    icon: "/attendance.png",
                    label: "Attendance",
                    href: "/list/attendance",
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    icon: "/calendar.png",
                    label: "Events",
                    href: "/list/events",
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    icon: "/message.png",
                    label: "Messages",
                    href: "/list/messages",
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    icon: "/announcement.png",
                    label: "Announcements",
                    href: "/list/announcements",
                    visible: ["admin", "teacher", "student", "parent"],
                },
            ],
        },
        {
            title: "OTHER",
            items: [
                {
                    icon: "/profile.png",
                    label: "Profile",
                    href: "/profile",
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    icon: "/setting.png",
                    label: "Settings",
                    href: "/settings",
                    visible: ["admin", "teacher", "student", "parent"],
                },
                {
                    icon: "/logout.png",
                    label: "Logout",
                    href: "/logout",
                    visible: ["admin", "teacher", "student", "parent"],
                },
            ],
        },
    ];

    return (<div className="mt-4 text-sm">

        {menuItems.map((menuItem, index) => (

            <div className="flex flex-col gap-2 " key={index}>

                <span className="text-gray-800 my-4 hidden lg:block font-light">
                    {menuItem.title}
                </span>

                {menuItem.items.map((item,itemIndex)=> (


                    <Link href={item.href} key={itemIndex} className="flex items-center gap-4 py-2 justify-center lg:justify-start text-gray-500">
                        <Image src={item.icon} width={20} height={20} alt={item.label}  />
                        <span className="text-gray-800 hidden lg:block">{item.label}</span>
                    </Link>
                ))}

            </div>
        ))}

    </div>)
}
