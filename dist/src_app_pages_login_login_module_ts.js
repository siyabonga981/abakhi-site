(self["webpackChunkabakhi_bengcebo"] = self["webpackChunkabakhi_bengcebo"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 1021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ 5830);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);








let LoginPage = class LoginPage {
    constructor(location, router, api, toastController, loadingController) {
        this.location = location;
        this.router = router;
        this.api = api;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.submitted = false;
        this.admin = {
            username: null,
            password: null,
        };
        this.tenant = {
            room: null,
            phone: null,
        };
    }
    ngOnInit() {
        this.role = JSON.parse(localStorage.getItem('role'));
    }
    presentToast(msg, toastClass) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.toastController
                .create({
                message: msg,
                cssClass: toastClass,
                duration: 2000,
            })
                .then((res) => res.present());
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadingController
                .create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            })
                .then((res) => {
                this.loader = res;
                console.log(this.loader.dismiss);
                res.present();
            });
        });
    }
    login(role, form) {
        this.submitted = true;
        if (form.invalid) {
            this.presentToast('Please fill in all credentials!', 'failed');
            return false;
        }
        else {
            if (role !== 't') {
                this.presentLoading();
                this.api.loginAdmin('admin/login', form.value).subscribe((res) => {
                    var _a, _b;
                    if (!res.err) {
                        (_a = this.loader) === null || _a === void 0 ? void 0 : _a.dismiss();
                        localStorage.setItem('role', JSON.stringify(res.role.id));
                        localStorage.setItem('user', JSON.stringify(res));
                        this.presentToast('Logged in', 'success');
                        this.router.navigate(['landing']);
                    }
                    else {
                        (_b = this.loader) === null || _b === void 0 ? void 0 : _b.dismiss();
                        this.presentToast(res.err, 'failed');
                    }
                });
            }
            else if (role === 't') {
                this.presentLoading();
                this.api.loginTenant('tenant/login', form.value).subscribe((res) => {
                    var _a, _b;
                    if (!res.err) {
                        console.log(res);
                        (_a = this.loader) === null || _a === void 0 ? void 0 : _a.dismiss();
                        localStorage.setItem('role', JSON.stringify(res.role.id));
                        localStorage.setItem('user', JSON.stringify(res));
                        this.presentToast('Logged in', 'success');
                        this.router.navigate(['landing']);
                    }
                    else {
                        (_b = this.loader) === null || _b === void 0 ? void 0 : _b.dismiss();
                        this.presentToast(res.err, 'failed');
                    }
                });
            }
        }
    }
    goBack() {
        this.location.back();
        localStorage.clear();
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);



