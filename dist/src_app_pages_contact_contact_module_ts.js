(self["webpackChunkabakhi_bengcebo"] = self["webpackChunkabakhi_bengcebo"] || []).push([["src_app_pages_contact_contact_module_ts"],{

/***/ 2388:
/*!*********************************************************!*\
  !*** ./src/app/pages/contact/contact-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageRoutingModule": () => (/* binding */ ContactPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.page */ 3256);




const routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_0__.ContactPage
    }
];
let ContactPageRoutingModule = class ContactPageRoutingModule {
};
ContactPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactPageRoutingModule);



/***/ }),

/***/ 153:
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageModule": () => (/* binding */ ContactPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-routing.module */ 2388);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.page */ 3256);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 3935);









let ContactPageModule = class ContactPageModule {
};
ContactPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactPageRoutingModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule
        ],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_1__.ContactPage]
    })
], ContactPageModule);



/***/ }),

/***/ 3256:
/*!***********************************************!*\
  !*** ./src/app/pages/contact/contact.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPage": () => (/* binding */ ContactPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contact.page.html */ 478);
/* harmony import */ var _contact_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.page.scss */ 2962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ 5620);








let ContactPage = class ContactPage {
    constructor(api, common, modalController, loadingController, router, toastController) {
        this.api = api;
        this.common = common;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.router = router;
        this.toastController = toastController;
        this.menuItems = [
            {
                icon: 'home',
                name: 'Home',
                routerLink: './home',
            },
        ];
        this.email = {
            name: null,
            email: null,
            phone: null,
            message: null,
        };
    }
    ngOnInit() {
        this.role = JSON.parse(localStorage.getItem('role'));
        this.user = this.common.getUser();
        this.transformMenu();
    }
    ionViewDidEnter() {
        this.role = JSON.parse(localStorage.getItem('role'));
        this.user = this.common.getUser();
        if (this.menuItems.length <= 1) {
            this.role = JSON.parse(localStorage.getItem('role'));
            this.user = this.common.getUser();
            this.transformMenu();
        }
    }
    ionViewWillLeave() {
        this.menuItems = [
            {
                icon: 'home',
                name: 'Home',
                routerLink: './home',
            },
        ];
        console.log('reset nav');
    }
    logout() {
        localStorage.removeItem('user');
        this.router.navigate(['./home']);
        window.location.reload();
    }
    transformMenu() {
        if (JSON.parse(localStorage.getItem('user')) === undefined ||
            JSON.parse(localStorage.getItem('user')) === null) {
            console.log('Guest');
            this.menuItems.splice(1, 0, {
                icon: 'apartment',
                name: 'Properties',
                routerLink: './properties',
            }, {
                icon: 'chat',
                name: 'Contact',
                routerLink: './contact',
            });
        }
        else if (this.user !== null &&
            this.user !== undefined &&
            (this.user.role.id === 'a' || this.user.role.id === 'l')) {
            console.log('admin and landlord con');
            this.menuItems.splice(1, 0, {
                icon: 'account_circle',
                name: 'Profile',
                routerLink: './profile',
            }, {
                icon: 'people',
                name: 'Tenants',
                routerLink: './tenants',
            }, {
                icon: 'help_center',
                name: 'Queries',
                routerLink: './queries',
            }, {
                icon: 'apartment',
                name: 'Properties',
                routerLink: './properties',
            }, {
                icon: 'power_settings_new',
                name: 'Logout',
                routerLink: '',
            });
        }
        else if (this.user !== null &&
            this.user !== undefined &&
            this.user.role.id === 't') {
            console.log('tenant con');
            this.menuItems.splice(1, 0, {
                icon: 'help_center',
                name: 'Queries',
                routerLink: './queries',
            }, {
                icon: 'apartment',
                name: 'Properties',
                routerLink: './properties',
            }, {
                icon: 'chat',
                name: 'Contact',
                routerLink: './contact',
            }, {
                icon: 'power_settings_new',
                name: 'Logout',
                routerLink: './queries',
            });
        }
        else {
            console.log('team');
            this.menuItems.splice(1, 0, {
                icon: 'account_circle',
                name: 'Profile',
                routerLink: './profile',
            }, {
                icon: 'help_center',
                name: 'Queries',
                routerLink: './queries',
            }, {
                icon: 'power_settings_new',
                name: 'Logout',
                routerLink: '',
            });
        }
    }
    checkRoute(route) {
        if (route.name === 'Logout') {
            localStorage.clear();
            this.router.navigate(['./home']);
        }
        else {
            this.router.navigate([route.routerLink]);
        }
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('loader');
            yield this.loadingController
                .create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            })
                .then((res) => {
                this.loader = res;
                res.present();
            });
        });
    }
    presentToast(msg, toastClass) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.toastController
                .create({
                message: msg,
                cssClass: toastClass,
                duration: 2000,
            })
                .then((res) => res.present());
        });
    }
    sendEmail(form) {
        if (form.invalid) {
            this.presentToast('Please fill in mandatory fields!', 'failed');
            return false;
        }
        else {
            this.presentLoading();
            this.api.sendContactEmail('property/sendContactEmail', form.value).subscribe((res) => {
                if (!(res === null || res === void 0 ? void 0 : res.err)) {
                    this.loader.dismiss();
                    this.presentToast('Email Sent Successfully', 'success');
                    setTimeout(() => {
                        window.location.reload();
                    }, 2200);
                }
                else {
                    this.loader.dismiss();
                    this.presentToast(res === null || res === void 0 ? void 0 : res.err, 'failed');
                }
            });
        }
    }
};
ContactPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
ContactPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-contact',
        template: _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contact_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContactPage);



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

