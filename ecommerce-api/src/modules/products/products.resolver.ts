import { Resolver, Query } from '@nestjs/graphql';
import { Product } from './product.entity';
import { ProductsService } from './products.service';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [Product])
  async getProducts(): Promise<Product[]> {
    return this.productsService.getProducts();
  }
}
