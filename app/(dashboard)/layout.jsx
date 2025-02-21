export default function DashboardLayout({ children }) {

    return (
        <div className="h-screen flex">
            {/*Left Menu Bar*/}
            <div className="w-1/6 bg-blue-600">Left</div>
            {/*Right*/}
            <div className="w-5/6 bg-amber-600">Right</div>



        </div>)
}