/***/ 5620:
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let CommonService = class CommonService {
    constructor() { }
    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
};
CommonService.ctorParameters = () => [];
CommonService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ 2962:
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 478:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-between ion-align-items-center\">\n        <ion-col size=\"11\">\n          <ion-row class=\"ion-align-items-center pointer\" size=\"12\">\n            <ion-col size=\"1\">\n            </ion-col>\n            <ion-col size=\"11\">\n              <ion-row\n                class=\"ion-justify-content-center ion-align-items-center\"\n                size=\"12\"\n              >\n                <ion-col >\n                  <ion-title class=\"ion-title\">\n                    Contact us\n                  </ion-title>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-padding-end\">\n          <ion-row class=\"ion-justify-content-end ion-align-items-center\">\n            <ion-col size=\"2\" class=\"ion-margin-end\">\n              <mat-icon [matMenuTriggerFor]=\"menu\">more_vert</mat-icon>\n\n            </ion-col>\n            <mat-menu class=\"menu-wrapper\" #menu=\"matMenu\">\n                <button (click)=\"checkRoute(item)\" *ngFor=\"let item of menuItems\" mat-menu-item>\n                  <mat-icon>{{ item.icon }}</mat-icon>\n                  <span>{{ item.name }}</span>\n                </button>\n            </mat-menu>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"wrapper\">\n  <ion-grid>\n    <ion-card class=\"contact-card\">\n    </ion-card>\n</ion-grid>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\">\n      <ion-col size=\"11\">\n        <ion-row size=\"6\" class=\"ion-justify-content-center\">\n        <h1 style=\"font-size: 2rem;\" class=\"primary-color\"><b>Contact us </b> </h1>\n        <h3 align=\"center\" color=\"primary\">We love questions and feedback, we are happy to help.</h3>\n        </ion-row>\n        <ion-col size=\"12\">\n        <h1 style=\"text-align: center;\" class=\"primary-color\"><b>Our Socials </b> </h1>\n          <h3 align=\"center\" color=\"primary\">Connect with us below.</h3>\n          <ion-row class=\"ion-justify-content-around\">\n            <ion-item href=\"https://twitter.com/abakhi_bengcebo\" lines=\"none\" class=\"input\">\n              <ion-icon style=\"padding-right: .35rem;\" class=\"twitter\" name=\"logo-twitter\"></ion-icon>\n            </ion-item>\n            <!-- <ion-item href=\"https://twitter.com/\" lines=\"none\" class=\"input\">\n              <img style=\"padding-right: .4rem;\" src=\"../../../assets/img/instagram.png\" height=\"20px\" alt=\"\">\n            </ion-item> -->\n            <ion-item href=\"https://web.facebook.com/kujengeana?_rdc=1&_rdr\" lines=\"none\" class=\"input\">\n              <ion-icon style=\"padding-right: .35rem;\" class=\"facebook\" name=\"logo-facebook\"></ion-icon>\n            </ion-item>\n            <ion-item href=\"https://wa.me/27822585711\" lines=\"none\" class=\"input\">\n              <ion-icon style=\"padding-right: .35rem;\" class=\"whatsapp\" name=\"logo-whatsapp\"></ion-icon>\n            </ion-item>\n          </ion-row>\n        </ion-col>\n\n        <ion-col size=\"11\">\n          <ion-row size=\"6\" class=\"ion-justify-content-center\">\n          <h1 class=\"primary-color\"><b>Write to us </b> </h1>\n          <h3 color=\"primary\">Let us know how we can assist you.</h3>\n          </ion-row>\n          </ion-col>\n\n        <form style=\"margin-top: -2rem;\" class=\"full-width\" #contactEmailForm=\"ngForm\">\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\" class=\"input\">\n              <ion-input [(ngModel)]=\"email.name\" required name=\"name\" placeholder=\"Full name\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\" class=\"input\">\n              <ion-input type=\"email\" [(ngModel)]=\"email.email\"  name=\"email\" placeholder=\"Email (optional)\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\" class=\"input\">\n              <ion-input type=\"number\" [(ngModel)]=\"email.phone\" required name=\"phone\" placeholder=\"Phone number\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\" class=\"input\">\n              <ion-textarea [(ngModel)]=\"email.message\" required name=\"message\" rows=\"3\" placeholder=\"Type your message here\"></ion-textarea>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-button (click)=\"sendEmail(contactEmailForm)\" class=\"all-buttons\" expand=\"block\" color=\"primary\" >Submit</ion-button>\n          </ion-col>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_contact_contact_module_ts.js.map