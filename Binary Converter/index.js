const number = document.querySelector("#number");
const button = document.querySelector(".mybutton");
const result = document.querySelector("#result")
const option = document.querySelector("#options");
const alert = document.querySelector(".alert");

button.addEventListener("click", convertNumber);

function convertNumber(e) {
    e.preventDefault();
    if(!number.value) {
        return alert.innerHTML = "Write a Number"
    } else if (isNaN(number.value)) {
        return alert.innerHTML = "The Value is not A Number";
    }
    if(option.value === "Binary") {
        const convertNumber = parseInt(number.value).toString(2);
        result.value = convertNumber;
    } else if(option.value === "Octal") {
        const convertNumber = parseInt(number.value).toString(8);
        result.value = convertNumber;
    } else if(option.value === "Hexadecimal") {
        const convertNumber = parseInt(number.value).toString(16);
        result.value = convertNumber;
    }
}