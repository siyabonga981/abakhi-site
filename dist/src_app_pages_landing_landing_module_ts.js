(self["webpackChunkabakhi_bengcebo"] = self["webpackChunkabakhi_bengcebo"] || []).push([["src_app_pages_landing_landing_module_ts"],{

/***/ 1095:
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatAnchor": () => (/* binding */ MatAnchor),
/* harmony export */   "MatButton": () => (/* binding */ MatButton),
/* harmony export */   "MatButtonModule": () => (/* binding */ MatButtonModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 9238);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Default color palette for round buttons (mat-fab and mat-mini-fab) */




const _c0 = ["mat-button", ""];
const _c1 = ["*"];
const _c2 = ".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n";
const DEFAULT_ROUND_BUTTON_COLOR = 'accent';
/**
 * List of classes to add to MatButton instances based on host attributes to
 * style as different variants.
 */
const BUTTON_HOST_ATTRIBUTES = [
    'mat-button',
    'mat-flat-button',
    'mat-icon-button',
    'mat-raised-button',
    'mat-stroked-button',
    'mat-mini-fab',
    'mat-fab',
];
// Boilerplate for applying mixins to MatButton.
const _MatButtonBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinColor)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinDisabled)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinDisableRipple)(class {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
})));
/**
 * Material design button.
 */
class MatButton extends _MatButtonBase {
    constructor(elementRef, _focusMonitor, _animationMode) {
        super(elementRef);
        this._focusMonitor = _focusMonitor;
        this._animationMode = _animationMode;
        /** Whether the button is round. */
        this.isRoundButton = this._hasHostAttributes('mat-fab', 'mat-mini-fab');
        /** Whether the button is icon button. */
        this.isIconButton = this._hasHostAttributes('mat-icon-button');
        // For each of the variant selectors that is present in the button's host
        // attributes, add the correct corresponding class.
        for (const attr of BUTTON_HOST_ATTRIBUTES) {
            if (this._hasHostAttributes(attr)) {
                this._getHostElement().classList.add(attr);
            }
        }
        // Add a class that applies to all buttons. This makes it easier to target if somebody
        // wants to target all Material buttons. We do it here rather than `host` to ensure that
        // the class is applied to derived classes.
        elementRef.nativeElement.classList.add('mat-button-base');
        if (this.isRoundButton) {
            this.color = DEFAULT_ROUND_BUTTON_COLOR;
        }
    }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, true);
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /** Focuses the button. */
    focus(origin, options) {
        if (origin) {
            this._focusMonitor.focusVia(this._getHostElement(), origin, options);
        }
        else {
            this._getHostElement().focus(options);
        }
    }
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    _isRippleDisabled() {
        return this.disableRipple || this.disabled;
    }
    /** Gets whether the button has one of the given attributes. */
    _hasHostAttributes(...attributes) {
        return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
    }
}
MatButton.ɵfac = function MatButton_Factory(t) { return new (t || MatButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE, 8)); };
MatButton.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatButton, selectors: [["button", "mat-button", ""], ["button", "mat-raised-button", ""], ["button", "mat-icon-button", ""], ["button", "mat-fab", ""], ["button", "mat-mini-fab", ""], ["button", "mat-stroked-button", ""], ["button", "mat-flat-button", ""]], viewQuery: function MatButton_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
    } }, hostAttrs: [1, "mat-focus-indicator"], hostVars: 5, hostBindings: function MatButton_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.disabled || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-button-disabled", ctx.disabled);
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", color: "color" }, exportAs: ["matButton"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], attrs: _c0, ngContentSelectors: _c1, decls: 4, vars: 5, consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]], template: function MatButton_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple], styles: [_c2], encapsulation: 2, changeDetection: 0 });
MatButton.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE,] }] }
];
MatButton.propDecorators = {
    ripple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild, args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: `button[mat-button], button[mat-raised-button], button[mat-icon-button],
             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],
             button[mat-flat-button]`,
                exportAs: 'matButton',
                host: {
                    '[attr.disabled]': 'disabled || null',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                    // Add a class for disabled button styling instead of the using attribute
                    // selector or pseudo-selector.  This allows users to create focusabled
                    // disabled buttons without recreating the styles.
                    '[class.mat-button-disabled]': 'disabled',
                    'class': 'mat-focus-indicator'
                },
                template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<span matRipple class=\"mat-button-ripple\"\n      [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n      [matRippleDisabled]=\"_isRippleDisabled()\"\n      [matRippleCentered]=\"isIconButton\"\n      [matRippleTrigger]=\"_getHostElement()\"></span>\n<span class=\"mat-button-focus-overlay\"></span>\n",
                inputs: ['disabled', 'disableRipple', 'color'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
                styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE]
            }] }]; }, { ripple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple]
        }] }); })();
