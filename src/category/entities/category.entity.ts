import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { ProductEntity } from "../../product/entities/product.entity";

@Entity('category')
export class CategoryEntity extends BaseEntity{
  
  @Column()
  categoryName!: string;

  @ManyToOne(() => ProductEntity, (product) => product.category)
  products!: ProductEntity;
}