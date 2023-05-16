import { IsString, MinLength, IsBoolean } from 'class-validator';

export class CreateRouletteDto {
  @IsString({
    message: "code: tipo de dato inválido, se esperaba un tipo 'string'",
  })
  @MinLength(4, {
    message: 'code: el código debe tener al menos 4 caracteres.',
  })
  code: string;

  @IsBoolean({
    message: "state: Tipo de dato inválido, se esperaba un tipo 'boolean'",
  })
  state: boolean;
}
