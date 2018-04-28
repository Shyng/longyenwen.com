webpackHotUpdate(2,{

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = __webpack_require__(177);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(971);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import {Input, Button} from 'antd';


var LywDemo = function (_React$Component) {
  _inherits(LywDemo, _React$Component);

  function LywDemo(props) {
    _classCallCheck(this, LywDemo);

    var _this = _possibleConstructorReturn(this, (LywDemo.__proto__ || Object.getPrototypeOf(LywDemo)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(LywDemo, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'lyw-demo-page' },
        _react2.default.createElement(
          'div',
          { className: 'demo-item' },
          _react2.default.createElement(
            'label',
            null,
            '\u5B8C\u6574'
          ),
          _react2.default.createElement(_index2.default, { dataSource: 'ni3hao3' })
        )
      );
    }
  }]);

  return LywDemo;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(LywDemo, null), document.getElementById('root'));

/***/ }),

/***/ 971:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

})