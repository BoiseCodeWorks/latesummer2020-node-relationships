import { Schema, SchemaTypes } from "mongoose";

const Size = new Schema(
    {
        title: { type: String, required: true },
        volume: { type: String, required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Size;
