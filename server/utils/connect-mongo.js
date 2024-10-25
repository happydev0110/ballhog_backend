import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        const dbURI = process.env.MONGODB_URI + process.env.DB_NAME;

        const options = {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        };

        await mongoose.connect(dbURI, options);

        console.log(`MongoDB connected: ${mongoose.connection.host}`);
    } catch (error) {
        console.error(error);
    }
};

export default connectDB;
