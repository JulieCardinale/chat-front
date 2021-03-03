/* Import(s) */
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/reusables/Loader';
import Header from 'containers/Header';
import MessagesList from 'containers/MessagesList';
import ConversationForm from 'containers/ConversationForm';

/* * * * * * * * * * *
 * * Home component *
 *
 * @description : The home page. Contains Header, MessagesList & ConversationForm
 *
 * @props --------------------------------------------------------
 * - socketConnect (func dispatched)    => Connect to websocket
 * - getUserDatas (func dispatched)     => get user datas
 * - isLoading (bool)                   => isLoading or not
 * - loadStart (func dispatched)        => start loading mode
 * ---------------------------------------------------------------
 *
 */
const Home = ({ socketConnect, getUserDatas, isLoading, loadStart }) => {
  /* * * * * * * * *
   * * useEffects *
   */
  useEffect(socketConnect, []);
  useEffect(getUserDatas, []);
  useEffect(loadStart, []);

  /* * * * *
   * * JSX *
   */
  return (
    <div>
      <Loader active={isLoading} />
      {!isLoading && (
        <div className="chat-home">
          <Header />
          <MessagesList />
          <ConversationForm />
        </div>
      )}
    </div>
  );
};

/* PropTypes */
Home.propTypes = {
  socketConnect: PropTypes.func.isRequired,
  getUserDatas: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadStart: PropTypes.func.isRequired,
};

/* Export component */
export default Home;
