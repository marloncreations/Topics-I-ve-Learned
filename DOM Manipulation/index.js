let form = document.querySelector("#addForm");
let listItems = document.querySelector("#items");
let filter = document.querySelector("#filter");

form.addEventListener("submit", addElement);
listItems.addEventListener("click", removeElement);
filter.addEventListener("keyup", filterElement);

function addElement(e) {
    e.preventDefault();

    let formInput = document.querySelector("#addForm input[type='text']").value;

listItems.innerHTML += `<li class="list-group-item">${formInput}<button class="btn btn-danger btn-sm float-right delete">X</button></li>`;
}

function removeElement(e) {
    if(e.target.classList.contains("delete")) {
        if(confirm("Are you sure")) {
            let li = e.target.parentElement;
            listItems.removeChild(li);
        }
    }
}

function filterElement(e) {
    let text = e.target.value.toLowerCase();
    let items = Array.from(listItems.getElementsByTagName("li"));
    items.forEach(function(item) {
        var itemName = item.firstChild.textContent.toLowerCase();
        if (itemName.indexOf(text) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
        console.log(itemName.indexOf(text));
    })

