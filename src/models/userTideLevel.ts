import mongoose, { Schema, model, models } from "mongoose";

export const userTideLevelSchema = new Schema({
    kana: String,
    level: Number,
    }
);

const userTideLevel = models.userTideLevel || model('userTideLevel', userTideLevelSchema);

export default userTideLevel;
