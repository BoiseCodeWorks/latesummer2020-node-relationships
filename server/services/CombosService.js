import { dbContext } from "../db/DbContext";

class CombosService {
    async find(query = {}) {
        return await dbContext.Combos.find(query).populate("burger side")
    }

    async create(body) {
        return await dbContext.Combos.create(body)
    }

}

export const combosService = new CombosService();