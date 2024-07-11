import React from 'react';

import '../../account-overview.css';

export const SalesItem = ({pro, desc}) => {

  return (
          <div className="SalesItem">
            <div className="Percentage">{pro}%</div>{desc}
          </div>
  )
}

export default SalesItem;