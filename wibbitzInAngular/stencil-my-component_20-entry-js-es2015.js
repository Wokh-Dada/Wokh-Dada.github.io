(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-my-component_20-entry-js"],{

/***/ "./node_modules/abdullakh-wibbitz-v2/dist/esm/my-component_20.entry.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/abdullakh-wibbitz-v2/dist/esm/my-component_20.entry.js ***!
  \*****************************************************************************/
/*! exports provided: my_component, s_abdullakh_app_blog, s_abdullakh_events, s_abdullakh_footer, s_abdullakh_footer_icon_block, s_abdullakh_footer_icons, s_abdullakh_footer_links, s_abdullakh_footer_menu, s_abdullakh_header, s_abdullakh_listiner, s_abdullakh_menu_item, s_abdullakh_new_listiner, s_abdullakh_new_post, s_abdullakh_new_single_post, s_abdullakh_news, s_abdullakh_news_main_block, s_abdullakh_popular_resources, s_abdullakh_popular_resources_aside, s_abdullakh_popular_resources_banner, s_abdullakh_sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "my_component", function() { return MyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_app_blog", function() { return SAbdullakhAppBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_events", function() { return SAbdullakhEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_footer", function() { return SAbdullakhFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_footer_icon_block", function() { return SAbdullakhFooterIconBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_footer_icons", function() { return SAbdullakhFooterIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_footer_links", function() { return SAbdullakhFooterLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_footer_menu", function() { return SAbdullakhFooterMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_header", function() { return SAbdullakhHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_listiner", function() { return SAbdullakhListiner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_menu_item", function() { return SAbdullakhMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_new_listiner", function() { return SAbdullakhNewListiner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_new_post", function() { return SAbdullakhNewPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_new_single_post", function() { return SAbdullakhNewSinglePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_news", function() { return SAbdullakhNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_news_main_block", function() { return SAbdullakhNewsMainBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_popular_resources", function() { return SAbdullakhPopularResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_popular_resources_aside", function() { return SAbdullakhPopularResourcesAside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_popular_resources_banner", function() { return SAbdullakhPopularResourcesBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_abdullakh_sidebar", function() { return SAbdullakhSidebar; });
/* harmony import */ var _index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-051815ee.js */ "./node_modules/abdullakh-wibbitz-v2/dist/esm/index-051815ee.js");


const header = {
    logoUrl: "https://48vo7843c3543dkn9cvt8sl1-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/logo.svg",
    menu: [
        { id: 'Articles', linkName: 'Articles' },
        { id: 'Events', linkName: 'Events' },
        { id: 'Reports', linkName: 'Reports' },
        { id: 'Costumer Stories', linkName: 'Costumer Stories' }
    ],
    subscribeText: 'Subscribe',
};
const firstPage = {
    newsImg: "https://images.unsplash.com/photo-1589400369397-3363f6afeada?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    news: [
        {
            category: 'Blog Post',
            title: 'How to opimize your Facebook & Instagram video ads for succes',
            subtitle: 'Instagram and Facebook video ads qre extremely popular among marketers these days. Not only are they more engaging and entertaining, they`re loved by many...',
            btnText: 'Read Story'
        }
    ],
    sidebar: [
        {
            category: 'Report',
            title: 'Explore Intagram Video: How to convert, engage, and get more Intagra...',
            btnText: 'Read Report',
            widgetImg: 'https://via.placeholder.com/201x180?text=sidebar'
        },
        {
            category: 'Blog Post',
            title: 'Explore Intagram Video: How to convert, engage, and get more Intagra...',
            btnText: 'Read Report',
            widgetImg: 'https://via.placeholder.com/201x180?text=sidebar'
        },
        {
            category: 'Webinar',
            title: 'Explore Intagram Video: How to convert, engage, and get more Intagra...',
            btnText: 'Read Report',
            widgetImg: 'https://via.placeholder.com/201x180?text=sidebar'
        },
        {
            category: 'Report',
            title: 'Explore Intagram Video: How to convert, engage, and get more Intagra...',
            btnText: 'Read Report',
            widgetImg: 'https://via.placeholder.com/201x180?text=sidebar'
        }
    ],
    newPostTitle: 'New Blog Posts',
    newPost: [
        {
            img: "https://via.placeholder.com/201x180?text=newPost",
            block: 's-abdullakh-new-post',
            category: 'Blog Post',
            title: '4 organic ways to improve your website KPIs',
            btnText: 'Read Report'
        },
        {
            img: "https://via.placeholder.com/201x180?text=newPost",
            block: 's-abdullakh-new-post',
            category: 'Blog Post',
            title: 'How to turn your next event into a video content goldmine',
            btnText: 'Read Report'
        },
        {
            img: "https://via.placeholder.com/201x180?text=newPost",
            block: 's-abdullakh-new-post',
            category: 'Blog Post',
            title: 'How to quickly turn ypur podcast into a video script',
            btnText: 'Read Report'
        }
    ],
    popularAsideTitle: 'Popular Resources',
    popularAside: [
        {
            category: 'Blog Post',
            title: 'Micro-influencers and B2C brand videos: A match made in heaven',
            btnText: 'Read Story',
            asidetImg: 'https://via.placeholder.com/201x180?text=popularAside'
        },
        {
            category: 'Webinar',
            title: 'Webinar: Improving content marketing through visual storytelling',
            btnText: 'Watch Webinar',
            asidetImg: 'https://via.placeholder.com/201x180?text=popularAside'
        },
        {
            category: 'Report',
            title: 'How to reach audiences with social video: From Millennials to Gen Z',
            btnText: 'Read Report',
            asidetImg: 'https://via.placeholder.com/201x180?text=popularAside'
        }
    ],
    popularBanner: [
        {
            id: 'popularBanner',
            title: 'Storyteller Circle Event Series',
            btnText: 'Watch Webinar'
        }
    ],
    eventsTitle: 'Upcoming Events',
    events: [
        {
            img: "https://via.placeholder.com/201x180?text=Event",
            block: 'events',
            category: 'Blog Post',
            title: '4 organic ways to improve your website KPIs',
            btnText: 'Read Report'
        },
        {
            img: "https://via.placeholder.com/201x180?text=Event",
            block: 'events',
            category: 'Blog Post',
            title: 'How to turn your next event into a video content goldmine',
            btnText: 'Read Report'
        },
        {
            img: "https://via.placeholder.com/201x180?text=Event",
            block: 'events',
            category: 'Blog Post',
            title: 'How to quickly turn ypur podcast into a video script',
            btnText: 'Read Report'
        }
    ],
    newlistner: [
        {
            title: 'Ready to take a test drive?',
            subtitle: 'We`ll help you elevate strategy. Prices starting from $49 a month.',
            linkText: 'See pricing',
            btnText: 'Try it Free',
            theme: true
        }
    ]
};
const blog = {
    p: [
        {
            text: "##Add to Story## options streamlined into icons\n" +
                "2. *Project and Workflow State* are grouped together to better visualize their close relationship\n" +
                "3. *Story Type* is now placed on the right side when creating a new Story for consistency\n"
        }
    ]
};
const footer = [
    [
        {
            firstBlockTitle: 'The online video editor trusted by content creators to make professional video in minutes.',
            icons: [
                { id: 'facebook', name: 'facebook' },
                { id: 'twitter', name: 'twitter' },
                { id: 'invision', name: 'invision' },
                { id: 'instagram', name: 'instagram' }
            ]
        }
    ],
    [
        {
            title: 'Solutions',
            id: 'Solutions',
            items: [
                { id: 'Studio', linkName: 'Studio' },
                { id: 'Lightbox', linkName: 'Lightbox' },
                { id: 'Wavi', linkName: 'Wavi' }
            ]
        },
    ],
    [
        {
            title: 'Why Wibbitz',
            id: 'Why Wibbitz',
            items: [
                { id: 'Marketing', linkName: 'Marketing' },
                { id: 'Social Media', linkName: 'Social Media' },
                { id: 'News & Editorial', linkName: 'News & Editorial' },
                { id: 'Agencies', linkName: 'Agencies' },
                { id: 'Internal', linkName: 'Internal' },
                { id: 'Communications', linkName: 'Communications' },
                { id: 'Enterprice', linkName: 'Enterprice' }
            ]
        },
    ],
    [
        {
            title: 'Resources',
            id: 'Resources',
            items: [
                { id: 'Blog', linkName: 'Blog' },
                { id: 'Customers', linkName: 'Customers' },
                { id: 'Video Showcase', linkName: 'Video Showcase' },
                { id: 'Watch Demo', linkName: 'Watch Demo' }
            ]
        },
    ],
    [
        {
            title: 'Pricing',
            id: 'Pricing',
            items: [
                { id: '', linkName: '' }
            ]
        },
        {
            title: 'Company',
            items: [
                { id: 'About Us', linkName: 'About Us' },
                { id: 'Jobs', linkName: 'Jobs' },
                { id: 'Press', linkName: 'Press' }
            ]
        },
        {
            title: 'Legal',
            items: [
                { id: 'Terms and Conditions', linkName: 'Terms and Conditions' },
                { id: 'Privacy Policy', linkName: 'Privacy Policy' }
            ]
        }
    ]
];

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * boolean для вывода кнопок
         */
        this.theme = true;
    }
    render() {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-header", { menu: header.menu, logoUrl: header.logoUrl, subscribeText: header.subscribeText, theme: this.theme, onClickOnTheme: () => this.clickOnTheme(), onClickOnHeader: (event) => this.clickOnHeader(event), onClickOnSwitchTheme: (event) => this.clickOnSwitchTheme(event) }), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-news", { newsImg: firstPage.newsImg, news: firstPage.news, sidebar: firstPage.sidebar, onClickOnNews: (event) => this.clickOnNews(event) }), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-new-post", { newPostTitle: firstPage.newPostTitle, newPost: firstPage.newPost, onClickNewPost: (event) => this.clickOnNewPost(event) }), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-popular-resources", { popularAsideTitle: firstPage.popularAsideTitle, popularAside: firstPage.popularAside, popularBanner: firstPage.popularBanner, onClickOnPopular: (event) => this.clickOnPopular(event) }), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-events", { eventsTitle: firstPage.eventsTitle, events: firstPage.events, onClickOnEvents: (event) => this.clickOnEvents(event) }), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-new-listiner", { newlistner: firstPage.newlistner, onClickOnListiner: (event) => this.clickOnListiner(event) }), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-app-blog", { p: blog.p }), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-footer", { footer: footer, onClickOnFooter: (event) => this.clickOnFooter(event) })));
    }
    /**
     * функция для переключения значения boolean для смены тем
     */
    clickOnTheme() {
        this.theme = !this.theme;
    }
    /**
     * клик по элементам Header
     */
    clickOnHeader({ detail }) {
        return console.log('clickOnHeader:', detail);
    }
    /**
     * клик по элементам Toggle theme
     */
    clickOnSwitchTheme({ detail }) {
        return console.log('clickOnSwitchTheme:', detail);
    }
    /**
     * клик по элементам clickOnNews
     */
    clickOnNews({ detail }) {
        return console.log("clickOnNews:", detail);
    }
    /**
     * клик по button в компоненете news
     */
    clickOnNewsButton({ detail }) {
        return console.log("clickOnNewsButton:", detail);
    }
    /**
     * клик по ссылке read report в компоненте newpost
     */
    clickOnNewPost({ detail }) {
        return console.log("clickOnNewPost:", detail);
    }
    /**
     * клик по элементам aside s-abdullakh-sidebar в компоненте popular resources
     */
    clickOnPopular({ detail }) {
        return console.log("clickOnPopular:", detail);
    }
    /**
     * клик по ссылке read report в компоненте newpost
     */
    clickOnEvents({ detail }) {
        return console.log("clickOnEvents:", detail);
    }
    /**
     * клик по button в компоненете Listiner
     */
    clickOnListiner({ detail }) {
        return console.log("clickOnListiner:", detail);
    }
    /**
     * клик по button в компоненете Footer
     */
    clickOnFooter({ detail }) {
        return console.log("clickOnFooter:", detail);
    }
};
MyComponent.style = myComponentCss;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

const global$1 = (typeof global !== "undefined" ? global :
  typeof self !== "undefined" ? self :
  typeof window !== "undefined" ? window : {});

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var inited = false;
function init () {
  inited = true;
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }

  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63;
}

