(self["webpackChunkabakhi_bengcebo"] = self["webpackChunkabakhi_bengcebo"] || []).push([["src_app_pages_add-tenant_add-tenant_module_ts"],{

/***/ 3491:
/*!***************************************************************!*\
  !*** ./src/app/pages/add-tenant/add-tenant-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTenantPageRoutingModule": () => (/* binding */ AddTenantPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _add_tenant_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-tenant.page */ 1935);




const routes = [
    {
        path: '',
        component: _add_tenant_page__WEBPACK_IMPORTED_MODULE_0__.AddTenantPage
    }
];
let AddTenantPageRoutingModule = class AddTenantPageRoutingModule {
};
AddTenantPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddTenantPageRoutingModule);



/***/ }),

/***/ 2054:
/*!*******************************************************!*\
  !*** ./src/app/pages/add-tenant/add-tenant.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTenantPageModule": () => (/* binding */ AddTenantPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _add_tenant_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-tenant-routing.module */ 3491);
/* harmony import */ var _add_tenant_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-tenant.page */ 1935);
/* harmony import */ var _header_header_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.page */ 6194);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 793);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 3935);











let AddTenantPageModule = class AddTenantPageModule {
};
AddTenantPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _add_tenant_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddTenantPageRoutingModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule
        ],
        declarations: [_add_tenant_page__WEBPACK_IMPORTED_MODULE_1__.AddTenantPage, _header_header_page__WEBPACK_IMPORTED_MODULE_2__.HeaderPage]
    })
], AddTenantPageModule);



/***/ }),

/***/ 1935:
/*!*****************************************************!*\
  !*** ./src/app/pages/add-tenant/add-tenant.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTenantPage": () => (/* binding */ AddTenantPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_add_tenant_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-tenant.page.html */ 2705);
/* harmony import */ var _add_tenant_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-tenant.page.scss */ 9528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ 5620);








let AddTenantPage = class AddTenantPage {
    constructor(common, router, api, modalController, toastController) {
        this.common = common;
        this.router = router;
        this.api = api;
        this.modalController = modalController;
        this.toastController = toastController;
        this.submitted = false;
        this.tenant = {
            name: null,
            room: null,
            phone: null,
            property: null,
            occupants: null,
            role: {
                id: 't',
                description: 'Tenant',
            },
            hasCar: false,
        };
        this.tenants = [];
        this.menuItems = [
            {
                icon: 'home',
                name: 'Home',
                routerLink: './home',
            },
        ];
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
        else if (this.user !== null) {
            console.log(this.user);
            this.router.navigate(['landing']);
        }
        else if (this.user === null) {
            localStorage.clear();
            this.router.navigate(['landing']);
        }
        else {
            localStorage.clear();
            this.router.navigate(['home']);
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
    addNewTenant(form) {
        this.submitted = true;
        if (form.invalid) {
            this.presentToast('Please fill in all fields!', 'failed');
            return false;
        }
        else {
            form.value.role = this.tenant.role;
            console.log(form.value);
            this.api.addTenant('tenant/addTenant', form.value).subscribe((res) => {
                if (!(res === null || res === void 0 ? void 0 : res.err)) {
                    this.presentToast('Tenant Added Successfully', 'success');
                    setTimeout(() => {
                        this.router.navigate(['./tenants']);
                    }, 2200);
                }
                else {
                    this.presentToast(res === null || res === void 0 ? void 0 : res.err, 'failed');
                }
            });
        }
    }
};
AddTenantPage.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
AddTenantPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-tenant',
        template: _raw_loader_add_tenant_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_tenant_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddTenantPage);



/***/ }),

/***/ 6194:
/*!*********************************************!*\
  !*** ./src/app/pages/header/header.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderPage": () => (/* binding */ HeaderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_header_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./header.page.html */ 8582);
/* harmony import */ var _header_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.page.scss */ 1029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);







