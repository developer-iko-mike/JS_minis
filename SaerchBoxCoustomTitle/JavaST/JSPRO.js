const $ = document
const body = $.body
const SiteTitle = $.title

// جلسه 149

// film6: doucment.designMode = "on" (/"off") || دقیقا مثل متدد خط پایینی ما مشابهشو داریم داکیومنت دیزاین مد که به صورت دیفالت مقدارش افف هست 
// film6: document.body.contentEditable = true || ما میتوانیم در کنسول همچین سینتکسی رو بنویسیم  و تمام المنت های داخل اچ تی ام ال رو تغییر بدیم به طور دیفالت نمیشه تغییر داد و مقدارش فالس هست 
// film6: $_ = اگر ما یک عملایتی رو قبلا در کنسول انجام داده باشیم و اگر بخوایم از خروحی اون استفاده کنیم از دلار اندرلاین استفاده میکنیم
// film6: $0 = اون المنتی که ما در تب المنت ها انتخاب کردیم در کنسول نشان میدهد
// film6: $$(".list-item") === document.querySelectorAll(".list-item") = و برای انتخاب چند کلاس از دوعتا علامت دلار استفاده میکنیم در کنسول
// film6: $("divElam") === document.querySelector("#divElam") = ما همچنین میتوانیم از دلار اسم المنت بجای داکیومنت کوری سلکتور استفاده کنیم در کنسول 
// film5: در صحفه اچ تی ام ال وقتی ما به یک المنت ای دی میدیم خودکار در هسته جاوا اسکریپت اون المنت سلکت میشه انگار ما اون المنت رو تعریف کردیم با گت المنت بای ای دی ولی اصلا پینهاد نمیشود در پروزه های واقعی از این روش استفاده کنیم

// جلسه 7

let Suggestions = [
 "Amazon",
 "AK47",
 "Barber Shop",
 "Blogger",
 "Bollywood",
 "BitCoin Price",
 "Call of Duty",
 "Call of Duty WWII",
 "Call of Duty Modern Warfare II",
 "CodingLab",
 "CodingNepal",
 "Calculator",
 "Cosinos",
 "CODM",
 "Cos",
 "Con",
 "DOM",
 "Dseigner",
 "Developer",
 "ECMAScript",
 "Facebook",
 "facebook Ice Cube Page",
 "Freelancer",
 "Golden",
 "Green",
 "GTA",
 "GTA SA",
 "Grand Theft Auto",
 "Grand Theft Auto San Andereas",
 "How To Learn HTML & CSS",
 "How To Learn JAVAScript",
 "How To Learn Freelancer",
 "How To Learn web designer",
 "How To start youtube Channel",
 "How To start Gaming Channel",
 "How To Jagh bazanim",
 "House Price",
 "Ice Cube - Best Rapear of the world",
 "Joice",
 "Keyboard",
 "Kir",
 "Lion",
 "Learn JS",
 "Login",
 "Login form in html & css",
 "MohammadNiko",
 "Moscow",
 "Nice Lavat",
 "Obi",
 "Oparaetor",
 "Purn Hub",
 "Portegal",
 "Quick",
 "Russia",
 "RockstarGame",
 "RezaZendadel",
 "Rooster",
 "Sun",
 "Sunday",
 "Toshi MargBar To mother vazir artabata iran",
 "Toshi MargBar To kharzade",
 "Time",
 "Use Your Brin",
 "Varebal in JavaScript",
 "Vlogger",
 "Vechiles",
 "Web Dseigner",
 "Web Developer",
 "What does HTML stands for?",
 "What does CSS stands for?",
 "Whats ECMAScript",
 "www.google.com",
 "www.gtaall.com",
 "www.telegram.com",
 "www.youtube.com",
 "www.freelancer.com",
 "wolf",
 "Yellow",
 "Youtube",
 "Youtuber",
 "Youtube Channel",
 "Zead",
 "Zombie",
 "911",
]

let searchInput = $.querySelector(".searchBox")
let ipt = $.querySelector("input")
let autoComplateBox = $.querySelector(".autoComplate-box")
let image = $.querySelector("img")

ipt.addEventListener("keyup" , function(){
 let iptValue = ipt.value
 let iptVal = iptValue.toLowerCase()

  if (iptVal){
   let filteredWords = Suggestions.filter(function(Sugges){
    return Sugges.toLowerCase().startsWith(iptVal)
   })
   listItemGenerator(filteredWords)
  } else {
   autoComplateBox.innerHTML = ""
  }})

  function listItemGenerator(wordsArray){
   let listitem = wordsArray.map(function(word){
    return "<li>" + word + "</li>"
   }) 
   console.log(listitem);
   let customList;
   if (!listitem.length){
customList = "<li>" + ipt.value + "</li>"  
   } else {
customList = listitem.join("")
   }

   autoComplateBox.innerHTML = customList
   complateInputWith()
  }

function complateInputWith(){
 let allListItems = autoComplateBox.querySelectorAll("li")
 allListItems.forEach(function(item){
   item.addEventListener("click", function(event){
    ipt.value = event.target.innerHTML
    autoComplateBox.innerHTML = ""
   })
 })
}

image.addEventListener("click", function(){
 ipt.value = ""
    searchInput.classList.remove("active")
})
body.addEventListener("keyup", function(event){
if (event.keyCode === 27 || event.keyCode === 46 ||event.keyCode === 13){
 ipt.value = ""
    searchInput.classList.remove("active")
}
})

// جلسه 5

// const myName1 = $.getElementById("myName1")

// console.log(myName1);
// console.log(myName2);
// myName1.style.color = "#0f9"
// myName2.style.color = "#f0f"