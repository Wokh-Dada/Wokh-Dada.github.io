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
  "./node_modules/abdullakh-wibbitz-v2/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!**************************************************************************************************************************************************!*\
    !*** ./node_modules/abdullakh-wibbitz-v2/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \**************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAbdullakhWibbitzV2DistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./my-component_23.entry.js": ["./node_modules/abdullakh-wibbitz-v2/dist/esm/my-component_23.entry.js", "stencil-my-component_23-entry-js"]
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

    webpackAsyncContext.id = "./node_modules/abdullakh-wibbitz-v2/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
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
    /* harmony import */


    var _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./first-page/first-page.component */
    "./src/app/first-page/first-page.component.ts");
    /* harmony import */


    var _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./second-page/second-page.component */
    "./src/app/second-page/second-page.component.ts");

    var routes = [{
      component: _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_2__["FirstPageComponent"],
      path: ''
    }, {
      component: _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_3__["SecondPageComponent"],
      path: 'theme_2'
    }];

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


    var _service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./service.service */
    "./src/app/service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(headerStore, router) {
        _classCallCheck(this, AppComponent);

        this.headerStore = headerStore;
        this.router = router;
        /**
         * boolean кнопки преключения тем
         **/

        this.theme = true;
      }
      /**
       * путь к логотипу
       * */


      _createClass(AppComponent, [{
        key: "logo",
        value: function logo() {
          return this.headerStore.getHeaderItems().logoUrl;
        }
        /**
         * путь к меню
         * */

      }, {
        key: "menu",
        value: function menu() {
          return this.headerStore.getHeaderItems().menu;
        }
        /**
         * функция переключения тем
         **/

      }, {
        key: "clickOnTheme",
        value: function clickOnTheme() {
          this.theme = !this.theme;
        }
        /**
         * клик по элементам Toggle theme
         */

      }, {
        key: "clickOnSwitchTheme",
        value: function clickOnSwitchTheme(_ref) {
          var detail = _ref.detail;

          if (detail.id === 'theme_1') {
            this.router.navigate(['']);
          } else if (detail.id === 'theme_2') {
            this.router.navigate(['theme_2']);
          }
        }
        /**
         * текст кнопки header
         * */

      }, {
        key: "searchSubscribe",
        value: function searchSubscribe() {
          return this.headerStore.getHeaderItems().searchSubscribe;
        }
        /**
         * клик по элементам Header
         */

      }, {
        key: "clickOnHeader",
        value: function clickOnHeader(_ref2) {
          var detail = _ref2.detail;
          return console.log('clickOnHeader:', detail);
        }
        /*****footer****/

        /**
         * путь к логотипу
         * */

      }, {
        key: "footer",
        value: function footer() {
          return this.headerStore.getFooter();
        }
        /**
         * клик по элементам Footer
         */

      }, {
        key: "clickOnFooter",
        value: function clickOnFooter(_ref3) {
          var detail = _ref3.detail;
          return console.log('clickOnHeader:', detail);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 5,
      consts: [[3, "logoUrl", "menu", "theme", "searchSubscribe", "clickOnTheme", "clickOnHeader", "clickOnSwitchTheme"], [3, "footer", "clickOnFooter"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "s-abdullakh-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnTheme", function AppComponent_Template_s_abdullakh_header_clickOnTheme_0_listener() {
            return ctx.clickOnTheme();
          })("clickOnHeader", function AppComponent_Template_s_abdullakh_header_clickOnHeader_0_listener($event) {
            return ctx.clickOnHeader($event);
          })("clickOnSwitchTheme", function AppComponent_Template_s_abdullakh_header_clickOnSwitchTheme_0_listener($event) {
            return ctx.clickOnSwitchTheme($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "s-abdullakh-footer", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnFooter", function AppComponent_Template_s_abdullakh_footer_clickOnFooter_2_listener($event) {
            return ctx.clickOnFooter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("logoUrl", ctx.logo())("menu", ctx.menu())("theme", ctx.theme)("searchSubscribe", ctx.searchSubscribe());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footer", ctx.footer());
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
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
          type: _service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
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
    /* harmony import */


    var _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./first-page/first-page.component */
    "./src/app/first-page/first-page.component.ts");
    /* harmony import */


    var _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./second-page/second-page.component */
    "./src/app/second-page/second-page.component.ts");

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
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_4__["FirstPageComponent"], _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_5__["SecondPageComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_4__["FirstPageComponent"], _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_5__["SecondPageComponent"]],
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
  "./src/app/first-page/first-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/first-page/first-page.component.ts ***!
    \****************************************************/

  /*! exports provided: FirstPageComponent */

  /***/
  function srcAppFirstPageFirstPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstPageComponent", function () {
      return FirstPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service.service */
    "./src/app/service.service.ts");

    var FirstPageComponent = /*#__PURE__*/function () {
      function FirstPageComponent(firstPageStore) {
        _classCallCheck(this, FirstPageComponent);

        this.firstPageStore = firstPageStore;
      }

      _createClass(FirstPageComponent, [{
        key: "getFirsrPageItems",
        value: function getFirsrPageItems() {
          return this.firstPageStore.getFirsrPageItems();
        }
        /*news-a*/

      }, {
        key: "newsImg",
        value: function newsImg() {
          return this.firstPageStore.newsImg();
        }
      }, {
        key: "news",
        value: function news() {
          return this.firstPageStore.news();
        }
      }, {
        key: "sidebar",
        value: function sidebar() {
          return this.firstPageStore.sidebar();
        }
        /**
         * клик по элементам clickOnNews
         */

      }, {
        key: "clickOnNews",
        value: function clickOnNews(_ref4) {
          var detail = _ref4.detail;
          return console.log("clickOnNews:", detail);
        }
        /*news-a*/

        /*new-post*/

      }, {
        key: "newPostTitle",
        value: function newPostTitle() {
          return this.firstPageStore.getFirsrPageItems().newPostTitle;
        }
      }, {
        key: "newPost",
        value: function newPost() {
          return this.firstPageStore.getFirsrPageItems().newPost;
        }
        /**
         * клик по ссылке read report в компоненте newpost
         */

      }, {
        key: "clickOnNewPost",
        value: function clickOnNewPost(_ref5) {
          var detail = _ref5.detail;
          return console.log("clickOnNewPost:", detail);
        }
        /*new-post*/

        /*popular-resources*/

      }, {
        key: "popularAsideTitle",
        value: function popularAsideTitle() {
          return this.firstPageStore.getFirsrPageItems().popularAsideTitle;
        }
      }, {
        key: "popularAside",
        value: function popularAside() {
          return this.firstPageStore.getFirsrPageItems().popularAside;
        }
      }, {
        key: "popularBanner",
        value: function popularBanner() {
          return this.firstPageStore.getFirsrPageItems().popularBanner;
        }
        /**
         * клик по элементам aside sidebar в компоненте popular resources
         */

      }, {
        key: "clickOnPopular",
        value: function clickOnPopular(_ref6) {
          var detail = _ref6.detail;
          return console.log("clickOnPopular:", detail);
        }
        /*popular-resources*/

        /*events-a*/

      }, {
        key: "eventsTitle",
        value: function eventsTitle() {
          return this.firstPageStore.getFirsrPageItems().eventsTitle;
        }
      }, {
        key: "events",
        value: function events() {
          return this.firstPageStore.getFirsrPageItems().events;
        }
        /**
         * клик по ссылке read report в компоненте newpost
         */

      }, {
        key: "clickOnEvents",
        value: function clickOnEvents(_ref7) {
          var detail = _ref7.detail;
          return console.log("clickOnEvents:", detail);
        }
        /*events-a*/

        /*listener*/

      }, {
        key: "newlistner",
        value: function newlistner() {
          return this.firstPageStore.getFirsrPageItems().newlistner;
        }
        /**
         * клик по button в компоненете Listiner
         */

      }, {
        key: "clickOnListiner",
        value: function clickOnListiner(_ref8) {
          var detail = _ref8.detail;
          return console.log("clickOnListiner:", detail);
        }
        /*listener*/

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FirstPageComponent;
    }();

    FirstPageComponent.ɵfac = function FirstPageComponent_Factory(t) {
      return new (t || FirstPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]));
    };

    FirstPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FirstPageComponent,
      selectors: [["app-first-page"]],
      decls: 5,
      vars: 11,
      consts: [[3, "newsImg", "news", "sidebar", "clickOnNews"], [3, "newPostTitle", "newPost", "clickOnNewPost"], [3, "popularAsideTitle", "popularAside", "popularBanner", "clickOnPopular"], [3, "eventsTitle", "events", "clickOnEvents"], [3, "newlistner", "clickOnListiner"]],
      template: function FirstPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "s-abdullakh-news", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnNews", function FirstPageComponent_Template_s_abdullakh_news_clickOnNews_0_listener($event) {
            return ctx.clickOnNews($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "s-abdullakh-new-post", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnNewPost", function FirstPageComponent_Template_s_abdullakh_new_post_clickOnNewPost_1_listener($event) {
            return ctx.clickOnNewPost($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "s-abdullakh-popular-resources", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnPopular", function FirstPageComponent_Template_s_abdullakh_popular_resources_clickOnPopular_2_listener($event) {
            return ctx.clickOnPopular($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "s-abdullakh-events", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnEvents", function FirstPageComponent_Template_s_abdullakh_events_clickOnEvents_3_listener($event) {
            return ctx.clickOnEvents($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "s-abdullakh-new-listiner", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnListiner", function FirstPageComponent_Template_s_abdullakh_new_listiner_clickOnListiner_4_listener($event) {
            return ctx.clickOnListiner($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newsImg", ctx.newsImg())("news", ctx.news())("sidebar", ctx.sidebar());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newPostTitle", ctx.newPostTitle())("newPost", ctx.newPost());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popularAsideTitle", ctx.popularAsideTitle())("popularAside", ctx.popularAside())("popularBanner", ctx.popularBanner());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("eventsTitle", ctx.eventsTitle())("events", ctx.events());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newlistner", ctx.newlistner());
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcnN0LXBhZ2UvZmlyc3QtcGFnZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-first-page',
          templateUrl: './first-page.component.html',
          styleUrls: ['./first-page.component.css']
        }]
      }], function () {
        return [{
          type: _service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/second-page/second-page.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/second-page/second-page.component.ts ***!
    \******************************************************/

  /*! exports provided: SecondPageComponent */

  /***/
  function srcAppSecondPageSecondPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecondPageComponent", function () {
      return SecondPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service.service */
    "./src/app/service.service.ts");

    var SecondPageComponent = /*#__PURE__*/function () {
      function SecondPageComponent(secondPageStore) {
        _classCallCheck(this, SecondPageComponent);

        this.secondPageStore = secondPageStore;
      }
      /*listener*/


      _createClass(SecondPageComponent, [{
        key: "blog",
        value: function blog() {
          return this.secondPageStore.getBlogItems().p;
        }
      }, {
        key: "newlistner",
        value: function newlistner() {
          return this.secondPageStore.getFirsrPageItems().newlistner;
        }
        /**
         * клик по button в компоненете Listiner
         */

      }, {
        key: "clickOnListiner",
        value: function clickOnListiner(_ref9) {
          var detail = _ref9.detail;
          return console.log("clickOnListiner:", detail);
        }
        /*listener*/

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SecondPageComponent;
    }();

    SecondPageComponent.ɵfac = function SecondPageComponent_Factory(t) {
      return new (t || SecondPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]));
    };

    SecondPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SecondPageComponent,
      selectors: [["app-second-page"]],
      decls: 2,
      vars: 2,
      consts: [[3, "p"], [3, "newlistner", "clickOnListiner"]],
      template: function SecondPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "s-abdullakh-app-blog", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "s-abdullakh-new-listiner", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnListiner", function SecondPageComponent_Template_s_abdullakh_new_listiner_clickOnListiner_1_listener($event) {
            return ctx.clickOnListiner($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p", ctx.blog());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newlistner", ctx.newlistner());
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY29uZC1wYWdlL3NlY29uZC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-second-page',
          templateUrl: './second-page.component.html',
          styleUrls: ['./second-page.component.css']
        }]
      }], function () {
        return [{
          type: _service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service.service.ts":
  /*!************************************!*\
    !*** ./src/app/service.service.ts ***!
    \************************************/

  /*! exports provided: ServiceService */

  /***/
  function srcAppServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceService", function () {
      return ServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServiceService = /*#__PURE__*/function () {
      function ServiceService() {
        _classCallCheck(this, ServiceService);

        this.header = {
          logoUrl: "https://48vo7843c3543dkn9cvt8sl1-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/logo.svg",
          menu: [{
            id: 'Articles',
            linkName: 'Articles'
          }, {
            id: 'Events',
            linkName: 'Events'
          }, {
            id: 'Reports',
            linkName: 'Reports'
          }, {
            id: 'Costumer Stories',
            linkName: 'Costumer Stories'
          }],
          searchSubscribe: [{
            searchIcon: 'search',
            subscribeText: 'Subscribe'
          }]
        };
        this.firstPage = {
          newsImg: "https://images.unsplash.com/photo-1589400369397-3363f6afeada?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          news: [{
            category: 'Blog Post',
            title: 'How to opimize your Facebook & Instagram video ads for succes',
            subtitle: 'Instagram and Facebook video ads qre extremely popular among marketers these days. Not only are they more engaging and entertaining, they`re loved by many...',
            btnText: 'Read Story'
          }],
          sidebar: [{
            category: 'Report',
            title: 'Explore Intagram Video: How to convert, engage, and get more Intagra...',
            btnText: 'Read Report',
            widgetImg: 'https://via.placeholder.com/201x180?text=sidebar'
          }, {
            category: 'Blog Post',
            title: 'Explore Intagram Video: How to convert, engage, and get more Intagra...',
            btnText: 'Read Report',
            widgetImg: 'https://via.placeholder.com/201x180?text=sidebar'
          }, {
            category: 'Webinar',
            title: 'Explore Intagram Video: How to convert, engage, and get more Intagra...',
            btnText: 'Read Report',
            widgetImg: 'https://via.placeholder.com/201x180?text=sidebar'
          }, {
            category: 'Report',
            title: 'Explore Intagram Video: How to convert, engage, and get more Intagra...',
            btnText: 'Read Report',
            widgetImg: 'https://via.placeholder.com/201x180?text=sidebar'
          }],
          newPostTitle: 'New Blog Posts',
          newPost: [{
            img: "https://via.placeholder.com/201x180?text=newPost",
            block: 'new-post',
            category: 'Blog Post',
            title: '4 organic ways to improve your website KPIs',
            btnText: 'Read Report'
          }, {
            img: "https://via.placeholder.com/201x180?text=newPost",
            block: 'new-post',
            category: 'Blog Post',
            title: 'How to turn your next event into a video content goldmine',
            btnText: 'Read Report'
          }, {
            img: "https://via.placeholder.com/201x180?text=newPost",
            block: 'new-post',
            category: 'Blog Post',
            title: 'How to quickly turn ypur podcast into a video script',
            btnText: 'Read Report'
          }],
          popularAsideTitle: 'Popular Resources',
          popularAside: [{
            category: 'Blog Post',
            title: 'Micro-influencers and B2C brand videos: A match made in heaven',
            btnText: 'Read Story',
            asidetImg: 'https://via.placeholder.com/201x180?text=popularAside'
          }, {
            category: 'Webinar',
            title: 'Webinar: Improving content marketing through visual storytelling',
            btnText: 'Watch Webinar',
            asidetImg: 'https://via.placeholder.com/201x180?text=popularAside'
          }, {
            category: 'Report',
            title: 'How to reach audiences with social video: From Millennials to Gen Z',
            btnText: 'Read Report',
            asidetImg: 'https://via.placeholder.com/201x180?text=popularAside'
          }],
          popularBanner: [{
            id: 'popularBanner',
            title: 'Storyteller Circle Event Series',
            btnText: 'Watch Webinar'
          }],
          eventsTitle: 'Upcoming Events',
          events: [{
            img: "https://via.placeholder.com/201x180?text=Event",
            block: 'events',
            category: 'Blog Post',
            title: '4 organic ways to improve your website KPIs',
            btnText: 'Read Report'
          }, {
            img: "https://via.placeholder.com/201x180?text=Event",
            block: 'events',
            category: 'Blog Post',
            title: 'How to turn your next event into a video content goldmine',
            btnText: 'Read Report'
          }, {
            img: "https://via.placeholder.com/201x180?text=Event",
            block: 'events',
            category: 'Blog Post',
            title: 'How to quickly turn ypur podcast into a video script',
            btnText: 'Read Report'
          }],
          newlistner: [{
            listnerTitle: [{
              title: 'Ready to take a test drive?',
              subtitle: 'We`ll help you elevate strategy. Prices starting from $49 a month.',
              linkText: 'See pricing'
            }],
            listnerBtn: [{
              btnText: 'Try it Free',
              theme: true
            }]
          }]
        };
        this.blog = {
          p: [{
            text: "##Add to Story## options streamlined into icons\n" + "2. *Project and Workflow State* are grouped together to better visualize their close relationship\n" + "3. *Story Type* is now placed on the right side when creating a new Story for consistency\n"
          }]
        };
        this.footer = [[{
          firstBlockTitle: 'The online video editor trusted by content creators to make professional video in minutes.',
          icons: [{
            id: 'facebook',
            name: 'facebook'
          }, {
            id: 'twitter',
            name: 'twitter'
          }, {
            id: 'invision',
            name: 'invision'
          }, {
            id: 'instagram',
            name: 'instagram'
          }]
        }], [{
          title: 'Solutions',
          id: 'Solutions',
          items: [{
            id: 'Studio',
            linkName: 'Studio'
          }, {
            id: 'Lightbox',
            linkName: 'Lightbox'
          }, {
            id: 'Wavi',
            linkName: 'Wavi'
          }]
        }], [{
          title: 'Why Wibbitz',
          id: 'Why Wibbitz',
          items: [{
            id: 'Marketing',
            linkName: 'Marketing'
          }, {
            id: 'Social Media',
            linkName: 'Social Media'
          }, {
            id: 'News & Editorial',
            linkName: 'News & Editorial'
          }, {
            id: 'Agencies',
            linkName: 'Agencies'
          }, {
            id: 'Internal',
            linkName: 'Internal'
          }, {
            id: 'Communications',
            linkName: 'Communications'
          }, {
            id: 'Enterprice',
            linkName: 'Enterprice'
          }]
        }], [{
          title: 'Resources',
          id: 'Resources',
          items: [{
            id: 'Blog',
            linkName: 'Blog'
          }, {
            id: 'Customers',
            linkName: 'Customers'
          }, {
            id: 'Video Showcase',
            linkName: 'Video Showcase'
          }, {
            id: 'Watch Demo',
            linkName: 'Watch Demo'
          }]
        }], [{
          title: 'Pricing',
          id: 'Pricing',
          items: [{
            id: '',
            linkName: ''
          }]
        }, {
          title: 'Company',
          items: [{
            id: 'About Us',
            linkName: 'About Us'
          }, {
            id: 'Jobs',
            linkName: 'Jobs'
          }, {
            id: 'Press',
            linkName: 'Press'
          }]
        }, {
          title: 'Legal',
          items: [{
            id: 'Terms and Conditions',
            linkName: 'Terms and Conditions'
          }, {
            id: 'Privacy Policy',
            linkName: 'Privacy Policy'
          }]
        }]];
      }

      _createClass(ServiceService, [{
        key: "getHeaderItems",
        value: function getHeaderItems() {
          return this.header;
        }
      }, {
        key: "getFirsrPageItems",
        value: function getFirsrPageItems() {
          return this.firstPage;
        }
      }, {
        key: "newsImg",
        value: function newsImg() {
          return this.firstPage.newsImg;
        }
      }, {
        key: "news",
        value: function news() {
          return this.firstPage.news;
        }
      }, {
        key: "sidebar",
        value: function sidebar() {
          return this.firstPage.sidebar;
        }
      }, {
        key: "getBlogItems",
        value: function getBlogItems() {
          return this.blog;
        }
      }, {
        key: "getFooter",
        value: function getFooter() {
          return this.footer;
        }
      }]);

      return ServiceService;
    }();

    ServiceService.ɵfac = function ServiceService_Factory(t) {
      return new (t || ServiceService)();
    };

    ServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ServiceService,
      factory: ServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceService, [{
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


    var abdullakh_wibbitz_v2_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! abdullakh-wibbitz-v2/loader */
    "./node_modules/abdullakh-wibbitz-v2/loader/index.es2017.mjs");
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

    Object(abdullakh_wibbitz_v2_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);
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
    /*! C:\Users\User\Desktop\angular\wibbitzInAngular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map