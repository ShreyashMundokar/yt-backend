import dotenv from "dotenv";
import connectDB  from "./src/db/db.js";

dotenv.config({
    path:'./.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running on port , ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MongoDB connection failed!! ", error);
}) 









/*
( async() => {
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)


        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port , ${process.env.PORT}`);
        })
    }
    catch(err) {
        console.error("ERROR:", err);
        throw err;
    }
})()
    */