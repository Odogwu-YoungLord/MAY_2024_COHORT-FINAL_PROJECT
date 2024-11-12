const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Connect to MongoDB using the URI from the environment variable
        await mongoose.connect(process.env.MONGO_URI);
        
        console.log('MongoDB connected...');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;
