import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({
    index: true,
  })
  type: string;

  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  description: string;

  value: number;

  @Prop({
    unique: true,
  })
  url: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
