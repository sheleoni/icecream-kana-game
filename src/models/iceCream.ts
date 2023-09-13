import { Schema, model, models } from 'mongoose';

const IceCreamSchema = new Schema({
    id: {
        type: String,
        unique: [true, 'ice-cream variety ID must be unique']
    },
    name: {
        type: String
    },
    imageURL: {
        type: String
    },
},
    {
    collection: 'iceCreams'
    } // not sure if this is entirely necessary but I'll just put it here
);

const IceCream = models.IceCream || model('IceCream', IceCreamSchema);

export default IceCream;
