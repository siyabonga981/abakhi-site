(self["webpackChunkabakhi_bengcebo"] = self["webpackChunkabakhi_bengcebo"] || []).push([["src_app_pages_log-query_log-query_module_ts"],{

/***/ 2098:
/*!*************************************************************!*\
  !*** ./src/app/pages/log-query/log-query-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogQueryPageRoutingModule": () => (/* binding */ LogQueryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _log_query_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-query.page */ 4986);




const routes = [
    {
        path: '',
        component: _log_query_page__WEBPACK_IMPORTED_MODULE_0__.LogQueryPage
    }
];
let LogQueryPageRoutingModule = class LogQueryPageRoutingModule {
};
LogQueryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LogQueryPageRoutingModule);



/***/ }),

/***/ 1999:
/*!*****************************************************!*\
  !*** ./src/app/pages/log-query/log-query.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogQueryPageModule": () => (/* binding */ LogQueryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _log_query_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-query-routing.module */ 2098);
/* harmony import */ var _log_query_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log-query.page */ 4986);
/* harmony import */ var _header_header_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.page */ 6194);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 793);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 3935);











let LogQueryPageModule = class LogQueryPageModule {
};
LogQueryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _log_query_routing_module__WEBPACK_IMPORTED_MODULE_0__.LogQueryPageRoutingModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule
        ],
        declarations: [_log_query_page__WEBPACK_IMPORTED_MODULE_1__.LogQueryPage, _header_header_page__WEBPACK_IMPORTED_MODULE_2__.HeaderPage]
    })
], LogQueryPageModule);



/***/ }),

/***/ 4986:
/*!***************************************************!*\
  !*** ./src/app/pages/log-query/log-query.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogQueryPage": () => (/* binding */ LogQueryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_log_query_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./log-query.page.html */ 4977);
/* harmony import */ var _log_query_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log-query.page.scss */ 1980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 7673);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_pwa_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/pwa-elements */ 6399);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ 5620);












let LogQueryPage = class LogQueryPage {
    constructor(domSanatizer, location, api, toastController, router, common, loadingController) {
        this.domSanatizer = domSanatizer;
        this.location = location;
        this.api = api;
        this.toastController = toastController;
        this.router = router;
        this.common = common;
        this.loadingController = loadingController;
        this.photos = [];
        this.count = 0;
        this.submitted = false;
        this.query = {
            issue: null,
            location: null,
            description: null,
        };
        this.menuItems = [
            {
                icon: 'home',
                name: 'Home',
                routerLink: './home',
            },
        ];
        this.takePhoto = () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.DataUrl,
            });
            this.photos.push({
                id: this.count++,
                image: this.domSanatizer.bypassSecurityTrustResourceUrl(image.dataUrl),
            });
        });
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
    removePhoto(i) {
        this.photos.splice(i - 1, 0);
    }
    presentToast(msg, toastClass) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.toastController
                .create({
                message: msg,
                cssClass: toastClass,
                duration: 2000,
            })
                .then((res) => res.present());
        });
    }
    submitQuery(form) {
        this.submitted = true;
        form.value.photos = this.photos;
        form.value.resolved = false;
        form.value.owner = JSON.parse(localStorage.getItem('user'));
        form.value.dateInitiated = new Date();
        form.value.dateResolved = null;
        this.presentLoading();
        this.api.addQuery('query/addQuery', form.value).subscribe((res) => {
            if (!res.err) {
                this.loader.dismiss();
                this.presentToast('Query sent successfully', 'success');
                this.router.navigate(['queries']);
            }
            else {
                this.loader.dismiss();
                this.presentToast(res.err, 'failed');
            }
        });
        console.log(form.value);
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
};
LogQueryPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController }
];
LogQueryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-log-query',
        template: _raw_loader_log_query_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_log_query_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LogQueryPage);



/***/ }),

