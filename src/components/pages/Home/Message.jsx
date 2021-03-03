/* Import(s) */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'components/reusables/Image';
import Text from 'components/reusables/Text';

/* * * * * * * * * * *
 * * Message component *
 *
 * @description : A message.
 *
 * @props --------------------------------------------------
 * - author (str)          => the author
 * - content (fstr)        => the content of the message
 * - picture (fstr)        => the picture of the author
 * - date (fstr)           => the date of the message
 * - authorId (id)         => the author Id
 * ---------------------------------------------------------
 *
 * * @use ---------------------------------------------------------------------------------------------------
 * - sessionStorage => to get connectedUserId
 * (https://developer.mozilla.org/fr/docs/Web/API/Window/sessionStorage)
 * - classNames()   => to display message right or left
 * https://www.npmjs.com/package/classnames https://www.youtube.com/watch?v=LakwDt7K_OQ
 * ----------------------------------------------------------------------------------------------------------
 *
 */
const Message = ({ author, content, picture, date, authorId }) => {
  /* * * * * * * * * * * * * * * * * *
   * * Session Storage, classNames() *
   */
  const { connectedUserId } = sessionStorage;

  const chatMessage = classNames('chat-message', {
    'chat-message-others': connectedUserId !== authorId,
  });

  const chatUserPicture = classNames('chat-user-picture-message', {
    'chat-user-picture-message-others': connectedUserId !== authorId,
  });

  const chatMessageAuthorContentDate = classNames(
    'chat-message__author-content-date',
    {
      'chat-message-others__author-content-date': connectedUserId !== authorId,
    }
  );

  /* * * * *
   * * JSX *
   */
  return (
    <div className={chatMessage}>
      {/* MESSAGE - USER PICTURE */}
      <Image
        className={chatUserPicture}
        src={picture}
        alt={`${author} picture`}
      />
      <div className={chatMessageAuthorContentDate}>
        {/* MESSAGE - AUTHOR NAME */}
        <Text content={author} className="chat-text-message-author" />
        {/* MESSAGE - CONTENT */}
        <Text content={content} className="chat-text-message-content" />
        {/* MESSAGE - DATE */}
        <Text content={date} className="chat-text-message-date" />
      </div>
    </div>
  );
};

/* PropTypes validation */
Message.propTypes = {
  authorId: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

/* Export component */
export default Message;
