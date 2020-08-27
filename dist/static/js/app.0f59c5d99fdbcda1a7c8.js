webpackJsonp([10],{

/***/ "3ye0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "4C3y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_common__ = __webpack_require__("sf/l");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__("meMj");


const state = {
  token: 0
};

const mutations = {
  [__WEBPACK_IMPORTED_MODULE_1__types__["a" /* CHANGE_TOKEN */]](state, res) {
    state.token = res;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  state,
  mutations
});

/***/ }),

/***/ "AoU9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_common__ = __webpack_require__("sf/l");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__("meMj");



const state = {
  tabIndex: 0
};

const mutations = {
  [__WEBPACK_IMPORTED_MODULE_1__types__["b" /* CHANGE_TABINDEX */]](state, res) {
    state.tabIndex = res;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  state,
  mutations
});

/***/ }),

/***/ "C9xe":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "M8GW":
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

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4ac7606d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("yHzW");
function injectStyle (ssrContext) {
  __webpack_require__("C9xe")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4ac7606d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vuex_store_js__ = __webpack_require__("YtJ0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_api_js__ = __webpack_require__("m4jk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_less__ = __webpack_require__("nrAE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mint_ui__ = __webpack_require__("Au9i");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mint_ui_lib_style_css__ = __webpack_require__("d8/S");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mint_ui_lib_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_mint_ui_lib_style_css__);




 //vuex
 //http请求

 //移动端UI

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_7_mint_ui___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$api = __WEBPACK_IMPORTED_MODULE_5__http_api_js__["a" /* default */];

// 用钩子函数beforeEach()对路由进行判断

__WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */].beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // 需要权限,进一步进行判断
    if (__WEBPACK_IMPORTED_MODULE_4__vuex_store_js__["a" /* default */].state.login.token) {
      // 通过vuex state获取当前的token是否存在
      next();
    } else {
      //如果没有权限,重定向到登录页,进行登录
      next({
        path: '/login'
        // query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
  } else {
    //不需要权限 直接跳转
    next();
  }
});

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_4__vuex_store_js__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */] }
});

/***/ }),

/***/ "RWA7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrap"
  }, [_c('div', {
    staticClass: "spinner"
  }, [_c('div', {
    staticClass: "double-bounce1"
  }), _vm._v(" "), _c('div', {
    staticClass: "double-bounce2"
  })]), _vm._v(" "), _c('p', [_vm._v("正在拼命加载中.....")])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
//按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const Index = resolve => __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("mlqX")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
const Category = resolve => __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("fXvj")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
const CategoryMain = resolve => __webpack_require__.e/* require */(8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("9KMJ")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
const Car = resolve => __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("SeH+")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
const User = resolve => __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("i/Eh")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
const Detail = resolve => __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("/pee")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
const Search = resolve => __webpack_require__.e/* require */(7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("G7FF")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
const Pay = resolve => __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("mZRd")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
const Login = resolve => __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Quw4")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: '首页',
    component: Index
  }, {
    path: '/category',
    name: '分类页',
    redirect: '/category/all',
    component: Category,
    children: [{
      path: '/category/:tab',
      component: CategoryMain
    }]
  }, {
    path: '/car',
    name: '购物车页',
    component: Car
  }, {
    path: '/car/pay',
    name: '支付页',
    component: Pay
  }, {
    path: '/user',
    name: '用户页',
    component: User,
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录才能进入的
    }
  }, {
    path: '/detail',
    name: '详情页',
    component: Detail
  }, {
    path: '/search',
    name: '搜索页',
    component: Search
  }, {
    path: '/login',
    name: '登录页',
    component: Login
  }]
}));

/***/ }),

/***/ "YtJ0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_detail__ = __webpack_require__("yW3m");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_category__ = __webpack_require__("AoU9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_login__ = __webpack_require__("4C3y");
//store.js



// 头部分类




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  modules: {
    detail: __WEBPACK_IMPORTED_MODULE_2__modules_detail__["a" /* default */],
    category: __WEBPACK_IMPORTED_MODULE_3__modules_category__["a" /* default */],
    login: __WEBPACK_IMPORTED_MODULE_4__modules_login__["a" /* default */]
  }
}));

/***/ }),

/***/ "d8/S":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "m4jk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuex_store_js__ = __webpack_require__("YtJ0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");




const api = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create();
api.defaults.baseURL = 'http://api.com';
api.defaults.timeout = 5000;
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
api.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';

