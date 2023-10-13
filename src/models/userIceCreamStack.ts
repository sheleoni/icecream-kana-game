import { Schema, model, models} from "mongoose";

export const userIceCreamStackSchema = new Schema ( {
    name: String,
    imgURL: String
})

const userIceCreamStack = models.userIceCreamStack || model('userIceCreamStack', userIceCreamStackSchema);

export default userIceCreamStack;
