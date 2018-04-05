import {Component} from '@nestjs/common';
import {MarketAccountService} from './MarketAccountService';
import {WalletAccountService} from './WalletAccountService';
import {AssetService} from './AssetService';

@Component()
export class ServiceFactory {

    constructor(private readonly marketAccountService: MarketAccountService,
                private readonly walletAccountService: WalletAccountService,
                private readonly assetService: AssetService) {
    }

    public getMarketAccountService(): MarketAccountService {
        return this.marketAccountService;
    }

    public getWalletAccountService(): WalletAccountService {
        return this.walletAccountService;
    }

    public getAssetService(): AssetService {
        return this.assetService;
    }
}
