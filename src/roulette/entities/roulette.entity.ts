import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Roulette extends Document {
  @Prop({
    index: true,
    unique: true,
  })
  code: string;

  @Prop({
    index: true,
  })
  state: boolean;
}

export const RouletteSchema = SchemaFactory.createForClass(Roulette);
