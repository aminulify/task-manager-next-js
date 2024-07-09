'use client'

import { useRouter } from "next/navigation";
import { MdOutlineDelete } from "react-icons/md";

export default function RemoveBtn({id}){
    const router = useRouter();
    
    // console.log(id);
    const removeTopic = async()=>{
        const confirmed = confirm('Are you sure?');
        if(confirmed){
            const res = await fetch(`/api/topics?id=${id}`,{
                method: "DELETE",
            });

            if(res.ok){
                router.refresh();
            }

        }
    }
    return <button onClick={removeTopic} className="text-red-600 hover:text-red-700 duration-300">
        <MdOutlineDelete size={26}/>
    </button>
}