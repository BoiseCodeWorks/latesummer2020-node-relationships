import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class BurgersService {
  async create(body) {
    return await dbContext.Burgers.create(body)
  }

  async find(query = {}) {
    let burgers = await dbContext.Burgers.find(query);
    return burgers;
  }
  async findById(id) {
    let burger = await dbContext.Burgers.findById(id);
    if (!burger) {
      throw new BadRequest("Invalid Id");
    }
    return burger;
  }
}

export const burgersService = new BurgersService();
export const whatevs = {}