// 请求拦截
api.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  __WEBPACK_IMPORTED_MODULE_1__vuex_store_js__["a" /* default */].commit('SET_LOADING', true);
  // 如果有token,添加到请求报文 后台会根据该报文返回status
  if (__WEBPACK_IMPORTED_MODULE_1__vuex_store_js__["a" /* default */].state.login.token) {
    config.headers.Authorization = `token ${__WEBPACK_IMPORTED_MODULE_1__vuex_store_js__["a" /* default */].state.login.token}`;
  }

  return config;
}, function (error) {
  // 对请求错误做些什么
  alert('网络错误,请稍后再试');

  __WEBPACK_IMPORTED_MODULE_1__vuex_store_js__["a" /* default */].commit('SET_LOADING', false);

  return Promise.reject(error);
});

// 添加响应拦截器
api.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // 加到时器主要是为了 展示Loading效果 项目中应去除
  setTimeout(() => {
    __WEBPACK_IMPORTED_MODULE_1__vuex_store_js__["a" /* default */].commit('SET_LOADING', false);
  }, 300);

  return response;
}, function (error) {
  // 对响应错误做点什么
  __WEBPACK_IMPORTED_MODULE_1__vuex_store_js__["a" /* default */].commit('SET_LOADING', false);

  if (errore.response) {

    if (error.response.status == 401) {
      // 如果返回401 即没有权限，跳到登录页重新登录
      __WEBPACK_IMPORTED_MODULE_1__vuex_store_js__["a" /* default */].commit('CHANGE_TOKEN', 0);

      alert('请重新登录');

      __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].replace({
        path: 'login',
        query: { redirect: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].currentRoute.fullPath }
      });
    }
  }

  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["a"] = (api);

/***/ }),

/***/ "meMj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* Detail + Car*/

//Detail父组件中 当前页面商品的数据

const SET_DATAS = 'SET_DATAS';
/* harmony export (immutable) */ __webpack_exports__["c"] = SET_DATAS;


//chose组件选择的颜色
const CHANGE_COL_SELECTED = 'CHANGE_COL_SELECTED';
/* harmony export (immutable) */ __webpack_exports__["d"] = CHANGE_COL_SELECTED;


//chose组件选择的尺寸

const CHANGE_SIZE_SELECTED = 'CHANGE_SIZE_SELECTED';
/* harmony export (immutable) */ __webpack_exports__["e"] = CHANGE_SIZE_SELECTED;


//footer组件中保存添加的商品的数据

const ADD_PRODUCT = 'ADD_PRODUCT';
/* harmony export (immutable) */ __webpack_exports__["f"] = ADD_PRODUCT;


//footer组件中保存购物车数量的数据

const CHANGE_COUNT = 'CHANGE_COUNT';
/* harmony export (immutable) */ __webpack_exports__["g"] = CHANGE_COUNT;


//提交订单后重新设置购物车商品列表,把打钩并提交的商品去掉,即保留unSelectedList
const RESET_CARLIST = 'RESET_CARLIST';
/* harmony export (immutable) */ __webpack_exports__["h"] = RESET_CARLIST;


//提交订单后重新设置购物车商品数量
const RESET_COUNT = 'RESET_COUNT';
/* harmony export (immutable) */ __webpack_exports__["i"] = RESET_COUNT;


// 购物车里打钩的商品

const SET_SELECTEDLIST = 'SET_SELECTEDLIST';
/* unused harmony export SET_SELECTEDLIST */


//购物车里没打钩的商品

const SET_UNSELECTEDLIST = 'SET_UNSELECTEDLIST';
/* unused harmony export SET_UNSELECTEDLIST */


//全局loading状态

const SET_LOADING = 'SET_LOADING';
/* harmony export (immutable) */ __webpack_exports__["j"] = SET_LOADING;


// 改变token(权限)
const CHANGE_TOKEN = 'CHANGE_TOKEN';
/* harmony export (immutable) */ __webpack_exports__["a"] = CHANGE_TOKEN;


// 分类页的aside index
const CHANGE_TABINDEX = 'CHANGE_TABINDEX';
/* harmony export (immutable) */ __webpack_exports__["b"] = CHANGE_TABINDEX;


/***/ }),

