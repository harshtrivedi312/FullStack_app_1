const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

//console.log(db);

// we conmnect the mongoDB wsing moongose driver

const connectDB = async ()=>{
    try {
        await mongoose.connect(db,{
            useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false 
        });
        console.log("mongoDB connected.....")
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;



