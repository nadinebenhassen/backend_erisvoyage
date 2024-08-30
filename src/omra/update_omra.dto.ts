import { PartialType } from '@nestjs/mapped-types';
import { CreateOmraDto } from './create_omra.dto';

export class UpdateOmraDto extends PartialType(CreateOmraDto) {}
