import React, { Component } from 'react';
import styles from './EditorPane.scss';
import classNames from 'classnames/bind';

import CodeMirror from 'codemirror';

import 'codemirror/mode/markdown/markdown'; // 마크다운 문법 색상
// 마크다운 내부에 들어가는 코드 색상
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';

// 코드미러를 위한 css 스타일링
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';


const cx = classNames.bind(styles);

class EditorPane extends Component {

  editor = null; // 에디더 ref
  codeMirror = null; // codemirror 인스턴스
  cursor = null; // 에디터의 텍스트 커서 위치

  initializeEditor = () => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: 'markdown',
      theme: 'monokai',
      lineNumbers: true, // 왼쪽에 라인 넘버 보이기 
      lineWrapping: true, // 너무 길어지면 다음줄로
    });

    this.codeMirror.on('change', this.handleChangeMarkDown);
  }
  

  handleChangeMarkDown = (doc) => {
    const { onChangeInput } = this.props;
    this.cursor = doc.getCursor();

    onChangeInput({
      name: 'markdown',
      value: doc.getValue()
    });
  }


  handleChange = (e) => {
    const { onChangeInput } = this.props;
    const { value, name } = e.target;
    onChangeInput({name, value});
  }


  componentDidMount() {
    this.initializeEditor();
  }

  componentDidUpdate(prevProps, prevState) {
    // markdown이 변경되면 에디터의 값도 변경....
    // 텍스트 커서의 위치가 초기화되니까....저장한커서의 위치가 있으면 그 위치로 설정
    if(prevProps.markdown !== this.props.markdown) {
      const { codeMirror, cursor } = this;
      if(!codeMirror ) return;
      codeMirror.setValue(this.props.markdown);
      if(!cursor) return;
      codeMirror.setCursor(cursor);
    }
  }

  render() {

    const { handleChange } = this;
    const { tags, title } = this.props;

    return (
      <div className={cx('editor-pane')}>
        <input className={cx('title')} placeholder="제목을 입력하세요" name="title" value={title}
          onChange={handleChange}
          />
        <div className={cx('code-editor')} ref={ref => this.editor = ref }></div>
        <div className={cx('tags')}>
          <div className={cx('desc')}>태그</div>
          <input name="tags" placeholder="태그를 입력하세요 (쉼표로 구분)"
            value={tags}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
}

export default EditorPane;