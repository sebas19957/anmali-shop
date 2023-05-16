import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateRouletteDto } from './dto/create-roulette.dto';
import { UpdateRouletteDto } from './dto/update-roulette.dto';
import { Model, isValidObjectId } from 'mongoose';
import { Roulette } from './entities/roulette.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RouletteService {
  constructor(
    @InjectModel(Roulette.name)
    private readonly rouletteModel: Model<Roulette>,
  ) {}

  async create(createRouletteDto: CreateRouletteDto) {
    createRouletteDto.code = createRouletteDto.code.toLocaleLowerCase();

    try {
      const code = await this.rouletteModel.create(createRouletteDto);
      return code;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          'Ya existe el código en la base de datos.',
        );
      }
      console.log(error);
      throw new InternalServerErrorException(
        'No se pudo crear el código - Mirar logs del servidor',
      );
    }
  }

  async findAll() {
    return await this.rouletteModel.find();
  }

  async findOne(term: string) {
    let code: Roulette;
    if (term) {
      code = await this.rouletteModel.findOne({ code: term });
    }

    if (!code && isValidObjectId(term)) {
      code = await this.rouletteModel.findById(term);
    }

    if (!code) {
      throw new NotFoundException('El código ingresado no existe.');
    }

    return code;
  }

  async update(term: string, updateRouletteDto: UpdateRouletteDto) {
    const code = await this.findOne(term);
    if (updateRouletteDto.code)
      updateRouletteDto.code = updateRouletteDto.code.toLocaleLowerCase();

    try {
      await code.updateOne(updateRouletteDto, { new: true });
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          'Ya existe el código en la base de datos.',
        );
      }
      console.log(error);
      throw new InternalServerErrorException(
        'No se pudo crear el código - Mirar logs del servidor',
      );
    }

    return { ...code.toJSON(), ...updateRouletteDto };
  }

  remove(id: number) {
    return `This action removes a #${id} roulette`;
  }
}
