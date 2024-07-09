import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="flex justify-between items-center bg-black px-8 py-3">
            <Link href={"/"} className="text-xl font-medium text-white">GTCoding</Link>
            <Link href={"/add-topic"} className="bg-white py-2 px-4 hover:bg-slate-50 duration-200">Add Topic</Link>
        </nav>
    )
}