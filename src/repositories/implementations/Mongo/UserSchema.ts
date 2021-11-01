import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
});

const UserSchema = mongoose.model('User', userSchema);

export { UserSchema }