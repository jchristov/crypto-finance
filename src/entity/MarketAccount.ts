import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {Exchange} from '../exchange/Exchange';
import {AbstractAuditingEntity} from './AbstractAuditingEntity';

@Entity()
export class MarketAccount extends AbstractAuditingEntity {
    @PrimaryGeneratedColumn()
    private _id: number;

    @Column()
    private _exchange: Exchange;

    @Column()
    private _accessKey: string;

    @Column()
    private _secretKey: string;

    @Column()
    private _password: string;

    @Column()
    private _uid: string;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get exchange(): Exchange {
        return this._exchange;
    }

    set exchange(value: Exchange) {
        this._exchange = value;
    }

    get accessKey(): string {
        return this._accessKey;
    }

    set accessKey(value: string) {
        this._accessKey = value;
    }

    get secretKey(): string {
        return this._secretKey;
    }

    set secretKey(value: string) {
        this._secretKey = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get uid(): string {
        return this._uid;
    }

    set uid(value: string) {
        this._uid = value;
    }

    constructor() {
        super();

    }
}