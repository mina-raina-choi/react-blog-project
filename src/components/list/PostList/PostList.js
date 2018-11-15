import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const PostItem = () => (
  <div className={cx('post-item')}>
    <h2><a>타이틀</a></h2>
    <div className={cx('date')}>2018-11-15</div>
    <p>content</p>
    <div className={cx('tags')}>
      <a>#tag</a>
      <a>#tag</a>
      <a>#tag</a>
    </div>
  </div>
);

const PostList = () => (
  <div className={cx('post-list')}>
    <PostItem/>
    <PostItem/>
    <PostItem/>
    <PostItem/>
  </div>
)

export default PostList;