/**
 * Material design anchor button.
 */
class MatAnchor extends MatButton {
    constructor(focusMonitor, elementRef, animationMode) {
        super(elementRef, focusMonitor, animationMode);
    }
    _haltDisabledEvents(event) {
        // A disabled button shouldn't apply any actions
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
}
MatAnchor.ɵfac = function MatAnchor_Factory(t) { return new (t || MatAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE, 8)); };
MatAnchor.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatAnchor, selectors: [["a", "mat-button", ""], ["a", "mat-raised-button", ""], ["a", "mat-icon-button", ""], ["a", "mat-fab", ""], ["a", "mat-mini-fab", ""], ["a", "mat-stroked-button", ""], ["a", "mat-flat-button", ""]], hostAttrs: [1, "mat-focus-indicator"], hostVars: 7, hostBindings: function MatAnchor_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatAnchor_click_HostBindingHandler($event) { return ctx._haltDisabledEvents($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? -1 : ctx.tabIndex || 0)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-button-disabled", ctx.disabled);
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", color: "color", tabIndex: "tabIndex" }, exportAs: ["matButton", "matAnchor"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], attrs: _c0, ngContentSelectors: _c1, decls: 4, vars: 5, consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]], template: function MatAnchor_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple], styles: [_c2], encapsulation: 2, changeDetection: 0 });
MatAnchor.ctorParameters = () => [
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE,] }] }
];
MatAnchor.propDecorators = {
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatAnchor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: `a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],
             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]`,
                exportAs: 'matButton, matAnchor',
                host: {
                    // Note that we ignore the user-specified tabindex when it's disabled for
                    // consistency with the `mat-button` applied on native buttons where even
                    // though they have an index, they're not tabbable.
                    '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '(click)': '_haltDisabledEvents($event)',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                    '[class.mat-button-disabled]': 'disabled',
                    'class': 'mat-focus-indicator'
                },
                inputs: ['disabled', 'disableRipple', 'color'],
                template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<span matRipple class=\"mat-button-ripple\"\n      [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n      [matRippleDisabled]=\"_isRippleDisabled()\"\n      [matRippleCentered]=\"isIconButton\"\n      [matRippleTrigger]=\"_getHostElement()\"></span>\n<span class=\"mat-button-focus-overlay\"></span>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
                styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n"]
            }]
    }], function () { return [{ type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE]
            }] }]; }, { tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatButtonModule {
}
MatButtonModule.ɵfac = function MatButtonModule_Factory(t) { return new (t || MatButtonModule)(); };
MatButtonModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatButtonModule });
MatButtonModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRippleModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule,
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{
                imports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRippleModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule,
                ],
                exports: [
                    MatButton,
                    MatAnchor,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule,
                ],
                declarations: [
                    MatButton,
                    MatAnchor,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatButtonModule, { declarations: function () { return [MatButton, MatAnchor]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRippleModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]; }, exports: function () { return [MatButton, MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=button.js.map

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

/***/ 2490:
/*!*********************************************************!*\
  !*** ./src/app/pages/landing/landing-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageRoutingModule": () => (/* binding */ LandingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.page */ 4808);




const routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_0__.LandingPage
    }
];
let LandingPageRoutingModule = class LandingPageRoutingModule {
};
LandingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LandingPageRoutingModule);



/***/ }),

