import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListTemplate from 'components/list/ListTemplate';
import PostList from 'components/list/PostList';
import Pagination from 'components/list/Pagination';

const ListPage = () => {
    return (
        <PageTemplate>
            <ListTemplate>
                <PostList/>
                <Pagination/>
            </ListTemplate>
        </PageTemplate>
    )
}

export default ListPage;