
var items = document.querySelectorAll('.item');
var dropContainer = document.getElementById('container2');
var resetButton = document.getElementById('reset-button');

var draggedItem = null;

// Add dragstart event listeners to items
items.forEach(function (item) {
    item.addEventListener('dragstart', dragStart);
});

// Add dragover and drop event listeners to the drop container
dropContainer.addEventListener('dragover', dragOver);
dropContainer.addEventListener('drop', drop);

// Reset button event listener
resetButton.addEventListener('click', reset);

function dragStart(event) {
    draggedItem = event.target;
    event.dataTransfer.setData('text/plain', event.target.id);
    event.target.classList.add('dragging');
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var itemId = event.dataTransfer.getData('text/plain');
    var item = document.getElementById(itemId);

    if (event.target === dropContainer) {
        dropContainer.appendChild(item);
        // Display success message or update the UI as needed
        console.log('Item dropped successfully!');
    }

    item.classList.remove('dragging');
}

function reset() {
    dropContainer.innerHTML = '';
    // Reset the first container to its original state if needed
}
