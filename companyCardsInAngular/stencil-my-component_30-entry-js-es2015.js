(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-my-component_30-entry-js"],{

/***/ "./node_modules/s-abdullakh-companycards/dist/esm/my-component_30.entry.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/s-abdullakh-companycards/dist/esm/my-component_30.entry.js ***!
  \*********************************************************************************/
/*! exports provided: my_component, s_abdullakh_card_design, s_abdullakh_clause_match, s_abdullakh_clause_match_content, s_abdullakh_expense_management, s_abdullakh_explore_features, s_abdullakh_explore_features_blocks, s_abdullakh_footer, s_abdullakh_footer_logo_blocks, s_abdullakh_footer_menu_blocks, s_abdullakh_footer_menu_links, s_abdullakh_head_menu, s_abdullakh_head_menu_in_popup, s_abdullakh_head_menu_popup, s_abdullakh_head_nav_end, s_abdullakh_head_nav_start, s_abdullakh_header, s_abdullakh_icons, s_abdullakh_icons_block, s_abdullakh_link_block, s_abdullakh_list_block, s_abdullakh_multi_currency_slaider, s_abdullakh_other_features, s_abdullakh_other_features_blocks, s_abdullakh_personal_security, s_abdullakh_pre_header, s_abdullakh_product_presentation, s_abdullakh_product_presentation_content, s_abdullakh_product_presentation_video, s_abdullakh_security_control */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "my_component", function() { return MyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_card_design", function() { return SAbdullakhCardDesign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_clause_match", function() { return SAbdullakhClauseMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_clause_match_content", function() { return SAbdullakhClauseMatchContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_expense_management", function() { return SAbdullakhExpenseManagement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_explore_features", function() { return SAbdullakhExploreFeatures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_explore_features_blocks", function() { return SAbdullakhExploreFeaturesBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_footer", function() { return SAbdullakhFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_footer_logo_blocks", function() { return SAbdullakhFooterLogoBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_footer_menu_blocks", function() { return SAbdullakhFooterMenuBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_footer_menu_links", function() { return SAbdullakhFooterMenuLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_head_menu", function() { return SAbdullakhHeadMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_head_menu_in_popup", function() { return SAbdullakhHeadMenuInPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_head_menu_popup", function() { return SAbdullakhHeadMenuPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_head_nav_end", function() { return SAbdullakhHeadMenu$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_head_nav_start", function() { return SAbdullakhHeadMenu$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_header", function() { return SAbdullakhHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_icons", function() { return SAbdullakhIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_icons_block", function() { return SAbdullakhIconsBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_link_block", function() { return SAbdullakhLinkBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_list_block", function() { return SAbdullakhListBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_multi_currency_slaider", function() { return SAbdullakhMultiCurrencySlaider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_other_features", function() { return SAbdullakhOtherFeatures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_other_features_blocks", function() { return SAbdullakhOtherFeaturesBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_personal_security", function() { return SAbdullakhPersonalSecurity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_pre_header", function() { return SAbdullakhPreHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_product_presentation", function() { return SAbdullakhProductPresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_product_presentation_content", function() { return SAbdullakhProductPresentationContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_product_presentation_video", function() { return SAbdullakhProductPresentationVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_security_control", function() { return SAbdullakhSecurityControl; });
/* harmony import */ var _index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-5886095c.js */ "./node_modules/s-abdullakh-companycards/dist/esm/index-5886095c.js");


const headText = [
    {
        logo: '',
        menuItemOne: 'PERSONAL',
        menuItemTwo: 'BUSINESS',
        menuOpen: '☰',
        menuClose: 'X',
        logIn: 'Log in',
        btnText: 'Start for free'
    }
];
const headNav = [
    { nameLink: "Pricing", complited: false },
    {
        nameLink: "Product",
        complited: true,
        popup: [
            {
                popupTitle: "Features",
                popupTitleComplited: true,
                popupLinks: [
                    {
                        popupItemName: "Product tour",
                        popupIcon: "public",
                        popupIconComplited: true,
                    },
                    {
                        popupItemName: "Account",
                        popupIcon: "account_balance_wallet",
                        popupIconComplited: true,
                    },
                    {
                        popupItemName: "Payments",
                        popupIcon: "swap_horiz",
                        popupIconComplited: true
                    },
                    {
                        popupItemName: "Company cards",
                        popupIcon: "credit_card",
                        popupIconComplited: true,
                    },
                    {
                        popupItemName: "Roles & Permissions",
                        popupIcon: "https",
                        popupIconComplited: true,
                    },
                    {
                        popupItemName: "Mobile app",
                        popupIcon: "stay_primary_portrait",
                        popupIconComplited: true,
                    },
                    {
                        popupItemName: "Security",
                        popupIcon: "security",
                        popupIconComplited: true,
                    },
                    {
                        popupItemName: "Perks",
                        popupIcon: "card_giftcard",
                        popupIconComplited: true,
                    },
                ]
            },
            {
                popupTitle: "Solutions",
                popupTitleComplited: true,
                popupLinks: [
                    {
                        popupItemName: "For accountants",
                        popupIcon: "event_note",
                        popupIconComplited: true,
                    }
                ]
            }
        ]
    },
    {
        nameLink: "Resources",
        complited: true,
        popup: [
            {
                popupTitle: "",
                popupTitleComplited: false,
                popupLinks: [
                    {
                        popupItemName: "Blog",
                        popupIcon: "",
                        popupIconComplited: false,
                    },
                    {
                        popupItemName: "Community",
                        popupIcon: "",
                        popupIconComplited: false,
                    },
                    {
                        popupItemName: "Help centre",
                        popupIcon: "",
                        popupIconComplited: false,
                    },
                    {
                        popupItemName: "Webinar",
                        popupIcon: "",
                        popupIconComplited: false,
                    }
                ]
            }
        ]
    },
    {
        nameLink: "Company",
        complited: true,
        popup: [
            {
                popupTitle: "",
                popupTitleComplited: false,
                popupLinks: [
                    {
                        popupItemName: "About",
                        popupIcon: "",
                        popupIconComplited: false,
                    },
                    {
                        popupItemName: "Careers",
                        popupIcon: "",
                        popupIconComplited: false,
                    },
                    {
                        popupItemName: "Affiates",
                        popupIcon: "",
                        popupIconComplited: false,
                    },
                    {
                        popupItemName: "Contact cards",
                        popupIcon: "",
                        popupIconComplited: false,
                    }
                ]
            }
        ]
    }
];
const productPresentation = {
    videoScr: 'https://assets.revolut.com/media/business/corporate-cards/hero_slider.mp4',
    productPresentationContent: [
        {
            title: 'Radically better company cards',
            subtitle: 'No-fuss company cards for team members, instant virtual cards for security and flexibility — all set up with our easy expense management',
            btnText: 'Start for free'
        }
    ]
};
const personalSecurity = {
    personalSecurityImg: 'https://assets.revolut.com/media/business/corporate-cards/features/feature-cards.png',
    title: 'Stay in control over your cards and transactions',
    list: {
        text: [
            { text: 'Order physical cards for your team and create multiple virtual cards instantly' },
            { text: 'Link several  multi-currency accounts to one card or connect multiple cards to a single account' },
            { text: 'Set monthly limits and get statements with transactions for each card separately' },
            { text: 'Easily track transactions and control cards activity by employees, including automated notifications' }
        ]
    }
};
const expenseManagement = {
    expenseManagementImg: 'https://assets.revolut.com/media/business/corporate-cards/features/feature-cards.png',
    title: 'Eliminate stress from accounting with expense management',
    list: {
        text: [
            { text: 'Card holders can upload receipts and choose categories in the mobile app, as well as receive automatic reminders about missing information' },
            { text: 'Accountants and administrators can instantly review expenses in a live feed and reject or approve them' },
            { text: 'Organise expenses with categories and tax rates. Import details from Xero or define them manually' },
            { text: 'Export your expenses as a .csv file to be used on your accounting platform of choice' }
        ]
    }
};
const securityControl = {
    securityControlImg: 'https://assets.revolut.com/media/business/corporate-cards/features/feature-security.svg',
    title: 'Control the security of your company cards',
    list: {
        text: [
            { text: 'Temporarily freeze missing cards in your app or web dashboard' },
            { text: 'Enable location-based security to reduce fraudulent transactions' },
            { text: 'Disable contactless, online or swipe payments when necessary to ensure your card’s safety' },
            { text: 'Toggle the ability to make cash withdrawals from ATMs for extra security' }
        ]
    }
};
const cardDesign = {
    cardDesignImgWhite: 'https://assets.revolut.com/media/business/businesscard_white.jpg',
    cardDesignImgBlack: 'https://assets.revolut.com/media/business/businesscard_black.jpg',
    title: 'Exclusive business card designs',
    subtitle: 'Choose from our exclusive business card designs.'
};
const clauseMatch = {
    clauseMatchImg: 'https://assets.revolut.com/media/business/corporate-cards/testimonial.png',
    blockName: 'clausematch',
    title: 'At ClauseMatch we’ve had a positive experience using Revolut Business.',
    blockContent: 'The possibility to track and manage employee expenses on a single dashboard makes it a very convenient tool for business use.',
    author: 'Andrey Dokuchaev',
    company: 'COO & Co-Founder'
};
const otherFeatures = {
    title: 'Other features coming soon',
    featuresblock: [
        {
            title: 'Disposable virtual cards',
            text: 'Make one-off payments with a virtual card that will automatically terminate itself after use',
            class: 'other_end'
        },
        {
            title: 'Geographical restrictions',
            text: 'Restrict transactions based on selected countries so spending is only possible during business trips or in your home country',
            class: 'other_start'
        },
        {
            title: 'Custom design for cards',
            text: 'Create cards for your team which reflect the personality and identity of your business',
            class: 'other_end'
        },
        {
            title: 'Advanced spending limits',
            text: 'Set up permanent or temporary card limits per transaction and on daily spend',
            class: 'other_start'
        }
    ]
};
const exploreFeatures = {
    title: 'Explore our other features',
    exploreFeaturesblock: [
        {
            title: 'Perks',
            text: 'Benefits and discounts from partners who can take your business further',
            class: 'Pink',
            icon: 'redeem'
        },
        {
            title: 'Security',
            text: 'Your funds are safeguarded and data is encrypted and secure',
            class: 'Gray',
            icon: 'security'
        },
        {
            title: 'Accounts',
            text: 'Open multiple accounts in 30 currencies',
            class: 'Orange',
            icon: 'account_balance_wallet'
        }
    ]
};
const linkBlock = {
    title: 'Exclusive business card designs',
    subtitle: 'Choose from our exclusive business card designs.',
    btnText: 'Start for free'
};
const previewBackground = {
    previewBackgroundBlock: [
        {
            class: 'one',
            img: 'https://assets.revolut.com/media/business/awards/investor-allstars.png'
        },
        {
            class: 'two',
            img: 'https://assets.revolut.com/media/business/awards/uxuk.png'
        },
        {
            class: 'three',
            img: 'https://assets.revolut.com/media/business/awards/award-ukTechAwards.svg'
        },
        {
            class: 'four',
            img: 'https://assets.revolut.com/media/business/awards/award-businessAwards.svg'
        }
    ]
};
const footer = [
    [
        {
            menuTitle: 'PERSONAL',
            menuTitleActive: 'BUSINESS'
        }
    ],
    [
        {
            title: 'PRODUCT',
            id: 'PRODUCT',
            items: [
                { id: 'Product tour', linkName: 'Product tour' },
                { id: 'For accountants', linkName: 'For accountants' },
                { id: 'Pricing', linkName: 'Pricing' }
            ]
        },
    ],
    [
        {
            title: 'FEATURES',
            id: 'FEATURES',
            items: [
                { id: 'Accounts', linkName: 'Accounts' },
                { id: 'Payments', linkName: 'Payments' },
            ]
        },
        {
            title: 'Company cards',
            id: 'Company cards',
            items: [
                { id: 'Roles & Permissions', linkName: 'Roles & Permissions' },
                { id: 'API & Integrations', linkName: 'API & Integrations' },
                { id: 'Mobile app', linkName: 'Mobile app' },
                { id: 'Security', linkName: 'Security' },
                { id: 'Perks', linkName: 'Perks' },
            ]
        },
    ],
    [
        {
            title: 'Resources',
            id: 'Resources',
            items: [
                { id: 'Blog', linkName: 'Blog' },
                { id: 'Community', linkName: 'Community' },
                { id: 'Help centre', linkName: 'Help centre' },
                { id: 'Webinar', linkName: 'Webinar' }
            ]
        },
    ],
    [
        {
            title: 'Company',
            items: [
                { id: 'About', linkName: 'About' },
                { id: 'Contact', linkName: 'Contact' },
                { id: 'Careers', linkName: 'Careers' }
            ]
        }
    ],
    [
        {
            title: 'FOLLOW',
            items: [
                { id: 'Facebook', linkName: 'Facebook' },
                { id: 'Instagram', linkName: 'Instagram' },
                { id: 'Twitter', linkName: 'Twitter' },
                { id: 'LinkedIn', linkName: 'LinkedIn' },
                { id: 'Dribbble', linkName: 'Dribbble' }
            ]
        }
    ]
];

const myComponentCss = "";

const MyComponent = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "m-0 p-0" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "topThreeBlocks" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-pre-header", null), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-header", { headText: headText, headNav: headNav, onClickOnHeader: (event) => this.clickOnHeader(event) }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-product-presentation", { productPresentation: productPresentation, onClickOnProductPresentation: (event) => this.clickOnProductPresentation(event) })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-multi-currency-slaider", null), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-personal-security", { personalSecurityImg: personalSecurity.personalSecurityImg, personalSecurity: personalSecurity, onClickOnPersonalSecurity: (event) => this.clickOnPersonalSecurity(event) }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-expense-management", { expenseManagement: expenseManagement, expenseManagementImg: expenseManagement.expenseManagementImg, onClickOnExpenseManagement: (event) => this.clickOnExpenseManagement(event) }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-clause-match", { clauseMatch: clauseMatch, onClickOnClauseMatch: (event) => this.clickOnClauseMatch(event) }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-security-control", { securityControl: securityControl, securityControlImg: securityControl.securityControlImg, onClickOnSecurityControl: (event) => this.clickOnSecurityControl(event) }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-card-design", { cardDesign: cardDesign, onClickOnCardDesign: (event) => this.clickOnCardDesign(event) }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-other-features", { otherFeatures: otherFeatures, featuresblock: otherFeatures.featuresblock, onClickOnOtherFeatures: (event) => this.clickOnOtherFeatures(event) }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-explore-features", { exploreFeatures: exploreFeatures, onClickOnExploreFeature: (event) => this.clickOnExploreFeature(event) }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-link-block", { linkBlock: linkBlock, onClickOnLinkBlock: (event) => this.clickOnLinkBlock(event) }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-icons-block", { previewBackground: previewBackground.previewBackgroundBlock, onClickOnIconsBlock: (event) => this.clickOnIconsBlock(event) }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-footer", { footer: footer })));
    }
    /**
     * клик по элементам clickOnHeader
     */
    clickOnHeader({ detail }) {
        return console.log('clickOnHeader:', detail);
    }
    /**
     * клик по элементам ProductPresentation
     */
    clickOnProductPresentation({ detail }) {
        return console.log('ProductPresentation:', detail);
    }
    /**
     * клик по элементам personalSecurity
     */
    clickOnPersonalSecurity({ detail }) {
        return console.log('personalSecurity:', detail);
    }
    /**
     * клик по элементам ExpenseManagement
     */
    clickOnExpenseManagement({ detail }) {
        return console.log('ExpenseManagement:', detail);
    }
    /**
     * клик по элементам ClauseMatch
     */
    clickOnClauseMatch({ detail }) {
        return console.log('ClauseMatch:', detail);
    }
    /**
     * клик по элементам SecurityControl
     */
    clickOnSecurityControl({ detail }) {
        return console.log('SecurityControl:', detail);
    }
    /**
     * клик по элементам CardDesign
     */
    clickOnCardDesign({ detail }) {
        return console.log('CardDesign:', detail);
    }
    /**
     * клик по элементам OtherFeatures
     */
    clickOnOtherFeatures({ detail }) {
        return console.log('OtherFeatures:', detail);
    }
    /**
     * клик по элементам ExploreFeature
     */
    clickOnExploreFeature({ detail }) {
        return console.log('ExploreFeature:', detail);
    }
    /**
     * клик по элементам LinkBlock
     */
    clickOnLinkBlock({ detail }) {
        return console.log('LinkBlock:', detail);
    }
    /**
     * клик по элементам clickOnIconsBlock
     */
    clickOnIconsBlock({ detail }) {
        return console.log('clickOnIconsBlock:', detail);
    }
};
MyComponent.style = myComponentCss;

const sAbdullakhCardDesignCss = ".card_design_block{margin-top:150px;text-align:center}.card_design_block_title h2{font-size:2.875rem !important;line-height:3.5rem !important;font-weight:600}.card_design_block_subtitle{line-height:1.65em;color:rgb(139, 149, 158);margin:1rem 0}.card_design_block_card_img{margin:4rem auto 3.5rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.card_img{background-size:cover;background-position:center;width:608px;height:381px;-webkit-box-shadow:rgba(25, 28, 31, 0.08) 0px 14px 32px, rgba(25, 28, 31, 0.04) 0px 8px 16px, rgba(25, 28, 31, 0.04) 0px -1px 0px !important;box-shadow:rgba(25, 28, 31, 0.08) 0px 14px 32px, rgba(25, 28, 31, 0.04) 0px 8px 16px, rgba(25, 28, 31, 0.04) 0px -1px 0px !important;border-radius:23px}#black_card{background-image:url(\"https://assets.revolut.com/media/business/businesscard_black.jpg\")}#white_card{background-image:url(\"https://assets.revolut.com/media/business/businesscard_white.jpg\")}.black_card_btn_border,.gray_card_btn_border{margin:0 3px;border:1px solid black;-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;border-radius:24px;-ms-flex-pack:center;justify-content:center;width:36px}.black_card_btn,.gray_card_btn{background-color:black;width:28px;height:28px;display:inline-block;border-radius:50%;margin:3px;cursor:pointer}.black_card_btn{background-color:black}.gray_card_btn{background-color:gray}";

const SAbdullakhCardDesign = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnCardDesign = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnCardDesign", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card_design_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card_design_block_title" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", { onClick: () => this.clickOnCardDesign.emit(this.cardDesign.title) }, this.cardDesign.title), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card_design_block_subtitle", onClick: () => this.clickOnCardDesign.emit(this.cardDesign.subtitle) }, this.cardDesign.subtitle)), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card_design_block_card_img", onClick: () => this.clickOnCardDesign.emit(event) }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card_img", id: "black_card", ref: (el) => { this.card = el; } })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "card_btn_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "black_card_btn_border" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "black_card_btn", onClick: () => this.blackCardtoggle() })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "gray_card_btn_border", onClick: () => this.whiteCardtoggle() }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "gray_card_btn" }))))));
    }
    blackCardtoggle() {
        this.card.id = 'black_card';
    }
    whiteCardtoggle() {
        this.card.id = 'white_card';
    }
};
SAbdullakhCardDesign.style = sAbdullakhCardDesignCss;

const sAbdullakhClauseMatchCss = ".clause_match_block{margin-top:150px}.clause_match_block_contest{font-weight:500;margin-left:80px;padding-right:140px;color:rgb(139, 149, 158);line-height:2rem}.block_name{font-size:30px;color:#468ce3}.clause_match_block_left_block svg{color:#e8ebef;position:relative;right:75px;top:42px}.clause_match_block_left_block h3{font-size:2rem;padding-bottom:2rem;color:#212529;font-weight:600}.clause_match_left_block_text{font-size:1.25rem;font-weight:400}.clause_match_left_block_author{margin-top:2.25rem;font-size:1.25rem;font-weight:400}.clause_match_left_block_author span{font-weight:600}.clause_match_right_block{background-size:cover;background-position:center;width:100%;height:485px;-webkit-box-shadow:rgba(25, 28, 31, 0.08) 0px 14px 32px, rgba(25, 28, 31, 0.04) 0px 8px 16px, rgba(25, 28, 31, 0.04) 0px -1px 0px;box-shadow:rgba(25, 28, 31, 0.08) 0px 14px 32px, rgba(25, 28, 31, 0.04) 0px 8px 16px, rgba(25, 28, 31, 0.04) 0px -1px 0px;border-radius:0.5rem}@media (max-width: 995px){.clause_match_block_left_block h3{font-size:1.50rem}.clause_match_left_block_text{font-size:17px}.clause_match_left_block_author{font-size:17px}.block_name{font-size:27px}}@media (max-width: 995px){.clause_match{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.clause_match_block{max-width:474px}.clause_match_block_contest{margin-top:50px;margin-left:0;padding-right:0}.expense_management_list_block{margin-right:0}.expense_management_left{right:0}}@media (max-width: 1200px){.persional_security_list_block{margin-left:10px}}";

const SAbdullakhClauseMatch = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnClauseMatch = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnClauseMatch", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container clause_match" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row clause_match_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-7 mt-5" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "clause_match_right_block d-block d-lg-none", style: { backgroundImage: "url(" + this.clauseMatch.clauseMatchImg + ")" }, onClick: () => this.clickOnClauseMatch.emit(this.clauseMatch.clauseMatchImg) }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-clause-match-content", { clauseMatch: this.clauseMatch })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-5 d-none d-lg-block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "clause_match_right_block", style: { backgroundImage: "url(" + this.clauseMatch.clauseMatchImg + ")" }, onClick: () => this.clickOnClauseMatch.emit(this.clauseMatch.clauseMatchImg) })))));
    }
};
SAbdullakhClauseMatch.style = sAbdullakhClauseMatchCss;

