import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsResolver } from './products.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductsService, ProductsResolver],
})
export class ProductsModule {}
