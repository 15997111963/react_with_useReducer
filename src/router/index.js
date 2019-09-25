import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import HomePage from '@/page/homePage'

// import User from '@/page/user'
// import UserInfo from '@/components/user/info'
// import Collection from '@/components/user/collection'
// import Balance from '@/components/user/balance'
// import Quota from '@/components/user/quota'

import Login from '@/page/login'
// import Register from '@/page/register'

// import Order from '@/page/order'

// import Details from '@/page/details'

// import Navigation from '@/page/navigation'

const routerConfig = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/login/' component={Login}/>
      {/* <Route path='/user/' render={(props) => (
        <User>
          <Route exact path="/user/info/" component={UserInfo}/>
          <Route exact path="/user/collection/" component={Collection}/>
          <Route exact path="/user/balance/" component={Balance}/>
          <Route exact path='/user/quota/' component={Quota}/>
        </User>
      )}/>
      <Route exact path='/register/' component={Register}/>
      <Route exact path='/order/' component={Order}/>
      <Route exact path='/details/' component={Details}/> */}
      {/* <Route exact path='/navigation/' component={Navigation}/> */}
    </Switch>
  </BrowserRouter>
)

export default routerConfig