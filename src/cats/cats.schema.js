"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CatSchema = exports.Cat = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var class_validator_1 = require("class-validator");
var decorators_1 = require("class-validator/types/decorator/decorators");
var Cat = /** @class */ (function () {
    function Cat() {
    }
    __decorate([
        (0, mongoose_1.Prop)({
            required: true,
            unique: true
        }),
        (0, class_validator_1.IsEmail)(),
        (0, decorators_1.IsString)(),
        (0, decorators_1.IsNotEmpty)()
    ], Cat.prototype, "email");
    __decorate([
        (0, mongoose_1.Prop)({
            required: true
        }),
        (0, decorators_1.IsString)(),
        (0, decorators_1.IsNotEmpty)()
    ], Cat.prototype, "name");
    __decorate([
        (0, mongoose_1.Prop)(),
        (0, decorators_1.IsNumber)(),
        (0, decorators_1.IsNotEmpty)()
    ], Cat.prototype, "age");
    __decorate([
        (0, mongoose_1.Prop)(),
        (0, decorators_1.IsString)(),
        (0, decorators_1.IsNotEmpty)()
    ], Cat.prototype, "breed");
    Cat = __decorate([
        (0, mongoose_1.Schema)()
    ], Cat);
    return Cat;
}());
exports.Cat = Cat;
exports.CatSchema = mongoose_1.SchemaFactory.createForClass(Cat);
