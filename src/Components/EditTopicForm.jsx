"use client"

import { useRouter } from "next/navigation";
import { useState } from "react"

export default function EditTopicForm({id, title, description}){
    
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const router = useRouter();

    const handleSubmit = async(e) =>{
        e.preventDefault();

        try{
            const res = await fetch(`/api/topics/${id}`,{
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({newTitle, newDescription})
            });
            router.refresh();
            
            if(!res.ok){
                throw new Error("Failed to update topic")
            }
            
            router.push("/");
        }
        catch(e){
            console.log(e);
        }
    }
    return (
        <form className="my-5" onSubmit={handleSubmit}>
            <input onChange={e=> setNewTitle(e.target.value)} value={newTitle} type="text" className="border border-slate-500 mb-2 px-8 py-2 w-full outline-none" name="title" placeholder="Edit Topic Title" id="" />

            <textarea onChange={e=> setNewDescription(e.target.value)} value={newDescription} className="border border-slate-500 my-2 px-8 py-2 w-full outline-none" name="description" rows={5} placeholder="Edit Topic Description..." id="" />

            <button className="bg-green-600 px-6 py-3 text-white hover:bg-green-700 duration-300">Update</button>
        </form>
    )
}