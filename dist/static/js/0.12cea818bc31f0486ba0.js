webpackJsonp([0],{

/***/ "23MI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "footer",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.gotoRouter($event)
      }
    }
  }, [_c('mt-tabbar', {
    attrs: {
      "fixed": ""
    },
    model: {
      value: (_vm.selected),
      callback: function($$v) {
        _vm.selected = $$v
      },
      expression: "selected"
    }
  }, [_c('mt-tab-item', {
    attrs: {
      "id": "首页"
    }
  }, [_c('i', {
    staticClass: "icon-index",
    attrs: {
      "slot": "icon"
    },
    slot: "icon"
  }), _vm._v("\n      首页\n  ")]), _vm._v(" "), _c('mt-tab-item', {
    attrs: {
      "id": "分类页"
    }
  }, [_c('i', {
    staticClass: "icon-category",
    attrs: {
      "slot": "icon"
    },
    slot: "icon"
  }), _vm._v("\n    分类\n  ")]), _vm._v(" "), _c('mt-tab-item', {
    attrs: {
      "id": "购物车页"
    }
  }, [_c('i', {
    staticClass: "icon-car",
    attrs: {
      "slot": "icon"
    },
    slot: "icon"
  }), _vm._v("\n    购物车\n  ")]), _vm._v(" "), _c('mt-tab-item', {
    attrs: {
      "id": "用户页"
    }
  }, [_c('i', {
    staticClass: "icon-user",
    attrs: {
      "slot": "icon"
    },
    slot: "icon"
  }), _vm._v("\n    我的\n  ")])], 1)], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "2qEH":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6OVM");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("3473fe7b", content, true);

/***/ }),

/***/ "3xQF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_footer_vue__ = __webpack_require__("yecE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6ddaa55a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_footer_vue__ = __webpack_require__("23MI");
function injectStyle (ssrContext) {
  __webpack_require__("xicF")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6ddaa55a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_footer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6ddaa55a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_footer_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "4/Hu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui__ = __webpack_require__("Au9i");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mint_ui__);
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



/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      list: [],
      banner: '',
      dom: [{
        num1: '',
        num2: '',
        num3: ''
      }, {
        num1: '',
        num2: '',
        num3: ''
      }, {
        num1: '',
        num2: '',
        num3: ''
      }, {
        num1: '',
        num2: '',
        num3: ''
      }]
    };
  },
  mounted() {
    this.$api({
      url: '/index'
    }).then(response => {
      const resDatas = response.data.section3;
      this.list = resDatas.list;
      this.banner = resDatas.banner;
      // 将拿到的时间数据处理成倒计时
      let setTime = (ending, dom) => {
        let endTime = ending;
        let timeMsg = endTime.toString();
        let end = new Date(timeMsg).getTime();
        setInterval(() => {
          let now = new Date().getTime();
          let sy = parseInt((end - now) / 1000);
          let minute = parseInt(sy % 3600 / 60);
          let second = parseInt(sy % 60);

          minute < 10 ? minute = "0" + minute : minute;
          second < 10 ? second = "0" + second : second;
          let ms = (100 - Number(parseInt(now / 10).toString().substr(-2))).toString();

          if (end - now <= 0) {
            minute = '00';
            second = '00';
            ms = '00';
            dom.num2 = ms;
            return;
          }
          dom.num1 = minute;
          dom.num2 = second;
          dom.num3 = ms;
        }, 40);
      };

      for (let i of this.dom.keys()) {
        setTime(resDatas.list[i].end, this.dom[i]);
        this.list[i].dom = this.dom[i];
      }
    }).catch(error => {
      console.log(error);
    });
  }
});

/***/ }),

/***/ "47FH":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports
exports.i(__webpack_require__("OCT3"), "");