const sAbdullakhClauseMatchContentCss = "";

const SAbdullakhClauseMatchContent = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnClauseMatch = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnClauseMatch", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "clause_match_block_contest" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block_name", onClick: () => this.clickOnClauseMatch.emit(this.clauseMatch.blockName) }, this.clauseMatch.blockName), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("blockquote", { class: "" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "clause_match_block_left_block", onClick: () => this.clickOnClauseMatch.emit(event) }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { class: "", width: "48", height: "38", viewBox: "0 0 48 38", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M22.8043 26.1533C22.8043 29.1495 21.7148 31.7372 19.5357 33.9163C17.4474 36.0046 14.8597 37.0487 11.7727 37.0487C8.77643 37.0487 6.18877 36.0046 4.00968 33.9163C1.83059 31.7372 0.559459 29.3311 0.196278 26.6981C-0.439289 21.7951 0.468664 16.9376 2.92014 12.1254C5.37161 7.22248 8.91263 3.49987 13.5432 0.957607C16.1763 -0.404323 18.2645 -0.313528 19.8081 1.22999C21.4424 2.68272 20.9884 4.36243 18.4461 6.26913C17.175 7.35868 16.0855 8.67521 15.1775 10.2187C14.2695 11.6715 13.634 13.2604 13.2708 14.9855C13.18 15.7118 13.5432 16.075 14.3603 16.075C16.1763 16.1658 18.0376 17.1646 19.9443 19.0713C21.851 20.978 22.8043 23.3386 22.8043 26.1533ZM48 26.1533C48 29.1495 46.9105 31.7372 44.7314 33.9163C42.6431 36.0046 40.1008 37.0487 37.1046 37.0487C34.1083 37.0487 31.5207 36.0046 29.3416 33.9163C27.1625 31.7372 25.8913 29.3311 25.5282 26.6981C24.8018 21.7951 25.6644 16.9376 28.1158 12.1254C30.6581 7.22248 34.2445 3.49987 38.8751 0.957607C41.4173 -0.404323 43.4602 -0.313528 45.0038 1.22999C46.6381 2.68272 46.2295 4.36243 43.778 6.26913C42.4161 7.35868 41.2812 8.67521 40.3732 10.2187C39.4652 11.6715 38.8751 13.2604 38.6027 14.9855C38.5119 15.7118 38.8297 16.075 39.556 16.075C41.3719 16.1658 43.2332 17.1646 45.1399 19.0713C47.0466 20.978 48 23.3386 48 26.1533Z", fill: "currentColor" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", { class: "", onClick: () => this.clickOnClauseMatch.emit(this.clauseMatch.title) }, this.clauseMatch.title), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { "data-testid": "test-quote", class: "clause_match_left_block_text", onClick: () => this.clickOnClauseMatch.emit(this.clauseMatch.blockContent) }, this.clauseMatch.blockContent), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "clause_match_left_block_author", onClick: () => this.clickOnClauseMatch.emit(this.clauseMatch.company) }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "pr-2", onClick: () => this.clickOnClauseMatch.emit(this.clauseMatch.author) }, this.clauseMatch.author, ","), this.clauseMatch.company)))));
    }
};
SAbdullakhClauseMatchContent.style = sAbdullakhClauseMatchContentCss;

const sAbdullakhExpenseManagementCss = ".expense_management_block{margin-top:150px}.expense_management_list_block{margin-right:145px}.expense_management_left{position:relative;right:25px}.expense_management_bckgrnd{background-size:cover;background-position:center;width:100%;height:485px;-webkit-box-shadow:rgba(25, 28, 31, 0.08) 0px 14px 32px, rgba(25, 28, 31, 0.04) 0px 8px 16px, rgba(25, 28, 31, 0.04) 0px -1px 0px;box-shadow:rgba(25, 28, 31, 0.08) 0px 14px 32px, rgba(25, 28, 31, 0.04) 0px 8px 16px, rgba(25, 28, 31, 0.04) 0px -1px 0px;border-radius:0.5rem}@media (max-width: 995px){.expense_management{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.expense_management_block{max-width:474px}.expense_management_list_block{margin-top:50px}.expense_management_list_block{margin-right:0}.expense_management_left{right:0}}@media (max-width: 1200px){.persional_security_list_block{margin-left:10px}}";

const SAbdullakhExpenseManagement = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnExpenseManagement = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnExpenseManagement", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container expense_management" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row expense_management_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-7 d-none d-lg-block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "expense_management_left" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "expense_management_bckgrnd", style: { backgroundImage: "url(" + this.expenseManagementImg + ")" }, onClick: () => this.clickOnExpenseManagement.emit(this.expenseManagementImg) }))), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-5 mt-3" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "expense_management_left d-block d-lg-none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "expense_management_bckgrnd", style: { backgroundImage: "url(" + this.expenseManagementImg + ")" }, onClick: () => this.clickOnExpenseManagement.emit(this.expenseManagementImg) })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "expense_management_list_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "list_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "list_block_title", onClick: () => this.clickOnExpenseManagement.emit(this.expenseManagement.title) }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, this.expenseManagement.title)), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { class: "list_block_info_blocks", onClick: () => this.clickOnExpenseManagement.emit(this.expenseManagement.list) }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ListBlock, { arr: this.expenseManagement.list }))))))));
    }
};
/*
* компонентная функция для вывода элементов news-main-block
 */
const ListBlock = (props) => {
    return props.arr.text.map((item) => {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-list-block", { arr: item }));
    });
};
SAbdullakhExpenseManagement.style = sAbdullakhExpenseManagementCss;

const sAbdullakhExploreFeaturesCss = ".explore_features_block{-webkit-box-sizing:border-box;box-sizing:border-box;color:rgb(25, 28, 31);background-color:rgb(255, 255, 255);height:230px;-webkit-box-shadow:rgba(25, 28, 31, 0.05) 0px 0.05rem 0.14rem 0px, rgba(25, 28, 31, 0.05) 0px 0.2rem 0.4rem 0px, rgba(25, 28, 31, 0.04) 0px -1px 0px 0px;box-shadow:rgba(25, 28, 31, 0.05) 0px 0.05rem 0.14rem 0px, rgba(25, 28, 31, 0.05) 0px 0.2rem 0.4rem 0px, rgba(25, 28, 31, 0.04) 0px -1px 0px 0px;font-weight:400;font-size:1rem;line-height:1.5rem;margin:0px;padding:2rem;border-radius:6px;-webkit-transition:0.4s;transition:0.4s}.explore_features_block:hover{-webkit-box-shadow:rgba(25, 28, 31, 0.08) 0px 14px 32px, rgba(25, 28, 31, 0.04) 0px 8px 16px, rgba(25, 28, 31, 0.04) 0px -1px 0px;box-shadow:rgba(25, 28, 31, 0.08) 0px 14px 32px, rgba(25, 28, 31, 0.04) 0px 8px 16px, rgba(25, 28, 31, 0.04) 0px -1px 0px;-webkit-transform:translate3d(0px, -10px, 0px);transform:translate3d(0px, -10px, 0px);cursor:pointer}.explore_features_title{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin:150px 0}.explore_features_title h3{font-weight:600;font-size:2rem;line-height:2.5rem;margin:auto}.explore_features_block_icon_pink{-webkit-box-sizing:border-box;box-sizing:border-box;color:rgb(255, 255, 255);background-color:rgb(226, 78, 139);height:3rem;width:3rem;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0px;padding:0px;border-radius:9999px}.explore_features_block_icon_gray{-webkit-box-sizing:border-box;box-sizing:border-box;color:rgb(255, 255, 255);background-color:rgb(106, 140, 173);height:3rem;width:3rem;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0px;padding:0px;border-radius:9999px}.explore_features_block_icon_orange{-webkit-box-sizing:border-box;box-sizing:border-box;color:rgb(255, 255, 255);background-color:rgb(245, 166, 35);height:3rem;width:3rem;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0px;padding:0px;border-radius:9999px}.explore_features_block_title h4{margin:1.5rem 0px 0px;font-weight:500;font-size:1.5rem;line-height:2rem}.explore_features_block_content{color:rgb(139, 149, 158);font-size:1.125rem;line-height:1.75rem;margin:0.5rem 0px 0px}@media (max-width: 995px){.explore_features_position{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin-top:20px}}";

const SAbdullakhExploreFeatures = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnExploreFeature = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnExploreFeature", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "explore_features_title" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", { onClick: () => this.clickOnExploreFeature.emit(this.exploreFeatures.title) }, this.exploreFeatures.title)), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row", onClick: () => this.clickOnExploreFeature.emit(this.exploreFeatures) }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Block, { arr: this.exploreFeatures }))));
    }
};
/*
* компонентная функция для вывода элементов news-main-block
 */
const Block = (props) => {
    return props.arr.exploreFeaturesblock.map((item) => {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-4 col-12" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-explore-features-blocks", { arr: item })));
    });
};
SAbdullakhExploreFeatures.style = sAbdullakhExploreFeaturesCss;

const sAbdullakhExploreFeaturesBlocksCss = ".explore_features_block{-webkit-box-sizing:border-box;box-sizing:border-box;color:rgb(25, 28, 31);background-color:rgb(255, 255, 255);height:230px;-webkit-box-shadow:rgba(25, 28, 31, 0.05) 0px 0.05rem 0.14rem 0px, rgba(25, 28, 31, 0.05) 0px 0.2rem 0.4rem 0px, rgba(25, 28, 31, 0.04) 0px -1px 0px 0px;box-shadow:rgba(25, 28, 31, 0.05) 0px 0.05rem 0.14rem 0px, rgba(25, 28, 31, 0.05) 0px 0.2rem 0.4rem 0px, rgba(25, 28, 31, 0.04) 0px -1px 0px 0px;font-weight:400;font-size:1rem;line-height:1.5rem;margin:0px;padding:2rem;border-radius:6px;-webkit-transition:0.4s;transition:0.4s}.explore_features_block:hover{-webkit-box-shadow:rgba(25, 28, 31, 0.08) 0px 14px 32px, rgba(25, 28, 31, 0.04) 0px 8px 16px, rgba(25, 28, 31, 0.04) 0px -1px 0px;box-shadow:rgba(25, 28, 31, 0.08) 0px 14px 32px, rgba(25, 28, 31, 0.04) 0px 8px 16px, rgba(25, 28, 31, 0.04) 0px -1px 0px;-webkit-transform:translate3d(0px, -10px, 0px);transform:translate3d(0px, -10px, 0px);cursor:pointer}.explore_features_title{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin:150px 0}.explore_features_title h3{font-weight:600;font-size:2rem;line-height:2.5rem;margin:auto}.explore_features_block_icon_pink{-webkit-box-sizing:border-box;box-sizing:border-box;color:rgb(255, 255, 255);background-color:rgb(226, 78, 139);height:3rem;width:3rem;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0px;padding:0px;border-radius:9999px}.explore_features_block_icon_gray{-webkit-box-sizing:border-box;box-sizing:border-box;color:rgb(255, 255, 255);background-color:rgb(106, 140, 173);height:3rem;width:3rem;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0px;padding:0px;border-radius:9999px}.explore_features_block_icon_orange{-webkit-box-sizing:border-box;box-sizing:border-box;color:rgb(255, 255, 255);background-color:rgb(245, 166, 35);height:3rem;width:3rem;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0px;padding:0px;border-radius:9999px}.explore_features_block_title h4{margin:1.5rem 0px 0px;font-weight:500;font-size:1.5rem;line-height:2rem}.explore_features_block_content{color:rgb(139, 149, 158);font-size:1.125rem;line-height:1.75rem;margin:0.5rem 0px 0px}@media (max-width: 995px){.explore_features_position{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin-top:20px}}";

const SAbdullakhExploreFeaturesBlocks = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnExploreFeature = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnExploreFeature", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "explore_features_position" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "explore_features_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.bckgrndClass(this.arr.class) }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "material-icons", onClick: () => this.clickOnExploreFeature.emit(this.arr.icon) }, this.arr.icon)), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "explore_features_block_title" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h4", { onClick: () => this.clickOnExploreFeature.emit(this.arr.title) }, this.arr.title)), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "explore_features_block_content", onClick: () => this.clickOnExploreFeature.emit(this.arr.text) }, this.arr.text))));
    }
    bckgrndClass(x) {
        switch (x) {
            case 'Pink':
                return 'explore_features_block_icon_pink';
            case 'Gray':
                return 'explore_features_block_icon_gray';
            case 'Orange':
                return 'explore_features_block_icon_orange';
        }
    }
};
SAbdullakhExploreFeaturesBlocks.style = sAbdullakhExploreFeaturesBlocksCss;

const sAbdullakhFooterCss = "footer{display:-ms-flexbox;display:flex;margin-top:auto;background-color:rgb(243, 244, 245);color:rgb(139, 149, 158);text-align:left;font-weight:500;padding:4rem 1rem 0 5rem;max-height:100%}.footer_block{display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.footer_logo_block{display:-ms-flexbox;display:flex;color:rgb(25, 28, 31)}.footer_logo{height:1.5rem;width:1.5em}.footer_logo_links{text-transform:uppercase}.footer_logo_link{margin:0px 0.8rem;display:inline-block;text-decoration:none;-webkit-transition:color 0.2s ease 0s;transition:color 0.2s ease 0s;color:rgb(139, 149, 158)}.active{color:black!important}.footer_links_block{-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.65;outline:none;color:rgb(139, 149, 158);text-align:left;font-family:\"Basier Circle\", sans-serif;font-weight:500}.footer_links_wrapper{display:inline-block;min-width:10.25rem;padding-right:2rem;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.footer_title{margin-bottom:1.25rem;color:rgb(25, 28, 31);text-transform:uppercase;letter-spacing:-0.025em}.footer_link{display:block;margin-top:1rem;white-space:nowrap;text-decoration:none;-webkit-transition:color 0.2s ease 0s;transition:color 0.2s ease 0s}.copyright_block{display:-ms-flexbox;display:flex;margin-top:100px;-ms-flex-direction:column;flex-direction:column}.copyright_block form p select{background:transparent;border:none;color:gray;margin-left:50px}.copyright_flag_options{display:-ms-flexbox;display:flex}.copyright_flag{content:\"\";width:3rem;height:3rem;-webkit-transform:scale(0.5);transform:scale(0.5);-webkit-transform-origin:left top;transform-origin:left top;background-image:url(https://assets.revolut.com/media/roundFlag/sprite.png);background-position:0px -3456px;-webkit-box-shadow:rgba(25, 28, 31, 0.06) 0px 3px 6px, rgba(25, 28, 31, 0.06) 0px 1px 2px, rgba(25, 28, 31, 0.04) 0px -1px 0px;box-shadow:rgba(25, 28, 31, 0.06) 0px 3px 6px, rgba(25, 28, 31, 0.06) 0px 1px 2px, rgba(25, 28, 31, 0.04) 0px -1px 0px;background-repeat:no-repeat;border-radius:50%}.copyright_options{color:#8f9193}.copyright_info_menu{display:-ms-flexbox;display:flex}.copyright_info_menu div{font-size:12px;margin:20px 30px 0 0}.copyright_bottom_text{margin-top:20px;font-size:12px}";

