import { SpotsService } from '@app/core';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateSpotRequest } from './request/create-spot.request';
import { UpdateSpotRequest } from './request/update-spot.request';

@Controller('events/:eventId/spots')
export class SpotsController {
  constructor(private readonly spotsService: SpotsService) {}

  @Post()
  create(
    @Body() createSpotRequest: CreateSpotRequest,
    @Param('eventId') eventId: string,
  ) {
    return this.spotsService.create({
      ...createSpotRequest,
      eventId,
    });
  }

  @Get()
  findAll(@Param('eventId') eventId: string) {
    return this.spotsService.findAll(eventId);
  }

  @Get(':spotid')
  findOne(@Param('id') spotId: string, @Param('eventId') eventId: string) {
    return this.spotsService.findOne(eventId, spotId);
  }

  @Patch(':spotId')
  update(
    @Param('id') spotId: string,
    @Param('eventId') eventId: string,
    @Body() updateSpotRequest: UpdateSpotRequest,
  ) {
    return this.spotsService.update(eventId, spotId, updateSpotRequest);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') spotId: string, @Param('eventId') eventId: string) {
    return this.spotsService.remove(eventId, spotId);
  }
}
