let $ = document;
let mainTodo = $.getElementById('todos');
let input = $.getElementById('input');
let Todo = $.querySelector('.todo__item');
let divTodos = $.querySelector('.todo__items');
let emptyWrong = $.querySelector('.empty__wrong');
let toCloseWrong = $.querySelector('.toClose__wrong');
let addBox = $.querySelector('.hidden_box')

input.addEventListener('keydown', function (event) {
  if (event.code === "Enter" || event.code === 'NumpadEnter') {
    if (!input.value.trim()) {
      emptyWrong.style.display = "block";
      toCloseWrong.style.display = "none";
    } else if (input.value.trim().length > 25) {
      toCloseWrong.style.display = "block";
      emptyWrong.style.display = "none";
    } else {
      let newDivTodo = $.createElement('div')
      newDivTodo.classList.add('todo__items');

      let newtitleTodo = $.createElement('p')
      newtitleTodo.classList.add('todo__item');
      newtitleTodo.innerHTML = input.value.trim()

      let removeImgNewTodo = $.createElement('img')
      removeImgNewTodo.classList.add('todo__image');
      removeImgNewTodo.src = './Assets/recycleBin.png'
      removeImgNewTodo.addEventListener('click', function (event) {
        event.target.parentElement.remove()
      })

      mainTodo.append(newDivTodo)
      newDivTodo.append(newtitleTodo, removeImgNewTodo)
      if (window.innerWidth < 768) {
        addBox.style.bottom = '1rem'
      } else {
        addBox.style.right = '1rem'
      }

      input.value = ''
      emptyWrong.style.display = "none";
      toCloseWrong.style.display = "none";
      setTimeout(function () {
        if (addBox.style.right = '1rem') {
          if (window.innerWidth < 768) {
            addBox.style.bottom = '-30rem'
          } else {
            addBox.style.right = '-30rem'
          }
        }
      }, 3000)
    }
  }
})