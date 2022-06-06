let button = document.querySelector('#mainsubmit');
let textbox = document.querySelector('.textenter');
let items = [];
function clickd(){
    let itemvalue = document.querySelector("#mainentry").value;
    items.push(itemvalue);
    console.log(itemvalue);
    console.log(JSON.stringify(items));
}
