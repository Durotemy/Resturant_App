let addValue = document.querySelector(".add");
let subValue = document.querySelector(".sub");
let underline_input = document.querySelector(".underline-input");

addValue.addEventListener("mouseover", increase);
subValue.addEventListener("mouseover", reduce);

function increase() {
    underline_input.value = "5 people";
}

function reduce() {
    underline_input.value = "4 people";
}

let reserve_btn = document.querySelector(".reserve-btn");

reserve_btn.addEventListener("resize", change);

function change() {
    if (window.onresize <= 500 px ') {
        reserve_btn.innerHTML = "reserve";
    }
}