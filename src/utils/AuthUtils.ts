import {AppConfig} from './AppConfig';

export default class AuthUtils {

    static authAdmin(email: string, password: string): boolean {
        return AppConfig.getAdminPassword() === password && AppConfig.getAdminEmail() === email;
    }

}