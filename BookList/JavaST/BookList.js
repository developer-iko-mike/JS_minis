const $ = document;
const body = $.body;

let nameBookInput = $.getElementById('nameBook')
let authorInput = $.getElementById('author')
let yaerInput = $.getElementById('yaer')
let btn = $.getElementById('btn')
let tableBody = $.querySelector('tbody')
let table = $.querySelector('table')

let bookArray = []

function removeHandler(){
  nameBookInput.value = ""
  authorInput.value = ""
  yaerInput.value = ""
}

function addHandler(){
  if (nameBookInput.value.trim()){
    if (authorInput.value.trim()){
      if (yaerInput.value.trim()){
        let mainResult = $.createElement("tr")
        
        let nameBook = $.createElement("th")
        nameBook.classList.add("nameBook")
        nameBook.innerHTML = nameBookInput.value
       
        let author = $.createElement("th")
        author.classList.add("author")
        author.innerHTML = authorInput.value

        let yaer = $.createElement("th")
        yaer.classList.add("yaer")
        if (yaerInput.value > 1923 ){
          if (yaerInput.value < 2025){
            yaer.innerHTML = yaerInput.value
          } else {
                    yaer.innerHTML = "book from future"
          } 
        } else {
          yaer.innerHTML = "book from past"         
        }
        table.style.display = "revert-layer"      

        newBookObj = {
          id: bookArray.length + 1,
          bookName: nameBook.innerHTML,
          authorName: author.innerHTML,
          yearBook: yaer.innerHTML,
        }
        bookArray.push(newBookObj)
        console.log(bookArray);
        setLocalStorage(bookArray)

         mainResult.append(nameBook , author , yaer)
         tableBody.append(mainResult)
         nameBookInput.focus()
         
         removeHandler()
  }}}
}

function setLocalStorage(bookList){
  localStorage.setItem("bookList", JSON.stringify(bookList))
}

window.onload = function(){
  let localResult = JSON.parse(localStorage.getItem("bookList"))
  localResult.forEach(function(locRes){
    console.log(locRes);
    let mainResult = $.createElement("tr")
    let nameBook = $.createElement("th")
    nameBook.classList.add("nameBook")
    nameBook.innerHTML = locRes.bookName
   
    let author = $.createElement("th")
    author.classList.add("author")
    author.innerHTML = locRes.authorName

    let yaer = $.createElement("th")
    yaer.classList.add("yaer")
    if (locRes.yearBook > 1923 ){
      if (locRes.yearBook < 2025){
        yaer.innerHTML = locRes.yearBook
      } else {
                yaer.innerHTML = "book from future"
      } 
    } else {
      yaer.innerHTML = "before 1920"         
    }
    table.style.display = "revert-layer"      

     mainResult.append(nameBook , author , yaer)
     tableBody.append(mainResult)
     nameBookInput.focus()
  })
}

table.style.display = "none"
btn.addEventListener("click", addHandler)

body.addEventListener("keydown", function(event){
  if (event.keyCode === 27){
    removeHandler()
  } else if (event.keyCode === 46){
    removeHandler()
  }  else if (event.keyCode === 13){
    addHandler()
  }
})

