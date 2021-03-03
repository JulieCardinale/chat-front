/* Import(s) */
import { randomItem } from 'selectors';
import { useRouteMatch } from 'react-router-dom';
import users from 'datas/users';
import LoginForm from 'containers/LoginForm';
import LoginInfos from 'containers/LoginInfos';
import Intro from 'components/pages/Login/Intro';
import CreditPhoto from 'components/pages/Login/CreditPhoto';

/* * * * * * * * *
 * * Login Page *
 *
 * @description : Contains LoginForm, LoginInfo, Intro & Credit photo components
 *
 * @selector ---------------------------------------------------------------------------------------------------
 * - randomItem => get a random item from an array, here random user in users array.
 * - useRouteMatch => verify if we are on login page and apply different style to body
 * https://reactrouter.com/web/api/Hooks/useroutematch
 * classList => add a min-height to body only on this page
 * https://developer.mozilla.org/fr/docs/Web/API/Element/classList
 * ----------------------------------------------------------------------------------------------------------
 *
 */
const Login = () => {
  /* * * * * * * * * * * * * * * * * *
   * * randomItem, add style to body *
   */
  const randomUser = randomItem(users);

  const isLoginPage = useRouteMatch('/login').isExact;
  if (isLoginPage) {
    document.body.classList.add('body-height-auto');
  }

  /* * * * *
   * * JSX *
   */
  return (
    <div className="chat-login">
      <LoginForm />
      <LoginInfos randomUser={randomUser} />
      <Intro />
      <CreditPhoto randomUser={randomUser} />
    </div>
  );
};

/* Export component */
export default Login;
