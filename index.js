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
document.getElementById('click-vector-triangle').addEventListener('click',function(){
    checkFalse( 'width-triangle');
    checkFalse( 'height-triangle');
    const baseInnerText = innerTextId('base-triangle')
    const heightInnerText = innerTextId('length-triangle')
    if(isNaN(baseInnerText) === true || isNaN(heightInnerText) === true){
        return alert('ah');
    }
    setValue ('width-triangle',baseInnerText);
    setValue ('height-triangle',heightInnerText);
})
document.getElementById('click-check-triangle').addEventListener('click',function(){
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
//.2 Rectangle
document.getElementById('click-vector-rectangle').addEventListener('click',function(){
    checkFalse( 'width-rectangle');
    checkFalse( 'height-rectangle');
    const baseInnerText = innerTextId('base-rectangle')
    const heightInnerText = innerTextId('length-rectangle')
    if(isNaN(baseInnerText) === true || isNaN(heightInnerText) === true){
        return alert('ah');
    }
    setValue ('width-rectangle',baseInnerText);
    setValue ('height-rectangle',heightInnerText);
})
document.getElementById('click-check-rectangle').addEventListener('click',function(){
    const widthRectangle = inputFieldId('width-rectangle')
    const heightRectangle = inputFieldId('height-rectangle')
    if(isNaN(widthRectangle) === true || isNaN(heightRectangle) === true || widthRectangle<0 || heightRectangle<0 ){
        return alert('ah');
    }
    checkTrue( 'width-rectangle');
    checkTrue( 'height-rectangle');
    setText ('base-rectangle',widthRectangle);
    setText ('length-rectangle',heightRectangle);
})
document.getElementById('btn-rectangle').addEventListener('click',function(){
    const nameRectangle = document.getElementById('title-rectangle').innerText;
    const widthRectangle= inputFieldId('width-rectangle')
    const heightRectangle = inputFieldId('height-rectangle')
    const rectangleArea =widthRectangle * heightRectangle;
    if(isNaN(rectangleArea) === true || widthRectangle<0 || heightRectangle<0 ){
        return alert('ah');
    }
    serial += 1;
    displayData(nameRectangle, rectangleArea)
})
//3.Parallelogram
document.getElementById('click-vector-parallelogram').addEventListener('click',function(){
    checkFalse( 'width-parallelogram');
    checkFalse( 'height-parallelogram');
    const baseInnerText = innerTextId('base-parallelogram')
    const heightInnerText = innerTextId('length-parallelogram')
    if(isNaN(baseInnerText) === true || isNaN(heightInnerText) === true){
        return alert('ah');
    }
    setValue ('width-parallelogram',baseInnerText);
    setValue ('height-parallelogram',heightInnerText);
})
document.getElementById('click-check-parallelogram').addEventListener('click',function(){
    const widthParallelogram = inputFieldId('width-parallelogram')
    const heightParallelogram = inputFieldId('height-parallelogram')
    if(isNaN(widthParallelogram) === true || isNaN(heightParallelogram) === true || widthParallelogram<0 || heightParallelogram<0 ){
        return alert('ah');
    }
    checkTrue( 'width-parallelogram');
    checkTrue( 'height-parallelogram');
    setText ('base-parallelogram',widthParallelogram);
    setText ('length-parallelogram',heightParallelogram);
})
document.getElementById('btn-parallelogram').addEventListener('click',function(){
    const nameParallelogram = document.getElementById('title-parallelogram').innerText;
    const widthParallelogram= inputFieldId('width-parallelogram')
    const heightParallelogram = inputFieldId('height-parallelogram')
    const parallelogramArea =widthParallelogram* heightParallelogram;
    if(isNaN(parallelogramArea) === true || widthParallelogram<0 || heightParallelogram<0 ){
        return alert('ah');
    }
    serial += 1;
    displayData(nameParallelogram, parallelogramArea)
})
//4.Rhombus
document.getElementById('click-vector-rhombus').addEventListener('click',function(){
    checkFalse( 'width-rhombus');
    checkFalse( 'height-rhombus');
    const baseInnerText = innerTextId('base-rhombus')
    const heightInnerText = innerTextId('length-rhombus')
    if(isNaN(baseInnerText) === true || isNaN(heightInnerText) === true){
        return alert('ah');
    }
    setValue ('width-rhombus',baseInnerText);
    setValue ('height-rhombus',heightInnerText);
})
document.getElementById('click-check-rhombus').addEventListener('click',function(){
    const widthRhombus = inputFieldId('width-rhombus')
    const heightRhombus = inputFieldId('height-rhombus')
    if(isNaN(widthRhombus) === true || isNaN(heightRhombus) === true || widthRhombus<0 || heightRhombus<0 ){
        return alert('ah');
    }
    checkTrue( 'width-rhombus');
    checkTrue( 'height-rhombus');
    setText ('base-rhombus',widthRhombus);
    setText ('length-rhombus',heightRhombus);
})
document.getElementById('btn-rhombus').addEventListener('click',function(){
    const nameRhombus = document.getElementById('title-rhombus').innerText;
    const widthRhombus= inputFieldId('width-rhombus')
    const heightRhombus = inputFieldId('height-rhombus')
    const rhombusArea =widthRhombus* heightRhombus;
    if(isNaN(rhombusArea) === true || widthRhombus<0 || heightRhombus<0 ){
        return alert('ah');
    }
    serial += 1;
    displayData(nameRhombus, rhombusArea)
})
//5.Pentagon
document.getElementById('click-vector-pentagon').addEventListener('click',function(){
    checkFalse( 'width-pentagon');
    checkFalse( 'height-pentagon');
    const baseInnerText = innerTextId('base-pentagon')
    const heightInnerText = innerTextId('length-pentagon')
    if(isNaN(baseInnerText) === true || isNaN(heightInnerText) === true){
        return alert('ah');
    }
    setValue ('width-pentagon',baseInnerText);
    setValue ('height-pentagon',heightInnerText);
})
document.getElementById('click-check-pentagon').addEventListener('click',function(){
    const widthPentagon = inputFieldId('width-pentagon')
    const heightPentagon = inputFieldId('height-pentagon')
    if(isNaN(widthPentagon) === true || isNaN(heightPentagon) === true || widthPentagon<0 || heightPentagon<0 ){
        return alert('ah');
    }
    checkTrue( 'width-pentagon');
    checkTrue( 'height-pentagon');
    setText ('base-pentagon',widthPentagon);
    setText ('length-pentagon',heightPentagon);
})
document.getElementById('btn-pentagon').addEventListener('click',function(){
    const namePentagon = document.getElementById('title-pentagon').innerText;
    const widthPentagon= inputFieldId('width-pentagon')
    const heightPentagon = inputFieldId('height-pentagon')
    const pentagonArea =widthPentagon* heightPentagon;
    if(isNaN(pentagonArea) === true || widthPentagon<0 || heightPentagon<0 ){
        return alert('ah');
    }
    serial += 1;
    displayData(namePentagon, pentagonArea)
})
//6.Ellipse
document.getElementById('click-vector-ellipse').addEventListener('click',function(){
    checkFalse( 'width-ellipse');
    checkFalse( 'height-ellipse');
    const baseInnerText = innerTextId('base-ellipse')
    const heightInnerText = innerTextId('length-ellipse')
    if(isNaN(baseInnerText) === true || isNaN(heightInnerText) === true){
        return alert('ah');
    }
    setValue ('width-ellipse',baseInnerText);
    setValue ('height-ellipse',heightInnerText);
})
document.getElementById('click-check-ellipse').addEventListener('click',function(){
    const widthEllipse = inputFieldId('width-ellipse')
    const heightEllipse = inputFieldId('height-ellipse')
    if(isNaN(widthEllipse) === true || isNaN(heightEllipse) === true || widthEllipse<0 || heightEllipse<0 ){
        return alert('ah');
    }
    checkTrue( 'width-ellipse');
    checkTrue( 'height-ellipse');
    setText ('base-ellipse',widthEllipse);
    setText ('length-ellipse',heightEllipse);
})
document.getElementById('btn-ellipse').addEventListener('click',function(){
    const nameEllipse = document.getElementById('title-ellipse').innerText;
    const widthEllipse= inputFieldId('width-ellipse')
    const heightEllipse = inputFieldId('height-ellipse')
    const ellipseArea =widthEllipse* heightEllipse;
    if(isNaN(ellipseArea) === true || widthEllipse<0 || heightEllipse<0 ){
        return alert('ah');
    }
    serial += 1;
    displayData(nameEllipse, ellipseArea)
})




function displayData(name, calculate,){
    const tableBody = document.getElementById('table-body');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td class="p-2">${serial}<span>.</span></td>
    <td class="p-2">${name}</td>
    <td class="p-2">${calculate}<span>cm</span><sup>2</sup></td>
    <td class="btn-convert"><button class=" btn btn-primary my-3">Convert to m<sup>2</sup></button></td>
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