import express from "express";
import BaseController from "../utils/BaseController";
import { sidesService } from "../services/SidesService";
import { combosService } from "../services/CombosService";

let endpoint = "sides"

export class SidesController extends BaseController {
    constructor() {
        super("api/" + endpoint);
        this.router
            .get("", this.getAll)
            .get("/:sideId/combos", this.getCombosBySideId)
            .post("", this.create);
    }



    async getAll(req, res, next) {
        try {
            return res.send({ data: await sidesService.find(req.query), message: "got the " + endpoint });
        } catch (error) {
            next(error);
        }
    }

    async getCombosBySideId(req, res, next) {
        try {
            return res.send({ data: await combosService.find({ side: req.params.sideId }), message: "got the combos" });
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            res.send({ data: await sidesService.create(req.body), message: "created a " + endpoint + "item" });
        } catch (error) {
            next(error);
        }
    }
}
