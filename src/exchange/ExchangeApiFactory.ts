import {Exchange} from './Exchange';
import {ExchangeApi, Binance, Bitfinex, Bittrex, Gateio, Huobipro, Kucoin, Okex, Poloniex, Zb} from './ExchangeApi';

export class ExchangeApiFactory {

    private static factory: ExchangeApiFactory = new ExchangeApiFactory();

    private _exchangeMap: Map<Exchange, ExchangeApi> = new Map<Exchange, ExchangeApi>();

    private constructor() {
        this._exchangeMap.set(Exchange.bitfinex, new Bitfinex());
        this._exchangeMap.set(Exchange.gateio, new Gateio());
        this._exchangeMap.set(Exchange.huobipro, new Huobipro());
        this._exchangeMap.set(Exchange.okex, new Okex());
        this._exchangeMap.set(Exchange.kucoin, new Kucoin());
        this._exchangeMap.set(Exchange.binance, new Binance());
        this._exchangeMap.set(Exchange.bittrex, new Bittrex());
        this._exchangeMap.set(Exchange.poloniex, new Poloniex());
        this._exchangeMap.set(Exchange.zb, new Zb());
    }

    public static getInstance(): ExchangeApiFactory {
        return ExchangeApiFactory.factory;
    }

    public getExchange(exchange: Exchange): ExchangeApi {
        return this._exchangeMap.get(exchange);
    }
}