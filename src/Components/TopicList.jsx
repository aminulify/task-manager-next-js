
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiOutlinePencilAlt } from "react-icons/hi";
import getBlogData from "./Hooks/getBlogData";

export default async function TopicList(){

    const topics = await getBlogData();
    // console.log(topics);

    return (
        <>
            {
                topics.map(item=> (
                    <div key={item._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5">
                        <div>
                            <h2 className="font-bold text-2xl">{item?.title}</h2>
                            <h2>{item?.description}</h2>
                        </div>
                        <div className="flex gap-[1px] items-start">
                            <RemoveBtn id={item._id}/>
                            <Link href={`/edit-topic/${item._id}`} className="text-slate-800 hover:text-green-600 duration-300">
                                <HiOutlinePencilAlt size={26}/>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </>
    )
}