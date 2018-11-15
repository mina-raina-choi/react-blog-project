import React from 'react';
import styles from './ListTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ListTemplate = ({children}) => (
  <div className={cx('list-wrapper')}>
    {children}
  </div>
);

export default ListTemplate;