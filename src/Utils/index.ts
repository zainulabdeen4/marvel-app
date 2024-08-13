import Snackbar from 'react-native-snackbar';
import CryptoJS from 'crypto-js';
import Config from 'react-native-config';
import i18n from '../translations/i18n';

const showErrorMessage = (message: string = 'Something Went Wrong') => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_SHORT,
  });
};

const createHash = (ts: number) => {
  const hash = CryptoJS.MD5(
    `${ts}${Config.PRIVATE_API_KEY}${Config.PUBLIC_API_KEY}`,
  ).toString();
  return hash;
};
const pathReplace = (path: string = '') => {
  return path.replace('http', 'https');
};
interface typeErrorData {
  data: any;
  status: number;
}
const handleApiError = (errorData: typeErrorData) => {
  let message = '';
  if (errorData) {
    if (errorData.data && errorData.data.message) {
      message = errorData.data.message;
    } else {
      const errorStatusCode = errorData.status ? errorData.status : 1;

      if (errorStatusCode) {
        switch (errorStatusCode) {
          case 409:
            message = 'Api Key Error';
            break;
          case 403:
            message = 'Something Went Wrong';
            break;
          case 405:
            message = 'Wrong or Restricted˝ Api Path';
            break;
          case 404:
            message = 'Request Not Found';
            break;
          case 500:
            message = 'Internal Server Error';
            break;
          case 0:
            message = 'Connection Time Out';
            break;
          default:
            message = 'Something Went Wrong';
            break;
        }
      } else {
        message = 'Something Went Wrong';
      }
    }
  } else {
    message = 'Something Went Wrong';
  }

  return message;
};

const toggleLanguage = () => {
  i18n.changeLanguage(i18n.resolvedLanguage === 'ar' ? 'en' : 'ar');
};

export {
  showErrorMessage,
  createHash,
  pathReplace,
  handleApiError,
  toggleLanguage,
};