const SAbdullakhFooter = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("footer", { class: "container-fluid" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row footer_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(FooterLogoBlocks, { arr: this.footer }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(FooterItemBlocks, { arr: this.footer })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "copyright_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "copyright_flag_options" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "copyright_flag" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "copyright_options" }, "United Kingdom"), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", null, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("select", null, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "search" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("option", null, "English"), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("option", null, "Francais \u0413\u0435\u043D\u0430"), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("option", null, "Polski"), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("option", null, "Deutsch"))))), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "copyright_info_menu" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "\u00A9 2020 Revolut Ltd"), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, "Website Terms")), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, "Legal Agreements")), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, "Privacy Policy")), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, "Complaints")), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, "Data Privacy For Candidates")), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, "Responsible Disclosure Program Policy")), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, "UK Modern Slavery Statement"))), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "copyright_bottom_text" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "If you would like to find out more about which Revolut entity you receive services from, or if you have any other questions, please reach out to us via the in-app chat in the Revolut app. Revolut Ltd (No. 08804411) is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011 (Firm Reference 900562). Registered address: 7 Westferry Circus, Canary Wharf, London, England, E14 4HD. Insurance related-products are provided by Revolut Travel Ltd which is authorised by the Financial Conduct Authority to undertake insurance distribution activities (FCA No: 780586) and by Revolut Ltd, an Appointed Representative of Revolut Travel Ltd in relation to insurance distribution activities. Revolut Ltd is an Appointed Representative of Lending Works Ltd for the activity of \u201Coperating an electronic system for lending\u201D. Trading and investment products are provided by Revolut Trading Ltd (No. 832790) is wholly owned subsidiary of Revolut Ltd and is an appointed representative of Sapia Partners LLP which is authorised and regulated by the Financial Conduct Authority."))))));
    }
};
/*
* компонентная функция для вывода элементов footer2
 */
const FooterLogoBlocks = (props) => {
    return props.arr.slice(0, 1).map((item) => {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-footer-logo-blocks", { arr: item })));
    });
};
/*
* компонентная функция для вывода элементов footer2
 */
const FooterItemBlocks = (props) => {
    return props.arr.slice(1, 6).map((item) => {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-footer-menu-blocks", { arr: item })));
    });
};
SAbdullakhFooter.style = sAbdullakhFooterCss;

const sAbdullakhFooterLogoBlocksCss = "";

const SAbdullakhFooterLogoBlocks = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footer_logo_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#", class: "footer_logo" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "19", height: "23", viewBox: "0 0 19 23", xmlns: "http://www.w3.org/2000/svg", "data-testid": "logo-svg", class: "styles__StyledLetterSvg-a7znz5-0 fCIhay" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("defs", null, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("linearGradient", { id: "logo_letter1", x1: "-3.542", x2: "187.902", y1: "222.275", y2: "33.495", gradientTransform: "matrix(.10838 0 0 .11312 -.092 -.004)", gradientUnits: "userSpaceOnUse" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("stop", { id: "stop837", offset: ".113", "stop-color": "#0D59EC" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("stop", { id: "stop839", offset: ".742", "stop-color": "#008FE1" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("stop", { id: "stop841", offset: "1", "stop-color": "#20AFFF" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("linearGradient", { id: "logo_letter2", x1: "-3.542", x2: "187.902", y1: "222.275", y2: "33.495", gradientTransform: "matrix(.10838 0 0 .11312 -.092 -.004)", gradientUnits: "userSpaceOnUse" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("stop", { id: "stop844", offset: ".113", "stop-color": "#0D59EC" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("stop", { id: "stop846", offset: ".742", "stop-color": "#008FE1" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("stop", { id: "stop848", offset: "1", "stop-color": "#20AFFF" }))), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("g", { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { id: "letter_1", "data-testid": "logo-letter_1", d: "M8.946 4.865c-.284 1.999-.511 3.682-.92 6.303 1.105-.024 3.613.416 4.165-3.166.457-2.98-1.58-3.256-3.245-3.137z" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { id: "letter_2", d: "M18.516 19.276c.43.957-.003 2.167-.9 2.654-.515.28-1.103.54-1.69.686A14.18 14.18 0 0112.97 23c-1.593 0-3.19-.912-3.878-2.022-.178.383-.82 1.153-1.945 1.515-.711.23-1.568.507-3.357.505-1.603-.001-2.517-.728-3-1.338-.77-.97-.883-2.202-.733-3.032l.008-.04C.67 15.553 1.497 10.035 1.878 7.27l.004-.027c.104-.767.21-1.534.273-2.306.031-.389.052-.78.056-1.17.004-.369-.03-.737-.027-1.106.004-.348.06-.7.223-1.008.265-.497.75-.889 1.263-1.06C4.233.405 4.821.33 5.406.262a46.373 46.373 0 011.798-.18A30.497 30.497 0 019.404 0c1.256-.001 2.52.02 3.758.275 1.261.26 2.535.757 3.53 1.628.682.597 1.223 1.35 1.63 2.174.356.726.501 1.49.587 2.074A8.67 8.67 0 0118.79 9.3a6.903 6.903 0 01-.913 2.122c-.474.736-1.082 1.404-1.857 2.04.472 1.37 1.702 4.046 2.496 5.814zM4.41 2.8c.03.508.034 1.02.012 1.53-.022.521-.067 1.04-.125 1.558-.057.516-.126 1.03-.196 1.544l-.023.168c-.22 1.607-.452 3.212-.695 4.814-.256 1.684-.543 3.359-.83 5.036-.133.782-.432 1.784-.023 2.53.364.666 1.298.747 1.949.68 2.371-.242 2.748-.769 2.748-.769-.473-.524-.062-2.912.414-6.122h1.685l1.764 5.335s.52 1.653 1.965 1.573c1.851-.102 3.213-.525 3.409-.76-.57-.318-2.2-4.394-3.088-7.387.43-.262.847-.547 1.24-.866.537-.438 1.035-.943 1.416-1.536.274-.426.483-.895.603-1.393.063-.263.098-.538.12-.807.04-.474.025-.954-.044-1.424-.066-.452-.165-.955-.367-1.363-.375-.763-.906-1.429-1.63-1.855-1.222-.718-2.63-.855-4.003-.93a25.333 25.333 0 00-4.463.146c-.166.02-1.845.168-1.838.298z" })))), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(FooterLogoBlocks$1, { arr: this.arr })));
    }
};
/*
* компонентная функция для вывода элементов footer2
 */
const FooterLogoBlocks$1 = (props) => {
    return props.arr.slice(0, 1).map((item) => {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footer_logo_links" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#", class: "footer_logo_link" }, item.menuTitle), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#", class: "footer_logo_link active" }, item.menuTitleActive)));
    });
};
SAbdullakhFooterLogoBlocks.style = sAbdullakhFooterLogoBlocksCss;

const sAbdullakhFooterMenuBlocksCss = "";

const SAbdullakhFooterMenuBlocks = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footer_links_block footer_links_wrapper" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(FooterItemMenuBlocks, { arr: this.arr })));
    }
};
/*
* компонентная функция для вывода элементов footer2
 */
const FooterItemMenuBlocks = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mb-4" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footer_title" }, item.title), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-footer-menu-links", { arr: item.items })));
    });
};
SAbdullakhFooterMenuBlocks.style = sAbdullakhFooterMenuBlocksCss;

const sAbdullakhFooterMenuLinksCss = "";

const SAbdullakhFooterMenuLinks = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(FooterItemlink, { arr: this.arr }));
    }
};
/*
* компонентная функция для вывода элементов footer2
 */
const FooterItemlink = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footer_links" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "", class: "footer_link" }, item.linkName)));
    });
};
SAbdullakhFooterMenuLinks.style = sAbdullakhFooterMenuLinksCss;

const sAbdullakhHeadMenuCss = "/*!*nav*!*//*!*nav*!*//*!**************************!*/";

const SAbdullakhHeadMenu = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnHeader = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnHeader", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { id: "menu", class: "menu_icon", ref: (el) => this.navOpenTag = el, onClick: () => this.toggleMobileMenu() }, "\u2630"), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "navbar_block", id: "dNone", ref: (el) => this.navMenuTag = el }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#", id: "menu", class: "menu_icon_x", onClick: () => this.toggleMobileMenu() }, "X"), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "navbar_left_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-head-nav-start", { headText: this.headText })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "navbar_right_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("nav", null, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "topnav_right", id: "Mytopnav" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MenuItem, { arr: this.headNav }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-head-nav-end", { headText: this.headText })))))));
    }
    /*
    * функция для открытия и закрытия мобильного меню
     */
    toggleMobileMenu() {
        if (this.navMenuTag.id === "dNone") {
            this.navMenuTag.id = 'dFlex';
        }
        else {
            this.navMenuTag.id = 'dNone';
        }
    }
};
/*
* компонентная функция для вывода элементов меню
 */
const MenuItem = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "topnav_right_links_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { class: "topnav_right_link", onClick: () => undefined.clickOnHeader.emit(item.nameLink) }, item.nameLink), item.complited ?
            Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "pop_up_nav_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-head-menu-popup", { arr: item }))
            :
                ''));
    });
};
SAbdullakhHeadMenu.style = sAbdullakhHeadMenuCss;

const sAbdullakhHeadMenuInPopupCss = "/*!*nav*!*//*!*nav*!*//*!**************************!*/";

const SAbdullakhHeadMenuInPopup = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnHeader = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnHeader", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(PopupIn, { arr: this.arr }));
    }
};
/*
* компонентная функция для вывода элементов меню popup-in-popup
 */
const PopupIn = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "pop_up_section_nav_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "pop_up_section_nav_link" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#", class: "pop_up_section_nav_link_a", onClick: () => undefined.clickOnHeader.emit(item.popupItemName) }, item.popupIconComplited ?
            Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "material-icons", onClick: () => undefined.clickOnHeader.emit(item.popupIcon) }, item.popupIcon) :
            '', item.popupItemName))));
    });
};
SAbdullakhHeadMenuInPopup.style = sAbdullakhHeadMenuInPopupCss;

const sAbdullakhHeadMenuPopupCss = "/*!*nav*!*//*!*nav*!*//*!**************************!*/";

const SAbdullakhHeadMenuPopup = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnHeader = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnHeader", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Popup, { arr: this.arr }));
    }
};
/*
* компонентная функция для вывода элементов меню popup
 */
const Popup = (props) => {
    return props.arr.popup.map((item) => {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "top_in_pop_up_nav_block" }, item.popupTitleComplited ?
            Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "title_top_in_pop_up_nav_block", onClick: () => undefined.clickOnHeader.emit(item.popupTitle) }, item.popupTitle)
            :
                '', Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-head-menu-in-popup", { arr: item.popupLinks })));
    });
};
SAbdullakhHeadMenuPopup.style = sAbdullakhHeadMenuPopupCss;

const sAbdullakhHeadNavEndCss = "/*!*nav*!*//*!*nav*!*//*!**************************!*/";

const SAbdullakhHeadMenu$1 = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnHeader = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnHeader", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MenuEnd, { arr: this.headText }));
    }
};
/*
* компонентная функция для вывода элементов меню
 */
const MenuEnd = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mobile_btn_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { class: "logIn", onClick: () => undefined.clickOnHeader.emit(event) }, item.logIn), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header_btn_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-group-append" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "header_btn", onClick: () => undefined.clickOnHeader.emit(event) }, item.btnText))))));
    });
};
SAbdullakhHeadMenu$1.style = sAbdullakhHeadNavEndCss;

const sAbdullakhHeadNavStartCss = "/*!*nav*!*//*!*nav*!*//*!**************************!*/";

const SAbdullakhHeadMenu$2 = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnHeader = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnHeader", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("nav", null, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MenuStart, { arr: this.headText })));
    }
};
/*
* компонентная функция для вывода элементов меню
 */
const MenuStart = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "topnav", id: "Mytopnav" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { onClick: () => undefined.clickOnHeader.emit(event) }, item.menuItemOne), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { class: "active", onClick: () => undefined.clickOnHeader.emit(event) }, item.menuItemTwo)));
    });
};
SAbdullakhHeadMenu$2.style = sAbdullakhHeadNavStartCss;

const sAbdullakhHeaderCss = ".menu_sticky{z-index:11;position:-webkit-sticky;position:sticky;top:0;left:0;right:0}.menu_scroll{z-index:11;position:-webkit-sticky;position:sticky;top:0;left:0;right:0;-webkit-box-shadow:rgba(25, 28, 31, 0.04) 0px 8px 16px, rgba(25, 28, 31, 0.04) 0px -1px 0px;box-shadow:rgba(25, 28, 31, 0.04) 0px 8px 16px, rgba(25, 28, 31, 0.04) 0px -1px 0px;background:rgb(255, 255, 255)}.main__menu{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:40px 0;width:100%}.header_menu{text-align:center}.logo{width:150px;background-size:cover;background-position:center}#dFlex{display:-ms-flexbox!important;display:flex!important}.navbar_block{display:-ms-flexbox;display:flex}.navbar_left_block{float:left;-ms-flex-item-align:center;align-self:center}.navbar_right_block{display:-ms-flexbox;display:flex;width:100%;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-item-align:center;align-self:center;height:100%}.navbar_right_block nav .topnav{-ms-flex-item-align:center;align-self:center;display:-ms-flexbox;display:flex}.navbar_right_block nav .topnav_right,.topnav_right_links_block{-ms-flex-item-align:center;align-self:center;display:-ms-flexbox;display:flex}.topnav_right_links_block:hover .pop_up_nav_block{display:block}.topnav a{color:#8f9193;text-align:center;padding:12px 16px;font-weight:500}.topnav a:hover{color:black;text-decoration:none}.topnav_right a{color:#8f9193;text-align:center;padding:12px 16px;font-weight:500}.topnav_right a:hover{color:black;text-decoration:none}.topnav_right_link{color:#8f9193;text-align:center;padding:12px 16px;font-weight:500}.pop_up_nav_block{display:none;-webkit-box-shadow:rgba(0, 0, 0, 0.04) 0px 0px 4px 0px, rgba(0, 0, 0, 0.08) 0px 8px 16px 0px;box-shadow:rgba(0, 0, 0, 0.04) 0px 0px 4px 0px, rgba(0, 0, 0, 0.08) 0px 8px 16px 0px;position:absolute;top:40px;right:-60px;margin-top:0.5rem;line-height:1.65;-webkit-transform:translateX(-50%);transform:translateX(-50%);background:white;padding:1.5rem 20px 0.75rem 20px;font-weight:500;z-index:9}.pop_up_nav_block_resources{right:208px}.pop_up_nav_block_company{right:80px}.top_in_pop_up_nav_block{margin-bottom:1.25rem}.title_top_in_pop_up_nav_block{color:rgb(139, 149, 158);margin-bottom:0.25rem;text-transform:uppercase;font-size:0.75rem;line-height:1.5rem;font-weight:bold;letter-spacing:1px;padding:0 2rem}.pop_up_section_nav_block{-webkit-column-count:2;-moz-column-count:2;column-count:2;margin:0}.pop_up_section_nav_block_row{-webkit-column-count:1;-moz-column-count:1;column-count:1;margin:0}.pop_up_section_nav_link{position:relative;width:100%;margin:0}.pop_up_section_nav_link_a{-webkit-transition:color 0.1s ease 0s, opacity 0.1s ease 0s;transition:color 0.1s ease 0s, opacity 0.1s ease 0s;display:inline-block;padding:0.8rem 1.6rem;color:rgb(139, 149, 158);text-decoration:none;cursor:pointer}.pop_up_section_nav_block .pop_up_section_nav_link:hover .pop_up_section_nav_link_a{color:black;text-decoration:none}.pop_up_section_nav_block .pop_up_section_nav_link:hover .pop_up_section_nav_link_a span{color:black}.pop_up_section_nav_link_a span{display:inline-block;height:1.5rem;vertical-align:top;margin-right:1rem;color:rgb(206, 213, 219);position:relative;top:-0.075em;-webkit-transition:color 0.1s ease 0s;transition:color 0.1s ease 0s;font-size:22px}.logIn{color:#0056fb !important;margin:0 12px}.mobile_btn_block{display:-ms-flexbox;display:flex}.menu_icon,.menu_icon_x{display:none}.menu_icon,.menu_icon_x:hover{text-decoration:none}@media (max-width: 1070px){.menu_icon{display:block;float:right;font-size:25px}#dNone{display:none!important}.navbar_block{-ms-flex-direction:column;flex-direction:column;position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:auto;background-color:white;z-index:100;-webkit-transform:translate3d(0px, 0px, 0px);transform:translate3d(0px, 0px, 0px);visibility:visible;opacity:1;overflow:auto;-webkit-transition:opacity 0.2s ease-in-out 0.05s;transition:opacity 0.2s ease-in-out 0.05s}.topnav{-ms-flex-direction:column;flex-direction:column;display:-ms-flexbox;display:flex}.topnav::after{content:\"\";display:block;height:1px;background:rgb(232, 235, 239);margin:1.75rem 0}.navbar_left_block{width:100%}.topnav_right{-ms-flex-direction:column;flex-direction:column;height:100%}.menu_icon_x{display:block;color:black;font-size:25px;height:50px;-ms-flex-item-align:end;align-self:flex-end;margin:20px 40px}nav{width:100%}.toggleTheme{display:inline-block}.logIn{width:50%}.mobile_btn_block{height:100%;-ms-flex-align:end;align-items:flex-end;margin-bottom:10px}.mobile_btn_block span{width:50%;-ms-flex-pack:center;justify-content:center;display:-ms-flexbox;display:flex}}.header_subscribe_input{border-radius:8px;border:2px solid lightgray;padding:0 12px;height:45px;width:227px}.header_btn_block{margin-left:25px}@media (max-width: 1200px){nav{float:right}}";

