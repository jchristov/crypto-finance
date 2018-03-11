
import {EntityRepository, Repository} from 'typeorm';
import {MarketAccount} from '../entity/MarketAccount';

@EntityRepository(MarketAccount)
export class MarketAccountRepository extends Repository<MarketAccount> {

}