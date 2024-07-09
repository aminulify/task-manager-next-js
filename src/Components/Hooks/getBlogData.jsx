export default async function getBlogData(){
    const API_URL = process.env.API_URL;
    // console.log(API_URL);
    try{
        const res = await fetch(`${API_URL}/api/topics`,{
            cache: 'no-store'
        });

        if(!res.ok){
            throw new Error("Failed to fetch topics");
        }
        return res.json();
    }
    catch(e){
        console.log("Error loading topics",e);
    }

  }