function toByteArray (b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

  // base64 is 4/3 + up to two characters of the original data
  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = (tmp >> 16) & 0xFF;
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
    output.push(tripletToBase64(tmp));
  }
  return output.join('')
}

function fromByteArray (uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[(tmp << 4) & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
    output += lookup[tmp >> 10];
    output += lookup[(tmp >> 4) & 0x3F];
    output += lookup[(tmp << 2) & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('')
}

function read (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? (nBytes - 1) : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

function write (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
  var i = isLE ? 0 : (nBytes - 1);
  var d = isLE ? 1 : -1;
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
}

var toString = {}.toString;

var isArray = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
  ? global$1.TYPED_ARRAY_SUPPORT
  : true;

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr
};

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
};

function allocUnsafe (that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
};

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that
}

function fromObject (that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len);
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}
Buffer.isBuffer = isBuffer;
function internalIsBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
};

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!internalIsBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer
};

function byteLength (string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString (encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap (b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this
};

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this
};

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this
};

Buffer.prototype.toString = function toString () {
  var length = this.length | 0;
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
};

Buffer.prototype.equals = function equals (b) {
  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
};

Buffer.prototype.inspect = function inspect () {
  var str = '';
  var max = INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>'
};

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!internalIsBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset;  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1);
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (internalIsBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
};

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
};

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
};

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed;
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
};

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf)
  } else {
    return fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    );
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val
};

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val
};

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset]
};

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | (this[offset + 1] << 8)
};

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return (this[offset] << 8) | this[offset + 1]
};

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
};

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
};

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
};

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | (this[offset + 1] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | (this[offset] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
};

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
};

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, true, 23, 4)
};

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, false, 23, 4)
};

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, true, 52, 8)
};

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, false, 52, 8)
};

function checkInt (buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = (value & 0xff);
  return offset + 1
};

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24);
    this[offset + 2] = (value >>> 16);
    this[offset + 1] = (value >>> 8);
    this[offset] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = (value & 0xff);
  return offset + 1
};

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
    this[offset + 2] = (value >>> 16);
    this[offset + 3] = (value >>> 24);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
};

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
};

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    );
  }

  return len
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = internalIsBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        }

        // valid lead
        leadSurrogate = codePoint;

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray
}


function base64ToBytes (str) {
  return toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i];
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}


// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
function isBuffer(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
}

function isFastBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
}