// module
exports.push([module.i, ".section3[data-v-22029ee0]{width:100%;padding-top:6vw}.section3 .section3-list[data-v-22029ee0]{width:100%;border-top-color:hsla(0,0%,73%,.14);border-top-style:solid;border-top-width:1px}[data-dpr=\"2\"] .section3 .section3-list[data-v-22029ee0],[data-dpr=\"2.5\"] .section3 .section3-list[data-v-22029ee0],[data-dpr=\"2.75\"] .section3 .section3-list[data-v-22029ee0]{border-top-width:1px}[data-dpr=\"3\"] .section3 .section3-list[data-v-22029ee0],[data-dpr=\"4\"] .section3 .section3-list[data-v-22029ee0]{border-top-width:2px}.section3 .section3-list>li[data-v-22029ee0]{display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;padding:4vw 5vw 10vw 12vw;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}.section3 .section3-list>li .section3-list-left[data-v-22029ee0]{padding-top:10vw;width:50%}.section3 .section3-list>li .section3-list-left h4[data-v-22029ee0]{font-size:17px;line-height:4.8vw;margin-bottom:3.2vw;letter-spacing:.42vw}[data-dpr=\"2\"] .section3 .section3-list>li .section3-list-left h4[data-v-22029ee0]{font-size:34px}[data-dpr=\"2.5\"] .section3 .section3-list>li .section3-list-left h4[data-v-22029ee0]{font-size:43px}[data-dpr=\"2.75\"] .section3 .section3-list>li .section3-list-left h4[data-v-22029ee0]{font-size:47px}[data-dpr=\"3\"] .section3 .section3-list>li .section3-list-left h4[data-v-22029ee0]{font-size:51px}[data-dpr=\"4\"] .section3 .section3-list>li .section3-list-left h4[data-v-22029ee0]{font-size:68px}.section3 .section3-list>li .section3-list-left .time .time-num[data-v-22029ee0]{display:inline-block;text-align:center;padding:1.6vw;color:#fff;border-radius:.5vw;background-color:#444;font-size:13px;letter-spacing:.3vw}[data-dpr=\"2\"] .section3 .section3-list>li .section3-list-left .time .time-num[data-v-22029ee0]{font-size:26px}[data-dpr=\"2.5\"] .section3 .section3-list>li .section3-list-left .time .time-num[data-v-22029ee0]{font-size:33px}[data-dpr=\"2.75\"] .section3 .section3-list>li .section3-list-left .time .time-num[data-v-22029ee0]{font-size:36px}[data-dpr=\"3\"] .section3 .section3-list>li .section3-list-left .time .time-num[data-v-22029ee0]{font-size:39px}[data-dpr=\"4\"] .section3 .section3-list>li .section3-list-left .time .time-num[data-v-22029ee0]{font-size:52px}.section3 .section3-list>li .section3-list-left .time .time-col[data-v-22029ee0]{color:#333;width:2vw;display:inline-block;text-align:center;font-weight:700;font-size:15px}[data-dpr=\"2\"] .section3 .section3-list>li .section3-list-left .time .time-col[data-v-22029ee0]{font-size:30px}[data-dpr=\"2.5\"] .section3 .section3-list>li .section3-list-left .time .time-col[data-v-22029ee0]{font-size:38px}[data-dpr=\"2.75\"] .section3 .section3-list>li .section3-list-left .time .time-col[data-v-22029ee0]{font-size:41px}[data-dpr=\"3\"] .section3 .section3-list>li .section3-list-left .time .time-col[data-v-22029ee0]{font-size:45px}[data-dpr=\"4\"] .section3 .section3-list>li .section3-list-left .time .time-col[data-v-22029ee0]{font-size:60px}.section3 .section3-list>li .section3-list-left .start[data-v-22029ee0]{font-size:15px;padding-top:4vw;letter-spacing:.3vw}[data-dpr=\"2\"] .section3 .section3-list>li .section3-list-left .start[data-v-22029ee0]{font-size:30px}[data-dpr=\"2.5\"] .section3 .section3-list>li .section3-list-left .start[data-v-22029ee0]{font-size:38px}[data-dpr=\"2.75\"] .section3 .section3-list>li .section3-list-left .start[data-v-22029ee0]{font-size:41px}[data-dpr=\"3\"] .section3 .section3-list>li .section3-list-left .start[data-v-22029ee0]{font-size:45px}[data-dpr=\"4\"] .section3 .section3-list>li .section3-list-left .start[data-v-22029ee0]{font-size:60px}.section3 .section3-list>li .section3-list-right[data-v-22029ee0]{width:50%;display:block;padding-top:10vw;position:relative}.section3 .section3-list>li .section3-list-right img[data-v-22029ee0]{display:block;width:100%;background-color:gold}.section3 .section3-list>li .section3-list-right span[data-v-22029ee0]{padding:.3vw 1.2vw;border-radius:1vw;text-align:center;position:absolute;bottom:.4vw;right:.2vw;background-color:#fa0;color:#fff;font-size:12px}[data-dpr=\"2\"] .section3 .section3-list>li .section3-list-right span[data-v-22029ee0]{font-size:24px}[data-dpr=\"2.5\"] .section3 .section3-list>li .section3-list-right span[data-v-22029ee0]{font-size:30px}[data-dpr=\"2.75\"] .section3 .section3-list>li .section3-list-right span[data-v-22029ee0]{font-size:33px}[data-dpr=\"3\"] .section3 .section3-list>li .section3-list-right span[data-v-22029ee0]{font-size:36px}[data-dpr=\"4\"] .section3 .section3-list>li .section3-list-right span[data-v-22029ee0]{font-size:48px}.section3 .section3-banner[data-v-22029ee0]{display:block;width:100%;border-bottom-color:hsla(0,0%,73%,.14);border-bottom-style:solid;border-bottom-width:1px}[data-dpr=\"2\"] .section3 .section3-banner[data-v-22029ee0],[data-dpr=\"2.5\"] .section3 .section3-banner[data-v-22029ee0],[data-dpr=\"2.75\"] .section3 .section3-banner[data-v-22029ee0]{border-bottom-width:1px}[data-dpr=\"3\"] .section3 .section3-banner[data-v-22029ee0],[data-dpr=\"4\"] .section3 .section3-banner[data-v-22029ee0]{border-bottom-width:2px}.section3 .section3-banner img[data-v-22029ee0]{display:block;width:100%}", "", {"version":3,"sources":["/Users/xiaoming/PhpstormProjects/xiaoming12138.github.io/src/components/index/section3.vue"],"names":[],"mappings":"AAEA,2BACE,WAAY,AACZ,eAAiB,CAClB,AACD,0CACE,WAAY,AACZ,oCAA4C,AAC5C,uBAAwB,AACxB,oBAAsB,CACvB,AAOD,gLACE,oBAAsB,CACvB,AAID,kHACE,oBAAsB,CACvB,AACD,6CACE,iBAAkB,AAClB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AAC3B,8BAA+B,AAC/B,sBAAuB,AACvB,UAAY,CACb,AACD,iEACE,iBAAkB,AAClB,SAAW,CACZ,AACD,oEACE,eAAgB,AAChB,kBAAmB,AACnB,oBAAqB,AACrB,oBAAuB,CACxB,AACD,mFACE,cAAgB,CACjB,AACD,qFACE,cAAgB,CACjB,AACD,sFACE,cAAgB,CACjB,AACD,mFACE,cAAgB,CACjB,AACD,mFACE,cAAgB,CACjB,AACD,iFACE,qBAAsB,AACtB,kBAAmB,AACnB,cAAe,AACf,WAAY,AACZ,mBAAqB,AACrB,sBAAuB,AACvB,eAAgB,AAChB,mBAAsB,CACvB,AACD,gGACE,cAAgB,CACjB,AACD,kGACE,cAAgB,CACjB,AACD,mGACE,cAAgB,CACjB,AACD,gGACE,cAAgB,CACjB,AACD,gGACE,cAAgB,CACjB,AACD,iFACE,WAAY,AACZ,UAAW,AACX,qBAAsB,AACtB,kBAAmB,AACnB,gBAAiB,AACjB,cAAgB,CACjB,AACD,gGACE,cAAgB,CACjB,AACD,kGACE,cAAgB,CACjB,AACD,mGACE,cAAgB,CACjB,AACD,gGACE,cAAgB,CACjB,AACD,gGACE,cAAgB,CACjB,AACD,wEACE,eAAgB,AAChB,gBAAiB,AACjB,mBAAsB,CACvB,AACD,uFACE,cAAgB,CACjB,AACD,yFACE,cAAgB,CACjB,AACD,0FACE,cAAgB,CACjB,AACD,uFACE,cAAgB,CACjB,AACD,uFACE,cAAgB,CACjB,AACD,kEACE,UAAW,AACX,cAAe,AACf,iBAAkB,AAClB,iBAAmB,CACpB,AACD,sEACE,cAAe,AACf,WAAY,AACZ,qBAAuB,CACxB,AACD,uEACE,mBAAoB,AACpB,kBAAmB,AACnB,kBAAmB,AACnB,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,sBAA0B,AAC1B,WAAY,AACZ,cAAgB,CACjB,AACD,sFACE,cAAgB,CACjB,AACD,wFACE,cAAgB,CACjB,AACD,yFACE,cAAgB,CACjB,AACD,sFACE,cAAgB,CACjB,AACD,sFACE,cAAgB,CACjB,AACD,4CACE,cAAe,AACf,WAAY,AACZ,uCAA+C,AAC/C,0BAA2B,AAC3B,uBAAyB,CAC1B,AAOD,sLACE,uBAAyB,CAC1B,AAID,sHACE,uBAAyB,CAC1B,AACD,gDACE,cAAe,AACf,UAAY,CACb","file":"section3.vue","sourcesContent":["\n@import '../../assets/index/style.css';\n.section3[data-v-22029ee0] {\n  width: 100%;\n  padding-top: 6vw;\n}\n.section3 .section3-list[data-v-22029ee0] {\n  width: 100%;\n  border-top-color: rgba(185, 185, 185, 0.14);\n  border-top-style: solid;\n  border-top-width: 1px;\n}\n[data-dpr=\"2\"] .section3 .section3-list[data-v-22029ee0] {\n  border-top-width: 1px;\n}\n[data-dpr=\"2.5\"] .section3 .section3-list[data-v-22029ee0] {\n  border-top-width: 1px;\n}\n[data-dpr=\"2.75\"] .section3 .section3-list[data-v-22029ee0] {\n  border-top-width: 1px;\n}\n[data-dpr=\"3\"] .section3 .section3-list[data-v-22029ee0] {\n  border-top-width: 2px;\n}\n[data-dpr=\"4\"] .section3 .section3-list[data-v-22029ee0] {\n  border-top-width: 2px;\n}\n.section3 .section3-list > li[data-v-22029ee0] {\n  display: -ms-flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 4vw 5vw 10vw 12vw;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 100%;\n}\n.section3 .section3-list > li .section3-list-left[data-v-22029ee0] {\n  padding-top: 10vw;\n  width: 50%;\n}\n.section3 .section3-list > li .section3-list-left h4[data-v-22029ee0] {\n  font-size: 17px;\n  line-height: 4.8vw;\n  margin-bottom: 3.2vw;\n  letter-spacing: 0.42vw;\n}\n[data-dpr=\"2\"] .section3 .section3-list > li .section3-list-left h4[data-v-22029ee0] {\n  font-size: 34px;\n}\n[data-dpr=\"2.5\"] .section3 .section3-list > li .section3-list-left h4[data-v-22029ee0] {\n  font-size: 43px;\n}\n[data-dpr=\"2.75\"] .section3 .section3-list > li .section3-list-left h4[data-v-22029ee0] {\n  font-size: 47px;\n}\n[data-dpr=\"3\"] .section3 .section3-list > li .section3-list-left h4[data-v-22029ee0] {\n  font-size: 51px;\n}\n[data-dpr=\"4\"] .section3 .section3-list > li .section3-list-left h4[data-v-22029ee0] {\n  font-size: 68px;\n}\n.section3 .section3-list > li .section3-list-left .time .time-num[data-v-22029ee0] {\n  display: inline-block;\n  text-align: center;\n  padding: 1.6vw;\n  color: #fff;\n  border-radius: 0.5vw;\n  background-color: #444;\n  font-size: 13px;\n  letter-spacing: 0.3vw;\n}\n[data-dpr=\"2\"] .section3 .section3-list > li .section3-list-left .time .time-num[data-v-22029ee0] {\n  font-size: 26px;\n}\n[data-dpr=\"2.5\"] .section3 .section3-list > li .section3-list-left .time .time-num[data-v-22029ee0] {\n  font-size: 33px;\n}\n[data-dpr=\"2.75\"] .section3 .section3-list > li .section3-list-left .time .time-num[data-v-22029ee0] {\n  font-size: 36px;\n}\n[data-dpr=\"3\"] .section3 .section3-list > li .section3-list-left .time .time-num[data-v-22029ee0] {\n  font-size: 39px;\n}\n[data-dpr=\"4\"] .section3 .section3-list > li .section3-list-left .time .time-num[data-v-22029ee0] {\n  font-size: 52px;\n}\n.section3 .section3-list > li .section3-list-left .time .time-col[data-v-22029ee0] {\n  color: #333;\n  width: 2vw;\n  display: inline-block;\n  text-align: center;\n  font-weight: 700;\n  font-size: 15px;\n}\n[data-dpr=\"2\"] .section3 .section3-list > li .section3-list-left .time .time-col[data-v-22029ee0] {\n  font-size: 30px;\n}\n[data-dpr=\"2.5\"] .section3 .section3-list > li .section3-list-left .time .time-col[data-v-22029ee0] {\n  font-size: 38px;\n}\n[data-dpr=\"2.75\"] .section3 .section3-list > li .section3-list-left .time .time-col[data-v-22029ee0] {\n  font-size: 41px;\n}\n[data-dpr=\"3\"] .section3 .section3-list > li .section3-list-left .time .time-col[data-v-22029ee0] {\n  font-size: 45px;\n}\n[data-dpr=\"4\"] .section3 .section3-list > li .section3-list-left .time .time-col[data-v-22029ee0] {\n  font-size: 60px;\n}\n.section3 .section3-list > li .section3-list-left .start[data-v-22029ee0] {\n  font-size: 15px;\n  padding-top: 4vw;\n  letter-spacing: 0.3vw;\n}\n[data-dpr=\"2\"] .section3 .section3-list > li .section3-list-left .start[data-v-22029ee0] {\n  font-size: 30px;\n}\n[data-dpr=\"2.5\"] .section3 .section3-list > li .section3-list-left .start[data-v-22029ee0] {\n  font-size: 38px;\n}\n[data-dpr=\"2.75\"] .section3 .section3-list > li .section3-list-left .start[data-v-22029ee0] {\n  font-size: 41px;\n}\n[data-dpr=\"3\"] .section3 .section3-list > li .section3-list-left .start[data-v-22029ee0] {\n  font-size: 45px;\n}\n[data-dpr=\"4\"] .section3 .section3-list > li .section3-list-left .start[data-v-22029ee0] {\n  font-size: 60px;\n}\n.section3 .section3-list > li .section3-list-right[data-v-22029ee0] {\n  width: 50%;\n  display: block;\n  padding-top: 10vw;\n  position: relative;\n}\n.section3 .section3-list > li .section3-list-right img[data-v-22029ee0] {\n  display: block;\n  width: 100%;\n  background-color: gold;\n}\n.section3 .section3-list > li .section3-list-right span[data-v-22029ee0] {\n  padding: .3vw 1.2vw;\n  border-radius: 1vw;\n  text-align: center;\n  position: absolute;\n  bottom: .4vw;\n  right: .2vw;\n  background-color: #FFAA00;\n  color: #fff;\n  font-size: 12px;\n}\n[data-dpr=\"2\"] .section3 .section3-list > li .section3-list-right span[data-v-22029ee0] {\n  font-size: 24px;\n}\n[data-dpr=\"2.5\"] .section3 .section3-list > li .section3-list-right span[data-v-22029ee0] {\n  font-size: 30px;\n}\n[data-dpr=\"2.75\"] .section3 .section3-list > li .section3-list-right span[data-v-22029ee0] {\n  font-size: 33px;\n}\n[data-dpr=\"3\"] .section3 .section3-list > li .section3-list-right span[data-v-22029ee0] {\n  font-size: 36px;\n}\n[data-dpr=\"4\"] .section3 .section3-list > li .section3-list-right span[data-v-22029ee0] {\n  font-size: 48px;\n}\n.section3 .section3-banner[data-v-22029ee0] {\n  display: block;\n  width: 100%;\n  border-bottom-color: rgba(185, 185, 185, 0.14);\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n}\n[data-dpr=\"2\"] .section3 .section3-banner[data-v-22029ee0] {\n  border-bottom-width: 1px;\n}\n[data-dpr=\"2.5\"] .section3 .section3-banner[data-v-22029ee0] {\n  border-bottom-width: 1px;\n}\n[data-dpr=\"2.75\"] .section3 .section3-banner[data-v-22029ee0] {\n  border-bottom-width: 1px;\n}\n[data-dpr=\"3\"] .section3 .section3-banner[data-v-22029ee0] {\n  border-bottom-width: 2px;\n}\n[data-dpr=\"4\"] .section3 .section3-banner[data-v-22029ee0] {\n  border-bottom-width: 2px;\n}\n.section3 .section3-banner img[data-v-22029ee0] {\n  display: block;\n  width: 100%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "4qog":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("dr5Z");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("412c6222", content, true);

/***/ }),

/***/ "5ZmS":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".index[data-v-092b1f86]{width:100%;padding-bottom:14vw;background-color:#f8fcff}", "", {"version":3,"sources":["/Users/xiaoming/PhpstormProjects/xiaoming12138.github.io/src/views/Index.vue"],"names":[],"mappings":"AACA,wBACE,WAAY,AACZ,oBAAqB,AACrB,wBAA0B,CAC3B","file":"Index.vue","sourcesContent":["\n.index[data-v-092b1f86] {\n  width: 100%;\n  padding-bottom: 14vw;\n  background-color: #F8FCFF;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "6OVM":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, "div[data-v-b24f3978]{padding:8vw 0;text-align:center;letter-spacing:.2vw;color:#9e9e9e;font-family:Lato,Microsoft Jhenghei,Hiragino Sans GB,Microsoft YaHei,sans-serif;font-weight:600;font-size:14px}", "", {"version":3,"sources":["/Users/xiaoming/PhpstormProjects/xiaoming12138.github.io/src/common/_baseline.vue"],"names":[],"mappings":"AACA,qBACE,cAAe,AACf,kBAAmB,AACnB,oBAAqB,AACrB,cAAe,AACf,gFAA2F,AAC3F,gBAAiB,AACjB,cAAgB,CACjB","file":"_baseline.vue","sourcesContent":["\ndiv[data-v-b24f3978] {\n  padding: 8vw 0;\n  text-align: center;\n  letter-spacing: .2vw;\n  color: #9e9e9e;\n  font-family: Lato, \"Microsoft Jhenghei\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "6Q/n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_baseline_vue__ = __webpack_require__("bkTF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b24f3978_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_baseline_vue__ = __webpack_require__("iydf");
function injectStyle (ssrContext) {
  __webpack_require__("2qEH")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b24f3978"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_baseline_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b24f3978_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_baseline_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "AqPR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_section2_vue__ = __webpack_require__("zfSu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_221ecde2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_section2_vue__ = __webpack_require__("q9dU");
function injectStyle (ssrContext) {
  __webpack_require__("BBaS")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-221ecde2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_section2_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_221ecde2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_section2_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "B0Co":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("O+U4");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("0d96eb0d", content, true);

/***/ }),

/***/ "BBaS":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("yiKW");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("503d8859", content, true);

/***/ }),

/***/ "CBV6":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("sBPj");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("4b7ff734", content, true);

/***/ }),

/***/ "FhYP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "section3"
  }, [_c('ul', {
    staticClass: "section3-list"
  }, _vm._l((_vm.list), function(k) {
    return _c('li', {
      key: k.id
    }, [_c('div', {
      staticClass: "section3-list-left"
    }, [_c('h4', [_vm._v(_vm._s(k.title))]), _vm._v(" "), _c('div', {
      staticClass: "time"
    }, [_c('span', {
      staticClass: "time-num"
    }, [_vm._v(_vm._s(k.dom.num1 || '00'))]), _vm._v(" "), _c('span', {
      staticClass: "time-col"
    }, [_vm._v(":")]), _vm._v(" "), _c('span', {
      staticClass: "time-num"
    }, [_vm._v(_vm._s(k.dom.num2 || '00'))]), _vm._v(" "), _c('span', {
      staticClass: "time-col"
    }, [_vm._v(":")]), _vm._v(" "), _c('span', {
      staticClass: "time-num"
    }, [_vm._v(_vm._s(k.dom.num3 || '00'))])]), _vm._v(" "), _c('p', {
      staticClass: "start"
    }, [_vm._v("Starts at " + _vm._s(k.start))])]), _vm._v(" "), _c('router-link', {
      staticClass: "section3-list-right",
      attrs: {
        "to": {
          name: '分类页'
        }
      }
    }, [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (k.imgPath),
        expression: "k.imgPath"
      }]
    }), _vm._v(" "), _c('span', [_vm._v("$" + _vm._s(k.price))])])], 1)
  })), _vm._v(" "), _c('router-link', {
    staticClass: "section3-banner",
    attrs: {
      "to": {
        name: '分类页'
      }
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: (_vm.banner),
      expression: "banner"
    }]
  })])], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "GUAI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "section4"
  }, [_vm._m(0), _vm._v(" "), _c('ul', {
    staticClass: "section4-list"
  }, _vm._l((_vm.list), function(k) {
    return _c('li', {
      key: k.id
    }, [_c('router-link', {
      attrs: {
        "to": {
          name: '详情页'
        }
      }
    }, [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (k.imgPath),
        expression: "k.imgPath"
      }]
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(k.intro))])]), _vm._v(" "), _c('h3', [_vm._v(_vm._s(k.title))]), _vm._v(" "), _c('span', [_vm._v("$ " + _vm._s(k.price))])], 1)
  })), _vm._v(" "), _c('router-link', {
    staticClass: "section4-banner",
    attrs: {
      "to": {
        name: '分类页'
      }
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: (_vm.banner),
      expression: "banner"
    }]
  })])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', {
    staticClass: "section4-title"
  }, [_vm._v("\n    section4\n    "), _c('i', {
    staticClass: "icon-right"
  })])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Ilow":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("pzFW");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("04c0f032", content, true);

