"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoggerMiddleware = void 0;
var common_1 = require("@nestjs/common");
//공급자는 만들어짐
// 이제 소비자가 쓸 수 있도록 의존성 주입을 해주어야 함
var LoggerMiddleware = /** @class */ (function () {
    function LoggerMiddleware() {
        this.logger = new common_1.Logger('HTTP');
    }
    LoggerMiddleware.prototype.use = function (req, res, next) {
        var _this = this;
        res.on('finish', function () {
            _this.logger.log("".concat(req.ip, ") , ").concat(req.method, " ").concat(res.statusCode), req.originalUrl);
        });
        next();
    };
    LoggerMiddleware = __decorate([
        (0, common_1.Injectable)()
    ], LoggerMiddleware);
    return LoggerMiddleware;
}());
exports.LoggerMiddleware = LoggerMiddleware;
