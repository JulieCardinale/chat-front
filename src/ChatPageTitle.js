/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */

/* Import : useLocation */
import { useLocation } from 'react-router-dom';

/*
 * PageTitleItem component
 */
const ChatPageTitle = () => {
  const pathName = useLocation().pathname;

  let pageTitle = '';

  switch (pathName) {
    case '/login':
      pageTitle = 'login';
      break;
    case '/':
      pageTitle = 'room';
      break;
    default:
      pageTitle = '';
  }

  document.title = `Jcdle - Chat ${pageTitle}`;

  return null;
};

/* Export component */
export default ChatPageTitle;
