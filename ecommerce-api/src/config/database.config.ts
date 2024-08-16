import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Product } from 'src/modules/products/product.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Mountain@Peak2024!',
  database: 'ecommerce',
  entities: [Product],
  synchronize: true,
  logging: true,
};
