import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {AbstractAuditingEntity} from './AbstractAuditingEntity';
import {WalletType} from '../utils/WalletType';

@Entity()
export class WalletAccount extends AbstractAuditingEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column('varchar')
    public walletType: WalletType;

    @Column()
    public address: string;

}