/***/ 7241:
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageModule": () => (/* binding */ LandingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-routing.module */ 2490);
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.page */ 4808);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 793);
/* harmony import */ var _header_header_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.page */ 6194);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 1095);












let LandingPageModule = class LandingPageModule {
};
LandingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingPageRoutingModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        ],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_1__.LandingPage, _header_header_page__WEBPACK_IMPORTED_MODULE_2__.HeaderPage],
    })
], LandingPageModule);



/***/ }),

/***/ 4808:
/*!***********************************************!*\
  !*** ./src/app/pages/landing/landing.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPage": () => (/* binding */ LandingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_landing_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./landing.page.html */ 7365);
/* harmony import */ var _landing_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.page.scss */ 9242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5620);






let LandingPage = class LandingPage {
    constructor(common, router) {
        this.common = common;
        this.router = router;
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
LandingPage.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
LandingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-landing',
        template: _raw_loader_landing_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_landing_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LandingPage);



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

/***/ 9242:
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLnBhZ2Uuc2NzcyJ9 */");

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

/***/ 7365:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-between ion-align-items-center\">\n        <ion-col size=\"11\">\n          <ion-row class=\"ion-align-items-center pointer\" size=\"12\">\n            <ion-col size=\"1\">\n            </ion-col>\n            <ion-col size=\"11\">\n              <ion-row\n                class=\"ion-justify-content-center ion-align-items-center\"\n                size=\"12\"\n              >\n                <ion-col >\n                  <ion-title class=\"ion-title\">\n                    Landing\n                  </ion-title>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"1\" class=\"ion-padding-end\">\n          <ion-row class=\"ion-justify-content-end ion-align-items-center\">\n            <ion-col size=\"2\" class=\"ion-margin-end\">\n              <mat-icon [matMenuTriggerFor]=\"menu\">more_vert</mat-icon>\n\n            </ion-col>\n            <mat-menu class=\"menu-wrapper\" #menu=\"matMenu\">\n                <button (click)=\"checkRoute(item)\" *ngFor=\"let item of menuItems\" mat-menu-item>\n                  <mat-icon>{{ item.icon }}</mat-icon>\n                  <span>{{ item.name }}</span>\n                </button>\n            </mat-menu>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fxLayoutGap=\".5rem\" fxLayout=\"column\">\n    <ion-row  fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <ion-col size=\"6\">\n        <img class=\" margin-top-4-rem\" src=\"../../assets/img/logo.png\" alt=\"\">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <h1 class=\"remove-margin\" align=\"center\">What would you like to do today? </h1>\n      </ion-col>\n    </ion-row>\n\n    <ion-card  *ngIf=\"role === 't'\" class=\"home-card grey-background\">\n      <ion-row>\n        <ion-col routerLink=\"../log-query\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\".5rem\">\n          <ion-icon class=\"card-icon white-color\" name=\"hammer-outline\"></ion-icon>\n          <h2 class=\"remove-margin white-color\" align=\"center\">Log a query</h2>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-card  *ngIf=\"role !== 't' && role !== null\" class=\"home-card grey-background\">\n      <ion-row>\n        <ion-col routerLink=\"../queries\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\".5rem\">\n          <ion-icon class=\"card-icon white-color\" name=\"hammer-outline\"></ion-icon>\n          <h2 class=\"remove-margin white-color\" align=\"center\">View Tenant Queries</h2>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-card routerLink=\"../properties\"  class=\"home-card maroon-background\">\n      <ion-row>\n        <ion-col fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\".5rem\">\n          <ion-icon class=\"card-icon white-color\" name=\"eye-outline\"></ion-icon>\n          <h2 class=\"remove-margin white-color\" align=\"center\">View available properties</h2>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-card routerLink=\"../contact\"  *ngIf=\"role === null\" class=\"home-card grey-background\">\n      <ion-row>\n        <ion-col fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\".5rem\">\n          <ion-icon class=\"card-icon white-color\" name=\"chatbox-ellipses-outline\"></ion-icon>\n          <h2 class=\"remove-margin white-color\" align=\"center\">Reach out to us</h2>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_landing_landing_module_ts.js.map