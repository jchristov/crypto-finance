import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import {AppConfig} from './utils/AppConfig';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	await app.listen(AppConfig.getAppPort());
}
bootstrap();
