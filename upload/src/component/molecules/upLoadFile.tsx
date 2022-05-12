import React from 'react';
import { ImageConfig } from '../../config/imageConfig';
import { fileType } from '../../global/types/fileDataType';

interface upLoadProps {
  fileData: Array<fileType>;
}

function UpLoadFile({ fileData }: upLoadProps) {
  return (
    <div>
      {fileData.map((el) => (
        <div
          className="fileContainer"
          key={el.name + Math.random()}
        >
          <img
            src={
              ImageConfig[el.fileType.split('/')[1]] ||
              ImageConfig['default']
            }
            alt=""
          />
          <div className="fileName">{el.name}</div>
        </div>
      ))}
    </div>
  );
}

export default UpLoadFile;
