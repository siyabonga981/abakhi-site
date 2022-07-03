(self["webpackChunkabakhi_bengcebo"] = self["webpackChunkabakhi_bengcebo"] || []).push([["src_app_pages_add-property_add-property_module_ts"],{

/***/ 1210:
/*!*******************************************************************!*\
  !*** ./src/app/pages/add-property/add-property-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPropertyPageRoutingModule": () => (/* binding */ AddPropertyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _add_property_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-property.page */ 4188);




const routes = [
    {
        path: '',
        component: _add_property_page__WEBPACK_IMPORTED_MODULE_0__.AddPropertyPage
    }
];
let AddPropertyPageRoutingModule = class AddPropertyPageRoutingModule {
};
AddPropertyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddPropertyPageRoutingModule);



/***/ }),

/***/ 8886:
/*!***********************************************************!*\
  !*** ./src/app/pages/add-property/add-property.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPropertyPageModule": () => (/* binding */ AddPropertyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _add_property_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-property-routing.module */ 1210);
/* harmony import */ var _add_property_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-property.page */ 4188);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 793);
/* harmony import */ var _header_header_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.page */ 6194);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 3935);











let AddPropertyPageModule = class AddPropertyPageModule {
};
AddPropertyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _add_property_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddPropertyPageRoutingModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule
        ],
        declarations: [_add_property_page__WEBPACK_IMPORTED_MODULE_1__.AddPropertyPage, _header_header_page__WEBPACK_IMPORTED_MODULE_2__.HeaderPage]
    })
], AddPropertyPageModule);



/***/ }),

/***/ 4188:
/*!*********************************************************!*\
  !*** ./src/app/pages/add-property/add-property.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPropertyPage": () => (/* binding */ AddPropertyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_add_property_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-property.page.html */ 9096);
/* harmony import */ var _add_property_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-property.page.scss */ 2995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 7673);
/* harmony import */ var _ionic_pwa_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/pwa-elements */ 6399);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);



/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable max-len */









