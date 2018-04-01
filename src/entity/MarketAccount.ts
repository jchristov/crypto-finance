import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {Exchange} from '../exchange/Exchange';
import {AbstractAuditingEntity} from './AbstractAuditingEntity';

@Entity()
export class MarketAccount extends AbstractAuditingEntity {
    @PrimaryGeneratedColumn()
    public  id: number;

    @Column('varchar')
    public exchange: Exchange;

    @Column()
    public accessKey: string;

    @Column()
    public secretKey: string;

    @Column({nullable: true})
    public password: string;

    @Column({nullable: true})
    public uid: string;

    constructor(exchange: Exchange, accessKey: string, secretKey: string) {
        super();
        this.exchange = exchange;
        this.accessKey = accessKey;
        this.secretKey = secretKey;
    }
}