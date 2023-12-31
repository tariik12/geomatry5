let serial = 0;
document.getElementById('btn-blog').addEventListener('click',function(){
    document.location.href = 'ques.html';
})
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
})
document.getElementById('click-check-triangle').addEventListener('click',function(){
    const widthTriangle = inputFieldId('width-triangle')
    const heightTriangle = inputFieldId('height-triangle')
    if(isNaN(widthTriangle) === true || isNaN(heightTriangle) === true || widthTriangle<0 || heightTriangle<0 ){
        return alert("Please ! provide valid a input 'Number' ");
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
    const triangleAreaFixed = triangleArea.toFixed(2);
    if(isNaN(triangleArea) === true || widthTriangle<0 || heightTriangle<0 ){
        return alert("Please ! provide valid a input 'Number' ");
    }
    setText ('base-triangle',widthTriangle);
    setText ('length-triangle',heightTriangle);
    serial += 1;
    displayData(nameTriangle, triangleAreaFixed)
})
//.2 Rectangle
document.getElementById('click-vector-rectangle').addEventListener('click',function(){
    checkFalse( 'width-rectangle');
    checkFalse( 'height-rectangle');
})
document.getElementById('click-check-rectangle').addEventListener('click',function(){
    const widthRectangle = inputFieldId('width-rectangle')
    const heightRectangle = inputFieldId('height-rectangle')
    if(isNaN(widthRectangle) === true || isNaN(heightRectangle) === true || widthRectangle<0 || heightRectangle<0 ){
        return alert("Please ! provide valid a input 'Number' ");
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
    const rectangleArea = widthRectangle * heightRectangle;
    const rectangleAreaFixed = rectangleArea.toFixed(2);

    if(isNaN(rectangleArea) === true || widthRectangle<0 || heightRectangle<0 ){
        return alert("Please ! provide valid a input 'Number' ");
    }
    setText ('base-rectangle',widthRectangle);
    setText ('length-rectangle',heightRectangle);
    serial += 1;
    displayData(nameRectangle, rectangleAreaFixed)
})
//3.Parallelogram
document.getElementById('click-vector-parallelogram').addEventListener('click',function(){
    checkFalse( 'width-parallelogram');
    checkFalse( 'height-parallelogram');
})
document.getElementById('click-check-parallelogram').addEventListener('click',function(){
    const widthParallelogram = inputFieldId('width-parallelogram')
    const heightParallelogram = inputFieldId('height-parallelogram')
    if(isNaN(widthParallelogram) === true || isNaN(heightParallelogram) === true || widthParallelogram<0 || heightParallelogram<0 ){
        return alert("Please ! provide valid a input 'Number' ");
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
    const parallelogramArea = widthParallelogram* heightParallelogram;
    const parallelogramAreaFixed = parallelogramArea.toFixed(2);

    if(isNaN(parallelogramArea) === true || widthParallelogram<0 || heightParallelogram<0 ){
        return alert("Please ! provide valid a input 'Number' ");
    }
    setText ('base-parallelogram',widthParallelogram);
    setText ('length-parallelogram',heightParallelogram);
    serial += 1;
    displayData(nameParallelogram, parallelogramAreaFixed)
})
//4.Rhombus
document.getElementById('click-vector-rhombus').addEventListener('click',function(){
    checkFalse( 'width-rhombus');
    checkFalse( 'height-rhombus');
})
document.getElementById('click-check-rhombus').addEventListener('click',function(){
    const widthRhombus = inputFieldId('width-rhombus')
    const heightRhombus = inputFieldId('height-rhombus')
    if(isNaN(widthRhombus) === true || isNaN(heightRhombus) === true || widthRhombus<0 || heightRhombus<0 ){
        return alert("Please ! provide valid a input 'Number' ");
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
    const rhombusArea = 0.5 * widthRhombus * heightRhombus;
    const pentagonAreaFixed = rhombusArea.toFixed(2);
    if(isNaN(rhombusArea) === true || widthRhombus<0 || heightRhombus<0 ){
        return alert("Please ! provide valid a input 'Number' ");
    }
    setText ('base-rhombus',widthRhombus);
    setText ('length-rhombus',heightRhombus);
    serial += 1;
    displayData(nameRhombus, pentagonAreaFixed)
})
//5.Pentagon
document.getElementById('click-vector-pentagon').addEventListener('click',function(){
    checkFalse( 'width-pentagon');
    checkFalse( 'height-pentagon');
})
document.getElementById('click-check-pentagon').addEventListener('click',function(){
    const widthPentagon = inputFieldId('width-pentagon')
    const heightPentagon = inputFieldId('height-pentagon')
    if(isNaN(widthPentagon) === true || isNaN(heightPentagon) === true || widthPentagon<0 || heightPentagon<0 ){
        return alert("Please ! provide valid a input 'Number' ");
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
    const pentagonArea = 0.5 * widthPentagon * heightPentagon;
    const pentagonAreaFixed = pentagonArea.toFixed(2);
    if(isNaN(pentagonArea) === true || widthPentagon<0 || heightPentagon<0 ){
        return alert("Please ! provide valid a input 'Number' ");
    }
    setText ('base-pentagon',widthPentagon);
    setText ('length-pentagon',heightPentagon);
    serial += 1;
    displayData(namePentagon, pentagonAreaFixed)
})
//6.Ellipse
document.getElementById('click-vector-ellipse').addEventListener('click',function(){
    checkFalse( 'width-ellipse');
    checkFalse( 'height-ellipse');
})
document.getElementById('click-check-ellipse').addEventListener('click',function(){
    const widthEllipse = inputFieldId('width-ellipse')
    const heightEllipse = inputFieldId('height-ellipse')
    if(isNaN(widthEllipse) === true || isNaN(heightEllipse) === true || widthEllipse<0 || heightEllipse<0 ){
        return alert("Please ! provide valid a input 'Number' ");
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
    const ellipseArea = 3.14 * widthEllipse * heightEllipse;
    const ellipseAreaFixed = ellipseArea.toFixed(2); 
    if(isNaN(ellipseArea) === true || widthEllipse<0 || heightEllipse<0 ){
        return alert("Please ! provide valid a input 'Number' ");
    }
    setText ('base-ellipse',widthEllipse);
    setText ('length-ellipse',heightEllipse);
    serial += 1;
    displayData(nameEllipse, ellipseAreaFixed)
})
//displayData
function displayData(name, calculate,){
    const tableBody = document.getElementById('table-body');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td class="ps-1">${serial}<span>.</span></td>
    <td class="ps-1">${name}</td>
    <td class="ps-1">${calculate}<span>cm</span><sup>2</sup></td>
    <td class="ps-1"><button class=" btn btn-primary my-3">Convert to m<sup>2</sup></button></td>
    `
    tableBody.appendChild(tr);
}
