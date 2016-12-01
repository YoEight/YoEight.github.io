webpackJsonp([1],{

/***/ 381:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(356);
	
	var _HomeView = __webpack_require__(376);
	
	var _HomeView2 = _interopRequireDefault(_HomeView);
	
	var _home = __webpack_require__(382);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	  loadPosts: _home.actions.loadPosts
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    homepage: state.homepage
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_HomeView2.default);

/***/ },

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.loadPosts = exports.POSTS_LOADING_FAILED = exports.POSTS_LOADED = undefined;
	
	var _defineProperty2 = __webpack_require__(383);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _ACTION_HANDLERS;
	
	exports.default = homeReducer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var POSTS_LOADED = exports.POSTS_LOADED = 'POSTS_LOADED';
	var POSTS_LOADING_FAILED = exports.POSTS_LOADING_FAILED = 'POSTS_LOADING_FAILED';
	
	var loadPosts = exports.loadPosts = function loadPosts() {
	  return function (dispatch, getState) {
	    return fetch('https://api.github.com/repos/YoEight/website-posts/contents/').then(function (response) {
	      return response.json();
	    }).then(function (posts) {
	      dispatch({
	        type: POSTS_LOADED,
	        posts: posts.reverse().map(function (p) {
	          return { name: p.name };
	        })
	      });
	    }).catch(function () {
	      dispatch({
	        type: POSTS_LOADING_FAILED
	      });
	    });
	  };
	};
	
	var actions = exports.actions = {
	  loadPosts: loadPosts
	};
	
	var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, (0, _defineProperty3.default)(_ACTION_HANDLERS, POSTS_LOADED, function (state, action) {
	  return {
	    posts: action.posts
	  };
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, POSTS_LOADING_FAILED, function (state, action) {
	  return {
	    loadingFailed: true
	  };
	}), _ACTION_HANDLERS);
	
	var initialState = {
	  notLoaded: true
	};
	
	function homeReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  var handler = ACTION_HANDLERS[action.type];
	
	  return handler ? handler(state, action) : state;
	}

/***/ },

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(311);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ }

});
//# sourceMappingURL=1.homepage.d079311eeb9d85cf9387.js.map