var inherits;
if (typeof Object.create === 'function'){
  inherits = function inherits(ctor, superCtor) {
    // implementation from standard node.js 'util' module
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  inherits = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function () {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}
const inherits$1 = inherits;

var formatRegExp = /%[sdj%]/g;
function format(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
}

// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
function deprecate(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global$1.process)) {
    return function() {
      return deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

var debugs = {};
var debugEnviron;
function debuglog(set) {
  if (isUndefined(debugEnviron))
    debugEnviron =  '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = 0;
      debugs[set] = function() {
        var msg = format.apply(null, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
}

/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    _extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray$1(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty$1(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty$1(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var length = output.reduce(function(prev, cur) {
    if (cur.indexOf('\n') >= 0) ;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray$1(ar) {
  return Array.isArray(ar);
}

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

function isNull(arg) {
  return arg === null;
}

function isNullOrUndefined(arg) {
  return arg == null;
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isString(arg) {
  return typeof arg === 'string';
}

function isSymbol(arg) {
  return typeof arg === 'symbol';
}

function isUndefined(arg) {
  return arg === void 0;
}

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}

function isFunction(arg) {
  return typeof arg === 'function';
}

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}

function isBuffer$1(maybeBuf) {
  return Buffer.isBuffer(maybeBuf);
}

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
function log() {
  console.log('%s - %s', timestamp(), format.apply(null, arguments));
}

function _extend(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
}
function hasOwnProperty$1(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

const require$$0 = {
  inherits: inherits$1,
  _extend: _extend,
  log: log,
  isBuffer: isBuffer$1,
  isPrimitive: isPrimitive,
  isFunction: isFunction,
  isError: isError,
  isDate: isDate,
  isObject: isObject,
  isRegExp: isRegExp,
  isUndefined: isUndefined,
  isSymbol: isSymbol,
  isString: isString,
  isNumber: isNumber,
  isNullOrUndefined: isNullOrUndefined,
  isNull: isNull,
  isBoolean: isBoolean,
  isArray: isArray$1,
  inspect: inspect,
  deprecate: deprecate,
  format: format,
  debuglog: debuglog
};

var markdown = createCommonjsModule(function (module, exports) {
// Released under MIT license
// Copyright (c) 2009-2010 Dominic Baggott
// Copyright (c) 2009-2010 Ash Berlin
// Copyright (c) 2011 Christoph Dorn <christoph@christophdorn.com> (http://www.christophdorn.com)

/*jshint browser:true, devel:true */

(function( expose ) {

/**
 *  class Markdown
 *
 *  Markdown processing in Javascript done right. We have very particular views
 *  on what constitutes 'right' which include:
 *
 *  - produces well-formed HTML (this means that em and strong nesting is
 *    important)
 *
 *  - has an intermediate representation to allow processing of parsed data (We
 *    in fact have two, both as [JsonML]: a markdown tree and an HTML tree).
 *
 *  - is easily extensible to add new dialects without having to rewrite the
 *    entire parsing mechanics
 *
 *  - has a good test suite
 *
 *  This implementation fulfills all of these (except that the test suite could
 *  do with expanding to automatically run all the fixtures from other Markdown
 *  implementations.)
 *
 *  ##### Intermediate Representation
 *
 *  *TODO* Talk about this :) Its JsonML, but document the node names we use.
 *
 *  [JsonML]: http://jsonml.org/ "JSON Markup Language"
 **/
var Markdown = expose.Markdown = function(dialect) {
  switch (typeof dialect) {
    case "undefined":
      this.dialect = Markdown.dialects.Gruber;
      break;
    case "object":
      this.dialect = dialect;
      break;
    default:
      if ( dialect in Markdown.dialects ) {
        this.dialect = Markdown.dialects[dialect];
      }
      else {
        throw new Error("Unknown Markdown dialect '" + String(dialect) + "'");
      }
      break;
  }
  this.em_state = [];
  this.strong_state = [];
  this.debug_indent = "";
};

/**
 *  parse( markdown, [dialect] ) -> JsonML
 *  - markdown (String): markdown string to parse
 *  - dialect (String | Dialect): the dialect to use, defaults to gruber
 *
 *  Parse `markdown` and return a markdown document as a Markdown.JsonML tree.
 **/
expose.parse = function( source, dialect ) {
  // dialect will default if undefined
  var md = new Markdown( dialect );
  return md.toTree( source );
};

/**
 *  toHTML( markdown, [dialect]  ) -> String
 *  toHTML( md_tree ) -> String
 *  - markdown (String): markdown string to parse
 *  - md_tree (Markdown.JsonML): parsed markdown tree
 *
 *  Take markdown (either as a string or as a JsonML tree) and run it through
 *  [[toHTMLTree]] then turn it into a well-formated HTML fragment.
 **/
expose.toHTML = function toHTML( source , dialect , options ) {
  var input = expose.toHTMLTree( source , dialect , options );

  return expose.renderJsonML( input );
};

/**
 *  toHTMLTree( markdown, [dialect] ) -> JsonML
 *  toHTMLTree( md_tree ) -> JsonML
 *  - markdown (String): markdown string to parse
 *  - dialect (String | Dialect): the dialect to use, defaults to gruber
 *  - md_tree (Markdown.JsonML): parsed markdown tree
 *
 *  Turn markdown into HTML, represented as a JsonML tree. If a string is given
 *  to this function, it is first parsed into a markdown tree by calling
 *  [[parse]].
 **/
expose.toHTMLTree = function toHTMLTree( input, dialect , options ) {
  // convert string input to an MD tree
  if ( typeof input ==="string" ) input = this.parse( input, dialect );

  // Now convert the MD tree to an HTML tree

  // remove references from the tree
  var attrs = extract_attr( input ),
      refs = {};

  if ( attrs && attrs.references ) {
    refs = attrs.references;
  }

  var html = convert_tree_to_html( input, refs , options );
  merge_text_nodes( html );
  return html;
};

// For Spidermonkey based engines
function mk_block_toSource() {
  return "Markdown.mk_block( " +
          uneval(this.toString()) +
          ", " +
          uneval(this.trailing) +
          ", " +
          uneval(this.lineNumber) +
          " )";
}

// node
function mk_block_inspect() {
  var util = require$$0;
  return "Markdown.mk_block( " +
          util.inspect(this.toString()) +
          ", " +
          util.inspect(this.trailing) +
          ", " +
          util.inspect(this.lineNumber) +
          " )";

}

var mk_block = Markdown.mk_block = function(block, trail, line) {
  // Be helpful for default case in tests.
  if ( arguments.length == 1 ) trail = "\n\n";

  var s = new String(block);
  s.trailing = trail;
  // To make it clear its not just a string
  s.inspect = mk_block_inspect;
  s.toSource = mk_block_toSource;

  if ( line != undefined )
    s.lineNumber = line;

  return s;
};

function count_lines( str ) {
  var n = 0, i = -1;
  while ( ( i = str.indexOf("\n", i + 1) ) !== -1 ) n++;
  return n;
}

// Internal - split source into rough blocks
Markdown.prototype.split_blocks = function splitBlocks( input, startLine ) {
  input = input.replace(/(\r\n|\n|\r)/g, "\n");
  // [\s\S] matches _anything_ (newline or space)
  // [^] is equivalent but doesn't work in IEs.
  var re = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,
      blocks = [],
      m;

  var line_no = 1;

  if ( ( m = /^(\s*\n)/.exec(input) ) != null ) {
    // skip (but count) leading blank lines
    line_no += count_lines( m[0] );
    re.lastIndex = m[0].length;
  }

  while ( ( m = re.exec(input) ) !== null ) {
    if (m[2] == "\n#") {
      m[2] = "\n";
      re.lastIndex--;
    }
    blocks.push( mk_block( m[1], m[2], line_no ) );
    line_no += count_lines( m[0] );
  }

  return blocks;
};

/**
 *  Markdown#processBlock( block, next ) -> undefined | [ JsonML, ... ]
 *  - block (String): the block to process
 *  - next (Array): the following blocks
 *
 * Process `block` and return an array of JsonML nodes representing `block`.
 *
 * It does this by asking each block level function in the dialect to process
 * the block until one can. Succesful handling is indicated by returning an
 * array (with zero or more JsonML nodes), failure by a false value.
 *
 * Blocks handlers are responsible for calling [[Markdown#processInline]]
 * themselves as appropriate.
 *
 * If the blocks were split incorrectly or adjacent blocks need collapsing you
 * can adjust `next` in place using shift/splice etc.
 *
 * If any of this default behaviour is not right for the dialect, you can
 * define a `__call__` method on the dialect that will get invoked to handle
 * the block processing.
 */
Markdown.prototype.processBlock = function processBlock( block, next ) {
  var cbs = this.dialect.block,
      ord = cbs.__order__;

  if ( "__call__" in cbs ) {
    return cbs.__call__.call(this, block, next);
  }

  for ( var i = 0; i < ord.length; i++ ) {
    //D:this.debug( "Testing", ord[i] );
    var res = cbs[ ord[i] ].call( this, block, next );
    if ( res ) {
      //D:this.debug("  matched");
      if ( !isArray(res) || ( res.length > 0 && !( isArray(res[0]) ) ) )
        this.debug(ord[i], "didn't return a proper array");
      //D:this.debug( "" );
      return res;
    }
  }

  // Uhoh! no match! Should we throw an error?
  return [];
};

Markdown.prototype.processInline = function processInline( block ) {
  return this.dialect.inline.__call__.call( this, String( block ) );
};

/**
 *  Markdown#toTree( source ) -> JsonML
 *  - source (String): markdown source to parse
 *
 *  Parse `source` into a JsonML tree representing the markdown document.
 **/
// custom_tree means set this.tree to `custom_tree` and restore old value on return
Markdown.prototype.toTree = function toTree( source, custom_root ) {
  var blocks = source instanceof Array ? source : this.split_blocks( source );

  // Make tree a member variable so its easier to mess with in extensions
  var old_tree = this.tree;
  try {
    this.tree = custom_root || this.tree || [ "markdown" ];

    blocks:
    while ( blocks.length ) {
      var b = this.processBlock( blocks.shift(), blocks );

      // Reference blocks and the like won't return any content
      if ( !b.length ) continue blocks;

      this.tree.push.apply( this.tree, b );
    }
    return this.tree;
  }
  finally {
    if ( custom_root ) {
      this.tree = old_tree;
    }
  }
};

// Noop by default
Markdown.prototype.debug = function () {
  var args = Array.prototype.slice.call( arguments);
  args.unshift(this.debug_indent);
  if ( typeof print !== "undefined" )
      print.apply( print, args );
  if ( typeof console !== "undefined" && typeof console.log !== "undefined" )
      console.log.apply( null, args );
};

Markdown.prototype.loop_re_over_block = function( re, block, cb ) {
  // Dont use /g regexps with this
  var m,
      b = block.valueOf();

  while ( b.length && (m = re.exec(b) ) != null ) {
    b = b.substr( m[0].length );
    cb.call(this, m);
  }
  return b;
};

/**
 * Markdown.dialects
 *
 * Namespace of built-in dialects.
 **/
Markdown.dialects = {};

/**
 * Markdown.dialects.Gruber
 *
 * The default dialect that follows the rules set out by John Gruber's
 * markdown.pl as closely as possible. Well actually we follow the behaviour of
 * that script which in some places is not exactly what the syntax web page
 * says.
 **/
Markdown.dialects.Gruber = {
  block: {
    atxHeader: function atxHeader( block, next ) {
      var m = block.match( /^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/ );

      if ( !m ) return undefined;

      var header = [ "header", { level: m[ 1 ].length } ];
      Array.prototype.push.apply(header, this.processInline(m[ 2 ]));

      if ( m[0].length < block.length )
        next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

      return [ header ];
    },

    setextHeader: function setextHeader( block, next ) {
      var m = block.match( /^(.*)\n([-=])\2\2+(?:\n|$)/ );

      if ( !m ) return undefined;

      var level = ( m[ 2 ] === "=" ) ? 1 : 2;
      var header = [ "header", { level : level }, m[ 1 ] ];

      if ( m[0].length < block.length )
        next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

      return [ header ];
    },

    code: function code( block, next ) {
      // |    Foo
      // |bar
      // should be a code block followed by a paragraph. Fun
      //
      // There might also be adjacent code block to merge.

      var ret = [],
          re = /^(?: {0,3}\t| {4})(.*)\n?/;

      // 4 spaces + content
      if ( !block.match( re ) ) return undefined;

      block_search:
      do {
        // Now pull out the rest of the lines
        var b = this.loop_re_over_block(
                  re, block.valueOf(), function( m ) { ret.push( m[1] ); } );

        if ( b.length ) {
          // Case alluded to in first comment. push it back on as a new block
          next.unshift( mk_block(b, block.trailing) );
          break block_search;
        }
        else if ( next.length ) {
          // Check the next block - it might be code too
          if ( !next[0].match( re ) ) break block_search;

          // Pull how how many blanks lines follow - minus two to account for .join
          ret.push ( block.trailing.replace(/[^\n]/g, "").substring(2) );

          block = next.shift();
        }
        else {
          break block_search;
        }
      } while ( true );

      return [ [ "code_block", ret.join("\n") ] ];
    },

    horizRule: function horizRule( block, next ) {
      // this needs to find any hr in the block to handle abutting blocks
      var m = block.match( /^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/ );

      if ( !m ) {
        return undefined;
      }

      var jsonml = [ [ "hr" ] ];

      // if there's a leading abutting block, process it
      if ( m[ 1 ] ) {
        jsonml.unshift.apply( jsonml, this.processBlock( m[ 1 ], [] ) );
      }

      // if there's a trailing abutting block, stick it into next
      if ( m[ 3 ] ) {
        next.unshift( mk_block( m[ 3 ] ) );
      }

      return jsonml;
    },

    // There are two types of lists. Tight and loose. Tight lists have no whitespace
    // between the items (and result in text just in the <li>) and loose lists,
    // which have an empty line between list items, resulting in (one or more)
    // paragraphs inside the <li>.
    //
    // There are all sorts weird edge cases about the original markdown.pl's
    // handling of lists:
    //
    // * Nested lists are supposed to be indented by four chars per level. But
    //   if they aren't, you can get a nested list by indenting by less than
    //   four so long as the indent doesn't match an indent of an existing list
    //   item in the 'nest stack'.
    //
    // * The type of the list (bullet or number) is controlled just by the
    //    first item at the indent. Subsequent changes are ignored unless they
    //    are for nested lists
    //
    lists: (function( ) {
      // Use a closure to hide a few variables.
      var any_list = "[*+-]|\\d+\\.",
          bullet_list = /[*+-]/,
          // Capture leading indent as it matters for determining nested lists.
          is_list_re = new RegExp( "^( {0,3})(" + any_list + ")[ \t]+" ),
          indent_re = "(?: {0,3}\\t| {4})";

      // TODO: Cache this regexp for certain depths.
      // Create a regexp suitable for matching an li for a given stack depth
      function regex_for_depth( depth ) {

        return new RegExp(
          // m[1] = indent, m[2] = list_type
          "(?:^(" + indent_re + "{0," + depth + "} {0,3})(" + any_list + ")\\s+)|" +
          // m[3] = cont
          "(^" + indent_re + "{0," + (depth-1) + "}[ ]{0,4})"
        );
      }
      function expand_tab( input ) {
        return input.replace( / {0,3}\t/g, "    " );
      }

      // Add inline content `inline` to `li`. inline comes from processInline
      // so is an array of content
      function add(li, loose, inline, nl) {
        if ( loose ) {
          li.push( [ "para" ].concat(inline) );
          return;
        }
        // Hmmm, should this be any block level element or just paras?
        var add_to = li[li.length -1] instanceof Array && li[li.length - 1][0] == "para"
                   ? li[li.length -1]
                   : li;

        // If there is already some content in this list, add the new line in
        if ( nl && li.length > 1 ) inline.unshift(nl);

        for ( var i = 0; i < inline.length; i++ ) {
          var what = inline[i],
              is_str = typeof what == "string";
          if ( is_str && add_to.length > 1 && typeof add_to[add_to.length-1] == "string" ) {
            add_to[ add_to.length-1 ] += what;
          }
          else {
            add_to.push( what );
          }
        }
      }

      // contained means have an indent greater than the current one. On
      // *every* line in the block
      function get_contained_blocks( depth, blocks ) {

        var re = new RegExp( "^(" + indent_re + "{" + depth + "}.*?\\n?)*$" ),
            replace = new RegExp("^" + indent_re + "{" + depth + "}", "gm"),
            ret = [];

        while ( blocks.length > 0 ) {
          if ( re.exec( blocks[0] ) ) {
            var b = blocks.shift(),
                // Now remove that indent
                x = b.replace( replace, "");

            ret.push( mk_block( x, b.trailing, b.lineNumber ) );
          }
          else {
            break;
          }
        }
        return ret;
      }

      // passed to stack.forEach to turn list items up the stack into paras
      function paragraphify(s, i, stack) {
        var list = s.list;
        var last_li = list[list.length-1];

        if ( last_li[1] instanceof Array && last_li[1][0] == "para" ) {
          return;
        }
        if ( i + 1 == stack.length ) {
          // Last stack frame
          // Keep the same array, but replace the contents
          last_li.push( ["para"].concat( last_li.splice(1, last_li.length - 1) ) );
        }
        else {
          var sublist = last_li.pop();
          last_li.push( ["para"].concat( last_li.splice(1, last_li.length - 1) ), sublist );
        }
      }

      // The matcher function
      return function( block, next ) {
        var m = block.match( is_list_re );
        if ( !m ) return undefined;

        function make_list( m ) {
          var list = bullet_list.exec( m[2] )
                   ? ["bulletlist"]
                   : ["numberlist"];

          stack.push( { list: list, indent: m[1] } );
          return list;
        }


        var stack = [], // Stack of lists for nesting.
            list = make_list( m ),
            last_li,
            loose = false,
            ret = [ stack[0].list ],
            i;

        // Loop to search over block looking for inner block elements and loose lists
        loose_search:
        while ( true ) {
          // Split into lines preserving new lines at end of line
          var lines = block.split( /(?=\n)/ );

          // We have to grab all lines for a li and call processInline on them
          // once as there are some inline things that can span lines.
          var li_accumulate = "";

          // Loop over the lines in this block looking for tight lists.
          
          for ( var line_no = 0; line_no < lines.length; line_no++ ) {
            var nl = "",
                l = lines[line_no].replace(/^\n/, function(n) { nl = n; return ""; });

            // TODO: really should cache this
            var line_re = regex_for_depth( stack.length );

            m = l.match( line_re );
            //print( "line:", uneval(l), "\nline match:", uneval(m) );

            // We have a list item
            if ( m[1] !== undefined ) {
              // Process the previous list item, if any
              if ( li_accumulate.length ) {
                add( last_li, loose, this.processInline( li_accumulate ), nl );
                // Loose mode will have been dealt with. Reset it
                loose = false;
                li_accumulate = "";
              }

              m[1] = expand_tab( m[1] );
              var wanted_depth = Math.floor(m[1].length/4)+1;
              //print( "want:", wanted_depth, "stack:", stack.length);
              if ( wanted_depth > stack.length ) {
                // Deep enough for a nested list outright
                //print ( "new nested list" );
                list = make_list( m );
                last_li.push( list );
                last_li = list[1] = [ "listitem" ];
              }
              else {
                // We aren't deep enough to be strictly a new level. This is
                // where Md.pl goes nuts. If the indent matches a level in the
                // stack, put it there, else put it one deeper then the
                // wanted_depth deserves.
                var found = false;
                for ( i = 0; i < stack.length; i++ ) {
                  if ( stack[ i ].indent != m[1] ) continue;
                  list = stack[ i ].list;
                  stack.splice( i+1, stack.length - (i+1) );
                  found = true;
                  break;
                }

                if (!found) {
                  //print("not found. l:", uneval(l));
                  wanted_depth++;
                  if ( wanted_depth <= stack.length ) {
                    stack.splice(wanted_depth, stack.length - wanted_depth);
                    //print("Desired depth now", wanted_depth, "stack:", stack.length);
                    list = stack[wanted_depth-1].list;
                    //print("list:", uneval(list) );
                  }
                  else {
                    //print ("made new stack for messy indent");
                    list = make_list(m);
                    last_li.push(list);
                  }
                }

                //print( uneval(list), "last", list === stack[stack.length-1].list );
                last_li = [ "listitem" ];
                list.push(last_li);
              } // end depth of shenegains
              nl = "";
            }

            // Add content
            if ( l.length > m[0].length ) {
              li_accumulate += nl + l.substr( m[0].length );
            }
          } // tight_search

          if ( li_accumulate.length ) {
            add( last_li, loose, this.processInline( li_accumulate ), nl );
            // Loose mode will have been dealt with. Reset it
            loose = false;
            li_accumulate = "";
          }

          // Look at the next block - we might have a loose list. Or an extra
          // paragraph for the current li
          var contained = get_contained_blocks( stack.length, next );

          // Deal with code blocks or properly nested lists
          if ( contained.length > 0 ) {
            // Make sure all listitems up the stack are paragraphs
            forEach( stack, paragraphify, this);

            last_li.push.apply( last_li, this.toTree( contained, [] ) );
          }

          var next_block = next[0] && next[0].valueOf() || "";

          if ( next_block.match(is_list_re) || next_block.match( /^ / ) ) {
            block = next.shift();

            // Check for an HR following a list: features/lists/hr_abutting
            var hr = this.dialect.block.horizRule( block, next );

            if ( hr ) {
              ret.push.apply(ret, hr);
              break;
            }

            // Make sure all listitems up the stack are paragraphs
            forEach( stack, paragraphify, this);

            loose = true;
            continue loose_search;
          }
          break;
        } // loose_search

        return ret;
      };
    })(),

    blockquote: function blockquote( block, next ) {
      if ( !block.match( /^>/m ) )
        return undefined;

      var jsonml = [];

      // separate out the leading abutting block, if any. I.e. in this case:
      //
      //  a
      //  > b
      //
      if ( block[ 0 ] != ">" ) {
        var lines = block.split( /\n/ ),
            prev = [],
            line_no = block.lineNumber;

        // keep shifting lines until you find a crotchet
        while ( lines.length && lines[ 0 ][ 0 ] != ">" ) {
            prev.push( lines.shift() );
            line_no++;
        }

        var abutting = mk_block( prev.join( "\n" ), "\n", block.lineNumber );
        jsonml.push.apply( jsonml, this.processBlock( abutting, [] ) );
        // reassemble new block of just block quotes!
        block = mk_block( lines.join( "\n" ), block.trailing, line_no );
      }


      // if the next block is also a blockquote merge it in
      while ( next.length && next[ 0 ][ 0 ] == ">" ) {
        var b = next.shift();
        block = mk_block( block + block.trailing + b, b.trailing, block.lineNumber );
      }

      // Strip off the leading "> " and re-process as a block.
      var input = block.replace( /^> ?/gm, "" ),
          processedBlock = this.toTree( input, [ "blockquote" ] ),
          attr = extract_attr( processedBlock );

      // If any link references were found get rid of them
      if ( attr && attr.references ) {
        delete attr.references;
        // And then remove the attribute object if it's empty
        if ( isEmpty( attr ) ) {
          processedBlock.splice( 1, 1 );
        }
      }

      jsonml.push( processedBlock );
      return jsonml;
    },

    referenceDefn: function referenceDefn( block, next) {
      var re = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;
      // interesting matches are [ , ref_id, url, , title, title ]

      if ( !block.match(re) )
        return undefined;

      // make an attribute node if it doesn't exist
      if ( !extract_attr( this.tree ) ) {
        this.tree.splice( 1, 0, {} );
      }

      var attrs = extract_attr( this.tree );

      // make a references hash if it doesn't exist
      if ( attrs.references === undefined ) {
        attrs.references = {};
      }

      var b = this.loop_re_over_block(re, block, function( m ) {

        if ( m[2] && m[2][0] == "<" && m[2][m[2].length-1] == ">" )
          m[2] = m[2].substring( 1, m[2].length - 1 );

        var ref = attrs.references[ m[1].toLowerCase() ] = {
          href: m[2]
        };

        if ( m[4] !== undefined )
          ref.title = m[4];
        else if ( m[5] !== undefined )
          ref.title = m[5];

      } );

      if ( b.length )
        next.unshift( mk_block( b, block.trailing ) );

      return [];
    },

    para: function para( block, next ) {
      // everything's a para!
      return [ ["para"].concat( this.processInline( block ) ) ];
    }
  }
};

Markdown.dialects.Gruber.inline = {

    __oneElement__: function oneElement( text, patterns_or_re, previous_nodes ) {
      var m,
          res;

      patterns_or_re = patterns_or_re || this.dialect.inline.__patterns__;
      var re = new RegExp( "([\\s\\S]*?)(" + (patterns_or_re.source || patterns_or_re) + ")" );

      m = re.exec( text );
      if (!m) {
        // Just boring text
        return [ text.length, text ];
      }
      else if ( m[1] ) {
        // Some un-interesting text matched. Return that first
        return [ m[1].length, m[1] ];
      }

      var res;
      if ( m[2] in this.dialect.inline ) {
        res = this.dialect.inline[ m[2] ].call(
                  this,
                  text.substr( m.index ), m, previous_nodes || [] );
      }
      // Default for now to make dev easier. just slurp special and output it.
      res = res || [ m[2].length, m[2] ];
      return res;
    },

    __call__: function inline( text, patterns ) {

      var out = [],
          res;

      function add(x) {
        //D:self.debug("  adding output", uneval(x));
        if ( typeof x == "string" && typeof out[out.length-1] == "string" )
          out[ out.length-1 ] += x;
        else
          out.push(x);
      }

      while ( text.length > 0 ) {
        res = this.dialect.inline.__oneElement__.call(this, text, patterns, out );
        text = text.substr( res.shift() );
        forEach(res, add );
      }

      return out;
    },

    // These characters are intersting elsewhere, so have rules for them so that
    // chunks of plain text blocks don't include them
    "]": function () {},
    "}": function () {},

    __escape__ : /^\\[\\`\*_{}\[\]()#\+.!\-]/,

    "\\": function escaped( text ) {
      // [ length of input processed, node/children to add... ]
      // Only esacape: \ ` * _ { } [ ] ( ) # * + - . !
      if ( this.dialect.inline.__escape__.exec( text ) )
        return [ 2, text.charAt( 1 ) ];
      else
        // Not an esacpe
        return [ 1, "\\" ];
    },

    "![": function image( text ) {

      // Unlike images, alt text is plain text only. no other elements are
      // allowed in there

      // ![Alt text](/path/to/img.jpg "Optional title")
      //      1          2            3       4         <--- captures
      var m = text.match( /^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/ );

      if ( m ) {
        if ( m[2] && m[2][0] == "<" && m[2][m[2].length-1] == ">" )
          m[2] = m[2].substring( 1, m[2].length - 1 );

        m[2] = this.dialect.inline.__call__.call( this, m[2], /\\/ )[0];

        var attrs = { alt: m[1], href: m[2] || "" };
        if ( m[4] !== undefined)
          attrs.title = m[4];

        return [ m[0].length, [ "img", attrs ] ];
      }

      // ![Alt text][id]
      m = text.match( /^!\[(.*?)\][ \t]*\[(.*?)\]/ );

      if ( m ) {
        // We can't check if the reference is known here as it likely wont be
        // found till after. Check it in md tree->hmtl tree conversion
        return [ m[0].length, [ "img_ref", { alt: m[1], ref: m[2].toLowerCase(), original: m[0] } ] ];
      }

      // Just consume the '!['
      return [ 2, "![" ];
    },

    "[": function link( text ) {

      var orig = String(text);
      // Inline content is possible inside `link text`
      var res = Markdown.DialectHelpers.inline_until_char.call( this, text.substr(1), "]" );

      // No closing ']' found. Just consume the [
      if ( !res ) return [ 1, "[" ];

      var consumed = 1 + res[ 0 ],
          children = res[ 1 ],
          link,
          attrs;

      // At this point the first [...] has been parsed. See what follows to find
      // out which kind of link we are (reference or direct url)
      text = text.substr( consumed );

      // [link text](/path/to/img.jpg "Optional title")
      //                 1            2       3         <--- captures
      // This will capture up to the last paren in the block. We then pull
      // back based on if there a matching ones in the url
      //    ([here](/url/(test))
      // The parens have to be balanced
      var m = text.match( /^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/ );
      if ( m ) {
        var url = m[1];
        consumed += m[0].length;

        if ( url && url[0] == "<" && url[url.length-1] == ">" )
          url = url.substring( 1, url.length - 1 );

        // If there is a title we don't have to worry about parens in the url
        if ( !m[3] ) {
          var open_parens = 1; // One open that isn't in the capture
          for ( var len = 0; len < url.length; len++ ) {
            switch ( url[len] ) {
            case "(":
              open_parens++;
              break;
            case ")":
              if ( --open_parens == 0) {
                consumed -= url.length - len;
                url = url.substring(0, len);
              }
              break;
            }
          }
        }

        // Process escapes only
        url = this.dialect.inline.__call__.call( this, url, /\\/ )[0];

        attrs = { href: url || "" };
        if ( m[3] !== undefined)
          attrs.title = m[3];

        link = [ "link", attrs ].concat( children );
        return [ consumed, link ];
      }

      // [Alt text][id]
      // [Alt text] [id]
      m = text.match( /^\s*\[(.*?)\]/ );

      if ( m ) {

        consumed += m[ 0 ].length;

        // [links][] uses links as its reference
        attrs = { ref: ( m[ 1 ] || String(children) ).toLowerCase(),  original: orig.substr( 0, consumed ) };

        link = [ "link_ref", attrs ].concat( children );

        // We can't check if the reference is known here as it likely wont be
        // found till after. Check it in md tree->hmtl tree conversion.
        // Store the original so that conversion can revert if the ref isn't found.
        return [ consumed, link ];
      }

      // [id]
      // Only if id is plain (no formatting.)
      if ( children.length == 1 && typeof children[0] == "string" ) {

        attrs = { ref: children[0].toLowerCase(),  original: orig.substr( 0, consumed ) };
        link = [ "link_ref", attrs, children[0] ];
        return [ consumed, link ];
      }

      // Just consume the "["
      return [ 1, "[" ];
    },


    "<": function autoLink( text ) {
      var m;

      if ( ( m = text.match( /^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/ ) ) != null ) {
        if ( m[3] ) {
          return [ m[0].length, [ "link", { href: "mailto:" + m[3] }, m[3] ] ];

        }
        else if ( m[2] == "mailto" ) {
          return [ m[0].length, [ "link", { href: m[1] }, m[1].substr("mailto:".length ) ] ];
        }
        else
          return [ m[0].length, [ "link", { href: m[1] }, m[1] ] ];
      }

      return [ 1, "<" ];
    },

    "`": function inlineCode( text ) {
      // Inline code block. as many backticks as you like to start it
      // Always skip over the opening ticks.
      var m = text.match( /(`+)(([\s\S]*?)\1)/ );

      if ( m && m[2] )
        return [ m[1].length + m[2].length, [ "inlinecode", m[3] ] ];
      else {
        // TODO: No matching end code found - warn!
        return [ 1, "`" ];
      }
    },

    "  \n": function lineBreak( text ) {
      return [ 3, [ "linebreak" ] ];
    }

};

// Meta Helper/generator method for em and strong handling
function strong_em( tag, md ) {

  var state_slot = tag + "_state",
      other_slot = tag == "strong" ? "em_state" : "strong_state";

  function CloseTag(len) {
    this.len_after = len;
    this.name = "close_" + md;
  }

  return function ( text, orig_match ) {

    if ( this[state_slot][0] == md ) {
      // Most recent em is of this type
      //D:this.debug("closing", md);
      this[state_slot].shift();

      // "Consume" everything to go back to the recrusion in the else-block below
      return [ text.length, new CloseTag(text.length-md.length) ];
    }
    else {
      // Store a clone of the em/strong states
      var other = this[other_slot].slice(),
          state = this[state_slot].slice();

      this[state_slot].unshift(md);

      //D:this.debug_indent += "  ";

      // Recurse
      var res = this.processInline( text.substr( md.length ) );
      //D:this.debug_indent = this.debug_indent.substr(2);

      var last = res[res.length - 1];

      //D:this.debug("processInline from", tag + ": ", uneval( res ) );

      var check = this[state_slot].shift();
      if ( last instanceof CloseTag ) {
        res.pop();
        // We matched! Huzzah.
        var consumed = text.length - last.len_after;
        return [ consumed, [ tag ].concat(res) ];
      }
      else {
        // Restore the state of the other kind. We might have mistakenly closed it.
        this[other_slot] = other;
        this[state_slot] = state;

        // We can't reuse the processed result as it could have wrong parsing contexts in it.
        return [ md.length, md ];
      }
    }
  }; // End returned function
}

Markdown.dialects.Gruber.inline["**"] = strong_em("strong", "**");
Markdown.dialects.Gruber.inline["__"] = strong_em("strong", "__");
Markdown.dialects.Gruber.inline["*"]  = strong_em("em", "*");
Markdown.dialects.Gruber.inline["_"]  = strong_em("em", "_");


// Build default order from insertion order.
Markdown.buildBlockOrder = function(d) {
  var ord = [];
  for ( var i in d ) {
    if ( i == "__order__" || i == "__call__" ) continue;
    ord.push( i );
  }
  d.__order__ = ord;
};

// Build patterns for inline matcher
Markdown.buildInlinePatterns = function(d) {
  var patterns = [];

  for ( var i in d ) {
    // __foo__ is reserved and not a pattern
    if ( i.match( /^__.*__$/) ) continue;
    var l = i.replace( /([\\.*+?|()\[\]{}])/g, "\\$1" )
             .replace( /\n/, "\\n" );
    patterns.push( i.length == 1 ? l : "(?:" + l + ")" );
  }

  patterns = patterns.join("|");
  d.__patterns__ = patterns;
  //print("patterns:", uneval( patterns ) );

  var fn = d.__call__;
  d.__call__ = function(text, pattern) {
    if ( pattern != undefined ) {
      return fn.call(this, text, pattern);
    }
    else
    {
      return fn.call(this, text, patterns);
    }
  };
};

Markdown.DialectHelpers = {};
Markdown.DialectHelpers.inline_until_char = function( text, want ) {
  var consumed = 0,
      nodes = [];

  while ( true ) {
    if ( text.charAt( consumed ) == want ) {
      // Found the character we were looking for
      consumed++;
      return [ consumed, nodes ];
    }

    if ( consumed >= text.length ) {
      // No closing char found. Abort.
      return null;
    }

    var res = this.dialect.inline.__oneElement__.call(this, text.substr( consumed ) );
    consumed += res[ 0 ];
    // Add any returned nodes.
    nodes.push.apply( nodes, res.slice( 1 ) );
  }
};

// Helper function to make sub-classing a dialect easier
Markdown.subclassDialect = function( d ) {
  function Block() {}
  Block.prototype = d.block;
  function Inline() {}
  Inline.prototype = d.inline;

  return { block: new Block(), inline: new Inline() };
};

Markdown.buildBlockOrder ( Markdown.dialects.Gruber.block );
Markdown.buildInlinePatterns( Markdown.dialects.Gruber.inline );

Markdown.dialects.Maruku = Markdown.subclassDialect( Markdown.dialects.Gruber );

Markdown.dialects.Maruku.processMetaHash = function processMetaHash( meta_string ) {
  var meta = split_meta_hash( meta_string ),
      attr = {};

  for ( var i = 0; i < meta.length; ++i ) {
    // id: #foo
    if ( /^#/.test( meta[ i ] ) ) {
      attr.id = meta[ i ].substring( 1 );
    }
    // class: .foo
    else if ( /^\./.test( meta[ i ] ) ) {
      // if class already exists, append the new one
      if ( attr["class"] ) {
        attr["class"] = attr["class"] + meta[ i ].replace( /./, " " );
      }
      else {
        attr["class"] = meta[ i ].substring( 1 );
      }
    }
    // attribute: foo=bar
    else if ( /\=/.test( meta[ i ] ) ) {
      var s = meta[ i ].split( /\=/ );
      attr[ s[ 0 ] ] = s[ 1 ];
    }
  }

  return attr;
};

function split_meta_hash( meta_string ) {
  var meta = meta_string.split( "" ),
      parts = [ "" ],
      in_quotes = false;

  while ( meta.length ) {
    var letter = meta.shift();
    switch ( letter ) {
      case " " :
        // if we're in a quoted section, keep it
        if ( in_quotes ) {
          parts[ parts.length - 1 ] += letter;
        }
        // otherwise make a new part
        else {
          parts.push( "" );
        }
        break;
      case "'" :
      case '"' :
        // reverse the quotes and move straight on
        in_quotes = !in_quotes;
        break;
      case "\\" :
        // shift off the next letter to be used straight away.
        // it was escaped so we'll keep it whatever it is
        letter = meta.shift();
      default :
        parts[ parts.length - 1 ] += letter;
        break;
    }
  }

  return parts;
}

Markdown.dialects.Maruku.block.document_meta = function document_meta( block, next ) {
  // we're only interested in the first block
  if ( block.lineNumber > 1 ) return undefined;

  // document_meta blocks consist of one or more lines of `Key: Value\n`
  if ( ! block.match( /^(?:\w+:.*\n)*\w+:.*$/ ) ) return undefined;

  // make an attribute node if it doesn't exist
  if ( !extract_attr( this.tree ) ) {
    this.tree.splice( 1, 0, {} );
  }

  var pairs = block.split( /\n/ );
  for ( p in pairs ) {
    var m = pairs[ p ].match( /(\w+):\s*(.*)$/ ),
        key = m[ 1 ].toLowerCase(),
        value = m[ 2 ];

    this.tree[ 1 ][ key ] = value;
  }

  // document_meta produces no content!
  return [];
};

Markdown.dialects.Maruku.block.block_meta = function block_meta( block, next ) {
  // check if the last line of the block is an meta hash
  var m = block.match( /(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/ );
  if ( !m ) return undefined;

  // process the meta hash
  var attr = this.dialect.processMetaHash( m[ 2 ] );

  var hash;

  // if we matched ^ then we need to apply meta to the previous block
  if ( m[ 1 ] === "" ) {
    var node = this.tree[ this.tree.length - 1 ];
    hash = extract_attr( node );

    // if the node is a string (rather than JsonML), bail
    if ( typeof node === "string" ) return undefined;

    // create the attribute hash if it doesn't exist
    if ( !hash ) {
      hash = {};
      node.splice( 1, 0, hash );
    }

    // add the attributes in
    for ( a in attr ) {
      hash[ a ] = attr[ a ];
    }

    // return nothing so the meta hash is removed
    return [];
  }

  // pull the meta hash off the block and process what's left
  var b = block.replace( /\n.*$/, "" ),
      result = this.processBlock( b, [] );

  // get or make the attributes hash
  hash = extract_attr( result[ 0 ] );
  if ( !hash ) {
    hash = {};
    result[ 0 ].splice( 1, 0, hash );
  }

  // attach the attributes to the block
  for ( a in attr ) {
    hash[ a ] = attr[ a ];
  }

  return result;
};

Markdown.dialects.Maruku.block.definition_list = function definition_list( block, next ) {
  // one or more terms followed by one or more definitions, in a single block
  var tight = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,
      list = [ "dl" ],
      i, m;

  // see if we're dealing with a tight or loose block
  if ( ( m = block.match( tight ) ) ) {
    // pull subsequent tight DL blocks out of `next`
    var blocks = [ block ];
    while ( next.length && tight.exec( next[ 0 ] ) ) {
      blocks.push( next.shift() );
    }

    for ( var b = 0; b < blocks.length; ++b ) {
      var m = blocks[ b ].match( tight ),
          terms = m[ 1 ].replace( /\n$/, "" ).split( /\n/ ),
          defns = m[ 2 ].split( /\n:\s+/ );

      // print( uneval( m ) );

      for ( i = 0; i < terms.length; ++i ) {
        list.push( [ "dt", terms[ i ] ] );
      }

      for ( i = 0; i < defns.length; ++i ) {
        // run inline processing over the definition
        list.push( [ "dd" ].concat( this.processInline( defns[ i ].replace( /(\n)\s+/, "$1" ) ) ) );
      }
    }
  }
  else {
    return undefined;
  }

  return [ list ];
};

// splits on unescaped instances of @ch. If @ch is not a character the result
// can be unpredictable

Markdown.dialects.Maruku.block.table = function table (block, next) {

    var _split_on_unescaped = function(s, ch) {
        ch = ch || '\\s';
        if (ch.match(/^[\\|\[\]{}?*.+^$]$/)) { ch = '\\' + ch; }
        var res = [ ],
            r = new RegExp('^((?:\\\\.|[^\\\\' + ch + '])*)' + ch + '(.*)'),
            m;
        while(m = s.match(r)) {
            res.push(m[1]);
            s = m[2];
        }
        res.push(s);
        return res;
    };

    var leading_pipe = /^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,
        // find at least an unescaped pipe in each line
        no_leading_pipe = /^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/,
        i, m;
    if (m = block.match(leading_pipe)) {
        // remove leading pipes in contents
        // (header and horizontal rule already have the leading pipe left out)
        m[3] = m[3].replace(/^\s*\|/gm, '');
    } else if (! ( m = block.match(no_leading_pipe))) {
        return undefined;
    }

    var table = [ "table", [ "thead", [ "tr" ] ], [ "tbody" ] ];

    // remove trailing pipes, then split on pipes
    // (no escaped pipes are allowed in horizontal rule)
    m[2] = m[2].replace(/\|\s*$/, '').split('|');

    // process alignment
    var html_attrs = [ ];
    forEach (m[2], function (s) {
        if (s.match(/^\s*-+:\s*$/))       html_attrs.push({align: "right"});
        else if (s.match(/^\s*:-+\s*$/))  html_attrs.push({align: "left"});
        else if (s.match(/^\s*:-+:\s*$/)) html_attrs.push({align: "center"});
        else                              html_attrs.push({});
    });

    // now for the header, avoid escaped pipes
    m[1] = _split_on_unescaped(m[1].replace(/\|\s*$/, ''), '|');
    for (i = 0; i < m[1].length; i++) {
        table[1][1].push(['th', html_attrs[i] || {}].concat(
            this.processInline(m[1][i].trim())));
    }

    // now for body contents
    forEach (m[3].replace(/\|\s*$/mg, '').split('\n'), function (row) {
        var html_row = ['tr'];
        row = _split_on_unescaped(row, '|');
        for (i = 0; i < row.length; i++) {
            html_row.push(['td', html_attrs[i] || {}].concat(this.processInline(row[i].trim())));
        }
        table[2].push(html_row);
    }, this);

    return [table];
};

Markdown.dialects.Maruku.inline[ "{:" ] = function inline_meta( text, matches, out ) {
  if ( !out.length ) {
    return [ 2, "{:" ];
  }

  // get the preceeding element
  var before = out[ out.length - 1 ];

  if ( typeof before === "string" ) {
    return [ 2, "{:" ];
  }

  // match a meta hash
  var m = text.match( /^\{:\s*((?:\\\}|[^\}])*)\s*\}/ );

  // no match, false alarm
  if ( !m ) {
    return [ 2, "{:" ];
  }

  // attach the attributes to the preceeding element
  var meta = this.dialect.processMetaHash( m[ 1 ] ),
      attr = extract_attr( before );

  if ( !attr ) {
    attr = {};
    before.splice( 1, 0, attr );
  }

  for ( var k in meta ) {
    attr[ k ] = meta[ k ];
  }

  // cut out the string and replace it with nothing
  return [ m[ 0 ].length, "" ];
};

Markdown.dialects.Maruku.inline.__escape__ = /^\\[\\`\*_{}\[\]()#\+.!\-|:]/;

Markdown.buildBlockOrder ( Markdown.dialects.Maruku.block );
Markdown.buildInlinePatterns( Markdown.dialects.Maruku.inline );

var isArray = Array.isArray || function(obj) {
  return Object.prototype.toString.call(obj) == "[object Array]";
};

var forEach;
// Don't mess with Array.prototype. Its not friendly
if ( Array.prototype.forEach ) {
  forEach = function( arr, cb, thisp ) {
    return arr.forEach( cb, thisp );
  };
}
else {
  forEach = function(arr, cb, thisp) {
    for (var i = 0; i < arr.length; i++) {
      cb.call(thisp || arr, arr[i], i, arr);
    }
  };
}

var isEmpty = function( obj ) {
  for ( var key in obj ) {
    if ( hasOwnProperty.call( obj, key ) ) {
      return false;
    }
  }

  return true;
};

function extract_attr( jsonml ) {
  return isArray(jsonml)
      && jsonml.length > 1
      && typeof jsonml[ 1 ] === "object"
      && !( isArray(jsonml[ 1 ]) )
      ? jsonml[ 1 ]
      : undefined;
}



/**
 *  renderJsonML( jsonml[, options] ) -> String
 *  - jsonml (Array): JsonML array to render to XML
 *  - options (Object): options
 *
 *  Converts the given JsonML into well-formed XML.
 *
 *  The options currently understood are:
 *
 *  - root (Boolean): wether or not the root node should be included in the
 *    output, or just its children. The default `false` is to not include the
 *    root itself.
 */
expose.renderJsonML = function( jsonml, options ) {
  options = options || {};
  // include the root element in the rendered output?
  options.root = options.root || false;

  var content = [];

  if ( options.root ) {
    content.push( render_tree( jsonml ) );
  }
  else {
    jsonml.shift(); // get rid of the tag
    if ( jsonml.length && typeof jsonml[ 0 ] === "object" && !( jsonml[ 0 ] instanceof Array ) ) {
      jsonml.shift(); // get rid of the attributes
    }

    while ( jsonml.length ) {
      content.push( render_tree( jsonml.shift() ) );
    }
  }

  return content.join( "\n\n" );
};

function escapeHTML( text ) {
  return text.replace( /&/g, "&amp;" )
             .replace( /</g, "&lt;" )
             .replace( />/g, "&gt;" )
             .replace( /"/g, "&quot;" )
             .replace( /'/g, "&#39;" );
}

function render_tree( jsonml ) {
  // basic case
  if ( typeof jsonml === "string" ) {
    return escapeHTML( jsonml );
  }

  var tag = jsonml.shift(),
      attributes = {},
      content = [];

  if ( jsonml.length && typeof jsonml[ 0 ] === "object" && !( jsonml[ 0 ] instanceof Array ) ) {
    attributes = jsonml.shift();
  }

  while ( jsonml.length ) {
    content.push( render_tree( jsonml.shift() ) );
  }

  var tag_attrs = "";
  for ( var a in attributes ) {
    tag_attrs += " " + a + '="' + escapeHTML( attributes[ a ] ) + '"';
  }

  // be careful about adding whitespace here for inline elements
  if ( tag == "img" || tag == "br" || tag == "hr" ) {
    return "<"+ tag + tag_attrs + "/>";
  }
  else {
    return "<"+ tag + tag_attrs + ">" + content.join( "" ) + "</" + tag + ">";
  }
}

function convert_tree_to_html( tree, references, options ) {
  var i;
  options = options || {};

  // shallow clone
  var jsonml = tree.slice( 0 );

  if ( typeof options.preprocessTreeNode === "function" ) {
      jsonml = options.preprocessTreeNode(jsonml, references);
  }

  // Clone attributes if they exist
  var attrs = extract_attr( jsonml );
  if ( attrs ) {
    jsonml[ 1 ] = {};
    for ( i in attrs ) {
      jsonml[ 1 ][ i ] = attrs[ i ];
    }
    attrs = jsonml[ 1 ];
  }

  // basic case
  if ( typeof jsonml === "string" ) {
    return jsonml;
  }

  // convert this node
  switch ( jsonml[ 0 ] ) {
    case "header":
      jsonml[ 0 ] = "h" + jsonml[ 1 ].level;
      delete jsonml[ 1 ].level;
      break;
    case "bulletlist":
      jsonml[ 0 ] = "ul";
      break;
    case "numberlist":
      jsonml[ 0 ] = "ol";
      break;
    case "listitem":
      jsonml[ 0 ] = "li";
      break;
    case "para":
      jsonml[ 0 ] = "p";
      break;
    case "markdown":
      jsonml[ 0 ] = "html";
      if ( attrs ) delete attrs.references;
      break;
    case "code_block":
      jsonml[ 0 ] = "pre";
      i = attrs ? 2 : 1;
      var code = [ "code" ];
      code.push.apply( code, jsonml.splice( i, jsonml.length - i ) );
      jsonml[ i ] = code;
      break;
    case "inlinecode":
      jsonml[ 0 ] = "code";
      break;
    case "img":
      jsonml[ 1 ].src = jsonml[ 1 ].href;
      delete jsonml[ 1 ].href;
      break;
    case "linebreak":
      jsonml[ 0 ] = "br";
    break;
    case "link":
      jsonml[ 0 ] = "a";
      break;
    case "link_ref":
      jsonml[ 0 ] = "a";

      // grab this ref and clean up the attribute node
      var ref = references[ attrs.ref ];

      // if the reference exists, make the link
      if ( ref ) {
        delete attrs.ref;

        // add in the href and title, if present
        attrs.href = ref.href;
        if ( ref.title ) {
          attrs.title = ref.title;
        }

        // get rid of the unneeded original text
        delete attrs.original;
      }
      // the reference doesn't exist, so revert to plain text
      else {
        return attrs.original;
      }
      break;
    case "img_ref":
      jsonml[ 0 ] = "img";

      // grab this ref and clean up the attribute node
      var ref = references[ attrs.ref ];

      // if the reference exists, make the link
      if ( ref ) {
        delete attrs.ref;

        // add in the href and title, if present
        attrs.src = ref.href;
        if ( ref.title ) {
          attrs.title = ref.title;
        }

        // get rid of the unneeded original text
        delete attrs.original;
      }
      // the reference doesn't exist, so revert to plain text
      else {
        return attrs.original;
      }
      break;
  }

  // convert all the children
  i = 1;

  // deal with the attribute node, if it exists
  if ( attrs ) {
    // if there are keys, skip over it
    for ( var key in jsonml[ 1 ] ) {
        i = 2;
        break;
    }
    // if there aren't, remove it
    if ( i === 1 ) {
      jsonml.splice( i, 1 );
    }
  }

  for ( ; i < jsonml.length; ++i ) {
    jsonml[ i ] = convert_tree_to_html( jsonml[ i ], references, options );
  }

  return jsonml;
}


// merges adjacent text nodes into a single node
function merge_text_nodes( jsonml ) {
  // skip the tag name and attribute hash
  var i = extract_attr( jsonml ) ? 2 : 1;

  while ( i < jsonml.length ) {
    // if it's a string check the next item too
    if ( typeof jsonml[ i ] === "string" ) {
      if ( i + 1 < jsonml.length && typeof jsonml[ i + 1 ] === "string" ) {
        // merge the second string into the first and remove it
        jsonml[ i ] += jsonml.splice( i + 1, 1 )[ 0 ];
      }
      else {
        ++i;
      }
    }
    // if it's not a string recurse
    else {
      merge_text_nodes( jsonml[ i ] );
      ++i;
    }
  }
}

} )( (function() {
  {
    return exports;
  }
} )() );
});

var lib = createCommonjsModule(function (module, exports) {
// super simple module for the most common nodejs use case.
exports.markdown = markdown;
exports.parse = exports.markdown.toHTML;
});
var lib_1 = lib.markdown;

const sAbdullakhAppBlogCss = ".head_blog_section{font-weight:500}.title_blog_section{margin-top:20px}.title_blog_section h1{font-weight:900}.author{padding:20px 0}.author h3{padding-top:20px;font-size:1rem;font-weight:bold;margin-bottom:0}.author p{font-size:1rem;color:#9b9b9b}.blog_posts_img{max-width:960px;margin:auto;background-image:url(\"https://via.placeholder.com/960x500?text=Text\");background-size:cover;background-position:center;height:500px}.blog_content{max-width:760px;margin:auto;font-weight:500}.social_links_themeTwo{position:absolute;right:0}.social_link_themeTwo{width:40px;height:40px;border-radius:50%;background-color:#eeeeee;line-height:40px;text-align:center;cursor:pointer;margin-bottom:20px}.blog-wibbitz-report{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:4.375rem;margin-bottom:4.375rem;position:relative}.text{color:#fff}.blog-wibbitz-report{height:410px}.blog-wibbitz-report>div{position:relative;z-index:2}.blog-wibbitz-report:before{content:\"\";display:block;background-color:#000;position:absolute;margin:auto;top:20px;left:0;right:-50px;bottom:20px;border-top-right-radius:6px;border-bottom-right-radius:6px}.blog-wibbitz-report:after{content:\"\";display:block;width:21vw;border-radius:10px 0 0 10px;background-color:#000;position:absolute;margin:auto;top:20px;left:0;bottom:20px;-webkit-transform:translateX(-99%);-ms-transform:translateX(-99%);transform:translateX(-99%)}.blog-wibbitz-report .text h4{color:#fff;max-width:284px}.blog-wibbitz-report .text p{max-width:300px;font-weight:400;font-size:17px;line-height:1.6}.blog-wibbitz-report .image{background-size:cover;background-position:center;width:330px;height:420px;margin-right:10px;border-radius:10px}.img_one{background-image:url(\"https://via.placeholder.com/201x180?text=Text\")}.img_two{background-image:url(\"https://via.placeholder.com/680x360?text=Picture\")}.img_three{background-image:url(\"https://via.placeholder.com/680x360?text=Picture\")}.img_four{background-image:url(\"https://via.placeholder.com/680x360?text=Picture\")}.img_five{background-image:url(\"https://via.placeholder.com/680x360?text=Picture\")}.blog_content p{margin-top:2rem;margin-bottom:2rem}.content_heading{margin:40px 0}.citate{border-left:3px solid black;padding-left:49px;text-align:justify}.two_glava{background-size:cover;background-position:center;width:100%;height:400px}.border-radius{border-radius:10px}.social_contact{text-align:center}.author_block{display:-ms-flexbox;display:flex}.author_img{display:inline-block;width:100px;height:100px;background-image:url(\"https://via.placeholder.com/104x104?text=Picture\");background-size:cover;background-position:center;border-radius:50%}.author_name_work{padding-left:20px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-item-align:center;align-self:center}.author_name{font-size:19px;font-weight:600}.social_link{display:inline-block;width:40px;height:40px;margin:0 0.7rem;border-radius:50%;background-color:#eeeeee;line-height:40px;text-align:center;cursor:pointer}.social_link a{color:#9b9b9b;font-size:18px}.social_contact_text{display:inline-block}.social_contact_icons{display:inline-block}.content_video{max-width:100%}@media (min-width: 576px){.head_blog_section{max-width:680px;margin:auto}}@media (max-width: 576px){.blog_posts_img{height:300px}}@media (max-width: 768px){.blog_posts_img{height:350px}.image{display:none}}@media (max-width: 992px){.blog_posts_img{height:400px}.social_contact{padding:60px 0;text-align:right !important}.book_prewiev_container{max-width:1140px}}";

const SAbdullakhAppBlog = class {
    constructor(hostRef) {
        Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        const text = this.p.map((item) => {
            return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { innerHTML: lib_1.toHTML(item.text) }));
        });
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", { class: "container" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "head_blog_section text-center mt-5" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "category" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "trends_categoty" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, "Trends & Insights"))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "title_blog_section" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h1", null, "6 ways for financeial & legal marketers to differebtiate their firm through video"), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "author" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, "Erik Mathes"), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "Oct 15, 2019")))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "blog_posts" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "foreword_heading" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "blog_posts_img mb-5" }), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "blog_content" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "social_links_themeTwo" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "social_link_themeTwo" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fa fa-facebook-official", "aria-hidden": "true" }))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "social_link_themeTwo" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fa fa-twitter-square", "aria-hidden": "true" }))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "social_link_themeTwo " }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fab fa-invision" }))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "social_link_themeTwo " }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fa fa-instagram", "aria-hidden": "true" })))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, text), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde vel vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente."), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde vel vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente."), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum."), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "blog-wibbitz-report" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "text" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h4", null, "Ready to continue your video marketing journey?"), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "Explore our latest report for all the best practices & inights you`ll need to eaisily navigate the video marketing landscape"), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "pt-3" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "btn book_prewiev_btn" }, "Explore Report"))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "image img_one" })), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content_heading" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, "1. Humanize your firm by showing causes you support")), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde vel vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente."), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde vel vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente."), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("iframe", { class: "content_video border-radius", src: "https://player.vimeo.com/video/345554603?dnt=1&app_id=122963", width: "900", height: "400" })), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content_heading" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde vel vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente.")), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "bd-example" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { id: "carouselExampleIndicators", class: "carousel slide", "data-ride": "carousel" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ol", { class: "carousel-indicators" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { "data-target": "#carouselExampleIndicators", "data-slide-to": "0", class: "active" }), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { "data-target": "#carouselExampleIndicators", "data-slide-to": "1", class: "" }), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { "data-target": "#carouselExampleIndicators", "data-slide-to": "2", class: "" })), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "carousel-inner border-radius" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "carousel-item active" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { class: "bd-placeholder-img bd-placeholder-img-lg d-block w-100", width: "800", height: "400", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid slice", focusable: "false", role: "img", "aria-label": "Placeholder: First slide" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("title", null, "Placeholder"), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("rect", { fill: "#777", width: "100%", height: "100%" }), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("text", { fill: "#555", dy: ".3em", x: "50%", y: "50%" }, "First slide"))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "carousel-item" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { class: "bd-placeholder-img bd-placeholder-img-lg d-block w-100", width: "800", height: "400", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid slice", focusable: "false", role: "img", "aria-label": "Placeholder: Second slide" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("title", null, "Placeholder"), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("rect", { fill: "#666", width: "100%", height: "100%" }), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("text", { fill: "#444", dy: ".3em", x: "50%", y: "50%" }, "Second slide"))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "carousel-item" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { class: "bd-placeholder-img bd-placeholder-img-lg d-block w-100", width: "800", height: "400", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid slice", focusable: "false", role: "img", "aria-label": "Placeholder: Third slide" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("title", null, "Placeholder"), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("rect", { fill: "#555", width: "100%", height: "100%" }), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("text", { fill: "#333", dy: ".3em", x: "50%", y: "50%" }, "Third slide")))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { class: "carousel-control-prev", href: "#carouselExampleIndicators", role: "button", "data-slide": "prev" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "carousel-control-prev-icon", "aria-hidden": "true" }), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "sr-only" }, "Previous")), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { class: "carousel-control-next", href: "#carouselExampleIndicators", role: "button", "data-slide": "next" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "carousel-control-next-icon", "aria-hidden": "true" }), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "sr-only" }, "Next")))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content_heading" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, "2. Recruit new talent to your team")), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde vel vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente."), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "citate" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde vel vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente.\"")), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content_heading" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "two_glava img_two border-radius" })), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content_heading" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, "3. Provide valuable information to ear viewer,s trust")), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde vel vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente."), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde vel vero!"), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("iframe", { class: "content_video border-radius", src: "https://player.vimeo.com/video/345554603?dnt=1&app_id=122963", width: "900", height: "400" })), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content_heading" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, "4. Showcase your firm`s best pro bono work")), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde vel vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde vel vero!"), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content_heading" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "two_glava img_three border-radius" })), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content_heading" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, "5. Announce and promote events your firm is hosting")), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde vel vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente."), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente"), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente"), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content_heading" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("iframe", { class: "content_video border-radius", src: "https://player.vimeo.com/video/345554603?dnt=1&app_id=122963", width: "900", height: "400" }))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content_heading" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, "6. Highlight your form`s accolades and stats")), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde vel vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente."), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde vel vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit."), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content_heading" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "two_glava img_four border-radius" })), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consectetur dignissimos doloribus earum, error esse impedit iusto laboriosam laborum nesciunt odit pariatur quod sapiente totam ullam unde vel vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit."), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "author_info" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row subscribe py-5" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-6 col-12" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "author_block" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "author_img" }), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "author_name_work" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "author_name" }, "Erik Mathers"), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "author_work" }, "Content Marketing Strategist")))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-6 col-12 align-self-center" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "social_contact" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "social_contact_text" }, "Follow me on:"), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "social_contact_icons" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "social_links" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "social_link" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fa fa-facebook-official", "aria-hidden": "true" }))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "social_link" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fab fa-invision" }))))))))))))));
    }
};
SAbdullakhAppBlog.style = sAbdullakhAppBlogCss;

const sAbdullakhEventsCss = "header .container{max-width:1200px}.titles_events{margin-top:70px}.widget_content{margin:18px 0 10px 0}.new_single_post_widget_title{font-weight:bold;font-size:20px}";

const SAbdullakhEvents = class {
    constructor(hostRef) {
        Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnEvents = Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnEvents", 7);
        this.clickOnNewSinglePost = Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnNewSinglePost", 7);
    }
    render() {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "titles", onClick: () => this.clickOnEvents.emit(this.eventsTitle) }, this.eventsTitle)), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])(NewSinglePost, { arr: this.events })))));
    }
};
/*
* компонентная функция для вывода элементов news-main-block
 */
