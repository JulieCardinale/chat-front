/* Import(s) */
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Message from 'components/pages/Home/Message';

/* * * * * * * * * * * * * *
 * * MessagesList component *
 *
 * @description : Displays messages list.
 *
 * @props --------------------------------------------------------
 * - messagesList (array)            => list of messages
 * ---------------------------------------------------------------
 *
 * @use ---------------------------------------------------------------------------------------------------
 * - useRef       => select messages-list div
 * https://fr.reactjs.org/docs/hooks-reference.html#useref
 *
 * - scrollTo()   => scroll to the bottom of messages-list div
 * https://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page?lq=1
 * https://developer.mozilla.org/fr/docs/Web/API/Element/scrollTo
 *
 * - map()        => loop on messages list
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map
 * ----------------------------------------------------------------------------------------------------------
 *
 */
const MessagesList = ({ messagesList }) => {
  /* * * * * * * * * * * * * * * * *
   * * useRef, useEffect, scrollTo *
   */
  const msgRef = useRef();
  useEffect(() => msgRef.current.scrollTo(0, msgRef.current.scrollHeight), [
    messagesList,
  ]);

  /* * * * *
   * * JSX *
   */
  return (
    <div ref={msgRef} className="chat-messages-list">
      {messagesList.map((message) => (
        <Message
          key={message.id}
          author={message.author}
          content={message.content}
          picture={message.picture}
          date={message.date}
          authorId={message.authorId}
        />
      ))}
    </div>
  );
};

/* PropTypes validation */
MessagesList.propTypes = {
  messagesList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

/* Export component */
export default MessagesList;
