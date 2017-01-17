/**
 * Resizes images to create filled rows, preserving aspect ratios.
 *
 * The MIT License. Copyright © 2016 Ryan Harter.
 */
(function() {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    (function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.i = function(value) {
            return value;
        };
        __webpack_require__.d = function(exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    configurable: false,
                    enumerable: true,
                    get: getter
                });
            }
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module["default"];
            } : function getModuleExports() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 2);
    })([ function(module, exports, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0__row_js__ = __webpack_require__(1);
        __webpack_require__.d(exports, "a", function() {
            return imagerow;
        });
        var setup = function setup(elem) {
            var row = new __WEBPACK_IMPORTED_MODULE_0__row_js__["a"](elem);
            row.flow();
        };
        var imagerow = Object.create(null);
        imagerow.setup = setup;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var Row = function() {
            function Row(row) {
                _classCallCheck(this, Row);
                this.row = row;
                this.images = row.getElementsByTagName("img");
            }
            _createClass(Row, [ {
                key: "flow",
                value: function flow() {
                    var aspect = 0;
                    var images = [];
                    var horizontalPadding = 0;
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;
                    try {
                        for (var _iterator = this.images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var image = _step.value;
                            var style = window.getComputedStyle(image);
                            horizontalPadding = horizontalPadding + parseInt(style["padding-left"]);
                            horizontalPadding = horizontalPadding + parseInt(style["padding-right"]);
                            var imageWidth = image.naturalWidth;
                            var imageHeight = image.naturalHeight;
                            var imageAspect = imageWidth / imageHeight;
                            aspect = aspect + imageAspect;
                            images.push({
                                image: image,
                                aspect: imageAspect
                            });
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    var rowHeight = (this.row.offsetWidth - horizontalPadding) / aspect;
                    this.row.style.height = rowHeight + "px";
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;
                    try {
                        for (var _iterator2 = images[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var image = _step2.value;
                            image.image.style.height = rowHeight + "px";
                            image.image.style.width = rowHeight * image.aspect + "px";
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
            } ]);
            return Row;
        }();
        exports["a"] = Row;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var __WEBPACK_IMPORTED_MODULE_0__src_imagerow_js__ = __webpack_require__(0);
        var flowRows = function flowRows() {
            var elems = document.querySelectorAll("section.image-row");
            for (var i = 0; i < elems.length; i++) {
                __WEBPACK_IMPORTED_MODULE_0__src_imagerow_js__["a"].setup(elems[i]);
            }
        };
        document.addEventListener("DOMContentLoaded", function() {
            flowRows();
        });
        var resizeTimeout;
        window.addEventListener("resize", function() {
            if (!resizeTimeout) {
                resizeTimeout = setTimeout(function() {
                    resizeTimeout = null;
                    flowRows();
                }, 66);
            }
        }, false);
    } ]);
})();