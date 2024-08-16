import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(private dataSource: DataSource) {}

  async getProducts(): Promise<Product[]> {
    const productRepository = this.dataSource.getRepository(Product);
    return await productRepository.find();
  }
}
