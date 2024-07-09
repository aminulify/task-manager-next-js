import EditTopicForm from "@/Components/EditTopicForm";

const getTopicById = async(id) =>{
    const API_URL = process.env.API_URL;
    // console.log(API_URL);
    try{
        const res = await fetch(`${API_URL}/api/topics/${id}`,{
            cache: "no-store"
        });
        if(!res.ok){
            throw new Error("Failed to fetch topic")
        }
        return res.json();
    }
    catch(e){
        console.log(e);
    }
}

export default async function EditTopic({params}){
    const {id} = params;
    // console.log("id: ", id);
    const topic = await getTopicById(id);
    // console.log(topic);
    const {title, description} = topic;
    return(
        <>
        <EditTopicForm id={id} title={title} description={description} />
        </>
    )
}