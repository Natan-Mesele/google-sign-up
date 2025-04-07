const mongoose = require('mongoose');
require('dotenv').config();

const mongodbUrl = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(mongodbUrl);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
    }
};

module.exports = connectDB;