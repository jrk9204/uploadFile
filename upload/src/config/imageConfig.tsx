import fileDefault from '../assets/blank-file.png';
import fileCSS from '../assets/css-file.png';
import filePdf from '../assets/pdf-file.png';
import filePng from '../assets/png-file.png';

interface ImageType {
  [key: string]: string;
  default: string;
  pdf: string;
  png: string;
  css: string;
}

export const ImageConfig: ImageType = {
  default: fileDefault,
  pdf: filePdf,
  png: filePng,
  css: fileCSS,
};