const SAbdullakhHeader = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnHeader = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnHeader", 7);
    }
    render() {
        // window.addEventListener('scroll', function() {
        //   let scrollTop = document.body.scrollTop;
        //
        //   if(scrollTop > 150) {
        //     document.getElementById('showScroll').className = 'menu_scroll';
        //   } else {
        //     document.getElementById('showScroll').className = 'menu_sticky';
        //   }
        //
        // });
        // let el = document.querySelector('.showScroll');
        //
        // window.addEventListener('scroll', toggleClassOnScroll.bind(el, 150));
        //
        // function toggleClassOnScroll(pxAmount) {
        //   let scrollTop = document.body.scrollTop;
        //
        //   if(scrollTop > pxAmount) {
        //     this.classList.add('menu_scroll');
        //   } else {
        //     this.classList.remove('menu_scroll');
        //   }
        // }
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("header", { class: "container-fluid menu_sticky", id: "showScroll" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row main__menu px-0 mx-0" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-auto pr-0 mr-0" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "logo", onClick: () => this.clickOnHeader.emit(event) }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { class: "navbar-brand" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "121", height: "53", viewBox: "0 0 687.78668 302.62668", preserveAspectRatio: "xMidYMid meet", xmlns: "http://www.w3.org/2000/svg", "data-testid": "logo-svg", class: "styles__StyledSvg-a7znz5-1 ccHFrG" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("g", { transform: "matrix(1.3333333,0,0,-1.3333333,0,302.62667)", id: "g10" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("g", { transform: "scale(0.1)", id: "g12" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { id: "path14", d: "m 4373.83,1249.73 c -116.13,0 -210.22,93.99 -210.22,210.01 v 709.99 h 180.28 v -191.72 h 154.59 V 1832.3 h -154.59 v -361.01 c 0,-34.01 27.56,-61.54 61.76,-61.54 h 92.83 v -160.02 z m -3946.135,854.3 c 111.582,0 167.414,-44.27 167.414,-131.42 0,-87.13 -55.879,-131.4 -167.414,-131.4 H 188.859 v 262.82 z m 369.172,-834.32 -241.875,422.83 c 152.996,55.7 228.856,152.83 228.856,294.28 0.168,172.87 -137.293,282.89 -356.153,282.89 H 0 v -1000 h 188.859 v 405.71 h 160.293 l 231.707,-405.71 z m 367.563,591.42 c 101.56,0 168.88,-57.11 185.99,-148.57 H 969.875 c 27.254,84.28 101.545,148.57 194.555,148.57 z M 1516.45,1644 c 0,102.84 -32.89,187.11 -97.3,254.28 -64.4,67.15 -147.27,99.98 -248.88,99.98 -104.41,0 -193.168,-35.74 -266.157,-105.71 -71.582,-70.01 -107.277,-158.57 -107.277,-268.58 0,-110.03 35.742,-200.03 105.871,-270 71.59,-70.01 157.433,-104.29 258.973,-104.29 156.04,0 266.16,68.55 333.28,207.14 l -134.44,77.15 c -44.27,-87.13 -108.72,-130 -195.97,-130 -107.27,0 -183.132,68.57 -194.57,177.13 h 546.4 v 62.9 z m 551.36,334.28 -180.26,-480 -180.27,480 h -191.7 l 287.63,-708.58 h 168.88 l 287.6,708.58 z m 1819.69,0 v -391.13 c 0,-94.27 -51.11,-156.73 -148.2,-156.73 -98.72,0 -148.46,62.41 -148.46,156.73 v 391.13 h -180.52 v -421.15 c 0,-163.16 102.98,-307.4 328.98,-307.4 h 1.37 c 224.62,0 327.49,147.44 327.49,307.4 v 421.15 z m -581.91,-708.57 v 1000 h -180.28 v -1000 z m -802.68,204.27 c -40,38.56 -60.13,88.61 -60.13,149.99 0,61.44 19.97,111.42 60.13,148.57 39.99,38.55 87.34,57.12 142.97,57.12 55.75,0 104.36,-18.57 144.44,-57.12 41.47,-37.15 61.52,-87.13 61.52,-148.57 0,-61.43 -19.93,-111.43 -61.52,-149.99 -39.96,-37.14 -88.69,-55.7 -144.44,-55.7 -55.63,0 -102.85,18.56 -142.97,55.7 z m 416.32,424.3 c -75.91,67.15 -167.49,99.98 -273.35,99.98 -104.36,0 -195.92,-32.87 -271.83,-99.98 -75.86,-65.71 -114.4,-157.17 -114.4,-274.31 0,-117.16 38.54,-208.56 114.4,-275.71 75.84,-65.71 167.47,-98.58 271.83,-98.58 105.86,0 197.44,32.87 273.35,98.58 77.3,67.15 115.89,158.55 115.89,275.71 0,117.14 -38.59,208.6 -115.89,274.31" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { id: "path16", d: "M 1317.67,721.801 V 289.199 c 0,-112.679 -50.27,-184.937 -174.52,-184.937 -124.25,0 -174.525,72.258 -174.525,184.937 V 721.801 H 851.379 V 269.781 C 851.379,107.109 970.059,0 1143.15,0 c 173.09,0 291.77,107.109 291.77,269.781 v 452.02 z M 3342,447.73 c 28.57,117.821 111.25,187.801 222.94,187.801 133.11,0 209.65,-93.109 218.65,-187.801 z m 560.41,-67.839 c 0,214.8 -126.38,356.468 -337.33,356.468 -194.8,0 -351.47,-153.097 -351.47,-368.179 C 3213.61,153.238 3370.28,0 3560.94,0 c 56.41,0 113.25,10 163.81,35.5586 46.56,23.5703 85.41,59.2695 115.96,101.2614 17.01,23.418 30.85,48.559 44.43,73.981 l -87.55,51.98 -3.86,-7.562 c -38.27,-76.41 -95.55,-154.387 -228.65,-154.387 -131.96,0 -222.65,94.398 -232.93,241.219 h 570.26 z M 2346.63,730.359 H 2229.39 V 19.7109 h 117.24 z m -115.84,95.551 c -15.85,15.281 -23.85,34.988 -23.85,59.41 0,24.418 8,44.129 23.85,58.84 15.86,15.281 34.57,22.559 56.56,22.559 22.13,0 41.27,-7.278 57.12,-22.559 16.43,-14.711 24.29,-34.422 24.29,-58.84 0,-24.422 -8,-44.129 -24.29,-59.41 -15.85,-14.711 -35.12,-22 -57.12,-22 -21.99,0 -40.7,7.289 -56.56,22 z M 1864.55,432.59 c -127.53,24.281 -179.52,58.269 -179.52,117.68 0,63.121 69.41,85.691 134.25,85.691 85.97,0 146.25,-40.563 178.94,-120.68 l 2.01,-4.851 4.57,2.57 83.26,48.551 3.43,2.008 -1.58,3.711 c -46.41,112.39 -137.96,169.378 -272.06,169.378 -120.25,0 -241.78,-65.41 -241.78,-190.519 0,-104.109 83.11,-177.231 234.07,-205.66 124.25,-23.129 172.52,-56.547 172.52,-119.098 0,-72.562 -56.69,-117.539 -148.1,-117.539 -90.4,0 -160.96,56.129 -198.37,158.09 l -1.85,5.148 -4.72,-2.859 -90.26,-55.563 -3.14,-1.988 1.28,-3.57 C 1586.35,76.1211 1697.46,0.289063 1834.56,0.289063 c 80.69,0 148.82,23.421837 197.09,67.839837 44.13,40.7031 68.41,96.5431 68.41,157.3831 0,109.109 -76.98,176.949 -235.51,207.078 z m 3058.3,0 c -127.53,24.281 -179.51,58.269 -179.51,117.68 0,63.121 69.41,85.691 134.24,85.691 85.98,0 146.25,-40.563 178.95,-120.68 l 2,-4.851 4.57,2.57 83.26,48.551 3.43,2.008 -1.57,3.711 c -46.41,112.39 -137.97,169.378 -272.07,169.378 -120.25,0 -241.78,-65.41 -241.78,-190.519 0,-104.109 83.12,-177.231 234.07,-205.66 124.26,-23.129 172.53,-56.547 172.53,-119.098 0,-72.562 -56.7,-117.539 -148.11,-117.539 -90.4,0 -160.95,56.129 -198.37,158.09 l -1.85,5.148 -4.72,-2.859 -90.25,-55.563 -3.15,-1.988 1.29,-3.57 C 4644.65,76.1211 4755.76,0.289063 4892.86,0.289063 c 80.7,0 148.82,23.421837 197.09,67.839837 44.13,40.7031 68.41,96.5431 68.41,157.3831 0,109.109 -76.98,176.949 -235.51,207.078 z m -617.24,0 c -127.54,24.281 -179.53,58.269 -179.53,117.68 0,63.121 69.42,85.691 134.25,85.691 85.98,0 146.24,-40.563 178.95,-120.68 l 2,-4.851 4.57,2.57 83.26,48.551 3.43,2.008 -1.57,3.711 c -46.42,112.39 -137.96,169.378 -272.06,169.378 -120.26,0 -241.94,-65.41 -241.94,-190.519 0,-104.109 83.12,-177.231 234.08,-205.66 124.25,-23.129 172.53,-56.547 172.53,-119.098 0,-72.562 -56.7,-117.539 -148.11,-117.539 -90.4,0 -160.96,56.129 -198.37,158.09 l -1.85,5.148 -4.72,-2.859 -90.26,-55.563 -3.14,-1.988 1.28,-3.57 C 4027.26,76.1211 4138.37,0.289063 4275.47,0.289063 c 80.69,0 148.82,23.421837 197.09,67.839837 44.13,40.7031 68.41,96.5431 68.41,157.3831 0.13,109.109 -76.84,176.949 -235.36,207.078 z M 2508.99,728.281 h 104.28 l 10,-114.293 h 5.72 c 38.57,74.293 112.86,127.141 225.71,127.141 161.43,0 255.72,-101.418 255.72,-268.57 V 19.7109 h -120 V 453.988 c 0,114.293 -52.86,180 -168.57,180 -121.43,0 -192.86,-85.718 -192.86,-232.859 V 19.7109 h -120 z M 397.141,132.57 c 118.574,0 204.285,61.418 204.285,175.711 0,117.141 -77.149,174.289 -204.285,174.289 H 122.852 v -350 z m -25.715,458.571 c 115.715,0 194.289,51.429 194.289,168.57 0,94.289 -64.289,148.57 -178.574,148.57 H 122.852 V 591.141 Z M 0,1019.71 h 401.426 c 168.566,0 291.426,-95.71 291.426,-259.999 0,-108.57 -51.426,-171.43 -125.711,-204.281 v -5.719 C 644.289,518.289 730,449.711 730,308.281 730,125.422 607.148,19.7109 411.426,19.7109 H 0 V 1019.71" }))))))), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col mr-0 pr-0", onClick: () => this.clickOnHeader.emit(event) }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-head-menu", { headNav: this.headNav, headText: this.headText }))))));
    }
};
SAbdullakhHeader.style = sAbdullakhHeaderCss;

const sAbdullakhIconsCss = ".preview_block_img{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;height:100%;-ms-flex-align:center;align-items:center}.preview_img_one{background-image:url(\"https://assets.revolut.com/media/business/awards/investor-allstars.png\");background-size:cover;background-position:center;width:165px;height:23px}.preview_img_two{background-image:url(\"https://assets.revolut.com/media/business/awards/uxuk.png\");background-size:cover;background-position:center;width:164px;height:50px}.preview_img_three{background-image:url(\"https://assets.revolut.com/media/business/awards/award-ukTechAwards.svg\");background-size:cover;background-position:center;width:165px;height:50px}.preview_img_four{background-image:url(\"https://assets.revolut.com/media/business/awards/award-businessAwards.svg\");background-size:cover;background-position:center;width:97px;height:72px}@media (max-width: 995px){.preview_block_img{margin-top:20px}}";

const SAbdullakhIcons = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "preview_block_img" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.bckgrndClass(this.arr.class) })));
    }
    bckgrndClass(x) {
        switch (x) {
            case 'one':
                return 'preview_img_one';
            case 'two':
                return 'preview_img_two';
            case 'three':
                return 'preview_img_three';
            case 'four':
                return 'preview_img_four';
        }
    }
};
SAbdullakhIcons.style = sAbdullakhIconsCss;

const sAbdullakhIconsBlockCss = ".preview_block{margin:150px 0}";

const SAbdullakhIconsBlock = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnIconsBlock = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnIconsBlock", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container-fluid preview_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row", onClick: () => this.clickOnIconsBlock.emit(this.previewBackground) }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(IconBlocks, { arr: this.previewBackground })))));
    }
};
/*
* компонентная функция для вывода элементов news-main-block
 */
const IconBlocks = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-3 col-6" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-icons", { arr: item })));
    });
};
SAbdullakhIconsBlock.style = sAbdullakhIconsBlockCss;

const sAbdullakhLinkBlockCss = ".link_block{text-align:center;padding:330px 0 150px 0}.link_block_title h2{font-weight:600;font-size:4.5rem;line-height:5.625rem}.link_block_subtitle{font-size:1.25rem;line-height:2rem;margin-top:1.25rem;color:rgb(139, 149, 158)}.link_block_btn{margin-top:1rem}.link_block_btn button{margin-top:2rem;width:300px;text-align:center;display:inline-block;line-height:1.5rem;font-size:1rem;font-weight:500;color:white;margin-bottom:0.5rem;background-color:rgb(6, 102, 235);padding:0.75rem 1rem;border-width:initial;border-style:none;border-color:initial;-o-border-image:initial;border-image:initial;border-radius:0.75rem;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;text-decoration:none}@media (max-width: 768px){.link_block_title h2{font-size:3.5rem}}@media (max-width: 576px){.link_block_title h2{font-size:2.5rem}.link_block_subtitle{font-size:1rem}}";

const SAbdullakhLinkBlock = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnLinkBlock = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnLinkBlock", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container link_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "link_block_title" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", { onClick: () => this.clickOnLinkBlock.emit(this.linkBlock.title) }, this.linkBlock.title)), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "link_block_subtitle", onClick: () => this.clickOnLinkBlock.emit(this.linkBlock.subtitle) }, this.linkBlock.subtitle), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "link_block_btn" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { onClick: () => this.clickOnLinkBlock.emit(this.linkBlock.btnText) }, this.linkBlock.btnText))));
    }
};
SAbdullakhLinkBlock.style = sAbdullakhLinkBlockCss;

const sAbdullakhListBlockCss = ".list_block_title h3{font-weight:600;padding-right:20px}.list_block_info_blocks{padding:10px 0 0 0}.list_block ul li{list-style:none;padding:0 0 0 20px;color:rgb(139, 149, 158);line-height:1.65}.list_block_info_block::before{content:\"\\f14a\";position:relative;right:25px;top:25px;font-family:Font Awesome\\ 5 Free, serif;color:rgb(0, 117, 235)}.list_block_info_block a{color:rgb(0, 117, 235)}@media (max-width: 576px){.list_block_title h3{font-size:15px}.list_block_info_blocks{font-size:15px}}";

const SAbdullakhListBlock = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnPersonalSecurity = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnPersonalSecurity", 7);
        this.clickOnExpenseManagement = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnExpenseManagement", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { class: "list_block_info_block", onClick: () => this.clickOnPersonalSecurity.emit(this.arr.text) }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.arr.text)));
    }
};
SAbdullakhListBlock.style = sAbdullakhListBlockCss;

const sAbdullakhMultiCurrencySlaiderCss = ".multy_currency_title_block{margin-top:100px;text-align:center}.multy_currency_title h3{font-weight:600}.multy_currency_subtitle{text-align:center;font-weight:500;color:#8f9193}.multy_currency_subtitle a{color:rgb(0, 117, 235)!important;padding:0 5px}.multy_currency_subtitle a:hover{text-decoration:none;color:#0056fb!important}.multi_currency_carusel_preBlock{padding-top:40px;max-width:2400px}.multi_currency_carusel{position:absolute}.slaider_before{content:\"\";position:absolute;left:-1px;top:0px;bottom:0px;width:10rem;z-index:1;background:linear-gradient(90deg, rgb(255, 255, 255) 0px, rgba(255, 255, 255, 0) 100%)}#multi_currency_carusel_one_position{position:relative;-webkit-transition:all ease 2s;transition:all ease 2s}#multi_currency_carusel_two_position{position:relative;-webkit-transition:all ease 10s;transition:all ease 10s}.multi_currency_carusel_icon{-ms-flex-negative:0;flex-shrink:0;-webkit-box-shadow:rgba(0, 0, 0, 0.09) 0px 0px 1.5rem;box-shadow:rgba(0, 0, 0, 0.09) 0px 0px 1.5rem;margin-right:2rem;border-radius:1.5rem}";

