import React from 'react';
import {Route} from 'react-router' ;
import App from './App';


const route = (
       <Route path="/"  component={App}>
       <Route path="/finalpage" component={Finalpage}/> 
       </Route>
)

export default routes