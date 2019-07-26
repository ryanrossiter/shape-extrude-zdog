webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/shapes/letters.js":
/*!*******************************!*\
  !*** ./src/shapes/letters.js ***!
  \*******************************/
/*! exports provided: KShape, FShape, AmpShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KShape", function() { return KShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FShape", function() { return FShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmpShape", function() { return AmpShape; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_zdog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-zdog */ "./node_modules/react-zdog/dist/index.js");
/* harmony import */ var _utils_makeZdogBezier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/makeZdogBezier */ "./src/utils/makeZdogBezier.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // https://path2bezier.netlify.com/

var K_PATH = Object(_utils_makeZdogBezier__WEBPACK_IMPORTED_MODULE_2__["default"])([{
  "x": 240.25,
  "y": 235.271
}, {
  "x": 240.25,
  "y": 235.271
}, {
  "x": 237.859,
  "y": 235.271
}, {
  "x": 237.859,
  "y": 235.271
}, {
  "x": 237.859,
  "y": 235.271
}, {
  "x": 235.41,
  "y": 231.62099999999998
}, {
  "x": 235.41,
  "y": 231.62099999999998
}, {
  "x": 235.363,
  "y": 231.551
}, {
  "x": 235.289,
  "y": 231.396
}, {
  "x": 235.18699999999998,
  "y": 231.158
}, {
  "x": 235.18699999999998,
  "y": 231.158
}, {
  "x": 235.158,
  "y": 231.158
}, {
  "x": 235.158,
  "y": 231.158
}, {
  "x": 235.158,
  "y": 231.158
}, {
  "x": 235.158,
  "y": 235.271
}, {
  "x": 235.158,
  "y": 235.271
}, {
  "x": 235.158,
  "y": 235.271
}, {
  "x": 233.265,
  "y": 235.271
}, {
  "x": 233.265,
  "y": 235.271
}, {
  "x": 233.265,
  "y": 235.271
}, {
  "x": 233.265,
  "y": 226.869
}, {
  "x": 233.265,
  "y": 226.869
}, {
  "x": 233.265,
  "y": 226.869
}, {
  "x": 235.158,
  "y": 226.869
}, {
  "x": 235.158,
  "y": 226.869
}, {
  "x": 235.158,
  "y": 226.869
}, {
  "x": 235.158,
  "y": 230.842
}, {
  "x": 235.158,
  "y": 230.842
}, {
  "x": 235.158,
  "y": 230.842
}, {
  "x": 235.18699999999998,
  "y": 230.842
}, {
  "x": 235.18699999999998,
  "y": 230.842
}, {
  "x": 235.23399999999998,
  "y": 230.733
}, {
  "x": 235.31199999999998,
  "y": 230.57600000000002
}, {
  "x": 235.421,
  "y": 230.37300000000002
}, {
  "x": 235.421,
  "y": 230.37300000000002
}, {
  "x": 237.74099999999999,
  "y": 226.86900000000003
}, {
  "x": 237.74099999999999,
  "y": 226.86900000000003
}, {
  "x": 237.74099999999999,
  "y": 226.86900000000003
}, {
  "x": 239.99699999999999,
  "y": 226.86900000000003
}, {
  "x": 239.99699999999999,
  "y": 226.86900000000003
}, {
  "x": 239.99699999999999,
  "y": 226.86900000000003
}, {
  "x": 237.06699999999998,
  "y": 230.87700000000004
}, {
  "x": 237.06699999999998,
  "y": 230.87700000000004
}, {
  "x": 237.06699999999998,
  "y": 230.87700000000004
}, {
  "x": 240.25,
  "y": 235.271
}, {
  "x": 240.25,
  "y": 235.271
}, {
  "x": 240.25,
  "y": 235.271
}, {
  "x": 240.25,
  "y": 235.271
}, {
  "x": 240.25,
  "y": 235.271
}]);
var F_PATH = Object(_utils_makeZdogBezier__WEBPACK_IMPORTED_MODULE_2__["default"])([{
  "x": 230.314,
  "y": 226.869
}, {
  "x": 230.314,
  "y": 226.869
}, {
  "x": 235.171,
  "y": 226.869
}, {
  "x": 235.171,
  "y": 226.869
}, {
  "x": 235.171,
  "y": 226.869
}, {
  "x": 235.171,
  "y": 235.271
}, {
  "x": 235.171,
  "y": 235.271
}, {
  "x": 235.171,
  "y": 235.271
}, {
  "x": 233.278,
  "y": 235.271
}, {
  "x": 233.278,
  "y": 235.271
}, {
  "x": 233.278,
  "y": 235.271
}, {
  "x": 233.278,
  "y": 232.00699999999998
}, {
  "x": 233.278,
  "y": 232.00699999999998
}, {
  "x": 233.278,
  "y": 232.00699999999998
}, {
  "x": 230.553,
  "y": 232.00699999999998
}, {
  "x": 230.553,
  "y": 232.00699999999998
}, {
  "x": 230.553,
  "y": 232.00699999999998
}, {
  "x": 230.553,
  "y": 230.47199999999998
}, {
  "x": 230.553,
  "y": 230.47199999999998
}, {
  "x": 230.553,
  "y": 230.47199999999998
}, {
  "x": 233.278,
  "y": 230.47199999999998
}, {
  "x": 233.278,
  "y": 230.47199999999998
}, {
  "x": 233.278,
  "y": 230.47199999999998
}, {
  "x": 233.278,
  "y": 228.409
}, {
  "x": 233.278,
  "y": 228.409
}, {
  "x": 233.278,
  "y": 228.409
}, {
  "x": 230.313,
  "y": 228.409
}, {
  "x": 230.313,
  "y": 228.409
}, {
  "x": 230.313,
  "y": 228.409
}, {
  "x": 230.313,
  "y": 226.869
}, {
  "x": 230.313,
  "y": 226.869
}, {
  "x": 230.313,
  "y": 226.869
}, {
  "x": 230.314,
  "y": 226.869
}, {
  "x": 230.314,
  "y": 226.869
}]);
var AMP_OUTER_PATH = Object(_utils_makeZdogBezier__WEBPACK_IMPORTED_MODULE_2__["default"])([{
  "x": 22.026,
  "y": 98.771
}, {
  "x": 22.026,
  "y": 98.771
}, {
  "x": 2.711,
  "y": 69.288
}, {
  "x": 2.711,
  "y": 69.288
}, {
  "x": 2.711,
  "y": 69.288
}, {
  "x": 33.955,
  "y": 49.080999999999996
}, {
  "x": 33.955,
  "y": 49.080999999999996
}, {
  "x": 33.955,
  "y": 49.080999999999996
}, {
  "x": 21.447,
  "y": 26.725
}, {
  "x": 21.447,
  "y": 26.725
}, {
  "x": 20.372,
  "y": 24.834000000000003
}, {
  "x": 19.839,
  "y": 23.097
}, {
  "x": 19.839,
  "y": 21.511000000000003
}, {
  "x": 19.839,
  "y": 20.139000000000003
}, {
  "x": 20.311,
  "y": 18.912000000000003
}, {
  "x": 21.256,
  "y": 17.844
}, {
  "x": 22.712,
  "y": 16.122
}, {
  "x": 24.579,
  "y": 14.879000000000001
}, {
  "x": 26.851,
  "y": 14.109000000000002
}, {
  "x": 27.453,
  "y": 13.888000000000002
}, {
  "x": 27.865,
  "y": 13.743000000000002
}, {
  "x": 28.078,
  "y": 13.659000000000002
}, {
  "x": 28.078,
  "y": 13.659000000000002
}, {
  "x": 57.439,
  "y": 1.229
}, {
  "x": 57.439,
  "y": 1.229
}, {
  "x": 60.61,
  "y": 2.692
}, {
  "x": 63.293,
  "y": 5.07
}, {
  "x": 65.488,
  "y": 8.378
}, {
  "x": 67.676,
  "y": 11.679
}, {
  "x": 68.765,
  "y": 15.261
}, {
  "x": 68.765,
  "y": 19.125999999999998
}, {
  "x": 68.765,
  "y": 22.083999999999996
}, {
  "x": 68.124,
  "y": 24.781999999999996
}, {
  "x": 66.837,
  "y": 27.229
}, {
  "x": 65.54,
  "y": 29.676
}, {
  "x": 63.528000000000006,
  "y": 32.039
}, {
  "x": 60.776,
  "y": 34.318
}, {
  "x": 59.061,
  "y": 35.774
}, {
  "x": 54.946000000000005,
  "y": 38.623999999999995
}, {
  "x": 48.443000000000005,
  "y": 42.87
}, {
  "x": 48.443000000000005,
  "y": 42.87
}, {
  "x": 62.02,
  "y": 67.253
}, {
  "x": 62.02,
  "y": 67.253
}, {
  "x": 62.02,
  "y": 67.253
}, {
  "x": 81.259,
  "y": 53.77
}, {
  "x": 81.259,
  "y": 53.77
}, {
  "x": 84.392,
  "y": 56.216
}, {
  "x": 86.862,
  "y": 57.848000000000006
}, {
  "x": 88.66,
  "y": 58.663000000000004
}, {
  "x": 90.467,
  "y": 59.479000000000006
}, {
  "x": 92.121,
  "y": 59.884
}, {
  "x": 93.622,
  "y": 59.884
}, {
  "x": 94.179,
  "y": 59.884
}, {
  "x": 94.826,
  "y": 59.822
}, {
  "x": 95.551,
  "y": 59.693
}, {
  "x": 95.894,
  "y": 59.647999999999996
}, {
  "x": 96.176,
  "y": 59.632
}, {
  "x": 96.389,
  "y": 59.632
}, {
  "x": 96.389,
  "y": 59.632
}, {
  "x": 96.969,
  "y": 59.821999999999996
}, {
  "x": 96.969,
  "y": 59.821999999999996
}, {
  "x": 97.18199999999999,
  "y": 60.12
}, {
  "x": 97.28899999999999,
  "y": 60.446999999999996
}, {
  "x": 97.28899999999999,
  "y": 60.78999999999999
}, {
  "x": 97.28899999999999,
  "y": 61.94799999999999
}, {
  "x": 95.90799999999999,
  "y": 63.617999999999995
}, {
  "x": 93.14299999999999,
  "y": 65.806
}, {
  "x": 90.367,
  "y": 68
}, {
  "x": 87.395,
  "y": 69.09
}, {
  "x": 84.217,
  "y": 69.09
}, {
  "x": 80.093,
  "y": 69.09
}, {
  "x": 76.266,
  "y": 67.11500000000001
}, {
  "x": 72.752,
  "y": 63.152
}, {
  "x": 72.752,
  "y": 63.152
}, {
  "x": 63.392999999999994,
  "y": 69.72200000000001
}, {
  "x": 63.392999999999994,
  "y": 69.72200000000001
}, {
  "x": 66.076,
  "y": 74.53900000000002
}, {
  "x": 68.187,
  "y": 77.90100000000001
}, {
  "x": 69.735,
  "y": 79.81400000000001
}, {
  "x": 71.282,
  "y": 81.72000000000001
}, {
  "x": 73.37,
  "y": 83.381
}, {
  "x": 76.015,
  "y": 84.798
}, {
  "x": 78.653,
  "y": 86.21600000000001
}, {
  "x": 81.67,
  "y": 86.925
}, {
  "x": 85.055,
  "y": 86.925
}, {
  "x": 87.50200000000001,
  "y": 86.925
}, {
  "x": 90.29100000000001,
  "y": 86.17099999999999
}, {
  "x": 93.432,
  "y": 84.669
}, {
  "x": 93.775,
  "y": 84.50099999999999
}, {
  "x": 94.049,
  "y": 84.417
}, {
  "x": 94.262,
  "y": 84.417
}, {
  "x": 94.477,
  "y": 84.417
}, {
  "x": 94.652,
  "y": 84.501
}, {
  "x": 94.782,
  "y": 84.669
}, {
  "x": 94.99499999999999,
  "y": 84.89
}, {
  "x": 95.10199999999999,
  "y": 85.12599999999999
}, {
  "x": 95.10199999999999,
  "y": 85.378
}, {
  "x": 95.10199999999999,
  "y": 86.666
}, {
  "x": 94.317,
  "y": 88.449
}, {
  "x": 92.75399999999999,
  "y": 90.721
}, {
  "x": 91.184,
  "y": 93
}, {
  "x": 88.889,
  "y": 94.906
}, {
  "x": 85.86299999999999,
  "y": 96.452
}, {
  "x": 82.83599999999998,
  "y": 98
}, {
  "x": 79.58199999999998,
  "y": 98.77
}, {
  "x": 76.10499999999999,
  "y": 98.77
}, {
  "x": 72.24999999999999,
  "y": 98.77
}, {
  "x": 68.78899999999999,
  "y": 97.97699999999999
}, {
  "x": 65.74,
  "y": 96.39099999999999
}, {
  "x": 62.699,
  "y": 94.79799999999999
}, {
  "x": 59.992,
  "y": 92.61099999999999
}, {
  "x": 57.629999999999995,
  "y": 89.821
}, {
  "x": 55.91499999999999,
  "y": 87.801
}, {
  "x": 53.55199999999999,
  "y": 84.112
}, {
  "x": 50.54899999999999,
  "y": 78.746
}, {
  "x": 50.54899999999999,
  "y": 78.746
}, {
  "x": 22.026,
  "y": 98.771
}, {
  "x": 22.026,
  "y": 98.771
}, {
  "x": 22.026,
  "y": 98.771
}, {
  "x": 22.026,
  "y": 98.771
}, {
  "x": 22.026,
  "y": 98.771
}]);
var AMP_INNER_PATH_0 = Object(_utils_makeZdogBezier__WEBPACK_IMPORTED_MODULE_2__["default"])([{
  "x": 33.292,
  "y": 87.375
}, {
  "x": 33.292,
  "y": 87.375
}, {
  "x": 49.162,
  "y": 76.262
}, {
  "x": 49.162,
  "y": 76.262
}, {
  "x": 49.162,
  "y": 76.262
}, {
  "x": 35.282,
  "y": 51.459
}, {
  "x": 35.282,
  "y": 51.459
}, {
  "x": 35.282,
  "y": 51.459
}, {
  "x": 17.506,
  "y": 63.045
}, {
  "x": 17.506,
  "y": 63.045
}, {
  "x": 17.506,
  "y": 63.045
}, {
  "x": 33.292,
  "y": 87.375
}, {
  "x": 33.292,
  "y": 87.375
}, {
  "x": 33.292,
  "y": 87.375
}, {
  "x": 33.292,
  "y": 87.375
}, {
  "x": 33.292,
  "y": 87.375
}]);
var AMP_INNER_PATH_1 = Object(_utils_makeZdogBezier__WEBPACK_IMPORTED_MODULE_2__["default"])([{
  "x": 47.149,
  "y": 40.544
}, {
  "x": 51.173,
  "y": 37.94499999999999
}, {
  "x": 54.024,
  "y": 35.32299999999999
}, {
  "x": 55.701,
  "y": 32.686
}, {
  "x": 56.859,
  "y": 30.834
}, {
  "x": 57.439,
  "y": 28.54
}, {
  "x": 57.439,
  "y": 25.817999999999998
}, {
  "x": 57.439,
  "y": 21.831999999999997
}, {
  "x": 56.067,
  "y": 18.255999999999997
}, {
  "x": 53.315,
  "y": 15.100999999999997
}, {
  "x": 50.571,
  "y": 11.952999999999998
}, {
  "x": 47.803999999999995,
  "y": 10.374999999999996
}, {
  "x": 45.007,
  "y": 10.374999999999996
}, {
  "x": 42.652,
  "y": 10.374999999999996
}, {
  "x": 40.601,
  "y": 11.212999999999996
}, {
  "x": 38.863,
  "y": 12.882999999999996
}, {
  "x": 37.125,
  "y": 14.559999999999995
}, {
  "x": 36.256,
  "y": 16.449999999999996
}, {
  "x": 36.256,
  "y": 18.546999999999997
}, {
  "x": 36.256,
  "y": 20.177999999999997
}, {
  "x": 37.049,
  "y": 22.410999999999998
}, {
  "x": 38.634,
  "y": 25.246999999999996
}, {
  "x": 38.634,
  "y": 25.246999999999996
}, {
  "x": 47.149,
  "y": 40.544
}, {
  "x": 47.149,
  "y": 40.544
}, {
  "x": 47.149,
  "y": 40.544
}, {
  "x": 47.149,
  "y": 40.544
}, {
  "x": 47.149,
  "y": 40.544
}]);

