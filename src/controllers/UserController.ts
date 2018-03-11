import {Post, Controller, Body, Res, HttpStatus} from '@nestjs/common';
import {AppConfig} from '../utils/AppConfig';
import {LoginDto} from '../dto/LoginDto';
import AuthUtils from '../utils/AuthUtils';

@Controller('user')
export class UserController {

    @Post('login')
    login(@Res() res, @Body() loginDto: LoginDto): object {
        if (!loginDto) {
            res.status(HttpStatus.UNAUTHORIZED).send();
            return;
        }

        if (!loginDto.email || !loginDto.password) {
            res.status(HttpStatus.UNAUTHORIZED).send();
            return;
        }

        if (AuthUtils.authAdmin(loginDto.email, loginDto.password)){
            res.status(HttpStatus.UNAUTHORIZED).send();
            return;
        }

    }
}
