import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT ?? 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap()
  .then(() =>
    console.log(
      `[SERVER] Server started and running at http://localhost:${PORT}`,
    ),
  )
  .catch((error) => console.error(error));
