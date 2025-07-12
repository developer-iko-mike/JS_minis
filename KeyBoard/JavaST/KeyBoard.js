const $ = document;
const body = $.body;
const result = $.getElementById("result");
const capsIndicator = $.getElementById("caps-indicator");
const shiftIndicator = $.getElementById("shift-indicator");

let capsLockOn = false;
let shiftPressed = false;
let cursorPosition = 0;

// Initialize cursor
result.innerHTML = '<span class="cursor"></span>';

// Update cursor position
function updateCursor() {
  const cursor = '<span class="cursor"></span>';
  if (cursorPosition === 0) {
    result.innerHTML = cursor + result.textContent;
  } else {
    const text = result.textContent;
    result.innerHTML = text.substring(0, cursorPosition) + cursor + text.substring(cursorPosition);
  }
}

// Move cursor
function moveCursor(direction) {
  if (direction === 'left' && cursorPosition > 0) {
    cursorPosition--;
  } else if (direction === 'right' && cursorPosition < result.textContent.length) {
    cursorPosition++;
  }
  updateCursor();
}

// Add text at cursor position
function addTextAtCursor(text) {
  const content = result.textContent;
  result.textContent = content.substring(0, cursorPosition) + text + content.substring(cursorPosition);
  cursorPosition += text.length;
  updateCursor();
}

// Remove text at cursor position
function removeTextAtCursor(backspace = true) {
  if (backspace && cursorPosition > 0) {
    const content = result.textContent;
    result.textContent = content.substring(0, cursorPosition - 1) + content.substring(cursorPosition);
    cursorPosition--;
    updateCursor();
  } else if (!backspace && cursorPosition < result.textContent.length) {
    const content = result.textContent;
    result.textContent = content.substring(0, cursorPosition) + content.substring(cursorPosition + 1);
    updateCursor();
  }
}

// Add ripple effect to key
function pressKey(keyElement) {
  keyElement.classList.add("pressed");
  setTimeout(() => {
    keyElement.classList.remove("pressed");
  }, 200);
}

// Update status indicators
function updateIndicators() {
  capsIndicator.classList.toggle("active", capsLockOn);
  shiftIndicator.classList.toggle("active", shiftPressed);

  // Update shift keys
  const shiftKeys = $.querySelectorAll('.shift');
  shiftKeys.forEach(key => {
    key.classList.toggle("active", shiftPressed);
  });

  // Update caps lock key
  $.getElementById("CapsLock").classList.toggle("active", capsLockOn);
}

// Handle key press
function handleKeyPress(key, isPhysicalKey = false) {
  let keyElement;

  if (isPhysicalKey) {
    keyElement = $.getElementById(key.code);
    if (!keyElement) return;
  } else {
    keyElement = key;
  }

  pressKey(keyElement);

  const keyId = keyElement.id;
  let keyValue = keyElement.textContent;

  // Handle special keys
  switch (keyId) {
    case 'Backspace':
      removeTextAtCursor(true);
      return;
    case 'Tab':
      addTextAtCursor('    ');
      return;
    case 'Enter':
      addTextAtCursor('\n');
      return;
    case 'Space':
      addTextAtCursor(' ');
      return;
    case 'CapsLock':
      capsLockOn = !capsLockOn;
      updateIndicators();
      return;
    case 'ShiftLeft':
    case 'ShiftRight':
      shiftPressed = true;
      updateIndicators();
      return;
    case 'ArrowLeft':
      moveCursor('left');
      return;
    case 'ArrowRight':
      moveCursor('right');
      return;
    case 'ArrowUp':
      // Implement multi-line cursor movement in a real app
      return;
    case 'ArrowDown':
      // Implement multi-line cursor movement in a real app
      return;
    case 'Delete':
      removeTextAtCursor(false);
      return;
  }

  // Get the actual key value based on shift and caps lock
  if (keyValue.includes('\n')) keyValue = ' ';

  if (keyId.startsWith('Key') && keyValue.length === 1) {
    if (capsLockOn && shiftPressed) {
      keyValue = keyValue.toLowerCase();
    } else if (capsLockOn || shiftPressed) {
      keyValue = keyValue.toUpperCase();
    } else {
      keyValue = keyValue.toLowerCase();
    }
  } else if (keyElement.querySelector('.secondary-label')) {
    const secondaryLabel = keyElement.querySelector('.secondary-label').textContent;
    keyValue = shiftPressed ? keyValue : secondaryLabel;
  }

  addTextAtCursor(keyValue);
}

// Setup event listeners for virtual keys
const keys = $.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('mousedown', () => {
    handleKeyPress(key);
  });
});

// Setup event listeners for physical keys
body.addEventListener('keydown', function (event) {
  // Prevent default for special keys
  if ([9, 20, 16, 17, 18, 91, 93].includes(event.keyCode)) {
    event.preventDefault();
  }

  // Handle shift key
  if (event.key === 'Shift') {
    shiftPressed = true;
    updateIndicators();
  }

  // Handle key press
  handleKeyPress(event, true);
});

body.addEventListener('keyup', function (event) {
  // Handle shift key
  if (event.key === 'Shift') {
    shiftPressed = false;
    updateIndicators();
  }
});

// Handle Ctrl+C and Ctrl+V
body.addEventListener('keydown', function (event) {
  if (event.ctrlKey) {
    if (event.key === 'c') {
      // Copy selected text
      const selectedText = window.getSelection().toString();
      if (selectedText) {
        navigator.clipboard.writeText(selectedText);
      }
      event.preventDefault();
    } else if (event.key === 'v') {
      // Paste text at cursor
      navigator.clipboard.readText().then(text => {
        addTextAtCursor(text);
      });
      event.preventDefault();
    }
  }
});

// Initialize indicators
updateIndicators();

// Add initial text
setTimeout(() => {
  addTextAtCursor('Start Typed ... ');
}, 500);