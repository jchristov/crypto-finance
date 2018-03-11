import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './controllers/AppController';
import {UserController} from './controllers/UserController';
import {AppConfig} from './utils/AppConfig';
import {Connection} from 'typeorm';
import {Market} from 'ccxt';
import {MarketAccount} from './entity/MarketAccount';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: AppConfig.getDatabaseHost(),
            port: AppConfig.getDatabasePort(),
            username: AppConfig.getDatabaseUsername(),
            password: AppConfig.getDatabasePassword(),
            database: AppConfig.getDatabaseName(),
            entities: [__dirname + '/src/entity/*.ts'],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([MarketAccount]),
    ],
    controllers: [
        AppController,
        UserController,
    ],
    components: [],
})
export class ApplicationModule {

    constructor(private readonly connection: Connection) {
    }
}
