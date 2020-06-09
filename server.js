const express = require("express");
const app = express();
const PORT = process.env.port || 5000;
const connectDB = require("../03_FS/config/db")

//connect to the DataBase
connectDB();

app.use(express.json({extended: false}));





app.get("/",(request,response)=>{
response.send(`api is running fine on port ${PORT}`)
});


app.listen(PORT,()=>{
    console.log(`api is running on portnumber ${PORT}`);
    
});