let AddPropertyPage = class AddPropertyPage {
    constructor(api, common, modalController, loadingController, router, toastController, domSanatizer) {
        this.api = api;
        this.common = common;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.router = router;
        this.toastController = toastController;
        this.domSanatizer = domSanatizer;
        this.facilities = [
            {
                name: 'Mandela Property',
                direction: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.7331615130192!2d28.24499541426318!3d-26.237858471712887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95177e9643e49f%3A0x99ab6c7bb5796fc2!2sRondebult%20Rd%2C%20Boksburg!5e0!3m2!1szu!2sza!4v1638936912799!5m2!1szu!2sza',
                facilities: [
                    {
                        facility: 'Electric Fence',
                        icon: 'flash',
                        show: false,
                    },
                    {
                        facility: 'Swimming Pool',
                        icon: 'water',
                        show: false,
                    },
                    {
                        facility: 'Security Cameras',
                        icon: 'videocam',
                        show: false,
                    },
                    {
                        facility: 'Electricity Inclusive',
                        icon: 'flashlight',
                        show: true,
                    },
                    {
                        facility: 'Water',
                        icon: 'beaker',
                        show: true,
                    },
                    {
                        facility: 'High Wall',
                        icon: 'business',
                        show: true,
                    },
                    {
                        facility: 'Shared Bathrooms',
                        icon: 'woman',
                        show: true,
                    },
                    {
                        facility: 'Own Bathroom',
                        icon: 'woman',
                        show: false,
                    },
                    {
                        facility: 'Shared Kitchen',
                        icon: 'fast-food',
                        show: true,
                    },
                    {
                        facility: 'Own Kitchen',
                        icon: 'fast-food',
                        show: true,
                    },
                    {
                        facility: 'Child Friendly Environment',
                        icon: 'happy',
                        show: true,
                    },
                    {
                        facility: 'Washing Line',
                        icon: 'options',
                        show: true,
                    },
                    {
                        facility: 'Laundry Facilities',
                        icon: 'shirt',
                        show: false,
                    },
                    {
                        facility: 'Unlimited Wi-Fi',
                        icon: 'wifi',
                        show: false,
                    },
                    {
                        facility: 'Parking',
                        icon: 'car-sport',
                        show: true,
                    },
                    {
                        facility: 'Ground Floor',
                        icon: 'home',
                        show: true,
                    },
                ],
            },
            {
                name: 'Phola Park Property',
                direction: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.7331615130192!2d28.24499541426318!3d-26.237858471712887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95177e9643e49f%3A0x99ab6c7bb5796fc2!2sRondebult%20Rd%2C%20Boksburg!5e0!3m2!1szu!2sza!4v1638936912799!5m2!1szu!2sza',
                facilities: [
                    {
                        facility: 'Electric Fence',
                        icon: 'flash',
                        show: false,
                    },
                    {
                        facility: 'Swimming Pool',
                        icon: 'water',
                        show: false,
                    },
                    {
                        facility: 'Security Cameras',
                        icon: 'videocam',
                        show: false,
                    },
                    {
                        facility: 'Electricity Inclusive',
                        icon: 'flashlight',
                        show: true,
                    },
                    {
                        facility: 'Water',
                        icon: 'beaker',
                        show: true,
                    },
                    {
                        facility: 'High Wall',
                        icon: 'business',
                        show: true,
                    },
                    {
                        facility: 'Shared Bathrooms',
                        icon: 'woman',
                        show: true,
                    },
                    {
                        facility: 'Own Bathroom',
                        icon: 'woman',
                        show: false,
                    },
                    {
                        facility: 'Shared Kitchen',
                        icon: 'fast-food',
                        show: true,
                    },
                    {
                        facility: 'Own Kitchen',
                        icon: 'fast-food',
                        show: true,
                    },
                    {
                        facility: 'Child Friendly Environment',
                        icon: 'happy',
                        show: true,
                    },
                    {
                        facility: 'Washing Line',
                        icon: 'options',
                        show: true,
                    },
                    {
                        facility: 'Laundry Facilities',
                        icon: 'shirt',
                        show: false,
                    },
                    {
                        facility: 'Unlimited Wi-Fi',
                        icon: 'wifi',
                        show: false,
                    },
                    {
                        facility: 'Parking',
                        icon: 'car-sport',
                        show: true,
                    },
                    {
                        facility: 'Ground Floor',
                        icon: 'home',
                        show: true,
                    },
                ],
            },
            {
                name: 'Rondebult Property',
                direction: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.7331615130192!2d28.24499541426318!3d-26.237858471712887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95177e9643e49f%3A0x99ab6c7bb5796fc2!2sRondebult%20Rd%2C%20Boksburg!5e0!3m2!1szu!2sza!4v1638936912799!5m2!1szu!2sza',
                facilities: [
                    {
                        facility: 'Electric Fence',
                        icon: 'flash',
                        show: false,
                    },
                    {
                        facility: 'Swimming Pool',
                        icon: 'water',
                        show: false,
                    },
                    {
                        facility: 'Security Cameras',
                        icon: 'videocam',
                        show: false,
                    },
                    {
                        facility: 'Electricity Inclusive',
                        icon: 'flashlight',
                        show: true,
                    },
                    {
                        facility: 'Water',
                        icon: 'beaker',
                        show: true,
                    },
                    {
                        facility: 'High Wall',
                        icon: 'business',
                        show: true,
                    },
                    {
                        facility: 'Shared Bathrooms',
                        icon: 'woman',
                        show: true,
                    },
                    {
                        facility: 'Own Bathroom',
                        icon: 'woman',
                        show: false,
                    },
                    {
                        facility: 'Shared Kitchen',
                        icon: 'fast-food',
                        show: true,
                    },
                    {
                        facility: 'Own Kitchen',
                        icon: 'fast-food',
                        show: true,
                    },
                    {
                        facility: 'Child Friendly Environment',
                        icon: 'happy',
                        show: true,
                    },
                    {
                        facility: 'Washing Line',
                        icon: 'options',
                        show: true,
                    },
                    {
                        facility: 'Laundry Facilities',
                        icon: 'shirt',
                        show: false,
                    },
                    {
                        facility: 'Unlimited Wi-Fi',
                        icon: 'wifi',
                        show: false,
                    },
                    {
                        facility: 'Parking',
                        icon: 'car-sport',
                        show: true,
                    },
                    {
                        facility: 'Ground Floor',
                        icon: 'home',
                        show: true,
                    },
                ],
            },
            {
                name: 'Lombardy West Property',
                direction: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.7331615130192!2d28.24499541426318!3d-26.237858471712887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95177e9643e49f%3A0x99ab6c7bb5796fc2!2sRondebult%20Rd%2C%20Boksburg!5e0!3m2!1szu!2sza!4v1638936912799!5m2!1szu!2sza',
                facilities: [
                    {
                        facility: 'Electric Fence',
                        icon: 'flash',
                        show: true,
                    },
                    {
                        facility: 'Swimming Pool',
                        icon: 'water',
                        show: true,
                    },
                    {
                        facility: 'Security Cameras',
                        icon: 'videocam',
                        show: true,
                    },
                    {
                        facility: 'Prepaid Electricity',
                        icon: 'flashlight',
                        show: true,
                    },
                    {
                        facility: 'Water',
                        icon: 'beaker',
                        show: true,
                    },
                    {
                        facility: 'High Wall',
                        icon: 'business',
                        show: true,
                    },
                    {
                        facility: 'Shared Bathrooms',
                        icon: 'woman',
                        show: true,
                    },
                    {
                        facility: 'Own Bathroom',
                        icon: 'woman',
                        show: false,
                    },
                    {
                        facility: 'Shared Kitchen',
                        icon: 'fast-food',
                        show: true,
                    },
                    {
                        facility: 'Own Kitchen',
                        icon: 'fast-food',
                        show: true,
                    },
                    {
                        facility: 'Child Friendly Environment',
                        icon: 'happy',
                        show: true,
                    },
                    {
                        facility: 'Washing Line',
                        icon: 'options',
                        show: true,
                    },
                    {
                        facility: 'Laundry Facilities',
                        icon: 'shirt',
                        show: true,
                    },
                    {
                        facility: 'Unlimited Wi-Fi',
                        icon: 'wifi',
                        show: true,
                    },
                    {
                        facility: 'Parking',
                        icon: 'car-sport',
                        show: true,
                    },
                    {
                        facility: 'Ground & 1st Floor',
                        icon: 'home',
                        show: true,
                    },
                ],
            },
            {
                name: 'Lyndhurst Property',
                direction: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.7331615130192!2d28.24499541426318!3d-26.237858471712887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95177e9643e49f%3A0x99ab6c7bb5796fc2!2sRondebult%20Rd%2C%20Boksburg!5e0!3m2!1szu!2sza!4v1638936912799!5m2!1szu!2sza',
                facilities: [
                    {
                        facility: 'Electric Fence',
                        icon: 'flash',
                        show: true,
                    },
                    {
                        facility: 'Swimming Pool',
                        icon: 'water',
                        show: true,
                    },
                    {
                        facility: 'Security Cameras',
                        icon: 'videocam',
                        show: true,
                    },
                    {
                        facility: 'Prepaid Electricity',
                        icon: 'flashlight',
                        show: true,
                    },
                    {
                        facility: 'Water',
                        icon: 'beaker',
                        show: true,
                    },
                    {
                        facility: 'High Wall',
                        icon: 'business',
                        show: true,
                    },
                    {
                        facility: 'Shared Bathrooms',
                        icon: 'woman',
                        show: true,
                    },
                    {
                        facility: 'Own Bathroom',
                        icon: 'woman',
                        show: false,
                    },
                    {
                        facility: 'Shared Kitchen',
                        icon: 'fast-food',
                        show: true,
                    },
                    {
                        facility: 'Own Kitchen',
                        icon: 'fast-food',
                        show: true,
                    },
                    {
                        facility: 'Child Friendly Environment',
                        icon: 'happy',
                        show: true,
                    },
                    {
                        facility: 'Washing Line',
                        icon: 'options',
                        show: true,
                    },
                    {
                        facility: 'Laundry Facilities',
                        icon: 'shirt',
                        show: true,
                    },
                    {
                        facility: 'Unlimited Wi-Fi',
                        icon: 'wifi',
                        show: true,
                    },
                    {
                        facility: 'Parking',
                        icon: 'car-sport',
                        show: true,
                    },
                    {
                        facility: 'Ground Floor',
                        icon: 'home',
                        show: true,
                    },
                ],
            },
            {
                name: 'Protea Glen Property',
                direction: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.7331615130192!2d28.24499541426318!3d-26.237858471712887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95177e9643e49f%3A0x99ab6c7bb5796fc2!2sRondebult%20Rd%2C%20Boksburg!5e0!3m2!1szu!2sza!4v1638936912799!5m2!1szu!2sza',
                facilities: [
                    {
                        facility: 'Electric Fence',
                        icon: 'flash',
                        show: false,
                    },
                    {
                        facility: 'Swimming Pool',
                        icon: 'water',
                        show: false,
                    },
                    {
                        facility: 'Security Cameras',
                        icon: 'videocam',
                        show: false,
                    },
                    {
                        facility: 'Electricity Inclusive',
                        icon: 'flashlight',
                        show: true,
                    },
                    {
                        facility: 'Water',
                        icon: 'beaker',
                        show: true,
                    },
                    {
                        facility: 'High Wall',
                        icon: 'business',
                        show: true,
                    },
                    {
                        facility: 'Shared Bathrooms',
                        icon: 'woman',
                        show: true,
                    },
                    {
                        facility: 'Own Bathroom',
                        icon: 'woman',
                        show: false,
                    },
                    {
                        facility: 'Shared Kitchen',
                        icon: 'fast-food',
                        show: true,
                    },
                    {
                        facility: 'Own Kitchen',
                        icon: 'fast-food',
                        show: true,
                    },
                    {
                        facility: 'Child Friendly Environment',
                        icon: 'happy',
                        show: true,
                    },
                    {
                        facility: 'Washing Line',
                        icon: 'options',
                        show: true,
                    },
                    {
                        facility: 'Laundry Facilities',
                        icon: 'shirt',
                        show: false,
                    },
                    {
                        facility: 'Unlimited Wi-Fi',
                        icon: 'wifi',
                        show: false,
                    },
                    {
                        facility: 'Parking',
                        icon: 'car-sport',
                        show: true,
                    },
                    {
                        facility: 'Ground Floor',
                        icon: 'home',
                        show: true,
                    },
                ],
            },
            {
                name: 'Holomisa Property',
                direction: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.7331615130192!2d28.24499541426318!3d-26.237858471712887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95177e9643e49f%3A0x99ab6c7bb5796fc2!2sRondebult%20Rd%2C%20Boksburg!5e0!3m2!1szu!2sza!4v1638936912799!5m2!1szu!2sza',
                facilities: [
                    {
                        facility: 'Electric Fence',
                        icon: 'flash',
                        show: false,
                    },
                    {
                        facility: 'Swimming Pool',
                        icon: 'water',
                        show: false,
                    },
                    {
                        facility: 'Security Cameras',
                        icon: 'videocam',
                        show: false,
                    },
                    {
                        facility: 'Electricity Inclusive',
                        icon: 'flashlight',
                        show: true,
                    },
                    {
                        facility: 'Water',
                        icon: 'beaker',
                        show: true,
                    },
                    {
                        facility: 'High Wall',
                        icon: 'business',
                        show: true,
                    },
                    {
                        facility: 'Shared Bathrooms',
                        icon: 'woman',
                        show: true,
                    },
                    {
                        facility: 'Own Bathroom',
                        icon: 'woman',
                        show: false,
                    },
                    {
                        facility: 'Shared Kitchen',
                        icon: 'fast-food',
                        show: true,
                    },
                    {
                        facility: 'Own Kitchen',
                        icon: 'fast-food',
                        show: true,
                    },
                    {
                        facility: 'Child Friendly Environment',
                        icon: 'happy',
                        show: true,
                    },
                    {
                        facility: 'Washing Line',
                        icon: 'options',
                        show: true,
                    },
                    {
                        facility: 'Laundry Facilities',
                        icon: 'shirt',
                        show: false,
                    },
                    {
                        facility: 'Unlimited Wi-Fi',
                        icon: 'wifi',
                        show: false,
                    },
                    {
                        facility: 'Parking',
                        icon: 'car-sport',
                        show: true,
                    },
                    {
                        facility: 'Ground Floor',
                        icon: 'home',
                        show: true,
                    },
                ],
            },
        ];
        this.property = {
            photos: [],
            room: null,
            rent: null,
            facilities: {
                name: '',
                facilities: [],
            },
            location: {
                name: null,
                direction: null,
            },
            available: true,
        };
        this.photos = [];
        this.submitted = false;
        this.count = 0;
        this.inputValue = 0;
        this.menuItems = [
            {
                icon: 'home',
                name: 'Home',
                routerLink: './home',
            },
        ];
        this.takePhoto = () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Camera,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.DataUrl,
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
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    addNewProperty(form) {
        this.submitted = true;
        if (form.invalid) {
            this.presentToast('Please fill in all fields!', 'failed');
            return false;
        }
        if (!this.photos.length) {
            this.presentToast('Please add at least 1 photo!', 'failed');
            return false;
        }
        if (!this.selectedPropertyObj) {
            this.presentToast('Please select location!', 'failed');
            return false;
        }
        else {
            form.value.photos = this.photos;
            form.value.facilities = this.selectedPropertyObj;
            form.value.location = {
                name: this.selectedPropertyObj.name,
                direction: this.selectedPropertyObj.direction,
            };
            this.presentLoading();
            this.api
                .addProperty('property/addProperty', form.value)
                .subscribe((res) => {
                if (!(res === null || res === void 0 ? void 0 : res.err)) {
                    this.loader.dismiss();
                    this.presentToast('Property Added Successfully', 'success');
                    setTimeout(() => {
                        this.router.navigate(['./properties']);
                    }, 2200);
                }
                else {
                    this.loader.dismiss();
                    this.presentToast(res === null || res === void 0 ? void 0 : res.err, 'failed');
                }
            });
        }
    }
    selectedProperty(selectedProperty) {
        this.selectedPropertyObj = selectedProperty.detail.value;
    }
};
AddPropertyPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer }
];
AddPropertyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-add-property',
        template: _raw_loader_add_property_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_property_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddPropertyPage);