const SAbdullakhMultiCurrencySlaider = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        // autoSlider();
        // let left = 0;
        // var tim;
        // var tim2;
        //
        //
        // function autoSlider() {
        //   tim = setTimeout(() =>{
        //     let polosa = document.getElementById("multi_currency_carusel_one_position");
        //     left = left - 10;
        //     if (left < -1000) {
        //       left = 0
        //     }
        //     polosa.style.left = left +'px';
        //     autoSlider();
        //   }, 300)
        //
        //   tim2 = setTimeout(() =>{
        //     let polosaTwo = document.getElementById("multi_currency_carusel_two_position");
        //     // left = left - 10;
        //     // if (left < -1000) {
        //     //   left = 0
        //     // }
        //     polosaTwo.style.right = left +'px';
        //     autoSlider();
        //   }, 300)
        // }
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "multy_currency_title_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "multy_currency_title h3Title" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, "Save money with our multi-currency company cards")), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "multy_currency_subtitle" }, "Global spending without the hidden FX fees. Spend money with our physical and virtual", Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("br", null), "cards at the", Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", null, "interbank exchange rate"), "in over 150 currencies"), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "multi_currency_carusel_preBlock" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "multi_currency_carusel_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "multi_currency_carusel", id: "multi_currency_carusel_one_position" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M36.3499 56.9281C36.3499 60.4001 34.9801 63.3567 32.2405 65.7979C29.8807 67.9001 27.6022 68.9512 25.4051 68.9512C22.6248 68.9512 19.9123 67.127 17.2676 63.4788C17.4982 63.6551 17.7966 63.8449 18.1627 64.0484C19.0443 64.4146 19.9462 64.7061 20.8684 64.9231C21.7907 65.1537 22.7333 65.2758 23.6962 65.2893C28.0904 65.2893 31.5353 62.9227 34.0307 58.1894C34.2071 57.8368 34.2952 57.491 34.2952 57.1519C34.2952 55.3074 32.9254 53.4222 30.1858 51.4964L31.9557 47.6514C32.6067 48.0719 33.2034 48.6144 33.7459 49.2789C34.2884 49.9299 34.7495 50.6759 35.1293 51.5167C35.5226 52.344 35.821 53.2188 36.0244 54.141C36.2414 55.0633 36.3499 55.9923 36.3499 56.9281ZM41.4772 60.1978C42.6197 60.1978 43.5206 59.2969 43.5206 58.1543C43.5206 56.9897 42.6197 56.0889 41.4772 56.0889C40.3346 56.0889 39.4117 56.9897 39.4117 58.1543C39.4117 59.2969 40.3346 60.1978 41.4772 60.1978ZM70.9365 54.731C70.9365 57.2265 70.4211 59.1049 69.3904 60.3662C67.9121 62.1835 65.898 63.6483 63.3483 64.7604C62.1006 65.3165 60.8664 65.7369 59.6458 66.0217C58.4252 66.3201 57.2181 66.4557 56.0246 66.4286C54.6277 66.4286 53.3732 66.2319 52.2611 65.8386C51.1625 65.4453 50.2267 64.8689 49.4536 64.1094C48.6806 63.3499 48.0771 62.4209 47.6431 61.3223C47.2226 60.2373 47.0124 58.9964 47.0124 57.5995C47.0124 56.2432 47.2769 54.6971 47.8058 52.9611C48.4161 50.981 49.0942 49.6112 49.8402 48.8517C48.9451 50.5606 48.4975 52.873 48.4975 55.7889C48.4975 60.0746 50.4437 62.2175 54.3361 62.2175C57.4012 62.2175 60.2018 61.8716 62.738 61.1799C66.5626 60.1356 68.4749 58.4675 68.4749 56.1754C68.4749 55.7957 68.4003 55.3074 68.2511 54.7107C67.79 54.7785 67.356 54.8259 66.9491 54.8531C66.5558 54.8666 66.1964 54.8734 65.8709 54.8734C62.0328 54.8734 60.1137 53.4222 60.1137 50.5199C60.1137 49.0416 60.5951 47.292 61.5581 45.2712C62.6702 42.9928 63.8569 41.8535 65.1182 41.8535C66.922 41.8535 68.4003 43.6099 69.5531 47.1225C70.4753 49.8621 70.9365 52.3983 70.9365 54.731ZM67.8849 50.6216C67.8849 49.9842 67.3967 49.0958 66.4202 47.9566C65.4573 46.8174 64.6706 46.2477 64.0603 46.2477C63.8976 46.2477 63.7281 46.3291 63.5517 46.4919C63.389 46.6546 63.2398 46.8716 63.1042 47.1429C62.9686 47.4005 62.8601 47.6854 62.7787 47.9973C62.7109 48.3092 62.677 48.6076 62.677 48.8924C62.677 50.2486 63.7213 50.9268 65.8099 50.9268C66.7186 50.9268 67.4102 50.8454 67.8849 50.6826V50.6216ZM66.8677 37.7645L62.5956 35.0384L64.3858 32.1496L68.6783 34.7129L66.8677 37.7645ZM56.6146 35.3232L58.3438 32.3124L62.5956 35.0384L60.846 37.8662L56.6146 35.3232Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M56.2905 29.2056C55.4775 28.9639 53.6978 28.7881 52.3354 28.7881C45.0625 28.7881 38.8442 32.7871 37.1523 40.6533H32.0986V42.9604H36.8008C36.7349 43.6636 36.6909 44.3887 36.6909 45.1577C36.6909 45.9268 36.7349 46.6519 36.8008 47.355H32.0986V49.6841H37.1523C38.8662 57.5063 45.0845 61.5054 52.3354 61.5054C53.6978 61.5054 55.4775 61.3516 56.2905 61.1099V58.3853C55.4556 58.627 53.6978 58.7368 52.3354 58.7368C46.6006 58.7368 41.8765 55.6387 40.3384 49.6841H52.6431V47.355H39.8989C39.833 46.6519 39.7891 45.9268 39.7891 45.1577C39.7891 44.3887 39.833 43.6636 39.8989 42.9604H52.6431V40.6533H40.3384C41.8765 34.6768 46.5786 31.5786 52.3354 31.5786C53.6978 31.5786 55.4556 31.7324 56.2905 31.9302V29.2056Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M32.6406 61V46.6079H47.1865V43.9272H32.6406V32.0181H48.4609V29.2935H29.6523V61H32.6406ZM53.2833 32.4355V38.1484H49.8775V40.5654H53.2833V55.375C53.2833 59.5059 54.8213 61.1318 58.6446 61.1318C59.2598 61.1318 60.4903 61.0659 60.7979 61V58.5171C60.6221 58.561 59.5235 58.605 59.2159 58.605C57.1065 58.605 56.1837 57.5942 56.1837 55.2432V40.5654H60.688V38.1484H56.1837V32.4355H53.2833Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M35.6623 58.4392V58.3524C38.158 57.1589 40.8707 54.75 40.8707 50.7135C40.8707 49.303 40.5668 47.9141 40.1328 46.5686H49.4861V44.138H39.2865C38.5269 42.033 37.7891 39.928 37.7891 37.6927C37.7891 34.0035 40.6319 31.6163 45.6016 31.6163C48.401 31.6163 51.0269 32.2023 52.1554 32.8533V30.184C50.8533 29.533 48.3359 28.9688 45.4714 28.9688C38.7222 28.9688 34.7726 32.3542 34.7726 37.7578C34.7726 39.9714 35.5104 42.0764 36.27 44.138H31.1484V46.5686H37.1597C37.6155 47.9792 37.9627 49.3898 37.9627 50.822C37.9627 54.6415 34.816 57.5061 30.8229 58.4609V61H53.9132V58.4392H35.6623Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M49.3472 37.709C49.3472 31.7764 46.8643 29.2935 41.6787 29.2935H32.3623V61H35.0649V32.2817H40.7998C44.8867 32.2817 46.6445 33.5781 46.6445 38.2363V52.6284H49.3472V37.709ZM56.4004 52.0132V29.2935H53.6978V52.0352C53.6978 56.8911 52.1597 58.0117 47.9189 58.0117H42.1182V37.5991H39.4375V61H48.6221C54.0493 61 56.4004 58.2974 56.4004 52.0132Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M52.5771 54.1885V51.8813H45.8975V47.8384H52.5771V45.5093H46.9082L57.2573 29.2935H53.8076L44.4692 44.125H44.3374L34.9771 29.2935H31.5273L41.8984 45.5093H36.2075V47.8384H42.9092V51.8813H36.2075V54.1885H42.9092V61H45.8975V54.1885H52.5771Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M30.625 48.959V29.2935H27.7026V61H30.625V52.145L33.1738 49.7939L42.3145 61H45.7202L35.2612 48.0142L45.5225 38.1484H41.9189L30.625 48.959ZM48.0597 61H50.9601V46.7617C50.9601 43.0703 53.0255 40.5435 56.2775 40.5435C57.2662 40.5435 58.0792 40.6973 58.4528 40.873V38.0166C58.1012 37.9287 57.42 37.7749 56.651 37.7749C53.8385 37.7749 51.7071 39.4229 50.8722 42.2134H50.8063V38.1484H48.0597V61Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M24.9546 61V49.6841L28.8657 45.4434L41.4561 61H45.3013L30.9751 43.312L44.0049 29.2935H40.2036L25.1304 45.729H24.9546V29.2935H21.9663V61H24.9546ZM64.8673 45.3774C64.296 41.2905 60.8463 37.7749 55.463 37.7749C49.2447 37.7749 45.1359 42.3672 45.1359 49.5742C45.1359 56.8911 49.2447 61.3735 55.485 61.3735C60.5387 61.3735 64.2521 58.2974 64.8893 53.9248H62.0109C61.3517 56.8911 58.9567 58.8027 55.507 58.8027C51.0465 58.8027 48.1022 55.3091 48.1022 49.5742C48.1022 43.9272 51.0245 40.3457 55.485 40.3457C59.0885 40.3457 61.3956 42.5649 62.0109 45.3774H64.8673ZM56.5836 34.6548L62.4943 28.019H59.7037L55.485 32.8311H55.3751L51.1564 28.019H48.3658L54.2985 34.6548H56.5836Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M45.0605 45.8828C50.29 45.9927 53.1465 48.168 53.1465 52.0791C53.1465 56.1221 50.312 58.3193 45.0605 58.3413V45.8828ZM37.7656 58.3413V45.8828H42.7754V58.3413H37.7656ZM37.7656 31.9521H42.7754V43.2681H37.7656V31.9521ZM45.0605 31.9521C49.1255 32.106 51.5645 34.1714 51.5645 37.5991C51.5645 40.9829 49.2354 42.9165 45.0605 43.2241V31.9521ZM48.7739 44.103C52.1357 43.5098 54.5967 40.6753 54.5967 37.1157C54.5967 32.3037 50.9932 29.2935 45.1484 29.2935H45.0605V25.8657H42.7754V29.2935H34.7554V61H42.7754V64.2959H45.0605V61H45.3901C52.2676 61 56.2227 57.748 56.2227 52.2329C56.2227 47.8823 53.2344 44.8721 48.7739 44.3887V44.103Z", fill: "#241D4F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M41.6548 61C50.4219 61 56.1348 55.2871 56.1348 47.9263H53.2344C53.2344 53.8149 48.5322 58.0337 42.4678 58.0337V46.2783L49.3452 43.1143V40.5654L42.4678 43.7295V38.8296L49.3452 35.6655V33.1167L42.4678 36.2588V29.2935H39.4795V37.6431L34.5356 39.9282V42.4771L39.4795 40.1919V45.0918L34.5356 47.377V49.9478L39.4795 47.6626V61H41.6548Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M43.5459 64.2959V61.1758C49.6763 60.7583 53.5654 57.3745 53.5654 52.3208C53.5654 47.8384 50.9507 45.3115 44.8203 43.7734L43.5459 43.4438V31.4907C47.2812 31.8203 50.0278 34.2373 50.1377 37.2695H52.9941C52.8403 32.6992 48.9951 29.2715 43.5459 28.876V25.8657H41.2607V28.8979C35.6138 29.3154 31.9004 32.6553 31.9004 37.3794C31.9004 41.5103 34.5151 44.125 40.0522 45.5312L41.2607 45.8608V58.583C37.1079 58.2095 34.2295 55.7705 33.9878 52.4087H31.1313C31.1973 57.3086 35.3281 60.8242 41.2607 61.1978V64.2959H43.5459ZM50.665 52.5405C50.665 56.0342 47.8525 58.4292 43.5459 58.627V46.3223C48.6216 47.4648 50.665 49.2666 50.665 52.5405ZM34.7788 37.2256C34.7788 34.0615 37.5254 31.6665 41.2607 31.4907V42.9385C36.7783 41.9497 34.7788 40.1699 34.7788 37.2256Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M29.7578 61H46.7427V58.583H33.0977V58.5171L46.6987 40.3457V38.1484H29.7578V40.5654H43.3589V40.6313L29.7578 58.8467V61ZM56.399 40.5435L53.7843 41.8838V29.2935H50.8839V43.3779L48.2911 44.7183V47.1572L50.8839 45.8169V61H53.7843V44.3228L56.399 42.9604V40.5435Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M36.3499 56.9281C36.3499 60.4001 34.9801 63.3567 32.2405 65.7979C29.8807 67.9001 27.6022 68.9512 25.4051 68.9512C22.6248 68.9512 19.9123 67.127 17.2676 63.4788C17.4982 63.6551 17.7966 63.8449 18.1627 64.0484C19.0443 64.4146 19.9462 64.7061 20.8684 64.9231C21.7907 65.1537 22.7333 65.2758 23.6962 65.2893C28.0904 65.2893 31.5353 62.9227 34.0307 58.1894C34.2071 57.8368 34.2952 57.491 34.2952 57.1519C34.2952 55.3074 32.9254 53.4222 30.1858 51.4964L31.9557 47.6514C32.6067 48.0719 33.2034 48.6144 33.7459 49.2789C34.2884 49.9299 34.7495 50.6759 35.1293 51.5167C35.5226 52.344 35.821 53.2188 36.0244 54.141C36.2414 55.0633 36.3499 55.9923 36.3499 56.9281ZM41.4772 60.1978C42.6197 60.1978 43.5206 59.2969 43.5206 58.1543C43.5206 56.9897 42.6197 56.0889 41.4772 56.0889C40.3346 56.0889 39.4117 56.9897 39.4117 58.1543C39.4117 59.2969 40.3346 60.1978 41.4772 60.1978ZM70.9365 54.731C70.9365 57.2265 70.4211 59.1049 69.3904 60.3662C67.9121 62.1835 65.898 63.6483 63.3483 64.7604C62.1006 65.3165 60.8664 65.7369 59.6458 66.0217C58.4252 66.3201 57.2181 66.4557 56.0246 66.4286C54.6277 66.4286 53.3732 66.2319 52.2611 65.8386C51.1625 65.4453 50.2267 64.8689 49.4536 64.1094C48.6806 63.3499 48.0771 62.4209 47.6431 61.3223C47.2226 60.2373 47.0124 58.9964 47.0124 57.5995C47.0124 56.2432 47.2769 54.6971 47.8058 52.9611C48.4161 50.981 49.0942 49.6112 49.8402 48.8517C48.9451 50.5606 48.4975 52.873 48.4975 55.7889C48.4975 60.0746 50.4437 62.2175 54.3361 62.2175C57.4012 62.2175 60.2018 61.8716 62.738 61.1799C66.5626 60.1356 68.4749 58.4675 68.4749 56.1754C68.4749 55.7957 68.4003 55.3074 68.2511 54.7107C67.79 54.7785 67.356 54.8259 66.9491 54.8531C66.5558 54.8666 66.1964 54.8734 65.8709 54.8734C62.0328 54.8734 60.1137 53.4222 60.1137 50.5199C60.1137 49.0416 60.5951 47.292 61.5581 45.2712C62.6702 42.9928 63.8569 41.8535 65.1182 41.8535C66.922 41.8535 68.4003 43.6099 69.5531 47.1225C70.4753 49.8621 70.9365 52.3983 70.9365 54.731ZM67.8849 50.6216C67.8849 49.9842 67.3967 49.0958 66.4202 47.9566C65.4573 46.8174 64.6706 46.2477 64.0603 46.2477C63.8976 46.2477 63.7281 46.3291 63.5517 46.4919C63.389 46.6546 63.2398 46.8716 63.1042 47.1429C62.9686 47.4005 62.8601 47.6854 62.7787 47.9973C62.7109 48.3092 62.677 48.6076 62.677 48.8924C62.677 50.2486 63.7213 50.9268 65.8099 50.9268C66.7186 50.9268 67.4102 50.8454 67.8849 50.6826V50.6216ZM66.8677 37.7645L62.5956 35.0384L64.3858 32.1496L68.6783 34.7129L66.8677 37.7645ZM56.6146 35.3232L58.3438 32.3124L62.5956 35.0384L60.846 37.8662L56.6146 35.3232Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M56.2905 29.2056C55.4775 28.9639 53.6978 28.7881 52.3354 28.7881C45.0625 28.7881 38.8442 32.7871 37.1523 40.6533H32.0986V42.9604H36.8008C36.7349 43.6636 36.6909 44.3887 36.6909 45.1577C36.6909 45.9268 36.7349 46.6519 36.8008 47.355H32.0986V49.6841H37.1523C38.8662 57.5063 45.0845 61.5054 52.3354 61.5054C53.6978 61.5054 55.4775 61.3516 56.2905 61.1099V58.3853C55.4556 58.627 53.6978 58.7368 52.3354 58.7368C46.6006 58.7368 41.8765 55.6387 40.3384 49.6841H52.6431V47.355H39.8989C39.833 46.6519 39.7891 45.9268 39.7891 45.1577C39.7891 44.3887 39.833 43.6636 39.8989 42.9604H52.6431V40.6533H40.3384C41.8765 34.6768 46.5786 31.5786 52.3354 31.5786C53.6978 31.5786 55.4556 31.7324 56.2905 31.9302V29.2056Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M32.6406 61V46.6079H47.1865V43.9272H32.6406V32.0181H48.4609V29.2935H29.6523V61H32.6406ZM53.2833 32.4355V38.1484H49.8775V40.5654H53.2833V55.375C53.2833 59.5059 54.8213 61.1318 58.6446 61.1318C59.2598 61.1318 60.4903 61.0659 60.7979 61V58.5171C60.6221 58.561 59.5235 58.605 59.2159 58.605C57.1065 58.605 56.1837 57.5942 56.1837 55.2432V40.5654H60.688V38.1484H56.1837V32.4355H53.2833Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M35.6623 58.4392V58.3524C38.158 57.1589 40.8707 54.75 40.8707 50.7135C40.8707 49.303 40.5668 47.9141 40.1328 46.5686H49.4861V44.138H39.2865C38.5269 42.033 37.7891 39.928 37.7891 37.6927C37.7891 34.0035 40.6319 31.6163 45.6016 31.6163C48.401 31.6163 51.0269 32.2023 52.1554 32.8533V30.184C50.8533 29.533 48.3359 28.9688 45.4714 28.9688C38.7222 28.9688 34.7726 32.3542 34.7726 37.7578C34.7726 39.9714 35.5104 42.0764 36.27 44.138H31.1484V46.5686H37.1597C37.6155 47.9792 37.9627 49.3898 37.9627 50.822C37.9627 54.6415 34.816 57.5061 30.8229 58.4609V61H53.9132V58.4392H35.6623Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M49.3472 37.709C49.3472 31.7764 46.8643 29.2935 41.6787 29.2935H32.3623V61H35.0649V32.2817H40.7998C44.8867 32.2817 46.6445 33.5781 46.6445 38.2363V52.6284H49.3472V37.709ZM56.4004 52.0132V29.2935H53.6978V52.0352C53.6978 56.8911 52.1597 58.0117 47.9189 58.0117H42.1182V37.5991H39.4375V61H48.6221C54.0493 61 56.4004 58.2974 56.4004 52.0132Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M52.5771 54.1885V51.8813H45.8975V47.8384H52.5771V45.5093H46.9082L57.2573 29.2935H53.8076L44.4692 44.125H44.3374L34.9771 29.2935H31.5273L41.8984 45.5093H36.2075V47.8384H42.9092V51.8813H36.2075V54.1885H42.9092V61H45.8975V54.1885H52.5771Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M30.625 48.959V29.2935H27.7026V61H30.625V52.145L33.1738 49.7939L42.3145 61H45.7202L35.2612 48.0142L45.5225 38.1484H41.9189L30.625 48.959ZM48.0597 61H50.9601V46.7617C50.9601 43.0703 53.0255 40.5435 56.2775 40.5435C57.2662 40.5435 58.0792 40.6973 58.4528 40.873V38.0166C58.1012 37.9287 57.42 37.7749 56.651 37.7749C53.8385 37.7749 51.7071 39.4229 50.8722 42.2134H50.8063V38.1484H48.0597V61Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M24.9546 61V49.6841L28.8657 45.4434L41.4561 61H45.3013L30.9751 43.312L44.0049 29.2935H40.2036L25.1304 45.729H24.9546V29.2935H21.9663V61H24.9546ZM64.8673 45.3774C64.296 41.2905 60.8463 37.7749 55.463 37.7749C49.2447 37.7749 45.1359 42.3672 45.1359 49.5742C45.1359 56.8911 49.2447 61.3735 55.485 61.3735C60.5387 61.3735 64.2521 58.2974 64.8893 53.9248H62.0109C61.3517 56.8911 58.9567 58.8027 55.507 58.8027C51.0465 58.8027 48.1022 55.3091 48.1022 49.5742C48.1022 43.9272 51.0245 40.3457 55.485 40.3457C59.0885 40.3457 61.3956 42.5649 62.0109 45.3774H64.8673ZM56.5836 34.6548L62.4943 28.019H59.7037L55.485 32.8311H55.3751L51.1564 28.019H48.3658L54.2985 34.6548H56.5836Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M45.0605 45.8828C50.29 45.9927 53.1465 48.168 53.1465 52.0791C53.1465 56.1221 50.312 58.3193 45.0605 58.3413V45.8828ZM37.7656 58.3413V45.8828H42.7754V58.3413H37.7656ZM37.7656 31.9521H42.7754V43.2681H37.7656V31.9521ZM45.0605 31.9521C49.1255 32.106 51.5645 34.1714 51.5645 37.5991C51.5645 40.9829 49.2354 42.9165 45.0605 43.2241V31.9521ZM48.7739 44.103C52.1357 43.5098 54.5967 40.6753 54.5967 37.1157C54.5967 32.3037 50.9932 29.2935 45.1484 29.2935H45.0605V25.8657H42.7754V29.2935H34.7554V61H42.7754V64.2959H45.0605V61H45.3901C52.2676 61 56.2227 57.748 56.2227 52.2329C56.2227 47.8823 53.2344 44.8721 48.7739 44.3887V44.103Z", fill: "#241D4F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M41.6548 61C50.4219 61 56.1348 55.2871 56.1348 47.9263H53.2344C53.2344 53.8149 48.5322 58.0337 42.4678 58.0337V46.2783L49.3452 43.1143V40.5654L42.4678 43.7295V38.8296L49.3452 35.6655V33.1167L42.4678 36.2588V29.2935H39.4795V37.6431L34.5356 39.9282V42.4771L39.4795 40.1919V45.0918L34.5356 47.377V49.9478L39.4795 47.6626V61H41.6548Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M43.5459 64.2959V61.1758C49.6763 60.7583 53.5654 57.3745 53.5654 52.3208C53.5654 47.8384 50.9507 45.3115 44.8203 43.7734L43.5459 43.4438V31.4907C47.2812 31.8203 50.0278 34.2373 50.1377 37.2695H52.9941C52.8403 32.6992 48.9951 29.2715 43.5459 28.876V25.8657H41.2607V28.8979C35.6138 29.3154 31.9004 32.6553 31.9004 37.3794C31.9004 41.5103 34.5151 44.125 40.0522 45.5312L41.2607 45.8608V58.583C37.1079 58.2095 34.2295 55.7705 33.9878 52.4087H31.1313C31.1973 57.3086 35.3281 60.8242 41.2607 61.1978V64.2959H43.5459ZM50.665 52.5405C50.665 56.0342 47.8525 58.4292 43.5459 58.627V46.3223C48.6216 47.4648 50.665 49.2666 50.665 52.5405ZM34.7788 37.2256C34.7788 34.0615 37.5254 31.6665 41.2607 31.4907V42.9385C36.7783 41.9497 34.7788 40.1699 34.7788 37.2256Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M29.7578 61H46.7427V58.583H33.0977V58.5171L46.6987 40.3457V38.1484H29.7578V40.5654H43.3589V40.6313L29.7578 58.8467V61ZM56.399 40.5435L53.7843 41.8838V29.2935H50.8839V43.3779L48.2911 44.7183V47.1572L50.8839 45.8169V61H53.7843V44.3228L56.399 42.9604V40.5435Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M36.3499 56.9281C36.3499 60.4001 34.9801 63.3567 32.2405 65.7979C29.8807 67.9001 27.6022 68.9512 25.4051 68.9512C22.6248 68.9512 19.9123 67.127 17.2676 63.4788C17.4982 63.6551 17.7966 63.8449 18.1627 64.0484C19.0443 64.4146 19.9462 64.7061 20.8684 64.9231C21.7907 65.1537 22.7333 65.2758 23.6962 65.2893C28.0904 65.2893 31.5353 62.9227 34.0307 58.1894C34.2071 57.8368 34.2952 57.491 34.2952 57.1519C34.2952 55.3074 32.9254 53.4222 30.1858 51.4964L31.9557 47.6514C32.6067 48.0719 33.2034 48.6144 33.7459 49.2789C34.2884 49.9299 34.7495 50.6759 35.1293 51.5167C35.5226 52.344 35.821 53.2188 36.0244 54.141C36.2414 55.0633 36.3499 55.9923 36.3499 56.9281ZM41.4772 60.1978C42.6197 60.1978 43.5206 59.2969 43.5206 58.1543C43.5206 56.9897 42.6197 56.0889 41.4772 56.0889C40.3346 56.0889 39.4117 56.9897 39.4117 58.1543C39.4117 59.2969 40.3346 60.1978 41.4772 60.1978ZM70.9365 54.731C70.9365 57.2265 70.4211 59.1049 69.3904 60.3662C67.9121 62.1835 65.898 63.6483 63.3483 64.7604C62.1006 65.3165 60.8664 65.7369 59.6458 66.0217C58.4252 66.3201 57.2181 66.4557 56.0246 66.4286C54.6277 66.4286 53.3732 66.2319 52.2611 65.8386C51.1625 65.4453 50.2267 64.8689 49.4536 64.1094C48.6806 63.3499 48.0771 62.4209 47.6431 61.3223C47.2226 60.2373 47.0124 58.9964 47.0124 57.5995C47.0124 56.2432 47.2769 54.6971 47.8058 52.9611C48.4161 50.981 49.0942 49.6112 49.8402 48.8517C48.9451 50.5606 48.4975 52.873 48.4975 55.7889C48.4975 60.0746 50.4437 62.2175 54.3361 62.2175C57.4012 62.2175 60.2018 61.8716 62.738 61.1799C66.5626 60.1356 68.4749 58.4675 68.4749 56.1754C68.4749 55.7957 68.4003 55.3074 68.2511 54.7107C67.79 54.7785 67.356 54.8259 66.9491 54.8531C66.5558 54.8666 66.1964 54.8734 65.8709 54.8734C62.0328 54.8734 60.1137 53.4222 60.1137 50.5199C60.1137 49.0416 60.5951 47.292 61.5581 45.2712C62.6702 42.9928 63.8569 41.8535 65.1182 41.8535C66.922 41.8535 68.4003 43.6099 69.5531 47.1225C70.4753 49.8621 70.9365 52.3983 70.9365 54.731ZM67.8849 50.6216C67.8849 49.9842 67.3967 49.0958 66.4202 47.9566C65.4573 46.8174 64.6706 46.2477 64.0603 46.2477C63.8976 46.2477 63.7281 46.3291 63.5517 46.4919C63.389 46.6546 63.2398 46.8716 63.1042 47.1429C62.9686 47.4005 62.8601 47.6854 62.7787 47.9973C62.7109 48.3092 62.677 48.6076 62.677 48.8924C62.677 50.2486 63.7213 50.9268 65.8099 50.9268C66.7186 50.9268 67.4102 50.8454 67.8849 50.6826V50.6216ZM66.8677 37.7645L62.5956 35.0384L64.3858 32.1496L68.6783 34.7129L66.8677 37.7645ZM56.6146 35.3232L58.3438 32.3124L62.5956 35.0384L60.846 37.8662L56.6146 35.3232Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M56.2905 29.2056C55.4775 28.9639 53.6978 28.7881 52.3354 28.7881C45.0625 28.7881 38.8442 32.7871 37.1523 40.6533H32.0986V42.9604H36.8008C36.7349 43.6636 36.6909 44.3887 36.6909 45.1577C36.6909 45.9268 36.7349 46.6519 36.8008 47.355H32.0986V49.6841H37.1523C38.8662 57.5063 45.0845 61.5054 52.3354 61.5054C53.6978 61.5054 55.4775 61.3516 56.2905 61.1099V58.3853C55.4556 58.627 53.6978 58.7368 52.3354 58.7368C46.6006 58.7368 41.8765 55.6387 40.3384 49.6841H52.6431V47.355H39.8989C39.833 46.6519 39.7891 45.9268 39.7891 45.1577C39.7891 44.3887 39.833 43.6636 39.8989 42.9604H52.6431V40.6533H40.3384C41.8765 34.6768 46.5786 31.5786 52.3354 31.5786C53.6978 31.5786 55.4556 31.7324 56.2905 31.9302V29.2056Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M32.6406 61V46.6079H47.1865V43.9272H32.6406V32.0181H48.4609V29.2935H29.6523V61H32.6406ZM53.2833 32.4355V38.1484H49.8775V40.5654H53.2833V55.375C53.2833 59.5059 54.8213 61.1318 58.6446 61.1318C59.2598 61.1318 60.4903 61.0659 60.7979 61V58.5171C60.6221 58.561 59.5235 58.605 59.2159 58.605C57.1065 58.605 56.1837 57.5942 56.1837 55.2432V40.5654H60.688V38.1484H56.1837V32.4355H53.2833Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M35.6623 58.4392V58.3524C38.158 57.1589 40.8707 54.75 40.8707 50.7135C40.8707 49.303 40.5668 47.9141 40.1328 46.5686H49.4861V44.138H39.2865C38.5269 42.033 37.7891 39.928 37.7891 37.6927C37.7891 34.0035 40.6319 31.6163 45.6016 31.6163C48.401 31.6163 51.0269 32.2023 52.1554 32.8533V30.184C50.8533 29.533 48.3359 28.9688 45.4714 28.9688C38.7222 28.9688 34.7726 32.3542 34.7726 37.7578C34.7726 39.9714 35.5104 42.0764 36.27 44.138H31.1484V46.5686H37.1597C37.6155 47.9792 37.9627 49.3898 37.9627 50.822C37.9627 54.6415 34.816 57.5061 30.8229 58.4609V61H53.9132V58.4392H35.6623Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M49.3472 37.709C49.3472 31.7764 46.8643 29.2935 41.6787 29.2935H32.3623V61H35.0649V32.2817H40.7998C44.8867 32.2817 46.6445 33.5781 46.6445 38.2363V52.6284H49.3472V37.709ZM56.4004 52.0132V29.2935H53.6978V52.0352C53.6978 56.8911 52.1597 58.0117 47.9189 58.0117H42.1182V37.5991H39.4375V61H48.6221C54.0493 61 56.4004 58.2974 56.4004 52.0132Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M52.5771 54.1885V51.8813H45.8975V47.8384H52.5771V45.5093H46.9082L57.2573 29.2935H53.8076L44.4692 44.125H44.3374L34.9771 29.2935H31.5273L41.8984 45.5093H36.2075V47.8384H42.9092V51.8813H36.2075V54.1885H42.9092V61H45.8975V54.1885H52.5771Z", fill: "#1A1C1F" }))), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "multi_currency_carusel mt-5", id: "multi_currency_carusel_two_position" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M52.5771 54.1885V51.8813H45.8975V47.8384H52.5771V45.5093H46.9082L57.2573 29.2935H53.8076L44.4692 44.125H44.3374L34.9771 29.2935H31.5273L41.8984 45.5093H36.2075V47.8384H42.9092V51.8813H36.2075V54.1885H42.9092V61H45.8975V54.1885H52.5771Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M49.3472 37.709C49.3472 31.7764 46.8643 29.2935 41.6787 29.2935H32.3623V61H35.0649V32.2817H40.7998C44.8867 32.2817 46.6445 33.5781 46.6445 38.2363V52.6284H49.3472V37.709ZM56.4004 52.0132V29.2935H53.6978V52.0352C53.6978 56.8911 52.1597 58.0117 47.9189 58.0117H42.1182V37.5991H39.4375V61H48.6221C54.0493 61 56.4004 58.2974 56.4004 52.0132Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M35.6623 58.4392V58.3524C38.158 57.1589 40.8707 54.75 40.8707 50.7135C40.8707 49.303 40.5668 47.9141 40.1328 46.5686H49.4861V44.138H39.2865C38.5269 42.033 37.7891 39.928 37.7891 37.6927C37.7891 34.0035 40.6319 31.6163 45.6016 31.6163C48.401 31.6163 51.0269 32.2023 52.1554 32.8533V30.184C50.8533 29.533 48.3359 28.9688 45.4714 28.9688C38.7222 28.9688 34.7726 32.3542 34.7726 37.7578C34.7726 39.9714 35.5104 42.0764 36.27 44.138H31.1484V46.5686H37.1597C37.6155 47.9792 37.9627 49.3898 37.9627 50.822C37.9627 54.6415 34.816 57.5061 30.8229 58.4609V61H53.9132V58.4392H35.6623Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M32.6406 61V46.6079H47.1865V43.9272H32.6406V32.0181H48.4609V29.2935H29.6523V61H32.6406ZM53.2833 32.4355V38.1484H49.8775V40.5654H53.2833V55.375C53.2833 59.5059 54.8213 61.1318 58.6446 61.1318C59.2598 61.1318 60.4903 61.0659 60.7979 61V58.5171C60.6221 58.561 59.5235 58.605 59.2159 58.605C57.1065 58.605 56.1837 57.5942 56.1837 55.2432V40.5654H60.688V38.1484H56.1837V32.4355H53.2833Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M56.2905 29.2056C55.4775 28.9639 53.6978 28.7881 52.3354 28.7881C45.0625 28.7881 38.8442 32.7871 37.1523 40.6533H32.0986V42.9604H36.8008C36.7349 43.6636 36.6909 44.3887 36.6909 45.1577C36.6909 45.9268 36.7349 46.6519 36.8008 47.355H32.0986V49.6841H37.1523C38.8662 57.5063 45.0845 61.5054 52.3354 61.5054C53.6978 61.5054 55.4775 61.3516 56.2905 61.1099V58.3853C55.4556 58.627 53.6978 58.7368 52.3354 58.7368C46.6006 58.7368 41.8765 55.6387 40.3384 49.6841H52.6431V47.355H39.8989C39.833 46.6519 39.7891 45.9268 39.7891 45.1577C39.7891 44.3887 39.833 43.6636 39.8989 42.9604H52.6431V40.6533H40.3384C41.8765 34.6768 46.5786 31.5786 52.3354 31.5786C53.6978 31.5786 55.4556 31.7324 56.2905 31.9302V29.2056Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M36.3499 56.9281C36.3499 60.4001 34.9801 63.3567 32.2405 65.7979C29.8807 67.9001 27.6022 68.9512 25.4051 68.9512C22.6248 68.9512 19.9123 67.127 17.2676 63.4788C17.4982 63.6551 17.7966 63.8449 18.1627 64.0484C19.0443 64.4146 19.9462 64.7061 20.8684 64.9231C21.7907 65.1537 22.7333 65.2758 23.6962 65.2893C28.0904 65.2893 31.5353 62.9227 34.0307 58.1894C34.2071 57.8368 34.2952 57.491 34.2952 57.1519C34.2952 55.3074 32.9254 53.4222 30.1858 51.4964L31.9557 47.6514C32.6067 48.0719 33.2034 48.6144 33.7459 49.2789C34.2884 49.9299 34.7495 50.6759 35.1293 51.5167C35.5226 52.344 35.821 53.2188 36.0244 54.141C36.2414 55.0633 36.3499 55.9923 36.3499 56.9281ZM41.4772 60.1978C42.6197 60.1978 43.5206 59.2969 43.5206 58.1543C43.5206 56.9897 42.6197 56.0889 41.4772 56.0889C40.3346 56.0889 39.4117 56.9897 39.4117 58.1543C39.4117 59.2969 40.3346 60.1978 41.4772 60.1978ZM70.9365 54.731C70.9365 57.2265 70.4211 59.1049 69.3904 60.3662C67.9121 62.1835 65.898 63.6483 63.3483 64.7604C62.1006 65.3165 60.8664 65.7369 59.6458 66.0217C58.4252 66.3201 57.2181 66.4557 56.0246 66.4286C54.6277 66.4286 53.3732 66.2319 52.2611 65.8386C51.1625 65.4453 50.2267 64.8689 49.4536 64.1094C48.6806 63.3499 48.0771 62.4209 47.6431 61.3223C47.2226 60.2373 47.0124 58.9964 47.0124 57.5995C47.0124 56.2432 47.2769 54.6971 47.8058 52.9611C48.4161 50.981 49.0942 49.6112 49.8402 48.8517C48.9451 50.5606 48.4975 52.873 48.4975 55.7889C48.4975 60.0746 50.4437 62.2175 54.3361 62.2175C57.4012 62.2175 60.2018 61.8716 62.738 61.1799C66.5626 60.1356 68.4749 58.4675 68.4749 56.1754C68.4749 55.7957 68.4003 55.3074 68.2511 54.7107C67.79 54.7785 67.356 54.8259 66.9491 54.8531C66.5558 54.8666 66.1964 54.8734 65.8709 54.8734C62.0328 54.8734 60.1137 53.4222 60.1137 50.5199C60.1137 49.0416 60.5951 47.292 61.5581 45.2712C62.6702 42.9928 63.8569 41.8535 65.1182 41.8535C66.922 41.8535 68.4003 43.6099 69.5531 47.1225C70.4753 49.8621 70.9365 52.3983 70.9365 54.731ZM67.8849 50.6216C67.8849 49.9842 67.3967 49.0958 66.4202 47.9566C65.4573 46.8174 64.6706 46.2477 64.0603 46.2477C63.8976 46.2477 63.7281 46.3291 63.5517 46.4919C63.389 46.6546 63.2398 46.8716 63.1042 47.1429C62.9686 47.4005 62.8601 47.6854 62.7787 47.9973C62.7109 48.3092 62.677 48.6076 62.677 48.8924C62.677 50.2486 63.7213 50.9268 65.8099 50.9268C66.7186 50.9268 67.4102 50.8454 67.8849 50.6826V50.6216ZM66.8677 37.7645L62.5956 35.0384L64.3858 32.1496L68.6783 34.7129L66.8677 37.7645ZM56.6146 35.3232L58.3438 32.3124L62.5956 35.0384L60.846 37.8662L56.6146 35.3232Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M29.7578 61H46.7427V58.583H33.0977V58.5171L46.6987 40.3457V38.1484H29.7578V40.5654H43.3589V40.6313L29.7578 58.8467V61ZM56.399 40.5435L53.7843 41.8838V29.2935H50.8839V43.3779L48.2911 44.7183V47.1572L50.8839 45.8169V61H53.7843V44.3228L56.399 42.9604V40.5435Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M43.5459 64.2959V61.1758C49.6763 60.7583 53.5654 57.3745 53.5654 52.3208C53.5654 47.8384 50.9507 45.3115 44.8203 43.7734L43.5459 43.4438V31.4907C47.2812 31.8203 50.0278 34.2373 50.1377 37.2695H52.9941C52.8403 32.6992 48.9951 29.2715 43.5459 28.876V25.8657H41.2607V28.8979C35.6138 29.3154 31.9004 32.6553 31.9004 37.3794C31.9004 41.5103 34.5151 44.125 40.0522 45.5312L41.2607 45.8608V58.583C37.1079 58.2095 34.2295 55.7705 33.9878 52.4087H31.1313C31.1973 57.3086 35.3281 60.8242 41.2607 61.1978V64.2959H43.5459ZM50.665 52.5405C50.665 56.0342 47.8525 58.4292 43.5459 58.627V46.3223C48.6216 47.4648 50.665 49.2666 50.665 52.5405ZM34.7788 37.2256C34.7788 34.0615 37.5254 31.6665 41.2607 31.4907V42.9385C36.7783 41.9497 34.7788 40.1699 34.7788 37.2256Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M41.6548 61C50.4219 61 56.1348 55.2871 56.1348 47.9263H53.2344C53.2344 53.8149 48.5322 58.0337 42.4678 58.0337V46.2783L49.3452 43.1143V40.5654L42.4678 43.7295V38.8296L49.3452 35.6655V33.1167L42.4678 36.2588V29.2935H39.4795V37.6431L34.5356 39.9282V42.4771L39.4795 40.1919V45.0918L34.5356 47.377V49.9478L39.4795 47.6626V61H41.6548Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M45.0605 45.8828C50.29 45.9927 53.1465 48.168 53.1465 52.0791C53.1465 56.1221 50.312 58.3193 45.0605 58.3413V45.8828ZM37.7656 58.3413V45.8828H42.7754V58.3413H37.7656ZM37.7656 31.9521H42.7754V43.2681H37.7656V31.9521ZM45.0605 31.9521C49.1255 32.106 51.5645 34.1714 51.5645 37.5991C51.5645 40.9829 49.2354 42.9165 45.0605 43.2241V31.9521ZM48.7739 44.103C52.1357 43.5098 54.5967 40.6753 54.5967 37.1157C54.5967 32.3037 50.9932 29.2935 45.1484 29.2935H45.0605V25.8657H42.7754V29.2935H34.7554V61H42.7754V64.2959H45.0605V61H45.3901C52.2676 61 56.2227 57.748 56.2227 52.2329C56.2227 47.8823 53.2344 44.8721 48.7739 44.3887V44.103Z", fill: "#241D4F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M24.9546 61V49.6841L28.8657 45.4434L41.4561 61H45.3013L30.9751 43.312L44.0049 29.2935H40.2036L25.1304 45.729H24.9546V29.2935H21.9663V61H24.9546ZM64.8673 45.3774C64.296 41.2905 60.8463 37.7749 55.463 37.7749C49.2447 37.7749 45.1359 42.3672 45.1359 49.5742C45.1359 56.8911 49.2447 61.3735 55.485 61.3735C60.5387 61.3735 64.2521 58.2974 64.8893 53.9248H62.0109C61.3517 56.8911 58.9567 58.8027 55.507 58.8027C51.0465 58.8027 48.1022 55.3091 48.1022 49.5742C48.1022 43.9272 51.0245 40.3457 55.485 40.3457C59.0885 40.3457 61.3956 42.5649 62.0109 45.3774H64.8673ZM56.5836 34.6548L62.4943 28.019H59.7037L55.485 32.8311H55.3751L51.1564 28.019H48.3658L54.2985 34.6548H56.5836Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M30.625 48.959V29.2935H27.7026V61H30.625V52.145L33.1738 49.7939L42.3145 61H45.7202L35.2612 48.0142L45.5225 38.1484H41.9189L30.625 48.959ZM48.0597 61H50.9601V46.7617C50.9601 43.0703 53.0255 40.5435 56.2775 40.5435C57.2662 40.5435 58.0792 40.6973 58.4528 40.873V38.0166C58.1012 37.9287 57.42 37.7749 56.651 37.7749C53.8385 37.7749 51.7071 39.4229 50.8722 42.2134H50.8063V38.1484H48.0597V61Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M52.5771 54.1885V51.8813H45.8975V47.8384H52.5771V45.5093H46.9082L57.2573 29.2935H53.8076L44.4692 44.125H44.3374L34.9771 29.2935H31.5273L41.8984 45.5093H36.2075V47.8384H42.9092V51.8813H36.2075V54.1885H42.9092V61H45.8975V54.1885H52.5771Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M49.3472 37.709C49.3472 31.7764 46.8643 29.2935 41.6787 29.2935H32.3623V61H35.0649V32.2817H40.7998C44.8867 32.2817 46.6445 33.5781 46.6445 38.2363V52.6284H49.3472V37.709ZM56.4004 52.0132V29.2935H53.6978V52.0352C53.6978 56.8911 52.1597 58.0117 47.9189 58.0117H42.1182V37.5991H39.4375V61H48.6221C54.0493 61 56.4004 58.2974 56.4004 52.0132Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M35.6623 58.4392V58.3524C38.158 57.1589 40.8707 54.75 40.8707 50.7135C40.8707 49.303 40.5668 47.9141 40.1328 46.5686H49.4861V44.138H39.2865C38.5269 42.033 37.7891 39.928 37.7891 37.6927C37.7891 34.0035 40.6319 31.6163 45.6016 31.6163C48.401 31.6163 51.0269 32.2023 52.1554 32.8533V30.184C50.8533 29.533 48.3359 28.9688 45.4714 28.9688C38.7222 28.9688 34.7726 32.3542 34.7726 37.7578C34.7726 39.9714 35.5104 42.0764 36.27 44.138H31.1484V46.5686H37.1597C37.6155 47.9792 37.9627 49.3898 37.9627 50.822C37.9627 54.6415 34.816 57.5061 30.8229 58.4609V61H53.9132V58.4392H35.6623Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M32.6406 61V46.6079H47.1865V43.9272H32.6406V32.0181H48.4609V29.2935H29.6523V61H32.6406ZM53.2833 32.4355V38.1484H49.8775V40.5654H53.2833V55.375C53.2833 59.5059 54.8213 61.1318 58.6446 61.1318C59.2598 61.1318 60.4903 61.0659 60.7979 61V58.5171C60.6221 58.561 59.5235 58.605 59.2159 58.605C57.1065 58.605 56.1837 57.5942 56.1837 55.2432V40.5654H60.688V38.1484H56.1837V32.4355H53.2833Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M56.2905 29.2056C55.4775 28.9639 53.6978 28.7881 52.3354 28.7881C45.0625 28.7881 38.8442 32.7871 37.1523 40.6533H32.0986V42.9604H36.8008C36.7349 43.6636 36.6909 44.3887 36.6909 45.1577C36.6909 45.9268 36.7349 46.6519 36.8008 47.355H32.0986V49.6841H37.1523C38.8662 57.5063 45.0845 61.5054 52.3354 61.5054C53.6978 61.5054 55.4775 61.3516 56.2905 61.1099V58.3853C55.4556 58.627 53.6978 58.7368 52.3354 58.7368C46.6006 58.7368 41.8765 55.6387 40.3384 49.6841H52.6431V47.355H39.8989C39.833 46.6519 39.7891 45.9268 39.7891 45.1577C39.7891 44.3887 39.833 43.6636 39.8989 42.9604H52.6431V40.6533H40.3384C41.8765 34.6768 46.5786 31.5786 52.3354 31.5786C53.6978 31.5786 55.4556 31.7324 56.2905 31.9302V29.2056Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M36.3499 56.9281C36.3499 60.4001 34.9801 63.3567 32.2405 65.7979C29.8807 67.9001 27.6022 68.9512 25.4051 68.9512C22.6248 68.9512 19.9123 67.127 17.2676 63.4788C17.4982 63.6551 17.7966 63.8449 18.1627 64.0484C19.0443 64.4146 19.9462 64.7061 20.8684 64.9231C21.7907 65.1537 22.7333 65.2758 23.6962 65.2893C28.0904 65.2893 31.5353 62.9227 34.0307 58.1894C34.2071 57.8368 34.2952 57.491 34.2952 57.1519C34.2952 55.3074 32.9254 53.4222 30.1858 51.4964L31.9557 47.6514C32.6067 48.0719 33.2034 48.6144 33.7459 49.2789C34.2884 49.9299 34.7495 50.6759 35.1293 51.5167C35.5226 52.344 35.821 53.2188 36.0244 54.141C36.2414 55.0633 36.3499 55.9923 36.3499 56.9281ZM41.4772 60.1978C42.6197 60.1978 43.5206 59.2969 43.5206 58.1543C43.5206 56.9897 42.6197 56.0889 41.4772 56.0889C40.3346 56.0889 39.4117 56.9897 39.4117 58.1543C39.4117 59.2969 40.3346 60.1978 41.4772 60.1978ZM70.9365 54.731C70.9365 57.2265 70.4211 59.1049 69.3904 60.3662C67.9121 62.1835 65.898 63.6483 63.3483 64.7604C62.1006 65.3165 60.8664 65.7369 59.6458 66.0217C58.4252 66.3201 57.2181 66.4557 56.0246 66.4286C54.6277 66.4286 53.3732 66.2319 52.2611 65.8386C51.1625 65.4453 50.2267 64.8689 49.4536 64.1094C48.6806 63.3499 48.0771 62.4209 47.6431 61.3223C47.2226 60.2373 47.0124 58.9964 47.0124 57.5995C47.0124 56.2432 47.2769 54.6971 47.8058 52.9611C48.4161 50.981 49.0942 49.6112 49.8402 48.8517C48.9451 50.5606 48.4975 52.873 48.4975 55.7889C48.4975 60.0746 50.4437 62.2175 54.3361 62.2175C57.4012 62.2175 60.2018 61.8716 62.738 61.1799C66.5626 60.1356 68.4749 58.4675 68.4749 56.1754C68.4749 55.7957 68.4003 55.3074 68.2511 54.7107C67.79 54.7785 67.356 54.8259 66.9491 54.8531C66.5558 54.8666 66.1964 54.8734 65.8709 54.8734C62.0328 54.8734 60.1137 53.4222 60.1137 50.5199C60.1137 49.0416 60.5951 47.292 61.5581 45.2712C62.6702 42.9928 63.8569 41.8535 65.1182 41.8535C66.922 41.8535 68.4003 43.6099 69.5531 47.1225C70.4753 49.8621 70.9365 52.3983 70.9365 54.731ZM67.8849 50.6216C67.8849 49.9842 67.3967 49.0958 66.4202 47.9566C65.4573 46.8174 64.6706 46.2477 64.0603 46.2477C63.8976 46.2477 63.7281 46.3291 63.5517 46.4919C63.389 46.6546 63.2398 46.8716 63.1042 47.1429C62.9686 47.4005 62.8601 47.6854 62.7787 47.9973C62.7109 48.3092 62.677 48.6076 62.677 48.8924C62.677 50.2486 63.7213 50.9268 65.8099 50.9268C66.7186 50.9268 67.4102 50.8454 67.8849 50.6826V50.6216ZM66.8677 37.7645L62.5956 35.0384L64.3858 32.1496L68.6783 34.7129L66.8677 37.7645ZM56.6146 35.3232L58.3438 32.3124L62.5956 35.0384L60.846 37.8662L56.6146 35.3232Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M29.7578 61H46.7427V58.583H33.0977V58.5171L46.6987 40.3457V38.1484H29.7578V40.5654H43.3589V40.6313L29.7578 58.8467V61ZM56.399 40.5435L53.7843 41.8838V29.2935H50.8839V43.3779L48.2911 44.7183V47.1572L50.8839 45.8169V61H53.7843V44.3228L56.399 42.9604V40.5435Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M43.5459 64.2959V61.1758C49.6763 60.7583 53.5654 57.3745 53.5654 52.3208C53.5654 47.8384 50.9507 45.3115 44.8203 43.7734L43.5459 43.4438V31.4907C47.2812 31.8203 50.0278 34.2373 50.1377 37.2695H52.9941C52.8403 32.6992 48.9951 29.2715 43.5459 28.876V25.8657H41.2607V28.8979C35.6138 29.3154 31.9004 32.6553 31.9004 37.3794C31.9004 41.5103 34.5151 44.125 40.0522 45.5312L41.2607 45.8608V58.583C37.1079 58.2095 34.2295 55.7705 33.9878 52.4087H31.1313C31.1973 57.3086 35.3281 60.8242 41.2607 61.1978V64.2959H43.5459ZM50.665 52.5405C50.665 56.0342 47.8525 58.4292 43.5459 58.627V46.3223C48.6216 47.4648 50.665 49.2666 50.665 52.5405ZM34.7788 37.2256C34.7788 34.0615 37.5254 31.6665 41.2607 31.4907V42.9385C36.7783 41.9497 34.7788 40.1699 34.7788 37.2256Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M41.6548 61C50.4219 61 56.1348 55.2871 56.1348 47.9263H53.2344C53.2344 53.8149 48.5322 58.0337 42.4678 58.0337V46.2783L49.3452 43.1143V40.5654L42.4678 43.7295V38.8296L49.3452 35.6655V33.1167L42.4678 36.2588V29.2935H39.4795V37.6431L34.5356 39.9282V42.4771L39.4795 40.1919V45.0918L34.5356 47.377V49.9478L39.4795 47.6626V61H41.6548Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M45.0605 45.8828C50.29 45.9927 53.1465 48.168 53.1465 52.0791C53.1465 56.1221 50.312 58.3193 45.0605 58.3413V45.8828ZM37.7656 58.3413V45.8828H42.7754V58.3413H37.7656ZM37.7656 31.9521H42.7754V43.2681H37.7656V31.9521ZM45.0605 31.9521C49.1255 32.106 51.5645 34.1714 51.5645 37.5991C51.5645 40.9829 49.2354 42.9165 45.0605 43.2241V31.9521ZM48.7739 44.103C52.1357 43.5098 54.5967 40.6753 54.5967 37.1157C54.5967 32.3037 50.9932 29.2935 45.1484 29.2935H45.0605V25.8657H42.7754V29.2935H34.7554V61H42.7754V64.2959H45.0605V61H45.3901C52.2676 61 56.2227 57.748 56.2227 52.2329C56.2227 47.8823 53.2344 44.8721 48.7739 44.3887V44.103Z", fill: "#241D4F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M24.9546 61V49.6841L28.8657 45.4434L41.4561 61H45.3013L30.9751 43.312L44.0049 29.2935H40.2036L25.1304 45.729H24.9546V29.2935H21.9663V61H24.9546ZM64.8673 45.3774C64.296 41.2905 60.8463 37.7749 55.463 37.7749C49.2447 37.7749 45.1359 42.3672 45.1359 49.5742C45.1359 56.8911 49.2447 61.3735 55.485 61.3735C60.5387 61.3735 64.2521 58.2974 64.8893 53.9248H62.0109C61.3517 56.8911 58.9567 58.8027 55.507 58.8027C51.0465 58.8027 48.1022 55.3091 48.1022 49.5742C48.1022 43.9272 51.0245 40.3457 55.485 40.3457C59.0885 40.3457 61.3956 42.5649 62.0109 45.3774H64.8673ZM56.5836 34.6548L62.4943 28.019H59.7037L55.485 32.8311H55.3751L51.1564 28.019H48.3658L54.2985 34.6548H56.5836Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M30.625 48.959V29.2935H27.7026V61H30.625V52.145L33.1738 49.7939L42.3145 61H45.7202L35.2612 48.0142L45.5225 38.1484H41.9189L30.625 48.959ZM48.0597 61H50.9601V46.7617C50.9601 43.0703 53.0255 40.5435 56.2775 40.5435C57.2662 40.5435 58.0792 40.6973 58.4528 40.873V38.0166C58.1012 37.9287 57.42 37.7749 56.651 37.7749C53.8385 37.7749 51.7071 39.4229 50.8722 42.2134H50.8063V38.1484H48.0597V61Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M52.5771 54.1885V51.8813H45.8975V47.8384H52.5771V45.5093H46.9082L57.2573 29.2935H53.8076L44.4692 44.125H44.3374L34.9771 29.2935H31.5273L41.8984 45.5093H36.2075V47.8384H42.9092V51.8813H36.2075V54.1885H42.9092V61H45.8975V54.1885H52.5771Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M49.3472 37.709C49.3472 31.7764 46.8643 29.2935 41.6787 29.2935H32.3623V61H35.0649V32.2817H40.7998C44.8867 32.2817 46.6445 33.5781 46.6445 38.2363V52.6284H49.3472V37.709ZM56.4004 52.0132V29.2935H53.6978V52.0352C53.6978 56.8911 52.1597 58.0117 47.9189 58.0117H42.1182V37.5991H39.4375V61H48.6221C54.0493 61 56.4004 58.2974 56.4004 52.0132Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M35.6623 58.4392V58.3524C38.158 57.1589 40.8707 54.75 40.8707 50.7135C40.8707 49.303 40.5668 47.9141 40.1328 46.5686H49.4861V44.138H39.2865C38.5269 42.033 37.7891 39.928 37.7891 37.6927C37.7891 34.0035 40.6319 31.6163 45.6016 31.6163C48.401 31.6163 51.0269 32.2023 52.1554 32.8533V30.184C50.8533 29.533 48.3359 28.9688 45.4714 28.9688C38.7222 28.9688 34.7726 32.3542 34.7726 37.7578C34.7726 39.9714 35.5104 42.0764 36.27 44.138H31.1484V46.5686H37.1597C37.6155 47.9792 37.9627 49.3898 37.9627 50.822C37.9627 54.6415 34.816 57.5061 30.8229 58.4609V61H53.9132V58.4392H35.6623Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M32.6406 61V46.6079H47.1865V43.9272H32.6406V32.0181H48.4609V29.2935H29.6523V61H32.6406ZM53.2833 32.4355V38.1484H49.8775V40.5654H53.2833V55.375C53.2833 59.5059 54.8213 61.1318 58.6446 61.1318C59.2598 61.1318 60.4903 61.0659 60.7979 61V58.5171C60.6221 58.561 59.5235 58.605 59.2159 58.605C57.1065 58.605 56.1837 57.5942 56.1837 55.2432V40.5654H60.688V38.1484H56.1837V32.4355H53.2833Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M56.2905 29.2056C55.4775 28.9639 53.6978 28.7881 52.3354 28.7881C45.0625 28.7881 38.8442 32.7871 37.1523 40.6533H32.0986V42.9604H36.8008C36.7349 43.6636 36.6909 44.3887 36.6909 45.1577C36.6909 45.9268 36.7349 46.6519 36.8008 47.355H32.0986V49.6841H37.1523C38.8662 57.5063 45.0845 61.5054 52.3354 61.5054C53.6978 61.5054 55.4775 61.3516 56.2905 61.1099V58.3853C55.4556 58.627 53.6978 58.7368 52.3354 58.7368C46.6006 58.7368 41.8765 55.6387 40.3384 49.6841H52.6431V47.355H39.8989C39.833 46.6519 39.7891 45.9268 39.7891 45.1577C39.7891 44.3887 39.833 43.6636 39.8989 42.9604H52.6431V40.6533H40.3384C41.8765 34.6768 46.5786 31.5786 52.3354 31.5786C53.6978 31.5786 55.4556 31.7324 56.2905 31.9302V29.2056Z", fill: "#1A1C1F" })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { width: "3rem", height: "3rem", class: "multi_currency_carusel_icon", viewBox: "0 0 90 90", fill: "none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z", fill: "white" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: "M36.3499 56.9281C36.3499 60.4001 34.9801 63.3567 32.2405 65.7979C29.8807 67.9001 27.6022 68.9512 25.4051 68.9512C22.6248 68.9512 19.9123 67.127 17.2676 63.4788C17.4982 63.6551 17.7966 63.8449 18.1627 64.0484C19.0443 64.4146 19.9462 64.7061 20.8684 64.9231C21.7907 65.1537 22.7333 65.2758 23.6962 65.2893C28.0904 65.2893 31.5353 62.9227 34.0307 58.1894C34.2071 57.8368 34.2952 57.491 34.2952 57.1519C34.2952 55.3074 32.9254 53.4222 30.1858 51.4964L31.9557 47.6514C32.6067 48.0719 33.2034 48.6144 33.7459 49.2789C34.2884 49.9299 34.7495 50.6759 35.1293 51.5167C35.5226 52.344 35.821 53.2188 36.0244 54.141C36.2414 55.0633 36.3499 55.9923 36.3499 56.9281ZM41.4772 60.1978C42.6197 60.1978 43.5206 59.2969 43.5206 58.1543C43.5206 56.9897 42.6197 56.0889 41.4772 56.0889C40.3346 56.0889 39.4117 56.9897 39.4117 58.1543C39.4117 59.2969 40.3346 60.1978 41.4772 60.1978ZM70.9365 54.731C70.9365 57.2265 70.4211 59.1049 69.3904 60.3662C67.9121 62.1835 65.898 63.6483 63.3483 64.7604C62.1006 65.3165 60.8664 65.7369 59.6458 66.0217C58.4252 66.3201 57.2181 66.4557 56.0246 66.4286C54.6277 66.4286 53.3732 66.2319 52.2611 65.8386C51.1625 65.4453 50.2267 64.8689 49.4536 64.1094C48.6806 63.3499 48.0771 62.4209 47.6431 61.3223C47.2226 60.2373 47.0124 58.9964 47.0124 57.5995C47.0124 56.2432 47.2769 54.6971 47.8058 52.9611C48.4161 50.981 49.0942 49.6112 49.8402 48.8517C48.9451 50.5606 48.4975 52.873 48.4975 55.7889C48.4975 60.0746 50.4437 62.2175 54.3361 62.2175C57.4012 62.2175 60.2018 61.8716 62.738 61.1799C66.5626 60.1356 68.4749 58.4675 68.4749 56.1754C68.4749 55.7957 68.4003 55.3074 68.2511 54.7107C67.79 54.7785 67.356 54.8259 66.9491 54.8531C66.5558 54.8666 66.1964 54.8734 65.8709 54.8734C62.0328 54.8734 60.1137 53.4222 60.1137 50.5199C60.1137 49.0416 60.5951 47.292 61.5581 45.2712C62.6702 42.9928 63.8569 41.8535 65.1182 41.8535C66.922 41.8535 68.4003 43.6099 69.5531 47.1225C70.4753 49.8621 70.9365 52.3983 70.9365 54.731ZM67.8849 50.6216C67.8849 49.9842 67.3967 49.0958 66.4202 47.9566C65.4573 46.8174 64.6706 46.2477 64.0603 46.2477C63.8976 46.2477 63.7281 46.3291 63.5517 46.4919C63.389 46.6546 63.2398 46.8716 63.1042 47.1429C62.9686 47.4005 62.8601 47.6854 62.7787 47.9973C62.7109 48.3092 62.677 48.6076 62.677 48.8924C62.677 50.2486 63.7213 50.9268 65.8099 50.9268C66.7186 50.9268 67.4102 50.8454 67.8849 50.6826V50.6216ZM66.8677 37.7645L62.5956 35.0384L64.3858 32.1496L68.6783 34.7129L66.8677 37.7645ZM56.6146 35.3232L58.3438 32.3124L62.5956 35.0384L60.846 37.8662L56.6146 35.3232Z", fill: "#1A1C1F" }))))))));
    }
};
SAbdullakhMultiCurrencySlaider.style = sAbdullakhMultiCurrencySlaiderCss;

