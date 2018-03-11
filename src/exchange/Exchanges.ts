import {binance, bitfinex2, bittrex, gateio, huobipro, kucoin, okex, poloniex, zb} from 'ccxt';
import {ExchangeApi} from './ExchangeApi';

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