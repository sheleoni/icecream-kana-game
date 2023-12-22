import { Schema, model, models } from 'mongoose';
import {userIceCreamStackSchema} from "@/models/userIceCreamStack";
import userTideLevel, {userTideLevelSchema} from "@/models/userTideLevel";
import {userKanaScoreSchema} from "@/models/userKanaScores";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already registered'],  // [true, (value if false)]
        required: [true, 'You must enter an email']
    },
    totalScore: Number,
    name: {
        type: String,
        required: [true, 'You must enter a name!']
    },
    avatar: {
        type: String,
    },
    iceCreamStack: [userIceCreamStackSchema],
    kanaScores: [userKanaScoreSchema],
    tideLevel: [userTideLevelSchema],
    unlockedIceCreams: [
        {
            iceCream: {
                type: Schema.Types.ObjectId,
                ref: 'IceCream'
            },
            quantity: {
                type: Number,
                default: 0
            }
        }
    ],
    newFieldTest: [
        {
            testField: {
                type: String
            },
            testQuantity: {
                type: Number
            },
            testBoolean: {
                type: Boolean
            }
        }
    ]
    },
    {
    collection: 'userProgress'
    } // not sure if this is entirely necessary, but I'll just put it here
);

const User = models.User || model('User', UserSchema);

export default User;
