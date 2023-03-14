
import mongoose from "mongoose";

// mongodb+srv://1ashishchauhan2002:<password>@cluster0.1nn0u4h.mongodb.net/?retryWrites=true&w=majority
export const Connection = async (username, password) =>{
    const URL =`mongodb+srv://${username}:${password}@cluster0.1nn0u4h.mongodb.net/?retryWrites=true&w=majority`;
try{

   await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
   console.log('datbase hass been connected succesfully');
}catch(error){
    console.log('Error while connecting with the database',error.message);
}


}

export default Connection;