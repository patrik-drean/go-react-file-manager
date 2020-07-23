import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Go React!';
  }
  getFiles() {
    // TODO: Get files from s3 bucket
    return [
      '/static/media/first-photo.ba8627fd.jpg',
      '/static/media/second-photo.65fd195f.jpg',
      '/static/media/test.d365c0a9.mp4',
    ];
  }
}
