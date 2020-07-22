import { Schema } from "mongoose";

// subdoc example
// const SizeSchema = new Schema({
//   title: { type: String, required: true },
//   volume: { type: String, required: true }
// })


const Burger = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true }
    // size: { type: SizeSchema }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Burger;
