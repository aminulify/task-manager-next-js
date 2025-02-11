import mongoose from "mongoose";

const connectMongoDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        // console.log("Connected MongoDB");
    }
    catch(e){
        console.log(e);
    }
}
export default connectMongoDB