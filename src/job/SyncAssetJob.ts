import {AbstractJob} from './AbstractJob';
import {MarketAccountService} from '../service/MarketAccountService';
import {WalletAccountService} from '../service/WalletAccountService';
import {AssetService} from '../service/AssetService';
import {ServiceFactory} from '../service/ServiceFactory';
import {ExchangeApiFactory} from '../exchange/ExchangeApiFactory';
import {ExchangeApi} from '../exchange/ExchangeApi';
import {Balances} from 'ccxt';

export class SyncAssetJob extends AbstractJob {

    private marketAccountService: MarketAccountService;
    private walletAccountService: WalletAccountService;
    private assetService: AssetService;

    constructor(serviceFactory?: ServiceFactory) {
        super();
        this.rule = '* * * * * *';
        if (!serviceFactory) {
            return;
        }
        this.marketAccountService = serviceFactory.getMarketAccountService();
        this.walletAccountService = serviceFactory.getWalletAccountService();
        this.assetService = serviceFactory.getAssetService();
    }

    public inject(serviceFactory: ServiceFactory) {
        this.marketAccountService = serviceFactory.getMarketAccountService();
        this.walletAccountService = serviceFactory.getWalletAccountService();
        this.assetService = serviceFactory.getAssetService();
    }

    protected async execute(): Promise<void> {
        const marketAccounts = await this.marketAccountService.findAll();
        for (const marketAccount of marketAccounts) {
            const exchangeApi: ExchangeApi = ExchangeApiFactory.getInstance().getExchange(marketAccount.exchange);
            exchangeApi.setAssetKey(marketAccount.accessKey);
            exchangeApi.setAssetSecret(marketAccount.secretKey);
            let balances: Balances;
            try {
                balances = await exchangeApi.fetchBalance();
            } catch (e) {
                // log test
            }
        }
    }
}