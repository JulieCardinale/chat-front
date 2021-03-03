/* Import(s) */
import DOMPurify from 'dompurify';
import he from 'he';

/* * * * * * * * * * *
 * * scrollToElement *
 *
 * @description : scroll to an element
 *
 * @args ---------------------------------------------------------------------------------------
 * - selector       (str) => element to scroll to
 * - scrollBehavior (str) => scroll behavior auto or smooth
 * ---------------------------------------------------------------------------------------------
 *
 * @use ----------------------------------------------------------------------------------------
 * - scrollIntoView
 * https://developer.mozilla.org/fr/docs/Web/API/Element/scrollIntoView
 * - scroll-behavior
 * https://developer.mozilla.org/fr/docs/Web/CSS/scroll-behavior
 * - querySelector()
 * https://developer.mozilla.org/fr/docs/Web/API/Element/querySelector
 * ---------------------------------------------------------------------------------------------
 *
 */
export const scrollToElement = (selector, scrollBehavior) =>
  document
    .querySelector(`${selector}`)
    .scrollIntoView({ behavior: scrollBehavior });

/* * * * * * * * *
 * * clean Input *
 *
 * @description : prevent code injection
 *
 * @args ---------------------------------------------------------------------------------------
 * - dirtyInputValue (str) => the value to clean
 * ---------------------------------------------------------------------------------------------
 *
 * @use ----------------------------------------------------------------------------------------
 * - DOMPurify
 * https://github.com/cure53/DOMPurify
 * - he
 * https://github.com/mathiasbynens/he
 * ---------------------------------------------------------------------------------------------
 *
 */
export const cleanInput = (dirtyInputValue) =>
  he.decode(DOMPurify.sanitize(dirtyInputValue, { ALLOWED_TAGS: [] }));

/* * * * * * * *
 * * cleanHTML *
 *
 * @description : prevent code injection
 *
 * @args ---------------------------------------------------------------------------------------
 * - dirtyHTML (str) => the value to clean
 * ---------------------------------------------------------------------------------------------
 *
 * @use ----------------------------------------------------------------------------------------
 * - dangerouslySetInnerHTML
 * https://fr.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
 * - DOMPurify
 * https://github.com/cure53/DOMPurify
 * ---------------------------------------------------------------------------------------------
 *
 */
export const cleanHTML = (dirtyHTML) => ({
  __html: DOMPurify.sanitize(dirtyHTML, { ALLOWED_TAGS: [] }),
});

/* * * * * * * * *
 * * focusToField *
 *
 * @description : Focus to a field
 *
 * @args ---------------------------------------------------------------------------------------
 * - selector (str) => the selector to focus on
 * ---------------------------------------------------------------------------------------------
 *
 * @use ----------------------------------------------------------------------------------------
 * - querySelector()
 * https://developer.mozilla.org/fr/docs/Web/API/Element/querySelector
 * - focus()
 * https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/focus
 * ---------------------------------------------------------------------------------------------
 *
 */
export const focusToField = (selector) =>
  document.querySelector(`${selector}`).focus();

/* * * * * * * * *
 * * randomItem *
 *
 * @description : Get random item in a list
 *
 * @args ---------------------------------------------------------------------------------------
 * - items (array) => list of items
 * ---------------------------------------------------------------------------------------------
 *
 * @use ----------------------------------------------------------------------------------------
 * - Math.floor()
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/floor
 * - Math.random()
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
 * - other source
 * https://www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php
 * ---------------------------------------------------------------------------------------------
 *
 */
export const randomItem = (items) =>
  items[Math.floor(Math.random() * items.length)];
