import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle("NEST API").setDescription("pija cola").build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("/test", app, document);
  await app.listen(3000);
}
bootstrap();
