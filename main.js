var enterButton = document.getElementById('enter');
var input = document.getElementById('userInput');
var ul = document.querySelector('ul');
var item = document.getElementById('li');

// Returns input value length
function inputLength() {
    return input.value.length;
}

// Returns length of item
function listLength() {
    return item.length;
}

// Create list elements
function createListElement() {
    var li = document.createElement('li'); // create li element
    li.appendChild(document.createTextNode(input.value)); // creates text from input field in li
    ul.appendChild(li); // adds li element to ul
    input.value = ""; // Resets text input field

    // Start Cross Out
    // Only added for new items
    function crossOut() {
        li.classList.toggle('done'); // Toggles class 'done' for elements
    }

    li.addEventListener('click', crossOut); // Listen for click on li to toggle 'done' class


    // Create Delete Button

    var deleteBtn = document.createElement('button'); // Creates element
    deleteBtn.appendChild(document.createTextNode('X')); // Creates X text in button
    li.appendChild(deleteBtn); // Append the delete button to an li
    deleteBtn.addEventListener('click', deleteListItem); // add listener for click

    function deleteListItem() {
        li.classList.add('delete'); // Add class 'delete' to element
    }

}

// After click listener
function addListAfterClick() {
    if(inputLength() > 0) {
        createListElement(); // Create element only if the input is greater than 0
    }
}

// After keypress listener
function addListAfterKeypress() {
    if(inputLength() > 0 && event.which === 13) { // Listens for enter/return keypress
        createListElement();
    }
}

// Add element after click
enterButton.addEventListener('click', addListAfterClick);

// Add element after keypress
input.addEventListener('keypress', addListAfterKeypress);