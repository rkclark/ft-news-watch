/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	var define = false;
	
	// Require module
	__webpack_require__(1);
	__webpack_require__(15);
	__webpack_require__(16);
	
	// Wait until the page has loaded
	if (document.readyState === 'interactive' || document.readyState === 'complete') {
		document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
	}
	document.addEventListener('DOMContentLoaded', function () {
		// Dispatch a custom event that will tell all required modules to initialise
		document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcJsHeader = __webpack_require__(3);
	
	var _srcJsHeader2 = _interopRequireDefault(_srcJsHeader);
	
	var define = false;
	
	var constructAll = function constructAll() {
		_srcJsHeader2['default'].init();
		document.removeEventListener('o.DOMContentLoaded', constructAll);
	};
	
	document.addEventListener('o.DOMContentLoaded', constructAll);
	
	exports['default'] = _srcJsHeader2['default'];
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _search = __webpack_require__(4);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _mega = __webpack_require__(9);
	
	var _mega2 = _interopRequireDefault(_mega);
	
	var _drawer = __webpack_require__(10);
	
	var _drawer2 = _interopRequireDefault(_drawer);
	
	var _subnav = __webpack_require__(11);
	
	var _subnav2 = _interopRequireDefault(_subnav);
	
	var _sticky = __webpack_require__(14);
	
	var _sticky2 = _interopRequireDefault(_sticky);
	
	var define = false;
	
	var Header = (function () {
		function Header(headerEl) {
			_classCallCheck(this, Header);
	
			if (!headerEl) {
				headerEl = document.querySelector('[data-o-component="o-header"]');
			} else if (typeof headerEl === 'string') {
				headerEl = document.querySelector(headerEl);
			}
	
			if (headerEl.hasAttribute('data-o-header--js')) {
				return;
			}
	
			this.headerEl = headerEl;
	
			_search2['default'].init(this.headerEl);
			_mega2['default'].init(this.headerEl);
			_drawer2['default'].init(this.headerEl);
			_subnav2['default'].init(this.headerEl);
			_sticky2['default'].init(this.headerEl);
	
			this.headerEl.removeAttribute('data-o-header--no-js');
			this.headerEl.setAttribute('data-o-header--js', '');
		}
	
		_createClass(Header, null, [{
			key: 'init',
			value: function init(rootEl) {
				if (!rootEl) {
					rootEl = document.body;
				}
				if (!(rootEl instanceof HTMLElement)) {
					rootEl = document.querySelector(rootEl);
				}
				if (/\bo-header\b/.test(rootEl.getAttribute('data-o-component'))) {
					return new Header(rootEl);
				}
	
				return [].map.call(rootEl.querySelectorAll('[data-o-component="o-header"]'), function (el) {
					if (!el.hasAttribute('data-o-header--js')) {
						return new Header(el);
					}
				}).filter(function (header) {
					return header !== undefined;
				});
			}
		}]);
	
		return Header;
	})();
	
	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _oToggle = __webpack_require__(5);
	
	var _oToggle2 = _interopRequireDefault(_oToggle);
	
	var define = false;
	
	function init(headerEl) {
		var target = headerEl.querySelector('[data-o-header-search]');
		var controls = target && headerEl.querySelectorAll('[aria-controls="' + target.id + '"]');
	
		if (controls === null || controls.length === 0) {
			return;
		}
	
		var opening = [];
	
		var callback = function callback(state, e) {
			if (state === 'open') {
				// record the opening control
				opening.push(e.currentTarget);
				target.querySelector('[name="q"]').focus();
			} else {
				// re-focus opening control
				opening.length && opening.pop().focus();
			}
		};
	
		for (var i = 0, len = controls.length; i < len; i++) {
			new _oToggle2['default'](controls[i], { target: target, callback: callback });
		}
	}
	
	exports['default'] = { init: init };
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcJsToggle = __webpack_require__(7);
	
	var _srcJsToggle2 = _interopRequireDefault(_srcJsToggle);
	
	var define = false;
	
	var constructAll = function constructAll() {
		_srcJsToggle2['default'].init();
		document.removeEventListener('o.DOMContentLoaded', constructAll);
	};
	
	document.addEventListener('o.DOMContentLoaded', constructAll);
	
	exports['default'] = _srcJsToggle2['default'];
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _target = __webpack_require__(8);
	
	var _target2 = _interopRequireDefault(_target);
	
	var define = false;
	
	var Toggle = (function () {
		function Toggle(toggleEl, config) {
			_classCallCheck(this, Toggle);
	
			if (!Toggle._targets) {
				Toggle._targets = new Map();
			}
	
			if (!toggleEl) {
				return;
			} else if (!(toggleEl instanceof HTMLElement)) {
				toggleEl = document.querySelector(toggleEl);
			}
	
			if (toggleEl.hasAttribute('data-o-toggle--js')) {
				return;
			}
	
			if (!config) {
				config = {};
				// Try to get config set declaratively on the element
				Array.prototype.forEach.call(toggleEl.attributes, function (attr) {
					if (attr.name.indexOf('data-o-toggle') === 0) {
						// Remove the prefix part of the data attribute name
						var key = attr.name.replace('data-o-toggle-', '');
						try {
							// If it's a JSON, a boolean or a number, we want it stored like that, and not as a string
							// We also replace all ' with " so JSON strings are parsed correctly
							config[key] = JSON.parse(attr.value.replace(/\'/g, '"'));
						} catch (e) {
							config[key] = attr.value;
						}
					}
				});
			}
	
			this.callback = config.callback;
			if (typeof this.callback === 'string') {
				this.callback = new Function(this.callback);
			}
	
			this.toggleEl = toggleEl;
	
			if (this.toggleEl.nodeName === 'A') {
				this.toggleEl.setAttribute('role', 'button');
			}
	
			this.toggle = this.toggle.bind(this);
			this.toggleEl.addEventListener('click', this.toggle);
	
			this.toggleEl.setAttribute('data-o-toggle--js', 'true');
	
			this.targetEl = config.target;
			if (!(this.targetEl instanceof HTMLElement)) {
				this.targetEl = document.querySelector(this.targetEl);
			}
	
			if (Toggle._targets.get(this.targetEl) === undefined) {
				this.target = new Toggle.Target(this);
				Toggle._targets.set(this.targetEl, this.target);
			} else {
				this.target = Toggle._targets.get(this.targetEl);
			}
	
			this.target.addToggle(this);
			this.target.close();
		}
	
		_createClass(Toggle, [{
			key: 'open',
			value: function open() {
				this.toggleEl.setAttribute('aria-expanded', 'true');
			}
		}, {
			key: 'close',
			value: function close() {
				this.toggleEl.setAttribute('aria-expanded', 'false');
			}
	
			// toggle is bound to the Toggle instance in the constructor
		}, {
			key: 'toggle',
			value: function toggle(e) {
	
				this.target.toggle();
	
				if (e) {
					e.preventDefault();
				}
	
				if (this.callback) {
					var stateName = this.target.isOpen() ? 'open' : 'close';
					this.callback(stateName, e);
				}
			}
		}, {
			key: 'destroy',
			value: function destroy() {
				this.toggleEl.removeEventListener('click', this.toggle);
				this.toggleEl.removeAttribute('aria-expanded');
				this.toggleEl.removeAttribute('role');
				this.toggleEl.removeAttribute('data-o-toggle--js');
	
				this.target.removeToggle(this);
	
				this.target = undefined;
				this.toggleEl = undefined;
				this.callback = undefined;
			}
		}], [{
			key: 'init',
			value: function init(el, config) {
				if (!el) {
					el = document.body;
				} else if (!(el instanceof HTMLElement)) {
					el = document.querySelector(el);
				}
				var toggleEls = el.querySelectorAll('[data-o-component="o-toggle"]');
				var toggles = [];
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;
	
				try {
					for (var _iterator = toggleEls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var toggleEl = _step.value;
	
						if (!toggleEl.hasAttribute('data-o-toggle--js')) {
							toggles.push(new Toggle(toggleEl, config));
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator['return']) {
							_iterator['return']();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
	
				return toggles;
			}
		}]);
	
		return Toggle;
	})();
	
	;
	
	Toggle.Target = _target2['default'];
	exports['default'] = Toggle;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var define = false;
	
	var Target = (function () {
		function Target(toggle) {
			_classCallCheck(this, Target);
	
			this.targetEl = toggle.targetEl;
			this.toggles = [];
		}
	
		_createClass(Target, [{
			key: 'addToggle',
			value: function addToggle(toggle) {
				this.toggles.push(toggle);
			}
		}, {
			key: 'removeToggle',
			value: function removeToggle(toggle) {
				var togglePosition = this.toggles.indexOf(toggle);
				this.toggles = this.toggles.slice(0, togglePosition).concat(this.toggles.slice(togglePosition + 1));
				if (this.toggles.length === 0) {
					// If that was the last/only toggle that controlled this target then ensure
					// this target is open so it doesn't get stuck in the closed position
					this.open();
				}
			}
		}, {
			key: 'open',
			value: function open() {
				this.targetEl.setAttribute('aria-hidden', 'false');
				this.targetEl.classList.add('o-toggle--active');
				// Set every toggle that controls this target to be open
				this.toggles.forEach(function (toggle) {
					toggle.open();
				});
			}
		}, {
			key: 'close',
			value: function close() {
				this.targetEl.setAttribute('aria-hidden', 'true');
				this.targetEl.classList.remove('o-toggle--active');
	
				// Set every toggle that controls this target to be closed
				this.toggles.forEach(function (toggle) {
					toggle.close();
				});
			}
		}, {
			key: 'toggle',
			value: function toggle() {
				if (this.isOpen()) {
					this.close();
				} else {
					this.open();
				}
			}
		}, {
			key: 'isOpen',
			value: function isOpen() {
				return this.targetEl.classList.contains('o-toggle--active');
			}
		}]);
	
		return Target;
	})();
	
	;
	exports['default'] = Target;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var define = false;
	
	var INTENT_ENTER = 300;
	var INTENT_LEAVE = 400;
	
	var expanded = [];
	
	function addEvents(parent, menu) {
		var timeout = undefined;
	
		parent.addEventListener('mouseenter', function () {
			clearTimeout(timeout);
	
			if (isOpen(menu)) {
				return;
			}
	
			timeout = setTimeout(function () {
				if (expanded.length) {
					hide(expanded[0]);
					show(menu, false);
				} else {
					show(menu, true);
				}
			}, INTENT_ENTER);
		});
	
		parent.addEventListener('mouseleave', function () {
			clearTimeout(timeout);
			timeout = setTimeout(function () {
				return isOpen(menu) && hide(menu);
			}, INTENT_LEAVE);
		});
	}
	
	function isOpen(menu) {
		return expanded.indexOf(menu) !== -1;
	}
	
	function show(menu, animate) {
		if (animate) {
			menu.classList.add('o-header__mega--animation');
		}
	
		menu.setAttribute('aria-hidden', 'false');
		menu.setAttribute('aria-expanded', 'true');
	
		menu.dispatchEvent(new CustomEvent('oHeader.MegaMenuShow', { bubbles: true }));
	
		expanded.push(menu);
	}
	
	function hide(menu) {
		menu.classList.remove('o-header__mega--animation');
		menu.setAttribute('aria-hidden', 'true');
		menu.setAttribute('aria-expanded', 'false');
	
		menu.dispatchEvent(new CustomEvent('oHeader.MegaMenuHide', { bubbles: true }));
	
		expanded.splice(expanded.indexOf(menu), 1);
	}
	
	function init(headerEl) {
		var menus = Array.from(headerEl.querySelectorAll('[data-o-header-mega]'));
		var parents = menus.map(function (menu) {
			return menu.parentNode;
		});
	
		menus.forEach(function (menu) {
			menu.setAttribute('aria-hidden', 'true');
			menu.setAttribute('aria-expanded', 'false');
		});
	
		parents.forEach(function (parent, i) {
			return addEvents(parent, menus[i]);
		});
	}
	
	exports['default'] = { init: init, show: show, hide: hide };
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	var _oToggle = __webpack_require__(5);
	
	var _oToggle2 = _interopRequireDefault(_oToggle);
	
	var define = false;
	
	var LISTEN_DELAY = 300;
	var INTENT_DELAY = 1000;
	
	function handleCloseEvents(scope, callback) {
		var timeout = undefined;
	
		var handleKeydown = function handleKeydown(e) {
			if (e.keyCode === 27) {
				callback();
			}
		};
	
		var handleClick = function handleClick(e) {
			if (!scope.contains(e.target)) {
				callback();
			}
		};
	
		var handleMouseenter = function handleMouseenter() {
			clearTimeout(timeout);
		};
	
		var handleMouseleave = function handleMouseleave() {
			// IE 11 mobile fires a mouseleave event when the search box gets focus. This means when the user tries
			// to use the search box, it disappears because the drawer closes.
			// Mouseout events should only occur when the drawer takes up less than 100% of the window, so we can ignore
			// any events triggered if the width of the drawer is equal to or bigger than the window.innerwidth
			if (window.innerWidth >= scope.offsetWidth) {
				timeout = setTimeout(callback, INTENT_DELAY);
			}
		};
	
		var handleFocus = function handleFocus(e) {
			var target = e.relatedTarget || e.target;
	
			if (!scope.contains(target)) {
				scope.focus();
			}
		};
	
		var removeEvents = function removeEvents() {
			clearTimeout(timeout);
	
			scope.removeEventListener('mouseenter', handleMouseenter);
			scope.removeEventListener('mouseleave', handleMouseleave);
			document.removeEventListener('click', handleClick);
			document.removeEventListener('touchstart', handleClick);
			document.removeEventListener('keydown', handleKeydown);
			document.removeEventListener('focusin', handleFocus);
			document.removeEventListener('focusout', handleFocus);
		};
	
		var addEvents = function addEvents() {
			scope.addEventListener('mouseenter', handleMouseenter);
			scope.addEventListener('mouseleave', handleMouseleave);
			document.addEventListener('click', handleClick);
			document.addEventListener('touchstart', handleClick);
			document.addEventListener('keydown', handleKeydown);
	
			// Firefox doesn't support focusin or focusout
			// https://bugzilla.mozilla.org/show_bug.cgi?id=687787
			document.addEventListener('focusin', handleFocus);
			document.addEventListener('focusout', handleFocus);
		};
	
		return { addEvents: addEvents, removeEvents: removeEvents, handleMouseleave: handleMouseleave };
	}
	
	function addDrawerToggles(drawerEl) {
		var controls = [].concat(_toConsumableArray(document.body.querySelectorAll('[aria-controls="' + drawerEl.id + '"]')));
	
		var handleClose = undefined;
		var openingControl = undefined;
	
		function toggleCallback(state, e) {
			if (state === 'close') {
				handleClose.removeEvents();
	
				openingControl.focus();
			} else {
				// don't capture the initial click or accidental double taps etc.
				// we could use transitionend but scoping is tricky and it needs prefixing and...
				setTimeout(handleClose.addEvents, LISTEN_DELAY);
	
				// record the opening control so we can send focus back to it when closing the drawer
				openingControl = e.currentTarget;
	
				// aria-controls is only supported by JAWS.
				// In a setTimeout callback to avoid flickering transitions in Chrome (v54)
				setTimeout(function () {
					return drawerEl.focus();
				});
			}
	
			drawerEl.classList.toggle('o-header__drawer--closing', state === 'close');
			drawerEl.classList.toggle('o-header__drawer--opening', state === 'open');
		}
	
		controls.forEach(function (control) {
			var drawerToggle = new _oToggle2['default'](control, {
				target: drawerEl,
				callback: toggleCallback
			});
	
			// Both toggles have the same target, so the toggle function will be the same
			// If there's a separate handleClose instance for each toggle, removeEvents doesn't work
			// when the close toggle is clicked
			if (!handleClose) {
				handleClose = handleCloseEvents(drawerEl, drawerToggle.toggle);
			}
		});
	
		// make the drawer programmatically focusable
		drawerEl.tabIndex = -1;
	}
	
	function addSubmenuToggles(drawerEl) {
		var submenus = drawerEl.querySelectorAll('[id^="o-header-drawer-child-"]');
	
		Array.from(submenus).forEach(function (submenu) {
			var button = drawerEl.querySelector('[aria-controls="' + submenu.id + '"]');
	
			submenu.setAttribute('aria-hidden', 'true');
	
			new _oToggle2['default'](button, {
				target: submenu,
				callback: function callback(state) {
					button.textContent = button.textContent.replace(/fewer|more/, state === 'open' ? 'fewer' : 'more');
				}
			});
		});
	}
	
	function init() {
		var drawerEl = document.body.querySelector('[data-o-header-drawer]');
		if (!drawerEl) {
			return;
		}
		addSubmenuToggles(drawerEl);
		addDrawerToggles(drawerEl);
	
		drawerEl.removeAttribute('data-o-header-drawer--no-js');
		drawerEl.setAttribute('data-o-header-drawer--js', 'true');
	}
	
	exports['default'] = { init: init, handleCloseEvents: handleCloseEvents };
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _oUtils = __webpack_require__(12);
	
	var oUtils = _interopRequireWildcard(_oUtils);
	
	var define = false;
	
	function init(headerEl) {
		var subnav = headerEl.querySelector('[data-o-header-subnav]');
	
		if (subnav === null) {
			return;
		}
	
		var wrapper = subnav.querySelector('[data-o-header-subnav-wrapper]');
		var buttons = Array.from(subnav.getElementsByTagName('button'));
	
		var scrollWidth = undefined;
		var clientWidth = undefined;
	
		function direction(button) {
			return button.className.match(/left|right/).pop();
		}
	
		function scrollable() {
			scrollWidth = wrapper.scrollWidth;
			clientWidth = wrapper.clientWidth;
	
			buttons.forEach(function (button) {
				if (direction(button) === 'left') {
					button.disabled = wrapper.scrollLeft === 0;
				} else {
					var remaining = scrollWidth - clientWidth - wrapper.scrollLeft;
					// Allow a little difference as scrollWidth is fast, not accurate.
					button.disabled = remaining <= 1;
				}
			});
		}
	
		function scroll(e) {
			var distance = 100;
	
			if (direction(e.currentTarget) === 'left') {
				distance = (wrapper.scrollLeft > distance ? distance : wrapper.scrollLeft) * -1;
			} else {
				var remaining = scrollWidth - clientWidth - wrapper.scrollLeft;
				distance = remaining > distance ? distance : remaining;
			}
	
			wrapper.scrollLeft = wrapper.scrollLeft + distance;
	
			scrollable();
		}
	
		wrapper.addEventListener('scroll', oUtils.throttle(scrollable, 100));
		window.addEventListener('oViewport.resize', scrollable);
	
		buttons.forEach(function (button) {
			button.onclick = scroll;
		});
	
		scrollable();
	}
	
	module.exports = { init: init };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13);

/***/ },
/* 13 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var define = false;
	
	/**
	*
	* Debounces function so it is only called after n milliseconds
	* without it not being called
	*
	* @example
	* Utils.debounce(myFunction() {}, 100);
	*
	* @param {Function} func - Function to be debounced
	* @param {number} wait - Time in miliseconds
	*
	* @returns {Function} - Debounced function
	*/
	function debounce(func, wait) {
		var timeout = undefined;
		return function () {
			var _this = this;
	
			var args = arguments;
			var later = function later() {
				timeout = null;
				func.apply(_this, args);
			};
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		};
	};
	
	/**
	*
	* Throttle function so it is only called once every n milliseconds
	*
	* @example
	* Utils.throttle(myFunction() {}, 100);
	*
	* @param {Function} func - Function to be throttled
	* @param {number} wait - Time in miliseconds
	*
	* @returns {Function} - Throttled function
	*/
	function throttle(func, wait) {
		var timeout = undefined;
		return function () {
			var _this2 = this;
	
			if (timeout) {
				return;
			}
			var args = arguments;
			var later = function later() {
				timeout = null;
				func.apply(_this2, args);
			};
	
			timeout = setTimeout(later, wait);
		};
	};
	
	exports.debounce = debounce;
	exports.throttle = throttle;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _oUtils = __webpack_require__(12);
	
	var define = false;
	
	function init(headerEl) {
		if (!headerEl.hasAttribute('data-o-header--sticky')) {
			return;
		}
	
		var viewportOffset = undefined;
		var lastScrollDepth = undefined;
		var lastAnimationFrame = undefined;
	
		function handleFrame() {
			// sticky el will appear when scrolled down from page top to
			// (arbitrarily) > half the viewport height
			var scrollDepth = window.pageYOffset || window.scrollY;
			var isActive = scrollDepth > viewportOffset;
	
			headerEl.classList.toggle('o-header--sticky-active', isActive);
	
			// allow a little wiggling room so we don't get too hasty toggling up/down state
			if (Math.abs(scrollDepth - lastScrollDepth) > 20) {
				var isScrollingDown = lastScrollDepth < scrollDepth;
				headerEl.classList.toggle('o-header--sticky-scroll-down', isActive && isScrollingDown);
				headerEl.classList.toggle('o-header--sticky-scroll-up', isActive && !isScrollingDown);
			}
	
			lastScrollDepth = scrollDepth;
		}
	
		function startLoop() {
			viewportOffset = window.innerHeight / 2;
	
			lastAnimationFrame = window.requestAnimationFrame(function () {
				handleFrame();
				startLoop();
			});
		}
	
		function stopLoop() {
			lastAnimationFrame && window.cancelAnimationFrame(lastAnimationFrame);
		}
	
		function scrollStart() {
			window.removeEventListener('scroll', scrollStart);
			window.addEventListener('scroll', debouncedScrollEnd);
			startLoop();
		}
	
		function scrollEnd() {
			stopLoop();
			window.removeEventListener('scroll', debouncedScrollEnd);
			window.addEventListener('scroll', scrollStart);
		}
	
		var debouncedScrollEnd = (0, _oUtils.debounce)(scrollEnd, 300);
	
		window.addEventListener('scroll', scrollStart);
	
		handleFrame();
	};
	
	exports['default'] = { init: init };
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {



/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17);

/***/ },
/* 17 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	var define = false;
	
	/*global module*/
	
	var months = '["' + 'January,February,March,April,May,June,July,August,September,October,November,December'.split(',').join('","') + '"]';
	var days = '["' + 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(',').join('","') + '"]';
	var formats = {
		datetime: 'MMMM d, yyyy h:mm a',
		date: 'MMMM d, yyyy'
	};
	
	var compiledTemplates = {};
	
	/**
	 * See http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html for formatting conventions used
	 *
	 *Comments indicate the value returned for 3.05 pm on Tuesday 4th February 2014
	*/
	var formatReplacementsMap = {
		MMMM: 'months[date.getMonth()]', // e.g. February
		MMM: 'months[date.getMonth()].substr(0,3)', // Feb
		MM: 'pad2(date.getMonth() + 1, 2)', // 02
		M: '(date.getMonth() + 1)', // 2
		yyyy: 'date.getFullYear()', // 2014
		yy: '(""+date.getFullYear()).substr(-2, 2)', // 14
		EEEE: 'days[date.getDay()]', // Tuesday
		EEE: 'days[date.getDay()].substr(0,3)', // Tue
		d: 'date.getDate()', // 4
		dd: 'pad2(date.getDate())', // 04
		m: 'date.getMinutes()', // 5
		mm: 'pad2(date.getMinutes())', // 05
		h: '(((date.getHours() + 11) % 12) + 1)', // 3
		hh: 'pad2(((date.getHours() + 11) % 12) + 1)', // 03
		H: 'date.getHours()', // 15
		HH: 'pad2(date.getHours())', // 15
		a: '(date.getHours() >= 12 ? "pm" : "am")' // pm
	};
	
	var inSeconds = {
		minute: 60,
		hour: 60 * 60,
		day: 24 * 60 * 60,
		week: 7 * 24 * 60 * 60,
		month: 60 * 60 * 24 * 30,
		year: 365 * 24 * 60 * 60
	};
	
	var interval = undefined;
	
	function ODate(rootEl) {
		var _this = this;
	
		if (!rootEl) {
			rootEl = document.body;
		} else if (!(rootEl instanceof HTMLElement)) {
			rootEl = document.querySelector(rootEl);
		}
	
		if (rootEl.getAttribute('data-o-component') === "o-date") {
			this.el = rootEl;
		} else {
			this.el = rootEl.querySelector('[data-o-component~="o-date"]');
		}
	
		if (this.el !== undefined) {
			document.body.addEventListener('oDate.update', function () {
				_this.update();
			});
	
			this.update();
		}
	
		if (!interval) {
			interval = setInterval(function () {
				document.body.dispatchEvent(new CustomEvent('oDate.update'));
			}, 60000);
		}
	}
	
	ODate.prototype.update = function () {
		var el = this.el;
	
		var date = el.getAttribute('datetime');
		var format = el.getAttribute('data-o-date-format');
	
		var printer = el.querySelector('.o-date__printer') || el;
		var hasTextNode = printer.firstChild && printer.firstChild.nodeType === 3;
	
		if (date) {
			date = ODate.toDate(date);
		} else if (hasTextNode) {
			// Only define new date if printer is empty
			date = new Date();
		}
	
		if (!date) return;
	
		var dateString = undefined;
	
		if (format === 'today-or-yesterday-or-nothing') {
			dateString = ODate.asTodayOrYesterdayOrNothing(date);
		} else if (format === 'date-only') {
			dateString = ODate.format(date, 'date');
		} else if (format === 'time-ago-limit-4-hours') {
			dateString = ODate.timeAgo(date, { limit: 4 * inSeconds.hour });
		} else if (format === 'time-ago-abbreviated-limit-4-hours') {
			dateString = ODate.timeAgo(date, { abbreviated: true, limit: 4 * inSeconds.hour });
		} else if (format === 'time-ago-no-seconds') {
			dateString = ODate.timeAgoNoSeconds(date);
		} else if (format !== null) {
			dateString = ODate.format(date, format);
		} else {
			dateString = ODate.ftTime(date);
		}
	
		// To avoid triggering a parent live region unnecessarily
		// <https://github.com/Financial-Times/o-date/pull/43>
		if (hasTextNode) {
			printer.firstChild.nodeValue = dateString;
		} else {
			printer.innerHTML = dateString;
		}
	
		el.title = ODate.format(date, 'datetime');
		el.setAttribute('data-o-date-js', '');
		el.setAttribute('aria-label', dateString);
	};
	
	function compile(format) {
		var tpl = formats[format] || format;
	
		var funcString = 'var months= ' + months + ', days= ' + days + ';';
		funcString += 'function pad2 (number) {return ("0" + number).slice(-2)}';
		funcString += 'return "' + tpl.replace(/\\?[a-z]+/ig, function (match) {
			if (match.charAt(0) === '\\') {
				return match.substr(1);
			}
			var replacer = formatReplacementsMap[match];
	
			return replacer ? '" + ' + replacer + ' + "' : match;
		}) + '"';
	
		return compiledTemplates[format] = new Function('date', funcString); // jshint ignore:line
	}
	
	ODate.toDate = function (date) {
		date = date instanceof Date ? date : new Date(date);
		if (date.toString() !== 'Invalid Date') {
			return date;
		}
	};
	
	ODate.format = function (date, dateFormat) {
		dateFormat = dateFormat || 'datetime';
		var tpl = compiledTemplates[dateFormat] || compile(dateFormat);
		date = ODate.toDate(date);
		return date && tpl(date);
	};
	
	ODate.getSecondsBetween = function (time, otherTime) {
		return Math.round((time - otherTime) / 1000);
	};
	
	ODate.ftTime = function (dateObj) {
		var now = new Date();
		var interval = ODate.getSecondsBetween(now, dateObj);
		var dateString = undefined;
	
		// If the date will occur in the next 5 minutes. This check is to allow for
		// reasonably differences in machine clocks.
		if (ODate.isNearFuture(interval)) {
			dateString = 'just now';
	
			// If it's beyond 5 minutes, fall back to printing the whole date, the machine
			// clock could be way out.
		} else if (ODate.isFarFuture(interval)) {
				dateString = ODate.format(dateObj, 'date');
	
				// Relative times for today or within the last 4 hours
			} else if (ODate.isToday(dateObj, now, interval) || interval < 4 * inSeconds.hour) {
					dateString = ODate.timeAgo(dateObj, interval);
	
					// 'Yesterday' for dates that occurred yesterday
				} else if (ODate.isYesterday(dateObj, now, interval)) {
						dateString = 'yesterday';
	
						// Else print the date
					} else {
							dateString = ODate.format(dateObj, 'date');
						}
	
		return dateString;
	};
	
	ODate.isNearFuture = function (interval) {
		// If the interval within the next 5 minutes
		return interval < 0 && interval > -(5 * inSeconds.minute);
	};
	
	ODate.isFarFuture = function (interval) {
		// If the interval is further in the future than 5 minutes
		return interval < -(5 * inSeconds.minute);
	};
	
	ODate.isToday = function (date, now, interval) {
		var within24Hours = interval < inSeconds.day;
		var sameDayOfWeek = now.getDay() === date.getDay();
		return within24Hours && sameDayOfWeek;
	};
	
	ODate.isYesterday = function (date, now, interval) {
		var within48Hours = interval < 2 * inSeconds.day;
		var consecutiveDaysOfTheWeek = now.getDay() === date.getDay() + 1;
		return within48Hours && consecutiveDaysOfTheWeek;
	};
	
	ODate.timeAgo = function (date, interval, options) {
	
		date = ODate.toDate(date);
		if (!date) return;
	
		// Accept an interval argument for backwards compatibility
		if (arguments.length === 2 && typeof interval === 'object') {
			options = interval;
			interval = options.interval;
		}
	
		// Default the interval option to the time since the given date
		if (!interval) {
			interval = ODate.getSecondsBetween(new Date(), date);
		}
	
		// If a limit has been supplied and the interval is longer ago than that limit
		if (options && options.limit > 0 && (!interval || interval > options.limit)) {
			return '';
		}
	
		var abbreviated = options ? options.abbreviated : false;
	
		if (interval < inSeconds.minute) {
			return (abbreviated ? interval + 's' : interval + ' seconds') + ' ago';
		} else if (interval < 1.5 * inSeconds.minute) {
			return (abbreviated ? '1m' : 'a minute') + ' ago';
		} else if (interval < 59 * inSeconds.minute) {
			return '' + Math.round(interval / inSeconds.minute) + (abbreviated ? 'm' : ' minutes') + ' ago';
		} else if (interval < 1.5 * inSeconds.hour) {
			return (abbreviated ? '1h' : 'an hour') + ' ago';
		} else if (interval < 22 * inSeconds.hour) {
			return '' + Math.round(interval / inSeconds.hour) + (abbreviated ? 'h' : ' hours') + ' ago';
		} else if (interval < 1.5 * inSeconds.day) {
			return (abbreviated ? '1d' : 'a day') + ' ago';
		} else if (interval < 25 * inSeconds.day) {
			return '' + Math.round(interval / inSeconds.day) + (abbreviated ? 'd' : ' days') + ' ago';
		} else if (interval < 45 * inSeconds.day) {
			return (abbreviated ? '1mth' : 'a month') + ' ago';
		} else if (interval < 345 * inSeconds.day) {
			return '' + Math.round(interval / inSeconds.month) + (abbreviated ? 'mth' : ' months') + ' ago';
		} else if (interval < 547 * inSeconds.day) {
			return (abbreviated ? '1y' : 'a year') + ' ago';
		} else {
			return '' + Math.max(2, Math.floor(interval / inSeconds.year)) + (abbreviated ? 'y' : ' years') + ' ago';
		}
	};
	
	ODate.asTodayOrYesterdayOrNothing = function (date) {
	
		if (!date) return;
	
		var now = new Date();
		var interval = ODate.getSecondsBetween(now, date);
	
		var dateString = undefined;
	
		// If this was less than a day ago
		if (ODate.isToday(date, now, interval)) {
			dateString = 'today';
		} else if (ODate.isYesterday(date, now, interval)) {
			dateString = 'yesterday';
		} else {
			dateString = '';
		}
	
		return dateString;
	};
	
	ODate.timeAgoNoSeconds = function (date) {
	
		if (!date) return;
	
		var now = new Date();
		var interval = ODate.getSecondsBetween(now, date);
	
		// If this was less than a minute ago
		if (interval < 60) {
			return 'Less than a minute ago';
		}
		return ODate.timeAgo(date);
	};
	
	ODate.init = function (el) {
		if (!el) {
			el = document.body;
		}
		if (!(el instanceof HTMLElement)) {
			el = document.querySelector(el);
		}
		/* If el's data-o-component has \bo-date\b in it, ie it is itself a date,
	  return a new o-date */
		if (/\bo-date\b/.test(el.getAttribute('data-o-component'))) {
			return new ODate(el);
		}
	
		// If el contains date components, return o-dates
		var dateEls = el.querySelectorAll('[data-o-component~="o-date"]');
		return [].map.call(dateEls, function (el) {
			return new ODate(el);
		});
	};
	
	var constructAll = function constructAll() {
		ODate.init();
		document.removeEventListener('o.DOMContentLoaded', constructAll);
	};
	
	if (typeof window !== 'undefined') {
		document.addEventListener('o.DOMContentLoaded', constructAll);
	}
	
	module.exports = ODate;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
//# sourceMappingURL=bundle.js.map
