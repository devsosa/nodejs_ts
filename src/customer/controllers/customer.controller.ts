import { Request, Response } from "express";
import { CustomerService } from "../services/customer.service";

export class CustomerController {
  constructor(private readonly customerService: CustomerService = new CustomerService()) {

  }

  async getCustomers(req: Request, res: Response) {
    try {
      const data = await this.customerService.findAllCustomers();
      res.status(200).json({
        data
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getCustomerById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.customerService.findCustomerById(Number(id));
      res.status(200).json({
        data
      });
    } catch (error) {
      console.log(error);
    }
  }

  async createCustomers(req: Request, res: Response) {
    try {
      const data = await this.customerService.createCustomer(req.body);
      res.status(200).json({
        data
      });
    } catch (error) {
      console.log(error);
    }
  }

  async deleteCustomer(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.customerService.deleteCustomer(Number(id));
      res.status(200).json({
        data
      });
    } catch (error) {
      console.log(error);
    }
  }

  async updateCustomer(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.customerService.updateCustomer(Number(id), req.body);
      res.status(200).json({
        data
      });
    } catch (error) {
      console.log(error);
    }
  }
}