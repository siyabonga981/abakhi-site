(self["webpackChunkabakhi_bengcebo"] = self["webpackChunkabakhi_bengcebo"] || []).push([["src_app_pages_view-tenant_view-tenant_module_ts"],{

/***/ 204:
/*!*****************************************************************!*\
  !*** ./src/app/pages/view-tenant/view-tenant-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewTenantPageRoutingModule": () => (/* binding */ ViewTenantPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _view_tenant_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-tenant.page */ 2255);




const routes = [
    {
        path: '',
        component: _view_tenant_page__WEBPACK_IMPORTED_MODULE_0__.ViewTenantPage
    }
];
let ViewTenantPageRoutingModule = class ViewTenantPageRoutingModule {
};
ViewTenantPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewTenantPageRoutingModule);



/***/ }),

/***/ 9518:
/*!*********************************************************!*\
  !*** ./src/app/pages/view-tenant/view-tenant.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewTenantPageModule": () => (/* binding */ ViewTenantPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _view_tenant_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-tenant-routing.module */ 204);
/* harmony import */ var _view_tenant_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-tenant.page */ 2255);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 793);








let ViewTenantPageModule = class ViewTenantPageModule {
};
ViewTenantPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _view_tenant_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewTenantPageRoutingModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule
        ],
        declarations: [_view_tenant_page__WEBPACK_IMPORTED_MODULE_1__.ViewTenantPage]
    })
], ViewTenantPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_view-tenant_view-tenant_module_ts.js.map