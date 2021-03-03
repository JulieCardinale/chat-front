/* Import(s) */
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faCheck } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

/* * * * * * * * * *
 * * Copy component *
 *
 * @description : A component to copy to clipBoard a text. The button change when copied.
 *
 * @props -------------------------------------------------------------------------------------------------
 * - textToCopy (str)               => The text we want to copy
 * - itemName (str)                 => The name of the item we want to copy
 * - setAsCopied (dispatched func)  => Store to state the name of the copied element to change copy icon
 * - copiedItemName (str)           => The name of the item we have copied
 * - className (str)                => custom className
 * --------------------------------------------------------------------------------------------------------
 *
 * @use ---------------------------------------------------------------------------------------------------
 * - CopyToClipboard => lib that handle copy to clipBoard https://www.npmjs.com/package/react-copy-to-clipboard
 * - FontAwesomeIcon => clipboard icon, check icon (https://fontawesome.com/how-to-use/on-the-web/using-with/react)
 * --------------------------------------------------------------------------------------------------------
 *
 */
const Copy = ({
  textToCopy,
  itemName,
  setAsCopied,
  copiedItemName,
  className,
}) => (
  <CopyToClipboard text={textToCopy} onCopy={() => setAsCopied(itemName)}>
    <button type="button" className={className}>
      <FontAwesomeIcon
        icon={copiedItemName === itemName ? faCheck : faClipboard}
      />
    </button>
  </CopyToClipboard>
);

/* PropTypes */
Copy.propTypes = {
  textToCopy: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  setAsCopied: PropTypes.func.isRequired,
  copiedItemName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

/* Export component */
export default Copy;
