import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

const Side = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        size: { type: ObjectId, ref: "Size", required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Side;
