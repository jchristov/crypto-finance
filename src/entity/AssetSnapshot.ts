import {Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, OneToMany} from 'typeorm';
import {AbstractAuditingEntity} from './AbstractAuditingEntity';

@Entity()
export class AssetSnapshot extends AbstractAuditingEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public assetId: number;

    @Column({default: 0})
    public availableUsd: number;

    @Column({default: 0})
    public frozenUsd: number;

    @Column('simple-json')
    public detail: [{
        currency: string,
        available: number,
    }];
}