/***/ "sf/l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const STORAGE_USER_KEY = 'STORAGE_USER_KEY';
// const STORAGE_CARTLIST_KEY = 'STORAGE_CARTLIST_KEY'
// const STORAGE_QUERYMYLIST_KEY = 'STORAGE_QUERYMYLIST_KEY'

/* harmony default export */ __webpack_exports__["a"] = ({
  // 获取
  getLocal(key = STORAGE_USER_KEY) {
    // console.log('get local operation')
    return JSON.parse(window.localStorage.getItem(key));
  },
  // 设置用
  setLocal(res, key = STORAGE_USER_KEY, isSaveOldData = false) {
    //第三个参数是true的话,会增加数据而不是重新设置,res必须是数组
    if (isSaveOldData) {
      if (this.getLocal(key)) {
        let oldData = this.getLocal(key);
        return window.localStorage.setItem(key, JSON.stringify(oldData.concat(res)));
      }
    }
    return window.localStorage.setItem(key, JSON.stringify(res));
  }
});

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_loading__ = __webpack_require__("y+dn");
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    'v-loading': __WEBPACK_IMPORTED_MODULE_0__common_loading__["a" /* default */]
  },
  computed: {
    fetchLoading() {
      return this.$store.state.detail.fetchLoading;
    }
  }
});

/***/ }),

/***/ "y+dn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loading_vue__ = __webpack_require__("M8GW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00cd680d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_loading_vue__ = __webpack_require__("RWA7");
function injectStyle (ssrContext) {
  __webpack_require__("3ye0")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-00cd680d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loading_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00cd680d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_loading_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "yHzW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view'), _vm._v(" "), _c('v-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.fetchLoading),
      expression: "fetchLoading"
    }]
  })], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "yW3m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_common__ = __webpack_require__("sf/l");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__("meMj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__("7+uW");




// 容器
const state = {
  productDatas: '', //detail父组件请求的当前页面商品数据
  colSelected: 0, //0是index,表示第一个
  sizeSelected: 0, //0是index,表示第一个
  count: 0, //购物车里的商品数量
  carList: '', //购物车的商品列表
  fetchLoading: false, //全局加载状态的Loading
  selectedList: '', //已选择的购物车商品列表
  unSelectedList: '' //未选择的购物车商品列表,提交订单后用它替换carList


  //更改 store 中的状态的唯一方法:提交 mutation
  /*
    购物车逻辑:
        unSelectedList：未打钩的购物车商品列表
        SelectedList：已勾选的购物车商品列表
        carList:购物车商品列表
        当支付成功之后,购物车列表需要减掉SelectedList，留下unSelectedList
        直接用unSelectedList替换当前carList即可
  */
};const mutations = {

  //异步请求的数据
  [__WEBPACK_IMPORTED_MODULE_1__types__["c" /* SET_DATAS */]](state, res) {
    state.productDatas = res;
  },

  //详情页商品颜色的选择
  [__WEBPACK_IMPORTED_MODULE_1__types__["d" /* CHANGE_COL_SELECTED */]](state, res) {
    state.colSelected = res;
  },

  //详情页商品尺寸的选择

  [__WEBPACK_IMPORTED_MODULE_1__types__["e" /* CHANGE_SIZE_SELECTED */]](state, res) {
    state.sizeSelected = res;
  },

  // 向购物车商品列表添加商品
  [__WEBPACK_IMPORTED_MODULE_1__types__["f" /* ADD_PRODUCT */]](state) {
    state.carList = __WEBPACK_IMPORTED_MODULE_0__util_common__["a" /* default */].getLocal('carList');
  },

  //获取当前购物车商品数量
  [__WEBPACK_IMPORTED_MODULE_1__types__["g" /* CHANGE_COUNT */]](state) {
    state.count = __WEBPACK_IMPORTED_MODULE_0__util_common__["a" /* default */].getLocal('count');
  },

  // 重置购物车
  [__WEBPACK_IMPORTED_MODULE_1__types__["h" /* RESET_CARLIST */]](state) {
    state.carList = __WEBPACK_IMPORTED_MODULE_0__util_common__["a" /* default */].getLocal('carList');
  },

  // 重置购物车数量
  [__WEBPACK_IMPORTED_MODULE_1__types__["i" /* RESET_COUNT */]](state) {
    state.count = __WEBPACK_IMPORTED_MODULE_0__util_common__["a" /* default */].getLocal('carList').length;
  },

  // loading开关
  [__WEBPACK_IMPORTED_MODULE_1__types__["j" /* SET_LOADING */]](state, res) {
    state.fetchLoading = res;
  },
  // 购物车里打钩的商品
  ['SET_SELECTEDLIST'](state, res) {
    state.selectedList = __WEBPACK_IMPORTED_MODULE_0__util_common__["a" /* default */].getLocal('selectedList');
  },

  //购物车里没打钩的商品

  ['SET_UNSELECTEDLIST'](state) {
    state.unSelectedList = __WEBPACK_IMPORTED_MODULE_0__util_common__["a" /* default */].getLocal('unSelectedList');
  }

};

