/* Import(s) */
import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import ScrollToTop from 'components/reusables/ScrollToTop';
import Home from 'containers/Home';
import Login from 'components/pages/Login';

/* * * * * * * * * * * * * * *
 * * ChatRouter component *
 *
 * @description : The router. The Switch component analyze URL and display the requested page.
 * If there is no correspondence it redirect to home page. On page change we scroll to top.
 * Also, we define the page title, depending of the pathname.
 *
 * @use :
 * Switch              https://reactrouter.com/web/api/Switch
 * scroll-restoration  https://reactrouter.com/web/guides/scroll-restoration/scroll-to-top
 * useLocation         https://reactrouter.com/web/api/Hooks/uselocation
 *
 * @use ---------------------------------------------------------------------------------------------------
 * - Switch              https://reactrouter.com/web/api/Switch
 * - scroll-restoration  https://reactrouter.com/web/guides/scroll-restoration/scroll-to-top
 * - useLocation         https://reactrouter.com/web/api/Hooks/uselocation
 * - document.title      https://developer.mozilla.org/fr/docs/Web/API/Document/title
 * - replace()           https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/replace
 * ----------------------------------------------------------------------------------------------------------
 *
 */
const ChatRouter = () => {
  /* * * * * * * * * * * * * * * * *
   * * Session Storage, page title *
   */
  const { userIsLogged } = sessionStorage;

  const { pathname } = useLocation();
  document.title = `Jcdle - Chat ${pathname.replace(/[/]+/g, '')}`;

  /* * * * * *
   * * ROUTES *
   */
  return (
    <main>
      <ScrollToTop />
      <Switch>
        <Route exact path="/login">
          {userIsLogged ? <Home /> : <Login />}
        </Route>
        <Route exact path="/">
          {userIsLogged ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route component={Home} />
      </Switch>
    </main>
  );
};

/* Export component */
export default ChatRouter;
