import { Schema } from "mongoose";
let ObjectId = Schema.Types.ObjectId

const Combo = new Schema(
    {
        burger: { type: ObjectId, ref: "Burger", required: true },
        side: { type: ObjectId, ref: "Side", required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Combo;
