/* Import(s) */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Image from 'components/reusables/Image';
import Text from 'components/reusables/Text';
import Button from 'components/reusables/Button';

/* * * * * * * * * * *
 * * Header component *
 *
 * @description : Contains user infos & logout button.
 *
 * @props --------------------------------------------------------
 * - picture (fstr)              => the picture of the author
 * - username (str)              => the connected user name
 * ---------------------------------------------------------------
 *
 * @use ----------------------------------------------------------------------------------------
 * - sessionStorage.clear()  => clear userDatas from storage
 * https://developer.mozilla.org/fr/docs/Web/API/Storage/clear
 * - window.location         => redirect to /login page
 * https://developer.mozilla.org/fr/docs/Web/API/window/location
 * ---------------------------------------------------------------------------------------------
 *
 */
const Header = ({ picture, username }) => {
  /* * * * * * * *
   * * handlers *
   */
  const handleOnSubmitLogout = () => {
    sessionStorage.clear();
    window.location = '/login';
  };

  /* * * * *
   * * JSX *
   */
  return (
    <div className="chat-header">
      <div className="chat-header__user-infos">
        {/* HEADER - USER PICTURE */}
        <Image
          className="chat-header-user-picture"
          src={picture}
          alt={`${username} picture`}
        />
        {/* HEADER - USER NAME */}
        <Text content={username} className="chat-text-username-header" />
      </div>
      {/* HEADER - LOGOUT BUTTON */}
      <Button
        className="chat-logout-button"
        text={<FontAwesomeIcon icon={faPowerOff} />}
        onClickAction={handleOnSubmitLogout}
      />
    </div>
  );
};

/* PropTypes */
Header.propTypes = {
  username: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

/* Export component */
export default Header;
