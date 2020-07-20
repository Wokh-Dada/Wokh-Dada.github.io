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
	"./cnt-flexy-view-abdullakh-bot-benefits-bots_35.entry.js": [
		"./node_modules/s-abdullakh-botdevelopmentapp/dist/esm/cnt-flexy-view-abdullakh-bot-benefits-bots_35.entry.js",
		"stencil-cnt-flexy-view-abdullakh-bot-benefits-bots_35-entry-js"
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




function AppComponent_cnt_flexy_view_abdullakh_bot_form_communication_1_01_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cnt-flexy-view-abdullakh-bot-form-communication-1_01", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeForm", function AppComponent_cnt_flexy_view_abdullakh_bot_form_communication_1_01_1_Template_cnt_flexy_view_abdullakh_bot_form_communication_1_01_closeForm_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.closeForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx_r0.getFormCommunication())("pathToAssets", ctx_r0.testPathToAssetsRet());
} }
class AppComponent {
    constructor(botStore) {
        this.botStore = botStore;
        /**
         * временный префикс ссылки для картинок
         */
        this.testPathToAssets = "https://cdn.ramman.net/flexy-view/abdullakh/bot/1.01/assets/";
    }
    /**
     * Вызов модального окна формы
     */
    openForm() {
        this.popupComplited = true;
    }
    /**
     * Закрытие модального окна формы
     */
    closeForm() {
        this.popupComplited = false;
    }
    testPathToAssetsRet() {
        return this.testPathToAssets;
    }
    getFormCommunication() {
        return this.botStore.getFormCommunication();
    }
    getHeader() {
        return this.botStore.getHeader();
    }
    getProductPresentation() {
        return this.botStore.getProductPresentation();
    }
    getProductInformation() {
        return this.botStore.getProductInformation();
    }
    getTransitionCreateBot() {
        return this.botStore.getTransitionCreateBot();
    }
    getPerformanceAndBenefits() {
        return this.botStore.getPerformanceAndBenefits();
    }
    gethConsultation() {
        return this.botStore.gethConsultation();
    }
    getTariffs() {
        return this.botStore.getTariffs();
    }
    getFooter() {
        return this.botStore.getFooter();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bot_store_service__WEBPACK_IMPORTED_MODULE_1__["BotStoreService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 17, consts: [[3, "payload", "pathToAssets", "closeForm", 4, "ngIf"], [3, "categories", "pathToAssets"], [3, "payload", "pathToAssets", "openForm"], [3, "payload", "pathToAssets", "closeForm"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_cnt_flexy_view_abdullakh_bot_form_communication_1_01_1_Template, 1, 2, "cnt-flexy-view-abdullakh-bot-form-communication-1_01", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "cnt-flexy-view-abdullakh-bot-header-1_01", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "cnt-flexy-view-abdullakh-bot-product-presentation-1_01", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openForm", function AppComponent_Template_cnt_flexy_view_abdullakh_bot_product_presentation_1_01_openForm_3_listener() { return ctx.openForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "cnt-flexy-view-abdullakh-bot-product-information-1_01", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openForm", function AppComponent_Template_cnt_flexy_view_abdullakh_bot_product_information_1_01_openForm_4_listener() { return ctx.openForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "cnt-flexy-view-abdullakh-bot-transition-create-bot-1_01", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openForm", function AppComponent_Template_cnt_flexy_view_abdullakh_bot_transition_create_bot_1_01_openForm_5_listener() { return ctx.openForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "cnt-flexy-view-abdullakh-bot-performance-and-benefits-1_01", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openForm", function AppComponent_Template_cnt_flexy_view_abdullakh_bot_performance_and_benefits_1_01_openForm_6_listener() { return ctx.openForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "cnt-flexy-view-abdullakh-bot-consultation-1_01", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openForm", function AppComponent_Template_cnt_flexy_view_abdullakh_bot_consultation_1_01_openForm_7_listener() { return ctx.openForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "cnt-flexy-view-abdullakh-bot-tariffs-1_01", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openForm", function AppComponent_Template_cnt_flexy_view_abdullakh_bot_tariffs_1_01_openForm_8_listener() { return ctx.openForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "cnt-flexy-view-abdullakh-universal-footer-1_01", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
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
        /**
         * временный префикс ссылки для картинок
         */
        this.testPathToAssets = "https://cdn.ramman.net/flexy-view/abdullakh/bot/assets/";
        this.formCommunication = {
            id: '1',
            formInterviewText: [
                {
                    nameInterview: 'Как вас зовут',
                    businessInterview: 'У вас уже есть бизнес',
                    businessSelect: [
                        { id: 1, select: 'Да', selected: true },
                        { id: 2, select: 'Планирую открыть', selected: false },
                        { id: 3, select: 'Нет', selected: false },
                    ],
                    websiteInterview: 'Ссылка на ваш сайт (если есть)',
                    numberInterview: 'Ваш номер',
                    btnText: 'Создать бота'
                }
            ]
        };
        this.header = {
            id: 'header',
            logoUrl: "5.jpg",
            phoneNumber: '+7 995 606 84 62',
            menu: [
                { id: 1, linkName: 'Возможности', menuLine: 'menuLine.svg' },
                { id: 2, linkName: 'Преимущества', menuLine: 'menuLine.svg' },
                { id: 3, linkName: 'Для кого', menuLine: 'menuLine.svg' },
            ]
        };
        this.ProductPresentation = {
            imgUrl: "phone.svg",
            icon: [
                { id: 'whatsApp', img: 'waaa.svg' },
                { id: 'telegram', img: 'telegram.png' },
                { id: 'viber', img: 'viber.png' },
                { id: 'mes', img: 'fb.svg' },
                { id: 'vk', img: 'vk.svg' },
            ],
            title: [
                {
                    id: 1,
                    text: "Сделаем\n" +
                        "\nчат-бота для\n" +
                        "\nтвоего бизнеса\n",
                    imgUrl: "Vector.svg",
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
                    outerImg: 'productInfoImg_1.svg',
                    innerImg: 'rocket_1.svg',
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
                    outerImg: 'productInfoImg_2.svg',
                    innerImg: 'profit_1.svg',
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
                    outerImg: 'productInfoImg_3.svg',
                    innerImg: 'training_1.svg',
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
                    outerImg: 'productInfoImg_4.svg',
                    innerImg: 'chatbot_1.svg',
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
                    outerImg: 'productInfoImg_5.svg',
                    innerImg: 'plane_1.svg',
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
                    imgUrl: "undraw_chat_bot_kli5.svg",
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
        this.PerformanceAndBenefits = {
            PerformanceandBenefitsbckgrnd: 'bg.svg',
            PerformanceInformation: [
                {
                    imgUrl: 'perfomansInfoImg.svg',
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
                }
            ],
            BenefitsBots: [
                {
                    title: "Преимущества чат-ботов",
                    infoBlock: [
                        {
                            id: 1,
                            outerImg: 'Ellipse_12.svg',
                            innerImg: '1.svg',
                            title: 'Низкая цена',
                            text: 'Бот поможет оптимизировать затраты на сотрудников'
                        },
                        {
                            id: 2,
                            outerImg: 'Ellipse_12.svg',
                            innerImg: '2.svg',
                            title: 'Рост конверсии',
                            text: 'Бот увеличивает приток клиентов с сайта, и привлекает новых клиентов'
                        },
                        {
                            id: 3,
                            outerImg: 'Ellipse_12.svg',
                            innerImg: '3.svg',
                            title: 'Работает 24/7',
                            text: 'Бот не отдыхает, не обедает, не спит'
                        },
                        {
                            id: 4,
                            outerImg: 'Ellipse_12.svg',
                            innerImg: '10.svg',
                            title: 'Высокая скорость работы',
                            text: 'Бот отвечает моментально'
                        },
                        {
                            id: 5,
                            outerImg: 'Ellipse_12.svg',
                            innerImg: '5.svg',
                            title: 'Простое обслуживание',
                            text: 'Бота легко дорабатывать и обновлять'
                        },
                        {
                            id: 6,
                            outerImg: 'Ellipse_12.svg',
                            innerImg: '6.svg',
                            title: 'Автоматизация рутины',
                            text: 'Бот экономит ваше время автоматически выполняя любые типовые задачи'
                        },
                    ]
                }
            ]
        };
        this.Consultation = {
            imgUrl: 'undraw_moving_forwar.svg',
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
            dinamicImg: 'tariffsDinamicImg.svg',
            dinamicText: '$',
            title: "Тарифы",
            bckgrndImg: 'undraw_work_chat_erd.svg',
            infoBlock: [
                {
                    id: 1,
                    outerImg: 'Ellipse_11.svg',
                    innerImg: 'boy_1.svg',
                    class: 'small',
                    title: 'Чат-бот визитка',
                    text: 'Чат-бот который поможет вашим клиентам познакомится с вашим бизнесом, узнать информацию о оказываемых услугах.',
                    priceText: 'узнайте стоимость',
                    btnText: 'Заказать бота'
                },
                {
                    id: 2,
                    outerImg: 'Ellipse_11.svg',
                    innerImg: 'icons8-chuck-norris-.png',
                    class: 'big',
                    title: 'Чат-бот лидогенератор',
                    text: 'Помогает обрабатывать запросы клиентов в мессенджерах.\n' +
                        'В режиме "вопрос-ответ" узнает потребность клиента, собирает контактные данные и отправляет заявку на вашу почту или в CRM.',
                    priceText: 'узнайте стоимость',
                    btnText: 'Заказать бота'
                },
                {
                    id: 3,
                    outerImg: 'Ellipse_11.svg',
                    innerImg: 'darth.svg',
                    class: 'small',
                    title: 'Чат-бот магазин',
                    text: 'Чат-бот знакомит покупателя с ассортиментом товаров\n.' +
                        'Главное меню с кнопками помогает покупателю сформировать заказ и оплатить его банковской картой.',
                    priceText: 'узнайте стоимость',
                    btnText: 'Заказать бота'
                },
            ]
        };
        this.footer = {
            systemButtons: [
                {
                    name: 'Магазин',
                    title: 'Магазин',
                    icon: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/il/ios11-imessage-app-store-icon.png',
                    badges: 3,
                    id: 1
                },
                {
                    name: 'Фото',
                    title: 'Фото',
                    icon: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios12-messages-imessage-photos-app.png',
                    badges: 0,
                    id: 2,
                },
                {
                    name: 'Музыка',
                    title: 'Музыка',
                    icon: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios10-message-imessage-music-app.png',
                    badges: 3,
                    id: 3,
                },
                {
                    name: 'Digital Touch',
                    title: 'Digital Touch',
                    icon: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios11-imessage-digital-touch-icon.png',
                    badges: 1,
                    id: 4,
                },
            ],
            userButtons: [
                {
                    name: 'images',
                    title: 'images',
                    icon: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios10-message-imessage-images-app.png',
                    badges: 0,
                    id: 1,
                },
                {
                    name: 'Apple Pay',
                    title: 'Apple Pay',
                    icon: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios11-message-imessage-apple-pay-app.png',
                    badges: 4,
                    id: 2,
                },
                {
                    name: 'Animoji',
                    title: 'Animoji',
                    icon: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios12-messages-imessage-memoji-icon.png',
                    badges: 0,
                    id: 3,
                },
                {
                    name: 'Memoji',
                    title: 'Memoji',
                    icon: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios13-imessage-memoji-sticker-icon.png',
                    badges: 0,
                    id: 4
                },
                {
                    name: 'WhatsApp',
                    title: 'WhatsApp',
                    icon: 'https://i2.wp.com/nigil.ru/wp-content/uploads/2015/06/whatsapp.png?resize=512%2C512',
                    badges: 33,
                    id: 5,
                }
            ]
        };
    }
    testPathToAssetsRet() {
        return this.testPathToAssets;
    }
    getFormCommunication() {
        return this.formCommunication;
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
    getPerformanceAndBenefits() {
        return this.PerformanceAndBenefits;
    }
    gethConsultation() {
        return this.Consultation;
    }
    getTariffs() {
        return this.Tariffs;
    }
    getFooter() {
        return this.footer;
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