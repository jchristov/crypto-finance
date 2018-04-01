import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {AbstractAuditingEntity} from './AbstractAuditingEntity';
import {Asset} from './Asset';

@Entity()
export class AssetCurrency extends AbstractAuditingEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public currency: string;

    @Column({default: 0})
    public available: number;

    @Column({default: 0})
    public frozen: number;

    @ManyToOne(() => Asset, asset => asset.assetCurrency)
    asset: Asset;
}