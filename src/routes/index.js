import React from 'react';
import {Router,Route, Switch, Redirect, IndexRoute } from 'react-router'

import App from '../root/root-App';
import example from '../example/_example';
import NoMatch from '../root/noMatch';
import Counter from '../counter/counter';

export default(

    
    <Route exact path="/" component={App}>
         <Route path="help" component={example}/>
         <Route path="counter" component={Counter}/>
         <Route path='*' component={NoMatch} />
    </Route>
    
);