const NewSinglePost = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-new-single-post", { arr: item })));
    });
};
SAbdullakhEvents.style = sAbdullakhEventsCss;

const sAbdullakhFooterCss = ".footer{height:424px}.footer_margin{padding-top:95px}.corp_info{font-weight:500;font-size:20px;padding:0 20px 0 0}.corp_address{margin-top:30px}.social_link{display:inline-block;width:40px;height:40px;border-radius:50%;background-color:#eeeeee;line-height:40px;text-align:center}.social_link a{color:#9b9b9b;font-size:18px;-webkit-transition:0.5s;transition:0.5s}.social_link a:hover{color:#0056fb}.title_links{font-weight:600}.footer_links{margin-top:15px}.footer_link{display:block;padding-bottom:15px;font-weight:400;font-size:14px}.footer_link a{text-decoration:none;color:black;font-weight:500}.footer_link a:hover{color:#2590a5}.footer_newsletter{margin-top:30px}.footer_newsletter_title{font-weight:500;padding-bottom:24px}.newsletter_input_footer{width:210px;height:52px}.newsletter_btn_footer{background-color:#2dca73;color:white;width:60px;height:52px;font-size:27px}.newsletter_btn_footer:hover{background-color:#28a745}.copyright{margin-top:60px}.copyright_content_left{float:right}.copyright_content_languages{font-weight:700;font-size:18px}.language_icon{font-size:22px;color:#9c9c9c}.content_language{padding-top:10px;font-weight:500}.content_language span a{color:black;text-decoration:none}";