var LetterShape = function LetterShape(paths, positionProps) {
  return function (_ref) {
    var rotate = _ref.rotate,
        scale = _ref.scale,
        translate = _ref.translate,
        props = _objectWithoutProperties(_ref, ["rotate", "scale", "translate"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_zdog__WEBPACK_IMPORTED_MODULE_1__["Anchor"], {
      rotate: rotate,
      scale: scale,
      translate: translate
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_zdog__WEBPACK_IMPORTED_MODULE_1__["Anchor"], positionProps, Array.isArray(paths) ? paths.map(function (path) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_zdog__WEBPACK_IMPORTED_MODULE_1__["Shape"], _extends({
        path: path
      }, props));
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_zdog__WEBPACK_IMPORTED_MODULE_1__["Shape"], _extends({
      path: paths
    }, props))));
  };
};

var KShape = LetterShape(K_PATH, {
  translate: {
    x: -233,
    y: -231
  }
});
var FShape = LetterShape(F_PATH, {
  translate: {
    x: -233,
    y: -231
  }
});
var AmpShape = LetterShape(AMP_OUTER_PATH, {
  translate: {
    x: -50,
    y: -50
  }
});


/***/ })

})
//# sourceMappingURL=index.js.8d0c6d8fc207c2cde49e.hot-update.js.map