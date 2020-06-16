(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/s-abdullakh-botdevelopmentapp/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/s-abdullakh-botdevelopmentapp/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./my-component_20.entry.js": [
		"./node_modules/s-abdullakh-botdevelopmentapp/dist/esm/my-component_20.entry.js",
		"stencil-my-component_20-entry-js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/s-abdullakh-botdevelopmentapp/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bot_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bot-store.service */ "./src/app/bot-store.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function () { return { "backgroundImage": "url(https://static.tildacdn.com/tild3838-6433-4637-a435-313133666535/bg.svg)" }; };
class AppComponent {
    constructor(botStore) {
        this.botStore = botStore;
    }
    /**
     * клик по элементам компонента header
     */
    clickOnHeader({ detail }) {
        return console.log("clickOnHeader:", detail);
    }
    getHeader() {
        return this.botStore.getHeader();
    }
    /**
     * клик по элементам компонента product-presentation
     */
    clickOnProductPresentation({ detail }) {
        return console.log("clickOnProductPresentation:", detail);
    }
    getProductPresentation() {
        return this.botStore.getProductPresentation();
    }
    /**
     * клик по элементам компонента product-information
     */
    clickOnProductInformation({ detail }) {
        return console.log("clickOnProductInformation:", detail);
    }
    getProductInformation() {
        return this.botStore.getProductInformation();
    }
    /**
     * клик по элементам компонента product-presentation
     */
    clickOnTransitionCreateBot({ detail }) {
        return console.log("clickOnTransitionCreateBot:", detail);
    }
    getTransitionCreateBot() {
        return this.botStore.getTransitionCreateBot();
    }
    /**
     * клик по элементам блока PerformanceandBenefitsbckgrnd
     */
    PerformanceandBenefitsbckgrnd({ detail }) {
        return console.log("PerformanceandBenefitsbckgrnd:", detail);
    }
    getPerformanceandBenefitsbckgrnd() {
        return this.botStore.getPerformanceandBenefitsbckgrnd();
    }
    /**
     * клик по элементам компонента PerformanceInformation
     */
    clickOnPerformanceInformation({ detail }) {
        return console.log("PerformanceInformation:", detail);
    }
    getPerformanceInformation() {
        return this.botStore.getPerformanceInformation();
    }
    /**
     * клик по элементам компонента BenefitsBots
     */
    clickOnBenefitsBots({ detail }) {
        return console.log("BenefitsBots:", detail);
    }
    getBenefitsBots() {
        return this.botStore.getBenefitsBots();
    }
    /**
     * клик по элементам компонента Consultation
     */
    clickOnConsultation({ detail }) {
        return console.log("Consultation:", detail);
    }
    gethConsultation() {
        return this.botStore.gethConsultation();
    }
    /**
     * клик по элементам компонента Tariffs
     */
    clickOnTariffs({ detail }) {
        return console.log("Tariffs:", detail);
    }
    gethTariffs() {
        return this.botStore.gethTariffs();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bot_store_service__WEBPACK_IMPORTED_MODULE_1__["BotStoreService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 10, consts: [[3, "header", "clickOnHeader"], [3, "ProductPresentation", "clickOnProductPresentation"], [3, "ProductInformation", "clickOnProductInformation"], [3, "TransitionCreateBot", "clickOnTransitionCreateBot"], [1, "PerformanceandBenefitsbckgrnd", 3, "ngStyle"], [3, "PerformanceInformation", "clickOnPerformanceInformation"], [3, "BenefitsBots", "clickOnBenefitsBots"], [3, "Consultation", "clickOnConsultation"], [3, "Tariffs", "clickOnTariffs"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "s-abdullakh-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnHeader", function AppComponent_Template_s_abdullakh_header_clickOnHeader_1_listener($event) { return ctx.clickOnHeader($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "s-abdullakh-product-presentation", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnProductPresentation", function AppComponent_Template_s_abdullakh_product_presentation_clickOnProductPresentation_2_listener($event) { return ctx.clickOnProductPresentation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "s-abdullakh-product-information", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnProductInformation", function AppComponent_Template_s_abdullakh_product_information_clickOnProductInformation_3_listener($event) { return ctx.clickOnProductInformation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "s-abdullakh-transition-create-bot", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnTransitionCreateBot", function AppComponent_Template_s_abdullakh_transition_create_bot_clickOnTransitionCreateBot_4_listener($event) { return ctx.clickOnTransitionCreateBot($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "s-abdullakh-performance-information", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnPerformanceInformation", function AppComponent_Template_s_abdullakh_performance_information_clickOnPerformanceInformation_6_listener($event) { return ctx.clickOnPerformanceInformation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "s-abdullakh-benefits-bots", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnBenefitsBots", function AppComponent_Template_s_abdullakh_benefits_bots_clickOnBenefitsBots_7_listener($event) { return ctx.clickOnBenefitsBots($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "s-abdullakh-consultation", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnConsultation", function AppComponent_Template_s_abdullakh_consultation_clickOnConsultation_8_listener($event) { return ctx.clickOnConsultation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "s-abdullakh-tariffs", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnTariffs", function AppComponent_Template_s_abdullakh_tariffs_clickOnTariffs_9_listener($event) { return ctx.clickOnTariffs($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.getHeader());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ProductPresentation", ctx.getProductPresentation());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ProductInformation", ctx.getProductInformation());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("TransitionCreateBot", ctx.getTransitionCreateBot());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("PerformanceInformation", ctx.getPerformanceInformation());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("BenefitsBots", ctx.getBenefitsBots());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Consultation", ctx.gethConsultation());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Tariffs", ctx.gethTariffs());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _bot_store_service__WEBPACK_IMPORTED_MODULE_1__["BotStoreService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/bot-store.service.ts":
/*!**************************************!*\
  !*** ./src/app/bot-store.service.ts ***!
  \**************************************/
/*! exports provided: BotStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotStoreService", function() { return BotStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BotStoreService {
    constructor() {
        this.header = {
            id: 'header',
            logoUrl: "https://static.tildacdn.com/tild3532-3833-4936-a237-616331303266/5.jpg",
            phoneNumber: '+7 995 606 84 62',
            menu: [
                { id: 1, linkName: 'Возможности' },
                { id: 2, linkName: 'Преимущества' },
                { id: 3, linkName: 'Для кого' }
            ]
        };
        this.ProductPresentation = {
            imgUrl: "https://static.tildacdn.com/tild6438-3564-4763-b064-353463373538/phone.svg",
            icon: [
                { id: 'whatsApp', img: 'https://static.tildacdn.com/tild6666-6137-4538-b264-353465333332/waaa.svg' },
                { id: 'telegram', img: 'https://static.tildacdn.com/tild3638-6633-4764-a662-653739626663/telegram.png' },
                { id: 'viber', img: 'https://static.tildacdn.com/tild3161-6165-4964-a137-616535383837/viber.png' },
                { id: 'mes', img: 'https://static.tildacdn.com/tild6430-3636-4533-b661-613233343835/fb.svg' },
                { id: 'vk', img: 'https://static.tildacdn.com/tild6465-3664-4032-a239-373162326538/vk.svg' },
            ],
            title: [
                {
                    id: 1,
                    text: "Сделаем\n" +
                        "\nчат-бота для\n" +
                        "\nтвоего бизнеса\n",
                    imgUrl: "https://static.tildacdn.com/tild3435-6138-4434-b732-643736653037/Vector.svg",
                    behindText: 'за', price: '9 900 ₽',
                    btnText: 'Создать бота'
                },
            ]
        };
        this.ProductInformation = {
            title: "Что умеют чат-боты",
            infoBlock: [
                {
                    id: 1,
                    outerImg: 'https://static.tildacdn.com/tild3430-3262-4337-b730-313335633963/44.svg',
                    innerImg: 'https://static.tildacdn.com/tild3532-3939-4562-b663-663931636265/rocket_1.svg',
                    text: `
            Чат-бот может приводить вам
                <strong>
                    <span style="color: rgb(255, 208, 0);">
                        новых клиентов
                    </span>
                </strong>`,
                    btnText: 'То, что мне нужно!'
                },
                {
                    id: 2,
                    outerImg: 'https://static.tildacdn.com/tild6630-3366-4334-b333-646634656662/Group_27.svg',
                    innerImg: 'https://static.tildacdn.com/tild3362-3036-4664-a637-396261393335/profit_1.svg',
                    text: `
            Чат-бот может
              <strong>
                <span data-redactor-tag="span" style="color: rgb(255, 208, 0);">
                    увеличить конверсию
                </span>
              </strong> вашего сайта или повторные продажи имеющимся клиентам`,
                    btnText: 'Хочу такого!'
                },
                {
                    id: 3,
                    outerImg: 'https://static.tildacdn.com/tild3430-3262-4337-b730-313335633963/44.svg',
                    innerImg: 'https://static.tildacdn.com/tild6438-3839-4237-b463-636463636537/training_1.svg',
                    text: `
            Чат-бот может
            <span style="color: rgb(255, 208, 0);">
              <strong>обучать </strong>
            </span>
            ваших клиентов и
             <strong>
               <span style="color: rgb(255, 208, 0);">
                 сотрудников
               </span>
             </strong>`,
                    btnText: 'Точно для нас!'
                },
                {
                    id: 4,
                    outerImg: 'https://static.tildacdn.com/tild3430-3262-4337-b730-313335633963/44.svg',
                    innerImg: 'https://static.tildacdn.com/tild3833-3830-4664-a363-313436303033/chatbot_1.svg',
                    text: `
            Чат-бот может выполнять роли секретаря, администратора,
            продавца. специалиста техподдержки,
            <strong>
              <span style="color: rgb(255, 208, 0);">
                сопровождая
              </span>
            </strong>
            ваших
            <span style="color: rgb(255, 208, 0);">
              <strong>
                клиентов
              </strong>
            </span>
            по всему циклу сделки.`,
                    btnText: 'Подходит!'
                },
                {
                    id: 5,
                    outerImg: 'https://static.tildacdn.com/tild3430-3262-4337-b730-313335633963/44.svg',
                    innerImg: 'https://static.tildacdn.com/tild3333-3336-4335-b164-356134623438/plane_1.svg',
                    text: `
            Чат-бот может рассылать вашим клиентам полезную
            информацию, подготовить их к покупке,
            <strong>
              <span style="color: rgb(255, 208, 0);">
                осуществить допродажу
              </span>
            </strong> дополнительных
            товаров или услуг.`,
                    btnText: 'Идеально, беру!'
                },
            ]
        };
        this.TransitionCreateBot = {
            title: [
                {
                    id: 1,
                    imgUrl: "https://static.tildacdn.com/tild6161-3938-4737-a531-663931386535/undraw_chat_bot_kli5.svg",
                    title: `Создай <br/> своего бота`
                },
            ],
            follow: [
                {
                    id: 2,
                    text: `Выберите необходимый
         функционал бота в этой
         форме чтобы
         <strong>
           <span style="color: rgb(255, 208, 0);">
             составить шаблон бота
           </span>
         </strong>`,
                    btnText: 'Создать бота'
                },
            ]
        };
        this.PerformanceandBenefitsbckgrnd = 'https://static.tildacdn.com/tild3838-6433-4637-a435-313133666535/bg.svg';
        this.PerformanceInformation = {
            imgUrl: 'https://static.tildacdn.com/tild3566-3665-4163-b435-653234346164/phone.svg',
            title: 'Где использование ботов будет наиболее эффективным.',
            ContentRightEndText: 'ВАШ БИЗНЕС',
            ContentLeftEndText: 'ВАШ БИЗНЕС',
            btnText: 'Разработать →',
            right: [
                {
                    id: 1,
                    text: 'Агентства недвижимости и застройщики',
                },
                {
                    id: 2,
                    text: 'Дизайн и ремонт квартир',
                },
                {
                    id: 3,
                    text: 'Юридические услуги',
                },
                {
                    id: 4,
                    text: 'Автошколы',
                },
                {
                    id: 5,
                    text: 'Автосервисы',
                },
                {
                    id: 6,
                    text: 'Страховые компании и брокеры',
                },
                {
                    id: 7,
                    text: 'Ремонт бытовой техники',
                },
                {
                    id: 8,
                    text: 'Маникюр, ресницы, перманентный макияж, прически',
                },
                {
                    id: 9,
                    text: 'Медицинские центры',
                }, {
                    id: 10,
                    text: 'Курсы иностранных языков',
                },
                {
                    id: 11,
                    text: 'Изготовление мебели',
                },
                {
                    id: 12,
                    text: 'Транспортные компании (такси, перевозки)',
                },
                {
                    id: 13,
                    text: 'Купля-продажа недвижимости',
                }
            ],
            left: [
                {
                    id: 1,
                    text: 'Еда (Ресторан, доставка)',
                },
                {
                    id: 2,
                    text: 'Одежда, обувь и аксессуары',
                },
                {
                    id: 3,
                    text: 'Автосалоны и запчасти',
                },
                {
                    id: 4,
                    text: 'Товары для ремонта',
                },
                {
                    id: 5,
                    text: 'Товары для дома и дачи',
                },
                {
                    id: 6,
                    text: 'Товары для спорта и отдыха',
                },
                {
                    id: 7,
                    text: 'Товары для красоты и здоровья',
                },
                {
                    id: 8,
                    text: 'Салоны цветов и подарков',
                },
                {
                    id: 9,
                    text: 'Компьютеры, электроника и бытовая техника',
                },
                {
                    id: 10,
                    text: 'Любые интернет-магазины',
                },
                {
                    id: 11,
                    text: 'Игрушки, игры и развлечения',
                },
                {
                    id: 12,
                    text: 'Узкоспециализированные товары',
                },
                {
                    id: 13,
                    text: 'Книги и обучающие материалы',
                },
            ]
        };
        this.BenefitsBots = {
            title: "Преимущества чат-ботов",
            infoBlock: [
                {
                    id: 1,
                    outerImg: 'https://static.tildacdn.com/tild3730-6136-4538-b535-333639386533/Ellipse_12.svg',
                    innerImg: 'https://static.tildacdn.com/tild6462-3862-4966-a361-363238616264/1.svg',
                    title: 'Низкая цена',
                    text: 'Бот поможет оптимизировать затраты на сотрудников'
                },
                {
                    id: 2,
                    outerImg: 'https://static.tildacdn.com/tild3730-6136-4538-b535-333639386533/Ellipse_12.svg',
                    innerImg: 'https://static.tildacdn.com/tild3466-3337-4139-b261-353162653833/2.svg',
                    title: 'Рост конверсии',
                    text: 'Бот увеличивает приток клиентов с сайта, и привлекает новых клиентов'
                },
                {
                    id: 3,
                    outerImg: 'https://static.tildacdn.com/tild3730-6136-4538-b535-333639386533/Ellipse_12.svg',
                    innerImg: 'https://static.tildacdn.com/tild3434-3466-4665-b634-666564303434/3.svg',
                    title: 'Работает 24/7',
                    text: 'Бот не отдыхает, не обедает, не спит'
                },
                {
                    id: 4,
                    outerImg: 'https://static.tildacdn.com/tild3730-6136-4538-b535-333639386533/Ellipse_12.svg',
                    innerImg: 'https://static.tildacdn.com/tild6335-3332-4338-b232-383161306137/10.svg',
                    title: 'Высокая скорость работы',
                    text: 'Бот отвечает моментально'
                },
                {
                    id: 5,
                    outerImg: 'https://static.tildacdn.com/tild3730-6136-4538-b535-333639386533/Ellipse_12.svg',
                    innerImg: 'https://static.tildacdn.com/tild3636-3263-4330-b131-666462653465/5.svg',
                    title: 'Простое обслуживание',
                    text: 'Бота легко дорабатывать и обновлять'
                },
                {
                    id: 6,
                    outerImg: 'https://static.tildacdn.com/tild3730-6136-4538-b535-333639386533/Ellipse_12.svg',
                    innerImg: 'https://static.tildacdn.com/tild6537-6631-4335-b334-306266373339/6.svg',
                    title: 'Автоматизация рутины',
                    text: 'Бот экономит ваше время автоматически выполняя любые типовые задачи'
                },
            ]
        };
        this.Consultation = {
            imgUrl: 'https://static.tildacdn.com/tild6436-6430-4061-a561-343031666633/undraw_moving_forwar.svg',
            title: 'Бесплатная консультация',
            text: `
        Расскажем какой
            <strong>
                <span style="color: rgb(255, 208, 0);">
                    чат-бот
                </span>
            </strong> подойдет
            <strong>
                <span style="color: rgb(255, 208, 0);">
                    вашему бизнесу
                 </span>
            </strong>`,
            btnText: 'Хочу консультацию'
        };
        this.Tariffs = {
            dinamicImg: 'https://static.tildacdn.com/tild6132-6539-4561-b838-663866306265/Vector.svg',
            dinamicText: '$',
            title: "Тарифы",
            bckgrndImg: 'https://static.tildacdn.com/tild3962-3166-4338-a434-383631623131/undraw_work_chat_erd.svg',
            infoBlock: [
                {
                    id: 1,
                    outerImg: 'https://static.tildacdn.com/tild3433-3861-4062-a230-656534333436/Ellipse_11.svg',
                    innerImg: 'https://static.tildacdn.com/tild6237-3161-4162-b332-623865363564/boy_1.svg',
                    class: 'small',
                    title: 'Чат-бот визитка',
                    text: 'Чат-бот который поможет вашим клиентам познакомится с вашим бизнесом, узнать информацию о оказываемых услугах.',
                    priceText: 'узнайте стоимость',
                    btnText: 'Заказать бота'
                },
                {
                    id: 2,
                    outerImg: 'https://static.tildacdn.com/tild3433-3861-4062-a230-656534333436/Ellipse_11.svg',
                    innerImg: 'https://static.tildacdn.com/tild6366-6131-4761-b338-623963616534/icons8-chuck-norris-.png',
                    class: 'big',
                    title: 'Чат-бот лидогенератор',
                    text: 'Помогает обрабатывать запросы клиентов в мессенджерах.\n' +
                        'В режиме "вопрос-ответ" узнает потребность клиента, собирает контактные данные и отправляет заявку на вашу почту или в CRM.',
                    priceText: 'узнайте стоимость',
                    btnText: 'Заказать бота'
                },
                {
                    id: 3,
                    outerImg: 'https://static.tildacdn.com/tild3433-3861-4062-a230-656534333436/Ellipse_11.svg',
                    innerImg: 'https://static.tildacdn.com/tild3138-3537-4766-a237-383331316461/darth.svg',
                    class: 'small',
                    title: 'Чат-бот магазин',
                    text: 'Чат-бот знакомит покупателя с ассортиментом товаров\n.' +
                        'Главное меню с кнопками помогает покупателю сформировать заказ и оплатить его банковской картой.',
                    priceText: 'узнайте стоимость',
                    btnText: 'Заказать бота'
                },
            ]
        };
    }
    getHeader() {
        return this.header;
    }
    getProductPresentation() {
        return this.ProductPresentation;
    }
    getProductInformation() {
        return this.ProductInformation;
    }
    getTransitionCreateBot() {
        return this.TransitionCreateBot;
    }
    getPerformanceandBenefitsbckgrnd() {
        return this.PerformanceandBenefitsbckgrnd;
    }
    getPerformanceInformation() {
        return this.PerformanceInformation;
    }
    getBenefitsBots() {
        return this.BenefitsBots;
    }
    gethConsultation() {
        return this.Consultation;
    }
    gethTariffs() {
        return this.Tariffs;
    }
}
BotStoreService.ɵfac = function BotStoreService_Factory(t) { return new (t || BotStoreService)(); };
BotStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BotStoreService, factory: BotStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BotStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var s_abdullakh_botdevelopmentapp_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! s-abdullakh-botdevelopmentapp/loader */ "./node_modules/s-abdullakh-botdevelopmentapp/loader/index.es2017.mjs");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));
Object(s_abdullakh_botdevelopmentapp_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\angular\botDevelAppInAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map