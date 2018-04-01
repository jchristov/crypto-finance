import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './controllers/AppController';
import {UserController} from './controllers/UserController';
import {AppConfig} from './utils/AppConfig';
import {Connection, ConnectionOptions} from 'typeorm';
import {MarketAccount} from './entity/MarketAccount';
import {MarketAccountService} from './service/MarketAccountService';

const DB_OPTION: ConnectionOptions = {
    type: 'mysql',
    host: AppConfig.getDatabaseHost(),
    port: AppConfig.getDatabasePort(),
    username: AppConfig.getDatabaseUsername(),
    password: AppConfig.getDatabasePassword(),
    database: AppConfig.getDatabaseName(),
    entities: [__dirname + '/entity/*.ts'],
    synchronize: true,
};

@Module({
    imports: [
        TypeOrmModule.forRoot(DB_OPTION),
        TypeOrmModule.forFeature([MarketAccount]),
    ],
    controllers: [
        AppController,
        UserController,
    ],
    components: [MarketAccountService],
})
export class ApplicationModule {

    constructor(private readonly connection: Connection) {
    }
}
