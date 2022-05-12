import { useState, useEffect } from 'react';
import { fileType } from '../global/types/fileDataType';

function useUpload() {
  const [fileData, setFileData] = useState<Array<fileType>>(
    []
  );

  const onFileDrop = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let fileNames: Array<fileType> = [];

    let filtData: any = e.target.files;

    [...filtData].map((el) => {
      return fileNames.push({
        name: el.name,
        fileType: el.type,
      });
    });

    setFileData([...fileData, ...fileNames]);
  };

  const fileRemove = (file: any) => {
    // const updatedList = [...fileData];
    // updatedList.splice(fileData.indexOf(file), 1);
    // setFileData(updatedList);
  };

  //파일 데이터 전송 코드

  // function handleSubmit(event) {
  //   event.preventDefault()
  //   const url = 'http://localhost:3000/uploadFile';
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   formData.append('fileName', file.name);
  //   const config = {
  //     headers: {
  //       'content-type': 'multipart/form-data',
  //     },
  //   };
  //   axios.post(url, formData, config).then((response) => {
  //     console.log(response.data);
  //   });

  // }

  return [fileData, onFileDrop, fileRemove] as const;
}

export default useUpload;
