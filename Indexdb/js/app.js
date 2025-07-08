let db = null;
let objectStore = null;
let $ = document
let body = $.body

import {
  iptUserName,
  iptPassword,
  iptUserEmail,
  submitBtn,
} from "./getElamant.js";

window.addEventListener("load", () => {
  let DBOpenReq = indexedDB.open("Leach Mob", 88);

  DBOpenReq.addEventListener("error", err => console.warn("Error", err));
  DBOpenReq.addEventListener("success", event => {
    console.log("Success", event.target.result);
    db = event.target.result;
  });
  DBOpenReq.addEventListener("upgradeneeded", event => {
    db = event.target.result;
    console.log("Old V:", event.oldVersion);
    console.log("New V:", event.newVersion);
    if (!db.objectStoreNames.contains("users")) {
      objectStore = db.createObjectStore("users", {
        keyPath: 'userID'
        // keyPath: "name",
      });
    }
    if (db.objectStoreNames.contains("users")) {
      db.deleteObjectStore("users");
    }
    db.createObjectStore('courses')
    console.log("upgrade", db.objectStoreNames);
  });
});
submitBtn.addEventListener("click", event => {
  event.preventDefault()
  let newUserObj = {
    id: Math.floor(Math.random() * 500),
    // userID: users.length + 1 ,
    // id: users.length + 1,
    name: iptUserName.value,
    password: iptPassword.value,
    email: iptUserEmail.value,
  }

  let tx = db.transaction("users", "readwrite");

  tx.addEventListener("error", err => console.warm("tx error", err))
  tx.addEventListener("Tx Success", event => console.log(event))

  let store = tx.objectStore("users")
  let request = store.add(newUserObj)
  cleaript()

  request.addEventListener("error", err => console.warm("request error", err))
  request.addEventListener("Request Success", event => console.log(event))
}) 

body.addEventListener("keydawn", event => {console.log(event)})

const cleaript = () => {
 iptUserName.value = ''
 iptPassword.value = ''
iptUserEmail.value = ''
}