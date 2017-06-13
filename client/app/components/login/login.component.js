"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("../../services/auth.service");
var LoginComponent = (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.errorMsg = null;
        this.successMsg = null;
        this.username = null;
        this.password = null;
        this.loginData = {
            username: this.username,
            password: this.password
        };
    }
    LoginComponent.prototype.Login = function (event) {
        var _this = this;
        event.preventDefault();
        this.loginData.username = this.username;
        this.loginData.password = this.password;
        this.authService.login(this.loginData).subscribe(function (data) {
            if (data.success) {
                _this.authService.setToken(data.token);
                _this.successMsg = data.message + '...redirecting to profile page';
                _this.username = null;
                _this.password = null;
                _this.errorMsg = null;
            }
            else {
                _this.successMsg = null;
                _this.errorMsg = data.message;
            }
        });
    };
    ;
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map