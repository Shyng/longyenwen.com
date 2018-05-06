webpackHotUpdate(0,{

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(116);

__webpack_require__(962);

var _index = __webpack_require__(113);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(963);

var _index4 = _interopRequireDefault(_index3);

var _lySquare = __webpack_require__(966);

var _lySquare2 = _interopRequireDefault(_lySquare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import ReactDOM from 'react-dom';

// import { klas } from 'components/_utils.js';
// import { klas } from 'components/_utils.js';


var TabPane = _antd.Tabs.TabPane;

var LyTutorial = function (_React$Component) {
  _inherits(LyTutorial, _React$Component);

  function LyTutorial(props) {
    _classCallCheck(this, LyTutorial);

    return _possibleConstructorReturn(this, (LyTutorial.__proto__ || Object.getPrototypeOf(LyTutorial)).call(this, props));
    // this.state = {
    // };
  }

  _createClass(LyTutorial, [{
    key: 'render',
    value: function render() {
      // const {  } = this.state;
      // const {  } = this.props;
      return _react2.default.createElement(
        'div',
        { className: 'ly-tutorial-page' },
        _react2.default.createElement(
          _antd.Tabs,
          { defaultActiveKey: '0' },
          _react2.default.createElement(
            TabPane,
            { tab: '\u5B57\u5F62\u7ED3\u6784', key: '0' },
            _react2.default.createElement(_lySquare2.default, null)
          ),
          _react2.default.createElement(
            TabPane,
            { tab: '\u5B57\u6BCD\u8868', key: '1' },
            _react2.default.createElement(_index4.default, null)
          ),
          _react2.default.createElement(
            TabPane,
            { tab: '\u4E66\u5199\u89C4\u5219', key: '2' },
            _react2.default.createElement(
              'div',
              { className: 'ly-rules' },
              _react2.default.createElement(
                'ol',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  '\u4E66\u9762\u8BED\u4FDD\u7559\u6C49\u5B57\uFF0C\u53E3\u8BED\u8BCD\u3001\u5916\u6765\u8BCD\u7528\u9F99\u5F66\u5B57\u6BCD\u62FC\u5199\u3002',
                  _react2.default.createElement(
                    'div',
                    { className: 'sub' },
                    '\u5982\u201C\u8001\u5B50\u201D\u4E00\u8BCD\uFF0C\u5F53\u8868\u793A\u5148\u79E6\u601D\u60F3\u5BB6\u674E\u8033\u65F6\uFF0C\u4ECD\u65E7\u5199\u6210\u201C\u8001\u5B50\u201D\uFF1B\u5F53\u8868\u793A\u67D0\u79CD\u81EA\u79F0\u65F6\uFF0C\u5199\u4F5C',
                    _react2.default.createElement(_index2.default, { dataSource: 'lao3zi0' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'sub' },
                    '\u518D\u6BD4\u5982\u201C\u7985\u201D\u4E00\u5B57\uFF0C\u5728\u201C\u7985\u8BA9\u201D\u3001\u201C\u5C01\u7985\u201D\u4E2D\uFF0C\u4E5F\u5C31\u662F\u5FF5\u201Csh\xE0n\u201D\u97F3\u65F6\uFF0C\u4ECD\u65E7\u5199\u6210\u201C\u7985\u201D\uFF1B\u5F53\u5FF5\u6210ch\xE1n\u65F6\uFF0C\u5C5E\u4E8E\u5916\u6765\u8BCD\uFF0C\u5EFA\u8BAE\u6309\u7167\u5370\u5EA6\u8BED\u97F3dhyana\u5199\u4F5C',
                    _react2.default.createElement(_index2.default, { dataSource: 'diana5' })
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  '\u5916\u6765\u8BCD\uFF0C\u6307\u7684\u662F\u97F3\u8BD1\u81EA\u6C49\u5B57\u6587\u5316\u5708\u4EE5\u5916\u7684\u8BED\u8A00\u7684\u8BCD\u6C47\uFF0C\u5982\u4EBA\u540D\u3001\u5730\u540D\u3001\u5316\u5B66\u5143\u7D20\u7B49\u3002',
                  _react2.default.createElement(
                    'div',
                    { className: 'sub' },
                    '\u987B\u5C3D\u91CF\u6309\u539F\u8BED\u8A00\u8BFB\u97F3\u8FDB\u884C\u97F3\u8BD1\uFF0C\u4E5F\u53EF\u53C2\u8003\u7EF4\u543E\u5C14\u8BED\u8BFB\u97F3\u3002\u9664\u5916\u6765\u8BCD\u90E8\u5206\uFF0C\u9F99\u5F66\u6587\u8BFB\u97F3\u548C\u666E\u901A\u8BDD\u5B8C\u5168\u4E00\u81F4\u3002'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  '\u5355\u8BCD\u4E4B\u95F4\u5FC5\u987B\u52A0\u7A7A\u683C\u3002\u5426\u5219\u5BB9\u6613\u5F15\u8D77\u6B67\u4E49\u3002'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'example-myth' },
                _react2.default.createElement(
                  'article',
                  { className: 'myth' },
                  _react2.default.createElement(
                    'h3',
                    null,
                    '\u4EE5\u4E0B\u662F\u4E00\u7BC7\u9F99\u5F66\u6587\u793A\u4F8B'
                  ),
                  _react2.default.createElement(
                    'h4',
                    null,
                    _react2.default.createElement(_index2.default, { dataSource: 'paris5 d0 \u88C1\u51B3', fontStyle: { fontSize: 18 } })
                  ),
                  _react2.default.createElement(_index2.default, { dataSource: [{ ss: '\t从前 有 一天，helas5 诸神 参加 一chang3 婚礼。复仇 女神 eris5 因为 mei2有 bei4 邀请 参加，fei1chang2 生气。她 想出l0 一tiao2 诡计，在 一g0 金 苹果 上 写 “献gei3 zui4 美丽d0 女神” zhe4 几g0 字，然后 ba3 ta1 fang4 在 婚宴 现场。女神men0 看到l0 zhe4g0 金 苹果，引发l0 争执。天后 hela5、智慧 女神 atina5 he2 美神 venas5 dou1 认为 苹果 应当 属于 她 自己。' }, { ss: '\tyu2shi4，三位 女神 下凡 来到 人间，zhao3dao4 正在 ida5山 牧羊 d0 troi5 王子 paris5 寻求 裁决。wei4l0 la1long3 paris5 三位 女神 dou1 ti2chu1l0 诱人d0 条件：' }, { ss: '\thela5 da1应，如guo3 支持 她，paris5 jiang1 统治 zheng3ge4 asia5。' }, { ss: '\tatina5 ti2供 gei3 paris5 d0，shi4 无上d0 智慧。' }, { ss: '\ter2 venas5 ze2 许诺，支持 她d0 hao3处，shi4 neng2 de2dao4 世界上 zui4 piao4liang4d0 女人——sparta5 王后 helena5。' }, { ss: '\tparis5 经不zhu4 诱惑，选择 jiang1 金 苹果 判gei3 venas5。zhe4 bian4 wei4 今后 旷日持久d0 troi5 战争 埋下l0 祸根。' }] })
                ),
                _react2.default.createElement(
                  'article',
                  { className: 'myth-chinese' },
                  _react2.default.createElement(
                    'h3',
                    null,
                    '\u4E2D\u6587\u91CA\u4E49'
                  ),
                  _react2.default.createElement(
                    'h4',
                    null,
                    '\u5E15\u91CC\u65AF\u7684\u88C1\u51B3'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    '\u4ECE\u524D\u6709\u4E00\u5929\uFF0C\u5E0C\u814A\u8BF8\u795E\u53C2\u52A0\u4E00\u573A\u5A5A\u793C\u3002\u590D\u4EC7\u5973\u795E\u57C3\u91CC\u65AF\u56E0\u4E3A\u6CA1\u6709\u88AB\u9080\u8BF7\u53C2\u52A0\uFF0C\u975E\u5E38\u751F\u6C14\u3002\u5979\u60F3\u51FA\u4E00\u6761\u8BE1\u8BA1\uFF0C\u5728\u4E00\u4E2A\u91D1\u82F9\u679C\u4E0A\u5199\u201C\u732E\u7ED9\u6700\u7F8E\u4E3D\u7684\u5973\u795E\u201D\u8FD9\u51E0\u4E2A\u5B57\uFF0C\u7136\u540E\u628A\u5B83\u653E\u5728\u5A5A\u5BB4\u73B0\u573A\u3002\u5973\u795E\u4EEC\u770B\u5230\u4E86\u8FD9\u4E2A\u91D1\u82F9\u679C\uFF0C\u5F15\u53D1\u4E86\u4E89\u6267\u3002\u5929\u540E\u8D6B\u62C9\u3001\u667A\u6167\u5973\u795E\u795E\u96C5\u5178\u5A1C\u548C\u7F8E\u795E\u7EF4\u7EB3\u65AF\u90FD\u8BA4\u4E3A\u82F9\u679C\u5E94\u5F53\u5C5E\u4E8E\u5979\u81EA\u5DF1\u3002'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    '\u4E8E\u662F\uFF0C\u4E09\u4F4D\u5973\u795E\u4E0B\u51E1\u6765\u5230\u4EBA\u95F4\uFF0C\u627E\u5230\u6B63\u5728\u4F0A\u8FBE\u5C71\u4E0A\u7267\u7F8A\u7684\u7279\u6D1B\u4F0A\u738B\u5B50\u5E15\u91CC\u65AF\u5BFB\u6C42\u88C1\u51B3\u3002\u4E3A\u4E86\u62C9\u62E2\u5E15\u91CC\u65AF\uFF0C\u4E09\u4F4D\u5973\u795E\u90FD\u63D0\u51FA\u4E86\u8BF1\u4EBA\u7684\u6761\u4EF6\uFF1A'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    '\u8D6B\u62C9\u7B54\u5E94\uFF0C\u5982\u679C\u652F\u6301\u5979\uFF0C\u5E15\u91CC\u65AF\u5C06\u7EDF\u6CBB\u6574\u4E2A\u4E9A\u6D32\u3002'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    '\u96C5\u5178\u5A1C\u63D0\u4F9B\u7ED9\u5E15\u91CC\u65AF\u7684\uFF0C\u662F\u65E0\u4E0A\u7684\u667A\u6167\u3002'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    '\u800C\u7EF4\u7EB3\u65AF\u5219\u8BB8\u8BFA\uFF0C\u652F\u6301\u5979\u7684\u597D\u5904\uFF0C\u662F\u80FD\u5F97\u5230\u4E16\u754C\u4E0A\u6700\u6F02\u4EAE\u7684\u5973\u4EBA\u2014\u2014\u65AF\u5DF4\u8FBE\u738B\u540E\u6D77\u4F26\u3002'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    '\u5E15\u91CC\u65AF\u7ECF\u4E0D\u4F4F\u8BF1\u60D1\uFF0C\u9009\u62E9\u5C06\u91D1\u82F9\u679C\u5224\u7ED9\u7EF4\u7EB3\u65AF\u3002\u8FD9\u4FBF\u4E3A\u4ECA\u540E\u65F7\u65E5\u6301\u4E45\u7684\u7279\u6D1B\u4F0A\u6218\u4E89\u57CB\u4E0B\u4E86\u7978\u6839\u3002'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return LyTutorial;
}(_react2.default.Component);

exports.default = LyTutorial;

/***/ })

})