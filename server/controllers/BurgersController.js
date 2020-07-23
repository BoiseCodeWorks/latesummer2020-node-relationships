import express from "express";
import BaseController from "../utils/BaseController";
import { burgersService } from "../services/BurgersService";
import { combosService } from "../services/CombosService";

export class BurgersController extends BaseController {
  constructor() {
    super("api/burgers");
    this.router
      .get("", this.getAll)
      .get("/:burgerId/combos", this.getCombosByBurgerId)
      .post("", this.create);
  }

  async getCombosByBurgerId(req, res, next) {
    try {
      res.send(await combosService.find({ burger: req.params.burgerId }))
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      res.send(await burgersService.find());
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let newBurger = await burgersService.create(req.body)
      res.send(newBurger);
    } catch (error) {
      next(error);
    }
  }
}
