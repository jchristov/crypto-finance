import {AbstractJob} from './AbstractJob';
import {SyncAssetJob} from './SyncAssetJob';
import {ServiceFactory} from '../service/ServiceFactory';

export class AbstractJobFactory {

    private static factory: AbstractJobFactory = new AbstractJobFactory();

    private syncAssetJob: AbstractJob = new SyncAssetJob();

    private availableList: AbstractJob[] = [
        this.syncAssetJob,
    ];

    private unavailableList: AbstractJob[] = [];

    public static getInstance(): AbstractJobFactory {
        return AbstractJobFactory.factory;
    }

    public getAvailableList(): AbstractJob[] {
        return this.availableList;
    }

    public getUnavailableList(): AbstractJob[] {
        return this.unavailableList;
    }

    public startAvailable(serviceFactory: ServiceFactory) {
        for (const job of this.availableList) {
            try {
                job.inject(serviceFactory);
                job.start();
            } catch (e) {
                // log
            }

        }
    }

    public cancelAvailable() {
        for (const job of this.availableList) {
            job.cancel();
        }
    }
}