const sAbdullakhOtherFeaturesCss = ".other_features_title{margin-top:150px;text-align:center}.other_features_title h2{font-weight:600;font-size:2rem;margin-bottom:50px}.other_features_blocks{max-width:515px;height:200px;-webkit-box-shadow:0px 3px 6px rgba(25,28,31,0.06), 0px 1px 2px rgba(25,28,31,0.06), 0px -1px 0px rgba(25,28,31,0.04);box-shadow:0px 3px 6px rgba(25,28,31,0.06), 0px 1px 2px rgba(25,28,31,0.06), 0px -1px 0px rgba(25,28,31,0.04);border-radius:0.5rem;margin-bottom:40px;padding:0.7rem 2rem 2rem 4.8rem}.other_end{-ms-flex-pack:end;justify-content:flex-end;width:100%;display:-ms-flexbox;display:flex}.other_features_blocks_title{margin:0px 0px 1rem}.other_features_blocks_title::before{content:\"\\f09d\";position:relative;right:40px;top:29px;font-size:19px;font-family:Font Awesome\\ 5 Free, serif;color:black}.other_features_content{color:rgb(139, 149, 158)}@media (max-width: 995px){.other_end,.other_start{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}}";

const SAbdullakhOtherFeatures = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnOtherFeatures = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnOtherFeatures", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "other_features_title" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", { onClick: () => this.clickOnOtherFeatures.emit(this.featuresblock.title) }, this.otherFeatures.title)), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row mt-5", onClick: () => this.clickOnOtherFeatures.emit(this.featuresblock) }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Blocks, { arr: this.featuresblock }))));
    }
};
/*
* компонентная функция для вывода элементов news-main-block
 */
