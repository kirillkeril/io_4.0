import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // Add swagger
  const config = new DocumentBuilder().setTitle('Template').build();
  const documentation = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, documentation);

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: '*',
    credentials: true,
  });

  // app.useWebSocketAdapter(new SocketAdapter(app));
  await app.listen(3001);
}
bootstrap();
