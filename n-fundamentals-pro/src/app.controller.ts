import { Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('songs')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getSongs(): string {
    return this.appService.getSongs();
  }

  @Get(':id')
  getSong(@Param('id') id: string): string {
    return this.appService.getSong(id);
  }

  @Put('update/:id')
  updateSong(@Param('id') id: string): string {
    return this.appService.updateSong(id);
  }

  @Delete('delete/:id')
  deleteSong(@Param('id') id: string): string {
    return this.appService.deleteSong(id);
  }
}
