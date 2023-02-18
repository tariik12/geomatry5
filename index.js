let serial = 0;

// Random-background:
const allCard = document.querySelectorAll('.bg-color');
for (const card of allCard) {
  card.addEventListener('mouseenter', () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    card.style.backgroundColor = "#" + randomColor;
    card.addEventListener('mouseleave', () => {
      card.style.backgroundColor = '';
    });
  });
}
//for button disable
function checkTrue( idCheck){
    const checkTr = document.getElementById(idCheck);
    checkTr.disabled = true;
}
//for button remove disable
function checkFalse( idCheck){
    const checkFa = document.getElementById(idCheck);
    checkFa.disabled = false;
}
//for input value parseFloat
function inputFieldId (inputId){
    const depositFieldInput = document.getElementById(inputId);
    const depositFieldInputString = depositFieldInput.value;
    const depositField = parseFloat(depositFieldInputString);
    depositFieldInput.value = '';
    return depositField; 
}
//for innerText parseFloat
function innerTextId (innerTextId){
    const depositFieldInput = document.getElementById(innerTextId);
    const depositFieldInputString = depositFieldInput.innerText;
    const depositField = parseFloat(depositFieldInputString);
    depositFieldInput.innerText = '';
    return depositField; 
}
//for input set value 
function setValue (id,newValue){
    const widthTriangle =document.getElementById(id);
    widthTriangle.value = newValue;  
}
//for input set text
function setText (id,newValue){
    const widthTriangle =document.getElementById(id);
    widthTriangle.innerText = newValue;  
}
//1. triangle
document.getElementById('click-vector').addEventListener('click',function(){
    checkFalse( 'width-triangle');
    checkFalse( 'height-triangle');
    const bInnerText = innerTextId('base-triangle')
    const hInnerText = innerTextId('length-triangle')
    if(isNaN(bInnerText) === true || isNaN(hInnerText) === true){
        return alert('ah');
    }
    setValue ('width-triangle',bInnerText);
    setValue ('height-triangle',hInnerText);
})
document.getElementById('click-check').addEventListener('click',function(){
    const widthTriangle = inputFieldId('width-triangle')
    const heightTriangle = inputFieldId('height-triangle')
    if(isNaN(widthTriangle) === true || isNaN(heightTriangle) === true || widthTriangle<0 || heightTriangle<0 ){
        return alert('ah');
    }
    checkTrue( 'width-triangle');
    checkTrue( 'height-triangle');
    setText ('base-triangle',widthTriangle);
    setText ('length-triangle',heightTriangle);
})
document.getElementById('btn-triangle').addEventListener('click',function(){
    const nameTriangle = document.getElementById('title-triangle').innerText;
    const widthTriangle = inputFieldId('width-triangle')
    const heightTriangle = inputFieldId('height-triangle')
    const triangleArea = 0.5 * widthTriangle * heightTriangle;
    if(isNaN(triangleArea) === true || widthTriangle<0 || heightTriangle<0 ){
        return alert('ah');
    }
    serial += 1;
    displayData(nameTriangle, triangleArea)
})

function displayData(name, calculate,){
    const tableBody = document.getElementById('table-body');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}<span>.</span></td>
    <td>${name}</td>
    <td id ="convert-to-meter">${calculate}</td>
    <td class="btn-convert"><button>Convert to m<sum>2</sum></button></td>
    `
    tableBody.appendChild(tr);
}





// function getAllData(e) {
//     console.log(e.target);
//     // const pName = e.target.parentNode;
//     // const pName = e.target.parentNode.parentNode.children[0].innerText;
//     // console.log(pName)
// }
// const tableBody = document.getElementById('table-body');
// getAllData(tableBody)
// document.getElementsByClassName('btn-convert').addEventListener('click',function(){
//     console.log('hello')
//     // const convertToMeterString = document.getElementById('convert-to-meter').innerText;
//     // const convertToMeter = parseFloat(convertToMeterString);
//     // const meter = convertToMeter * 2;
//     // convertToMeterString.innerText = meter;
// })