const $ = document;
let body = $.body;
let colors = $.querySelectorAll('.color');
let results = $.querySelector('.results');
let add = $.getElementById('addBox');
let remove = $.getElementById('removeBox');
let input = $.getElementById('input');

const createNote = () => {
  if (!input.value.trim()) return;
  
  let newDiv = $.createElement('div');
  let newDivTitle = $.createElement('p');
  newDivTitle.textContent = input.value;
  newDivTitle.classList.add('divTitle');
  newDiv.classList.add('result-box');
  newDiv.append(newDivTitle);
  results.append(newDiv);
  newDiv.addEventListener('click', () => newDiv.remove() );
  newDiv.style.backgroundColor = input.style.backgroundColor || '#fff';
  newDiv.style.color = input.style.color || '#000';
  input.value = "";
  input.style.backgroundColor = "#fff";
  input.style.color = "#000";
}

const addHandlerPlus = () => createNote();
const addHandler = e => e.key === 'Enter' && createNote();

colors.forEach(function (color) {
  color.addEventListener('click', function (e) {
    input.style.backgroundColor = e.target.style.backgroundColor;
    input.style.color = e.target.style.color;
  });
});

remove.addEventListener('click', function () {
  input.value = "";
  input.style.backgroundColor = "#fff";
  input.style.color = "#000";
});
add.addEventListener('click', addHandlerPlus);
body.addEventListener('keydown', addHandler);