const Blocks = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-6 col-12" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-other-features-blocks", { arr: item })));
    });
};
SAbdullakhOtherFeatures.style = sAbdullakhOtherFeaturesCss;

const sAbdullakhOtherFeaturesBlocksCss = ".other_features_title{margin-top:150px;text-align:center}.other_features_title h2{font-weight:600;font-size:2rem;margin-bottom:50px}.other_features_blocks{max-width:515px;height:200px;-webkit-box-shadow:0px 3px 6px rgba(25,28,31,0.06), 0px 1px 2px rgba(25,28,31,0.06), 0px -1px 0px rgba(25,28,31,0.04);box-shadow:0px 3px 6px rgba(25,28,31,0.06), 0px 1px 2px rgba(25,28,31,0.06), 0px -1px 0px rgba(25,28,31,0.04);border-radius:0.5rem;margin-bottom:40px;padding:0.7rem 2rem 2rem 4.8rem}.other_end{-ms-flex-pack:end;justify-content:flex-end;width:100%;display:-ms-flexbox;display:flex}.other_features_blocks_title{margin:0px 0px 1rem}.other_features_blocks_title::before{content:\"\\f09d\";position:relative;right:40px;top:29px;font-size:19px;font-family:Font Awesome\\ 5 Free, serif;color:black}.other_features_content{color:rgb(139, 149, 158)}@media (max-width: 995px){.other_end,.other_start{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}}";

