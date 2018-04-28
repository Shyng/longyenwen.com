webpackHotUpdate(2,{

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LywBtn = exports.LywHoverCn = exports.LywHover = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(176);

var _index = __webpack_require__(946);

var _utils = __webpack_require__(169);

var _consts = __webpack_require__(948);

__webpack_require__(949);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LywView = function (_React$Component) {
  _inherits(LywView, _React$Component);

  function LywView(props) {
    _classCallCheck(this, LywView);

    var _this = _possibleConstructorReturn(this, (LywView.__proto__ || Object.getPrototypeOf(LywView)).call(this, props));

    _this._renderMulti = function () {
      var _this$props = _this.props,
          dataSource = _this$props.dataSource,
          viewType = _this$props.viewType,
          langs = _this$props.langs,
          animType = _this$props.animType;
      var fontStyle = _this.state.fontStyle;

      if (!fontStyle.lineHeight && fontStyle.fontSize) {
        fontStyle.lineHeight = fontStyle.fontSize * 1.5 + 'px';
      }
      // if (['vertical', 'horizontal'].includes(viewType)) {
      return _react2.default.createElement(
        'div',
        { className: 'lyw-multi' },
        dataSource.map(function (p, key) {
          return _react2.default.createElement(
            'div',
            {
              className: 'lyw-paragraph view-type-' + viewType + ' anim-type-' + animType,
              key: key
            },
            langs.map(function (lang, lKey) {
              var lanContent = p[lang];
              if (lang === 'ss') {
                lanContent = _this.escXor(lanContent);
              }
              return _react2.default.createElement(
                'pre',
                {
                  key: lKey,
                  className: 'lyw-lang-' + lang + ' lyw-lang-index-' + lKey,
                  style: fontStyle
                },
                lanContent
              );
            })
          );
        })
      );
      // }
      // return this._renderMulti();
    };

    _this.escXor = function (str) {
      // test:
      // end test
      var len = str.length;
      var patt = /\{[^\}]+?\}/;
      var i = 0;
      var n = 0; // 次数，现在只做安全用
      var result = [];
      var curr = void 0; // 当前匹配返回结果
      while (n++ < 99) {
        var range = str.slice(i, len);
        curr = range.match(patt);
        // console.log(curr);
        if (!curr) {
          result.push(_this.lywXor(range));
          break;
        }
        result = result.concat([_this.lywXor(range.slice(0, curr.index)), curr[0].slice(1, curr[0].length - 1)]);
        i += curr.index + curr[0].length;
      }
      // console.log('escArr ', result);
      return result;
    };

    _this.lywXor = function (str) {
      // console.log(str);
      // return str.toUpperCase();
      var len = str.length;
      // const patt = /[a-z]+[0-5]/;
      var patt = /([a-z]+[0-4])|([a-z'\-]{2,}5)/;
      var result = [];
      var i = 0;
      var n = 0;
      var curr = void 0;
      var pushInForm = function pushInForm(startI, index, code) {
        // index && console.log('in Form', str.slice(startI, startI + index));
        index && result.push((0, _consts.sensianize)(str.slice(startI, startI + index)));
        code && result.push((0, _index.lywFont)({
          code: code,
          key: startI,
          fontStyle: _this.state.fontStyle
        }));
      };
      while (n < 999) {
        var startI = i; // 先存初始值i
        n++;
        curr = patt.exec(str.slice(i, len));
        // console.log(curr);
        if (!curr) {
          pushInForm(startI, len - startI);
          break;
        }
        pushInForm(startI, curr.index, curr[0]);
        i += curr.index + curr[0].length;
        if (n > 999) {
          alert('这段太TM长了，请注意换行！！！');
          break;
        }
      }
      // console.log(result);
      return result;
    };

    _this.cls = (0, _utils.klas)('lyw-view', String(props.className || ''),
    // { [props.className]: props.className },
    {
      'is-win': _utils.osIsWin,
      'align-center': props.align === 'c',
      'single': typeof props.dataSource === 'string'
    });
    _this.state = {
      fontStyle: Object.assign({
        // fontSize: DEFAULT_FONT_SIZE,
      }, props.fontStyle)
    };
    return _this;
  }

  _createClass(LywView, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (JSON.stringify(nextProps.fontStyle) !== JSON.stringify(this.props.fontStyle)) {
        this.setState({ fontStyle: nextProps.fontStyle });
      }
    }
    /**
     * @struct PropType
     * - viewType: oneOf(['vertical', 'horizontal', 'hover'(<=2), 'click'])
     */

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          dataSource = _props.dataSource,
          fontStyle = _props.fontStyle;
      // console.log(viewType, langs);

      return _react2.default.createElement(
        'div',
        { className: this.cls },
        typeof dataSource === 'string' /* NOTE single模式 */
        ? _react2.default.createElement(
          'pre',
          { style: fontStyle },
          this.escXor(dataSource)
        ) : this._renderMulti()
      );
    }
    /**
     * @return {[type]}   [description]
     */

  }]);

  return LywView;
}(_react2.default.Component);

LywView.defaultProps = {
  viewType: 'vertical', // 竖着一起展示
  langs: ['ss', 'cn'],
  animType: 'fade',
  fontStyle: {
    fontSize: _utils.DEFAULT_FONT_SIZE,
    // lineHeight: , // 最好别设
    color: '#333', // NOTE: 这不是龙彦
    fill: '#333' // NOTE: 这才是龙彦
  }
};
exports.default = LywView;


var commonLywHover = {
  viewType: "hover",
  langs: ['ss', 'cn'],
  animType: "fade"
};

var LywHover = exports.LywHover = function LywHover(props) {
  return _react2.default.createElement(LywView, _extends({}, commonLywHover, props));
};
var LywHoverCn = exports.LywHoverCn = LywHover; // 向下兼容

var LywBtn = function LywBtn() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _props$btnProps = props.btnProps,
      btnProps = _props$btnProps === undefined ? {} : _props$btnProps,
      lywProps = _objectWithoutProperties(props, ['btnProps']);
  // const lywProps = {...props};
  // delete lywProps.btnProps;


  lywProps.fontStyle = Object.assign({}, props.fontStyle || {}, {
    fill: {
      primary: '#fff',
      danger: '#f5222d'
    }[btnProps.type] || 'rgba(0, 0, 0, 0.65)'
  });
  return _react2.default.createElement(
    _antd.Button,
    btnProps,
    _react2.default.createElement(LywHoverCn, lywProps)
  );
};
exports.LywBtn = LywBtn;

/***/ })

})