let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        // serverUrl = 'http://localhost:3000';
        this.serverUrl = 'https://abakhi-backend-two.herokuapp.com';
    }
    loginAdmin(endpoint, body) {
        const url = `${this.serverUrl}/${endpoint}`;
        return this.http.post(url, body);
    }
    loginTenant(endpoint, body) {
        const url = `${this.serverUrl}/${endpoint}`;
        return this.http.post(url, body);
    }
    addTenant(endpoint, body) {
        const url = `${this.serverUrl}/${endpoint}`;
        return this.http.post(url, body);
    }
    getAllTenants(endpoint) {
        const url = `${this.serverUrl}/${endpoint}`;
        return this.http.get(url);
    }
    addQuery(endpoint, body) {
        const url = `${this.serverUrl}/${endpoint}`;
        return this.http.post(url, body);
    }
    getTenantQueries(endpoint, body) {
        const url = `${this.serverUrl}/${endpoint}`;
        return this.http.post(url, body);
    }
    updateQueryStatus(endpoint, body) {
        const url = `${this.serverUrl}/${endpoint}`;
        return this.http.put(url, body);
    }
    deleteTenant(endpoint) {
        const url = `${this.serverUrl}/${endpoint}`;
        return this.http.delete(url);
    }
    updateTenant(endpoint, body) {
        const url = `${this.serverUrl}/${endpoint}`;
        return this.http.put(url, body);
    }
    addProperty(endpoint, body) {
        const url = `${this.serverUrl}/${endpoint}`;
        return this.http.post(url, body);
    }
    getAllAvailableProperties(endpoint, body) {
        const url = `${this.serverUrl}/${endpoint}`;
        return this.http.post(url, body);
    }
    sendEmail(endpoint, body) {
        const url = `${this.serverUrl}/${endpoint}`;
        return this.http.post(url, body);
    }
    sendContactEmail(endpoint, body) {
        const url = `${this.serverUrl}/${endpoint}`;
        return this.http.post(url, body);
    }
    updatePropertyRent(endpoint, body) {
        const url = `${this.serverUrl}/${endpoint}`;
        return this.http.put(url, body);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ 8781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 1021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-between ion-align-items-center\">\n        <ion-col size=\"11\">\n          <ion-row class=\"ion-align-items-center pointer\" size=\"12\">\n            <ion-col size=\"1\">\n            <ion-icon (click)=\"goBack()\" name=\"chevron-back-outline\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"11\">\n              <ion-row\n                class=\"ion-justify-content-center ion-align-items-center\"\n                size=\"12\"\n              >\n                <ion-col >\n                  <ion-title class=\"ion-title\">\n                    Login\n                  </ion-title>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-col class=\"centered-content margin-top-4-rem\">\n    <ion-grid *ngIf=\"role === 't'\">\n      <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n        <ion-col size=\"11\">\n          <ion-row size=\"6\" class=\"ion-justify-content-center\">\n            <img width=\"60%\" src=\"../../../assets/img/logo.png\" alt=\"\" />\n          </ion-row>\n          <form #tenantForm=\"ngForm\">\n          <ion-row size=\"6\" class=\"ion-justify-content-center ion-margin-top\">\n            <h1 class=\"grey-color\"><b>Hi Tenant, sign in below!</b></h1>\n          </ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\" class=\"input\">\n              <ion-input required maxlength=\"3\" type=\"tel\" [(ngModel)]=\"tenant.room\" name=\"room\" placeholder=\"Enter Room Number: 9\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\" class=\"input\">\n              <ion-input required maxlength=\"10\" type=\"tel\" [(ngModel)]=\"tenant.phone\" name=\"phone\" placeholder=\"Enter Phone Number: 0123456789\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </form>\n          <ion-col size=\"12\">\n            <ion-button\n              (click)=\"login('t', tenantForm)\"\n              class=\"all-buttons\"\n              expand=\"block\"\n              color=\"primary\"\n              >Sign in</ion-button\n            >\n          </ion-col>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid *ngIf=\"role === 'a'\">\n      <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n        <ion-col size=\"11\">\n          <ion-row size=\"6\" class=\"ion-justify-content-center\">\n            <img width=\"60%\" src=\"../../../assets/img/logo.png\" alt=\"\" />\n          </ion-row>\n          <ion-row size=\"6\" class=\"ion-justify-content-center ion-margin-top\">\n            <h1 class=\"grey-color\"><b>Hi there, sign in below!</b></h1>\n          </ion-row>\n          <form #adminForm=\"ngForm\">\n            <ion-col size=\"12\">\n              <ion-item lines=\"none\" class=\"input\">\n                <ion-input required name=\"username\" [(ngModel)]=\"admin.username\" placeholder=\"Enter Username\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item lines=\"none\" class=\"input\">\n                <ion-input required name=\"password\" [(ngModel)]=\"admin.password\" placeholder=\"Enter Password\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </form>\n          <ion-col size=\"12\">\n            <ion-button\n              (click)=\"login('a', adminForm)\"\n              class=\"all-buttons\"\n              expand=\"block\"\n              color=\"primary\"\n              >Sign in</ion-button\n            >\n          </ion-col>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-col>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map