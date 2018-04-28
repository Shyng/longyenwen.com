webpackHotUpdate(0,{

/***/ 955:
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

var _index3 = __webpack_require__(956);

var _index4 = _interopRequireDefault(_index3);

__webpack_require__(958);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButton = _antd.Radio.Button;
var RadioGroup = _antd.Radio.Group;

var _ref = window.PAGE_CONFIG || {},
    songtsyUrl = _ref.songtsyUrl;

var LywNav = function (_React$Component) {
  _inherits(LywNav, _React$Component);

  function LywNav() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, LywNav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = LywNav.__proto__ || Object.getPrototypeOf(LywNav)).call.apply(_ref2, [this].concat(args))), _this), _this._settingMenu = function () {
      var _this$props = _this.props,
          settingCb = _this$props.settingCb,
          settings = _this$props.settings;

      return _react2.default.createElement(
        'div',
        { className: 'setting-menu' },
        _react2.default.createElement(
          'div',
          { className: 'setting-item' },
          _react2.default.createElement(
            'label',
            null,
            _react2.default.createElement(_index.LywHoverCn, {
              dataSource: { ss: '字ti3 大小：', cn: '字体大小：' },
              fontStyle: { fontSize: 14 }
            })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_antd.Input, {
              type: 'number', max: '48', min: '12',
              value: settings.fontSize,
              onChange: function onChange(e) {
                settingCb('fontSize', e.target.value);
              }
            }),
            ' px'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'setting-item' },
          _react2.default.createElement(
            'label',
            null,
            _react2.default.createElement(_index.LywHoverCn, {
              dataSource: [{ ss: '界面 主ti2：', cn: '界面主题：' }],
              fontStyle: { fontSize: 14 }
            })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              RadioGroup,
              {
                value: settings.theme,
                onChange: function onChange(e) {
                  settingCb('theme', e.target.value);
                }
              },
              _react2.default.createElement(
                RadioButton,
                { value: 'cold' },
                _react2.default.createElement(
                  'div',
                  { className: 'theme-item cold' },
                  _react2.default.createElement('div', null),
                  _react2.default.createElement('div', null)
                )
              ),
              _react2.default.createElement(
                RadioButton,
                { value: 'coldBack' },
                _react2.default.createElement(
                  'div',
                  { className: 'theme-item coldBack' },
                  _react2.default.createElement('div', null),
                  _react2.default.createElement('div', null)
                )
              )
            )
          )
        )
      );
    }, _this._savingMenu = function () {
      return _react2.default.createElement(
        'div',
        { className: 'saving-menu' },
        _react2.default.createElement(
          'div',
          { className: 'saving-menu-desc' },
          _react2.default.createElement(_antd.Icon, { type: 'info-circle-o' }),
          _react2.default.createElement(_index.LywHoverCn, { dataSource: [{
              ss: '可 在 此 本地 保存 当前 编ji2 内容，ye3 可以 读取 已有 文档',
              cn: '可在此本地保存当前编辑内容，也可以读取已有文档'
            }] })
        ),
        _react2.default.createElement(
          'ol',
          null,
          _this.props.savingData.map(function (item, sKey) {
            return _this._savingItem(item, sKey);
          })
        )
      );
    }, _this._savingItem = function (item, sKey) {
      // console.log(item);
      var _ref3 = item || {},
          title = _ref3.title;

      return _react2.default.createElement(
        'li',
        { className: 'saving-item', key: sKey },
        _react2.default.createElement(
          'div',
          { className: 'saving-item-index' },
          sKey + 1,
          '.'
        ),
        _react2.default.createElement(
          'div',
          { className: 'saving-item-title' },
          _react2.default.createElement(_index2.default, { dataSource: title || '----' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'saving-item-operating' },
          title && _react2.default.createElement(_index.LywBtn, {
            btnProps: {
              onClick: function onClick() {
                _this.onLoad(sKey);
              }
            },
            dataSource: [{ ss: 'du2qu3', cn: '读取' }],
            fontStyle: { fontSize: 14 }
          }),
          _react2.default.createElement(_index.LywBtn, {
            btnProps: {
              type: 'primary',
              onClick: function onClick() {
                _this.onRewrite(sKey);
              }
            },
            dataSource: [{ ss: 'fu4gai4', cn: '覆盖' }],
            fontStyle: { fontSize: 14 }
          }),
          title && _react2.default.createElement(_index.LywBtn, {
            btnProps: {
              type: 'danger',
              onClick: function onClick() {
                _this.onDelete(sKey);
              }
            },
            dataSource: [{ ss: 'shan1chu2', cn: '删除' }],
            fontStyle: { fontSize: 14 }
          })
        )
      );
    }, _this.onRewrite = function (index) {
      // console.log(this.state);
      var _this$props$savingDat = _this.props.savingData,
          savingData = _this$props$savingDat === undefined ? [] : _this$props$savingDat;

      var _ref4 = savingData[index] || {},
          title = _ref4.title;

      var content = void 0;
      if (!title) {
        // content = `${index+1}号存档为空，保存当前编辑内容到此存档吗？`;
        content = _react2.default.createElement(
          'div',
          { className: 'modal-content' },
          _react2.default.createElement(
            'div',
            { className: 'modal-content-notice' },
            _react2.default.createElement(_index2.default, { dataSource: index + 1 + 'hao4 \u5B58\u6863 wei2 \u7A7A\uFF0C\u4FDD\u5B58 \u5F53\u524D \u7F16ji2\u533A \u5185\u5BB9 dao4 \u6B64 \u5B58\u6863 ma0\uFF1F\u8BF7 qi3 \u65B0 \u6807ti2 \u5F8C \u6309 \u786E\u8BA4\uFF1A', fontStyle: { fontSize: 12 } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal-content-notice' },
            index + 1,
            '\u53F7\u5B58\u6863\u4E3A\u7A7A\uFF0C\u4FDD\u5B58\u5F53\u524D\u7F16\u8F91\u533A\u5185\u5BB9\u5230\u6B64\u5B58\u6863\u5417\uFF1F\u8BF7\u8D77\u65B0\u6807\u9898\u540E\u6309\u786E\u8BA4\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_index4.default, {
              ref: function ref(r) {
                _this.titleEditor = r;
              },
              inputProps: { placeholder: '这里也是可以写龙彦文的' }
            })
          )
        );
      } else {
        var titleLyw = _react2.default.createElement(_index2.default, {
          dataSource: title,
          fontStyle: { fontSize: 12, color: '#108ee9', fill: '#108ee9' }
        });
        content =
        // lywMulti并行显示：
        _react2.default.createElement(
          'div',
          { className: 'modal-content' },
          _react2.default.createElement(
            'div',
            { className: 'modal-content-notice' },
            _react2.default.createElement(_index2.default, { dataSource: '\u786E\u8BA4 \u5220\u9664 \u6807ti2 wei2 ', fontStyle: { fontSize: 12 } }),
            titleLyw,
            _react2.default.createElement(_index2.default, { dataSource: 'd0 ' + (index + 1) + 'hao4 \u539F \u6587\u6863\uFF0Cbing4 \u4FDD\u5B58 \u5F53\u524D \u7F16ji2\u533A \u5185\u5BB9 dao4 \u6B64 \u5B58\u6863 ma0\uFF1F\u8BF7 qi3 \u65B0 \u6807ti2 \u5F8C \u6309 \u786E\u8BA4\uFF1A', fontStyle: { fontSize: 12 } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal-content-notice' },
            '\u786E\u8BA4\u5220\u9664\u6807\u9898\u4E3A',
            titleLyw,
            '\u7684',
            index + 1,
            '\u53F7\u539F\u6587\u6863\uFF0C\u5E76\u4FDD\u5B58\u5F53\u524D\u7F16\u8F91\u533A\u5185\u5BB9\u5230\u6B64\u5B58\u6863\u5417\uFF1F\u8BF7\u8D77\u65B0\u6807\u9898\u540E\u6309\u786E\u8BA4\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_index4.default, {
              ref: function ref(r) {
                _this.titleEditor = r;
              },
              inputProps: { placeholder: title ? '不填即保留原标题' : '这里也是可以写龙彦文的' }
            })
          )
        );
      }
      _antd.Modal.confirm({
        content: content,
        onOk: function onOk(closeCb) {
          var len = _this.titleEditor.getLength();
          var newTitle = _this.titleEditor.getValue();
          if (!title && !len) {
            // message.error(<div style={{width: 400}}>hello</div>, 222);
            _antd.message.error(_react2.default.createElement(_index2.default, { dataSource: '\u6807ti2 hai2mei2 qi3 ne0', fontStyle: { fontSize: 12 } }));
            _antd.message.error('标题还没起呢');
          } else if (len > 22) {
            _antd.message.error(_react2.default.createElement(_index2.default, { dataSource: '\u5B57\u6570 \u8D85guo4l0 neng2\u4E0Dneng2 duan3 \u4E00dian3', fontStyle: { fontSize: 12 } }));
            _antd.message.error('字数超过了，能不能短一点？');
          } else {
            _antd.message.success(_react2.default.createElement(_index2.default, { dataSource: '\u4FDD\u5B58 \u6210\u529F', fontStyle: { fontSize: 12 } }));
            _antd.message.success('保存成功');
            closeCb();
            _this.props.savingCb('rewrite', index, newTitle || title);
          }
        }
      });
    }, _this.onLoad = function (index) {
      // console.log(this.state);
      var _this$props$savingDat2 = _this.props.savingData,
          savingData = _this$props$savingDat2 === undefined ? [] : _this$props$savingDat2;

      var _ref5 = savingData[index] || {},
          title = _ref5.title;

      var titleLyw = _react2.default.createElement(_index2.default, {
        dataSource: title,
        fontStyle: { fontSize: 12, color: '#108ee9', fill: '#108ee9' }
      });
      var content =
      // lywMulti并行显示：
      _react2.default.createElement(
        'div',
        { className: 'modal-content' },
        _react2.default.createElement(
          'div',
          { className: 'modal-content-notice' },
          _react2.default.createElement(_index2.default, { dataSource: '\u786E\u8BA4 \u8BFB\u53D6 \u6807ti2 wei2 ', fontStyle: { fontSize: 12 } }),
          titleLyw,
          _react2.default.createElement(_index2.default, { dataSource: 'd0 ' + (index + 1) + 'hao4 \u6587\u6863\uFF1F\u5F53\u524D \u7F16ji2\u533A \u5185\u5BB9 jiang1 bei4 \u6E05\u9664\u3002', fontStyle: { fontSize: 12 } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal-content-notice' },
          '\u786E\u8BA4\u8BFB\u53D6\u6807\u9898\u4E3A',
          titleLyw,
          '\u7684',
          index + 1,
          '\u53F7\u6587\u6863\uFF1F\u5F53\u524D\u7F16\u8F91\u533A\u5185\u5BB9\u5C06\u88AB\u6E05\u9664\u3002'
        )
      );
      _antd.Modal.confirm({
        content: content,
        onOk: function onOk(closeCb) {
          _this.props.savingCb('load', index);
          closeCb();
        }
      });
    }, _this.onDelete = function (index) {
      // console.log(this.state);
      var _this$props$savingDat3 = _this.props.savingData,
          savingData = _this$props$savingDat3 === undefined ? [] : _this$props$savingDat3;

      var _ref6 = savingData[index] || {},
          title = _ref6.title;

      var titleLyw = _react2.default.createElement(_index2.default, {
        dataSource: title,
        fontStyle: { fontSize: 12, color: '#108ee9', fill: '#108ee9' }
      });
      var content =
      // lywMulti并行显示：
      _react2.default.createElement(
        'div',
        { className: 'modal-content' },
        _react2.default.createElement(
          'div',
          { className: 'modal-content-notice' },
          _react2.default.createElement(_index2.default, { dataSource: '\u786E\u8BA4 \u5220\u9664 \u6807ti2 wei2 ', fontStyle: { fontSize: 12 } }),
          titleLyw,
          _react2.default.createElement(_index2.default, { dataSource: 'd0 ' + (index + 1) + 'hao4 \u6587\u6863\uFF1F\u6B64 \u64CD\u4F5C \u4E0D\u53EF \u6062\u590D', fontStyle: { fontSize: 12 } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal-content-notice' },
          '\u786E\u8BA4\u5220\u9664\u6807\u9898\u4E3A',
          titleLyw,
          '\u7684',
          index + 1,
          '\u53F7\u6587\u6863\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\u3002'
        )
      );
      _antd.Modal.confirm({
        content: content,
        onOk: function onOk(closeCb) {
          _this.props.savingCb('delete', index);
          closeCb();
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LywNav, [{
    key: 'render',

    // constructor(props) {
    //   super(props);
    //   // this.state = {
    //   //   newTitle: '',
    //   // };
    // }
    value: function render() {
      // console.log(this.state);
      return _react2.default.createElement(
        'div',
        { className: 'editor-nav' },
        _react2.default.createElement(
          'div',
          { className: 'editor-nav-side' },
          _react2.default.createElement(
            _antd.Tooltip,
            { placement: 'bottom', title: '\u9F99\u5F66\u6587 \u8BA4\u8BFB \u8BAD\u7EC3' },
            _react2.default.createElement('span', {
              className: 'iconfont iconfont-reading',
              onClick: function onClick() {
                window.open(songtsyUrl);
              }
            })
          )
        ),
        _react2.default.createElement(_index.LywHoverCn, {
          className: 'editor-nav-title',
          align: 'c',
          dataSource: [{
            ss: 'long2yan4wen2 bian1ji2qi4',
            cn: '龙彦文 编辑器'
          }],
          fontStyle: { fontSize: 20 }
        }),
        _react2.default.createElement(
          'div',
          { className: 'editor-nav-side' },
          _react2.default.createElement(
            _antd.Popover,
            {
              className: 'setting-popover',
              content: this._settingMenu(),
              placement: 'bottomRight',
              trigger: 'click'
            },
            _react2.default.createElement(_antd.Icon, { type: 'setting' })
          ),
          _react2.default.createElement(
            _antd.Popover,
            {
              className: 'setting-popover',
              content: this._savingMenu(),
              placement: 'bottomRight',
              trigger: 'click'
            },
            _react2.default.createElement(_antd.Icon, { type: 'save' })
          )
        )
      );
    }
  }]);

  return LywNav;
}(_react2.default.Component);

exports.default = LywNav;

/***/ }),

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _antd = __webpack_require__(176);

var _index = __webpack_require__(177);

var _index2 = _interopRequireDefault(_index);

__webpack_require__(957);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MiniLywEditor = function (_React$Component) {
  _inherits(MiniLywEditor, _React$Component);

  function MiniLywEditor(props) {
    _classCallCheck(this, MiniLywEditor);

    var _this = _possibleConstructorReturn(this, (MiniLywEditor.__proto__ || Object.getPrototypeOf(MiniLywEditor)).call(this, props));

    _this.onChange = function (e) {
      var _ref = e.target || {},
          _ref$value = _ref.value,
          value = _ref$value === undefined ? '' : _ref$value;

      _this.setState({ value: value });
    };

    _this.getValue = function () {
      return _this.state.value;
    };

    _this.getLength = function () {
      var viewNode = _reactDom2.default.findDOMNode(_this.view);
      if (!viewNode || !viewNode.childNodes) return 0;
      var pre = viewNode.childNodes[0];
      if (!pre || !pre.childNodes || !pre.childNodes.length) return 0;
      var len = 0;
      pre.childNodes.forEach(function (child) {
        if (child.nodeType === 3) {
          len += child.length;
        } else {
          len++;
        }
      });
      return len;
    };

    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(MiniLywEditor, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      var _props$inputProps = this.props.inputProps,
          inputProps = _props$inputProps === undefined ? {} : _props$inputProps;

      return _react2.default.createElement(
        'div',
        { className: 'mini-lyw-editor', ref: function ref(r) {
            _this2.bar = r;
          } },
        _react2.default.createElement(_index2.default, {
          className: 'mini-lyw-view',
          ref: function ref(r) {
            _this2.view = r;
          },
          dataSource: value
        }),
        _react2.default.createElement(_antd.Input, _extends({ onChange: this.onChange }, inputProps))
      );
    }
  }]);

  return MiniLywEditor;
}(_react2.default.Component);

exports.default = MiniLywEditor;

/***/ }),

/***/ 957:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 958:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

})