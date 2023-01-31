import{BaseProductDto} from "./base-product.dto";
import{PartialType} from "@nestjs/swagger";
export class UpdateProductDto extends PartialType(BaseProductDto)
import {
    IsString,
    Allow,
    IsBoolean,
    IsNumber,
    IsNotEmpty,
  } from 'class-validator';
  import {
    isBooleanValidationOptions,
    isNotEmptyValidationOptions,
    isNumberValidationOptions,
    isStringValidationOptions,
  } from '@shared/validation';
  
  export class BaseProductDto {

    //@Allow()
    //readonly enrollment: EnrollmentEntity;

    //@Allow()
    //readonly projectPlan: ProjectPlanEntity;

    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsString(isStringValidationOptions())
    readonly title: string;

    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsBoolean(isBooleanValidationOptions())
    readonly approved: boolean;

    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsString(isStringValidationOptions())
    readonly description: string;
   
    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsNumber() 
    readonly score: number;

    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsString(isStringValidationOptions())
    readonly observation: string;
  }