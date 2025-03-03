import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSongs(): string {
    return 'This action returns all songs!';
  }

  getSong(id: string): string {
    return `This action returns song ${id}`;
  }

  updateSong(id: string): string {
    return `This action updates song ${id}`;
  }

  deleteSong(id: string): string {
    return `This action deletes song ${id}`;
  }
}
