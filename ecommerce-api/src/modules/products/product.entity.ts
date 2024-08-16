import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Product {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false })
  name: string;

  @Field(() => Float)
  @Column({ type: 'float', nullable: false })
  price: number;

  @Field()
  @Column({ nullable: false })
  description: string;

  @Field()
  @Column({ nullable: false })
  imageUrl: string;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  rating: number;
}
