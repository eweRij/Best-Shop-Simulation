//pojawianie sie i znikanie listy zmiana strzałki
const dropdown  = document.querySelector(".main__dropdown");
const dropdownList = document.querySelector(".main__dropdown-list");
const arrow = document.querySelector(".arrow");

dropdown.addEventListener("click", function(event) {
if( dropdownList.classList.contains("invisible")) {
    dropdownList.classList.toggle("visible");
arrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22" viewBox="0 0 22 22"><defs><style>.a,.c{fill:none;}.b{clip-path:url(#a);}.c{stroke:#08a6e4;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style><clipPath id="a"><rect class="a" width="22" height="22"/></clipPath></defs><g class="b" transform="translate(22 22) rotate(180)"><circle class="c" cx="10" cy="10" r="10" transform="translate(1 1)"/><path class="c" d="M8,12l4,4,4-4" transform="translate(-1 -1)"/><line class="c" y2="8" transform="translate(11 7)"/></g></svg>`
} 
    else if( dropdownList.classList.contains("visible")) {
    dropdownList.classList.toggle("invisible");
    }
}) 
//znikanie listy po wybraniu
const listElements = dropdownList.querySelectorAll("li");
listElements.forEach(element=>
    element.addEventListener("click", function(){
        this.parentElement.classList.remove("visible");
        this.parentElement.classList.add("invisible");
        arrow.innerHTML =`<svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22" viewBox="0 0 22 22"><defs><style>.a,.c{fill:none;}.b{clip-path:url(#a);}.c{stroke:#08a6e4;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style><clipPath id="a"><rect class="a" width="22" height="22"/></clipPath></defs><g class="b"><circle class="c" cx="10" cy="10" r="10" transform="translate(1 1)"/><path class="c" d="M8,12l4,4,4-4" transform="translate(-1 -1)"/><line class="c" y2="8" transform="translate(11 7)"/></g></svg>`
    })
    )
//dodawanie bocznej listy
const qualityInput = document.querySelector(".main__inputs__quality");
const quantityInput = document.querySelector(".main__inputs__products-amount");
const lists = document.querySelectorAll(".main__products__list li");

const productCalc = document.querySelector(".products__calc");
const productSum = document.querySelector(".products__sum");
const orderCalc = document.querySelector(".orders__calc");
const orderSum = document.querySelector(".orders__sum");
const packageList= dropdownList.querySelectorAll("li");
const packageSum = document.querySelector(".package__sum");
const packageCalc = document.querySelector(".package__calc");
console.log(packageSum);

const accountingCheck = document.querySelector(".accounting-check");
const terminalCheck = document.querySelector(".rental-check");
const accountingCalc = document.querySelector(".accounting__sum");
const terminalCalc = document.querySelector(".terminal__sum");
console.log(accountingCheck);

const totalSpan = document.querySelector("footer span");
// totalSpan.innerText = `$0`;


let qualitySum= 0;
qualityInput.addEventListener("input", function(event) {
    if(lists[0].classList.contains("invisible")) {
        lists[0].classList.add("visible");
        lists[0].classList.remove("invisible");
        lists[0].style.display="flex"};
    qualitySum = parseInt(qualityInput.value) * 0.5 || 0;
    productCalc.innerText= `${qualityInput.value}`;
    productSum.innerText=`$${qualitySum}`;
    totalSpan.innerText=`$ ${qualitySum + quantitySum + sum + accountSum +terminalSum}`
    
})//mozna stworzyc jedna funkckje z odpowiednimi zmiennymi
let quantitySum=0;

quantityInput.addEventListener("input", function(event) {
    if(lists[1].classList.contains("invisible")) {
        lists[1].classList.add("visible");
        lists[1].classList.remove("invisible");
        lists[1].style.display="flex"};
    quantitySum = parseInt(quantityInput.value) * 0.25||0;
    orderCalc.innerText= `${quantityInput.value}`;
    orderSum.innerText=`$${quantitySum}`;
    totalSpan.innerText=`$ ${qualitySum + quantitySum + sum + accountSum +terminalSum}`
 
    event.stopPropagation();
})
let sum=0;

packageList.forEach(function(li) {
    li.addEventListener("click", function(event) {
        if(lists[2].classList.contains("invisible")) {
            lists[2].classList.add("visible");
            lists[2].classList.remove("invisible");
            lists[2].style.display="flex"};
            sum = parseInt(this.dataset.price) ||0;
            totalSpan.innerText=`$ ${qualitySum + quantitySum + sum + accountSum +terminalSum}`
            packageSum.innerText=`$${this.dataset.price}`;// spr co z tmy
            packageCalc.innerText= `${this.innerText}`;
            //ostateczny wynik w totalu musi byc w kazdym evencie, wtedy bedzie sie automatycznie zmieniał w czasie rzeczywistym!
            event.stopPropagation();
        
    })
})//działa //dodac data sety do html
//czas na checkboxy_>
let accountSum=0;
accountingCheck.addEventListener("change", function(event){
    if(lists[3].classList.contains("invisible")) {
        lists[3].classList.add("visible");
        lists[3].classList.remove("invisible")
        lists[3].style.display="flex"};

        if(this.checked) {
            accountingCalc.innerText = "$30";
            accountSum = 30;
        } else {
            accountingCalc.innerText="$0";
            accountSum = 0;
        }
        totalSpan.innerText=`$ ${qualitySum + quantitySum + sum + accountSum + terminalSum}`
})
let terminalSum=0;
terminalCheck.addEventListener("change", function(event){
    if(lists[4].classList.contains("invisible")) {
        lists[4].classList.add("visible");
        lists[4].classList.remove("invisible");
        lists[4].style.display="flex"};

        if(this.checked) {
            terminalCalc.innerText = "$25";
            terminalSum = 25;
        } else {
            terminalCalc.innerText="$0";
            terminalSum = 0;
        }
        totalSpan.innerText=`$ ${qualitySum + quantitySum + sum + accountSum + terminalSum}`
})
//total podsumowanie
//zmiana tla dla checkboxów
const accountLabel = document.querySelector(".accounting__input__container");
const rentalLabel = document.querySelector(".rental__input__container");
function changeCheckbox(event) {
    this.firstElementChild.style.backgroundColor= "#00000029";
}


function checkboxPreviousColor(event) {
    this.firstElementChild.style.backgroundColor= "#FFFFFF";
}
accountLabel.addEventListener("mouseover", changeCheckbox);
rentalLabel.addEventListener("mouseover", changeCheckbox);

accountLabel.addEventListener("mouseout", checkboxPreviousColor);
rentalLabel.addEventListener("mouseout", checkboxPreviousColor);

//stylowanie inputów po kliknięciu
const blueInputs= document.querySelectorAll(".blue");
console.log(blueInputs);
blueInputs.forEach(input=>
    input.addEventListener("mouseover", function(event) {
        this.style.boxShadow = "0px 3px 6px #08A6E4";
    }));
blueInputs.forEach(input=>
    input.addEventListener("mouseout", function(event) {
        this.style.boxShadow = "0px 3px 6px #08A6E429";
    }))
