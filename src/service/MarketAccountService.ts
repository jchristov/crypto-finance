import {Component} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {MarketAccount} from '../entity/MarketAccount';

@Component()
export class MarketAccountService {
    constructor(@InjectRepository(MarketAccount)
                private readonly marketAccountRepository: Repository<MarketAccount>) {
    }

    async findAll(): Promise<MarketAccount[]> {
        return await this.marketAccountRepository.find();
    }

    async findOne(id: number): Promise<MarketAccount> {
        return await this.marketAccountRepository.findOneById(id);
    }
}