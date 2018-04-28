import React from 'react';
import ReactDom from 'react-dom';
import CEditor from 'react-contenteditable';
// import $ from 'zepto';
import { html2txt } from 'components/_utils.js';

import './index.less';

const ulPatt = /^[\-\*]\s/;

class MdEditor extends React.Component {
  constructor(props) {
    super(props);
    this.initInnerHTML = '<div class="md-paragraph"> </div>'; // 备用方案
    this.state = {
      // innerHTML: '',
      innerHTML: '<div class="md-paragraph"><i>法国国营铁路公司(SNCF)20日承认,</i>新订购的2000列火车因车体过宽，<u>无法开进国内许多火车站的站台，从而不得不花大笔资金改造站台。</u>法国国营铁路公司发言人克里斯托夫·皮耶诺埃尔告诉法国新闻电台：“我们发现问题晚了点。<s>我们承认这一失误并为此承担责任。”</s></div>',
      // innerHTML: this.initInnerHTML,
    };
  }
  handleChange = (e) => {
    let { value } = e.target || {};
    // if (/\s*</.test(value)) { // 只会在第一次出现
    //   // value = <>
    // }
    if (!value && !value.length) {
      value = this.initInnerHTML;
      this.setState({ innerHTML: value });
    }
    /* 列表监听变化 */
    const $prg = this.getSelectedParagraph$();
    const prgText = $prg.text();
    // console.log(prgText)
    if (!$prg.hasClass('md-ul') && ulPatt.test(prgText)) {
      // console.log($prg)
      $prg.addClass('md-ul');
    } else if ($prg.hasClass('md-ul') && !ulPatt.test(prgText)) {
      $prg.removeClass('md-ul');
    }
    
    // console.log();
    /* 
      NOTE 会和DOM操作冲突，只能在特定时候改；
      NOTE 且会重置selection
    */
    // this.setState({ innerHTML: value }); // 
    
  }
  onFocus = (e) => { // 失败
    if (this.state.innerHTML === this.initInnerHTML) { // 第一次
      e.preventDefault();
      this.initSelection(e);
    }
  }
  initSelection = (e) => {
    let range = document.createRange();
    let sel = window.getSelection();
    range.setStart(e.target.childNodes[0], 0);
    range.setEnd(e.target.childNodes[0], 1);
    // NOTE 不collapse是因为无法阻止默认行为
    sel.removeAllRanges();
    sel.addRange(range);
  }
  onPaste = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const clipboardData = e.clipboardData || window.clipboardData || e.originalEvent.clipboardData || window.prompt('在这里输入文本');
    const pastedData = clipboardData.getData('Text');
    document.execCommand("insertText", false, pastedData);
  }
  onKeyDown = (e) => {
    // console.log(e.metaKey);
    switch (e.keyCode){
      case 9:
        e.preventDefault();
        // let sel = window.getSelection();
        // console.log(sel);
        // if (sel.type === "Caret" && sel.focusOffset === 0) {
        //   document.execCommand("insertText", false, '    ');
        // } else {
          this.changeIndent(1);
        // }
        break;
      case 219:
        if (e.metaKey) {
          e.preventDefault();
          this.changeIndent(-1);
        }
        break;
      case 221:
        if (e.metaKey) {
          e.preventDefault();
          this.changeIndent(1);
        }
        break;
      case 13:
        let $prevPrg = this.getSelectedParagraph$();
        if (ulPatt.test($prevPrg.text())) {
          setTimeout(() => {
            let $prg = this.getSelectedParagraph$();
            let prevText = $prg.text();
            $prg.text('- ' + prevText);
            // console.log($prg.text())
          }, 0);
        }
        
        break;
      default:
        // e.preventDefault();
        // console.log(e.keyCode);
    }
  }
  getSelectedParagraph$ = (cls = 'md-paragraph') => {
    const sel = window.getSelection();
    const $currElem = $(sel.anchorNode.parentElement);
    const $paragraph = $currElem.hasClass(cls) ?
      $currElem : $currElem.parents(`.${cls}`);
    return $paragraph;
  }
  changeIndent = (change = 1) => {
    const $paragraph = this.getSelectedParagraph$();
    const clsList = $paragraph[0].classList;
    let indentCls = 'indent-0', indent = 0;
    for (let i = 0; i < clsList.length; i++) {
      let curCls = clsList[i];
      if (/indent-/.test(curCls)) {
        indentCls = curCls;
        break;
      }
    }
    // console.log(indentCls)
    indent = +indentCls['indent-'.length] + change;
    // console.log(indent);
    if (indent >= 0 && indent <= 6) {
      $paragraph.removeClass(indentCls).addClass(`indent-${indent}`);
    }
  }
  render() {
    const { innerHTML } = this.state;
    // console.log(innerHTML)
    return (
      <div className="md-editor-app">
        <div className="md-view" />
        <pre className="md-editor">
          {/* <div className="ddd" contentEditable onPaste={ this.onPaste } /> */}
          <CEditor
            html={innerHTML}
            onChange={this.handleChange}
            onPaste={this.onPaste}
            onKeyDown={this.onKeyDown}
            onFocus={this.onFocus}
          />
        </pre>
      </div>
    );
  }
}

ReactDom.render(<MdEditor />, document.getElementById('root'));

