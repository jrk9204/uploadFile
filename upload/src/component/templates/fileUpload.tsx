import React from 'react';
import UploadHeader from '../molecules/uploadHeader';
import UploadBody from '../organisms/uploadBody';

import './fileUpload.css';

function FileUpload() {
  return (
    <div className="uploadContainer">
      <div className="uploadWrapper">
        <UploadHeader />
        <UploadBody />
      </div>
    </div>
  );
}

export default FileUpload;