const SAbdullakhFooter = class {
    constructor(hostRef) {
        Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnFooter = Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnFooter", 7);
    }
    render() {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("footer", { class: "container-fluid footer" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row footer_margin" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])(FooterIconBlock, { arr: this.footer }), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])(FooterItemBlocks, { arr: this.footer })), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "copyright" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row copyright_content" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "copyright_content_languages" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "language_icon pr-2" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-globe-americas" })), "Choose language"), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content_language" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "pr-4" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", null, "English(United States)")), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", null, "French")))))))));
    }
};
/*
* компонентная функция для вывода элементов footer2
 */
const FooterItemBlocks = (props) => {
    return props.arr.slice(1, 5).map((item) => {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-2 col-sm-4" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-footer-menu", { arr: item })));
    });
};
/*
* компонентная функция для вывода элементов footer2
 */
const FooterIconBlock = (props) => {
    return props.arr.slice(0, 1).map((item) => {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-4 col-sm-4" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-footer-icon-block", { arr: item })));
    });
};
SAbdullakhFooter.style = sAbdullakhFooterCss;

const sAbdullakhFooterIconBlockCss = "";

const SAbdullakhFooterIconBlock = class {
    constructor(hostRef) {
        Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnFooter = Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnFooter", 7);
    }
    render() {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])(FooterTitle, { arr: this.arr }));
    }
};
/*
* компонентная функция для вывода элементов footer2
 */
