import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }) {

    return (
        <div className="h-screen flex">
            {/*Left Menu Bar*/}
            <div className="w-1/6  p-4">
                <Link href="/" className="flex items-center justify-center gap-1 lg:justify-start">
                    <Image src="/logo.png" alt="logo" height={32} width={32} />
                    <span className="hidden lg:block ">SchooLama</span>
                </Link>
                <Menu />
            </div>
            {/*Right*/}
            <div className="w-5/6 bg-[#F7F8FA] overflow-scroll">
                < Navbar />
                {children}
            </div>



        </div>)
}