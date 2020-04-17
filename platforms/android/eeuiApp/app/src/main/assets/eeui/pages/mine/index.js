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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/mine/index.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/mine/index.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/mine/index.vue ***!
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
var eeui = app.requireModule('eeui');
var items = [{
  icon: 'md-notifications',
  title: "消息中心",
  color: "#0b7eff"
}, {
  icon: 'md-thumbs-up',
  title: "我赞过的",
  color: "#6cbd45"
}, {
  icon: 'md-star',
  title: "收藏集",
  color: "#fec401"
}, {
  icon: 'tb-goods-fill',
  title: "已购小册",
  color: "#fec401"
}, {
  icon: 'md-wallet',
  title: "我的钱包",
  color: "#0b7eff"
}, {
  icon: 'ios-eye',
  title: "阅读过的文章",
  color: "#333"
}, {
  icon: 'ios-pricetag',
  title: "标签管理",
  color: "#333"
}];
var items2 = [{
  icon: 'md-settings',
  title: "设置",
  color: "#333"
}];
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      statusBarHeight: eeui.getStatusBarHeightPx(),
      components: items,
      components2: items2
    };
  },
  methods: {
    openUrl: function openUrl(url) {
      eeui.toast({
        message: "clicked"
      });
    }
  }
});

/***/ }),

/***/ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-355cc69a!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/mine/index.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!/Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-355cc69a!/Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/mine/index.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "flex": 1,
    "backgroundColor": "#e3e3e3"
  },
  "status-bar": {
    "backgroundColor": "#ffffff"
  },
  "userinfo_header": {
    "width": 750,
    "backgroundColor": "#ffffff",
    "paddingTop": 20,
    "paddingRight": 20,
    "paddingBottom": 20,
    "paddingLeft": 20,
    "display": "flex",
    "marginTop": 20,
    "marginRight": 0,
    "marginBottom": 20,
    "marginLeft": 0,
    "flexDirection": "row",
    "alignItems": "center"
  },
  "avatar": {
    "width": "128",
    "height": "128",
    "marginRight": 15
  },
  "userinfo_box": {
    "display": "flex",
    "flex": 1
  },
  "userinfo_right": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-end",
    "height": "100"
  },
  "navbar": {
    "width": "750",
    "height": "100",
    "backgroundColor": "#ffffff"
  },
  "navbar-main": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "navbar-logo": {
    "width": "36",
    "height": "36",
    "marginRight": "18"
  },
  "navbar-title": {
    "fontSize": "32",
    "color": "#000000"
  },
  "list": {
    "width": "750",
    "flex": 1
  },
  "list-title-box": {
    "flexDirection": "row",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  "list-title": {
    "flex": 1,
    "paddingTop": "32",
    "paddingRight": "24",
    "paddingBottom": "32",
    "paddingLeft": "24",
    "fontSize": "28",
    "color": "#757575",
    "backgroundColor": "#ffffff"
  },
  "list-subtitle": {
    "paddingRight": "24",
    "fontSize": "24"
  },
  "item_list": {
    "marginBottom": "30"
  },
  "list-item": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "backgroundColor": "#ffffff",
    "height": "100",
    "width": "750",
    "paddingLeft": "20",
    "paddingRight": "20",
    "borderTopWidth": "1",
    "borderTopColor": "#f2f2f2",
    "borderTopStyle": "solid"
  },
  "list-item-left": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-start",
    "height": "100",
    "flex": 1
  },
  "list-left-icon": {
    "width": "60",
    "height": "60",
    "color": "#3EB4FF"
  },
  "list-left-title": {
    "color": "#242424",
    "paddingLeft": "12",
    "width": "380",
    "fontSize": "26",
    "textOverflow": "ellipsis",
    "lines": 1
  },
  "list-left-title-history": {
    "color": "#666666",
    "paddingLeft": "12",
    "width": "660",
    "fontSize": "26",
    "textOverflow": "ellipsis",
    "lines": 2
  },
  "list-right-title": {
    "color": "#a2a2a2",
    "paddingRight": "3",
    "fontSize": "22",
    "textOverflow": "ellipsis",
    "lines": 1
  },
  "list-right-icon": {
    "fontSize": "24",
    "width": "40",
    "height": "40",
    "color": "#C9C9CE",
    "content": "'tb-right'"
  },
  "list-item-right": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-end",
    "height": "100"
  }
}

/***/ }),

/***/ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-355cc69a!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/mine/index.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-355cc69a!/Users/dajiaman/.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/mine/index.vue ***!
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
  }), _c('navbar', {
    staticClass: ["navbar"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('div', {
    staticClass: ["navbar-main"]
  }, [_c('text', {
    staticClass: ["navbar-title"]
  }, [_vm._v("我")])])])], 1), _c('scroll-view', {
    staticClass: ["list"]
  }, [_c('div', {
    staticClass: ["userinfo_header"]
  }, [_c('image', {
    staticClass: ["avatar"],
    attrs: {
      "src": "root://assets/image/avatar.png"
    }
  }), _c('div', {
    staticClass: ["userinfo_box"]
  }, [_c('div', [_vm._v("昵称")])]), _c('div', {
    staticClass: ["userinfo_right"]
  }, [_c('icon', {
    staticClass: ["list-right-icon"]
  })], 1)]), _c('div', {
    staticClass: ["item_list"]
  }, _vm._l((_vm.components), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["list-item"],
      on: {
        "click": function($event) {
          _vm.openUrl(item.url)
        }
      }
    }, [_c('div', {
      staticClass: ["list-item-left"]
    }, [_c('icon', {
      staticClass: ["list-left-icon"],
      attrs: {
        "eeui": {
          content: item.icon
        },
        "color": item.color
      }
    }), _c('text', {
      staticClass: ["list-left-title"]
    }, [_vm._v(_vm._s(item.title))])], 1), _c('div', {
      staticClass: ["list-item-right"]
    }, [_c('text', {
      staticClass: ["list-right-title"]
    }), _c('icon', {
      staticClass: ["list-right-icon"]
    })], 1)])
  })), _c('div', {
    staticClass: ["item_list"]
  }, _vm._l((_vm.components2), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["list-item"],
      on: {
        "click": function($event) {
          _vm.openUrl(item.url)
        }
      }
    }, [_c('div', {
      staticClass: ["list-item-left"]
    }, [_c('icon', {
      staticClass: ["list-left-icon"],
      attrs: {
        "eeui": {
          content: item.icon
        },
        "color": item.color
      }
    }), _c('text', {
      staticClass: ["list-left-title"]
    }, [_vm._v(_vm._s(item.title))])], 1), _c('div', {
      staticClass: ["list-item-right"]
    }, [_c('text', {
      staticClass: ["list-right-title"]
    }), _c('icon', {
      staticClass: ["list-right-icon"]
    })], 1)])
  }))])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./src/pages/mine/index.vue?entry=true":
/*!*********************************************!*\
  !*** ./src/pages/mine/index.vue?entry=true ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-355cc69a!../../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-355cc69a!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/mine/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/mine/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-355cc69a!../../../../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-355cc69a!../../.nvm/versions/node/v9.2.0/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/mine/index.vue")
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
__vue_options__.__file = "/Users/dajiaman/cross-platform/weex-juejin/src/pages/mine/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-355cc69a"
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