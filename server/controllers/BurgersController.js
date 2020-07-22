import express from "express";
import BaseController from "../utils/BaseController";
import { burgersService } from "../services/BurgersService";

export class BurgersController extends BaseController {
  constructor() {
    super("api/burgers");
    this.router
      .get("", this.getAll)
      .post("", this.create);
  }

  async getAll(req, res, next) {
    try {
      return res.send(await burgersService.find());
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
