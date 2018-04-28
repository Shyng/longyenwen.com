webpackHotUpdate(1,{

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(176);

var _index = __webpack_require__(177);

var _index2 = _interopRequireDefault(_index);

var _originTsyList = __webpack_require__(970);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var syllabelNum = _originTsyList.syllableList.length;

var Option = _antd.Select.Option;

var Tsy = function (_React$Component) {
  _inherits(Tsy, _React$Component);

  function Tsy(props) {
    _classCallCheck(this, Tsy);

    var _this = _possibleConstructorReturn(this, (Tsy.__proto__ || Object.getPrototypeOf(Tsy)).call(this, props));

    _this.handleChange = function (value) {
      _this.setState({ value: value });
    };

    _this.generateTsy = function (koelv) {
      // 符号：○平声 ●仄声 ⊙可平可仄 △平韵 ▲仄韵
      var tsy = [];
      for (var i = 0; i < koelv.length; i++) {
        // const element = array[i];
        var syll = _originTsyList.syllableList[~~(Math.random() * 413)];
        switch (koelv[i]) {
          case '○':
          case '△':
            tsy.push('' + syll + (~~(Math.random() * 2) + 1));
            break;
          case '●':
          case '▲':
            tsy.push('' + syll + (~~(Math.random() * 2) + 3));
            break;
          case '⊙':
            tsy.push('' + syll + (~~(Math.random() * 4) + 1));
            break;
          // case value:
          //   break;
          default:
            tsy.push(koelv[i]);
        }
      }
      tsy = tsy.join('');
      console.log(tsy);
      return _react2.default.createElement(_index2.default, {
        fontStyle: { fontSize: _this.props.fontSize },
        dataSource: tsy
      });
    };

    _this.state = {
      // ind
    };
    return _this;
  }

  _createClass(Tsy, [{
    key: 'render',
    value: function render() {
      var value = this.state.value;

      return _react2.default.createElement(
        'div',
        { className: 'tsy' },
        _react2.default.createElement(
          _antd.Select,
          { className: 'tsy-select', onChange: this.handleChange },
          _originTsyList.tsyphaiList.map(function (tsyphai, i) {
            return _react2.default.createElement(
              Option,
              { value: '' + i, key: i },
              tsyphai
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'tsy-body' },
          value && _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'tsy-content' },
              this.generateTsy(_originTsyList.koelvList[value])
            )
          )
        )
      );
    }
  }]);

  return Tsy;
}(_react2.default.Component);

// const reg = /\d+[\.．]\s*[\u4e00-\u9fa5（）\(\)]+\s/g;

// const tsyphaiList = originTsy.match(reg);
// const contentList = originTsy.split(reg).slice(1);
// console.log(JSON.stringify(tsyphaiList), JSON.stringify(contentList));

/*
 * @replace
 *  （换） 不知何意
 *  167．莺啼序 可保留
 *  137、139、130 可保留
*/


exports.default = Tsy;

/***/ })

})