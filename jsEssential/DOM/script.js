
var color = 'purple';

document.querySelector('.left').style.backgroundColor = color;
document.querySelector('.left .color-value').innerHTML = color;

document.querySelector('.right').style.backgroundColor = color;
document.querySelector('.right .color-value').innerHTML = color;

function headingColor() {
    color = 'lightgreen';
    document.querySelector('.title').style.color= color;
}
headingColor();