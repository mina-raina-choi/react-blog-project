import React, { Component } from 'react';
import styles from './MarkdownRender.scss';
import classNames from 'classnames/bind';

import marked from 'marked';

import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-javascript';

const cx = classNames.bind(styles);

class MarkdownRender extends Component {


  state = {
    html: ''
  }


  renderMarkdown = () => {
    const { markdown } = this.props;

    if(!markdown) {
      this.setState({html: ''});
      return;
    }
    this.setState({
      html: marked(markdown, {
        breaks: true, // 일반엔테로 새줄입력
        sanitize: true // 마크다운 내부 html 무시
      })
    })
  }

  constructor(props) {
    super(props);
    const { markdown } = props;

    // 서버사이드렌더링에서도 마트다운처리되도록!! contructor에서도 구현.
    this.state = {
      html: markdown ? marked(props.markdown, {breaks:true, sanitize: true}) : ''
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // 마크다운이 변경되면 renderMArkdowmn
    if(prevProps.markdown !== this.props.markdown) {
      this.renderMarkdown();
    }

    // state 바뀌면 코드하이라이팅
    if(prevState.html !== this.state.html) {
      Prism.highlightAll();
    }
  }

  render() {

    const { html } = this.state;


    const markup = {
      __html: html
    }

    return (
      <div className={cx('markdown-render')} dangerouslySetInnerHTML={markup}>
      </div>
    );
  }
}

export default MarkdownRender;