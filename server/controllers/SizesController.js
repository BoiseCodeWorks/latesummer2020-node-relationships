import express from "express";
import BaseController from "../utils/BaseController";
import { sizesService } from "../services/SizesService";
import { sidesService } from "../services/SidesService";

let endpoint = "sizes"

export class SizesController extends BaseController {
    constructor() {
        super("api/" + endpoint);
        this.router
            .get("", this.getAll)
            .get("/:sizeId/sides", this.getSidesBySize)
            .post("", this.create);
    }

    async getAll(req, res, next) {
        try {
            return res.send({ data: await sizesService.find(), message: "got the " + endpoint });
        } catch (error) {
            next(error);
        }
    }

    async getSidesBySize(req, res, next) {
        try {
            return res.send({ data: await sidesService.findBySizeId(req.params.sizeId), message: "got the sides by size" });
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            res.send({ data: await sizesService.create(req.body), message: "created a " + endpoint + "item" });
        } catch (error) {
            next(error);
        }
    }
}
