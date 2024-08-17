import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsService } from './modules/products/products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { GraphQLModule } from '@nestjs/graphql';
import { graphqlConfig } from './config/graphql.config';
import { ProductsResolver } from './modules/products/products.resolver';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    GraphQLModule.forRoot(graphqlConfig),
  ],
  controllers: [AppController],
  providers: [AppService, ProductsService, ProductsResolver],
})
export class AppModule {}
