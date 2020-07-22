import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class SizesService {
    async create(body) {
        return await dbContext.Sizes.create(body)
    }

    async find(query = {}) {
        return await dbContext.Sizes.find(query);
    }
    async findById(id) {
        let size = await dbContext.Sizes.findById(id);
        if (!size) {
            throw new BadRequest("Invalid Id");
        }
        return size;
    }
}

export const sizesService = new SizesService();