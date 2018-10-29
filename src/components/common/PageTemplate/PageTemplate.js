import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Header from 'components/common/Header';
import Footer from '../Footer';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => (
    <div className={cx('page-template')}>
        <Header></Header>
        <main>
            {children}
        </main>
        <Footer></Footer>
    </div>
)

export default PageTemplate;