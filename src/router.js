import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './components/main.jsx';
import All from './components/all.jsx';

const router = (
    <Route path="/" component={Main}>
        <IndexRoute component={All}></IndexRoute>
        <Route path="/all" component={All}></Route>
        <Route path="*" component={All}></Route>
    </Route>
)
export default router;