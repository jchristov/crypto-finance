import {Component} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Asset} from '../entity/Asset';
import {AssetSnapshot} from '../entity/AssetSnapshot';

@Component()
export class AssetService {
    constructor(@InjectRepository(Asset)
                private readonly assetRepository: Repository<Asset>,
                @InjectRepository(AssetSnapshot)
                private readonly assetSnapshotRepository: Repository<AssetSnapshot>) {
    }

    async findAll(): Promise<Asset[]> {
        return await this.assetRepository.find();
    }

    async findOne(id: number): Promise<Asset> {
        return await this.assetRepository.findOneById(id);
    }

    async findAllSnapshotByAssetId(assetId: number): Promise<AssetSnapshot[]> {
        return await this.assetSnapshotRepository.find({
            where: {assetId},
        });
    }

}