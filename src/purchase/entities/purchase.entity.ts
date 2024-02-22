import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { UserEntity } from "../../user/entities/user.entity";
import { CustomerEntity } from "../../customer/entities/customer.entity";
import { PurchasesPoductsEntity } from "./purchases-products.entity";

@Entity('purchase')
export class PurchaseEntity extends BaseEntity{
  
  @Column()
  status!: string;
  
  @Column()
  paymentMethod!: string;

  @ManyToOne(() => CustomerEntity, (customer) => customer.purchases)
  @JoinColumn({name: "customer_id"})
  customer!: CustomerEntity;

  @OneToMany(() => PurchasesPoductsEntity, (purchaseProduct) => purchaseProduct.purchase)
  purchaseProduct!: PurchasesPoductsEntity[];
}