/***/ 1980:
/*!*****************************************************!*\
  !*** ./src/app/pages/log-query/log-query.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2ctcXVlcnkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 4977:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/log-query/log-query.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-between ion-align-items-center\">\n        <ion-col size=\"11\">\n          <ion-row class=\"ion-align-items-center pointer\" size=\"12\">\n            <ion-col size=\"1\">\n            </ion-col>\n            <ion-col size=\"11\">\n              <ion-row\n                class=\"ion-justify-content-center ion-align-items-center\"\n                size=\"12\"\n              >\n                <ion-col >\n                  <ion-title class=\"ion-title\">\n                    Log Query\n                  </ion-title>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-padding-end\">\n          <ion-row class=\"ion-justify-content-end ion-align-items-center\">\n            <ion-col size=\"2\" class=\"ion-margin-end\">\n              <mat-icon [matMenuTriggerFor]=\"menu\">more_vert</mat-icon>\n\n            </ion-col>\n            <mat-menu class=\"menu-wrapper\" #menu=\"matMenu\">\n                <button (click)=\"checkRoute(item)\" *ngFor=\"let item of menuItems\" mat-menu-item>\n                  <mat-icon>{{ item.icon }}</mat-icon>\n                  <span>{{ item.name }}</span>\n                </button>\n            </mat-menu>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center ion-align-items-center margin-top-4-rem ion-padding-end ion-padding-start\">\n        <ion-col size=\"11\">\n          <ion-row size=\"6\" class=\"ion-justify-content-center\">\n          <h1 class=\"primary-color\"><b>Explain the issue. </b> </h1>\n          <h3 color=\"primary\">Let us know how we can assist you.</h3>\n          </ion-row>\n          </ion-col>\n          <ion-col size=\"12\" class=\"ion-margin-top\">\n      <form #queryForm=\"ngForm\">\n          <ion-col size=\"12\" class=\"ion-margin-top\">\n            <ion-item lines=\"none\" class=\"input\">\n              <ion-input [(ngModel)]=\"query.issue\" name=\"issue\" required placeholder=\"What are you reporting?\"></ion-input>\n             </ion-item>\n           <ion-col *ngIf=\"(submitted && query?.controls?.issue?.invalid) || (query?.controls?.issue?.touched && query?.controls?.issue?.invalid)\" size=\"12\">\n             <p class=\"primary-color error remove-margin\">Issue name is required</p>\n             </ion-col>\n           </ion-col>\n\n           <ion-col size=\"12\" class=\"ion-margin-top\">\n            <ion-item lines=\"none\" class=\"input\">\n              <ion-input [(ngModel)]=\"query.location\" name=\"location\" required placeholder=\"Where is this issue?\"></ion-input>\n             </ion-item>\n           <ion-col *ngIf=\"(submitted && query?.controls?.location?.invalid) || (query?.controls?.location?.touched && query?.controls?.location?.invalid)\" size=\"12\">\n             <p class=\"primary-color error remove-margin\">Issue location is required</p>\n             </ion-col>\n           </ion-col>\n           <ion-col size=\"12\" class=\"ion-margin-top\">\n            <ion-item lines=\"none\" class=\"input\">\n              <ion-textarea [(ngModel)]=\"query.description\" name=\"description\" required  rows=\"4\" placeholder=\"Describe your issue message here\"></ion-textarea>\n            </ion-item>\n            <ion-row size=\"6\" (click)=\"takePhoto()\" class=\"ion-justify-content-center ion-margin-top\">\n              <ion-button class=\"all-buttons\" color=\"primary\" >\n                <ion-icon name=\"camera-outline\"></ion-icon> Take Photo\n              </ion-button>\n\n          </ion-row>\n\n        <ion-row style=\"width: 94vw; margin: 0 auto;\" *ngIf=\"photos.length > 0;\" class=\"ion-justify-content-center ion-margin-top\">\n          <div style=\"width: 100%; overflow-x: scroll; display: flex;\">\n          <img class=\"query-img\" [ngClass]=\"photos.length > 1 && i < photos.length - 1 ? 'resize-image' : ''\" *ngFor=\"let photo of photos; let i = index\" [src]=\"photo.image\" alt=\"Image\">\n          </div>\n      </ion-row>\n        <ion-col size=\"12\">\n          <ion-button (click)=\"submitQuery(queryForm)\" class=\"all-buttons\" expand=\"block\" color=\"primary\" >Submit</ion-button>\n        </ion-col>\n        </ion-col>\n      </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_log-query_log-query_module_ts.js.map