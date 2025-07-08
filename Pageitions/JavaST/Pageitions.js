const $ = document;
let usersArray = [
  {id: 1 ,  name: "mohamamd" , family: "niko"},
  {id: 2 ,  name: "reza" ,     family: "zendadel"},
  {id: 5 ,  name: "amir" ,     family: "alfa"},
  {id: 4 ,  name: "mahdi" ,    family: "gran"},
  {id: 5 ,  name: "ali" ,      family: "TNT"},

  {id: 6 ,  name: "hosin" ,    family: "ops"},
  {id: 7 ,  name: "mohamamd" , family: "amin"},
  {id: 8 ,  name: "erfan" ,    family: "mma"},
  {id: 9 ,  name: "reza" ,     family: "tmi"},
  {id: 10 , name: "kilo" ,     family: "og"},

  {id: 11 , name: "nikolay" ,  family: "saz"},
  {id: 12 , name: "saeed" ,    family: "import"},
  {id: 13 , name: "hamid" ,    family: "abadi"},
  {id: 14 , name: "reza" ,     family: "abadi"},
  {id: 15 , name: "sajad" ,    family: "wallod"},
  
  {id: 16 , name: "amir" ,     family: "sead"},
  {id: 17 , name: "marteza" ,  family: "mohammadi"},
  {id: 18 , name: "mostafa" ,  family: "kk1"},
  {id: 19 , name: "ahkan" ,    family: "joker"},
  {id: 20 , name: "khosro" ,   family: "bigh"},
  
  {id: 21 , name: "brain" ,    family: "socket"},
  {id: 22 , name: "abolfazl", family: "841"},
  {id: 23 , name: "abas" ,     family: "sabit"},
  {id: 24 , name: "dome" ,     family: "adoms"},
];

let newDivElam = $.createElement("div") 
let newPElam = $.createElement("p")
let footer = $.querySelector("footer")
let main = $.querySelector("main")

let currentPage = 1;
let rows = 5;


function displayShows(usersArray , main , rows , currentPage){
  main.innerHTML = ""
  
  let endingIndex = currentPage * rows
  let startingIndex = endingIndex - rows

  let paginated = usersArray.slice(startingIndex, endingIndex)

  paginated.forEach(function(page){
      let userElement = $.createElement("div")
      let userElementName = $.createElement("p")
      
      userElementName.innerHTML = page.name + " " + page.family
      userElement.append(userElementName)
      main.appendChild(userElement)


  })
}

function setupPegination(usersArray , footer , rows) {
  footer.innerHTML = ""

  let pageCunt = Math.ceil(usersArray.length / rows)

  for(let i = 1 ; i < pageCunt + 1; i++) {
      let btn = paginationBTNGenrator(i, usersArray)
      footer.appendChild(btn)
  }
}

function paginationBTNGenrator(page , usersArray){
  let button = $.createElement("button")
  button.innerHTML = page

  if (page === currentPage){
    button.classList.add("active")
  }

  button.addEventListener("click", function(){
    currentPage = page
    displayShows(usersArray , main , rows , currentPage)

    let prevPage = $.querySelector("button.active")
    prevPage.classList.remove("active")
    button.classList.add("active")

  })

  return button
}
displayShows(usersArray , main , rows , currentPage)
setupPegination(usersArray , footer , rows) 