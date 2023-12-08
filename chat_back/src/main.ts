import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add swagger
  const config = new DocumentBuilder().setTitle('Template').build();
  const documentation = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, documentation);

  await app.listen(3000);
}
bootstrap();
