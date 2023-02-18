let serial = 0;

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
function checkTrue( idCheck){
    const b = document.getElementById(idCheck);
    b.disabled = true;
}
function checkFalse( idCheck){
    const b = document.getElementById(idCheck);
    b.disabled = false;
}

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
function setValue (id,newValue){
    const widthTriangle =document.getElementById(id);
    widthTriangle.value = newValue;  
    console.log(newValue)
}
function setText (id,newValue){
    const widthTriangle =document.getElementById(id);
    widthTriangle.innerText = newValue;  
    console.log(newValue)
}
document.getElementById('a').addEventListener('click',function(){
    checkFalse( 'width-triangle');
    checkFalse( 'height-triangle');
    const bInnerText = innerTextId('b')
    const hInnerText = innerTextId('h')
    if(isNaN(bInnerText) === true || isNaN(hInnerText) === true){
        return alert('ah');
    }
    setValue ('width-triangle',bInnerText);
    setValue ('height-triangle',hInnerText);
})
document.getElementById('check').addEventListener('click',function(){
    const widthTriangle = inputFieldId('width-triangle')
    const heightTriangle = inputFieldId('height-triangle')
    if(isNaN(widthTriangle) === true || isNaN(heightTriangle) === true || widthTriangle<0 || heightTriangle<0 ){
        return alert('ah');
    }
    checkTrue( 'width-triangle');
    checkTrue( 'height-triangle');
    setText ('b',widthTriangle);
    setText ('h',heightTriangle);
})
document.getElementById('convert-to-meter').addEventListener('click',function(){
    
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





// document.getElementById('check').addEventListener('click',function(){
//     const widthTriangle = inputFieldId('width-triangle')
//     const heightTriangle = inputFieldId('height-triangle')
//     if(isNaN(widthTriangle) === true || isNaN(heightTriangle) === true || widthTriangle<0 || heightTriangle<0 ){
//         return alert('ah');
//     }
//     const b = document.getElementById('width-triangle');
//     b.disabled = true;
//     const h = document.getElementById('height-triangle');
//     h.disabled = true;
//     setText ('width-triangle',bInnerText);
//     setText ('height-triangle',hInnerText);
//     const bInnerText =document.getElementById('b');
//     bInnerText.innerText = widthTriangle;  
//     const hInnerText = document.getElementById('h');
//     hInnerText.innerText = heightTriangle;  
// })

// document.getElementById('a').addEventListener('click',function(){
//     // const b = document.getElementById();
//     // b.disabled = false;
//      check( 'width-triangle');
//      check( 'height-triangle');
//     // const h = document.getElementById();
//     // h.disabled = false;
//     const bInnerText = innerTextId('b')
//     const hInnerText = innerTextId('h')
//     if(isNaN(bInnerText) === true || isNaN(hInnerText) === true){
//         return alert('ah');
//     }
//     setValue ('width-triangle',bInnerText);
//     setValue ('height-triangle',hInnerText);
// })


// document.getElementById('check').addEventListener('click',function(){
//     const widthTriangle = inputFieldId('width-triangle')
//     const heightTriangle = inputFieldId('height-triangle')
//     if(isNaN(widthTriangle) === true || isNaN(heightTriangle) === true || widthTriangle<0 || heightTriangle<0 ){
//         return alert('ah');
//     }
//     // const b = document.getElementById('width-triangle');
//     // b.disabled = true;
//     // const h = document.getElementById('height-triangle');
//     // h.disabled = true;
//     checkTrue( 'width-triangle');
//     checkTrue( 'height-triangle');
//     setText ('b',widthTriangle);
//     setText ('h',heightTriangle);
// })

































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