/***/ }),

/***/ "J2an":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_section3_vue__ = __webpack_require__("4/Hu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_22029ee0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_section3_vue__ = __webpack_require__("FhYP");
function injectStyle (ssrContext) {
  __webpack_require__("pMl9")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-22029ee0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_section3_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_22029ee0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_section3_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "J3op":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_section4_vue__ = __webpack_require__("bzJv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_21e66fde_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_section4_vue__ = __webpack_require__("GUAI");
function injectStyle (ssrContext) {
  __webpack_require__("UALn")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-21e66fde"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_section4_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_21e66fde_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_section4_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "J9YN":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports
exports.i(__webpack_require__("OCT3"), "");

// module
exports.push([module.i, ".section4[data-v-21e66fde]{width:100%;overflow:hidden;padding-top:6vw}.section4 .section4-title[data-v-21e66fde]{border-top-color:hsla(0,0%,73%,.14);border-top-style:solid;border-top-width:1px;text-align:center;font-size:20px;padding:4vw 0;position:relative;background-color:#fff}[data-dpr=\"2\"] .section4 .section4-title[data-v-21e66fde],[data-dpr=\"2.5\"] .section4 .section4-title[data-v-21e66fde],[data-dpr=\"2.75\"] .section4 .section4-title[data-v-21e66fde]{border-top-width:1px}[data-dpr=\"3\"] .section4 .section4-title[data-v-21e66fde],[data-dpr=\"4\"] .section4 .section4-title[data-v-21e66fde]{border-top-width:2px}[data-dpr=\"2\"] .section4 .section4-title[data-v-21e66fde]{font-size:40px}[data-dpr=\"2.5\"] .section4 .section4-title[data-v-21e66fde]{font-size:50px}[data-dpr=\"2.75\"] .section4 .section4-title[data-v-21e66fde]{font-size:55px}[data-dpr=\"3\"] .section4 .section4-title[data-v-21e66fde]{font-size:60px}[data-dpr=\"4\"] .section4 .section4-title[data-v-21e66fde]{font-size:80px}.section4 .section4-title i[data-v-21e66fde]{position:absolute;right:6vw;top:50%;font-size:18px;margin-top:-8px}[data-dpr=\"2\"] .section4 .section4-title i[data-v-21e66fde]{font-size:36px}[data-dpr=\"2.5\"] .section4 .section4-title i[data-v-21e66fde]{font-size:45px}[data-dpr=\"2.75\"] .section4 .section4-title i[data-v-21e66fde]{font-size:50px}[data-dpr=\"3\"] .section4 .section4-title i[data-v-21e66fde]{font-size:54px}[data-dpr=\"4\"] .section4 .section4-title i[data-v-21e66fde]{font-size:72px}[data-dpr=\"2\"] .section4 .section4-title i[data-v-21e66fde]{margin-top:-16px}[data-dpr=\"2.5\"] .section4 .section4-title i[data-v-21e66fde]{margin-top:-20px}[data-dpr=\"2.75\"] .section4 .section4-title i[data-v-21e66fde]{margin-top:-22px}[data-dpr=\"3\"] .section4 .section4-title i[data-v-21e66fde]{margin-top:-24px}[data-dpr=\"4\"] .section4 .section4-title i[data-v-21e66fde]{margin-top:-32px}.section4 .section4-title i[data-v-21e66fde]:before{color:#9f9f9f}.section4 .section4-list[data-v-21e66fde]{width:100%;display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:hidden}.section4 .section4-list li[data-v-21e66fde]{width:50%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 3vw}.section4 .section4-list li>a[data-v-21e66fde]{display:block;width:100%;position:relative}.section4 .section4-list li>a img[data-v-21e66fde]{display:block;width:100%}.section4 .section4-list li>a p[data-v-21e66fde]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;position:absolute;bottom:0;left:0;width:100%;background-color:gold;-webkit-box-sizing:border-box;box-sizing:border-box;padding:1.2vw 2vw}.section4 .section4-list li>h3[data-v-21e66fde]{padding-top:3vw;font-size:20px}[data-dpr=\"2\"] .section4 .section4-list li>h3[data-v-21e66fde]{font-size:40px}[data-dpr=\"2.5\"] .section4 .section4-list li>h3[data-v-21e66fde]{font-size:50px}[data-dpr=\"2.75\"] .section4 .section4-list li>h3[data-v-21e66fde]{font-size:55px}[data-dpr=\"3\"] .section4 .section4-list li>h3[data-v-21e66fde]{font-size:60px}[data-dpr=\"4\"] .section4 .section4-list li>h3[data-v-21e66fde]{font-size:80px}.section4 .section4-list li>span[data-v-21e66fde]{display:inline-block;padding-bottom:3vw;color:#b4282d}.section4 .section4-banner[data-v-21e66fde],.section4 .section4-banner img[data-v-21e66fde]{width:100%;display:block}", "", {"version":3,"sources":["/Users/xiaoming/PhpstormProjects/xiaoming12138.github.io/src/components/index/section4.vue"],"names":[],"mappings":"AAEA,2BACE,WAAY,AACZ,gBAAiB,AACjB,eAAiB,CAClB,AACD,2CACE,oCAA4C,AAC5C,uBAAwB,AACxB,qBAAsB,AACtB,kBAAmB,AACnB,eAAgB,AAChB,cAAe,AACf,kBAAmB,AACnB,qBAA0B,CAC3B,AAOD,mLACE,oBAAsB,CACvB,AAID,oHACE,oBAAsB,CACvB,AACD,0DACE,cAAgB,CACjB,AACD,4DACE,cAAgB,CACjB,AACD,6DACE,cAAgB,CACjB,AACD,0DACE,cAAgB,CACjB,AACD,0DACE,cAAgB,CACjB,AACD,6CACE,kBAAmB,AACnB,UAAW,AACX,QAAS,AACT,eAAgB,AAChB,eAAiB,CAClB,AACD,4DACE,cAAgB,CACjB,AACD,8DACE,cAAgB,CACjB,AACD,+DACE,cAAgB,CACjB,AACD,4DACE,cAAgB,CACjB,AACD,4DACE,cAAgB,CACjB,AACD,4DACE,gBAAkB,CACnB,AACD,8DACE,gBAAkB,CACnB,AACD,+DACE,gBAAkB,CACnB,AACD,4DACE,gBAAkB,CACnB,AACD,4DACE,gBAAkB,CACnB,AACD,oDACE,aAAe,CAChB,AACD,0CACE,WAAY,AACZ,iBAAkB,AAClB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACzB,qBAAsB,AACtB,uBAAwB,AACxB,mBAAoB,AACpB,eAAgB,AAChB,eAAiB,CAClB,AACD,6CACE,UAAW,AACX,8BAA+B,AAC/B,sBAAuB,AACvB,aAAe,CAChB,AACD,+CACE,cAAe,AACf,WAAY,AACZ,iBAAmB,CACpB,AACD,mDACE,cAAe,AACf,UAAY,CACb,AACD,iDACE,gBAAiB,AACjB,mBAAoB,AACpB,uBAAwB,AACxB,kBAAmB,AACnB,SAAU,AACV,OAAQ,AACR,WAAY,AACZ,sBAAuB,AACvB,8BAA+B,AAC/B,sBAAuB,AACvB,iBAAmB,CACpB,AACD,gDACE,gBAAiB,AACjB,cAAgB,CACjB,AACD,+DACE,cAAgB,CACjB,AACD,iEACE,cAAgB,CACjB,AACD,kEACE,cAAgB,CACjB,AACD,+DACE,cAAgB,CACjB,AACD,+DACE,cAAgB,CACjB,AACD,kDACE,qBAAsB,AACtB,mBAAoB,AACpB,aAAe,CAChB,AAKD,4FAHE,WAAY,AACZ,aAAe,CAKhB","file":"section4.vue","sourcesContent":["\n@import \"../../assets/index/style.css\";\n.section4[data-v-21e66fde] {\n  width: 100%;\n  overflow: hidden;\n  padding-top: 6vw;\n}\n.section4 .section4-title[data-v-21e66fde] {\n  border-top-color: rgba(185, 185, 185, 0.14);\n  border-top-style: solid;\n  border-top-width: 1px;\n  text-align: center;\n  font-size: 20px;\n  padding: 4vw 0;\n  position: relative;\n  background-color: #ffffff;\n}\n[data-dpr=\"2\"] .section4 .section4-title[data-v-21e66fde] {\n  border-top-width: 1px;\n}\n[data-dpr=\"2.5\"] .section4 .section4-title[data-v-21e66fde] {\n  border-top-width: 1px;\n}\n[data-dpr=\"2.75\"] .section4 .section4-title[data-v-21e66fde] {\n  border-top-width: 1px;\n}\n[data-dpr=\"3\"] .section4 .section4-title[data-v-21e66fde] {\n  border-top-width: 2px;\n}\n[data-dpr=\"4\"] .section4 .section4-title[data-v-21e66fde] {\n  border-top-width: 2px;\n}\n[data-dpr=\"2\"] .section4 .section4-title[data-v-21e66fde] {\n  font-size: 40px;\n}\n[data-dpr=\"2.5\"] .section4 .section4-title[data-v-21e66fde] {\n  font-size: 50px;\n}\n[data-dpr=\"2.75\"] .section4 .section4-title[data-v-21e66fde] {\n  font-size: 55px;\n}\n[data-dpr=\"3\"] .section4 .section4-title[data-v-21e66fde] {\n  font-size: 60px;\n}\n[data-dpr=\"4\"] .section4 .section4-title[data-v-21e66fde] {\n  font-size: 80px;\n}\n.section4 .section4-title i[data-v-21e66fde] {\n  position: absolute;\n  right: 6vw;\n  top: 50%;\n  font-size: 18px;\n  margin-top: -8px;\n}\n[data-dpr=\"2\"] .section4 .section4-title i[data-v-21e66fde] {\n  font-size: 36px;\n}\n[data-dpr=\"2.5\"] .section4 .section4-title i[data-v-21e66fde] {\n  font-size: 45px;\n}\n[data-dpr=\"2.75\"] .section4 .section4-title i[data-v-21e66fde] {\n  font-size: 50px;\n}\n[data-dpr=\"3\"] .section4 .section4-title i[data-v-21e66fde] {\n  font-size: 54px;\n}\n[data-dpr=\"4\"] .section4 .section4-title i[data-v-21e66fde] {\n  font-size: 72px;\n}\n[data-dpr=\"2\"] .section4 .section4-title i[data-v-21e66fde] {\n  margin-top: -16px;\n}\n[data-dpr=\"2.5\"] .section4 .section4-title i[data-v-21e66fde] {\n  margin-top: -20px;\n}\n[data-dpr=\"2.75\"] .section4 .section4-title i[data-v-21e66fde] {\n  margin-top: -22px;\n}\n[data-dpr=\"3\"] .section4 .section4-title i[data-v-21e66fde] {\n  margin-top: -24px;\n}\n[data-dpr=\"4\"] .section4 .section4-title i[data-v-21e66fde] {\n  margin-top: -32px;\n}\n.section4 .section4-title i[data-v-21e66fde]::before {\n  color: #9f9f9f;\n}\n.section4 .section4-list[data-v-21e66fde] {\n  width: 100%;\n  display: -ms-flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  overflow: hidden;\n}\n.section4 .section4-list li[data-v-21e66fde] {\n  width: 50%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 0 3vw;\n}\n.section4 .section4-list li > a[data-v-21e66fde] {\n  display: block;\n  width: 100%;\n  position: relative;\n}\n.section4 .section4-list li > a img[data-v-21e66fde] {\n  display: block;\n  width: 100%;\n}\n.section4 .section4-list li > a p[data-v-21e66fde] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: gold;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 1.2vw 2vw;\n}\n.section4 .section4-list li > h3[data-v-21e66fde] {\n  padding-top: 3vw;\n  font-size: 20px;\n}\n[data-dpr=\"2\"] .section4 .section4-list li > h3[data-v-21e66fde] {\n  font-size: 40px;\n}\n[data-dpr=\"2.5\"] .section4 .section4-list li > h3[data-v-21e66fde] {\n  font-size: 50px;\n}\n[data-dpr=\"2.75\"] .section4 .section4-list li > h3[data-v-21e66fde] {\n  font-size: 55px;\n}\n[data-dpr=\"3\"] .section4 .section4-list li > h3[data-v-21e66fde] {\n  font-size: 60px;\n}\n[data-dpr=\"4\"] .section4 .section4-list li > h3[data-v-21e66fde] {\n  font-size: 80px;\n}\n.section4 .section4-list li > span[data-v-21e66fde] {\n  display: inline-block;\n  padding-bottom: 3vw;\n  color: #b4282d;\n}\n.section4 .section4-banner[data-v-21e66fde] {\n  width: 100%;\n  display: block;\n}\n.section4 .section4-banner img[data-v-21e66fde] {\n  display: block;\n  width: 100%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "KqOx":
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;base64,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"

/***/ }),

/***/ "LCTP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_section1_vue__ = __webpack_require__("tYsn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_223afce4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_section1_vue__ = __webpack_require__("NdlE");
function injectStyle (ssrContext) {
  __webpack_require__("4qog")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-223afce4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_section1_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_223afce4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_section1_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "MeTG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_header_vue__ = __webpack_require__("gDFy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_43a7efa2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_header_vue__ = __webpack_require__("vGzF");
function injectStyle (ssrContext) {
  __webpack_require__("CBV6")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-43a7efa2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_header_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_43a7efa2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_header_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NdlE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "section1"
  }, [_vm._m(0), _vm._v(" "), _c('ul', {
    staticClass: "section1-list"
  }, _vm._l((_vm.list), function(k) {
    return _c('li', {
      key: k.id
    }, [_c('router-link', {
      attrs: {
        "to": {
          name: '详情页'
        }
      }
    }, [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (k.imgPath),
        expression: "k.imgPath"
      }],
      attrs: {
        "alt": ""
      }
    })])], 1)
  })), _vm._v(" "), _c('router-link', {
    staticClass: "section1-banner",
    attrs: {
      "to": {
        name: '详情页'
      }
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: (_vm.banner),
      expression: "banner"
    }]
  })])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', {
    staticClass: "section1-title"
  }, [_vm._v("\n    section1\n    "), _c('i', {
    staticClass: "icon-right"
  })])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "O+U4":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, ".mint-swipe[data-v-f8103ecc]{width:100%;height:50vw}.mint-swipe a[data-v-f8103ecc],.mint-swipe img[data-v-f8103ecc]{display:block;width:100%;height:100%}", "", {"version":3,"sources":["/Users/xiaoming/PhpstormProjects/xiaoming12138.github.io/src/components/index/swiper.vue"],"names":[],"mappings":"AACA,6BACE,WAAY,AACZ,WAAa,CACd,AACD,gEAEE,cAAe,AACf,WAAY,AACZ,WAAa,CACd","file":"swiper.vue","sourcesContent":["\n.mint-swipe[data-v-f8103ecc] {\n  width: 100%;\n  height: 50vw;\n}\n.mint-swipe a[data-v-f8103ecc],\n.mint-swipe img[data-v-f8103ecc] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "OCT3":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, "@font-face{font-family:index;src:url(" + __webpack_require__("tKvB") + ");src:url(" + __webpack_require__("tKvB") + "#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__("KqOx") + ") format(\"truetype\"),url(" + __webpack_require__("y/SM") + ") format(\"woff\"),url(" + __webpack_require__("h+vP") + "#icomoon) format(\"svg\");font-weight:400;font-style:normal}[class*=\" icon-\"],[class^=icon-]{font-family:index!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-car:before{content:\"\\E90C\";color:#4d4d4d}.icon-category:before{content:\"\\E90D\";color:#707070}.icon-ok:before{content:\"\\E90B\";color:#ea545d}.icon-index:before{content:\"\\E903\";color:#515151}.icon-right:before{content:\"\\E904\";color:#515151}.icon-search:before{content:\"\\E905\";color:#515151}.icon-user:before{content:\"\\E90A\";color:#515151}.icon-go:before{content:\"\\E900\";color:#bfbfbf}.icon-less .path1:before{content:\"\\E906\";color:#f2bb0a}.icon-less .path2:before{content:\"\\E907\";margin-left:-1em;color:#fff2d9}.icon-less .path3:before{content:\"\\E908\";margin-left:-1em;color:#fff}.icon-less .path4:before{content:\"\\E909\";margin-left:-1em;color:#f2bb0a}.icon-com:before{content:\"\\E902\"}.icon-set:before{content:\"\\E901\"}", "", {"version":3,"sources":["/Users/xiaoming/PhpstormProjects/xiaoming12138.github.io/src/assets/index/style.css"],"names":[],"mappings":"AAAA,WACE,kBAAqB,AACrB,kCAAsC,AACtC,wMAGwD,AACxD,gBAAoB,AACpB,iBAAmB,CACpB,AAED,iCAEE,4BAAgC,AAChC,WAAY,AACZ,kBAAmB,AACnB,gBAAoB,AACpB,oBAAqB,AACrB,oBAAqB,AACrB,cAAe,AAGf,mCAAoC,AACpC,iCAAmC,CACpC,AAED,iBACE,gBAAiB,AACjB,aAAe,CAChB,AACD,sBACE,gBAAiB,AACjB,aAAe,CAChB,AACD,gBACE,gBAAiB,AACjB,aAAe,CAChB,AACD,mBACE,gBAAiB,AACjB,aAAe,CAChB,AACD,mBACE,gBAAiB,AACjB,aAAe,CAChB,AACD,oBACE,gBAAiB,AACjB,aAAe,CAChB,AACD,kBACE,gBAAiB,AACjB,aAAe,CAChB,AACD,gBACE,gBAAiB,AACjB,aAAe,CAChB,AACD,yBACE,gBAAiB,AACjB,aAAyB,CAC1B,AACD,yBACE,gBAAiB,AACjB,iBAAkB,AAClB,aAA0B,CAC3B,AACD,yBACE,gBAAiB,AACjB,iBAAkB,AAClB,UAA0B,CAC3B,AACD,yBACE,gBAAiB,AACjB,iBAAkB,AAClB,aAAyB,CAC1B,AACD,iBACE,eAAiB,CAClB,AACD,iBACE,eAAiB,CAClB","file":"style.css","sourcesContent":["@font-face {\n  font-family: 'index';\n  src:  url('fonts/icomoon.eot?r30znd');\n  src:  url('fonts/icomoon.eot?r30znd#iefix') format('embedded-opentype'),\n    url('fonts/icomoon.ttf?r30znd') format('truetype'),\n    url('fonts/icomoon.woff?r30znd') format('woff'),\n    url('fonts/icomoon.svg?r30znd#icomoon') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'index' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-car:before {\n  content: \"\\e90c\";\n  color: #4d4d4d;\n}\n.icon-category:before {\n  content: \"\\e90d\";\n  color: #707070;\n}\n.icon-ok:before {\n  content: \"\\e90b\";\n  color: #ea545d;\n}\n.icon-index:before {\n  content: \"\\e903\";\n  color: #515151;\n}\n.icon-right:before {\n  content: \"\\e904\";\n  color: #515151;\n}\n.icon-search:before {\n  content: \"\\e905\";\n  color: #515151;\n}\n.icon-user:before {\n  content: \"\\e90a\";\n  color: #515151;\n}\n.icon-go:before {\n  content: \"\\e900\";\n  color: #bfbfbf;\n}\n.icon-less .path1:before {\n  content: \"\\e906\";\n  color: rgb(242, 187, 10);\n}\n.icon-less .path2:before {\n  content: \"\\e907\";\n  margin-left: -1em;\n  color: rgb(255, 242, 217);\n}\n.icon-less .path3:before {\n  content: \"\\e908\";\n  margin-left: -1em;\n  color: rgb(255, 255, 255);\n}\n.icon-less .path4:before {\n  content: \"\\e909\";\n  margin-left: -1em;\n  color: rgb(242, 187, 10);\n}\n.icon-com:before {\n  content: \"\\e902\";\n}\n.icon-set:before {\n  content: \"\\e901\";\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "QL5R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('mt-swipe', {
    attrs: {
      "auto": 4000
    }
  }, _vm._l((_vm.swiperData), function(k) {
    return _c('mt-swipe-item', {
      key: k.id
    }, [_c('router-link', {
      attrs: {
        "to": {
          name: '详情页'
        }
      }
    }, [_c('img', {
      attrs: {
        "src": k.imgPath
      }
    })])], 1)
  }))
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "UALn":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("J9YN");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("58d549b8", content, true);

/***/ }),

