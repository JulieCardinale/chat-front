/* Import(s) */
import PropTypes from 'prop-types';

/* * * * * * * * * * * * * * *
 * * Credit Photo component *
 *
 * @description : Display user photo credit
 *
 * @props ----------------------------------------------------------------------------------------------------
 * - randomUser (obj)  => contains random user informations like creditPhotoAuthorId or creditPhotoAuthorName
 * -----------------------------------------------------------------------------------------------------------
 *
 */
const CreditPhoto = ({ randomUser }) => {
  const { creditPhotoAuthorId, creditPhotoAuthorName } = randomUser;
  /* * * * *
   * * JSX *
   */
  return (
    <p className="chat-credit-photo-text">
      User photo by{' '}
      <a
        href={`https://unsplash.com/${creditPhotoAuthorId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {creditPhotoAuthorName}
      </a>{' '}
      on{' '}
      <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">
        Unsplash
      </a>
      .
    </p>
  );
};

/* PropTypes validation */
CreditPhoto.propTypes = {
  randomUser: PropTypes.objectOf(PropTypes.string).isRequired,
};

/* Export component */
export default CreditPhoto;
