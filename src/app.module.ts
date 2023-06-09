import { Module } from '@nestjs/common';
import { RouletteModule } from './roulette/roulette.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/anmali-shop'),
    RouletteModule,
    ProductModule,
  ],
})
export class AppModule {}
