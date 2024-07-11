import React from 'react';
import PersonalInfo from './PersonalInfo';
import '../../../account-overview.css';

export const AccountInfo = ({data}) => {
  console.log(data);

  return (
    <div className="AccountInfo">

        <div className="ContactName">YOUR FEEFO SUPPORT CONTACT</div>
        <PersonalInfo/>
    </div>
  )
}

export default AccountInfo;