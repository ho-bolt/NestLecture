"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.CatsController = void 0;
var common_1 = require("@nestjs/common");
var request_mapping_decorator_1 = require("@nestjs/common/decorators/http/request-mapping.decorator");
var http_exception_filter_1 = require("../../../../../../../../src/common/exceptions/http-exception.filter");
var success_interceptor_1 = require("../../../../../../../../src/common/interceptors/success.interceptor");
var decorators_1 = require("@nestjs/common/decorators");
var CatsController = /** @class */ (function () {
    function CatsController(catsService) {
        this.catsService = catsService;
    }
    // @UseFilters(HttpExceptionFilter) //여기다가 넣으면 throw new HttpException에서 발생한 exception이 필터링되서 나온다.
    CatsController.prototype.getAllCat = function () {
        console.log('hello controller');
        return { cats: 'get all cat api' };
    };
    CatsController.prototype.getCurrentCat = function () {
        return 'current Cat';
    };
    CatsController.prototype.signUp = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(body);
                return [2 /*return*/, 'signUp'];
            });
        });
    };
    CatsController.prototype.logIn = function () {
        return 'login';
    };
    CatsController.prototype.logOut = function () {
        return 'logOut';
    };
    CatsController.prototype.uploadCatImg = function () {
        return 'uploadImg';
    };
    __decorate([
        (0, request_mapping_decorator_1.Get)()
        // @UseFilters(HttpExceptionFilter) //여기다가 넣으면 throw new HttpException에서 발생한 exception이 필터링되서 나온다.
    ], CatsController.prototype, "getAllCat");
    __decorate([
        (0, request_mapping_decorator_1.Get)()
    ], CatsController.prototype, "getCurrentCat");
    __decorate([
        (0, request_mapping_decorator_1.Post)(),
        __param(0, (0, decorators_1.Body)())
    ], CatsController.prototype, "signUp");
    __decorate([
        (0, request_mapping_decorator_1.Post)('login')
    ], CatsController.prototype, "logIn");
    __decorate([
        (0, request_mapping_decorator_1.Post)('logout')
    ], CatsController.prototype, "logOut");
    __decorate([
        (0, request_mapping_decorator_1.Post)('upload/cats')
    ], CatsController.prototype, "uploadCatImg");
    CatsController = __decorate([
        (0, common_1.Controller)('cats'),
        (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
        (0, common_1.UseFilters)(http_exception_filter_1.HttpExceptionFilter)
    ], CatsController);
    return CatsController;
}());
exports.CatsController = CatsController;
