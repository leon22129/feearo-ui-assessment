import React from 'react';

import SalesItem from './SalesItem';
import '../../account-overview.css';

export const SalesDetail = ({data}) => {
  console.log(data);

  return (

        <div className="SalesDetail">
            <SalesItem pro={0} desc="UPLOAD SUCCESS"/>
            <SalesItem pro={0} desc="LINES SAVED"/>
        </div>
  )
}

export default SalesDetail;