let isConnected = false;//track connection status

export const connectToDB = async ()=>{
    if(isConnected){
        console.log("PostgreSql is already connected");
        return;
    }
    
    try {
        // await mongoose.connect(process.env.MONGODB_URI,{
        //     dbName: "promptoverse",
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // })

        isConnected = true;
        console.log("PostgreSql is connected");
    } catch (error) {
        console.log(error);
    }
}