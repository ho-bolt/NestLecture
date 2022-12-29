"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var cats_module_1 = require("./cats/cats.module");
var logger_middleware_1 = require("./common/middleware/logger.middleware");
var mongoose_1 = require("@nestjs/mongoose");
var config_1 = require("@nestjs/config");
var mongoose_2 = require("mongoose");
require("core-js/es7/reflect");
var AppModule = /** @class */ (function () {
    function AppModule() {
        this.isDev = process.env.MODE === 'dev' ? true : false;
    }
    AppModule.prototype.configure = function (consumer) {
        // cats 라우터에 바인딩을 시켜준다.
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*'); // * 전체 미들웨어애 대해서 에로 발생 시
        mongoose_2["default"].set('debug', true); //몽구스 쿼리 찍어줌
    };
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot(),
                mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URL),
                cats_module_1.CatsModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
