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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/home/index.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/home/index.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/home/index.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//
var eeui = app.requireModule('eeui');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      position: 0,
      statusBarHeight: eeui.getStatusBarHeightPx(),
      tabPages: [{
        tabName: 'friend',
        title: '推荐',
        url: '../article_list.js'
      }, {
        tabName: 'group',
        title: '热榜',
        url: '../article_list.js'
      }, {
        tabName: 'setting',
        title: '前端',
        url: '../article_list.js'
      }, {
        tabName: 'setting',
        title: '后端',
        url: '../article_list.js'
      }, {
        tabName: 'setting',
        title: '后端',
        url: '../article_list.js'
      }, {
        tabName: 'setting',
        title: '后端',
        url: '../article_list.js'
      }, {
        tabName: 'setting',
        title: '后端',
        url: '../article_list.js'
      }, {
        tabName: 'setting',
        title: '后端',
        url: '../article_list.js'
      }]
    };
  },
  methods: {
    pageSelected: function pageSelected(data) {
      this.position = data.position;
    },
    switchPage: function switchPage(index) {
      this.position = index;
      this.$refs.reflectName.setCurrentItem(this.tabPages[index].tabName);
    }
  }
});

/***/ }),

/***/ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-5b685826!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/home/index.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!/Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-5b685826!/Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/home/index.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "flex": 1
  },
  "status-bar": {
    "backgroundColor": "#ffffff"
  },
  "nav": {
    "width": "750",
    "height": "100",
    "backgroundColor": "#ffffff",
    "flexDirection": "row"
  },
  "nav-left": {
    "display": "flex",
    "flexDirection": "row",
    "flex": 1
  },
  "nav-right": {
    "display": "flex",
    "marginRight": "20",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "nav-item": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "nav-item-text": {
    "position": "relative",
    "width": "140",
    "height": "100",
    "lineHeight": "100",
    "textAlign": "center",
    "fontSize": "28",
    "color": "#333333",
    "fontWeight": "300",
    "paddingTop": 0,
    "paddingRight": 10,
    "paddingBottom": 0,
    "paddingLeft": 10
  },
  "nav-item-text-active": {
    "position": "relative",
    "width": "140",
    "height": "100",
    "lineHeight": "100",
    "textAlign": "center",
    "fontSize": "28",
    "color": "#000000",
    "fontWeight": "600",
    "paddingTop": 0,
    "paddingRight": 10,
    "paddingBottom": 0,
    "paddingLeft": 10
  },
  "nav-item-active": {
    "position": "absolute",
    "left": "40",
    "bottom": 0,
    "width": "60",
    "borderRadius": "6",
    "height": "6",
    "backgroundColor": "#0b7eff"
  },
  "nav-line": {
    "height": "24",
    "width": "1",
    "backgroundColor": "#ffffff"
  },
  "tabbar": {
    "flex": 1,
    "width": "750"
  }
}

/***/ }),

/***/ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-5b685826!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/home/index.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-5b685826!/Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/home/index.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('div', {
    staticClass: ["status-bar"],
    style: {
      height: _vm.statusBarHeight + 'px'
    }
  }), _c('div', {
    staticClass: ["nav"]
  }, [_c('scroller', {
    staticClass: ["nav-left"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, [_vm._l((_vm.tabPages), function(item, index) {
    return [_c('div', {
      key: index,
      staticClass: ["nav-item"]
    }, [_c('text', {
      class: [index === _vm.position ? 'nav-item-text-active' : 'nav-item-text'],
      on: {
        "click": function($event) {
          _vm.switchPage(index)
        }
      }
    }, [_vm._v(_vm._s(item.title))]), (index === _vm.position) ? _c('div', {
      staticClass: ["nav-item-active"]
    }) : _vm._e()]), (index < _vm.tabPages.length - 1) ? _c('text', {
      key: index,
      staticClass: ["nav-line"]
    }) : _vm._e()]
  })], 2), _c('div', {
    staticClass: ["nav-right"]
  }, [_c('icon', {
    staticStyle: {
      width: "50px",
      height: "50px"
    },
    attrs: {
      "eeui": {
        content: 'md-apps',
        fontSize: '60px',
        color: '#333'
      }
    }
  })], 1)]), _c('tabbar', {
    ref: "reflectName",
    staticClass: ["tabbar"],
    attrs: {
      "eeui": {
        tabType: 'top',
        tabHeight: 0
      },
      "tabPages": _vm.tabPages
    },
    on: {
      "pageSelected": _vm.pageSelected
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./src/pages/home/index.vue?entry=true":
/*!*********************************************!*\
  !*** ./src/pages/home/index.vue?entry=true ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-5b685826!../../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-5b685826!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/home/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/home/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-5b685826!../../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-5b685826!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/home/index.vue")
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
__vue_options__.__file = "/Users/dajiaman/cross-platform/weex-juejin/src/pages/home/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5b685826"
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