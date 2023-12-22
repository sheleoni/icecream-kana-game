import mongoose, { Schema, model, models } from "mongoose";

export const userKanaScoreSchema = new Schema({
    kana: String,
    score: Number,
    }
);

const userTideLevel = models.userKanaScores || model('userKanaScores', userKanaScoreSchema);

export default userTideLevel;
