import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SpaceCard from './components/SpaceCard'
import Details from './components/Details'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={SpaceCard} />
            <Route path="/details" component={Details} />
        </Switch>
    </BrowserRouter>
)