/***/ }),

/***/ 2995:
/*!***********************************************************!*\
  !*** ./src/app/pages/add-property/add-property.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcHJvcGVydHkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 9096:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-property/add-property.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-between ion-align-items-center\">\n        <ion-col size=\"11\">\n          <ion-row class=\"ion-align-items-center pointer\" size=\"12\">\n            <ion-col size=\"1\">\n            </ion-col>\n            <ion-col size=\"11\">\n              <ion-row\n                class=\"ion-justify-content-center ion-align-items-center\"\n                size=\"12\"\n              >\n                <ion-col >\n                  <ion-title class=\"ion-title\">\n                    Add Property\n                  </ion-title>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-padding-end\">\n          <ion-row class=\"ion-justify-content-end ion-align-items-center\">\n            <ion-col size=\"2\" class=\"ion-margin-end\">\n              <mat-icon [matMenuTriggerFor]=\"menu\">more_vert</mat-icon>\n\n            </ion-col>\n            <mat-menu class=\"menu-wrapper\" #menu=\"matMenu\">\n                <button (click)=\"checkRoute(item)\" *ngFor=\"let item of menuItems\" mat-menu-item>\n                  <mat-icon>{{ item.icon }}</mat-icon>\n                  <span>{{ item.name }}</span>\n                </button>\n            </mat-menu>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"full-width margin-top-4-rem\" size=\"12\">\n    <ion-row size=\"12\" class=\"ion-justify-content-center ion-align-items-center full-width ion-padding-start ion-padding-end\">\n      <h1 class=\"remove-margin\" align=\"center\"><b><span class=\"primary-color main-heading\">Add New Property</span> </b></h1>\n    </ion-row>\n  </ion-row>\n  <ion-card class=\"queries-card black-background ion-margin-bottom\">\n    <ion-row class=\"ion-justify-content-center ion-align-items-center ion-padding-end ion-padding-start\">\n          <ion-col size=\"12\">\n      <form #newPropertyForm=\"ngForm\">\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\" class=\"input\">\n              <ion-input type=\"number\" [(ngModel)]=\"property.rent\" name=\"rent\" required placeholder=\"Enter rent amount\"></ion-input>\n             </ion-item>\n           <ion-col *ngIf=\"(submitted && property?.controls?.rent?.invalid) || (property?.controls?.rent?.touched && property?.controls?.rent?.invalid)\" size=\"12\">\n             <p class=\"primary-color error remove-margin\">Rent is required</p>\n             </ion-col>\n           </ion-col>\n\n           <ion-col size=\"12\" class=\"ion-margin-top\">\n            <ion-item lines=\"none\" class=\"input\">\n              <ion-input type=\"number\" [(ngModel)]=\"property.room\" name=\"room\" required placeholder=\"Enter room number\"></ion-input>\n             </ion-item>\n           <ion-col *ngIf=\"(submitted && property?.controls?.room?.invalid) || (property?.controls?.room?.touched && property?.controls?.room?.invalid)\" size=\"12\">\n             <p class=\"primary-color error remove-margin\">Room number is required</p>\n             </ion-col>\n           </ion-col>\n           <ion-row>\n            <ion-col fxLayout=\"column\" fxLayoutAlign=\"start stretch\" fxLayoutGap=\".5rem\">\n              <ion-list class=\"input\">\n                <ion-item>\n                  <ion-label><b class=\"primary-color\">Location</b> </ion-label>\n                  <ion-select (ionChange)=\"selectedProperty($event)\" placeholder=\"Select One\"  okText=\"Confirm\" cancelText=\"Cancel\">\n                    <ion-select-option *ngFor=\"let propertyObj of facilities\" [value]=\"propertyObj\">{{ propertyObj.name }}</ion-select-option>\n                  </ion-select>\n                </ion-item>\n\n              </ion-list>\n            </ion-col>\n          </ion-row>\n           <ion-col size=\"12\" class=\"ion-margin-top\">\n            <ion-row size=\"6\" (click)=\"takePhoto()\" class=\"ion-justify-content-center\">\n              <ion-button class=\"all-buttons\" color=\"primary\" >\n                <ion-icon name=\"camera-outline\"></ion-icon> Take Photo\n              </ion-button>\n\n          </ion-row>\n\n        <ion-row *ngIf=\"photos.length > 0;\" class=\"ion-justify-content-center ion-margin-top\">\n          <ion-slides pager=\"true\" [options]=\"slideOpts\">\n            <ion-slide *ngFor=\"let photo of photos; let i = index\">\n              <img class=\"query-img\" [src]=\"photo.image\" alt=\"Image\">\n            </ion-slide>\n          </ion-slides>\n      </ion-row>\n      <div style=\"margin: 1rem 0 -1rem 0 !important;\" *ngIf=\"role === 'a'\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"1rem\" class=\"ion-padding-bottom remove-margin full-width\">\n        <p style=\"padding-left: 5px;\" class=\"remove-margin-top-left-bottom white-color remove-margin\">\n          <span>Toggle on if available</span></p> <ion-toggle (ngModelChange)=\"updateRoomAvailability($event)\" name=\"available\" [(ngModel)]=\"property.available\"></ion-toggle>\n      </div>\n        <ion-col size=\"12\">\n          <ion-button (click)=\"addNewProperty(newPropertyForm)\" class=\"all-buttons\" expand=\"block\" color=\"primary\" >Add Property</ion-button>\n        </ion-col>\n        </ion-col>\n      </form>\n      </ion-col>\n    </ion-row>\n    </ion-card>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_add-property_add-property_module_ts.js.map