import React from 'react';
import './uploadBody.css';
import { useState, useRef } from 'react';
import InitBody from '../molecules/initBody';
import UpLoadFile from '../molecules/upLoadFile';
import UploadBtn from '../atoms/uploadBtn';
import { fileType } from '../../global/types/fileDataType';
import useUpload from '../../hooks/useUpload';

function UploadBody() {
  const [fileData, onFileDrop, fileRemove] = useUpload();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropArea = useRef<HTMLInputElement>(null);

  const onDragEnter = (
    e: React.DragEvent<HTMLDivElement>
  ): void => {
    if (dropArea !== null && dropArea.current !== null) {
      dropArea.current.classList.add('dragover');
    }

    console.log('entered', e.type);
  };
  const onDragLeave = (
    e: React.DragEvent<HTMLDivElement>
  ) => {
    if (dropArea !== null && dropArea.current !== null) {
      dropArea.current.classList.remove('dragover');
    }

    console.log('live', e.type);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (dropArea !== null && dropArea.current !== null) {
      dropArea.current.classList.remove('dragover');
    }
  };

  const handleInputEl = () => {
    if (inputRef !== null && inputRef.current !== null) {
      inputRef.current.click();
    }
  };

  return (
    <div className="uploadBody">
      <div className="upload-files">
        <div
          className="body"
          id="drop"
          ref={dropArea}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <input
            id="dragArea"
            ref={inputRef}
            type="file"
            multiple
            onChange={onFileDrop}
            value=""
            accept=".jpg, .jpeg, .png, .pdf"
          />
          {fileData.length === 0 && (
            <InitBody handleInputEl={handleInputEl} />
          )}

          {fileData.length !== 0 && (
            <UpLoadFile fileData={fileData} />
          )}
        </div>
      </div>

      {fileData.length !== 0 && (
        <UploadBtn handleInputEl={handleInputEl} />
      )}
    </div>
  );
}

export default UploadBody;

// import React, { useRef, useState } from 'react';
// import PropTypes from 'prop-types';
// import './uploadBody.css';

// import { ImageConfig } from '../config/imageConfig';

// const DropFileInput = (props: any) => {
//   const wrapperRef = useRef<any>(null);

//   const [fileList, setFileList] = useState<any>([]);

//   const onDragEnter = () => {
//     if (wrapperRef !== null && wrapperRef.current !== null)
//       wrapperRef.current.classList.add('dragover');

//     console.log('hello');
//   };
//   const onDragLeave = () => {
//     wrapperRef.current.classList.remove('dragover');

//     console.log('bye');
//   };

//   const onDrop = () =>
//     wrapperRef.current.classList.remove('dragover');

//   const onFileDrop = (e: any) => {
//     const newFile = e.target.files[0];
//     if (newFile) {
//       const updatedList = [...fileList, newFile];
//       setFileList(updatedList);
//       props.onFileChange(updatedList);
//     }
//   };

//   const fileRemove = (file: any) => {
//     const updatedList = [...fileList];
//     updatedList.splice(fileList.indexOf(file), 1);
//     setFileList(updatedList);
//     props.onFileChange(updatedList);
//   };

//   return (
//     <>
//       <div
//         ref={wrapperRef}
//         className="drop-file-input"
//         onDragEnter={onDragEnter}
//         onDragLeave={onDragLeave}
//         onDrop={onDrop}
//       >
//         hehre
//         <div className="drop-file-input__label">
//           <p>Drag & Drop your files here</p>
//         </div>
//         <input type="file" value="" onChange={onFileDrop} />
//       </div>
//       {fileList.length > 0 ? (
//         <div className="drop-file-preview">
//           <p className="drop-file-preview__title">
//             Ready to upload
//           </p>
//           {fileList.map((item: any, index: any) => (
//             <div
//               key={index}
//               className="drop-file-preview__item"
//             >
//               <img
//                 src={
//                   ImageConfig[item.type.split('/')[1]] ||
//                   ImageConfig['default']
//                 }
//                 alt=""
//               />
//               <div className="drop-file-preview__item__info">
//                 <p>{item.name}</p>
//                 <p>{item.size}B</p>
//               </div>
//               <span
//                 className="drop-file-preview__item__del"
//                 onClick={() => fileRemove(item)}
//               >
//                 x
//               </span>
//             </div>
//           ))}
//         </div>
//       ) : null}
//     </>
//   );
// };

// DropFileInput.propTypes = {
//   onFileChange: PropTypes.func,
// };

// export default DropFileInput;
