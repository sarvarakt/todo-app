const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span); // <-- Tirnoqlar olib tashlandi
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Ma'lumotni Local Storage-ga saqlash
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Sahifa yangilanganda ma'lumotni qayta chiqarish
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Funksiyani chaqirishni unutmang
showTask();