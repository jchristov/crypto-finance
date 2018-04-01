import {Component} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {WalletAccount} from '../entity/WalletAccount';

@Component()
export class WalletAccountService {
    constructor(@InjectRepository(WalletAccount)
                private readonly walletAccountRepository: Repository<WalletAccount>) {
    }

    async findAll(): Promise<WalletAccount[]> {
        return await this.walletAccountRepository.find();
    }

    async findOne(id: number): Promise<WalletAccount> {
        return await this.walletAccountRepository.findOneById(id);
    }
}