/***/ "VgY8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export index */
/* unused harmony export detail */
/* unused harmony export category */

var Random = Mock.Random;
var index = Mock.mock('http://api.com/index', {
  // "user|5-10": [{
  //   'name': '@cname', //中文名称
  //   'age|1-100': 100, //100以内随机整数  属性值100只用来确定类型
  //   'birthday': '@date("yyyy-MM-dd")', //日期
  //   'city': '@city(true)'//中国城市
  // }],
  "swiper|4": [{
    'imgPath': Random.image('800x400', '#04a1f7', '#FFF', 'png', ''),
    'id': '@id'
  }],

  'section1': {
    'list|4': [{
      'imgPath': Random.image('400x400', '#b7ddf2', '#333', 'png', ''),
      'id': '@id'
    }],
    'banner': Random.image('400x100', '#ffcc33', '#FFF', 'png', 's1-banner')
  },
  'section2|10': {
    'list|10': [{
      'title': '@first',
      'price|99-1000': 100,
      'intro': Random.paragraph(),
      'imgPath': Random.image('200x200', '#dec4e0', '#333', 'png', ''),
      'id': '@id'
    }],
    'banner': Random.image('400x100', '#b97cc9', '#FFF', 'png', 's2-banner')
  },

  'section3': {
    'list|4': [{
      'title': '@last',
      'start': Random.time('HH:mm'),
      // 在end数组里随机取一个
      'imgPath': Random.image('320x200', '#f5f2a5', '#333', 'png', ''),
      'id': '@id',
      'price|99-1000': 100,
      'end|1': ['2017/09/23 02:00:00', '2017/09/23 11:00:00', '2017/09/23 14:00:00', '2017/09/23 13:00:00']
    }],

    'banner': Random.image('400x100', '#30f673', '#FFF', 'png', 's3-banner')

  },

  'section4': {
    'list|4': [{
      'title': '@first',
      'imgPath': Random.image('400x400', '#e2f630', '#333', 'png', ''),
      'price|99-1000': 100,
      'intro': Random.paragraph(),
      'id': '@id'
    }],
    'banner': Random.image('400x100', '#ffcc33', '#FFF', 'png', 's4-banner')
  }

});

