import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

interface initProps {
  handleInputEl: () => void;
}

function initBody({ handleInputEl }: initProps) {
  return (
    <div className="fileText">
      <div className="Icon">
        <FontAwesomeIcon icon={faFileLines} size="3x" />
      </div>

      <p className="pointer-none">
        <b>Drag and drop</b> files here <br />
        or &nbsp;
        <span
          className="fileUpload"
          onClick={handleInputEl}
        >
          browse
        </span>
        &nbsp; to begin the upload
      </p>
    </div>
  );
}

export default initBody;
