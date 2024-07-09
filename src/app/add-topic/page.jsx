'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

export default function AddTopic(){
    
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault();

        try{
            const res = await fetch(`/api/topics`,{
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({title, description})
            })
            router.refresh();
            if(res.ok){
                router.push('/')
            }
            else{
                setError("* Something Error! Try again...")
                throw new Error("Failed to create a topic");
            }
        }
        catch(e){
            console.log(e);
        }

    }
    
    return(
        <form onSubmit={handleSubmit} className="my-5">
            <input type="text" onChange={(e)=> setTitle(e.target.value)} className="border border-slate-500 mb-2 px-8 py-2 w-full outline-none" name="title" placeholder="Enter Topic Title" id="" required/>
            <textarea onChange={(e)=> setDescription(e.target.value)} className="border border-slate-500 mt-2 px-8 pt-2 w-full outline-none" name="description" rows={5} placeholder="Enter Topic Description..." id="" required/>
            {
                error && <p className="text-red-500 pt-1">{error}</p>
            }
            <button type="submit" className="bg-green-600 px-6 py-3 text-white hover:bg-green-700 duration-300">Add Topic</button>
        </form>
    )
}