var detail = Mock.mock('http://api.com/detail', {
  "view|1": [{
    'title|1': ['一加手机5 (A5000) 全网通  移动联通电信4G手机', '三星 Galaxy S8 移动联通电信4G手机 ', '荣耀9 全网通 标配版 4GB+64GB 移动联通电信4G手机 ', 'OPPO R11 全网通 手机', '小米6 全网通 6GB+128GB 陶瓷尊享版 移动联通电信4G手机 ', '新诺基亚（NOKIA）105 移动联通2G手机 老人手机', '小辣椒 红辣椒4A 标准版  全网通 移动联通电信4G手机 ', '锤子 坚果Pro 全网通 移动联通电信4G手机 ', '360手机 N5 全网通 移动联通电信4G手机 ', '乐视 S3 爵迹版  移动联通电信4G手机 '],
    'intro': Random.cparagraph(2),
    'id': '@id',
    'price|99-1000': 100,
    'chose|3': [{
      'col|+1': ['土豪金', '东北银', '喜庆红'],
      'size|+1': ['128g', '64g', '32g']
    }]
  }],

  'swiper|2': [{
    'imgSrc': Random.image('400x400', '#ffcc33', '#FFF', 'png', ''),
    'id': '@id'
  }],

  'contentImgSrc|8': [{
    'imgSrc': Random.image('600x600', '#5a9e6e', '#FFF', 'png', '')
  }]
});

var category = Mock.mock('http://api.com/category', {
  'aside|14': [{
    'title': '@cname',
    'list|60': [{
      'title': '@last',
      'imgPath': Random.image('2000x2000', '#5169b4', '#FFF', 'png', '')

    }]
  }]
});



/***/ }),

/***/ "bkTF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ "bzJv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui__ = __webpack_require__("Au9i");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mint_ui__);
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


/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    banner: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: function () {
        return [];
      }
    }
  }
});

/***/ }),

/***/ "dr5Z":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports
exports.i(__webpack_require__("OCT3"), "");

// module
exports.push([module.i, ".section1[data-v-223afce4]{padding-top:6vw}.section1 .section1-title[data-v-223afce4]{border-top-color:hsla(0,0%,73%,.14);border-top-style:solid;border-top-width:1px;background-color:#fff;text-align:center;padding:4vw 0;font-size:20px;color:#333;position:relative}[data-dpr=\"2\"] .section1 .section1-title[data-v-223afce4],[data-dpr=\"2.5\"] .section1 .section1-title[data-v-223afce4],[data-dpr=\"2.75\"] .section1 .section1-title[data-v-223afce4]{border-top-width:1px}[data-dpr=\"3\"] .section1 .section1-title[data-v-223afce4],[data-dpr=\"4\"] .section1 .section1-title[data-v-223afce4]{border-top-width:2px}[data-dpr=\"2\"] .section1 .section1-title[data-v-223afce4]{font-size:40px}[data-dpr=\"2.5\"] .section1 .section1-title[data-v-223afce4]{font-size:50px}[data-dpr=\"2.75\"] .section1 .section1-title[data-v-223afce4]{font-size:55px}[data-dpr=\"3\"] .section1 .section1-title[data-v-223afce4]{font-size:60px}[data-dpr=\"4\"] .section1 .section1-title[data-v-223afce4]{font-size:80px}.section1 .section1-title i[data-v-223afce4]{position:absolute;right:6vw;top:50%;font-size:18px;margin-top:-8px}[data-dpr=\"2\"] .section1 .section1-title i[data-v-223afce4]{font-size:36px}[data-dpr=\"2.5\"] .section1 .section1-title i[data-v-223afce4]{font-size:45px}[data-dpr=\"2.75\"] .section1 .section1-title i[data-v-223afce4]{font-size:50px}[data-dpr=\"3\"] .section1 .section1-title i[data-v-223afce4]{font-size:54px}[data-dpr=\"4\"] .section1 .section1-title i[data-v-223afce4]{font-size:72px}[data-dpr=\"2\"] .section1 .section1-title i[data-v-223afce4]{margin-top:-16px}[data-dpr=\"2.5\"] .section1 .section1-title i[data-v-223afce4]{margin-top:-20px}[data-dpr=\"2.75\"] .section1 .section1-title i[data-v-223afce4]{margin-top:-22px}[data-dpr=\"3\"] .section1 .section1-title i[data-v-223afce4]{margin-top:-24px}[data-dpr=\"4\"] .section1 .section1-title i[data-v-223afce4]{margin-top:-32px}.section1 .section1-title i[data-v-223afce4]:before{color:#9f9f9f}.section1 .section1-list[data-v-223afce4]{display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:distribute;justify-content:space-around;padding:0 2vw 4vw}.section1 .section1-list li[data-v-223afce4]{width:50%;padding:1vw;-webkit-box-sizing:border-box;box-sizing:border-box}.section1 .section1-list li a[data-v-223afce4],.section1 .section1-list li img[data-v-223afce4]{width:100%;display:block}.section1 .section1-banner[data-v-223afce4]{display:block;width:100vw}.section1 .section1-banner img[data-v-223afce4]{width:100%;height:24vw}", "", {"version":3,"sources":["/Users/xiaoming/PhpstormProjects/xiaoming12138.github.io/src/components/index/section1.vue"],"names":[],"mappings":"AAEA,2BACE,eAAiB,CAClB,AACD,2CACE,oCAA4C,AAC5C,uBAAwB,AACxB,qBAAsB,AACtB,sBAA0B,AAC1B,kBAAmB,AACnB,cAAe,AACf,eAAgB,AAChB,WAAY,AACZ,iBAAmB,CACpB,AAOD,mLACE,oBAAsB,CACvB,AAID,oHACE,oBAAsB,CACvB,AACD,0DACE,cAAgB,CACjB,AACD,4DACE,cAAgB,CACjB,AACD,6DACE,cAAgB,CACjB,AACD,0DACE,cAAgB,CACjB,AACD,0DACE,cAAgB,CACjB,AACD,6CACE,kBAAmB,AACnB,UAAW,AACX,QAAS,AACT,eAAgB,AAChB,eAAiB,CAClB,AACD,4DACE,cAAgB,CACjB,AACD,8DACE,cAAgB,CACjB,AACD,+DACE,cAAgB,CACjB,AACD,4DACE,cAAgB,CACjB,AACD,4DACE,cAAgB,CACjB,AACD,4DACE,gBAAkB,CACnB,AACD,8DACE,gBAAkB,CACnB,AACD,+DACE,gBAAkB,CACnB,AACD,4DACE,gBAAkB,CACnB,AACD,4DACE,gBAAkB,CACnB,AACD,oDACE,aAAe,CAChB,AACD,0CACE,iBAAkB,AAClB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AACpB,eAAgB,AAChB,yBAA0B,AAC1B,6BAA8B,AAC9B,iBAAuB,CACxB,AACD,6CACE,UAAW,AACX,YAAa,AACb,8BAA+B,AAC/B,qBAAuB,CACxB,AACD,gGAEE,WAAY,AACZ,aAAe,CAChB,AACD,4CACE,cAAe,AACf,WAAa,CACd,AACD,gDACE,WAAY,AACZ,WAAa,CACd","file":"section1.vue","sourcesContent":["\n@import \"../../assets/index/style.css\";\n.section1[data-v-223afce4] {\n  padding-top: 6vw;\n}\n.section1 .section1-title[data-v-223afce4] {\n  border-top-color: rgba(185, 185, 185, 0.14);\n  border-top-style: solid;\n  border-top-width: 1px;\n  background-color: #ffffff;\n  text-align: center;\n  padding: 4vw 0;\n  font-size: 20px;\n  color: #333;\n  position: relative;\n}\n[data-dpr=\"2\"] .section1 .section1-title[data-v-223afce4] {\n  border-top-width: 1px;\n}\n[data-dpr=\"2.5\"] .section1 .section1-title[data-v-223afce4] {\n  border-top-width: 1px;\n}\n[data-dpr=\"2.75\"] .section1 .section1-title[data-v-223afce4] {\n  border-top-width: 1px;\n}\n[data-dpr=\"3\"] .section1 .section1-title[data-v-223afce4] {\n  border-top-width: 2px;\n}\n[data-dpr=\"4\"] .section1 .section1-title[data-v-223afce4] {\n  border-top-width: 2px;\n}\n[data-dpr=\"2\"] .section1 .section1-title[data-v-223afce4] {\n  font-size: 40px;\n}\n[data-dpr=\"2.5\"] .section1 .section1-title[data-v-223afce4] {\n  font-size: 50px;\n}\n[data-dpr=\"2.75\"] .section1 .section1-title[data-v-223afce4] {\n  font-size: 55px;\n}\n[data-dpr=\"3\"] .section1 .section1-title[data-v-223afce4] {\n  font-size: 60px;\n}\n[data-dpr=\"4\"] .section1 .section1-title[data-v-223afce4] {\n  font-size: 80px;\n}\n.section1 .section1-title i[data-v-223afce4] {\n  position: absolute;\n  right: 6vw;\n  top: 50%;\n  font-size: 18px;\n  margin-top: -8px;\n}\n[data-dpr=\"2\"] .section1 .section1-title i[data-v-223afce4] {\n  font-size: 36px;\n}\n[data-dpr=\"2.5\"] .section1 .section1-title i[data-v-223afce4] {\n  font-size: 45px;\n}\n[data-dpr=\"2.75\"] .section1 .section1-title i[data-v-223afce4] {\n  font-size: 50px;\n}\n[data-dpr=\"3\"] .section1 .section1-title i[data-v-223afce4] {\n  font-size: 54px;\n}\n[data-dpr=\"4\"] .section1 .section1-title i[data-v-223afce4] {\n  font-size: 72px;\n}\n[data-dpr=\"2\"] .section1 .section1-title i[data-v-223afce4] {\n  margin-top: -16px;\n}\n[data-dpr=\"2.5\"] .section1 .section1-title i[data-v-223afce4] {\n  margin-top: -20px;\n}\n[data-dpr=\"2.75\"] .section1 .section1-title i[data-v-223afce4] {\n  margin-top: -22px;\n}\n[data-dpr=\"3\"] .section1 .section1-title i[data-v-223afce4] {\n  margin-top: -24px;\n}\n[data-dpr=\"4\"] .section1 .section1-title i[data-v-223afce4] {\n  margin-top: -32px;\n}\n.section1 .section1-title i[data-v-223afce4]::before {\n  color: #9f9f9f;\n}\n.section1 .section1-list[data-v-223afce4] {\n  display: -ms-flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n  padding: 0 2vw 4vw 2vw;\n}\n.section1 .section1-list li[data-v-223afce4] {\n  width: 50%;\n  padding: 1vw;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.section1 .section1-list li a[data-v-223afce4],\n.section1 .section1-list li img[data-v-223afce4] {\n  width: 100%;\n  display: block;\n}\n.section1 .section1-banner[data-v-223afce4] {\n  display: block;\n  width: 100vw;\n}\n.section1 .section1-banner img[data-v-223afce4] {\n  width: 100%;\n  height: 24vw;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "gDFy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ "gxab":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_swiper_vue__ = __webpack_require__("zlul");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f8103ecc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_swiper_vue__ = __webpack_require__("QL5R");
function injectStyle (ssrContext) {
  __webpack_require__("B0Co")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f8103ecc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_swiper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f8103ecc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_swiper_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "h+vP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/icomoon.18e8503.svg";

/***/ }),

/***/ "iydf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("人家是有底线的 -.-")])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "j1ve":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_306fc683_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_service_vue__ = __webpack_require__("n9t0");
function injectStyle (ssrContext) {
  __webpack_require__("Ilow")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-306fc683"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_306fc683_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_service_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "mlqX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__("tk/L");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_092b1f86_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__("r6Y1");
function injectStyle (ssrContext) {
  __webpack_require__("p17X")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-092b1f86"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_092b1f86_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "n9t0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "service"
  }, [_c('ul', [_c('li', [_c('i', {
    staticClass: "icon-ok"
  }), _c('span', [_vm._v("自营品牌")])]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon-ok"
  }), _c('span', [_vm._v("无忧退货")])]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon-ok"
  }), _c('span', [_vm._v("48小时快速退款")])])])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "p17X":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5ZmS");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("6b038670", content, true);

/***/ }),

/***/ "pMl9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("47FH");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("3e771281", content, true);

/***/ }),

