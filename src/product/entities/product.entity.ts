import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CategoryEntity } from "../../category/entities/category.entity";
import { PurchasesPoductsEntity } from "../../purchase/entities/purchases-products.entity";

@Entity('product')
export class ProductEntity extends BaseEntity{
  
  @Column()
  productName!: string;
  
  @Column()
  description!: string;

  @Column()
  price!: number;


  @ManyToOne(() => CategoryEntity, (category) => category.products)
  @JoinColumn({name: "category_id"})
  category!: CategoryEntity;

  @OneToMany(() => PurchasesPoductsEntity, (purchaseProduct) => purchaseProduct.product)
  purchaseProduct!: PurchasesPoductsEntity[];
}