let HeaderPage = class HeaderPage {
    constructor(location, common, router) {
        this.location = location;
        this.common = common;
        this.router = router;
        this.showBackIcon = true;
        this.menuItems = [
            {
                icon: 'home',
                name: 'Home',
                routerLink: './home',
            },
        ];
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
        else if (this.user !== null) {
            console.log(this.user);
            this.router.navigate(['landing']);
        }
        else if (this.user === null) {
            localStorage.clear();
            this.router.navigate(['landing']);
        }
        else {
            localStorage.clear();
            this.router.navigate(['home']);
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
};
HeaderPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
HeaderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-header',
        template: _raw_loader_header_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_header_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeaderPage);



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

/***/ 9528:
/*!*******************************************************!*\
  !*** ./src/app/pages/add-tenant/add-tenant.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdGVuYW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 1029:
/*!***********************************************!*\
  !*** ./src/app/pages/header/header.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 2705:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-tenant/add-tenant.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-between ion-align-items-center\">\n        <ion-col size=\"11\">\n          <ion-row class=\"ion-align-items-center pointer\" size=\"12\">\n            <ion-col size=\"1\">\n            </ion-col>\n            <ion-col size=\"11\">\n              <ion-row\n                class=\"ion-justify-content-center ion-align-items-center\"\n                size=\"12\"\n              >\n                <ion-col >\n                  <ion-title routerLink=\"../home\" class=\"ion-title\">\n                    Add Tenant\n                  </ion-title>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-padding-end\">\n          <ion-row class=\"ion-justify-content-end ion-align-items-center\">\n            <ion-col size=\"2\" class=\"ion-margin-end\">\n              <mat-icon [matMenuTriggerFor]=\"menu\">more_vert</mat-icon>\n\n            </ion-col>\n            <mat-menu class=\"menu-wrapper\" #menu=\"matMenu\">\n                <button (click)=\"checkRoute(item)\" *ngFor=\"let item of menuItems\" mat-menu-item>\n                  <mat-icon>{{ item.icon }}</mat-icon>\n                  <span>{{ item.name }}</span>\n                </button>\n            </mat-menu>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"margin-top-4-rem\">\n      <h1 class=\"remove-margin\" align=\"center\"><b><span class=\"primary-color main-heading\">Add New Tenant</span> </b></h1>\n    </ion-col>\n  </ion-row>\n  <ion-card class=\"queries-card black-background ion-margin-bottom margin-top-4-rem\">\n    <ion-row>\n      <ion-col class=\"full-width\" class=\"ion-padding-start ion-padding-end ion-padding-top ion-padding-bottom white-color\" fxLayout=\"column\" fxLayoutAlign=\"center start\" fxLayoutGap=\"1rem\">\n        <!-- <h2 style=\"font-size: 1.2rem;\" class=\"remove-margin\">Add Tenant</h2> -->\n        <form class=\"full-width\" #newTenant=\"ngForm\" fxLayout=\"row wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\".6rem\">\n          <ion-col size=\"12\"  fxLayout=\"column wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\".6rem\" class=\"ion-margin-top\">\n\n            <ion-label >\n              Full name\n            </ion-label>            <ion-item lines=\"none\" class=\"input full-width\">\n              <ion-input [(ngModel)]=\"tenant.name\" name=\"name\" required placeholder=\"Please enter full name\"></ion-input>\n             </ion-item>\n           <ion-col *ngIf=\"(submitted && tenant?.controls?.name?.invalid) || (tenant?.controls?.name?.touched && tenant?.controls?.name?.invalid)\" size=\"12\">\n             <p class=\"primary-color error remove-margin\">Tenant name is required</p>\n             </ion-col>\n           </ion-col>\n\n           <ion-col size=\"12\"  fxLayout=\"column wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\".6rem\" >\n                         <ion-label >\n              Property\n            </ion-label>\n            <ion-item lines=\"none\" class=\"input full-width\">\n              <ion-input [(ngModel)]=\"tenant.property\" name=\"property\" required placeholder=\"Please enter property name\"></ion-input>\n             </ion-item>\n           <ion-col *ngIf=\"(submitted && tenant?.controls?.property?.invalid) || (tenant?.controls?.property?.touched && tenant?.controls?.property?.invalid)\" size=\"12\">\n             <p class=\"primary-color error remove-margin\">Property name is required</p>\n             </ion-col>\n           </ion-col>\n\n           <ion-col size=\"12\"  fxLayout=\"column wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\".6rem\" >\n                         <ion-label >\n              Room number\n            </ion-label>\n            <ion-item lines=\"none\" class=\"input full-width\">\n              <ion-input [(ngModel)]=\"tenant.room\" name=\"room\" required placeholder=\"Please enter room number\"></ion-input>\n             </ion-item>\n           <ion-col *ngIf=\"(submitted && tenant?.controls?.room?.invalid) || (tenant?.controls?.room?.touched && tenant?.controls?.room?.invalid)\" size=\"12\">\n             <p class=\"primary-color error remove-margin\">Room number is required</p>\n             </ion-col>\n           </ion-col>\n\n           <ion-col size=\"12\"  fxLayout=\"column wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\".6rem\" >\n                         <ion-label >\n              Phone\n            </ion-label>\n            <ion-item lines=\"none\" class=\"input full-width\">\n              <ion-input [(ngModel)]=\"tenant.phone\" name=\"phone\" required placeholder=\"Please enter phone number\"></ion-input>\n             </ion-item>\n           <ion-col *ngIf=\"(submitted && tenant?.controls?.phone?.invalid) || (tenant?.controls?.phone?.touched && tenant?.controls?.phone?.invalid)\" size=\"12\">\n             <p class=\"primary-color error remove-margin\">Phone number is required</p>\n             </ion-col>\n           </ion-col>\n\n           <ion-col size=\"12\"  fxLayout=\"column wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\".6rem\" >\n                         <ion-label >\n              Occupants\n            </ion-label>\n            <ion-item lines=\"none\" class=\"input full-width\">\n              <ion-input [(ngModel)]=\"tenant.occupants\" name=\"occupants\" required placeholder=\"Number of occupants\"></ion-input>\n             </ion-item>\n           <ion-col *ngIf=\"(submitted && tenant?.controls?.occupants?.invalid) || (tenant?.controls?.occupants?.touched && tenant?.controls?.occupants?.invalid)\" size=\"12\">\n             <p class=\"primary-color error remove-margin\">Occupants is required</p>\n             </ion-col>\n             <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"1rem\" class=\"ion-padding-bottom remove-margin full-width\">\n              <p style=\"padding-left: 5px;\" class=\"remove-margin-top-left-bottom white-color remove-margin\">\n                <span>Toggle on if tenant has a car</span></p> <ion-toggle name=\"hasCar\" [(ngModel)]=\"tenant.hasCar\"></ion-toggle>\n            </div>\n            <ion-button (click)=\"addNewTenant(newTenant)\" class=\"all-buttons full-width\" expand=\"block\" color=\"primary\" >Add Tenant</ion-button>\n           </ion-col>\n      </form>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 8582:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/header/header.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-between ion-align-items-center\">\n        <ion-col size=\"11\">\n          <ion-row class=\"ion-align-items-center pointer\" size=\"12\">\n            <ion-col size=\"1\">\n            </ion-col>\n            <ion-col size=\"11\">\n              <ion-row\n                class=\"ion-justify-content-center ion-align-items-center\"\n                size=\"12\"\n              >\n                <ion-col >\n                  <ion-title class=\"ion-title\">\n                    Home\n                  </ion-title>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-padding-end\">\n          <ion-row class=\"ion-justify-content-end ion-align-items-center\">\n            <ion-col size=\"2\" class=\"ion-margin-end\">\n              <mat-icon [matMenuTriggerFor]=\"menu\">more_vert</mat-icon>\n\n            </ion-col>\n            <mat-menu class=\"menu-wrapper\" #menu=\"matMenu\">\n                <button (click)=\"checkRoute(item)\" *ngFor=\"let item of menuItems\" mat-menu-item>\n                  <mat-icon>{{ item.icon }}</mat-icon>\n                  <span>{{ item.name }}</span>\n                </button>\n            </mat-menu>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_add-tenant_add-tenant_module_ts.js.map