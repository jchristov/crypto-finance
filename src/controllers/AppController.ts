import {Get, Controller} from '@nestjs/common';
import {MarketAccount} from '../entity/MarketAccount';
import {MarketAccountService} from '../service/MarketAccountService';
import {Exchange} from '../exchange/Exchange';

@Controller()
export class AppController {

    constructor(private marketAccountService: MarketAccountService) {
    }

    @Get()
    async root() {
        const model: MarketAccount = await this.marketAccountService.findOne(1);
        const exchange: Exchange = model.exchange;
        if (exchange !== Exchange.gateio) {
            model.exchange = Exchange.gateio;
        }

        return await model.save();
    }
}
