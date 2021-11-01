const mongoose = require('mongoose');

const mongoConnection = async () => {
    try {
        await mongoose.connect(process.env.MongoURI)
        .then(console.log('MongoDB connected successfully'));
    } catch (err) {
        throw new Error(err);
    }
}

export { mongoConnection }