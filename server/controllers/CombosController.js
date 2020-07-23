import BaseController from "../utils/BaseController";
import { combosService } from "../services/CombosService";

let endpoint = "combos"

export class CombosController extends BaseController {
    constructor() {
        super("api/" + endpoint);
        this.router
            // .get("", this.getAll)
            .post("", this.create);
    }

    // NOTE this does not have any real data to filter by
    // async getAll(req, res, next) {
    //     try {
    //         res.send(await combosService.find(req.query))
    //     } catch (error) {
    //         next(error)
    //     }
    // }

    async create(req, res, next) {
        try {
            res.send({ data: await combosService.create(req.body), message: "created a " + endpoint + " relationship" });
        } catch (error) {
            next(error);
        }
    }
}
