/**
 * Selects the element with the id 'main-heading' and changes its text content to 'DOM Manipulation Challenge'.
 */
function changeHeadingText() {
  const heading = document.getElementById('main-heading'); // Select the element by id
  heading.textContent = 'DOM Manipulation Challenge'; // Change its text
}
/**
 * Selects the element with the id 'box-to-modify' and changes its background color to 'lightblue'.
 */
function changeBoxColor() {
  const box = document.getElementById('box-to-modify'); // Select the element by id
  box.style.backgroundColor = 'lightblue'; // Change its background color
}
/**
 * Creates a new <li> element, sets its text content to 'New Item', and appends it to the <ul> with the id 'item-list'.
 */
function addNewItem() {
  const ul = document.getElementById('item-list'); // Select the <ul> element
  const li = document.createElement('li'); // Create a new <li>
  li.textContent = 'New Item'; // Set its text
  ul.appendChild(li); // Append it to the <ul>
}
/**
 * Selects the paragraph with the class 'content-para' and adds the class 'highlight' to it.
 */
function highlightParagraph() {
  const para = document.querySelector('.content-para'); // Select the first element with this class
  para.classList.add('highlight'); // Add the 'highlight' class
}
/**
 * Selects the element with the id 'to-be-removed' and removes it from the DOM.
 */
function removeElement() {
  const element = document.getElementById('to-be-removed'); // Select the element by id
  element.remove(); // Remove it from the DOM
}
// Do not edit the lines below.
// These lines are for testing purposes.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        changeHeadingText,
        changeBoxColor,
        addNewItem,
        highlightParagraph,
        removeElement
    };
}

