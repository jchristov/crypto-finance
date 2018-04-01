import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './controllers/AppController';
import {UserController} from './controllers/UserController';
import {AppConfig} from './utils/AppConfig';
import {ConnectionOptions} from 'typeorm';
import {MarketAccount} from './entity/MarketAccount';
import {MarketAccountService} from './service/MarketAccountService';
import {Asset} from './entity/Asset';
import {AssetService} from './service/AssetService';
import {WalletAccount} from './entity/WalletAccount';
import {WalletAccountService} from './service/WalletAccountService';
import {AssetSnapshot} from './entity/AssetSnapshot';
import {AssetCurrency} from './entity/AssetCurrency';

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
        TypeOrmModule.forFeature([MarketAccount, WalletAccount, Asset, AssetCurrency, AssetSnapshot]),
    ],
    controllers: [
        AppController,
        UserController,
    ],
    components: [MarketAccountService, WalletAccountService, AssetService],
})
export class ApplicationModule {

    constructor(/*private readonly connection: Connection*/) {
    }
}