const SAbdullakhOtherFeaturesBlocks = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnOtherFeatures = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnOtherFeatures", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.arr.class }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "other_features_blocks" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "other_features_blocks_title" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", { onClick: () => this.clickOnOtherFeatures.emit(this.arr.title) }, this.arr.title)), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "other_features_content", onClick: () => this.clickOnOtherFeatures.emit(this.arr.text) }, this.arr.text))));
    }
};
SAbdullakhOtherFeaturesBlocks.style = sAbdullakhOtherFeaturesBlocksCss;

const sAbdullakhPersonalSecurityCss = ".persional_security_block{margin-top:150px}.persional_security_list_block{margin-left:140px;padding-right:20px}.persional_security_right{position:relative;left:25px;background-size:cover;background-position:center;width:100%;height:485px;-webkit-box-shadow:rgba(25, 28, 31, 0.08) 0px 14px 32px, rgba(25, 28, 31, 0.04) 0px 8px 16px, rgba(25, 28, 31, 0.04) 0px -1px 0px;box-shadow:rgba(25, 28, 31, 0.08) 0px 14px 32px, rgba(25, 28, 31, 0.04) 0px 8px 16px, rgba(25, 28, 31, 0.04) 0px -1px 0px;border-radius:0.5rem}@media (max-width: 995px){.persional_security{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.persional_security_block{max-width:474px}.persional_security_right{left:0px}.persional_security_list_block{margin-top:50px}}@media (max-width: 1200px){.persional_security_list_block{margin-left:10px}}@media (max-width: 1340px){.persional_security_list_block{-webkit-transition:1s;transition:1s}}@media (max-width: 1340px){.persional_security_list_block{-webkit-transition:1s;transition:1s}}";

const SAbdullakhPersonalSecurity = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnPersonalSecurity = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnPersonalSecurity", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container persional_security" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row persional_security_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-5 mt-5" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "persional_security_right d-lg-none d-block", style: { backgroundImage: "url(" + this.personalSecurityImg + ")" }, onClick: () => this.clickOnPersonalSecurity.emit(this.personalSecurityImg) }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "persional_security_list_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "list_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "list_block_title", onClick: () => this.clickOnPersonalSecurity.emit(this.personalSecurity.title) }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, this.personalSecurity.title)), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { class: "list_block_info_blocks", onClick: () => this.clickOnPersonalSecurity.emit(this.personalSecurity.list) }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ListBlock$1, { arr: this.personalSecurity.list }))))), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-7 d-none d-lg-block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "persional_security_right", style: { backgroundImage: "url(" + this.personalSecurityImg + ")" } })))));
    }
};
/*
* компонентная функция для вывода элементов news-main-block
 */
const ListBlock$1 = (props) => {
    return props.arr.text.map((item) => {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-list-block", { arr: item }));
    });
};
SAbdullakhPersonalSecurity.style = sAbdullakhPersonalSecurityCss;

const sAbdullakhPreHeaderCss = ".cookes_main_block_bckrnd{background:rgb(243, 244, 245)}.cookes_main_block{display:-ms-flexbox;display:flex;padding:20px 0;font-size:0.85rem}.cookes_left_block{width:100%}.cookes_left_block a{padding-left:5px}.cookes_right_block{display:-ms-flexbox;display:flex;width:100%;-ms-flex-pack:end;justify-content:flex-end}.manage_cookes_btn{background-color:transparent;border:none;color:gray;height:40px;margin-right:20px}.accent_cookes_btn{font-weight:500;background-color:#f5f6f8;border:1px solid rgb(6, 102, 235);height:40px;padding:0 30px;border-radius:15px;color:rgb(6, 102, 235)}";

const SAbdullakhPreHeader = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.close = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "close", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container-fluid cookes_main_block_bckrnd" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "cookes_main_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "cookes_left_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "We use   \u2622 cookies to personalise your experience on Revolut."), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "" }, "Learn more")), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "cookes_right_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "manage_cookes_btn", onClick: () => { this.close.emit(); } }, "Manage Cookies"), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "accent_cookes_btn", onClick: () => { this.close.emit(); } }, "Accept"))))));
    }
};
SAbdullakhPreHeader.style = sAbdullakhPreHeaderCss;

const sAbdullakhProductPresentationCss = ".presentation_block{margin-top:200px}.presentation_left_block{display:-ms-flexbox;display:flex;height:100%;-ms-flex-align:center;align-items:center;font-weight:500;-ms-flex-pack:center;justify-content:center}.presentation_left_block_title h1{font-weight:600;font-size:3rem}.presentation_left_block_btn{padding:32px 20px}.presentation_left_block_subtitle{color:rgb(139, 149, 158);font-size:1.10rem;line-height:1.9rem}.presentation_right_block{z-index:2}.video_center{margin:10px 0 90px 0;height:515px;display:-ms-flexbox !important;display:flex !important;-ms-flex-pack:center;justify-content:center;padding:50px 0}.presentation_right_block_video video{max-width:515px;float:right}@media (max-width: 576px){.presentation_left_block_title h1{font-size:2rem}.presentation_right_block_video video{max-width:100%}.presentation_left_block_subtitle{font-size:16px}.multy_currency_subtitle{font-size:15px}}@media (max-width: 992px){.presentation_left_block_title{text-align:center}.in_presentation_left_block{max-width:414px}.presentation_left_block_btn{text-align:center}}";

const SAbdullakhProductPresentation = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnProductPresentation = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnProductPresentation", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "presentation_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-6 col-12" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ProductPresentationContent, { arr: this.productPresentation })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-6 d-none d-lg-block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-product-presentation-video", { videoScr: this.productPresentation.videoScr }))))));
    }
};
/*
* компонентная функция для вывода элементов меню
 */
const ProductPresentationContent = (props) => {
    return props.arr.productPresentationContent.map((item) => {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-product-presentation-content", { videoScr: item.videoScr, arr: item }));
    });
};
SAbdullakhProductPresentation.style = sAbdullakhProductPresentationCss;

const sAbdullakhProductPresentationContentCss = ".presentation_block{margin-top:200px}.presentation_left_block{display:-ms-flexbox;display:flex;height:100%;-ms-flex-align:center;align-items:center;font-weight:500;-ms-flex-pack:center;justify-content:center}.presentation_left_block_title h1{font-weight:600;font-size:3rem}.presentation_left_block_btn{padding:32px 20px}.presentation_left_block_subtitle{color:rgb(139, 149, 158);font-size:1.10rem;line-height:1.9rem}.presentation_right_block{z-index:2}.video_center{margin:10px 0 90px 0;height:515px;display:-ms-flexbox !important;display:flex !important;-ms-flex-pack:center;justify-content:center;padding:50px 0}.presentation_right_block_video video{max-width:515px;float:right}@media (max-width: 576px){.presentation_left_block_title h1{font-size:2rem}.presentation_right_block_video video{max-width:100%}.presentation_left_block_subtitle{font-size:16px}.multy_currency_subtitle{font-size:15px}}@media (max-width: 992px){.presentation_left_block_title{text-align:center}.in_presentation_left_block{max-width:414px}.presentation_left_block_btn{text-align:center}}";

const SAbdullakhProductPresentationContent = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnProductPresentation = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnProductPresentation", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "presentation_left_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "in_presentation_left_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "presentation_left_block_title", onClick: () => this.clickOnProductPresentation.emit(this.arr.title) }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h1", null, this.arr.title)), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "presentation_right_block d-lg-none d-flex video_center", onClick: () => this.clickOnProductPresentation.emit(this.videoScr) }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "presentation_right_block_video" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("video", { src: this.videoScr, autoplay: "autoplay", playsinline: "", "data-testid": "video-media" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("track", { kind: "captions" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("source", { type: "video/mp4" })))), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "presentation_left_block_subtitle", onClick: () => this.clickOnProductPresentation.emit(this.arr.subtitle) }, this.arr.subtitle), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "presentation_left_block_btn" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "my_btn presentation_btn", onClick: () => this.clickOnProductPresentation.emit(this.arr.btnText) }, this.arr.btnText)))));
    }
};
SAbdullakhProductPresentationContent.style = sAbdullakhProductPresentationContentCss;

const sAbdullakhProductPresentationVideoCss = ".presentation_block{margin-top:200px}.presentation_left_block{display:-ms-flexbox;display:flex;height:100%;-ms-flex-align:center;align-items:center;font-weight:500;-ms-flex-pack:center;justify-content:center}.presentation_left_block_title h1{font-weight:600;font-size:3rem}.presentation_left_block_btn{padding:32px 20px}.presentation_left_block_subtitle{color:rgb(139, 149, 158);font-size:1.10rem;line-height:1.9rem}.presentation_right_block{z-index:2}.video_center{margin:10px 0 90px 0;height:515px;display:-ms-flexbox !important;display:flex !important;-ms-flex-pack:center;justify-content:center;padding:50px 0}.presentation_right_block_video video{max-width:515px;float:right}@media (max-width: 576px){.presentation_left_block_title h1{font-size:2rem}.presentation_right_block_video video{max-width:100%}.presentation_left_block_subtitle{font-size:16px}.multy_currency_subtitle{font-size:15px}}@media (max-width: 992px){.presentation_left_block_title{text-align:center}.in_presentation_left_block{max-width:414px}.presentation_left_block_btn{text-align:center}}";

const SAbdullakhProductPresentationVideo = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnProductPresentation = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnProductPresentation", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "presentation_right_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "presentation_right_block_video" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("video", { src: this.videoScr, autoplay: "autoplay", playsinline: "", "data-testid": "video-media", onClick: () => this.clickOnProductPresentation.emit(this.videoScr) }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("track", { kind: "captions" }), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("source", { type: "video/mp4" })))));
    }
};
SAbdullakhProductPresentationVideo.style = sAbdullakhProductPresentationVideoCss;

const sAbdullakhSecurityControlCss = ".security_control_block{margin-top:150px}.security_control_list_block{margin-right:145px}.security_control_left{position:relative;right:25px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;height:100%;-ms-flex-align:center;align-items:center}.security_control_bckgrnd{background-size:cover;background-position:center;width:100%;height:485px;-webkit-box-shadow:rgba(25, 28, 31, 0.08) 0px 14px 32px, rgba(25, 28, 31, 0.04) 0px 8px 16px, rgba(25, 28, 31, 0.04) 0px -1px 0px;box-shadow:rgba(25, 28, 31, 0.08) 0px 14px 32px, rgba(25, 28, 31, 0.04) 0px 8px 16px, rgba(25, 28, 31, 0.04) 0px -1px 0px;border-radius:50%;max-width:405px;max-height:405px}@media (max-width: 576px){.security_control_left{right:0}}@media (max-width: 995px){.security_control{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.security_control_block{max-width:474px}.security_control_left{height:auto}.security_control_list_block{margin-top:50px;margin-right:0}.expense_management_left{right:0}}@media (max-width: 1200px){.persional_security_list_block{margin-left:10px}}";

const SAbdullakhSecurityControl = class {
    constructor(hostRef) {
        Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnSecurityControl = Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnSecurityControl", 7);
    }
    render() {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container security_control" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row security_control_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-7 d-none d-lg-block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "security_control_left" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "security_control_bckgrnd", style: { backgroundImage: "url(" + this.securityControlImg + ")" }, onClick: () => this.clickOnSecurityControl.emit(this.securityControlImg) }))), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-5 mt-5" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "security_control_left d-block d-lg-none" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "security_control_bckgrnd", style: { backgroundImage: "url(" + this.securityControlImg + ")" }, onClick: () => this.clickOnSecurityControl.emit(this.securityControlImg) })), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "security_control_list_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "list_block" }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "list_block_title", onClick: () => this.clickOnSecurityControl.emit(this.securityControl.title) }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, this.securityControl.title)), Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { class: "list_block_info_blocks", onClick: () => this.clickOnSecurityControl.emit(this.securityControl.list) }, Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ListBlock$2, { arr: this.securityControl.list }))))))));
    }
};
/*
* компонентная функция для вывода элементов news-main-block
 */
const ListBlock$2 = (props) => {
    return props.arr.text.map((item) => {
        return (Object(_index_5886095c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-list-block", { arr: item }));
    });
};
SAbdullakhSecurityControl.style = sAbdullakhSecurityControlCss;




/***/ })

}]);
//# sourceMappingURL=stencil-my-component_30-entry-js-es2015.js.map