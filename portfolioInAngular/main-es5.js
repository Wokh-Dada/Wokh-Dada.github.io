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
  "./node_modules/portfolio-site-v1/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/portfolio-site-v1/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \***********************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPortfolioSiteV1DistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./cnt-flexy-view-abdullakh-promo-about-me-section_19.entry.js": ["./node_modules/portfolio-site-v1/dist/esm/cnt-flexy-view-abdullakh-promo-about-me-section_19.entry.js", "stencil-cnt-flexy-view-abdullakh-promo-about-me-section_19-entry-js"]
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

    webpackAsyncContext.id = "./node_modules/portfolio-site-v1/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
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


    var _portfolio_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./portfolio-store.service */
    "./src/app/portfolio-store.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(PortfolioStore) {
        _classCallCheck(this, AppComponent);

        this.PortfolioStore = PortfolioStore;
        /**
         * временный префикс ссылки для картинок
         */

        this.testPathToAssets = "https://cdn.ramman.net/flexy-view/abdullakh/promo/1.01/assets/";
      }

      _createClass(AppComponent, [{
        key: "testPathToAssetsRet",
        value: function testPathToAssetsRet() {
          return this.testPathToAssets;
        }
      }, {
        key: "getHeader",
        value: function getHeader() {
          return this.PortfolioStore.getHeader();
        }
      }, {
        key: "getLatestWork",
        value: function getLatestWork() {
          return this.PortfolioStore.getLatestWork();
        }
      }, {
        key: "getExperiments",
        value: function getExperiments() {
          return this.PortfolioStore.getExperiments();
        }
      }, {
        key: "getFooter",
        value: function getFooter() {
          return this.PortfolioStore.getFooter();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_portfolio_store_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioStoreService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 8,
      consts: [[3, "categories", "pathToAssets"], [3, "payload", "pathToAssets"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cnt-flexy-view-abdullakh-promo-header-wrapper-1_01", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "cnt-flexy-view-abdullakh-promo-latest-works-wrapper-1_01", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "cnt-flexy-view-abdullakh-promo-experiments-wrapper-1_01", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "cnt-flexy-view-abdullakh-promo-footer-wrapper-1_01", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.getHeader())("pathToAssets", ctx.testPathToAssetsRet());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getLatestWork())("pathToAssets", ctx.testPathToAssetsRet());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getExperiments())("pathToAssets", ctx.testPathToAssetsRet());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.getFooter())("pathToAssets", ctx.testPathToAssetsRet());
        }
      },
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
          type: _portfolio_store_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioStoreService"]
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
  "./src/app/portfolio-store.service.ts":
  /*!********************************************!*\
    !*** ./src/app/portfolio-store.service.ts ***!
    \********************************************/

  /*! exports provided: PortfolioStoreService */

  /***/
  function srcAppPortfolioStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioStoreService", function () {
      return PortfolioStoreService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PortfolioStoreService = /*#__PURE__*/function () {
      function PortfolioStoreService() {
        _classCallCheck(this, PortfolioStoreService);

        this.header = {
          id: 1,
          authorName: 'Abdullah Gezikhanov',
          authorDevelop: 'Интерактивный Front-end Developer',
          work: 'Работы',
          workHref: '#latest_works',
          logoBack: "\n         <svg id=\"logoBack\" height=\"269.8800079345703\" width=\"264.2308715820313\">\n            <defs id=\"SvgjsDefs1464\"/>\n            <linearGradient id=\"linear-gradient\" gradientUnits=\"userSpaceOnUse\" x1=\"-156.508\" y1=\"354.122\" x2=\"115.621\" y2=\"354.122\" gradientTransform=\"matrix(1 0 0 -1 156 491)\"><stop offset=\"0\" stop-color=\"#2D2E83\"/><stop offset=\"1\" stop-color=\"#1D71B8\"/></linearGradient>\n\n            <g name=\"main_text\" fill=\"#inherit\" transform=\"translate(48.60543937683107,-2.249992752075201)\">\n              <path\n                d=\"M108.80 164.14L105.47 152.83L82.51 76.30L64.88 135.86Q91.50 160.48 108.80 164.14M17.63 164.47L2.66 148.17Q17.97 127.21 38.60 124.21L62.22 50.02Q64.88 41.70 64.88 37.38Q64.88 24.73 59.22 21.74L108.80 21.74Q102.48 24.73 102.48 36.38Q102.48 40.37 104.47 46.69L141.07 160.15Q146.73 157.49 159.37 150.50Q152.05 164.14 144.73 171.79L158.04 212.72Q161.37 223.03 161.70 223.36Q163.70 228.35 168.02 232.35L177.67 238.00L110.79 238.00L119.11 232.35Q126.10 230.68 126.10 222.37Q126.10 220.37 123.77 212.72L115.12 184.44Q94.49 180.11 60.89 148.17L59.56 152.83L33.94 232.35Q31.94 238.67 31.94 242.33Q31.94 247.99 41.59 251.98L27.95 252.64L5.99 252.64L-10.65 251.98Q-2.66 249.32-0.67 245.99Q0.33 244.33 3.33 235.01L34.60 137.52Q20.30 138.52 9.65 149.83L17.63 164.47Z\"\n                fill=\"url(#linear-gradient)\" />\n            </g>\n          </svg>",
          btn: [{
            id: 1,
            btnText: 'Обо мне',
            btnSvg: "<svg class=\"buttonIcon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.213 476.213\">\n           <path d=\"M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607\"></path>\n         </svg>",
            btnHref: '#',
            btnComplited: false
          }],
          headNav: {
            id: 1,
            logoname: "<div  id=\"logo\">\n            <svg height=\"269.8800079345703\" width=\"264.2308715820313\">\n                <defs id=\"SvgjsDefs1464\"/>\n                <g id=\"logo1\" transform=\"translate(0,0.19999998807907104) scale(2.6)\" name=\"filled_container\">\n                  <path\n                    d=\"M76 1.5h-2.3l-1-.2h-3.6a1.3 1.3 0 0 0-.8-.1h-4.6a4.8 4.8 0 0 0-2.3.3h-1.6v-.2l-1.1-.2a1.9 1.9 0 0 0-1 .1h.3c.1 0 .2.1.1.1h-1c-1.2-.1-2.4 0-3.6 0h-.8v.2H44L42.7.9a2.3 2.3 0 0 0-1.6.1h-.4a16.8 16.8 0 0 0-2-.2h-5.5a1.9 1.9 0 0 1-1 .2H6.4c0-.1.1-.1.1-.2s-.3-.7-2-1h-.3L3 0v3.3c-.1.8-.1 1.7-.1 2.5s-.1 1.8 0 2.7a2.4 2.4 0 0 1 0 .6 4.1 4.1 0 0 0-.1 1.1 7.8 7.8 0 0 1-.1 1.5 5.1 5.1 0 0 0 0 2 1.1 1.1 0 0 1 0 .4 2.8 2.8 0 0 0-.1.9 6.5 6.5 0 0 1 0 1.1 18.4 18.4 0 0 0-.5 2.9 6.2 6.2 0 0 1-.1 1.2 2.3 2.3 0 0 0 0 .9 3.7 3.7 0 0 1 0 1.5 11.2 11.2 0 0 0-.1 1.2c0 .6-.1 1.2-.2 1.7a11.8 11.8 0 0 0-.1 1.9 10.5 10.5 0 0 1-.2 2.6 1.4 1.4 0 0 0 0 .6 2.7 2.7 0 0 1 0 1.4 3.1 3.1 0 0 0-.1 1.1 1.3 1.3 0 0 1-.1.5c-.1.3 0 .5.2.5s.1.1.1.2l-.3.5v2.6l.2 1.9v.6a3.5 3.5 0 0 1 .1 1.5v.6a.8.8 0 0 1 0 .7l-.3.8a7.2 7.2 0 0 0-.1 1.2c0 .2.1.4.2.5s.2 0 .3.2v.2a.3.3 0 0 1-.1.3l-.4.4a1.1 1.1 0 0 0 0 .7v.2c.4.2.5.8.5 1.5v.3c.1 0 .1 0 .2-.1v-.3c.1-.1.2-.1.2.1a.9.9 0 0 1-.2.8 2.7 2.7 0 0 1 .2.6c.1.4.1.8.2 1.1l.4.2c.1 0 .1 0 .1-.2V51c-.1-.2-.1-.2 0-.5v-.2c.1-.4.1-.4.2-.2l.2.2c.1 0 .1 0 .1-.2a2.9 2.9 0 0 0-.1-.9l-.1-.8c-.1 0-.1-.1-.1-.3a.5.5 0 0 1 .1-.4 1.5 1.5 0 0 0 .3-1.2c0-.6-.1-1.2 0-1.7a24 24 0 0 1-.1-2.6 2.8 2.8 0 0 0-.2-1.3 3.8 3.8 0 0 1 0-1.7c.1-.4-.1-.8-.3-.7h-.4c-.2 0-.3-.3-.3-.7V37c0-.1 0-.2.1-.2a3.1 3.1 0 0 0 .1.6c.1.2.2 0 .2-.1l.3-.2h.5v-.5a1.7 1.7 0 0 0 0-.9v-.4a1.9 1.9 0 0 1 0-.5 6 6 0 0 1 .1-1 3.8 3.8 0 0 0 .1-.9c0-.8 0-1.7.1-2.5a1.6 1.6 0 0 0 0-.5 2.8 2.8 0 0 1 0-.9l.2-1.6h.2c.2.3.2.3.3.2v53.9l-.5-.9h-.2l-.3.4v.3a2.6 2.6 0 0 1 .1 1.5 2.6 2.6 0 0 0-.1.6 7.5 7.5 0 0 0 .1 1.2c.1.5 0 1 .1 1.6a5.5 5.5 0 0 1 0 .6v2.1a3.6 3.6 0 0 1 0 1.4v1.4a.6.6 0 0 0 .1.4.6.6 0 0 1 .1.6 10.7 10.7 0 0 0-.3 1.9.6.6 0 0 0 0 .3 1 1 0 0 1 0 .8 1.8 1.8 0 0 0-.1.6 4.4 4.4 0 0 1-.2 1.3 3.1 3.1 0 0 0-.1.6v1.8h2.9a6.7 6.7 0 0 0 1.9 0h1.1l.6-.2h4.7l.6-.2 1.1.3h1.9l.4-.2c0-.1-.1-.2-.4-.2h-.4v-.1h.9c.2 0 .2.1.3.2h.7c0-.1.1-.2.3-.2s.4-.2.4-.3l-.2-.3H21l-.5.2h.1a7.6 7.6 0 0 0 2 0 1.6 1.6 0 0 1-1-.5h79.9v-97zM1.7 38.4s.1 0 .1.1zm1.3 8zm-.2-3.1zm-.1 2.2zm-.3.9c.1 0 .1.1.1.3a1.5 1.5 0 0 1-.1.3v-.2c0-.2 0-.4.1-.4zm1.1-20zm.2-.8v-.2h.1zm.4-2.3l-.2.6v.3a1.3 1.3 0 0 1-.1-.7 3.7 3.7 0 0 0 .1-.6c0-1 .1-2 0-3s-.1-1.4 0-2a2.3 2.3 0 0 0-.1-.6 5.7 5.7 0 0 1-.1-1.2v-.2a1 1 0 0 0 .2-.6V14a2.8 2.8 0 0 0 0-.5 2.1 2.1 0 0 1-.1-.7l.2-.7a2.1 2.1 0 0 0 .1-.6A19.5 19.5 0 0 1 4 9.3c0-1.4 0-2.9.1-4.3a1.3 1.3 0 0 1 .1-.6zM4.1 2v-.1zm.1-.4zm2 97.6zm2.7-.2zm4.5.8h-.3c-.1 0-.2-.1-.1-.1h.4v.2zm.7-1zm.3 1zm.5-.7zm.1.4zm.6 0zm.5-.5zm1.9-.2zM39.2 1.4h-.6v-.2h.1l.6.2zm2.3.1h.3l.3.2zm-10.6-.2zM2 49.7zm0 0a4.4 4.4 0 0 1 0 .9.8.8 0 0 0 .1.6 1.6 1.6 0 0 1 .1 1l-.3-.5c-.1-.2-.2-.1-.3 0s-.2.2-.3-.4A7 7 0 0 1 2 50a1.1 1.1 0 0 0 0-.3zm25.9 53zm6.4-1l-.4-.2c0-.1.1-.2-.2-.3h-3.5l-.4-.2a3 3 0 0 0-1.5-.2h-1.7l-.7.2H25l-1.7-.2h-3.9l-1 .2h-1.1c.1 0 .1 0 0 0 0-.1-.1-.2-.3-.3h-2.6a7.5 7.5 0 0 1-1.2-.1 3.1 3.1 0 0 1-1.2 0h-2a4 4 0 0 0-1.8 0h-2a1.5 1.5 0 0 1-1 0H2.5v-1.7a7.2 7.2 0 0 0 0-.8v-1.8c0-.3-.1-.6-.1-.9s.1-.7.1-1.1a1.7 1.7 0 0 0-.4-1.4H2a.3.3 0 0 1-.1-.3.5.5 0 0 1 .2-.4h.3a2 2 0 0 0 .1-.6 2.5 2.5 0 0 1 0-.6 5.1 5.1 0 0 0 .1-1.5c0-.2-.1-.4-.1-.6a2 2 0 0 0 0-.7c-.1-.2.1-.4.1-.5a4.5 4.5 0 0 1 0-1 3.4 3.4 0 0 1 0-.9 3.1 3.1 0 0 0 0-.6 15 15 0 0 0-.2-2.5 1.4 1.4 0 0 1-.1-.5v-.6a11.3 11.3 0 0 0 0-2.7 16.1 16.1 0 0 0-.1-1.7 10.3 10.3 0 0 0-.4-1.4l-.3-.8v-.2h-.3v.3c0 1.6 0 3.2-.1 4.8a4.7 4.7 0 0 0 0 .5v2.8a2.5 2.5 0 0 0 .1 1 .8.8 0 0 1 0 .4 4.2 4.2 0 0 0 0 .8c0 .3-.1.6-.1.9v1.9a5.1 5.1 0 0 1-.1 1.2c-.1.4 0 .8-.1 1.2s.1.6 0 .9a8.5 8.5 0 0 0-.1.9A16 16 0 0 0 .7 94a3.2 3.2 0 0 1 0 .8 4.1 4.1 0 0 0 .1 1.1l-.2 1.2.2.8a1.2 1.2 0 0 1-.1.7v.2L0 101l4.2 1.3h2l1.1.2h1.2c.4 0 .7 0 .8-.2h.3l.8.2a1.2 1.2 0 0 0 .9-.2c-.1.1 0 .1.1.2h.4v-.5l.2-.2c.5 0 .7 0 .7.2v.1h.8c.2 0 .2.1.2.1h1.6a2.6 2.6 0 0 1 1.1-.3h.1c.2.3.6.4 1.3.3h3l.6-.2h.2l-.2.2s-.1.1 0 .1h.7c.3 0 .5-.1.5-.2h.5l.2.3h1.2a4.1 4.1 0 0 0 1.5.1h1.6c-.1-.1-.1-.1 0-.2h.5c.3.1.5.1.6 0l.7-.4h.1v.1h.3c.3.1.3.2.5.4a.8.8 0 0 0 .7.2h.4c.4.1.5.1.7-.1s.1-.1-.1-.2h-.3a.5.5 0 0 1 .4-.2h.6c.4 0 .6.1.7.2h.3l.4-.5c.5-.1.4-.1.2-.1zm-33.1-6v-.2zm10.2 5.1zm7.7.7zm0 .7zm.9-1.2zm3.1.1zm2.8.2zm1.3.7l-.4.2h-.4c0-.1-.2-.2-.1-.3a1.3 1.3 0 0 1 .8-.6h.1c.2.1.3.2.1.4v.2c-.2.1-.2.1 0 .2zm.7 0zm1.1-1zm2.2.8zm2.1-.5H33l-.7.2c-.1-.1-.2-.2-.1-.4h1.2zm59.9 1.9zm5.1-1.3H98c-.1-.1 0-.1.1-.2h-.4a3.2 3.2 0 0 0-1.1-.4H96a1.9 1.9 0 0 0-1-.1h-1l.4.2.2.2c-.2.2.1.4 0 .5H94c-.1-.3.1-.5 0-.8l-.9-.3-.6.2a1.8 1.8 0 0 1-1.3-.1v-.1l.2-.3a1.1 1.1 0 0 1 .9-.3h2c.2 0 .3-.1.2-.2h-1.3c-.4.1-.7 0-.9-.2h-1.2l-.5.4c-.3-.2-.1-.4 0-.6h-1.3v.3h-.5a5.5 5.5 0 0 0-1.7 0H75.6l-2 .2-.9.2c-.3.1-.4.3-.2.4l.5.3h.7c-.1.1 0 .2.3.3l.3.2a.6.6 0 0 1-.6.4l-.9.3c-.1.1-.2.1-.1.2s0 .1 0 .2.1.2.5.1h.6l-.4-.2h.1c.5 0 .7.1.9.3h-.6l.3.2c.3.3.2.3.9.3h3.1a1.9 1.9 0 0 1 1.2 0 .7.7 0 0 0 .6-.1c.2-.1.3-.1.6 0h1.8a3 3 0 0 1 1-.1 3.5 3.5 0 0 0 1.5 0h1.7c.2-.2.2-.2.7-.2h.3l-.3.2h1.7c0-.2-.3-.3-.5-.4h.9l.3.3h.9a5.4 5.4 0 0 0 1.5 0h.2l1.1.2.3-.3.4.3a.9.9 0 0 1 .9.1h.9l.2-.3h.5v.3h.5c.4-.1.8-.1.9-.4a.4.4 0 0 1 .4-.2l.5.2h.2l.2-.3.4-.2c-.4-.1-.7-.2-.9-.4zm-6.8-1.8zm-17.9.4h-.1c-.1 0-.2-.1-.1-.1h.1c.2.1.3.1.2.2zm1.8.9h-.2c-.1 0-.1-.1 0-.1h.1c.3.1.3.2.3.2zm.6 1.5c-.1-.1-.1-.2 0-.2h.1zm.1-1.2H76l.5-.2h.2c.3.2.1.3-.4.3zm.5.7zm1.3-.2zm2-.1a2.8 2.8 0 0 0-1-.3h-.3s-.1-.1 0-.1h.7c.3.2.7.3.7.6zm2.8 0h.4v.1H83c.1.1-.2 0-.1-.1zm-.6-1zm1.5 1.9zm.5-2.3zm1.6-.3zm.8 1.8zm1 .3zm-.1-1.3h-.1c0-.1.2-.2.4-.2h.2c0 .1-.1.1-.2.2zm.4.7zm.6-1.4c-.2 0-.7-.1-.7-.2h.7zm.3.3zm1.2 0h-.1.2zm.9 1.1zm.9.2zm.3.8zm4.9-1.1zm-9.9 1.6zm-67.8-3.7zm82.4 2c.1 0-.1.2-.2.2h-.4a.6.6 0 0 0-.6-.1 2.3 2.3 0 0 1-1.4-.2c-.1 0-.1-.1.1-.1a3.1 3.1 0 0 1 1.3-.1h.7c0 .1.2.2.4.3zm-79-2.4zM1.7 49.1zm-.3-.6a1.1 1.1 0 0 0 .3.6c-.2 0-.3.3-.4.8h-.1v-1.3c0-.1.1-.3.1-.2s.1 0 .1.1zM92 103.2h.2l.2.2c0 .1 0 .1-.1.2h-.5c-.1-.2-.1-.3.2-.4zm9.3-.5zm-78.6-3.3v.2h-.6c-.1 0-.1-.1 0-.2l.5-.2zM2.1 54.1v-.3a1.3 1.3 0 0 1 0-.3v-.1a2.2 2.2 0 0 1 0 .3c.1.3.1.5 0 .4zm17 45.6zm-.6.2l.6-.2v.3h-.7zM3 48.4h.2v.2c0 .1-.1-.1-.2-.2zm91.4 51.5h.1c.1-.1.1 0-.1 0zM2.7 52.5a1.2 1.2 0 0 1 0-.3c.1-.1.2 0 .1.1v.2c0 .2-.1.2-.1 0zm-1.5-9.8v.8a2.4 2.4 0 0 1-.1-.8c.1-.2.1-.1.1 0zm0 .9zm2.1 7.9h-.1v-.2h.1zm32.3 50.6v.1zm57.8 1.3zM30.6 1.3zm.3 0zm-8.2 97.9h-.1v-.1s.2 0 .1.1zM36.8.8c-.1 0-.1 0 0-.1zM2.5 54.2h-.1V54a1.9 1.9 0 0 1 .1.2zM93 100.7zM1.7 52.9h.2a.4.4 0 0 1 0 .1c-.1.1-.2.1-.2-.1zm-.2.7zm22.4 45.8zm57.8.5zm-.1-.1zM3.2 81zm95 20.8c-.1 0-.1 0 0 0zm0 0zm-97-51.1zm27.1 51.9zm-.1-.1zm-.3.2zm.3-.1zm72 .2v-.3h-.2c-.1-.1-.1-.2.2-.2s.6-.1.8.2h-.7c.1.1.1.2-.1.2zm0 0zm-13.1.8c.1-.1.1-.1 0-.1z\"\n                    fill=\"inherit\" fill-rule=\"evenodd\" />\n                </g>\n                <g id=\"logo2\" name=\"main_text\" fill=\"#inherit\" transform=\"translate(48.60543937683107,-2.249992752075201)\">\n                  <path\n                    d=\"M108.80 164.14L105.47 152.83L82.51 76.30L64.88 135.86Q91.50 160.48 108.80 164.14M17.63 164.47L2.66 148.17Q17.97 127.21 38.60 124.21L62.22 50.02Q64.88 41.70 64.88 37.38Q64.88 24.73 59.22 21.74L108.80 21.74Q102.48 24.73 102.48 36.38Q102.48 40.37 104.47 46.69L141.07 160.15Q146.73 157.49 159.37 150.50Q152.05 164.14 144.73 171.79L158.04 212.72Q161.37 223.03 161.70 223.36Q163.70 228.35 168.02 232.35L177.67 238.00L110.79 238.00L119.11 232.35Q126.10 230.68 126.10 222.37Q126.10 220.37 123.77 212.72L115.12 184.44Q94.49 180.11 60.89 148.17L59.56 152.83L33.94 232.35Q31.94 238.67 31.94 242.33Q31.94 247.99 41.59 251.98L27.95 252.64L5.99 252.64L-10.65 251.98Q-2.66 249.32-0.67 245.99Q0.33 244.33 3.33 235.01L34.60 137.52Q20.30 138.52 9.65 149.83L17.63 164.47Z\"\n                    fill=\"#inherit\" />\n                </g>\n              </svg>\n            </div>",
            mobileBar: "<i class=\"fas fa-bars\"></i>",
            nav: [{
              id: 1,
              link: 'Моё портфолио'
            }, {
              id: 2,
              link: 'Обо мне/Связаться'
            }, {
              id: 3,
              link: 'Эксперементы'
            }],
            iconTheme: "<i class=\"fas fa-adjust\"></i>"
          },
          socialIcon: [{
            id: 1,
            social: "<i class=\"fab fa-github\"></i>",
            socialHref: 'https://github.com/Wokh-Dada?tab=repositories'
          }, {
            id: 2,
            social: "<i class=\"fas fa-phone\"></i>",
            socialHref: 'tel:79389059767'
          }, {
            id: 3,
            social: "<i class=\"fab fa-whatsapp\"></i>",
            socialHref: 'https://wa.me/79389059767'
          }, {
            id: 4,
            social: "<i class=\"fab fa-telegram\"></i>",
            socialHref: 'https://t.me/Prime_user'
          }],
          formAboutMe: {
            aboutMe: [{
              id: 1,
              gigaText: 'About',
              aboutMeTitle: 'Обо мне',
              aboutMeSubtitle: 'Интерактивный Front-end Developer',
              aboutMeInfo: "\n                \u041C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 \u0410\u0431\u0434\u0443\u043B\u043B\u0430\u0445 \u0413\u0435\u0437\u0438\u0445\u0430\u043D\u043E\u0432 24-\u0445 \u043B\u0435\u0442\u043D\u0438\u0439 \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0439\n                <br/>\n                <strong>junior frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A.</strong>\n                \u041C\u043E\u0439 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0432\u0435\u0440\u0441\u0442\u043A\u0438 \u0438 JavaScript \u043D\u0430\u0447\u0430\u043B\u0441\u044F \u0441\n                \u043D\u0430\u0447\u0430\u043B\u0430 2020 \u0433\u043E\u0434\u0430 \u0421\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E \u0441 \u043D\u0430\u0442\u0438\u0432\u043D\u044B\u043C JavaScript\n                \u0438\u0437\u0443\u0447\u0430\u044E <strong>Angular, React, Stencil.</strong>\n                \u041C\u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u0440\u0430\u0437\u044C\u0438\u0440\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u043E\u0432\u044B\u043C\u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F\u043C\u0438 \u0438\n                \u043F\u043E\u0432\u044B\u0448\u0430\u0442\u044C \u043E\u043F\u044B\u0442 \u0438 \u043D\u0430\u0432\u044B\u043A\u0438 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u0440\u0435\u0448\u0430\u044F \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0438\u0435\n                \u0437\u0430\u0434\u0430\u0447\u0438 \u0438 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u044F \u0443\u043C\u043D\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0432\n                \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0432\u044D\u0431 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439.\n                <br/>\n                \u0420\u0430\u0431\u043E\u0442\u0430 \u0441 \u043A\u043E\u0434\u043E\u043C \u0438 \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u044F \u043D\u043E\u0432\u043E\u0433\u043E \u043C\u043E\u0435 \u0445\u043E\u0431\u0431\u0438 \u0438 \u043C\u043E\u044F \u0446\u0435\u043B\u044C\n                \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u044F \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u044E, \u043D\u043E \u0442\u0430\u043A\u0436\u0435 \u0438 \u043D\u0430\u0441\u043B\u0430\u0436\u0434\u0430\u044E\u0441\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u043C.",
              icons: [{
                id: 1,
                icon: "\n                <i class=\"fab fa-angular\"></i>"
              }, {
                id: 2,
                icon: "\n                <i class=\"fab fa-react\"></i>"
              }, {
                id: 3,
                icon: "\n                <i class=\"fab fa-css3-alt\"></i>"
              }, {
                id: 4,
                icon: "\n                <i class=\"fab fa-js\"></i>"
              }]
            }],
            contactForm: [{
              id: 1,
              gigaText: 'Contact',
              contactFormTitle: 'Данные для связи',
              contactFormSubtitle: 'Новый проект, интересная вакансия или даже обсуждения чего-либо за кофе с интересным человеком',
              name: 'Ваше Имя',
              email: 'E-mail',
              message: 'Суть обращения',
              btn: [{
                id: 1,
                btnText: 'Отправить',
                btnSvg: "",
                btnHref: '#'
              }]
            }]
          }
        };
        this.latestWork = {
          id: 1,
          subtitle: 'CASE STUDIES',
          title: 'Последние работы',
          latestWorksBlock: [{
            id: 1,
            number: '01',
            img: 'wibbitz.png',
            title: 'Project Wibbitz',
            subtitle: 'Wibbitz - Ре сурсный Центр',
            btn: [{
              btnText: 'К проекту',
              btnHref: 'https://wokh-dada.github.io/wibbitzInAngular/',
              btnSvg: "<svg class=\"buttonIcon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.213 476.213\">\n               <path d=\"M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607\"></path>\n             </svg>",
              btnComplited: true
            }]
          }, {
            id: 2,
            number: '02',
            img: 'companyCards.png',
            title: 'Company Cards',
            subtitle: 'Revolut Business',
            btn: [{
              btnHref: 'https://wokh-dada.github.io/companyCardsInAngular/',
              btnText: 'К проекту',
              btnSvg: "<svg class=\"buttonIcon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.213 476.213\">\n               <path d=\"M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607\"></path>\n             </svg>",
              btnComplited: true
            }]
          }, {
            id: 3,
            number: '03',
            img: 'wantBot.png',
            title: 'Хочу бота',
            subtitle: 'Разработать чат-бот',
            btn: [{
              btnText: 'К проекту',
              btnHref: 'https://wokh-dada.github.io/botDevelAppInAngular/',
              btnSvg: "<svg class=\"buttonIcon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 476.213 476.213\">\n               <path d=\"M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607\"></path>\n             </svg>",
              btnComplited: true
            }]
          }]
        };
        this.experiments = {
          id: 1,
          subtitle: 'ЭКСПЕРИМЕНТЫ И ОТКРЫТЫЙ ИСТОЧНИК',
          title: 'Веб это весело.',
          experimentsBlock: [{
            id: 1,
            img: '',
            title: 'TITLE',
            subtitle: '3D-cards'
          }, {
            id: 2,
            img: '',
            title: 'TITLE',
            subtitle: '3D-cards'
          }, {
            id: 3,
            img: '',
            title: 'TITLE',
            subtitle: '3D-cards'
          }, {
            id: 4,
            img: '',
            title: 'TITLE',
            subtitle: '3D-cards'
          }]
        };
        this.footer = {
          id: 1,
          logoname: "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"my-svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 256 256\">\n            <path fill=\"#FFF\" d=\"M53.2 145.1l81.9-71.7h-34.3L19 145.1l102.8 90h34.3l-102.9-90\"></path>\n            <g fill=\"#FFF\">\n              <path\n                 d=\"M145.3 145.1l36-31.6s.8-.7 1.1-1l2.4-2.4c8.5-10.3 13.3-23.3 13.3-36.7 0-31.8-25.8-57.7-57.6-57.7l-111.1.1L7.2 38.6l111.4-.1h21.9c19.2 0 34.8 15.6 34.8 34.8 0 8.2-2.7 15.8-8 22.2-1 1.3-8.3 7.3-8.3 7.3l-12.4 10.6-35.6 31.7 102.9 90h34.3l-102.9-90zm33.4-31.7h.2-.2z\"></path>\n              <path\n                 d=\"M252.8 236.9h-39.6l-.5-.4-104.4-91.3 37.1-33 12.5-10.6c3.5-2.9 7.5-6.3 8.1-7 5-6 7.6-13.3 7.6-21.1 0-18.2-14.8-33.1-33.1-33.1H3L28.6 14h115.8l-.1.1c31 2 55.6 27.8 55.6 59.3 0 13.6-4.9 27.1-13.7 37.8-.5.6-2.2 2.3-2.6 2.6-.3.3-1.2 1-1.2 1l-.5.4-34 29.8 104.9 91.9zm-38.3-3.5h29l-100.9-88.3 34.1-29.9h-2.2l3.6-3.5h1v1.5l1.6-1.4c.2-.2.4-.4.6-.5.4-.3 1.9-1.9 2.2-2.2 8.3-10.1 12.9-22.8 12.9-35.6 0-30.8-25.1-55.9-55.9-55.9h-3.9l-106.5-.1-18.8 19.4 109-.1h20.1c20.2 0 36.6 16.4 36.6 36.6 0 8.6-2.9 16.6-8.4 23.3-1 1.3-7.3 6.5-8.5 7.5l-12.4 10.6-34.1 30.3 100.9 88.3z\"></path>\n              <g>\n                <path\n                   d=\"M249.3 235.5h-35.5l-.1-.1-103.2-90.3.3-.3 35.6-31.7 12.4-10.6c2.5-2.1 7.5-6.2 8.3-7.2 5.1-6.2 7.9-13.8 7.9-21.9 0-19-15.4-34.4-34.4-34.4H6.2l23-23.7h.2l112.1-.1c31.6.5 57.1 26.4 57.1 58.1 0 13.3-4.8 26.5-13.4 37-.4.5-2.1 2.2-2.4 2.5-.3.3-1.1 1-1.1 1l-.1.1-35.5 31.2 103.2 90.4zm-35.3-.8h33l-102.4-89.6 36.4-32c.2-.2.7-.6 1-.9.3-.3 2-1.9 2.4-2.4 8.5-10.3 13.2-23.3 13.2-36.4 0-31.5-25.7-57.2-57.2-57.3h-1l-110 .1L8 38.2l111-.1h21.5c19.4 0 35.2 15.8 35.2 35.2 0 8.3-2.8 16-8 22.4-1 1.3-8.1 7.1-8.4 7.3l-12.4 10.6-35.2 31.4L214 234.7zm-35-120.9h-1.4l1-.8h.4V113.8z\"></path>\n                <path\n                   d=\"M253.9 237.3H213l-.5-.4-104.8-91.7 1.8-1.6 35.6-31.7 12.5-10.6c4-3.3 7.5-6.4 8-7 4.9-5.9 7.5-13.1 7.5-20.8 0-18-14.7-32.7-32.7-32.7H2l26.4-27.2 117.2-.1-.2.2c30.6 2.6 54.8 28.5 54.8 59.6 0 13.7-4.9 27.3-13.8 38.1-.5.6-2.3 2.4-2.6 2.7-.3.3-1.2 1-1.2 1l-.5.4-33.6 29.5 105.4 92.3zm-39.2-4.3h27.7L142 145.1l33.6-29.5h-3.1l4.7-3.8.1-2.6 1.8 2 1.4.1c.2-.1.3-.3.4-.4.4-.3 1.9-1.9 2.2-2.2 8.3-10 12.8-22.6 12.8-35.3 0-30.6-24.9-55.5-55.5-55.5H30.3l-18 18.5 108.4-.1h19.7c20.4 0 37 16.6 37 37 0 8.7-2.9 16.8-8.4 23.5-.7.9-3.5 3.4-8.5 7.5L148 115.1l-33.7 30L214.7 233z\"></path>\n              </g>\n             </g>\n        </svg>",
          copyright: '@ 2020 Gezikhanov Abdullakh',
          iconTheme: "<i class=\"fas fa-adjust\"></i>",
          nav: [{
            id: 1,
            social: 'github',
            socialHref: 'https://github.com/Wokh-Dada?tab=repositories'
          }, {
            id: 2,
            social: 'Позвонить',
            socialHref: 'tel:79389059767'
          }, {
            id: 3,
            social: 'WhatsApp',
            socialHref: 'https://wa.me/79640731348'
          }, {
            id: 4,
            social: 'Instagram',
            socialHref: 'https://www.instagram.com/gezikhanov.a/'
          }]
        };
      }

      _createClass(PortfolioStoreService, [{
        key: "getHeader",
        value: function getHeader() {
          return this.header;
        }
      }, {
        key: "getLatestWork",
        value: function getLatestWork() {
          return this.latestWork;
        }
      }, {
        key: "getExperiments",
        value: function getExperiments() {
          return this.experiments;
        }
      }, {
        key: "getFooter",
        value: function getFooter() {
          return this.footer;
        }
      }]);

      return PortfolioStoreService;
    }();

    PortfolioStoreService.ɵfac = function PortfolioStoreService_Factory(t) {
      return new (t || PortfolioStoreService)();
    };

    PortfolioStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PortfolioStoreService,
      factory: PortfolioStoreService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioStoreService, [{
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


    var portfolio_site_v1_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! portfolio-site-v1/loader */
    "./node_modules/portfolio-site-v1/loader/index.es2017.mjs");
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

    Object(portfolio_site_v1_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);
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
    /*! C:\Users\User\Desktop\angular\portfolioInAngular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map