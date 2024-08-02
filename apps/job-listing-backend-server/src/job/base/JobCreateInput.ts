/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ApplicationCreateNestedManyWithoutJobsInput } from "./ApplicationCreateNestedManyWithoutJobsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { CompanyWhereUniqueInput } from "../../company/base/CompanyWhereUniqueInput";
import { LanguageWhereUniqueInput } from "../../language/base/LanguageWhereUniqueInput";
import { EnumJobTypeField } from "./EnumJobTypeField";

@InputType()
class JobCreateInput {
  @ApiProperty({
    required: false,
    type: () => ApplicationCreateNestedManyWithoutJobsInput,
  })
  @ValidateNested()
  @Type(() => ApplicationCreateNestedManyWithoutJobsInput)
  @IsOptional()
  @Field(() => ApplicationCreateNestedManyWithoutJobsInput, {
    nullable: true,
  })
  applications?: ApplicationCreateNestedManyWithoutJobsInput;

  @ApiProperty({
    required: false,
    type: () => CompanyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CompanyWhereUniqueInput)
  @IsOptional()
  @Field(() => CompanyWhereUniqueInput, {
    nullable: true,
  })
  company?: CompanyWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => LanguageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LanguageWhereUniqueInput)
  @IsOptional()
  @Field(() => LanguageWhereUniqueInput, {
    nullable: true,
  })
  language?: LanguageWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  postedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumJobTypeField,
  })
  @IsEnum(EnumJobTypeField)
  @IsOptional()
  @Field(() => EnumJobTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;
}

export { JobCreateInput as JobCreateInput };