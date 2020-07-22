import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class SidesService {
    async findBySizeId(sizeId) {
        return await dbContext.Sides.find({ size: sizeId }).populate("size")
    }

    async create(body) {
        return await dbContext.Sides.create(body)
    }

    async find(query = {}) {
        return await dbContext.Sides.find(query).populate("size");
    }
    async findById(id) {
        let side = await dbContext.Sides.findById(id).populate("size");
        if (!side) {
            throw new BadRequest("Invalid Id");
        }
        return side;
    }
}

export const sidesService = new SidesService();