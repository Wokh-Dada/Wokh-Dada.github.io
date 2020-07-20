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
  "./node_modules/s-abdullakh-botdevelopmentapp/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!***********************************************************************************************************************************************************!*\
    !*** ./node_modules/s-abdullakh-botdevelopmentapp/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \***********************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSAbdullakhBotdevelopmentappDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./cnt-flexy-view-abdullakh-bot-benefits-bots_35.entry.js": ["./node_modules/s-abdullakh-botdevelopmentapp/dist/esm/cnt-flexy-view-abdullakh-bot-benefits-bots_35.entry.js", "stencil-cnt-flexy-view-abdullakh-bot-benefits-bots_35-entry-js"]
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

    webpackAsyncContext.id = "./node_modules/s-abdullakh-botdevelopmentapp/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
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


    var _bot_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./bot-store.service */
    "./src/app/bot-store.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_cnt_flexy_view_abdullakh_bot_form_communication_1_01_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cnt-flexy-view-abdullakh-bot-form-communication-1_01", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeForm", function AppComponent_cnt_flexy_view_abdullakh_bot_form_communication_1_01_1_Template_cnt_flexy_view_abdullakh_bot_form_communication_1_01_closeForm_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.closeForm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx_r0.getFormCommunication())("pathToAssets", ctx_r0.testPathToAssetsRet());
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(botStore) {
        _classCallCheck(this, AppComponent);

        this.botStore = botStore;
        /**
         * временный префикс ссылки для картинок
         */

        this.testPathToAssets = "https://cdn.ramman.net/flexy-view/abdullakh/bot/1.01/assets/";
      }
      /**
       * Вызов модального окна формы
       */


      _createClass(AppComponent, [{
        key: "openForm",
        value: function openForm() {
          this.popupComplited = true;
        }
        /**
         * Закрытие модального окна формы
         */

      }, {
        key: "closeForm",
        value: function closeForm() {
          this.popupComplited = false;
        }
      }, {
        key: "testPathToAssetsRet",
        value: function testPathToAssetsRet() {
          return this.testPathToAssets;
        }
      }, {
        key: "getFormCommunication",
        value: function getFormCommunication() {
          return this.botStore.getFormCommunication();
        }
      }, {
        key: "getHeader",
        value: function getHeader() {
          return this.botStore.getHeader();
        }
      }, {
        key: "getProductPresentation",
        value: function getProductPresentation() {
          return this.botStore.getProductPresentation();
        }
      }, {
        key: "getProductInformation",
        value: function getProductInformation() {
          return this.botStore.getProductInformation();
        }
      }, {
        key: "getTransitionCreateBot",
        value: function getTransitionCreateBot() {
          return this.botStore.getTransitionCreateBot();
        }
      }, {
        key: "getPerformanceAndBenefits",
        value: function getPerformanceAndBenefits() {
          return this.botStore.getPerformanceAndBenefits();
        }
      }, {
        key: "gethConsultation",
        value: function gethConsultation() {
          return this.botStore.gethConsultation();
        }
      }, {
        key: "getTariffs",
        value: function getTariffs() {
          return this.botStore.getTariffs();
        }
      }, {
        key: "getFooter",
        value: function getFooter() {
          return this.botStore.getFooter();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bot_store_service__WEBPACK_IMPORTED_MODULE_1__["BotStoreService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 10,
      vars: 17,
      consts: [[3, "payload", "pathToAssets", "closeForm", 4, "ngIf"], [3, "categories", "pathToAssets"], [3, "payload", "pathToAssets", "openForm"], [3, "payload", "pathToAssets", "closeForm"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_cnt_flexy_view_abdullakh_bot_form_communication_1_01_1_Template, 1, 2, "cnt-flexy-view-abdullakh-bot-form-communication-1_01", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "cnt-flexy-view-abdullakh-bot-header-1_01", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "cnt-flexy-view-abdullakh-bot-product-presentation-1_01", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openForm", function AppComponent_Template_cnt_flexy_view_abdullakh_bot_product_presentation_1_01_openForm_3_listener() {
            return ctx.openForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "cnt-flexy-view-abdullakh-bot-product-information-1_01", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openForm", function AppComponent_Template_cnt_flexy_view_abdullakh_bot_product_information_1_01_openForm_4_listener() {
            return ctx.openForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "cnt-flexy-view-abdullakh-bot-transition-create-bot-1_01", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openForm", function AppComponent_Template_cnt_flexy_view_abdullakh_bot_transition_create_bot_1_01_openForm_5_listener() {
            return ctx.openForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "cnt-flexy-view-abdullakh-bot-performance-and-benefits-1_01", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openForm", function AppComponent_Template_cnt_flexy_view_abdullakh_bot_performance_and_benefits_1_01_openForm_6_listener() {
            return ctx.openForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "cnt-flexy-view-abdullakh-bot-consultation-1_01", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openForm", function AppComponent_Template_cnt_flexy_view_abdullakh_bot_consultation_1_01_openForm_7_listener() {
            return ctx.openForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "cnt-flexy-view-abdullakh-bot-tariffs-1_01", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openForm", function AppComponent_Template_cnt_flexy_view_abdullakh_bot_tariffs_1_01_openForm_8_listener() {
            return ctx.openForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "cnt-flexy-view-abdullakh-universal-footer-1_01", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popupComplited);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.getHeader())("pathToAssets", ctx.testPathToAssetsRet());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getProductPresentation())("pathToAssets", ctx.testPathToAssetsRet());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getProductInformation())("pathToAssets", ctx.testPathToAssetsRet());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getTransitionCreateBot())("pathToAssets", ctx.testPathToAssetsRet());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getPerformanceAndBenefits())("pathToAssets", ctx.testPathToAssetsRet());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.gethConsultation())("pathToAssets", ctx.testPathToAssetsRet());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getTariffs())("pathToAssets", ctx.testPathToAssetsRet());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.getFooter())("pathToAssets", ctx.testPathToAssetsRet());
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
          type: _bot_store_service__WEBPACK_IMPORTED_MODULE_1__["BotStoreService"]
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
  "./src/app/bot-store.service.ts":
  /*!**************************************!*\
    !*** ./src/app/bot-store.service.ts ***!
    \**************************************/

  /*! exports provided: BotStoreService */

  /***/
  function srcAppBotStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotStoreService", function () {
      return BotStoreService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BotStoreService = /*#__PURE__*/function () {
      function BotStoreService() {
        _classCallCheck(this, BotStoreService);

        /**
         * временный префикс ссылки для картинок
         */
        this.testPathToAssets = "https://cdn.ramman.net/flexy-view/abdullakh/bot/assets/";
        this.formCommunication = {
          id: '1',
          formInterviewText: [{
            nameInterview: 'Как вас зовут',
            businessInterview: 'У вас уже есть бизнес',
            businessSelect: [{
              id: 1,
              select: 'Да',
              selected: true
            }, {
              id: 2,
              select: 'Планирую открыть',
              selected: false
            }, {
              id: 3,
              select: 'Нет',
              selected: false
            }],
            websiteInterview: 'Ссылка на ваш сайт (если есть)',
            numberInterview: 'Ваш номер',
            btnText: 'Создать бота'
          }]
        };
        this.header = {
          id: 'header',
          logoUrl: "5.jpg",
          phoneNumber: '+7 995 606 84 62',
          menu: [{
            id: 1,
            linkName: 'Возможности',
            menuLine: 'menuLine.svg'
          }, {
            id: 2,
            linkName: 'Преимущества',
            menuLine: 'menuLine.svg'
          }, {
            id: 3,
            linkName: 'Для кого',
            menuLine: 'menuLine.svg'
          }]
        };
        this.ProductPresentation = {
          imgUrl: "phone.svg",
          icon: [{
            id: 'whatsApp',
            img: 'waaa.svg'
          }, {
            id: 'telegram',
            img: 'telegram.png'
          }, {
            id: 'viber',
            img: 'viber.png'
          }, {
            id: 'mes',
            img: 'fb.svg'
          }, {
            id: 'vk',
            img: 'vk.svg'
          }],
          title: [{
            id: 1,
            text: "Сделаем\n" + "\nчат-бота для\n" + "\nтвоего бизнеса\n",
            imgUrl: "Vector.svg",
            behindText: 'за',
            price: '9 900 ₽',
            btnText: 'Создать бота'
          }]
        };
        this.ProductInformation = {
          title: "Что умеют чат-боты",
          infoBlock: [{
            id: 1,
            outerImg: 'productInfoImg_1.svg',
            innerImg: 'rocket_1.svg',
            text: "\n            \u0427\u0430\u0442-\u0431\u043E\u0442 \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0438\u0432\u043E\u0434\u0438\u0442\u044C \u0432\u0430\u043C\n                <strong>\n                    <span style=\"color: rgb(255, 208, 0);\">\n                        \u043D\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432\n                    </span>\n                </strong>",
            btnText: 'То, что мне нужно!'
          }, {
            id: 2,
            outerImg: 'productInfoImg_2.svg',
            innerImg: 'profit_1.svg',
            text: "\n            \u0427\u0430\u0442-\u0431\u043E\u0442 \u043C\u043E\u0436\u0435\u0442\n              <strong>\n                <span data-redactor-tag=\"span\" style=\"color: rgb(255, 208, 0);\">\n                    \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044E\n                </span>\n              </strong> \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430 \u0438\u043B\u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0438 \u0438\u043C\u0435\u044E\u0449\u0438\u043C\u0441\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C",
            btnText: 'Хочу такого!'
          }, {
            id: 3,
            outerImg: 'productInfoImg_3.svg',
            innerImg: 'training_1.svg',
            text: "\n            \u0427\u0430\u0442-\u0431\u043E\u0442 \u043C\u043E\u0436\u0435\u0442\n            <span style=\"color: rgb(255, 208, 0);\">\n              <strong>\u043E\u0431\u0443\u0447\u0430\u0442\u044C </strong>\n            </span>\n            \u0432\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0438\n             <strong>\n               <span style=\"color: rgb(255, 208, 0);\">\n                 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432\n               </span>\n             </strong>",
            btnText: 'Точно для нас!'
          }, {
            id: 4,
            outerImg: 'productInfoImg_4.svg',
            innerImg: 'chatbot_1.svg',
            text: "\n            \u0427\u0430\u0442-\u0431\u043E\u0442 \u043C\u043E\u0436\u0435\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0440\u043E\u043B\u0438 \u0441\u0435\u043A\u0440\u0435\u0442\u0430\u0440\u044F, \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430,\n            \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u0430. \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430 \u0442\u0435\u0445\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438,\n            <strong>\n              <span style=\"color: rgb(255, 208, 0);\">\n                \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0430\u044F\n              </span>\n            </strong>\n            \u0432\u0430\u0448\u0438\u0445\n            <span style=\"color: rgb(255, 208, 0);\">\n              <strong>\n                \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432\n              </strong>\n            </span>\n            \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u0446\u0438\u043A\u043B\u0443 \u0441\u0434\u0435\u043B\u043A\u0438.",
            btnText: 'Подходит!'
          }, {
            id: 5,
            outerImg: 'productInfoImg_5.svg',
            innerImg: 'plane_1.svg',
            text: "\n            \u0427\u0430\u0442-\u0431\u043E\u0442 \u043C\u043E\u0436\u0435\u0442 \u0440\u0430\u0441\u0441\u044B\u043B\u0430\u0442\u044C \u0432\u0430\u0448\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u043F\u043E\u043B\u0435\u0437\u043D\u0443\u044E\n            \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E, \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0438\u0445 \u043A \u043F\u043E\u043A\u0443\u043F\u043A\u0435,\n            <strong>\n              <span style=\"color: rgb(255, 208, 0);\">\n                \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u044C \u0434\u043E\u043F\u0440\u043E\u0434\u0430\u0436\u0443\n              </span>\n            </strong> \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445\n            \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438\u043B\u0438 \u0443\u0441\u043B\u0443\u0433.",
            btnText: 'Идеально, беру!'
          }]
        };
        this.TransitionCreateBot = {
          title: [{
            id: 1,
            imgUrl: "undraw_chat_bot_kli5.svg",
            title: "\u0421\u043E\u0437\u0434\u0430\u0439 <br/> \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u043E\u0442\u0430"
          }],
          follow: [{
            id: 2,
            text: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0439\n         \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B \u0431\u043E\u0442\u0430 \u0432 \u044D\u0442\u043E\u0439\n         \u0444\u043E\u0440\u043C\u0435 \u0447\u0442\u043E\u0431\u044B\n         <strong>\n           <span style=\"color: rgb(255, 208, 0);\">\n             \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D \u0431\u043E\u0442\u0430\n           </span>\n         </strong>",
            btnText: 'Создать бота'
          }]
        };
        this.PerformanceAndBenefits = {
          PerformanceandBenefitsbckgrnd: 'bg.svg',
          PerformanceInformation: [{
            imgUrl: 'perfomansInfoImg.svg',
            title: 'Где использование ботов будет наиболее эффективным.',
            ContentRightEndText: 'ВАШ БИЗНЕС',
            ContentLeftEndText: 'ВАШ БИЗНЕС',
            btnText: 'Разработать →',
            right: [{
              id: 1,
              text: 'Агентства недвижимости и застройщики'
            }, {
              id: 2,
              text: 'Дизайн и ремонт квартир'
            }, {
              id: 3,
              text: 'Юридические услуги'
            }, {
              id: 4,
              text: 'Автошколы'
            }, {
              id: 5,
              text: 'Автосервисы'
            }, {
              id: 6,
              text: 'Страховые компании и брокеры'
            }, {
              id: 7,
              text: 'Ремонт бытовой техники'
            }, {
              id: 8,
              text: 'Маникюр, ресницы, перманентный макияж, прически'
            }, {
              id: 9,
              text: 'Медицинские центры'
            }, {
              id: 10,
              text: 'Курсы иностранных языков'
            }, {
              id: 11,
              text: 'Изготовление мебели'
            }, {
              id: 12,
              text: 'Транспортные компании (такси, перевозки)'
            }, {
              id: 13,
              text: 'Купля-продажа недвижимости'
            }],
            left: [{
              id: 1,
              text: 'Еда (Ресторан, доставка)'
            }, {
              id: 2,
              text: 'Одежда, обувь и аксессуары'
            }, {
              id: 3,
              text: 'Автосалоны и запчасти'
            }, {
              id: 4,
              text: 'Товары для ремонта'
            }, {
              id: 5,
              text: 'Товары для дома и дачи'
            }, {
              id: 6,
              text: 'Товары для спорта и отдыха'
            }, {
              id: 7,
              text: 'Товары для красоты и здоровья'
            }, {
              id: 8,
              text: 'Салоны цветов и подарков'
            }, {
              id: 9,
              text: 'Компьютеры, электроника и бытовая техника'
            }, {
              id: 10,
              text: 'Любые интернет-магазины'
            }, {
              id: 11,
              text: 'Игрушки, игры и развлечения'
            }, {
              id: 12,
              text: 'Узкоспециализированные товары'
            }, {
              id: 13,
              text: 'Книги и обучающие материалы'
            }]
          }],
          BenefitsBots: [{
            title: "Преимущества чат-ботов",
            infoBlock: [{
              id: 1,
              outerImg: 'Ellipse_12.svg',
              innerImg: '1.svg',
              title: 'Низкая цена',
              text: 'Бот поможет оптимизировать затраты на сотрудников'
            }, {
              id: 2,
              outerImg: 'Ellipse_12.svg',
              innerImg: '2.svg',
              title: 'Рост конверсии',
              text: 'Бот увеличивает приток клиентов с сайта, и привлекает новых клиентов'
            }, {
              id: 3,
              outerImg: 'Ellipse_12.svg',
              innerImg: '3.svg',
              title: 'Работает 24/7',
              text: 'Бот не отдыхает, не обедает, не спит'
            }, {
              id: 4,
              outerImg: 'Ellipse_12.svg',
              innerImg: '10.svg',
              title: 'Высокая скорость работы',
              text: 'Бот отвечает моментально'
            }, {
              id: 5,
              outerImg: 'Ellipse_12.svg',
              innerImg: '5.svg',
              title: 'Простое обслуживание',
              text: 'Бота легко дорабатывать и обновлять'
            }, {
              id: 6,
              outerImg: 'Ellipse_12.svg',
              innerImg: '6.svg',
              title: 'Автоматизация рутины',
              text: 'Бот экономит ваше время автоматически выполняя любые типовые задачи'
            }]
          }]
        };
        this.Consultation = {
          imgUrl: 'undraw_moving_forwar.svg',
          title: 'Бесплатная консультация',
          text: "\n        \u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0435\u043C \u043A\u0430\u043A\u043E\u0439\n            <strong>\n                <span style=\"color: rgb(255, 208, 0);\">\n                    \u0447\u0430\u0442-\u0431\u043E\u0442\n                </span>\n            </strong> \u043F\u043E\u0434\u043E\u0439\u0434\u0435\u0442\n            <strong>\n                <span style=\"color: rgb(255, 208, 0);\">\n                    \u0432\u0430\u0448\u0435\u043C\u0443 \u0431\u0438\u0437\u043D\u0435\u0441\u0443\n                 </span>\n            </strong>",
          btnText: 'Хочу консультацию'
        };
        this.Tariffs = {
          dinamicImg: 'tariffsDinamicImg.svg',
          dinamicText: '$',
          title: "Тарифы",
          bckgrndImg: 'undraw_work_chat_erd.svg',
          infoBlock: [{
            id: 1,
            outerImg: 'Ellipse_11.svg',
            innerImg: 'boy_1.svg',
            "class": 'small',
            title: 'Чат-бот визитка',
            text: 'Чат-бот который поможет вашим клиентам познакомится с вашим бизнесом, узнать информацию о оказываемых услугах.',
            priceText: 'узнайте стоимость',
            btnText: 'Заказать бота'
          }, {
            id: 2,
            outerImg: 'Ellipse_11.svg',
            innerImg: 'icons8-chuck-norris-.png',
            "class": 'big',
            title: 'Чат-бот лидогенератор',
            text: 'Помогает обрабатывать запросы клиентов в мессенджерах.\n' + 'В режиме "вопрос-ответ" узнает потребность клиента, собирает контактные данные и отправляет заявку на вашу почту или в CRM.',
            priceText: 'узнайте стоимость',
            btnText: 'Заказать бота'
          }, {
            id: 3,
            outerImg: 'Ellipse_11.svg',
            innerImg: 'darth.svg',
            "class": 'small',
            title: 'Чат-бот магазин',
            text: 'Чат-бот знакомит покупателя с ассортиментом товаров\n.' + 'Главное меню с кнопками помогает покупателю сформировать заказ и оплатить его банковской картой.',
            priceText: 'узнайте стоимость',
            btnText: 'Заказать бота'
          }]
        };
        this.footer = {
          systemButtons: [{
            name: 'Магазин',
            title: 'Магазин',
            icon: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/il/ios11-imessage-app-store-icon.png',
            badges: 3,
            id: 1
          }, {
            name: 'Фото',
            title: 'Фото',
            icon: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios12-messages-imessage-photos-app.png',
            badges: 0,
            id: 2
          }, {
            name: 'Музыка',
            title: 'Музыка',
            icon: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios10-message-imessage-music-app.png',
            badges: 3,
            id: 3
          }, {
            name: 'Digital Touch',
            title: 'Digital Touch',
            icon: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios11-imessage-digital-touch-icon.png',
            badges: 1,
            id: 4
          }],
          userButtons: [{
            name: 'images',
            title: 'images',
            icon: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios10-message-imessage-images-app.png',
            badges: 0,
            id: 1
          }, {
            name: 'Apple Pay',
            title: 'Apple Pay',
            icon: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios11-message-imessage-apple-pay-app.png',
            badges: 4,
            id: 2
          }, {
            name: 'Animoji',
            title: 'Animoji',
            icon: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios12-messages-imessage-memoji-icon.png',
            badges: 0,
            id: 3
          }, {
            name: 'Memoji',
            title: 'Memoji',
            icon: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios13-imessage-memoji-sticker-icon.png',
            badges: 0,
            id: 4
          }, {
            name: 'WhatsApp',
            title: 'WhatsApp',
            icon: 'https://i2.wp.com/nigil.ru/wp-content/uploads/2015/06/whatsapp.png?resize=512%2C512',
            badges: 33,
            id: 5
          }]
        };
      }

      _createClass(BotStoreService, [{
        key: "testPathToAssetsRet",
        value: function testPathToAssetsRet() {
          return this.testPathToAssets;
        }
      }, {
        key: "getFormCommunication",
        value: function getFormCommunication() {
          return this.formCommunication;
        }
      }, {
        key: "getHeader",
        value: function getHeader() {
          return this.header;
        }
      }, {
        key: "getProductPresentation",
        value: function getProductPresentation() {
          return this.ProductPresentation;
        }
      }, {
        key: "getProductInformation",
        value: function getProductInformation() {
          return this.ProductInformation;
        }
      }, {
        key: "getTransitionCreateBot",
        value: function getTransitionCreateBot() {
          return this.TransitionCreateBot;
        }
      }, {
        key: "getPerformanceAndBenefits",
        value: function getPerformanceAndBenefits() {
          return this.PerformanceAndBenefits;
        }
      }, {
        key: "gethConsultation",
        value: function gethConsultation() {
          return this.Consultation;
        }
      }, {
        key: "getTariffs",
        value: function getTariffs() {
          return this.Tariffs;
        }
      }, {
        key: "getFooter",
        value: function getFooter() {
          return this.footer;
        }
      }]);

      return BotStoreService;
    }();

    BotStoreService.ɵfac = function BotStoreService_Factory(t) {
      return new (t || BotStoreService)();
    };

    BotStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BotStoreService,
      factory: BotStoreService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BotStoreService, [{
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


    var s_abdullakh_botdevelopmentapp_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! s-abdullakh-botdevelopmentapp/loader */
    "./node_modules/s-abdullakh-botdevelopmentapp/loader/index.es2017.mjs");
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

    Object(s_abdullakh_botdevelopmentapp_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);
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
    /*! C:\Users\User\Desktop\angular\botDevelAppInAngular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map