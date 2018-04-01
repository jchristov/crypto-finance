import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {AbstractAuditingEntity} from './AbstractAuditingEntity';
import {AssetCurrency} from './AssetCurrency';

@Entity()
export class Asset extends AbstractAuditingEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({default: 0})
    public availableUsd: number;

    @Column({default: 0})
    public frozenUsd: number;

    @Column({nullable: true, unique: true})
    public marketAccountId: number;

    @Column({nullable: true, unique: true})
    public walletAccountId: number;

    @OneToMany(() => AssetCurrency, assetCurrency => assetCurrency.asset)
    assetCurrency: AssetCurrency;
}