let vm = new __WEBPACK_IMPORTED_MODULE_2_vue__["default"]({});

// action提交mutations，不直接更改状态（通过store.dispatch触发）
const actions = {

  // 父组件发送异步请求
  setDatas({ commit }) {
    vm.$api({
      method: 'post',
      url: "/detail"
    }).then(response => {
      commit('SET_DATAS', response.data);
    });
  },

  // 购物车数量增减,true是加,false是减
  setLocalCount({ commit }, bool = true) {
    let count = __WEBPACK_IMPORTED_MODULE_0__util_common__["a" /* default */].getLocal('count') || 0;
    if (bool) {
      __WEBPACK_IMPORTED_MODULE_0__util_common__["a" /* default */].setLocal(++count, 'count');
    } else {
      __WEBPACK_IMPORTED_MODULE_0__util_common__["a" /* default */].setLocal(--count, 'count');
    }
    commit(__WEBPACK_IMPORTED_MODULE_1__types__["g" /* CHANGE_COUNT */]);
  },

  //网购物车列表添加数据
  addCarList({ commit }, res) {
    __WEBPACK_IMPORTED_MODULE_0__util_common__["a" /* default */].setLocal(res, 'carList', true);
    commit(__WEBPACK_IMPORTED_MODULE_1__types__["f" /* ADD_PRODUCT */]);
  },

  //重新设置购物车商品列表,把打钩并提交的商品去掉,即保留unSelectedList

  resetCarList({ commit, getters }) {
    const unSelectedList = __WEBPACK_IMPORTED_MODULE_0__util_common__["a" /* default */].getLocal('unSelectedList');
    __WEBPACK_IMPORTED_MODULE_0__util_common__["a" /* default */].setLocal(unSelectedList, 'carList');
    commit(__WEBPACK_IMPORTED_MODULE_1__types__["h" /* RESET_CARLIST */]);
  },
  // 重置购物车数量Count,即没打钩的商品的数量
  resetCount({ commit, getters }) {
    const count = __WEBPACK_IMPORTED_MODULE_0__util_common__["a" /* default */].getLocal('unSelectedList').length;
    __WEBPACK_IMPORTED_MODULE_0__util_common__["a" /* default */].setLocal(count, 'count');
    commit(__WEBPACK_IMPORTED_MODULE_1__types__["i" /* RESET_COUNT */]);
  },

  // 删除购物车列表的某一项 （用新的数组直接替换）
  cutCarList({ commit }, res) {
    __WEBPACK_IMPORTED_MODULE_0__util_common__["a" /* default */].setLocal(res, 'carList');
    commit(__WEBPACK_IMPORTED_MODULE_1__types__["h" /* RESET_CARLIST */]);
  },

  // 分别保存打钩的商品和为打钩的商品
  setSelectedList({ commit, getters }) {
    __WEBPACK_IMPORTED_MODULE_0__util_common__["a" /* default */].setLocal(getters.selectedList, 'selectedList');
    commit('SET_SELECTEDLIST');
    __WEBPACK_IMPORTED_MODULE_0__util_common__["a" /* default */].setLocal(getters.unSelectedList, 'unSelectedList');
    commit('SET_UNSELECTEDLIST');
  }

};

// 如同计算属性,处理state的某个状态
const getters = {

  selectedList(state) {
    // choseBool为真的商品 即打钩的商品
    if (state.carList !== '') {
      let arr = state.carList.filter(ele => {
        return ele.choseBool == true;
      });
      return arr;
    }
  },

  unSelectedList(state) {
    if (state.carList !== '') {
      let arr = state.carList.filter(ele => {
        return ele.choseBool == false;
      });
      return arr;
    }
  }

};

/* harmony default export */ __webpack_exports__["a"] = ({
  state,
  actions,
  getters,
  mutations
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.0f59c5d99fdbcda1a7c8.js.map