import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { Logger, ValidationPipe } from '@nestjs/common';

config({ path: '.env.development' });

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);
  // Configure global validation pipe with options for better validation and security
  app.useGlobalPipes(
    new ValidationPipe({
      // When requests come in with JSON data, this will automatically convert the data
      // to match the types defined in our DTO (Data Transfer Object) classes.
      // For example, if we have a DTO class with a "age: number" property,
      // and the request sends "age": "25" as a string,
      // it will automatically convert "25" to the number 25.
      // This saves us from having to manually convert types for each request.
      transform: true,
      // This setting removes any properties from the request body that don't have validation decorators in the DTO class
      // For example, if our DTO only has @IsEmail() email and @IsString() password decorators,
      // but the request includes {email: "test@test.com", password: "123", hackyStuff: "bad"}
      // Then hackyStuff will be stripped out since it has no decorator
      // This helps prevent unwanted data from being processed
      whitelist: true,
      // When forbidNonWhitelisted is true, if a request contains properties that aren't defined
      // in our DTO validation class, the API will return a 400 Bad Request error.
      // For example, if our DTO only validates email and password, but the request includes:
      // { email: "test@test.com", password: "123", maliciousField: "hack" }
      // Then the API will reject it because maliciousField isn't allowed.
      // This adds an extra layer of security by strictly enforcing what data can be sent.
      forbidNonWhitelisted: true,
      // Prevent deeply nested payloads that could cause performance issues or DoS attacks
      // For example, if someone sends a request with 10 levels of nested objects:
      // { user: { profile: { settings: { theme: { colors: { primary: { shade: {...} } } } } } } }
      // This could consume excessive server resources to validate and process.
      // By default, NestJS will only allow 2 levels of nesting.
      forbidUnknownValues: true,
    }),
  );
  // Enable CORS to allow cross-origin requests from any source
  app.enableCors();
  const port = process.env.PORT ?? 3001;
  await app.listen(port);
  logger.log(`API Gateway is running on port ${port}`);
}
bootstrap();
