function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/s-abdullakh-companycards/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/s-abdullakh-companycards/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \******************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSAbdullakhCompanycardsDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./my-component_30.entry.js": ["./node_modules/s-abdullakh-companycards/dist/esm/my-component_30.entry.js", "stencil-my-component_30-entry-js"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/s-abdullakh-companycards/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./service-store.service */
    "./src/app/service-store.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_s_abdullakh_pre_header_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "s-abdullakh-pre-header", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function AppComponent_s_abdullakh_pre_header_1_Template_s_abdullakh_pre_header_close_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(companyStore) {
        _classCallCheck(this, AppComponent);

        this.companyStore = companyStore;
        this.popupComplited = true;
      }
      /**
       * Закрытие cookie block
       */


      _createClass(AppComponent, [{
        key: "close",
        value: function close() {
          this.popupComplited = false;
        }
        /*header*/

      }, {
        key: "getheadText",
        value: function getheadText() {
          return this.companyStore.getheadText();
        }
      }, {
        key: "getheadNav",
        value: function getheadNav() {
          return this.companyStore.getheadNav();
        }
        /**
         * клик по элементам clickOnHeader
         */

      }, {
        key: "clickOnHeader",
        value: function clickOnHeader(_ref) {
          var detail = _ref.detail;
          return console.log('clickOnHeader:', detail);
        }
        /*header*/

        /*productPresentation*/

      }, {
        key: "getproductPresentation",
        value: function getproductPresentation() {
          return this.companyStore.getproductPresentation();
        }
        /**
         * клик по элементам ProductPresentation
         */

      }, {
        key: "clickOnProductPresentation",
        value: function clickOnProductPresentation(_ref2) {
          var detail = _ref2.detail;
          return console.log('ProductPresentation:', detail);
        }
        /*productPresentation*/

        /*personalSecurity*/

      }, {
        key: "getppersonalSecurityImg",
        value: function getppersonalSecurityImg() {
          return this.companyStore.getppersonalSecurity().personalSecurityImg;
        }
      }, {
        key: "getppersonalSecurity",
        value: function getppersonalSecurity() {
          return this.companyStore.getppersonalSecurity();
        }
        /**
         * клик по элементам personalSecurity
         */

      }, {
        key: "clickOnPersonalSecurity",
        value: function clickOnPersonalSecurity(_ref3) {
          var detail = _ref3.detail;
          return console.log('personalSecurity:', detail);
        }
        /*personalSecurity*/

        /*expenseManagement*/

      }, {
        key: "getexpenseManagementImg",
        value: function getexpenseManagementImg() {
          return this.companyStore.getexpenseManagement().expenseManagementImg;
        }
      }, {
        key: "getexpenseManagement",
        value: function getexpenseManagement() {
          return this.companyStore.getexpenseManagement();
        }
        /**
         * клик по элементам ExpenseManagement
         */

      }, {
        key: "clickOnExpenseManagement",
        value: function clickOnExpenseManagement(_ref4) {
          var detail = _ref4.detail;
          return console.log('ExpenseManagement:', detail);
        }
        /*expenseManagement*/

        /*clauseMatch*/

      }, {
        key: "getclauseMatch",
        value: function getclauseMatch() {
          return this.companyStore.getclauseMatch();
        }
        /**
         * клик по элементам ClauseMatch
         */

      }, {
        key: "clickOnClauseMatch",
        value: function clickOnClauseMatch(_ref5) {
          var detail = _ref5.detail;
          return console.log('ClauseMatch:', detail);
        }
        /*clauseMatch*/

        /*securityControl*/

      }, {
        key: "getsecurityControlImg",
        value: function getsecurityControlImg() {
          return this.companyStore.getsecurityControl().securityControlImg;
        }
      }, {
        key: "getsecurityControl",
        value: function getsecurityControl() {
          return this.companyStore.getsecurityControl();
        }
        /**
         * клик по элементам SecurityControl
         */

      }, {
        key: "clickOnSecurityControl",
        value: function clickOnSecurityControl(_ref6) {
          var detail = _ref6.detail;
          return console.log('SecurityControl:', detail);
        }
        /*securityControl*/

        /*CardDesign*/

      }, {
        key: "getcardDesign",
        value: function getcardDesign() {
          return this.companyStore.getcardDesign();
        }
        /**
         * клик по элементам CardDesign
         */

      }, {
        key: "clickOnCardDesign",
        value: function clickOnCardDesign(_ref7) {
          var detail = _ref7.detail;
          return console.log('CardDesign:', detail);
        }
        /*CardDesign*/

        /*otherFeatures*/

      }, {
        key: "getotherFeatures",
        value: function getotherFeatures() {
          return this.companyStore.getotherFeatures();
        }
      }, {
        key: "getfeaturesblock",
        value: function getfeaturesblock() {
          return this.companyStore.getotherFeatures().featuresblock;
        }
        /**
         * клик по элементам OtherFeatures
         */

      }, {
        key: "clickOnOtherFeatures",
        value: function clickOnOtherFeatures(_ref8) {
          var detail = _ref8.detail;
          return console.log('OtherFeatures:', detail);
        }
        /*otherFeatures*/

        /*ExploreFeature*/

      }, {
        key: "getExploreFeature",
        value: function getExploreFeature() {
          return this.companyStore.getexploreFeatures();
        }
        /**
         * клик по элементам ExploreFeature
         */

      }, {
        key: "clickOnExploreFeature",
        value: function clickOnExploreFeature(_ref9) {
          var detail = _ref9.detail;
          return console.log('ExploreFeature:', detail);
        }
        /*ExploreFeature*/

        /*linkBlock*/

      }, {
        key: "getlinkBlock",
        value: function getlinkBlock() {
          return this.companyStore.getlinkBlock();
        }
        /**
         * клик по элементам LinkBlock
         */

      }, {
        key: "clickOnLinkBlock",
        value: function clickOnLinkBlock(_ref10) {
          var detail = _ref10.detail;
          return console.log('LinkBlock:', detail);
        }
        /*linkBlock*/

        /*IconsBlock*/

      }, {
        key: "getpreviewBackground",
        value: function getpreviewBackground() {
          return this.companyStore.getpreviewBackground().previewBackgroundBlock;
        }
        /**
         * клик по элементам clickOnIconsBlock
         */

      }, {
        key: "clickOnIconsBlock",
        value: function clickOnIconsBlock(_ref11) {
          var detail = _ref11.detail;
          return console.log('clickOnIconsBlock:', detail);
        }
        /*IconsBlock*/

        /*IconsBlock*/

      }, {
        key: "getfooter",
        value: function getfooter() {
          return this.companyStore.getfooter();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_store_service__WEBPACK_IMPORTED_MODULE_1__["ServiceStoreService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 15,
      vars: 18,
      consts: [[1, "topThreeBlocks"], [3, "close", 4, "ngIf"], [3, "headText", "headNav", "clickOnHeader"], [3, "productPresentation", "clickOnProductPresentation"], [3, "personalSecurityImg", "personalSecurity", "clickOnPersonalSecurity"], [3, "expenseManagementImg", "expenseManagement", "clickOnPersonalSecurity"], [3, "clauseMatch", "clickOnClauseMatch"], [3, "securityControlImg", "securityControl", "clickOnSecurityControl"], [3, "cardDesign", "clickOnCardDesign"], [3, "otherFeatures", "featuresblock", "clickOnOtherFeatures"], [3, "exploreFeatures", "clickOnExploreFeature"], [3, "linkBlock", "clickOnLinkBlock"], [3, "previewBackground", "clickOnIconsBlock"], [3, "footer"], [3, "close"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_s_abdullakh_pre_header_1_Template, 1, 0, "s-abdullakh-pre-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "s-abdullakh-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnHeader", function AppComponent_Template_s_abdullakh_header_clickOnHeader_2_listener($event) {
            return ctx.clickOnHeader($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "s-abdullakh-product-presentation", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnProductPresentation", function AppComponent_Template_s_abdullakh_product_presentation_clickOnProductPresentation_3_listener($event) {
            return ctx.clickOnProductPresentation($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "s-abdullakh-multi-currency-slaider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "s-abdullakh-personal-security", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnPersonalSecurity", function AppComponent_Template_s_abdullakh_personal_security_clickOnPersonalSecurity_5_listener($event) {
            return ctx.clickOnPersonalSecurity($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "s-abdullakh-expense-management", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnPersonalSecurity", function AppComponent_Template_s_abdullakh_expense_management_clickOnPersonalSecurity_6_listener($event) {
            return ctx.clickOnPersonalSecurity($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "s-abdullakh-clause-match", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnClauseMatch", function AppComponent_Template_s_abdullakh_clause_match_clickOnClauseMatch_7_listener($event) {
            return ctx.clickOnClauseMatch($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "s-abdullakh-security-control", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnSecurityControl", function AppComponent_Template_s_abdullakh_security_control_clickOnSecurityControl_8_listener($event) {
            return ctx.clickOnSecurityControl($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "s-abdullakh-card-design", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnCardDesign", function AppComponent_Template_s_abdullakh_card_design_clickOnCardDesign_9_listener($event) {
            return ctx.clickOnCardDesign($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "s-abdullakh-other-features", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnOtherFeatures", function AppComponent_Template_s_abdullakh_other_features_clickOnOtherFeatures_10_listener($event) {
            return ctx.clickOnOtherFeatures($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "s-abdullakh-explore-features", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnExploreFeature", function AppComponent_Template_s_abdullakh_explore_features_clickOnExploreFeature_11_listener($event) {
            return ctx.clickOnExploreFeature($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "s-abdullakh-link-block", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnLinkBlock", function AppComponent_Template_s_abdullakh_link_block_clickOnLinkBlock_12_listener($event) {
            return ctx.clickOnLinkBlock($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "s-abdullakh-icons-block", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnIconsBlock", function AppComponent_Template_s_abdullakh_icons_block_clickOnIconsBlock_13_listener($event) {
            return ctx.clickOnIconsBlock($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "s-abdullakh-footer", 13);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popupComplited);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headText", ctx.getheadText())("headNav", ctx.getheadNav());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productPresentation", ctx.getproductPresentation());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("personalSecurityImg", ctx.getppersonalSecurityImg())("personalSecurity", ctx.getppersonalSecurity());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expenseManagementImg", ctx.getexpenseManagementImg())("expenseManagement", ctx.getexpenseManagement());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clauseMatch", ctx.getclauseMatch());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("securityControlImg", ctx.getsecurityControlImg())("securityControl", ctx.getsecurityControl());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardDesign", ctx.getcardDesign());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("otherFeatures", ctx.getotherFeatures())("featuresblock", ctx.getfeaturesblock());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("exploreFeatures", ctx.getExploreFeature());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linkBlock", ctx.getlinkBlock());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("previewBackground", ctx.getpreviewBackground());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footer", ctx.getfooter());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _service_store_service__WEBPACK_IMPORTED_MODULE_1__["ServiceStoreService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/service-store.service.ts":
  /*!******************************************!*\
    !*** ./src/app/service-store.service.ts ***!
    \******************************************/

  /*! exports provided: ServiceStoreService */

  /***/
  function srcAppServiceStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceStoreService", function () {
      return ServiceStoreService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServiceStoreService = /*#__PURE__*/function () {
      function ServiceStoreService() {
        _classCallCheck(this, ServiceStoreService);

        this.preHeader = false;
        this.headText = [{
          logo: '',
          menuItemOne: 'PERSONAL',
          menuItemTwo: 'BUSINESS',
          menuOpen: '☰',
          menuClose: 'X',
          logIn: 'Log in',
          btnText: 'Start for free'
        }];
        this.headNav = [{
          nameLink: "Pricing",
          complited: false
        }, {
          nameLink: "Product",
          complited: true,
          popup: [{
            popupTitle: "Features",
            popupTitleComplited: true,
            popupLinks: [{
              popupItemName: "Product tour",
              popupIcon: "public",
              popupIconComplited: true
            }, {
              popupItemName: "Account",
              popupIcon: "account_balance_wallet",
              popupIconComplited: true
            }, {
              popupItemName: "Payments",
              popupIcon: "swap_horiz",
              popupIconComplited: true
            }, {
              popupItemName: "Company cards",
              popupIcon: "credit_card",
              popupIconComplited: true
            }, {
              popupItemName: "Roles & Permissions",
              popupIcon: "https",
              popupIconComplited: true
            }, {
              popupItemName: "Mobile app",
              popupIcon: "stay_primary_portrait",
              popupIconComplited: true
            }, {
              popupItemName: "Security",
              popupIcon: "security",
              popupIconComplited: true
            }, {
              popupItemName: "Perks",
              popupIcon: "card_giftcard",
              popupIconComplited: true
            }]
          }, {
            popupTitle: "Solutions",
            popupTitleComplited: true,
            popupLinks: [{
              popupItemName: "For accountants",
              popupIcon: "event_note",
              popupIconComplited: true
            }]
          }]
        }, {
          nameLink: "Resources",
          complited: true,
          popup: [{
            popupTitle: "",
            popupTitleComplited: false,
            popupLinks: [{
              popupItemName: "Blog",
              popupIcon: "",
              popupIconComplited: false
            }, {
              popupItemName: "Community",
              popupIcon: "",
              popupIconComplited: false
            }, {
              popupItemName: "Help centre",
              popupIcon: "",
              popupIconComplited: false
            }, {
              popupItemName: "Webinar",
              popupIcon: "",
              popupIconComplited: false
            }]
          }]
        }, {
          nameLink: "Company",
          complited: true,
          popup: [{
            popupTitle: "",
            popupTitleComplited: false,
            popupLinks: [{
              popupItemName: "About",
              popupIcon: "",
              popupIconComplited: false
            }, {
              popupItemName: "Careers",
              popupIcon: "",
              popupIconComplited: false
            }, {
              popupItemName: "Affiates",
              popupIcon: "",
              popupIconComplited: false
            }, {
              popupItemName: "Contact cards",
              popupIcon: "",
              popupIconComplited: false
            }]
          }]
        }];
        this.productPresentation = {
          videoScr: 'https://assets.revolut.com/media/business/corporate-cards/hero_slider.mp4',
          productPresentationContent: [{
            title: 'Radically better company cards',
            subtitle: 'No-fuss company cards for team members, instant virtual cards for security and flexibility — all set up with our easy expense management',
            btnText: 'Start for free'
          }]
        };
        this.multiCurrencySlaider = '';
        this.personalSecurity = {
          personalSecurityImg: 'https://assets.revolut.com/media/business/corporate-cards/features/feature-cards.png',
          title: 'Stay in control over your cards and transactions',
          list: {
            text: [{
              text: 'Order physical cards for your team and create multiple virtual cards instantly'
            }, {
              text: 'Link several  multi-currency accounts to one card or connect multiple cards to a single account'
            }, {
              text: 'Set monthly limits and get statements with transactions for each card separately'
            }, {
              text: 'Easily track transactions and control cards activity by employees, including automated notifications'
            }]
          }
        };
        this.expenseManagement = {
          expenseManagementImg: 'https://assets.revolut.com/media/business/corporate-cards/features/feature-cards.png',
          title: 'Eliminate stress from accounting with expense management',
          list: {
            text: [{
              text: 'Card holders can upload receipts and choose categories in the mobile app, as well as receive automatic reminders about missing information'
            }, {
              text: 'Accountants and administrators can instantly review expenses in a live feed and reject or approve them'
            }, {
              text: 'Organise expenses with categories and tax rates. Import details from Xero or define them manually'
            }, {
              text: 'Export your expenses as a .csv file to be used on your accounting platform of choice'
            }]
          }
        };
        this.securityControl = {
          securityControlImg: 'https://assets.revolut.com/media/business/corporate-cards/features/feature-security.svg',
          title: 'Control the security of your company cards',
          list: {
            text: [{
              text: 'Temporarily freeze missing cards in your app or web dashboard'
            }, {
              text: 'Enable location-based security to reduce fraudulent transactions'
            }, {
              text: 'Disable contactless, online or swipe payments when necessary to ensure your card’s safety'
            }, {
              text: 'Toggle the ability to make cash withdrawals from ATMs for extra security'
            }]
          }
        };
        this.cardDesign = {
          cardDesignImgWhite: 'https://assets.revolut.com/media/business/businesscard_white.jpg',
          cardDesignImgBlack: 'https://assets.revolut.com/media/business/businesscard_black.jpg',
          title: 'Exclusive business card designs',
          subtitle: 'Choose from our exclusive business card designs.'
        };
        this.clauseMatch = {
          clauseMatchImg: 'https://assets.revolut.com/media/business/corporate-cards/testimonial.png',
          blockName: 'clausematch',
          title: 'At ClauseMatch we’ve had a positive experience using Revolut Business.',
          blockContent: 'The possibility to track and manage employee expenses on a single dashboard makes it a very convenient tool for business use.',
          author: 'Andrey Dokuchaev',
          company: 'COO & Co-Founder'
        };
        this.otherFeatures = {
          title: 'Other features coming soon',
          featuresblock: [{
            title: 'Disposable virtual cards',
            text: 'Make one-off payments with a virtual card that will automatically terminate itself after use',
            "class": 'other_end'
          }, {
            title: 'Geographical restrictions',
            text: 'Restrict transactions based on selected countries so spending is only possible during business trips or in your home country',
            "class": 'other_start'
          }, {
            title: 'Custom design for cards',
            text: 'Create cards for your team which reflect the personality and identity of your business',
            "class": 'other_end'
          }, {
            title: 'Advanced spending limits',
            text: 'Set up permanent or temporary card limits per transaction and on daily spend',
            "class": 'other_start'
          }]
        };
        this.exploreFeatures = {
          title: 'Explore our other features',
          exploreFeaturesblock: [{
            title: 'Perks',
            text: 'Benefits and discounts from partners who can take your business further',
            "class": 'Pink',
            icon: 'redeem'
          }, {
            title: 'Security',
            text: 'Your funds are safeguarded and data is encrypted and secure',
            "class": 'Gray',
            icon: 'security'
          }, {
            title: 'Accounts',
            text: 'Open multiple accounts in 30 currencies',
            "class": 'Orange',
            icon: 'account_balance_wallet'
          }]
        };
        this.linkBlock = {
          title: 'Exclusive business card designs',
          subtitle: 'Choose from our exclusive business card designs.',
          btnText: 'Start for free'
        };
        this.previewBackground = {
          previewBackgroundBlock: [{
            "class": 'one'
          }, {
            "class": 'two'
          }, {
            "class": 'three'
          }, {
            "class": 'four'
          }]
        };
        this.footer = [[{
          menuTitle: 'PERSONAL',
          menuTitleActive: 'BUSINESS'
        }], [{
          title: 'PRODUCT',
          id: 'PRODUCT',
          items: [{
            id: 'Product tour',
            linkName: 'Product tour'
          }, {
            id: 'For accountants',
            linkName: 'For accountants'
          }, {
            id: 'Pricing',
            linkName: 'Pricing'
          }]
        }], [{
          title: 'FEATURES',
          id: 'FEATURES',
          items: [{
            id: 'Accounts',
            linkName: 'Accounts'
          }, {
            id: 'Payments',
            linkName: 'Payments'
          }]
        }, {
          title: 'Company cards',
          id: 'Company cards',
          items: [{
            id: 'Roles & Permissions',
            linkName: 'Roles & Permissions'
          }, {
            id: 'API & Integrations',
            linkName: 'API & Integrations'
          }, {
            id: 'Mobile app',
            linkName: 'Mobile app'
          }, {
            id: 'Security',
            linkName: 'Security'
          }, {
            id: 'Perks',
            linkName: 'Perks'
          }]
        }], [{
          title: 'Resources',
          id: 'Resources',
          items: [{
            id: 'Blog',
            linkName: 'Blog'
          }, {
            id: 'Community',
            linkName: 'Community'
          }, {
            id: 'Help centre',
            linkName: 'Help centre'
          }, {
            id: 'Webinar',
            linkName: 'Webinar'
          }]
        }], [{
          title: 'Company',
          items: [{
            id: 'About',
            linkName: 'About'
          }, {
            id: 'Contact',
            linkName: 'Contact'
          }, {
            id: 'Careers',
            linkName: 'Careers'
          }]
        }], [{
          title: 'FOLLOW',
          items: [{
            id: 'Facebook',
            linkName: 'Facebook'
          }, {
            id: 'Instagram',
            linkName: 'Instagram'
          }, {
            id: 'Twitter',
            linkName: 'Twitter'
          }, {
            id: 'LinkedIn',
            linkName: 'LinkedIn'
          }, {
            id: 'Dribbble',
            linkName: 'Dribbble'
          }]
        }]];
      }

      _createClass(ServiceStoreService, [{
        key: "getheadText",
        value: function getheadText() {
          return this.headText;
        }
      }, {
        key: "getheadNav",
        value: function getheadNav() {
          return this.headNav;
        }
      }, {
        key: "getproductPresentation",
        value: function getproductPresentation() {
          return this.productPresentation;
        }
      }, {
        key: "getppersonalSecurity",
        value: function getppersonalSecurity() {
          return this.personalSecurity;
        }
      }, {
        key: "getexpenseManagement",
        value: function getexpenseManagement() {
          return this.expenseManagement;
        }
      }, {
        key: "getsecurityControl",
        value: function getsecurityControl() {
          return this.securityControl;
        }
      }, {
        key: "getcardDesign",
        value: function getcardDesign() {
          return this.cardDesign;
        }
      }, {
        key: "getclauseMatch",
        value: function getclauseMatch() {
          return this.clauseMatch;
        }
      }, {
        key: "getotherFeatures",
        value: function getotherFeatures() {
          return this.otherFeatures;
        }
      }, {
        key: "getexploreFeatures",
        value: function getexploreFeatures() {
          return this.exploreFeatures;
        }
      }, {
        key: "getlinkBlock",
        value: function getlinkBlock() {
          return this.linkBlock;
        }
      }, {
        key: "getpreviewBackground",
        value: function getpreviewBackground() {
          return this.previewBackground;
        }
      }, {
        key: "getfooter",
        value: function getfooter() {
          return this.footer;
        }
      }]);

      return ServiceStoreService;
    }();

    ServiceStoreService.ɵfac = function ServiceStoreService_Factory(t) {
      return new (t || ServiceStoreService)();
    };

    ServiceStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ServiceStoreService,
      factory: ServiceStoreService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var s_abdullakh_companycards_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! s-abdullakh-companycards/loader */
    "./node_modules/s-abdullakh-companycards/loader/index.es2017.mjs");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    Object(s_abdullakh_companycards_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\User\Desktop\angular\companyCardsInAngular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map