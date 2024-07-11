import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faUpload  } from '@fortawesome/free-solid-svg-icons';

import '../../../account-overview.css';

export const SalesSummary = ({data}) => {
  console.log(data);

  return (
        <div className="SaleSummary">
          <div>
            <FontAwesomeIcon icon={faUpload} style={{color: '#00a9d4'}}/> <b> Sales</b>

            <div className="FloatRight"><FontAwesomeIcon icon={faInfoCircle} style={{color: '#808080'}}/></div>
          </div>
          <div className="SaleDesc">You had <b>0 uploads</b> and <b>0</b> lines added.</div>
        </div>
  )
}

export default SalesSummary;