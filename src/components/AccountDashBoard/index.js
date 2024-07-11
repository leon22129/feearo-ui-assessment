import React from 'react';
import AccountInfo from './AccountInfo';
import '../../account-overview.css';


export const AccountDashBoard = ({data}) => {
  console.log(data);

  return (
        <div className="AccountDashboard">
          <div className="AccountName">Account Overview</div>
        
          <AccountInfo/>
      </div>
  )
}

export default AccountDashBoard;