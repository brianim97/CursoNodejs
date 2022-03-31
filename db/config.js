const mongoose = require('mongoose');

const dbConnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_CONNECTION)
        console.log('Datebase OK');
    } catch (error) {
        console.log(error);
        throw new Error("Datebase error")
    }
}

module.exports = dbConnection;