const FooterTitle = (props) => {
    return props.arr.slice(0, 1).map((item) => {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "corp_info", onClick: () => undefined.clickOnFooter.emit(event) }, item.firstBlockTitle), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "social_links mt-4" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-footer-icons", { arr: item }))));
    });
};
SAbdullakhFooterIconBlock.style = sAbdullakhFooterIconBlockCss;

const sAbdullakhFooterIconsCss = "";

const SAbdullakhFooterIcons = class {
    constructor(hostRef) {
        Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnFooter = Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnFooter", 7);
    }
    render() {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])(FooterIcon, { arr: this.arr.icons }));
    }
};
/*
* компонентная функция для вывода элементов footer2
 */
const FooterIcon = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "social_link mr-3" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: iconClass(item.name), "aria-hidden": "true" }))));
    });
};
/**
 * функция для присваивания классов блокам footer-menu
 * */
function iconClass(x) {
    switch (x) {
        case 'facebook':
            return 'fa fa-facebook-official';
        case 'twitter':
            return 'fa fa-twitter-square';
        case 'invision':
            return 'fab fa-invision';
        case 'instagram':
            return 'fa fa-instagram';
    }
}
SAbdullakhFooterIcons.style = sAbdullakhFooterIconsCss;

const sAbdullakhFooterLinksCss = "";

