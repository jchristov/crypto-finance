import {Job, scheduleJob, cancelJob} from 'node-schedule';
import {ServiceFactory} from '../service/ServiceFactory';

export class AbstractJob {
    private _instance: Job;
    private _rule: string;
    private _isRunning: boolean;

    constructor() {
        this._isRunning = false;
    }

    set rule(value: string) {
        this._rule = value;
    }

    public inject(serviceFactory: ServiceFactory) {
        throw new Error('method is not implement');
    }

    protected async execute(): Promise<void> {
        throw new Error('method is not implement');
    }

    public start(): void {
        if (this._instance) {
            throw new Error('you can\'t start twice');
        }
        this._instance = scheduleJob(this._rule, async () => {
            if (this._isRunning) {
                throw new Error('this job is running');
            }
            this._isRunning = true;
            try {
                await this.execute();
            } catch (e) {
                // ignore and log
            }
            this._isRunning = false;
        });
    }

    public cancel(): void {
        if (!this._instance) {
            return;
        }
        cancelJob(this._instance);
        this._instance = undefined;
    }

    public restart(): void {
        if (this._instance) {
            this.cancel();
        }
        this.start();
    }
}