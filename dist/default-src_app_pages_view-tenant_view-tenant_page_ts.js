(self["webpackChunkabakhi_bengcebo"] = self["webpackChunkabakhi_bengcebo"] || []).push([["default-src_app_pages_view-tenant_view-tenant_page_ts"],{

/***/ 2255:
/*!*******************************************************!*\
  !*** ./src/app/pages/view-tenant/view-tenant.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewTenantPage": () => (/* binding */ ViewTenantPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_view_tenant_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./view-tenant.page.html */ 7516);
/* harmony import */ var _view_tenant_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-tenant.page.scss */ 56);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ 5620);



/* eslint-disable no-underscore-dangle */





let ViewTenantPage = class ViewTenantPage {
    constructor(modalController, api, toastController, common) {
        this.modalController = modalController;
        this.api = api;
        this.toastController = toastController;
        this.common = common;
        this.submitted = false;
        this.toggleChecked = false;
        this.showForm = false;
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.role = JSON.parse(localStorage.getItem('role'));
        this.user = this.common.getUser();
    }
    ngAfterViewInit() {
        this.toggleChecked = this.tenant.hasCar;
    }
    closeModal() {
        this.modalController.dismiss({
            dismissed: true,
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
    deleteSelectedTenant(id) {
        const conf = confirm('Are you sure you want to delete this tenant?');
        if (conf) {
            this.api.deleteTenant('tenant/deleteTenant/' + id).subscribe((res) => {
                if (res) {
                    this.presentToast('Tenant Deleted Successfully', 'success');
                    setTimeout(() => {
                        window.location.reload();
                    }, 2200);
                }
            });
        }
    }
    updateTenant(form) {
        this.submitted = true;
        if (form.invalid) {
            this.presentToast('Please fill in all fields!', 'failed');
            return false;
        }
        else {
            console.log(form.value);
            this.api
                .updateTenant('tenant/updateTenant/' + this.tenant._id, form.value)
                .subscribe((res) => {
                if (!(res === null || res === void 0 ? void 0 : res.err)) {
                    this.presentToast('Tenant Updated Successfully', 'success');
                    setTimeout(() => {
                        window.location.reload();
                    }, 2200);
                }
                else {
                    this.presentToast(res === null || res === void 0 ? void 0 : res.err, 'failed');
                }
            });
        }
    }
};
ViewTenantPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService }
];
ViewTenantPage.propDecorators = {
    tenant: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
ViewTenantPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-view-tenant',
        template: _raw_loader_view_tenant_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_view_tenant_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ViewTenantPage);



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

/***/ 56:
/*!*********************************************************!*\
  !*** ./src/app/pages/view-tenant/view-tenant.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXRlbmFudC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 7516:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/view-tenant/view-tenant.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-row size=\"12\" fxLayout=\"row\" fxLayoutAlign=\"center center\" >\n      <ion-col  >\n    <h3 class=\"remove-margin white-color\" fxLayout=\"column\" fxLayoutAlign=\"center start\"><span> Tenant: <b>{{ tenant.name }}</b></span></h3>\n      </ion-col>\n      <ion-col size=\"3\" fxLayout=\"column\" fxLayoutAlign=\"center end\" >\n    <ion-button (click)=\"closeModal()\" class=\"maroon-background white-color all-buttons\">Close</ion-button>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"queries-card black-background ion-margin-bottom margin-top-4-rem\">\n    <ion-row>\n      <ion-col size=\"12\"  fxLayout=\"column wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\".6rem\" class=\"ion-padding-start ion-padding-top ion-padding-bottom white-color\" fxLayout=\"column\" fxLayoutAlign=\"center start\" fxLayoutGap=\".5rem\">\n        <h2 class=\"remove-margin\"> {{ tenant.name }} </h2>\n        <p class=\"remove-margin\">Property: {{ tenant.property }} </p>\n        <p class=\"remove-margin\">Room: {{ tenant.room }} </p>\n        <p class=\"remove-margin\">Phone: {{ tenant.phone }} </p>\n        <p class=\"remove-margin\">Occupants: {{ tenant.occupants }} </p>\n        <p class=\"remove-margin\">Owns a car: {{ (tenant.hasCar === true) ? 'Yes' : 'No' }} </p>\n    <ion-row *ngIf=\"role === 'a'\" size=\"12\" class=\"ion-justify-content-between ion-align-items-center full-width\">\n      <ion-col size=\"5\">\n    <ion-row class=\"green-color\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    <ion-icon style=\"font-size: 1.3rem; margin-right: 10px;\" name=\"create\"></ion-icon>\n      <h2 (click)=\"showForm = !showForm\" class=\"remove-margin\" style=\"font-size: 1.3rem;\">Edit</h2>\n      </ion-row>\n      </ion-col>\n      <ion-col size=\"5\">\n        <ion-row class=\"primary-color\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <ion-icon style=\"font-size: 1.3rem; margin-right: 10px;\" name=\"trash\"></ion-icon>\n          <h2 (click)=\"deleteSelectedTenant(tenant._id)\" class=\"remove-margin\" style=\"font-size: 1.3rem;\">Delete</h2></ion-row>\n          </ion-col>\n    </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card *ngIf=\"showForm\" class=\"queries-card black-background ion-margin-bottom margin-top-4-rem\">\n    <ion-row>\n      <ion-col class=\"full-width\" class=\"ion-padding-start ion-padding-end ion-padding-top ion-padding-bottom white-color\" fxLayout=\"column\" fxLayoutAlign=\"center start\" fxLayoutGap=\"1rem\">\n        <h2 style=\"font-size: 1.2rem;\" class=\"remove-margin\">Update {{ tenant.name.split(' ')[0] }}'s profile </h2>\n        <form class=\"full-width\" #updateForm=\"ngForm\" fxLayout=\"row wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\".6rem\">\n          <ion-col size=\"12\"  fxLayout=\"column wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\".6rem\" class=\"ion-margin-top\">\n\n            <ion-label >\n              Full name\n            </ion-label>            <ion-item lines=\"none\" class=\"input full-width\">\n              <ion-input [(ngModel)]=\"tenant.name\" name=\"name\" required placeholder=\"Please enter name\"></ion-input>\n             </ion-item>\n           <ion-col *ngIf=\"(submitted && tenant?.controls?.name?.invalid) || (tenant?.controls?.name?.touched && tenant?.controls?.name?.invalid)\" size=\"12\">\n             <p class=\"primary-color error remove-margin\">Tenant name is required</p>\n             </ion-col>\n           </ion-col>\n\n           <ion-col size=\"12\"  fxLayout=\"column wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\".6rem\" >\n                         <ion-label >\n              Property\n            </ion-label>\n            <ion-item lines=\"none\" class=\"input full-width\">\n              <ion-input [(ngModel)]=\"tenant.property\" name=\"property\" required placeholder=\"Please enter property name\"></ion-input>\n             </ion-item>\n           <ion-col *ngIf=\"(submitted && tenant?.controls?.property?.invalid) || (tenant?.controls?.property?.touched && tenant?.controls?.property?.invalid)\" size=\"12\">\n             <p class=\"primary-color error remove-margin\">Property name is required</p>\n             </ion-col>\n           </ion-col>\n\n           <ion-col size=\"12\"  fxLayout=\"column wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\".6rem\" >\n                         <ion-label >\n              Room number\n            </ion-label>\n            <ion-item lines=\"none\" class=\"input full-width\">\n              <ion-input [(ngModel)]=\"tenant.room\" name=\"room\" required placeholder=\"Please enter room number\"></ion-input>\n             </ion-item>\n           <ion-col *ngIf=\"(submitted && tenant?.controls?.room?.invalid) || (tenant?.controls?.room?.touched && tenant?.controls?.room?.invalid)\" size=\"12\">\n             <p class=\"primary-color error remove-margin\">Room number is required</p>\n             </ion-col>\n           </ion-col>\n\n           <ion-col size=\"12\"  fxLayout=\"column wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\".6rem\" >\n                         <ion-label >\n              Phone\n            </ion-label>\n            <ion-item lines=\"none\" class=\"input full-width\">\n              <ion-input [(ngModel)]=\"tenant.phone\" name=\"phone\" required placeholder=\"Please enter phone number\"></ion-input>\n             </ion-item>\n           <ion-col *ngIf=\"(submitted && tenant?.controls?.phone?.invalid) || (tenant?.controls?.phone?.touched && tenant?.controls?.phone?.invalid)\" size=\"12\">\n             <p class=\"primary-color error remove-margin\">Phone number is required</p>\n             </ion-col>\n           </ion-col>\n\n           <ion-col size=\"12\"  fxLayout=\"column wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\".6rem\" >\n                         <ion-label >\n              Occupants\n            </ion-label>\n            <ion-item lines=\"none\" class=\"input full-width\">\n              <ion-input [(ngModel)]=\"tenant.occupants\" name=\"occupants\" required placeholder=\"Number of occupants\"></ion-input>\n             </ion-item>\n           <ion-col *ngIf=\"(submitted && tenant?.controls?.occupants?.invalid) || (tenant?.controls?.occupants?.touched && tenant?.controls?.occupants?.invalid)\" size=\"12\">\n             <p class=\"primary-color error remove-margin\">Occupants is required</p>\n             </ion-col>\n             <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"1rem\" class=\"ion-padding-bottom remove-margin full-width\">\n              <p style=\"padding-left: 5px;\" class=\"remove-margin-top-left-bottom white-color remove-margin\">\n                <span *ngIf=\"opt.checked === true\">Toggle if tenant has no car</span>\n                <span *ngIf=\"opt.checked === false\">Toggle if tenant has a car</span></p> <ion-toggle name=\"hasCar\" [(ngModel)]=\"tenant.hasCar\" #opt [checked]=\"toggleChecked\"></ion-toggle>\n            </div>\n            <ion-button (click)=\"updateTenant(updateForm)\" class=\"all-buttons full-width\" expand=\"block\" color=\"primary\" >Update</ion-button>\n           </ion-col>\n      </form>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_view-tenant_view-tenant_page_ts.js.map