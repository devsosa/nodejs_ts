import { Request, Response } from "express";
import { PurchaseService } from "../services/purchase.service";

export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService = new PurchaseService()) {

  }

  async getPurchases(req: Request, res: Response) {
    try {
      const data = await this.purchaseService.findAllPurchases();
      res.status(200).json({
        data
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getPurchaseById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.purchaseService.findPurchaseById(Number(id));
      res.status(200).json({
        data
      });
    } catch (error) {
      console.log(error);
    }
  }

  async createPurchases(req: Request, res: Response) {
    try {
      const data = await this.purchaseService.createPurchase(req.body);
      res.status(200).json({
        data
      });
    } catch (error) {
      console.log(error);
    }
  }

  async deletePurchase(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.purchaseService.deletePurchase(Number(id));
      res.status(200).json({
        data
      });
    } catch (error) {
      console.log(error);
    }
  }

  async updatePurchase(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.purchaseService.updatePurchase(Number(id), req.body);
      res.status(200).json({
        data
      });
    } catch (error) {
      console.log(error);
    }
  }
}