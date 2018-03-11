import {dev_config} from '../config/config.dev';
import {release_config} from '../config/config.release';

const config = {
    dev: dev_config,
    release: release_config,
}[process.env.NODE_ENV || 'dev'];

export class AppConfig {

    static getAppPort(): number {
        return config.APP_PORT || 3000;
    }

    static getAdminEmail(): string {
        return config.ADMIN_EMAIL || 'admin';
    }

    static getAdminPassword(): string {
        return config.ADMIN_PASSWORD || '';
    }

    static getDatabaseHost(): string {
        return config.DB_HOST || '127.0.0.1';
    }

    static getDatabasePort(): number {
        return config.DB_PORT || 3306;
    }

    static getDatabaseName(): string {
        return config.DB_NAME || '';
    }

    static getDatabaseUsername(): string {
        return config.DB_USERNAME || 'root';
    }

    static getDatabasePassword(): string {
        return config.DB_PASSWORD || '';
    }

}