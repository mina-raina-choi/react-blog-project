import React, { Component } from 'react';
import styles from './EditorTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class EditorTemplate extends Component {

  // 화면분할 반반!
  state = {
    leftPercentage : 0.5
  }

  // 마우스를 클릭 후 움직이면 그에 따라 leftp 업데이트
  handleMouseMove = (e) => {
    this.setState({
      leftPercentage: e.clientX / window.innerWidth
    });
  }

  // 마우스를 뗐을 때, 등록한 이벤트 제거
  handleMouseUp = (e) => {
    console.log('handleMouseUp', e)
    document.body.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  // separator 클릭할 때
  handleSeparatorMouseDown = (e) => {
    document.body.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  }


  render() {
    const { header, editor, preview } = this.props;
    const { leftPercentage } = this.state;
    const { handleSeparatorMouseDown } = this;

    const leftStyle = {
      flex: leftPercentage
    }

    const rightStyle = {
      flex: 1 - leftPercentage
    }

    const separatorStyle = {
      left: `${leftPercentage * 100}`
    }


    return (
      <div className={cx('editor-template')}>
        {header}
        <div className={cx('panes')}>
          <div className={cx('pane', 'editor')} style={leftStyle}>
            {editor}
          </div>
          <div className={cx('pane', 'preview')} style={rightStyle}>
            {preview}
          </div>
          <div className={cx('separator')}
            style={separatorStyle}
            onMouseDown={handleSeparatorMouseDown}
            />
        </div>
      </div>
    );
  }
}

export default EditorTemplate;