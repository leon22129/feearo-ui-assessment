import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';

import '../../../../account-overview.css';

export const PersonalInfo = ({data}) => {
  console.log(data);

  return (
        <div className="PersonalInfo">
            <div className="Badge">S</div>
                <div className="SupportDash">
                <b>Support</b>

                <div className="InfoDash"> 
                    <div className="Email">
                        <FontAwesomeIcon icon={faEnvelope}/>
                        support@feefo.com
                    </div>
                    <div className="Telephone">
                        020 3362 4208
                    </div>
                </div>
            </div>    
        </div>
  )
}

export default PersonalInfo;
