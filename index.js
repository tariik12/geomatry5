let serial = 0;


function inputFieldId (inputId){
    const depositFieldInput = document.getElementById(inputId);
    const depositFieldInputString = depositFieldInput.value;
    const depositField = parseFloat(depositFieldInputString);
    depositFieldInput.value = '';
    return depositField; 
}
function innerTextId (innerTextId){
    const depositFieldInput = document.getElementById(innerTextId);
    const depositFieldInputString = depositFieldInput.innerText;
    const depositField = parseFloat(depositFieldInputString);
    depositFieldInput.innerText = '';
    return depositField; 
}
document.getElementById('a').addEventListener('click',function(){
    const b = document.getElementById('width-triangle');
    b.disabled = false;
    const h = document.getElementById('height-triangle');
    h.disabled = false;
    const bInnerText = innerTextId('b')
    const hInnerText = innerTextId('h')
    const widthTriangle =document.getElementById('width-triangle');
    widthTriangle.value = bInnerText;  
    const heightTriangle = document.getElementById('height-triangle');
    heightTriangle.value = hInnerText;
})

document.getElementById('check').addEventListener('click',function(){
    const b = document.getElementById('width-triangle');
    b.disabled = true;
    const h = document.getElementById('height-triangle');
    h.disabled = true;
    const widthTriangle = inputFieldId('width-triangle')
    const heightTriangle = inputFieldId('height-triangle')
    const bInnerText =document.getElementById('b');
    bInnerText.innerText = widthTriangle;  
    const hInnerText = document.getElementById('h');
    hInnerText.innerText = heightTriangle;

    
})

document.getElementById('btn-triangle').addEventListener('click',function(){
    const nameTriangle = document.getElementById('title-triangle').innerText;
    const widthTriangle = inputFieldId('width-triangle')
    const heightTriangle = inputFieldId('height-triangle')
    const triangleArea = 0.5 * widthTriangle * heightTriangle;
    serial += 1;
    displayData(nameTriangle, triangleArea)
})






































document.getElementById('btn-rectangle').addEventListener('click',function(){
    const nameTriangle = document.getElementById('name-rectangle').innerText;
    const wRectangle = forInputValue('w-rectangle')
    const iRectangle = forInputValue('i-rectangle')
    const triangleArea = wRectangle * iRectangle;
    serial += 1;
    displayData(nameTriangle, triangleArea)
})



function displayData(name, calculate,){
    const tableBody = document.getElementById('table-body');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}<span>.</span></td>
    <td>${name}</td>
    <td>${calculate}</td>
    <td><button id="convert-to-meter" class ='btn-primary'>Convert to m<sum>2</sum></button></td>
    `
    tableBody.appendChild(tr);
}