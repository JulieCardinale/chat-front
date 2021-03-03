/* Import(s) */
import PropTypes from 'prop-types';
import Text from 'components/reusables/Text';
import Copy from 'containers/Copy';

/* * * * * * * * * * * * *
 * * LoginInfo component *
 *
 * @description : Random user login informations
 *
 * @props --------------------------------------------------------
 * - randomUser (obj)  => contains random login informations
 * ---------------------------------------------------------------
 *
 */
const LoginInfos = ({ randomUser }) => {
  const { password, email } = randomUser;

  /* * * * *
   * * JSX *
   */
  return (
    <div className="chat-login-infos">
      <div className="chat-login-infos__info">
        {/* LOGIN INFOS - RANDOM EMAIL */}
        <Text content={email} className="chat-login-infos-text" />
        {/* LOGIN INFOS - COPY BUTTON */}
        <Copy
          textToCopy={email}
          itemName="email"
          className="chat-login-infos-button"
        />
      </div>
      <div className="chat-login-infos__info">
        {/* LOGIN INFOS - RANDOM PASSWORD */}
        <Text content={password} className="chat-login-infos-text" />
        {/* LOGIN INFOS - COPY BUTTON */}
        <Copy
          textToCopy={password}
          itemName="password"
          className="chat-login-infos-button"
        />
      </div>
    </div>
  );
};

/* PropTypes validation */
LoginInfos.propTypes = {
  randomUser: PropTypes.objectOf(PropTypes.string).isRequired,
};

/* Export component */
export default LoginInfos;
