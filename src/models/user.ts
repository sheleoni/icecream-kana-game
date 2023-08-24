import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already registered'],  // [true, (value if false)]
        required: [true, 'You must enter an email']
    },
    name: {
        type: String,
        required: [true, 'You must enter a name!']
    },
    avatar: {
        type: String,
    }
},
    {
    collection: 'userProgress'
    } // not sure if this is entirely necessary but I'll just put it here
);

const User = models.User || model('User', UserSchema);

export default User;
