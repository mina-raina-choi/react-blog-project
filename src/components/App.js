import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ListPage, PostPage, EditorPage, NotFoundPage } from 'pages';


const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={ListPage}></Route>
                <Route path="/page/:page" component={ListPage}></Route>
                <Route path="/tag/:tag/:page?" component={ListPage}></Route>
                <Route path="/post/:id" component={PostPage}></Route>
                <Route path="/editor" component={EditorPage}></Route>
                <Route component={NotFoundPage}></Route>
            </Switch>
        </div>
    )
}

export default App;