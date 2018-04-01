import {Job, scheduleJob, cancelJob} from 'node-schedule';

export class Schedule {
    private _instance: Job;
    private _rule: string;

    constructor(rule: string) {
        this._rule = rule;
    }

    execute(): void {
        console.warn(`method is not implement`);
    }

    start(): void {
        this._instance = scheduleJob(this._rule, this.execute);
    }

    cancel(): void {
        cancelJob(this._instance);
    }
}