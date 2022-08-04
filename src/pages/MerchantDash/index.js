import React from 'react'
import MerUpNav from '../../components/MerchantDashboard/MerUpNav';
import MerBottomNav from '../../components/MerchantDashboard/MerBottomNav';
// import MerNews from '../../components/MerchantDashboard/MerNews';
// import MerUniversities from '../../components/MerchantDashboard/MerUniversities';
// import MerStudents from '../../components/MerchantDashboard/MerStudents';

// import { Switch, Route, Redirect } from 'react-router-dom';
const MerchantDash = () => {
    return (
        <div>
            <MerUpNav />
            <MerBottomNav />
            {/* <MerNews />
            <MerUniversities />
            <MerStudents /> */}
{/*             
      <Switch>
        <Route exact path="/merchantDashboard" component={MerStudents} />
        <Route exact path="/merchantNews" component={MerNews} />
        <Route exact path="/merchantUniversities" component={Universities} />
      </Switch> */}
        </div>
    )
}

export default MerchantDash;