/***/ "pzFW":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports
exports.i(__webpack_require__("OCT3"), "");

// module
exports.push([module.i, ".service[data-v-306fc683]{border-bottom-color:hsla(0,0%,73%,.14);border-bottom-style:solid;border-bottom-width:1px}[data-dpr=\"2\"] .service[data-v-306fc683],[data-dpr=\"2.5\"] .service[data-v-306fc683],[data-dpr=\"2.75\"] .service[data-v-306fc683]{border-bottom-width:1px}[data-dpr=\"3\"] .service[data-v-306fc683],[data-dpr=\"4\"] .service[data-v-306fc683]{border-bottom-width:2px}.service ul[data-v-306fc683]{display:-webkit-flex;display:-ms-flex;display:flex;justify-content:space-around}.service ul li[data-v-306fc683]{display:-webkit-flex;display:-ms-flex;display:flex;align-items:center;padding:3.3vw 0}.service ul li span[data-v-306fc683]{font-size:14px;padding-left:1vw}[data-dpr=\"2\"] .service ul li span[data-v-306fc683]{font-size:28px}[data-dpr=\"2.5\"] .service ul li span[data-v-306fc683]{font-size:35px}[data-dpr=\"2.75\"] .service ul li span[data-v-306fc683]{font-size:39px}[data-dpr=\"3\"] .service ul li span[data-v-306fc683]{font-size:42px}[data-dpr=\"4\"] .service ul li span[data-v-306fc683]{font-size:56px}.service ul li i[data-v-306fc683]{font-size:18px}[data-dpr=\"2\"] .service ul li i[data-v-306fc683]{font-size:36px}[data-dpr=\"2.5\"] .service ul li i[data-v-306fc683]{font-size:45px}[data-dpr=\"2.75\"] .service ul li i[data-v-306fc683]{font-size:50px}[data-dpr=\"3\"] .service ul li i[data-v-306fc683]{font-size:54px}[data-dpr=\"4\"] .service ul li i[data-v-306fc683]{font-size:72px}", "", {"version":3,"sources":["/Users/xiaoming/PhpstormProjects/xiaoming12138.github.io/src/components/index/service.vue"],"names":[],"mappings":"AAEA,0BACE,uCAA+C,AAC/C,0BAA2B,AAC3B,uBAAyB,CAC1B,AAOD,gIACE,uBAAyB,CAC1B,AAID,kFACE,uBAAyB,CAC1B,AACD,6BACE,qBAAsB,AACtB,iBAAkB,AAClB,aAAc,AACd,4BAA8B,CAC/B,AACD,gCACE,qBAAsB,AACtB,iBAAkB,AAClB,aAAc,AACd,mBAAoB,AACpB,eAAiB,CAClB,AACD,qCACE,eAAgB,AAChB,gBAAkB,CACnB,AACD,oDACE,cAAgB,CACjB,AACD,sDACE,cAAgB,CACjB,AACD,uDACE,cAAgB,CACjB,AACD,oDACE,cAAgB,CACjB,AACD,oDACE,cAAgB,CACjB,AACD,kCACE,cAAgB,CACjB,AACD,iDACE,cAAgB,CACjB,AACD,mDACE,cAAgB,CACjB,AACD,oDACE,cAAgB,CACjB,AACD,iDACE,cAAgB,CACjB,AACD,iDACE,cAAgB,CACjB","file":"service.vue","sourcesContent":["\n@import '../../assets/index/style.css';\n.service[data-v-306fc683] {\n  border-bottom-color: rgba(185, 185, 185, 0.14);\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n}\n[data-dpr=\"2\"] .service[data-v-306fc683] {\n  border-bottom-width: 1px;\n}\n[data-dpr=\"2.5\"] .service[data-v-306fc683] {\n  border-bottom-width: 1px;\n}\n[data-dpr=\"2.75\"] .service[data-v-306fc683] {\n  border-bottom-width: 1px;\n}\n[data-dpr=\"3\"] .service[data-v-306fc683] {\n  border-bottom-width: 2px;\n}\n[data-dpr=\"4\"] .service[data-v-306fc683] {\n  border-bottom-width: 2px;\n}\n.service ul[data-v-306fc683] {\n  display: -webkit-flex;\n  display: -ms-flex;\n  display: flex;\n  justify-content: space-around;\n}\n.service ul li[data-v-306fc683] {\n  display: -webkit-flex;\n  display: -ms-flex;\n  display: flex;\n  align-items: center;\n  padding: 3.3vw 0;\n}\n.service ul li span[data-v-306fc683] {\n  font-size: 14px;\n  padding-left: 1vw;\n}\n[data-dpr=\"2\"] .service ul li span[data-v-306fc683] {\n  font-size: 28px;\n}\n[data-dpr=\"2.5\"] .service ul li span[data-v-306fc683] {\n  font-size: 35px;\n}\n[data-dpr=\"2.75\"] .service ul li span[data-v-306fc683] {\n  font-size: 39px;\n}\n[data-dpr=\"3\"] .service ul li span[data-v-306fc683] {\n  font-size: 42px;\n}\n[data-dpr=\"4\"] .service ul li span[data-v-306fc683] {\n  font-size: 56px;\n}\n.service ul li i[data-v-306fc683] {\n  font-size: 18px;\n}\n[data-dpr=\"2\"] .service ul li i[data-v-306fc683] {\n  font-size: 36px;\n}\n[data-dpr=\"2.5\"] .service ul li i[data-v-306fc683] {\n  font-size: 45px;\n}\n[data-dpr=\"2.75\"] .service ul li i[data-v-306fc683] {\n  font-size: 50px;\n}\n[data-dpr=\"3\"] .service ul li i[data-v-306fc683] {\n  font-size: 54px;\n}\n[data-dpr=\"4\"] .service ul li i[data-v-306fc683] {\n  font-size: 72px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "q9dU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "section2"
  }, [_c('div', {
    staticClass: "section2-list"
  }, [_c('ul', _vm._l((_vm.list), function(k) {
    return _c('li', {
      key: k.id
    }, [_c('router-link', {
      attrs: {
        "to": {
          name: '详情页'
        }
      }
    }, [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (k.imgPath),
        expression: "k.imgPath"
      }]
    })]), _vm._v(" "), _c('h2', {
      staticClass: "section2-list-title ac"
    }, [_vm._v("\n          " + _vm._s(k.title) + "\n        ")]), _vm._v(" "), _c('p', {
      staticClass: "section2-list-intro"
    }, [_vm._v("\n          " + _vm._s(k.intro) + "\n        ")]), _vm._v(" "), _c('p', {
      staticClass: "section2-list-price"
    }, [_vm._v("\n          ￥" + _vm._s(k.price) + "\n        ")])], 1)
  }))]), _vm._v(" "), _c('router-link', {
    staticClass: "section2-banner",
    attrs: {
      "to": {
        name: '详情页'
      }
    }
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: (_vm.banner),
      expression: "banner"
    }]
  })])], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "r6Y1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('v-header'), _vm._v(" "), _c('v-swiper', {
    attrs: {
      "swiperData": _vm.datas.swiper
    }
  }), _vm._v(" "), _c('v-service'), _vm._v(" "), _c('v-section1', {
    attrs: {
      "list": _vm.datas.section1.list,
      "banner": _vm.datas.section1.banner
    }
  }), _vm._v(" "), _c('v-section2', {
    attrs: {
      "list": _vm.datas.section2.list,
      "banner": _vm.datas.section2.banner
    }
  }), _vm._v(" "), _c('v-section3'), _vm._v(" "), _c('v-section4', {
    attrs: {
      "list": _vm.datas.section4.list,
      "banner": _vm.datas.section4.banner
    }
  }), _vm._v(" "), _c('v-baseline'), _vm._v(" "), _c('v-footer')], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "sBPj":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports
exports.i(__webpack_require__("OCT3"), "");

