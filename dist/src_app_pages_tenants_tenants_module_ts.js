(self["webpackChunkabakhi_bengcebo"] = self["webpackChunkabakhi_bengcebo"] || []).push([["src_app_pages_tenants_tenants_module_ts"],{

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

/***/ 9766:
/*!*********************************************************!*\
  !*** ./src/app/pages/tenants/tenants-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TenantsPageRoutingModule": () => (/* binding */ TenantsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tenants_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tenants.page */ 7854);




const routes = [
    {
        path: '',
        component: _tenants_page__WEBPACK_IMPORTED_MODULE_0__.TenantsPage
    }
];
let TenantsPageRoutingModule = class TenantsPageRoutingModule {
};
TenantsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TenantsPageRoutingModule);



/***/ }),

/***/ 9045:
/*!*************************************************!*\
  !*** ./src/app/pages/tenants/tenants.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TenantsPageModule": () => (/* binding */ TenantsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tenants_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tenants-routing.module */ 9766);
/* harmony import */ var _tenants_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tenants.page */ 7854);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 793);
/* harmony import */ var _header_header_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.page */ 6194);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 3935);











let TenantsPageModule = class TenantsPageModule {
};
TenantsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _tenants_routing_module__WEBPACK_IMPORTED_MODULE_0__.TenantsPageRoutingModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule
        ],
        declarations: [_tenants_page__WEBPACK_IMPORTED_MODULE_1__.TenantsPage, _header_header_page__WEBPACK_IMPORTED_MODULE_2__.HeaderPage]
    })
], TenantsPageModule);



/***/ }),

/***/ 7854:
/*!***********************************************!*\
  !*** ./src/app/pages/tenants/tenants.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TenantsPage": () => (/* binding */ TenantsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tenants_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tenants.page.html */ 4618);
/* harmony import */ var _tenants_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tenants.page.scss */ 2617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _view_tenant_view_tenant_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view-tenant/view-tenant.page */ 2255);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);









let TenantsPage = class TenantsPage {
    constructor(common, router, api, modalController) {
        this.common = common;
        this.router = router;
        this.api = api;
        this.modalController = modalController;
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
    getTenants() {
        this.api.getAllTenants('tenant/getTenants').subscribe((res) => {
            this.tenants = res;
            console.log(this.tenants);
        });
    }
    viewTenant(tenant) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController
                .create({
                component: _view_tenant_view_tenant_page__WEBPACK_IMPORTED_MODULE_3__.ViewTenantPage,
                componentProps: { tenant },
            })
                .then((res) => res.present());
        });
    }
};
TenantsPage.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
TenantsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-tenants',
        template: _raw_loader_tenants_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tenants_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TenantsPage);



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

/***/ 2617:
/*!*************************************************!*\
  !*** ./src/app/pages/tenants/tenants.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW5hbnRzLnBhZ2Uuc2NzcyJ9 */");

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

/***/ }),

/***/ 4618:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tenants/tenants.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-between ion-align-items-center\">\n        <ion-col size=\"11\">\n          <ion-row class=\"ion-align-items-center pointer\" size=\"12\">\n            <ion-col size=\"1\">\n            </ion-col>\n            <ion-col size=\"11\">\n              <ion-row\n                class=\"ion-justify-content-center ion-align-items-center\"\n                size=\"12\"\n              >\n                <ion-col >\n                  <ion-title routerLink=\"../home\" class=\"ion-title\">\n                    Tenants\n                  </ion-title>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-padding-end\">\n          <ion-row class=\"ion-justify-content-end ion-align-items-center\">\n            <ion-col size=\"2\" class=\"ion-margin-end\">\n              <mat-icon [matMenuTriggerFor]=\"menu\">more_vert</mat-icon>\n\n            </ion-col>\n            <mat-menu class=\"menu-wrapper\" #menu=\"matMenu\">\n                <button (click)=\"checkRoute(item)\" *ngFor=\"let item of menuItems\" mat-menu-item>\n                  <mat-icon>{{ item.icon }}</mat-icon>\n                  <span>{{ item.name }}</span>\n                </button>\n            </mat-menu>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"full-width\" size=\"12\">\n    <ion-row size=\"12\" class=\"margin-top-4-rem ion-justify-content-between ion-align-items-center full-width ion-padding-start ion-padding-end\">\n      <h1 class=\"remove-margin\" align=\"center\"><b><span class=\"primary-color main-heading\">Tenants</span> </b></h1>\n      <div routerLink=\"../add-tenant\" style=\"font-size: 1.1rem;\" class=\"primary-color bold\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"1rem\"><ion-icon name=\"add-circle\"></ion-icon> Add new</div>\n    </ion-row>\n  </ion-row>\n\n  <ion-col size=\"12\" class=\"ion-padding-top\">\n    <ion-list fxLayout=\"column\" fxLayoutAlign=\"start stretch\" fxLayoutGap=\".75rem\">\n      <ion-item  style=\"border-bottom: 2px solid grey;\" *ngFor=\"let tenant of tenants\">\n        <ion-col size=\"12\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\" fxLayoutGap=\".5rem\">\n          <h2 class=\"remove-margin primary-color\">{{ tenant.name }} </h2>\n          <p class=\"remove-margin\"> {{ tenant.property }} </p>\n          <p class=\"remove-margin\">Room {{ tenant.room }} </p>\n          <p class=\"remove-margin bold\" (click)=\"viewTenant(tenant)\">View Full Tenant Details</p>\n        </ion-col>\n      </ion-item>\n    </ion-list>\n  </ion-col>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tenants_tenants_module_ts.js.map