let mainContiner = document.querySelector('.users')

btn.addEventListener("click" ,function(){
  fetch('https://randomuser.me/api/')
      .then(res => {
        if (res.status === 200){
          return res.json()
        }
        return new Error("ERROR :/")
      }).then(data => { 
        console.log(data.results[0])
        mainContiner.style.display = "flex"
      gandersn.insertAdjacentHTML("beforeend" , `<li>${data.results[0].gender}</li>`)
      namesn.insertAdjacentHTML("beforeend" , `<li>${data.results[0].name.first} - ${data.results[0].name.last}</li>`)
      locationsn.insertAdjacentHTML("beforeend" , `<li>${data.results[0].location.country} - ${data.results[0].location.city}</li>`)
      emailsn.insertAdjacentHTML("beforeend" , `<li>${data.results[0].email}</li>`)
      phonesn.insertAdjacentHTML("beforeend" , `<li>${data.results[0].phone}</li>`)
      })
       .catch(err => console.log(err))
})