// module
exports.push([module.i, ".mint-header[data-v-43a7efa2]{padding:6.8vw 4.8vw;background-color:#fff;color:#333!important;font-size:20px!important}[data-dpr=\"2\"] .mint-header[data-v-43a7efa2]{font-size:40px!important}[data-dpr=\"2.5\"] .mint-header[data-v-43a7efa2]{font-size:50px!important}[data-dpr=\"2.75\"] .mint-header[data-v-43a7efa2]{font-size:55px!important}[data-dpr=\"3\"] .mint-header[data-v-43a7efa2]{font-size:60px!important}[data-dpr=\"4\"] .mint-header[data-v-43a7efa2]{font-size:80px!important}", "", {"version":3,"sources":["/Users/xiaoming/PhpstormProjects/xiaoming12138.github.io/src/components/index/header.vue"],"names":[],"mappings":"AAEA,8BACE,oBAAqB,AACrB,sBAAuB,AACvB,qBAAsB,AACtB,wBAA2B,CAC5B,AACD,6CACE,wBAA2B,CAC5B,AACD,+CACE,wBAA2B,CAC5B,AACD,gDACE,wBAA2B,CAC5B,AACD,6CACE,wBAA2B,CAC5B,AACD,6CACE,wBAA2B,CAC5B","file":"header.vue","sourcesContent":["\n@import '../../assets/index/style.css';\n.mint-header[data-v-43a7efa2] {\n  padding: 6.8vw 4.8vw;\n  background-color: #fff;\n  color: #333!important;\n  font-size: 20px !important;\n}\n[data-dpr=\"2\"] .mint-header[data-v-43a7efa2] {\n  font-size: 40px !important;\n}\n[data-dpr=\"2.5\"] .mint-header[data-v-43a7efa2] {\n  font-size: 50px !important;\n}\n[data-dpr=\"2.75\"] .mint-header[data-v-43a7efa2] {\n  font-size: 55px !important;\n}\n[data-dpr=\"3\"] .mint-header[data-v-43a7efa2] {\n  font-size: 60px !important;\n}\n[data-dpr=\"4\"] .mint-header[data-v-43a7efa2] {\n  font-size: 80px !important;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "tKvB":
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,vBAAABgQAAABAAIAAAAAAAAAAAAAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAXVGTxgAAAAAAAAAAAAAAAAAAAAAAAA4AaQBjAG8AbQBvAG8AbgAAAA4AUgBlAGcAdQBsAGEAcgAAABYAVgBlAHIAcwBpAG8AbgAgADEALgAwAAAADgBpAGMAbwBtAG8AbwBuAAAAAAAAAQAAAAsAgAADADBPUy8yDxIGIQAAALwAAABgY21hcBdW0pQAAAEcAAAAVGdhc3AAAAAQAAABcAAAAAhnbHlmjGLxcQAAAXgAAAwMaGVhZA98QlMAAA2EAAAANmhoZWEIUQSNAAANvAAAACRobXR4ProF8AAADeAAAABIbG9jYRkWFjwAAA4oAAAAJm1heHAAGwDfAAAOUAAAACBuYW1lmUoJ+wAADnAAAAGGcG9zdAADAAAAAA/4AAAAIAADA+oBkAAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAEAAAOkNA8D/wABAA8AAQAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAMAAAAcAAMAAQAAABwABAA4AAAACgAIAAIAAgABACDpDf/9//8AAAAAACDpAP/9//8AAf/jFwQAAwABAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBSwCAAp8DAAAWAAABFhQHAQ4BFx4BNwE2NCcBJgYHBhYXAQKCBgb+ywcBBgUSBwE1FRT+ygcRBgYBBgE2AccFDgX+8QYRBwcBBgEPEjQSARkGAQcGEgb+5wAAAwBNAEADgANAAAIAEAA6AAATJzMzFBYzMjY1MTQmIyIGFRMiDgIVMzQ+AjMyHgIVFA4CIyIuAicjHgMzMj4CNTQuAo1AgPMlGxslJRsbJUBQi2k8GzlggkpKgmA5OWCCSi9YTUAYIBlGVWM1UItpPDxpiwGAQBslJRsbJSUbAYA8aYtQSoJgOTlggkpKgmA5GCs9JStHMhw8aYtQUItpPAAAAAAEAEEAFwPAA2UAcADDAM8A3AAAAS4BByMiJjU0NjE2Ji8DLgEjIgYHDgEjIiYnLgEjIgYPAw4BFzAWFRQGKwEmBgcUBhUUFhceATsBMhYVFAYVBhYfAx4BMzI2Nz4BMzIWFx4BMzI2PwM+ASc0JjU0NjsBMjY3NDY1LgE1BxQGBw4BBw4BFRQWFwcuAScuASMiBgcOAQcnPgE1NCYnLgEnLgE1NDY3PgE3PgE1NCYnNzAyMR4BFx4BMzI2Nz4BNzgBNxcOARUUFhceARceARUlIgYVFBYzMjY1NCYHIiY1NDYzMhYVFAYjA7YEFxAELUEJCAsQAW8CBQwGDRcICjUZGTUKCBgNBgsFAnMBEAwJCUEtBBAXBAkIAQQXDwUtQQkICxABbQEGCwcMGAgMNhgZNwoIGA0GCwYBcQEQCwgJQS0FDxcECgEJNAYBIDoWFxkKA2QDFBAZMBYWMBkPFQNhAwoYFxY6IAIFBQIgOhYXGAoDZwECFQ8ZLxUWLhkPFAMBYwQJGBcWOiABBv58QV1dQUFdXUEoOTkoKDk5KAIWFBkBQS4PGxIoCwE9AQIDCggLJicLCAoCAgE/AQsoEhsPLkEBGRQCOhwcOAQUGUEtDxsBEicLAT0BAgIKCQwoKwoJCwMCAT4BCycSARsPLUEZFAE6HRw6AlgUKwkCGxgYPSEUIwg3AxQLExMTEgsUAzYIIxQhPRgYGwIJLBMTLAkCGxgYPSEUIwg4AxMLEhEREQsTAgE3CCMUIT0YGBsCCisTnlxBQlxcQUJc/jknKDk5Jyg5AAIAAf/rBI8DwAAgAF0AAAEjAR4BMzI2NTQmJzEBLgEjIgYHMQEOARUUFjMyNjcxAQEUFjsBMjY1MTU0NjsBMhYdARQWMzEzMjY1ETQmIyIGFREUBisBFzU0JisBIgYdATcjIiY1ETQmIyIGFRECZz8CGQYQCRQbCAf95wYQCQoQBv3nBggbFAgQBgIZ/kFbQIsTHAQDdQQEGxOMP1sbExQbJBmMLzsqdSk7LosaJBsTFBsDb/4RBgcbFAoSBgHwBQcHBf4QBhIJFBsGBgHv/RM/WBsTowIDAwKjExtYPwE0FBsbFP7MGCIvoyk6OimjLyIYATQUGxsU/swAAAIAAf/CA/0DvAAUAHYAAAEmNDc2Mh8BFhQPAgYiJyY0PwEnAy4BNz4BFx4BFx4BMzI+Ajc+AzU0LgInLgMjIg4CBw4DFRQWFx4BFxYGBwYmJy4BJy4BNTQ+Ajc+AzMyHgIXHgMVFA4CBw4DIyImJy4BJzEBdQgHCBYI7wgHAe8IFggHCNzcaAoGBQUVChg1HBs4HS9aUkkfHzIjEhIjMh8fSVJaLy9aUkkfHzIjEg4ODikaBwIICRUHHi0QDxAVJjgiI1JbZDU1ZFtSIyI4JhUVJjgiI1JbZDUgPx4fOxsClQgWBwgH6QgVCAHpBwgIFgfW1v1qBRUKCQcGDRQHBwcSIzEfH0pRWi8vWlJJHx8xIxMTIzEfH0lSWi8pUCQnRR8IFgcHAggiTispWC41ZFtSIiM3JxQUJzcjIlJbZDU1Y1xRIyI4JhUIBwgXDwAAAAIAuAAdA60DewAfADcAACUnPgE1NCYnLgEjIgYHDgEUFhceATMyNjcXFjI3NjQnJS4BNDY3PgEzMhYXHgEVFAYHDgEjIiYnA63XIiM2MzKDSEiDMjU0NDUyg0g6ay7XEC0QERD9UCYmJiYlXzQ0XyUlKCglJV80NF8la9cuazpIgzIzNjYzNISKhDQzNiQh1xAQES0Q8iZgZGAmJScnJSVfNDVfJSQoKCUAAAABAMUAAgM7A4IAIQAAJTQ2MzIWFTEzMjY1ETQmKwEUBiMiJjUjIgYVERQWOwE4AQF6Tzc3T38WIB8Xf083N09/FiAfF38CN05ONx8WAxUXHzdOTjcfF/zrFh8AAAEA5wAeAxkDZQAdAAAlMhYXMzI2NRE0JisBDgEjIiYnIyIGFREUFjsBPgECAD9cCEYUHBwURghcPz9cCEYUHBwURghcrlM9HRUC4hUePVNTPR4V/R4UHj1TAAAAAQDnAmIDGQNlABEAAAE1NCYrAQ4BIyImJyMiBh0BIQMZHBRGCFw/P1wIRhQcAjICYtEUHjxTUj0eFNEABQDJAOIDOAKGAAMABwALAA8ASwAAATMVIyczFSMnMxUjJzMVIwEyFhUUBisBFRQGIyImPQEjIiY1NDY7ATUjIiY1NDY7AScmNjc2Fh8BNz4BFx4BBzEHMzIWFRQGKwEVMwK8fHymfHypfX2kfHwBlgUJCQVFCAYGCEUFCAgFRUUFCAgFOjwDBAYFCwI9PAIMBQUDAjw5BggIBkREAoYkJCQkJCQk/t0IBwYIMgYICAYyCQYGCCsIBwYIcwULAwMEBHV1BQQEAgsFdAkGBggrAAIAAf/EA/oDvQApAFIAAAEyHgIdARQGBw4BFx4BFwUeAR0BITU0NjclPgE3NiYnLgE9ATQ+AjM1Ig4CHQEUHgIXBTAGHQEUFjMhMjY9ATQmMSU+Az0BNC4CIzEB/SlPPygrMw0NAgIUDwEUAhn8hxQGARcPFAICDQ0xLyc/UCg0Z1EyDRwuIv7oPyUaA3oaJkD+6yEtHAwyUWY1A34fLzgZny6SKAofEBEbB4MBDRk+QBMPA4QHGxAQHwookS+fGTgvHz8oP1AnnxpKT0wahCUbXxomJhpfHCSDGklPSx2fJ1A/KAAAAAADAAD/wAP+A8AAEwAnAD8AAAUiLgI1ND4CMzIeAhUUDgIDIg4CFRQeAjMyPgI1NC4CAyImLwEuATc+AR8BEz4BFx4BBwMOASsBAf9quotQUIu6amq6i1BQirtqX6h9SEh9qF9fqH5JSH6oWAQHA+0JBAcGFAjV0QQVCQkGBd8DCAUEQFCMu2pqu4pQUIy7amq7ilADzUh9qF9fqH5JSH6oYGCofEj9RQICqAYVCAkDBpgBkQkGBQQVCf5WBQcAAAADAAAAIwP/A8AAEAAhAEgAACUhIiY1ETQ2MyEyFhcRFAYjASIGFREUFjMhMjY1ETQmIyEBIi4CNTE0NjMyFhUxFB4CMzEyPgI1MTQ2MzIWFTEUDgIjMQNU/VZGZGRGAqpHYwFkR/1WMkdHMgKqM0dHM/1WAVU8a08uDgoLDiZCWTIzWEInDgoKDi5Paj0jZEYCSUZkZEb9t0ZkA2xHMv23MkdHMgJJMkf+Si5PazwKDw8KMllCJiZCWTIKDw8KPGtPLgAACAAA/8YD+gPAABAAIAAwAEAAUABgAHAAgAAAASMiBh0BFBY7ATI2PQE2JiMTFAYrASImPQE0NjsBMhYVJSMiBh0BFBY7ATI2PQE2JhMUBisBIiY9ATQ2OwEyFhUBIyIGHQEUFjsBMjY9ATQmAxQGKwEiJj0BNDY7ATIWFSUjIgYdARQWOwEyNj0BNiYTFAYrASImPQE0NjsBMhYVAWHoNEVEMOcwRARCMC4kFtAaICQW0BogAfjoMEREMOgvRAVJBSUV0RofJBXRGiD9pugvREQv6DBERAIkFtAaICQW0BogAfjoMEREMOgvRAVJBSUV0RofJBXRGiADwEQw5zBERDDnMET+qxogJBbWGiAlFX9EMOcwREQw5zBE/qsaICQW1hogJRX+VEQw6C9ERC/oMET+qhogJRXRGh8kFYVEMOgvREQv6DBE/qoaICUV0RofJBUAAAEAAAAAAADGk1FdXw889QALBAAAAAAA1ed+6wAAAADV537rAAD/wASPA8AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABLoAAAAABI8AAQAAAAAAAAAAAAAAAAAAABIEAAAAAAAAAAAAAAACAAAABAABSwQAAE0EAABBBLoAAQQAAAEEAAC4BAAAxQQAAOcEAADnBAAAyQQAAAEEAAAABAAAAAQAAAAAAAAAAAoAFAAeAEwAngHIAkYC7gNEA3IDoAO+BCYEmgT6BVwGBgAAAAEAAAASAN0ACAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"

/***/ }),

/***/ "tYsn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui__ = __webpack_require__("Au9i");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mint_ui__);
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



/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    banner: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: function () {
        return [];
      }
    }
  }
});

/***/ }),

/***/ "tk/L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_index_header_vue__ = __webpack_require__("MeTG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_index_swiper_vue__ = __webpack_require__("gxab");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_index_service_vue__ = __webpack_require__("j1ve");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_index_section1_vue__ = __webpack_require__("LCTP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_index_section2_vue__ = __webpack_require__("AqPR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_index_section3_vue__ = __webpack_require__("J2an");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_index_section4_vue__ = __webpack_require__("J3op");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_baseline_vue__ = __webpack_require__("6Q/n");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_footer_vue__ = __webpack_require__("3xQF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__http_mock_js__ = __webpack_require__("VgY8");
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










 //模拟数据
/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    'v-header': __WEBPACK_IMPORTED_MODULE_0__components_index_header_vue__["a" /* default */],
    'v-swiper': __WEBPACK_IMPORTED_MODULE_1__components_index_swiper_vue__["a" /* default */],
    'v-service': __WEBPACK_IMPORTED_MODULE_2__components_index_service_vue__["a" /* default */],
    'v-section1': __WEBPACK_IMPORTED_MODULE_3__components_index_section1_vue__["a" /* default */],
    'v-section2': __WEBPACK_IMPORTED_MODULE_4__components_index_section2_vue__["a" /* default */],
    'v-section3': __WEBPACK_IMPORTED_MODULE_5__components_index_section3_vue__["a" /* default */],
    'v-section4': __WEBPACK_IMPORTED_MODULE_6__components_index_section4_vue__["a" /* default */],
    'v-baseline': __WEBPACK_IMPORTED_MODULE_7__common_baseline_vue__["a" /* default */],
    'v-footer': __WEBPACK_IMPORTED_MODULE_8__common_footer_vue__["a" /* default */]
  },
  data() {
    return {
      datas: {
        section1: {},
        section2: {},
        section3: {},
        section4: {},
        swiper: []
      },
      loading: true
    };
  },

  beforeCreate() {
    this.$api({
      method: 'post',
      url: '/index'
    }).then(response => {
      this.datas = response.data;
    }).catch(function (error) {
      alert(error);
    });
  }
});

/***/ }),

/***/ "vGzF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('mt-header', {
    attrs: {
      "title": "电商联盟"
    }
  }, [_c('router-link', {
    attrs: {
      "slot": "right",
      "to": {
        name: ''
      }
    },
    slot: "right"
  }, [_c('mt-button', {
    attrs: {
      "icon": "search"
    }
  })], 1)], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "xYQh":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports
exports.i(__webpack_require__("OCT3"), "");