const SAbdullakhFooterLinks = class {
    constructor(hostRef) {
        Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])(FootLink, { arr: this.arr.items }));
    }
};
/*
* компонентная функция для вывода элементов меню
 **/
const FootLink = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "footer_link" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "" }, item.linkName)));
    });
};
SAbdullakhFooterLinks.style = sAbdullakhFooterLinksCss;

const sAbdullakhFooterMenuCss = "";

const SAbdullakhFooterMenu = class {
    constructor(hostRef) {
        Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])(FooterMenu, { arr: this.arr }));
    }
};
/*
* компонентная функция для вывода элементов footer2
 */
const FooterMenu = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "title_links" }, item.title, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-footer-links", { arr: item })));
    });
};
SAbdullakhFooterMenu.style = sAbdullakhFooterMenuCss;

const sAbdullakhHeaderCss = ".container{max-width:1024px;margin:auto}.container_update{max-width:1200px;margin:auto}.main__menu{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:30px 0;width:100%}.header_menu{text-align:center}.logo{width:150px;background-size:cover;background-position:center}.topnav a{color:black;text-align:center;padding:12px 16px;font-weight:500}.icon{display:none}@media (max-width: 1010px){#none{display:none}#block{display:block}.topnav span{display:block;margin-bottom:10px}.icon{float:right;margin-top:-17px;display:block;color:black;font-size:25px;width:100%;text-align:end}nav{width:100%}.topnav.responsive{float:right}header .topnav.responsive{height:340px}.topnav.responsive a{float:none;display:block;text-align:left}.toggleTheme{display:inline-block}}.header_subscribe_input{border-radius:8px;border:2px solid lightgray;padding:0 12px;height:45px;width:227px}.header_btn{background-color:#0056fb;border-radius:9px;color:white;margin-left:-20px;border:2px solid #0056fb;padding:12px;height:45px;width:125px;font-size:14px}.header_search_block{display:inline-block}.header_subscribe_block{float:right}@media (max-width: 1200px){nav{float:right}}";

const SAbdullakhHeader = class {
    constructor(hostRef) {
        Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * массив меню
         * */
        this.menu = [];
        this.clickOnTheme = Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnTheme", 7);
        this.clickOnHeader = Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnHeader", 7);
        this.clickOnSwitchTheme = Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnSwitchTheme", 7);
    }
    render() {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("header", { class: "container-fluid" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container_update" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row main__menu" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-auto" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "logo", style: { backgroundImage: "url(" + this.logoUrl + ")" }, onClick: () => this.clickOnHeader.emit(this.logoUrl) }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { class: "navbar-brand" }))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("nav", null, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { class: "icon", ref: (el) => this.navOpenTag = el, onClick: () => this.toggleMobileMenu() }, "\u2630"), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "topnav", id: "none", ref: (el) => this.navMenuTag = el }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ItemLink, { arr: this.menu }), this.theme ?
            Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { id: "theme_1", onClick: () => {
                    this.clickOnTheme.emit();
                    this.clickOnSwitchTheme.emit(event);
                } }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-toggle-off pl-1" }), "theme_1") :
            Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { id: "theme_2", onClick: () => {
                    this.clickOnTheme.emit();
                    this.clickOnSwitchTheme.emit(event);
                } }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-toggle-on pl-1" }), "theme_2")))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-auto d-none d-xl-block" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header_search_block", onClick: () => this.clickOnHeader.emit(event) }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#", class: "nav-link" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "material-icons" }, "search"))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header_subscribe_block" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-group" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "email", placeholder: "Enter work email", class: "header_subscribe_input", onClick: () => this.clickOnHeader.emit(event) }), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-group-append" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "header_btn", onClick: () => {
                this.clickOnHeader.emit(this.subscribeText);
            } }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.subscribeText))))))))));
    }
    /**
     * меню для мобильного меню
     * */
    toggleMobileMenu() {
        if (this.navMenuTag.id === "none") {
            this.navMenuTag.id = 'block';
        }
        else {
            this.navMenuTag.id = 'none';
        }
    }
};
/*
* компонентная функция для вывода элементов меню
 */
const ItemLink = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-menu-item", { arr: item }));
    });
};
SAbdullakhHeader.style = sAbdullakhHeaderCss;

const sAbdullakhListinerCss = "";

const SAbdullakhListiner = class {
    constructor(hostRef) {
        Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnListiner = Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnListiner", 7);
    }
    render() {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container_update  newlistiner_section" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row subscribe p-5" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-6 d-none d-lg-block" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "newlistener_title", onClick: () => this.clickOnListiner.emit(this.arr.title) }, this.arr.title), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "newlistiner_subtitle", onClick: () => this.clickOnListiner.emit(this.arr.subtitle) }, this.arr.subtitle, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { onClick: () => this.clickOnListiner.emit(this.arr.linkText) }, this.arr.linkText))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-6 col-12 px-5" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "newlistiner_form_email" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", { class: "form" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-group" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", placeholder: "Enter work email", class: "form-control rounded ", onClick: () => this.clickOnListiner.emit(event) }), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-group-append" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "submit", class: "my_btn btn_newlistener", onClick: () => this.clickOnListiner.emit(this.arr.btnText) }, this.arr.btnText)))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "d-none", onClick: () => this.clickOnListiner.emit(event) }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-bolt" }), " 6145 people"), " are reading this newsletter every week"))))));
    }
};
SAbdullakhListiner.style = sAbdullakhListinerCss;

const sAbdullakhMenuItemCss = "/*!*nav*!*//*!*nav*!*//*!**************************!*/";

