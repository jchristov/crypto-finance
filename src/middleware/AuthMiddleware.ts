import {Middleware, NestMiddleware, ExpressMiddleware} from '@nestjs/common';
import {AsyncExpressMiddleware} from '@nestjs/common/interfaces/middlewares/nest-middleware.interface';

@Middleware()
export class AuthMiddlewareMiddleware implements NestMiddleware {
    async resolve(...args: any[]): AsyncExpressMiddleware {
        return (req, res, next) => {
            next();
        };
    }
}
