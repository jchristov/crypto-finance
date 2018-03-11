import {Get, Controller} from '@nestjs/common';
import {ExchangeApiFactory} from '../exchange/ExchangeApiFactory';
import {MarketAccount} from '../entity/MarketAccount';
import {Exchange} from '../exchange/Exchange';

@Controller()
export class AppController {
    @Get()
    async root() {
        const model = new MarketAccount();
        return await model.save();
    }
}
