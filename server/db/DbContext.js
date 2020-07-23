import BurgerSchema from "../models/Burger";
import SideSchema from "../models/Side";
import SizeSchema from "../models/Size";
import ComboSchema from "../models/Combo";
import mongoose from "mongoose";

class DbContext {
  Burgers = mongoose.model("Burger", BurgerSchema);
  Sides = mongoose.model("Side", SideSchema);
  Sizes = mongoose.model("Size", SizeSchema);
  Combos = mongoose.model("Combo", ComboSchema);
}

export const dbContext = new DbContext();
