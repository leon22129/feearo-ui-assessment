import React from 'react';
import AccountDashBoard from './components/AccountDashBoard';
import SaleDashBoard from './components/SalesDashBoard';

import './account-overview.css';

export const AccountOverview = ({data}) => {
  console.log(data);

  return (
    <div className="AccountOverview">
      <AccountDashBoard/>
      <SaleDashBoard/>
    </div>
  )
}

export default AccountOverview;