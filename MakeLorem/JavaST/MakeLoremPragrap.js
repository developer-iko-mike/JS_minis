const $ = document;
const body = $.body;
let btn = $.querySelector("button")
let ipt = $.querySelector("input")
let footer = $.querySelector("footer")
loremTitle = [
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis magnam sint eligendi perferendis laboriosam dolorum voluptates, consectetur nostrum excepturi dolore beatae ipsum culpa ea labore molestiae dolores aut aperiam. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, dolorum similique expedita in,aliquid excepturi fugiat assumenda hic repudiandae illo ipsam non. Facilis quasi libero adipisci? Assumenda recusandae perferendis asperiores? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis suscipit unde soluta nemo accusamus, nulla cum quis, tempora earum praesentium quibusdam ducimus vitae possimus officia facere,accusantium eos ad ut? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab officiis, inventore rerum iusto nam ea cupiditate nisi in quae accusantium exercitationem dolorem maxime magni, sint nobis. Eligendi quas quod mollitia?",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis magnam sint eligendi perferendis laboriosam dolorum voluptates, consectetur nostrum excepturi dolore beatae ipsum culpa ea labore molestiae dolores aut aperiam. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, dolorum similique expedita in,aliquid excepturi fugiat assumenda hic repudiandae illo ipsam non. Facilis quasi libero adipisci? Assumenda recusandae perferendis asperiores? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis suscipit unde soluta nemo accusamus, nulla cum quis, tempora earum",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis magnam sint eligendi perferendis laboriosam dolorum voluptates, consectetur nostrum excepturi dolore beatae ipsum culpa ea labore molestiae dolores aut aperiam. lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, dolorum similique",
]

function makelorem(){
 footer.innerHTML = ""

    let iptValue = ipt.value
    let randomNum = Math.floor(Math.random() * loremTitle.length)

    if (iptValue < 0 || iptValue > 99|| iptValue === ""){
      footer.innerHTML = loremTitle[randomNum] 
    } else {
      let sliceArray = loremTitle.slice(0, iptValue)

      let finalTextArray = sliceArray.map(function (item){
        return "<p>" + item + "</p>"
      }).join("")
      footer.innerHTML = finalTextArray
      console.log(finalTextArray);
    }
  iptValue = ""
}
btn.addEventListener("click", makelorem)
body.addEventListener("keydown", function(event){
  if (event.keyCode === 13){
    makelorem()
  } else if (event.keyCode === 27){
    footer.innerHTML = ""
  } else if (event.keyCode === 32){
    makelorem()
  }
})