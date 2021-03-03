import Text from 'components/reusables/Text';

/* * * * * * * * * * *
 * * Intro component *
 *
 * @description : Presentation of the app
 *
 */
const Intro = () => (
  <Text
    content="A simple chat app demo created with Socket.io, Express & React."
    className="chat-intro-text"
  />
);
/* Export component */
export default Intro;
