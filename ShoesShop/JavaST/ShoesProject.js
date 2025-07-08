const $ = document;
let shoes = [
  {id: 1, name: "SPORT SHOE",src: "./Assets/245Shoesblue.png" ,price: 53},
  {id: 2, name: "WOOMAN SHOE",src: "./Assets/245ShoesGreen.png" ,price: 87},
  {id: 3, name: "BOOTS",src: "./Assets/245ShoesYellow.png" ,price: 34},
]

let mainContiner = $.querySelector(".all_produckt")
let btn = $.querySelectorAll("seeMore")

shoes.forEach(function(shoe){
  mainContiner.insertAdjacentHTML("beforeend", '<div class="produckt"><h1> ' + shoe.name + ' </h1><p>lorem ipsum or lipsum as it is sometimes knows</p><div class="produckt__image"><img src="' + shoe.src + '" alt="Shoes"></div><div class="footer"><h2>' + shoe.price + '</h2><a href="ShoesProject-Product.html?id=' + shoe.id + '" class="seeMore">see more</a></div></div>')
})