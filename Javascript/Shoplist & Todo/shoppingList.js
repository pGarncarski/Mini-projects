let ul;
let products = ["Eggs", "Milk", "Bananas", "Apples"];
let itemForm;

document.addEventListener('DOMContentLoaded', () => {
    ul = document.getElementById("shoppingList");
    itemForm = document.getElementById("itemForm");
    inputError = document.getElementById('inputError');

    itemForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let input = event.target.elements[0];

        if(input.value.length > 2 && input.value !== ""){
            AddListItem(input.value);
            input.value = "";
            input.classList.remove("input-danger");
            inputError.innerText = "";

        }
        else{
            input.classList.add("input-danger");
            inputError.innerText = "Name is too short or it's empty."
        }
        
    })

    products.forEach((product) => {
        AddListItem(product)
    })
});

function AddListItem(productName) {
    let li = document.createElement('li');
    li.innerText = productName;
    ul.appendChild(li);
}
