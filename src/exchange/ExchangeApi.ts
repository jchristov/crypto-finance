import {
    Balance,
    Balances,
    Currency,
    Exchange,
    Market,
    OHLCV,
    Order,
    OrderBook,
    PartialBalances,
    Ticker,
    Trade,
    poloniex,
    okex,
    gateio,
    huobipro,
    kucoin,
    binance,
    bitfinex2,
    bittrex,
    zb,
} from 'ccxt';

export class ExchangeApi {

    private _exchange: Exchange;

    constructor(exchange: Exchange) {
        this._exchange = exchange;
    }

    getMarket(symbol: string): Market {
        return this._exchange.getMarket(symbol);
    }

    describe(): any {
        return this._exchange.describe();
    }

    defaults(): any {
        return this._exchange.defaults();
    }

    nonce(): number {
        return this._exchange.nonce();
    }

    encodeURIComponent(...args): string {
        return this._exchange.encodeURIComponent(args);
    }

    checkRequiredCredentials(): void {
        this._exchange.checkRequiredCredentials();
    }

    initRestRateLimiter(): void {
        this._exchange.initRestRateLimiter();
    }

    handleResponse(url: string, method: string, headers?: any, body?: any): any {
        return this._exchange.handleResponse(url, method, headers, body);
    }

    defineRestApi(api: any, methodName: any, options?: { [p: string]: any }): void {
        this._exchange.defineRestApi(api, methodName, options);
    }

    fetch(url: string, method?: string, headers?: any, body?: any): Promise<any> {
        return this._exchange.fetch(url, method, headers, body);
    }

    fetch2(path: any, api?: string, method?: string, params?: { [p: string]: any }, headers?: any, body?: any): Promise<any> {
        return this._exchange.fetch2(path, api, method, params, headers, body);
    }

    setMarkets(markets: Market[], currencies?: Currency[]): { [p: string]: Market } {
        return this._exchange.setMarkets(markets, currencies);
    }

    loadMarkets(reload?: boolean): Promise<{ [p: string]: Market }> {
        return this._exchange.loadMarkets(reload);
    }

    fetchTicker(symbol: string, params?: { [p: string]: any }): Promise<Ticker> {
        return this._exchange.fetchTicker(symbol, params);
    }

    fetchTickers(symbols?: string[], params?: { [x: string]: any }): Promise<{ [x: string]: Ticker }> {
        return this._exchange.fetchTickers(symbols, params);
    }

    fetchMarkets(): Promise<Market[]> {
        return this._exchange.fetchMarkets();
    }

    fetchOrderStatus(id: string, market: string): Promise<string> {
        return this._exchange.fetchOrderStatus(id, market);
    }

    encode(str: string): string {
        return this._exchange.encode(str);
    }

    decode(str: string): string {
        return this._exchange.decode(str);
    }

    account(): Balance {
        return this._exchange.account();
    }

    commonCurrencyCode(currency: string): string {
        return this._exchange.commonCurrencyCode(currency);
    }

    market(symbol: string): Market {
        return this._exchange.market(symbol);
    }

    marketId(symbol: string): string {
        return this._exchange.marketId(symbol);
    }

    marketIds(symbols: string[]): string[] {
        return this._exchange.marketIds(symbols);
    }

    symbol(symbol: string): string {
        return this._exchange.symbol(symbol);
    }

    extractParams(str: string): string[] {
        return this._exchange.extractParams(str);
    }

    createOrder(market: string, type: string, side: string, amount: string, price?: string, params?: string): Promise<any> {
        return this._exchange.createOrder(market, type, side, amount, price, params);
    }

    fetchBalance(params?: any): Promise<Balances> {
        return this._exchange.fetchBalance(params);
    }

    fetchTotalBalance(params?: any): Promise<PartialBalances> {
        return this._exchange.fetchTotalBalance(params);
    }

    fetchUsedBalance(params?: any): Promise<PartialBalances> {
        return this._exchange.fetchUsedBalance(params);
    }

    fetchFreeBalance(params?: any): Promise<PartialBalances> {
        return this._exchange.fetchFreeBalance(params);
    }

    fetchOrderBook(symbol: string, limit?: number, params?: any): Promise<OrderBook> {
        return this._exchange.fetchOrderBook(symbol, limit, params);
    }

    fetchTrades(symbol: string, since?: number, limit?: number, params?: {}): Promise<Trade[]> {
        return this._exchange.fetchTrades(symbol, since, limit, params);
    }

    fetchOHLCV(symbol: string, timeframe?: string, since?: number, limit?: number, params?: any): Promise<OHLCV[]> {
        return this._exchange.fetchOHLCV(symbol, timeframe, since, limit, params);
    }

    fetchOrders(symbol?: string, since?: number, limit?: number, params?: {}): Promise<Order[]> {
        return this._exchange.fetchOrders(symbol, since, limit, params);
    }

    fetchOpenOrders(symbol?: string, since?: number, limit?: number, params?: {}): Promise<Order[]> {
        return this._exchange.fetchOpenOrders(symbol, since, limit, params);
    }

    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any> {
        return this._exchange.cancelOrder(id, symbol, params);
    }

    deposit(currency: string, amount: string, address: string, params?: {}): Promise<any> {
        return this._exchange.deposit(currency, amount, address, params);
    }

    fetchDepositAddress(currency: string, params?: {}): Promise<any> {
        return this._exchange.fetchDepositAddress(currency, params);
    }

    withdraw(currency: string, amount: string, address: string, tag?: string, params?: {}): Promise<any> {
        return this._exchange.withdraw(currency, amount, address, tag, params);
    }

    request(path: string, api?: string, method?: string, params?: any, headers?: any, body?: any): Promise<any> {
        return this._exchange.request(path, api, method, params, headers, body);
    }

    YmdHMS(timestamp: string, infix: string): string {
        return this._exchange.YmdHMS(timestamp, infix);
    }

    iso8601(timestamp: string): string {
        return this._exchange.iso8601(timestamp);
    }

    seconds(): number {
        return this._exchange.seconds();
    }

    microseconds(): number {
        return this._exchange.microseconds();
    }

    setAssetKey(apiKey: string): void {
        this._exchange.apiKey = apiKey;
    }

    setAssetSecret(secret: string): void {
        this._exchange.secret = secret;
    }
}

export class Gateio extends ExchangeApi {
    constructor() {
        super(new gateio());
    }
}

export class Okex extends ExchangeApi {
    constructor() {
        super(new okex());
    }
}

export class Binance extends ExchangeApi {
    constructor() {
        super(new binance());
    }
}

export class Bitfinex extends ExchangeApi {
    constructor() {
        super(new bitfinex2());
    }
}

export class Huobipro extends ExchangeApi {
    constructor() {
        super(new huobipro());
    }
}

export class Kucoin extends ExchangeApi {
    constructor() {
        super(new kucoin());
    }
}

export class Poloniex extends ExchangeApi {
    constructor() {
        super(new poloniex());
    }
}

export class Bittrex extends ExchangeApi {
    constructor() {
        super(new bittrex());
    }
}

export class Zb extends ExchangeApi {
    constructor() {
        super(new zb());
    }
}
