import React from 'react';

interface BtnProps {
  handleInputEl: () => void;
}

function uploadBtn({ handleInputEl }: BtnProps) {
  return (
    <button className="importar" onClick={handleInputEl}>
      UPDATE FILES
    </button>
  );
}

export default uploadBtn;
