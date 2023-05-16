import { Module } from '@nestjs/common';
import { RouletteService } from './roulette.service';
import { RouletteController } from './roulette.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Roulette, RouletteSchema } from './entities/roulette.entity';

@Module({
  controllers: [RouletteController],
  providers: [RouletteService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Roulette.name,
        schema: RouletteSchema,
      },
    ]),
  ],
})
export class RouletteModule {}
