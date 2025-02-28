import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// API endpoints accessible at /api/*
@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // GET /api
  // Returns API Gateway status
  @Get()
  getHello() {
    return 'Hello, this is API Gateway';
  }

  // GET /api/auth
  @Get('auth')
  async getAuthService() {
    return this.appService.getAuthService();
  }

  // GET /api/movies
  @Get('movies')
  async getMoviesService() {
    return this.appService.getMoviesService();
  }
}
