import { initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSetting = {
    databaseURL: "https://add-to-cad-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSetting);
const database = getDatabase(app);
const itemsInDB = ref(database, "items")

const inputField = document.getElementById("input-field");
const addButton = document.getElementById("add-button");
const lista = document.getElementById("lista")

addButton.addEventListener("click", function() {
    let inputValue = inputField.value
   /* let el = document.createElement("li");
    el.innerHTML = inputValue;
    lista.append(el);
    inputField.value = "" */

    push(itemsInDB, inputValue);
    clearInput()

})

function clearInput() {
    inputField.value = "" 
}

function clearList() {
    lista.innerHTML = "";
    
}

onValue(itemsInDB, function(snapshot) {
    if(snapshot.exists()) {
        let resultats = Object.entries(snapshot.val())
        console.log(resultats)
        clearList()
        for(let i=0; i<resultats.length; i++){
            addElement(resultats[i]);
        }

    } else {
        lista.innerHTML = "Add Items"
    }

})

function addElement(e) {
    let elementLi = document.createElement("li");
    elementLi.id = e[0];
    elementLi.textContent = e[1];
    elementLi.addEventListener("click", function(){
        let loc = ref(database, `items/${e[0]}`)
        remove (loc)
    })

    lista.append(elementLi);
    
}
