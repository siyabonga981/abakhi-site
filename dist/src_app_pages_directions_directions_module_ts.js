(self["webpackChunkabakhi_bengcebo"] = self["webpackChunkabakhi_bengcebo"] || []).push([["src_app_pages_directions_directions_module_ts"],{

/***/ 3397:
/*!***************************************************************!*\
  !*** ./src/app/pages/directions/directions-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectionsPageRoutingModule": () => (/* binding */ DirectionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _directions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directions.page */ 1942);




const routes = [
    {
        path: '',
        component: _directions_page__WEBPACK_IMPORTED_MODULE_0__.DirectionsPage
    }
];
let DirectionsPageRoutingModule = class DirectionsPageRoutingModule {
};
DirectionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DirectionsPageRoutingModule);



/***/ }),

/***/ 3561:
/*!*******************************************************!*\
  !*** ./src/app/pages/directions/directions.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectionsPageModule": () => (/* binding */ DirectionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _directions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directions-routing.module */ 3397);
/* harmony import */ var _directions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directions.page */ 1942);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 793);








let DirectionsPageModule = class DirectionsPageModule {
};
DirectionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _directions_routing_module__WEBPACK_IMPORTED_MODULE_0__.DirectionsPageRoutingModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule
        ],
        declarations: [_directions_page__WEBPACK_IMPORTED_MODULE_1__.DirectionsPage]
    })
], DirectionsPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_directions_directions_module_ts.js.map