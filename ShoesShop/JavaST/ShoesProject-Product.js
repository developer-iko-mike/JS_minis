const $ = document;
const titleSite = $.title;
let shoes = [
 {id: 1, name: "SPORT SHOE",src: "./Assets/245Shoesblue.png" ,price: 53, decs: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quibusdam quisquam quasi ratione pariatur culpa, non provident perspiciatis aperiam explicabo nesciunt architecto et assumenda nostrum reprehenderit quaerat voluptate dolore incidunt. (SPORT SHOE)"},
 {id: 2, name: "WOOMAN SHOE",src: "./Assets/245ShoesGreen.png" ,price: 87, decs: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quibusdam quisquam quasi ratione pariatur culpa, non provident perspiciatis aperiam explicabo nesciunt architecto et assumenda nostrum reprehenderit quaerat voluptate dolore incidunt. (WOOMAN SHOE)"},
 {id: 3, name: "BOOTS",src: "./Assets/245ShoesYellow.png" ,price: 34, decs: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quibusdam quisquam quasi ratione pariatur culpa, non provident perspiciatis aperiam explicabo nesciunt architecto et assumenda nostrum reprehenderit quaerat voluptate dolore incidunt. (BOOTS)"},
]
let backBtn = $.querySelector(".about__back")
let nameProduckt = $.querySelector(".nameProduckt")
let shoeImage = $.querySelector(".about__img")
let titleProduckt = $.querySelector(".titleProduckt")

backBtn.addEventListener("click", function(){
 history.back();
})

let locationSearch = new URLSearchParams(location.search)
let userIdPramas = locationSearch.get("id")

console.log(nameProduckt.innerHTML , shoeImage.src);

let userIdLocation = shoes.find(function(shoe){
return shoe.id === +userIdPramas
})

if (userIdLocation){
 nameProduckt.innerHTML = userIdLocation.name
 $.title = userIdLocation.name
 titleProduckt.innerHTML = userIdLocation.decs
 shoeImage.src = userIdLocation.src
} else {
location.href = "http://127.0.0.1:5501/INDEX.html"
}

