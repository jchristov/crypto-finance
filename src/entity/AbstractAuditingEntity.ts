import {BaseEntity, Column} from 'typeorm';

export abstract class AbstractAuditingEntity extends BaseEntity{

    @Column()
    private _createdAt: number;

    @Column()
    private _updatedAt: number;

    get createdAt(): number {
        return this._createdAt;
    }

    set createdAt(value: number) {
        this._createdAt = value;
    }

    get updatedAt(): number {
        return this._updatedAt;
    }

    set updatedAt(value: number) {
        this._updatedAt = value;
    }
}