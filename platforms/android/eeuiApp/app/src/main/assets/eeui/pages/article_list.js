// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
if(typeof eeuiLog=="undefined"){var eeuiLog={_:function(t,e){var s=e.map(function(e){return e="[object object]"===Object.prototype.toString.call(e).toLowerCase()?JSON.stringify(e):e});if(typeof this.__m==='undefined'){this.__m=app.requireModule('debug')}this.__m.addLog(t,s)},debug:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("debug",e)},log:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("log",e)},info:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("info",e)},warn:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("warn",e)},error:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("error",e)}}}
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/article_list.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/article_card.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/article_card.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    article: {
      type: Object,
      "default": {}
    }
  }
});

/***/ }),

/***/ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/article_list.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/article_list.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_article_card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/article_card.vue */ "./src/components/article_card.vue");
/* harmony import */ var _components_article_card_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_article_card_vue__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var eeui = app.requireModule('eeui');

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      articles: [],
      refreshing: false
    };
  },
  components: {
    ArticleCard: _components_article_card_vue__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  created: function created() {
    this.getData(true);
  },
  methods: {
    onrefresh: function onrefresh() {
      var _this = this;

      this.refreshing = true;
      setTimeout(function () {
        _this.getData(true);

        _this.refreshing = false;
      }, 2000);
    },
    onpullingdown: function onpullingdown(event) {
      eeuiLog.log("dy: " + event.dy);
      eeuiLog.log("pullingDistance: " + event.pullingDistance);
      eeuiLog.log("viewHeight: " + event.viewHeight);
      eeuiLog.log("type: " + event.type);
    },
    fetch: function fetch() {
      var _this2 = this;

      eeuiLog.log('load more');
      this.$nextTick(function () {
        _this2.getData(false);
      });
    },
    getData: function getData() {
      var _this3 = this;

      var refresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      eeui.ajax({
        url: eeui.rewriteUrl('../assets/json/popular.json')
      }, function (ret) {
        if (ret) {
          if (refresh) {
            _this3.articles = ret.result.data.articleFeed.items.edges;
          } else {
            for (var i = 0; i < ret.result.data.articleFeed.items.edges.length; i++) {
              _this3.articles.push(ret.result.data.articleFeed.items.edges[i]);
            }
          }
        } else {
          eeui.alert({
            title: "温馨提示",
            message: "加载失败！"
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-1b2b8d6a!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/article_list.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!/Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-1b2b8d6a!/Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/article_list.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "width": 750,
    "flex": 1,
    "backgroundColor": "#c3c3c3"
  },
  "refresh": {
    "width": 750,
    "display": "flex",
    "MsFlexAlign": "center",
    "WebkitAlignItems": "center",
    "WebkitBoxAlign": "center",
    "alignItems": "center",
    "paddingTop": "40",
    "paddingRight": 0,
    "paddingBottom": "40",
    "paddingLeft": 0
  },
  "indicator-text": {
    "color": "#888888",
    "fontSize": "36",
    "textAlign": "center"
  },
  "indicator": {
    "marginTop": "16",
    "height": "40",
    "width": "40",
    "color": "#333333"
  }
}

/***/ }),

/***/ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-62325c49!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/article_card.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!/Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-62325c49!/Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/article_card.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "article_card": {
    "display": "flex",
    "width": 750,
    "paddingTop": 30,
    "paddingRight": 20,
    "paddingBottom": 30,
    "paddingLeft": 20,
    "backgroundColor": "#ffffff",
    "marginBottom": 10,
    "overflow": "hidden"
  },
  "card_title": {
    "fontSize": "30",
    "color": "#000000",
    "flex": 1,
    "marginBottom": 10
  },
  "card_header": {
    "marginBottom": "10",
    "display": "flex",
    "flexDirection": "row",
    "alignContent": "center",
    "alignItems": "center"
  },
  "nickname": {
    "fontSize": "22",
    "color": "#000000"
  },
  "avatar": {
    "width": "60",
    "height": "60",
    "borderRadius": 50,
    "marginRight": "10"
  },
  "card_desc": {
    "fontSize": "24",
    "textOverflow": "ellipsis",
    "flex": 1,
    "color": "#333333",
    "lines": 3
  }
}

/***/ }),

/***/ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-1b2b8d6a!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/article_list.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-1b2b8d6a!/Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/article_list.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["app"],
    on: {
      "loadmore": _vm.fetch
    }
  }, [_c('refresh', {
    staticClass: ["refresh"],
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.onrefresh,
      "pullingdown": _vm.onpullingdown
    }
  }, [_c('text', {
    staticClass: ["indicator-text"]
  }, [_vm._v("加载中 ...")]), _c('loading-indicator', {
    staticClass: ["indicator"]
  })]), _vm._l((_vm.articles), function(article, index) {
    return _c('div', {
      key: index
    }, [_c('ArticleCard', {
      attrs: {
        "article": article.node
      }
    })], 1)
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-62325c49&recyclable=true!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/article_card.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-62325c49&recyclable=true!/Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/article_card.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["article_card"]
  }, [_c('div', {
    staticClass: ["card_header"]
  }, [_c('image', {
    staticClass: ["avatar"],
    attrs: {
      "src": _vm.article.user.avatarLarge
    }
  }), _c('text', {
    staticClass: ["nickname"]
  }, [_vm._v(_vm._s(_vm.article.user.username))])]), _c('div', {
    staticClass: ["card_meta"]
  }, [_c('text', {
    staticClass: ["card_title"]
  }, [_vm._v(_vm._s(_vm.article.title))]), _c('text', {
    staticClass: ["card_desc"]
  }, [_vm._v(_vm._s(_vm.article.content))])]), _c('div', {
    staticClass: ["card_footer"]
  })])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["article_card"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    staticClass: ["card_header"]
  }, [_c('image', {
    staticClass: ["avatar"],
    attrs: {
      "src": {
        "@binding": "article.user.avatarLarge"
      }
    }
  }), _c('text', {
    staticClass: ["nickname"],
    attrs: {
      "value": {
        "@binding": "article.user.username"
      }
    }
  })]), _c('div', {
    staticClass: ["card_meta"]
  }, [_c('text', {
    staticClass: ["card_title"],
    attrs: {
      "value": {
        "@binding": "article.title"
      }
    }
  }), _c('text', {
    staticClass: ["card_desc"],
    attrs: {
      "value": {
        "@binding": "article.content"
      }
    }
  })]), _c('div', {
    staticClass: ["card_footer"]
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./src/components/article_card.vue":
/*!*****************************************!*\
  !*** ./src/components/article_card.vue ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-62325c49!../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./article_card.vue */ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-62325c49!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/article_card.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./article_card.vue */ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/article_card.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-62325c49&recyclable=true!../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./article_card.vue */ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-62325c49&recyclable=true!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/article_card.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/dajiaman/cross-platform/weex-juejin/src/components/article_card.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-62325c49"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ "./src/pages/article_list.vue?entry=true":
/*!***********************************************!*\
  !*** ./src/pages/article_list.vue?entry=true ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-1b2b8d6a!../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./article_list.vue */ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-1b2b8d6a!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/article_list.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./article_list.vue */ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/article_list.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-1b2b8d6a!../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./article_list.vue */ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-1b2b8d6a!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/article_list.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/dajiaman/cross-platform/weex-juejin/src/pages/article_list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1b2b8d6a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ })

/******/ });