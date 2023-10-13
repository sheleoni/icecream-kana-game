import { Schema, model, models } from "mongoose";

const userTideLevelSchema = new Schema({
    kana: String,
    tideLevel: Number,
})

const userTideLevel = models.userTideLevel || model('userTideLevel', userTideLevelSchema);

export default userTideLevel;
