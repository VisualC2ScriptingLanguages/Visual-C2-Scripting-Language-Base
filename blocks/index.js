const menu = document.querySelector('.menu');
const boxes = menu.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('mousedown', dragStart);
});

document.addEventListener('mouseup', dragEnd);
document.addEventListener('mousemove', drag);

let isDragging = false;
let currentBox = null;
let initialX;
let initialY;
let currentX;
let currentY;

function dragStart(e) {
  if (e.target.classList.contains("notmenu")) {
    currentBox = e.target.cloneNode(true);
    currentBox.classList.add('notmenu');
    currentBox.style.position = 'absolute';
    currentBox.style.left = `${e.target.offsetLeft}px`;
    currentBox.style.top = `${e.target.offsetTop}px`;
    document.body.appendChild(currentBox);

    initialX = e.clientX - currentBox.offsetLeft;
    initialY = e.clientY - currentBox.offsetTop;

    isDragging = true;

    e.target.remove()

    currentBox.addEventListener('mousedown', dragStart);
  } else if (e.target.classList.contains('box')) {
    currentBox = e.target.cloneNode(true);
    currentBox.classList.add('notmenu');
    currentBox.style.position = 'absolute';
    currentBox.style.left = `${e.target.offsetLeft}px`;
    currentBox.style.top = `${e.target.offsetTop}px`;
    document.body.appendChild(currentBox);

    initialX = e.clientX - currentBox.offsetLeft;
    initialY = e.clientY - currentBox.offsetTop;

    isDragging = true;

    currentBox.addEventListener('mousedown', dragStart);
  }
}

function dragEnd(e) {
  if (currentBox) {
    isDragging = false;

    // Get the position of the vertical line
    const line = document.querySelector('.vertical-line');
    const lineRect = line.getBoundingClientRect();

    // Get the position of the current box
    const boxRect = currentBox.getBoundingClientRect();

    // Check if any part of the box is to the left of the line
    if (boxRect.left < lineRect.left) {
      // Delete the box
      currentBox.remove();
    }
  }
}

function drag(e) {
  if (isDragging && currentBox) {
    e.preventDefault();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;

    setTranslate(currentX, currentY, currentBox);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.left = `${xPos}px`;
  el.style.top = `${yPos}px`;
}