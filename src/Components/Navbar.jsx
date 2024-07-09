import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="flex bg-color justify-between items-center bg-black px-8 py-3">
            <div className="text-xl font-medium text-white"><Link href={"/"}>GTCoding</Link></div>
            <div className="bg-white py-2 px-4 hover:bg-slate-50 duration-200"><Link href={"/add-topic"}>Add Topic</Link></div>
        </nav>
    )
}