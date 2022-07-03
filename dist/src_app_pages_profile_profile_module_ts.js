(self["webpackChunkabakhi_bengcebo"] = self["webpackChunkabakhi_bengcebo"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 1474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 4629);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 8558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 1474);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 4629);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 793);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 3935);










let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 4629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 9291);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 2777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ 5620);








let ProfilePage = class ProfilePage {
    constructor(api, common, modalController, loadingController, router) {
        this.api = api;
        this.common = common;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.router = router;
        this.submitted = false;
        this.showForm = false;
        this.emp = {
            name: null,
            empname: null,
            password: null,
            role: {
                id: null,
                description: null,
            },
        };
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
        this.emp = this.common.getUser();
        this.transformMenu();
    }
    ionViewDidEnter() {
        this.role = JSON.parse(localStorage.getItem('role'));
        this.emp = this.common.getUser();
        if (this.menuItems.length <= 1) {
            this.role = JSON.parse(localStorage.getItem('role'));
            this.emp = this.common.getUser();
            this.transformMenu();
        }
        else if (this.emp !== null) {
            console.log(this.emp);
            this.router.navigate(['landing']);
        }
        else if (this.emp === null) {
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
        else if (this.emp !== null &&
            this.emp !== undefined &&
            (this.emp.role.id === 'a' || this.emp.role.id === 'l')) {
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
        else if (this.emp !== null &&
            this.emp !== undefined &&
            this.emp.role.id === 't') {
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
    updateProfile(profile) {
        console.log(profile);
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



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

/***/ 2777:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 9291:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-between ion-align-items-center\">\n        <ion-col size=\"11\">\n          <ion-row class=\"ion-align-items-center pointer\" size=\"12\">\n            <ion-col size=\"1\">\n            </ion-col>\n            <ion-col size=\"11\">\n              <ion-row\n                class=\"ion-justify-content-center ion-align-items-center\"\n                size=\"12\"\n              >\n                <ion-col >\n                  <ion-title class=\"ion-title\">\n                    Profile\n                  </ion-title>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-padding-end\">\n          <ion-row class=\"ion-justify-content-end ion-align-items-center\">\n            <ion-col size=\"2\" class=\"ion-margin-end\">\n              <mat-icon [matMenuTriggerFor]=\"menu\">more_vert</mat-icon>\n\n            </ion-col>\n            <mat-menu class=\"menu-wrapper\" #menu=\"matMenu\">\n                <button (click)=\"checkRoute(item)\" *ngFor=\"let item of menuItems\" mat-menu-item>\n                  <mat-icon>{{ item.icon }}</mat-icon>\n                  <span>{{ item.name }}</span>\n                </button>\n            </mat-menu>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row class=\"full-width\" size=\"12\">\n    <ion-row size=\"12\" class=\"margin-top-4-rem ion-justify-content-between ion-align-items-center full-width ion-padding-start ion-padding-end\">\n      <h1 class=\"remove-margin\" align=\"center\"><b><span class=\"primary-color main-heading\">My Profile</span> </b></h1>\n    </ion-row>\n  </ion-row>\n\n  <ion-card class=\"queries-card ion-margin-bottom \">\n    <ion-row>\n      <ion-col class=\"full-width\" class=\"ion-padding-start ion-padding-end ion-padding-bottom white-color\" fxLayout=\"column\" fxLayoutAlign=\"center start\" fxLayoutGap=\"1rem\">\n          <ion-col size=\"12\"  fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayoutGap=\".6rem\" class=\"ion-margin-top\">\n           <ion-col size=\"12\"  fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"1rem\">\n            <img style=\"border-radius: 50%;\n            height: 150px;\n            width: 150px;\" src=\"../../../assets/img/logo.png\" alt=\"\">\n                    <h1 style=\"font-size: 1.5rem;\" class=\"bold primary-color\">{{ emp.name }}</h1>\n                    <h1 style=\"font-size: 1.2rem;\" class=\"bold primary-color\">{{ emp.role.description }}</h1>\n                    <h1 (click)=\"showForm = !showForm\" style=\"font-size: 1rem;\" class=\"bold green-color\">Edit Profile</h1>\n          </ion-col>\n      </ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card *ngIf=\"showForm\" class=\"queries-card black-background ion-margin-bottom \">\n    <ion-row>\n      <ion-col class=\"full-width\" class=\"ion-padding-start ion-padding-end ion-padding-top ion-padding-bottom white-color\" fxLayout=\"column\" fxLayoutAlign=\"center start\" fxLayoutGap=\"1rem\">\n        <!-- <h2 style=\"font-size: 1.2rem;\" class=\"remove-margin\">Add emp</h2> -->\n        <form class=\"full-width\" #profile=\"ngForm\" fxLayout=\"row wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\".6rem\">\n          <ion-col size=\"12\"  fxLayout=\"column wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\".6rem\" class=\"ion-margin-top\">\n\n            <ion-label >\n              Full name\n            </ion-label>            <ion-item lines=\"none\" class=\"input full-width\">\n              <ion-input [(ngModel)]=\"emp.name\" name=\"name\" required readonly placeholder=\"Please enter full name\"></ion-input>\n             </ion-item>\n           <ion-col *ngIf=\"(submitted && emp?.controls?.name?.invalid) || (emp?.controls?.name?.touched && emp?.controls?.name?.invalid)\" size=\"12\">\n             <p class=\"primary-color error remove-margin\">emp name is required</p>\n             </ion-col>\n           </ion-col>\n\n           <ion-col size=\"12\"  fxLayout=\"column wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\".6rem\" >\n                         <ion-label >\n              Username\n            </ion-label>\n            <ion-item lines=\"none\" class=\"input full-width\">\n              <ion-input [(ngModel)]=\"emp.username\" name=\"username\" required placeholder=\"Please enter username\"></ion-input>\n             </ion-item>\n           <ion-col *ngIf=\"(submitted && emp?.controls?.username?.invalid) || (emp?.controls?.username?.touched && emp?.controls?.username?.invalid)\" size=\"12\">\n             <p class=\"primary-color error remove-margin\">Username is required</p>\n             </ion-col>\n           </ion-col>\n\n           <ion-col size=\"12\"  fxLayout=\"column wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\".6rem\" >\n                         <ion-label >\n              Password\n            </ion-label>\n            <ion-item lines=\"none\" class=\"input full-width\">\n              <ion-input [(ngModel)]=\"emp.password\" name=\"password\" required placeholder=\"Please enter password number\"></ion-input>\n             </ion-item>\n           <ion-col *ngIf=\"(submitted && emp?.controls?.password?.invalid) || (emp?.controls?.password?.touched && emp?.controls?.password?.invalid)\" size=\"12\">\n             <p class=\"primary-color error remove-margin\">Password is required</p>\n             </ion-col>\n           </ion-col>\n\n           <ion-col size=\"12\"  fxLayout=\"column wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\".6rem\" >\n                         <ion-label >\n              Role\n            </ion-label>\n            <ion-item lines=\"none\" class=\"input full-width\">\n              <ion-input [(ngModel)]=\"emp.role.description\" name=\"role\" required readonly placeholder=\"Please enter role\"></ion-input>\n             </ion-item>\n           <ion-col *ngIf=\"(submitted && emp?.controls?.role?.description?.invalid) || (emp?.controls?.role?.description?.touched && emp?.controls?.role?.description?.invalid)\" size=\"12\">\n             <p class=\"primary-color error remove-margin\">Role is required</p>\n             </ion-col>\n\n\n           <ion-col size=\"12\" style=\"margin-top: 1rem !important;\"  fxLayout=\"column wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\".6rem\" >\n            <ion-button (click)=\"updateProfile(profile)\" class=\"all-buttons full-width\" expand=\"block\" color=\"primary\" >Update Profile</ion-button>\n           </ion-col>\n           </ion-col>\n      </form>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map