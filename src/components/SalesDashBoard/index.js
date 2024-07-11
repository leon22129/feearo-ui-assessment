import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faUpload  } from '@fortawesome/free-solid-svg-icons';
import SalesSummary from './SalesSummary'

import '../../account-overview.css';

export const AccountOverview = ({data}) => {
  console.log(data);

  return (

      <div className="SalesDashboard">

        <SalesSummary/>

        <div className="SalesDetail">
          <div className="SalesItem">
            <div className="Percentage">0%</div>UPLOAD SUCCESS
          </div>

          <div className="SalesItem">
            <div className="Percentage">0%</div>LINES SAVED
          </div>
        </div>


      </div>

  )
}

export default AccountOverview;