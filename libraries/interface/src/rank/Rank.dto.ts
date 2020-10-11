import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RankDTO {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  badge!: string;

  @IsNumber()
  level!: number;

  @IsNumber({}, { each: true })
  users!: number[];

  @IsBoolean()
  websiteShowStaff!: boolean;

  @IsBoolean()
  websiteShowAdminPanel!: boolean;

  @IsBoolean()
  websiteManageNews!: boolean;

  @IsBoolean()
  websiteManageRanks!: boolean;

  @IsBoolean()
  websiteManageUsers!: boolean;

  @IsBoolean()
  websiteManageBans!: boolean;
}