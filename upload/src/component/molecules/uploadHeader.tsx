import React from 'react';
import './uploadHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

const uploadHeader = () => {
  return (
    <div className="headerContainer">
      <p>
        <span className="Icon_Header">
          <FontAwesomeIcon
            icon={faCloudArrowUp}
            size="2x"
          />
        </span>
        <span className="up">up</span>
        <span className="load">load</span>
      </p>
    </div>
  );
};

export default uploadHeader;