// module
exports.push([module.i, ".mint-tab-item-label[data-v-6ddaa55a]:hover{color:#333}.footer .mint-tabbar[data-v-6ddaa55a]{background-color:#fff;background-image:none;box-shadow:0 0 2.2vw 0 hsla(0,6%,50%,.13);-webkit-box-shadow:0 0 2.2vw 0 hsla(0,6%,50%,.13)}.footer .mint-tabbar .is-selected[data-v-6ddaa55a]{color:#fa0;background-color:#fff}.footer .mint-tabbar .is-selected i[data-v-6ddaa55a]:before{color:#fa0}.footer .mint-tabbar i[data-v-6ddaa55a]{font-size:21px}[data-dpr=\"2\"] .footer .mint-tabbar i[data-v-6ddaa55a]{font-size:42px}[data-dpr=\"2.5\"] .footer .mint-tabbar i[data-v-6ddaa55a]{font-size:53px}[data-dpr=\"2.75\"] .footer .mint-tabbar i[data-v-6ddaa55a]{font-size:58px}[data-dpr=\"3\"] .footer .mint-tabbar i[data-v-6ddaa55a]{font-size:63px}[data-dpr=\"4\"] .footer .mint-tabbar i[data-v-6ddaa55a]{font-size:84px}", "", {"version":3,"sources":["/Users/xiaoming/PhpstormProjects/xiaoming12138.github.io/src/common/_footer.vue"],"names":[],"mappings":"AAEA,4CACE,UAAY,CACb,AACD,sCACE,sBAAuB,AACvB,sBAAuB,AACvB,0CAAkD,AAClD,iDAA0D,CAC3D,AACD,mDACE,WAAe,AACf,qBAAuB,CACxB,AACD,4DACE,UAAe,CAChB,AACD,wCACE,cAAgB,CACjB,AACD,uDACE,cAAgB,CACjB,AACD,yDACE,cAAgB,CACjB,AACD,0DACE,cAAgB,CACjB,AACD,uDACE,cAAgB,CACjB,AACD,uDACE,cAAgB,CACjB","file":"_footer.vue","sourcesContent":["\n@import '../assets/index/style.css';\n.mint-tab-item-label[data-v-6ddaa55a]:hover {\n  color: #333;\n}\n.footer .mint-tabbar[data-v-6ddaa55a] {\n  background-color: #fff;\n  background-image: none;\n  box-shadow: 0 0 2.2vw 0 rgba(135, 120, 120, 0.13);\n  -webkit-box-shadow: 0 0 2.2vw 0 rgba(135, 120, 120, 0.13);\n}\n.footer .mint-tabbar .is-selected[data-v-6ddaa55a] {\n  color: #FFAA00;\n  background-color: #fff;\n}\n.footer .mint-tabbar .is-selected i[data-v-6ddaa55a]::before {\n  color: #FFAA00;\n}\n.footer .mint-tabbar i[data-v-6ddaa55a] {\n  font-size: 21px;\n}\n[data-dpr=\"2\"] .footer .mint-tabbar i[data-v-6ddaa55a] {\n  font-size: 42px;\n}\n[data-dpr=\"2.5\"] .footer .mint-tabbar i[data-v-6ddaa55a] {\n  font-size: 53px;\n}\n[data-dpr=\"2.75\"] .footer .mint-tabbar i[data-v-6ddaa55a] {\n  font-size: 58px;\n}\n[data-dpr=\"3\"] .footer .mint-tabbar i[data-v-6ddaa55a] {\n  font-size: 63px;\n}\n[data-dpr=\"4\"] .footer .mint-tabbar i[data-v-6ddaa55a] {\n  font-size: 84px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "xicF":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("xYQh");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("3c179187", content, true);

/***/ }),

/***/ "y/SM":
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,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"

/***/ }),

/***/ "yecE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    gotoRouter() {
      this.$router.push({
        name: this.selected
      });
    }
  },
  data() {
    return {
      //对应mt-tab-item 的id值
      selected: ''
    };
  },
  mounted() {

    //获取当前路由名称，根据该名称给当前footer添加is-selected
    let Rname = this.$route.name;
    switch (Rname) {
      case '首页':
        this.selected = '首页';
        break;
      case '分类页':
        this.selected = '分类页';

        break;
      case '购物车页':
        this.selected = '购物车页';

        break;
      case '用户页':
        this.selected = '用户页';
        break;
    }
  }

});

/***/ }),

/***/ "yiKW":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports
exports.i(__webpack_require__("OCT3"), "");

// module
exports.push([module.i, ".section2-list[data-v-221ecde2]{overflow-x:auto;width:100%;padding-top:6vw;-webkit-overflow-scrolling:touch}.section2-list>ul[data-v-221ecde2]{border-top-color:hsla(0,0%,73%,.14);border-top-style:solid;border-top-width:1px;display:-ms-flex;display:-webkit-box;display:-ms-flexbox;display:flex;padding:6vw;width:380%}[data-dpr=\"2\"] .section2-list>ul[data-v-221ecde2],[data-dpr=\"2.5\"] .section2-list>ul[data-v-221ecde2],[data-dpr=\"2.75\"] .section2-list>ul[data-v-221ecde2]{border-top-width:1px}[data-dpr=\"3\"] .section2-list>ul[data-v-221ecde2],[data-dpr=\"4\"] .section2-list>ul[data-v-221ecde2]{border-top-width:2px}.section2-list>ul li[data-v-221ecde2]{margin-right:10vw;width:26vw}.section2-list>ul li a[data-v-221ecde2],.section2-list>ul li img[data-v-221ecde2]{display:block;width:100%}.section2-list>ul li h2[data-v-221ecde2],.section2-list>ul li p[data-v-221ecde2]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.section2-list>ul li h2[data-v-221ecde2]{font-size:16px;padding-top:3vw;color:#333}[data-dpr=\"2\"] .section2-list>ul li h2[data-v-221ecde2]{font-size:32px}[data-dpr=\"2.5\"] .section2-list>ul li h2[data-v-221ecde2]{font-size:40px}[data-dpr=\"2.75\"] .section2-list>ul li h2[data-v-221ecde2]{font-size:44px}[data-dpr=\"3\"] .section2-list>ul li h2[data-v-221ecde2]{font-size:48px}[data-dpr=\"4\"] .section2-list>ul li h2[data-v-221ecde2]{font-size:64px}.section2-list>ul li p.section2-list-intro[data-v-221ecde2]{padding-top:2vw;font-size:13px;color:#969696}[data-dpr=\"2\"] .section2-list>ul li p.section2-list-intro[data-v-221ecde2]{font-size:26px}[data-dpr=\"2.5\"] .section2-list>ul li p.section2-list-intro[data-v-221ecde2]{font-size:33px}[data-dpr=\"2.75\"] .section2-list>ul li p.section2-list-intro[data-v-221ecde2]{font-size:36px}[data-dpr=\"3\"] .section2-list>ul li p.section2-list-intro[data-v-221ecde2]{font-size:39px}[data-dpr=\"4\"] .section2-list>ul li p.section2-list-intro[data-v-221ecde2]{font-size:52px}.section2-list>ul li p.section2-list-price[data-v-221ecde2]{color:#b4282d}.section2-banner[data-v-221ecde2]{display:block;width:100vw}.section2-banner img[data-v-221ecde2]{display:block;height:24vw;width:100%}", "", {"version":3,"sources":["/Users/xiaoming/PhpstormProjects/xiaoming12138.github.io/src/components/index/section2.vue"],"names":[],"mappings":"AAEA,gCACE,gBAAiB,AACjB,WAAY,AACZ,gBAAiB,AAEjB,gCAAkC,CACnC,AACD,mCACE,oCAA4C,AAC5C,uBAAwB,AACxB,qBAAsB,AACtB,iBAAkB,AAClB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,YAAa,AACb,UAAY,CACb,AAOD,2JACE,oBAAsB,CACvB,AAID,oGACE,oBAAsB,CACvB,AACD,sCACE,kBAAmB,AACnB,UAAY,CACb,AACD,kFAEE,cAAe,AACf,UAAY,CACb,AACD,iFAEE,gBAAiB,AACjB,mBAAoB,AACpB,sBAAwB,CACzB,AACD,yCACE,eAAgB,AAChB,gBAAiB,AACjB,UAAY,CACb,AACD,wDACE,cAAgB,CACjB,AACD,0DACE,cAAgB,CACjB,AACD,2DACE,cAAgB,CACjB,AACD,wDACE,cAAgB,CACjB,AACD,wDACE,cAAgB,CACjB,AACD,4DACE,gBAAiB,AACjB,eAAgB,AAChB,aAAe,CAChB,AACD,2EACE,cAAgB,CACjB,AACD,6EACE,cAAgB,CACjB,AACD,8EACE,cAAgB,CACjB,AACD,2EACE,cAAgB,CACjB,AACD,2EACE,cAAgB,CACjB,AACD,4DACE,aAAe,CAChB,AACD,kCACE,cAAe,AACf,WAAa,CACd,AACD,sCACE,cAAe,AACf,YAAa,AACb,UAAY,CACb","file":"section2.vue","sourcesContent":["\n@import \"../../assets/index/style.css\";\n.section2-list[data-v-221ecde2] {\n  overflow-x: auto;\n  width: 100%;\n  padding-top: 6vw;\n  /*原生滑动*/\n  -webkit-overflow-scrolling: touch;\n}\n.section2-list > ul[data-v-221ecde2] {\n  border-top-color: rgba(185, 185, 185, 0.14);\n  border-top-style: solid;\n  border-top-width: 1px;\n  display: -ms-flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 6vw;\n  width: 380%;\n}\n[data-dpr=\"2\"] .section2-list > ul[data-v-221ecde2] {\n  border-top-width: 1px;\n}\n[data-dpr=\"2.5\"] .section2-list > ul[data-v-221ecde2] {\n  border-top-width: 1px;\n}\n[data-dpr=\"2.75\"] .section2-list > ul[data-v-221ecde2] {\n  border-top-width: 1px;\n}\n[data-dpr=\"3\"] .section2-list > ul[data-v-221ecde2] {\n  border-top-width: 2px;\n}\n[data-dpr=\"4\"] .section2-list > ul[data-v-221ecde2] {\n  border-top-width: 2px;\n}\n.section2-list > ul li[data-v-221ecde2] {\n  margin-right: 10vw;\n  width: 26vw;\n}\n.section2-list > ul li a[data-v-221ecde2],\n.section2-list > ul li img[data-v-221ecde2] {\n  display: block;\n  width: 100%;\n}\n.section2-list > ul li h2[data-v-221ecde2],\n.section2-list > ul li p[data-v-221ecde2] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.section2-list > ul li h2[data-v-221ecde2] {\n  font-size: 16px;\n  padding-top: 3vw;\n  color: #333;\n}\n[data-dpr=\"2\"] .section2-list > ul li h2[data-v-221ecde2] {\n  font-size: 32px;\n}\n[data-dpr=\"2.5\"] .section2-list > ul li h2[data-v-221ecde2] {\n  font-size: 40px;\n}\n[data-dpr=\"2.75\"] .section2-list > ul li h2[data-v-221ecde2] {\n  font-size: 44px;\n}\n[data-dpr=\"3\"] .section2-list > ul li h2[data-v-221ecde2] {\n  font-size: 48px;\n}\n[data-dpr=\"4\"] .section2-list > ul li h2[data-v-221ecde2] {\n  font-size: 64px;\n}\n.section2-list > ul li p.section2-list-intro[data-v-221ecde2] {\n  padding-top: 2vw;\n  font-size: 13px;\n  color: #969696;\n}\n[data-dpr=\"2\"] .section2-list > ul li p.section2-list-intro[data-v-221ecde2] {\n  font-size: 26px;\n}\n[data-dpr=\"2.5\"] .section2-list > ul li p.section2-list-intro[data-v-221ecde2] {\n  font-size: 33px;\n}\n[data-dpr=\"2.75\"] .section2-list > ul li p.section2-list-intro[data-v-221ecde2] {\n  font-size: 36px;\n}\n[data-dpr=\"3\"] .section2-list > ul li p.section2-list-intro[data-v-221ecde2] {\n  font-size: 39px;\n}\n[data-dpr=\"4\"] .section2-list > ul li p.section2-list-intro[data-v-221ecde2] {\n  font-size: 52px;\n}\n.section2-list > ul li p.section2-list-price[data-v-221ecde2] {\n  color: #b4282d;\n}\n.section2-banner[data-v-221ecde2] {\n  display: block;\n  width: 100vw;\n}\n.section2-banner img[data-v-221ecde2] {\n  display: block;\n  height: 24vw;\n  width: 100%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "zfSu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui__ = __webpack_require__("Au9i");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mint_ui__);
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



/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    banner: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: function () {
        return [];
      }
    }
  }
});

/***/ }),

/***/ "zlul":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    swiperData: {
      type: Array,
      default: function () {
        return [];
      }
    }
  }
});

/***/ })

});
//# sourceMappingURL=0.12cea818bc31f0486ba0.js.map