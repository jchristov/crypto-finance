import {NestFactory} from '@nestjs/core';
import {ApplicationModule} from './AppModule';
import {AppConfig} from './utils/AppConfig';
import {ServiceFactory} from './service/ServiceFactory';
import {INestApplication} from '@nestjs/common';
import {AbstractJobFactory} from './job/AbstractJobFactory';

function schedule(app: INestApplication) {
    const serviceFactory: ServiceFactory = app.select(ApplicationModule).get(ServiceFactory);
    AbstractJobFactory.getInstance().startAvailable(serviceFactory);
}

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    await app.listen(AppConfig.getAppPort());
    schedule(app);
}

bootstrap();