const SAbdullakhMenuItem = class {
    constructor(hostRef) {
        Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnHeader = Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnHeader", 7);
    }
    render() {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { onClick: () => this.clickOnHeader.emit(this.arr) }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", null, this.arr.linkName)));
    }
};
SAbdullakhMenuItem.style = sAbdullakhMenuItemCss;

const sAbdullakhNewListinerCss = ".newlistiner_section{background-color:black;height:370px;border-radius:5px;margin-top:50px!important;color:white!important}.subscribe{height:100%;-ms-flex-align:center;align-items:center}.newlistener_title{font-weight:600;font-size:56px;line-height:1.2}.newlistiner_subtitle{padding-right:98px;padding-top:10px;font-size:18px;color:#959595d4}.newlistiner_subtitle a{color:#959595d4!important;border-bottom:1px solid #959595d4}.form-control{background-color:hsla(0,0%,100%,0)!important;height:60px!important;padding-left:40px!important;outline:none;color:white!important}.btn_newlistener{background-color:#0055fc!important;border-radius:10px!important;color:white!important;font-weight:500!important;width:140px;position:relative;right:15px}.newlistiner_subtitle_input{font-size:15px;padding-top:25px;color:#a8a8a8}.newlistiner_subtitle_input span{color:#fff}.newlistiner_input{border:0;border-bottom:1px solid gray}.newlistiner_title_padding{padding-right:40px}@media (max-width: 576px){.btn_newlistener{width:100px}}";

const SAbdullakhNewListiner = class {
    constructor(hostRef) {
        Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnListiner = Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnListiner", 7);
    }
    render() {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", { class: "container-fluid" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Listiner, { arr: this.newlistner })));
    }
};
/*
* компонентная функция для вывода элементов listiner
 */
const Listiner = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-listiner", { arr: item }));
    });
};
SAbdullakhNewListiner.style = sAbdullakhNewListinerCss;

const sAbdullakhNewPostCss = ".titles_new_post{margin:60px 0 40px 0}";

const SAbdullakhNewPost = class {
    constructor(hostRef) {
        Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickNewPost = Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickNewPost", 7);
        this.clickOnNewSinglePost = Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnNewSinglePost", 7);
    }
    render() {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", { class: "container" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "titles titles_new_post", onClick: () => this.clickNewPost.emit(this.newPostTitle) }, this.newPostTitle)), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])(NewSinglePost$1, { arr: this.newPost })))));
    }
};
/*
* компонентная функция для вывода элементов news-main-block
 */
const NewSinglePost$1 = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-4 col-12" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-new-single-post", { arr: item })));
    });
};
SAbdullakhNewPost.style = sAbdullakhNewPostCss;

const sAbdullakhNewSinglePostCss = ".widget_photo_single_page{height:285px;width:100%;background-size:cover;background-position:center}.widget_content{margin:18px 0 10px 0}.widget_read_toggle{margin-top:15px}.widget_read_toggle a:hover{color:#0056fb}.new_single_post_widget_title{font-weight:bold;font-size:20px}@media (max-width: 992px){.widget_margin{margin-top:40px}}";

const SAbdullakhNewSinglePost = class {
    constructor(hostRef) {
        Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnNewSinglePost = Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnNewSinglePost", 7);
    }
    render() {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "widget_photo_single_page widget_margin", style: { backgroundImage: "url(" + this.arr.img + ")" }, onClick: () => this.clickOnNewSinglePost.emit(this.arr.img) })), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "widget_content" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "category_blog", onClick: () => this.clickOnNewSinglePost.emit(this.arr.category) }, this.arr.category)))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "widget_content_title new_single_post_widget_title", onClick: () => this.clickOnNewSinglePost.emit(this.arr.title) }, this.arr.title))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12 align-self-end" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "widget_read_toggle" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { onClick: () => this.clickOnNewSinglePost.emit(this.arr.btnText) }, this.arr.btnText))))))));
    }
};
SAbdullakhNewSinglePost.style = sAbdullakhNewSinglePostCss;

const sAbdullakhNewsCss = ".news{margin:auto;margin-top:30px}.main_img img{width:100%;border-radius:5px}.main_img{margin-bottom:20px;width:100%;height:375px;background-size:cover}.news_section_title_block{margin-top:15px;font-weight:bold;font-size:2rem}.news_section_subtitle_block{font-weight:400;font-size:17px;color:#9c9c9c;margin:15px 0}.new_section_btn{background-color:#0655fa!important;width:140px;height:55px;border-radius:10px!important;font-weight:500;color:white!important}";

const SAbdullakhNews = class {
    constructor(hostRef) {
        Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnNews = Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnNews", 7);
    }
    render() {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row news" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-7 col-12" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "main_img", style: { backgroundImage: "url(" + this.newsImg + ")" }, onClick: () => this.clickOnNews.emit(this.newsImg) }), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])(NewsMainBlock, { arr: this.news })), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-5 col-12 mt-lg-0 mt-5" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("aside", { class: "news_right_widget" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Sidebar, { arr: this.sidebar })))))));
    }
};
/*
* компонентная функция для вывода элементов news-main-block
 */
const NewsMainBlock = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-news-main-block", { arr: item }));
    });
};
/*
* компонентная функция для вывода элементов s-abdullakh-sidebar
 */
const Sidebar = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-sidebar", { arr: item }));
    });
};
SAbdullakhNews.style = sAbdullakhNewsCss;

const sAbdullakhNewsMainBlockCss = ".news{margin:auto;margin-top:30px}.main_img img{width:100%;border-radius:5px}.main_img{margin-bottom:20px;width:100%;height:375px;background-size:cover}.news_section_title_block{margin-top:15px;font-weight:bold;font-size:2rem}.news_section_subtitle_block{font-weight:400;font-size:17px;color:#9c9c9c;margin:15px 0}.new_section_btn{background-color:#0655fa!important;width:140px;height:55px;border-radius:10px!important;font-weight:500;color:white!important}";

const SAbdullakhNewsMainBlock = class {
    constructor(hostRef) {
        Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnNews = Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnNews", 7);
    }
    render() {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "category_blog", onClick: () => this.clickOnNews.emit(this.arr.category) }, this.arr.category), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "news_section_title_block", onClick: () => this.clickOnNews.emit(this.arr.title) }, this.arr.title), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "news_section_subtitle_block", onClick: () => this.clickOnNews.emit(this.arr.subtitle) }, this.arr.subtitle, "."), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "text-center text-lg-left" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "my_btn new_section_btn", onClick: () => this.clickOnNews.emit(this.arr.btnText) }, this.arr.btnText))));
    }
};
SAbdullakhNewsMainBlock.style = sAbdullakhNewsMainBlockCss;

const sAbdullakhPopularResourcesCss = ".right_section{background:-webkit-gradient(linear, right top, left top, from(rgb(68, 58, 235)), color-stop(98%, rgba(46,46,177,1)));background:linear-gradient(270deg, rgb(68, 58, 235) 0%, rgba(46,46,177,1) 98%);border-radius:7px;text-align:center;height:100%;color:white}.right_section .widget_read_toggle a{color:white;border-color:white}.resources_title{margin:40px 0;font-weight:bold;font-size:48px}.right_section_title{font-size:27px;font-weight:500;padding:0px 92px 18px 92px}";

const SAbdullakhPopularResources = class {
    constructor(hostRef) {
        Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnPopular = Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnPopular", 7);
    }
    render() {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", { class: "container mt-5" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row pt-5" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "resources_title", onClick: () => this.clickOnPopular.emit(this.popularAsideTitle) }, this.popularAsideTitle)), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-7 col-12" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12 mb-2" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])(PopularAside, { arr: this.popularAside })))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-lg-5 d-none d-lg-block", onClick: () => this.clickOnPopular.emit(this.popularBanner) }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "right_section" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row h-100" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12 align-self-center" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])(PopularBanner, { arr: this.popularBanner }))))))));
    }
};
/*
* компонентная функция для вывода элементов news-main-block
 */
const PopularAside = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12 mb-2" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-popular-resources-aside", { arr: item })));
    });
};
/*
* компонентная функция для вывода элементов news-main-block
 */
const PopularBanner = (props) => {
    return props.arr.map((item) => {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12 mb-2" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-abdullakh-popular-resources-banner", { arr: item })));
    });
};
SAbdullakhPopularResources.style = sAbdullakhPopularResourcesCss;

const sAbdullakhPopularResourcesAsideCss = ".widget_img_popular_aside{width:100%;height:180px;background-image:url(\"https://via.placeholder.com/201x180?text=Text\");background-size:cover;background-position:center}";

const SAbdullakhPopularResourcesAside = class {
    constructor(hostRef) {
        Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnPopular = Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnPopular", 7);
    }
    render() {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-md-4 col-12" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "widget_img_popular_aside", style: { backgroundImage: "url(" + this.arr.asidetImg + ")" }, onClick: () => this.clickOnPopular.emit(this.arr.asidetImg) })), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row h-100" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "widget_start" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "widget_content" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.categoryClass(this.arr.category), onClick: () => this.clickOnPopular.emit(this.arr.category) }, this.arr.category)))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "widget_center" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "widget_content_title", onClick: () => this.clickOnPopular.emit(this.arr.title) }, this.arr.title))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12 align-self-end" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "widget_end" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "widget_read_toggle" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { onClick: () => { this.clickOnPopular.emit(this.arr.btnText); } }, this.arr.btnText))))))));
    }
    categoryClass(x) {
        switch (x) {
            case 'Report':
                return 'category_report';
            case 'Blog Post':
                return 'category_blog';
            case 'Webinar':
                return 'category_webinar';
        }
    }
};
SAbdullakhPopularResourcesAside.style = sAbdullakhPopularResourcesAsideCss;

const sAbdullakhPopularResourcesBannerCss = ".right_section{background:-webkit-gradient(linear, right top, left top, from(rgb(68, 58, 235)), color-stop(98%, rgba(46,46,177,1)));background:linear-gradient(270deg, rgb(68, 58, 235) 0%, rgba(46,46,177,1) 98%);border-radius:7px;text-align:center;height:100%;color:white}.right_section .widget_read_toggle a{color:white;border-color:white}.resources_title{margin:40px 0;font-weight:bold;font-size:48px}.right_section_title{font-size:27px;font-weight:500;padding:0px 92px 18px 92px}";

const SAbdullakhPopularResourcesBanner = class {
    constructor(hostRef) {
        Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnAside = Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnAside", 7);
        this.clickOnPopular = Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnPopular", 7);
    }
    render() {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "right_section_child" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "right_section_title", onClick: () => this.clickOnPopular.emit(this.arr.title) }, this.arr.title), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "widget_read_toggle", onClick: () => this.clickOnPopular.emit(this.arr.btnText) }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", null, this.arr.btnText))));
    }
};
SAbdullakhPopularResourcesBanner.style = sAbdullakhPopularResourcesBannerCss;

const sAbdullakhSidebarCss = ".news_saidbar{margin-bottom:20px}.widget_photo{width:100%;height:180px;background-size:cover;background-position:center}.header_widget_title{margin-top:10px}.news_right_widget{display:-ms-flexbox;display:flex}.right_item_widget{-ms-flex-direction:row;flex-direction:row}";

const SAbdullakhSidebar = class {
    constructor(hostRef) {
        Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnNews = Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnNews", 7);
    }
    render() {
        return (Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row news_saidbar" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-6" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "widget_photo", style: { backgroundImage: "url(" + this.arr.widgetImg + ")" }, onClick: () => this.clickOnNews.emit(this.arr.widgetImg) })), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row h-100" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "d-flex align-items-start" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "widget_content" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.categoryClass(this.arr.category), onClick: () => this.clickOnNews.emit(this.arr.category) }, this.arr.category)))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "d-flex align-items-center" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "widget_content_title", onClick: () => this.clickOnNews.emit(this.arr.title) }, this.arr.title))), Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-12 align-self-end" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "widget_read_toggle" }, Object(_index_051815ee_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { onClick: () => this.clickOnNews.emit(this.arr.btnText) }, this.arr.btnText))))))));
    }
    /***/
    categoryClass(x) {
        switch (x) {
            case 'Report':
                return 'category_report';
            case 'Blog Post':
                return 'category_blog';
            case 'Webinar':
                return 'category_webinar';
        }
    }
};
SAbdullakhSidebar.style = sAbdullakhSidebarCss;




/***/ })

}]);
//# sourceMappingURL=stencil-my-component_20-entry-js-es2015.js.map