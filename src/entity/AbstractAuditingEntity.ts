import {BaseEntity, CreateDateColumn, UpdateDateColumn, VersionColumn} from 'typeorm';

export abstract class AbstractAuditingEntity extends BaseEntity {

    @CreateDateColumn()
    private createdAt: Date;

    @UpdateDateColumn()
    private updatedAt: Date;

    @VersionColumn()
    private version: number;
}