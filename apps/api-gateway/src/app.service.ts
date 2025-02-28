import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

/** Service for microservice communication and health checks */
@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  private readonly authServiceUrl: string;
  private readonly moviesServiceUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.authServiceUrl = this.configService.get<string>('AUTH_SERVICE_URL');
    this.moviesServiceUrl =
      this.configService.get<string>('MOVIES_SERVICE_URL');
  }

  /**
   * Makes request to auth service
   * @throws Error on request failure
   */
  async makeAuthServiceRequest(method: string, endpoint: string, data?: any) {
    try {
      const response = await this.httpService.axiosRef.request({
        method,
        url: `http://${this.authServiceUrl}${endpoint}`,
        data,
      });
      return response.data;
    } catch (error) {
      this.logger.error(
        `Failed to make auth service request: ${error.message}`,
      );
      throw error;
    }
  }

  /**
   * Makes request to movies service
   * @throws Error on request failure
   */
  async makeMoviesServiceRequest(method: string, endpoint: string, data?: any) {
    try {
      const response = await this.httpService.axiosRef.request({
        method,
        url: `http://${this.moviesServiceUrl}${endpoint}`,
        data,
      });
      return response.data;
    } catch (error) {
      this.logger.error(
        `Failed to make movies service request: ${error.message}`,
      );
      throw error;
    }
  }

  /** Check auth service health */
  async getAuthService() {
    return this.makeAuthServiceRequest('GET', '/');
  }

  /** Check movies service health */
  async getMoviesService() {
    return this.makeMoviesServiceRequest('GET', '/');
  }
}
