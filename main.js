'use strict'

function onChangeText(elValue) {
    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');
    var color = document.querySelector('.color-input').value;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.font = '30px Arial';
    ctx.fillText(elValue, 10, 50);
  //console.log(elValue);
}

function downloadMeme(link){
    const canvas = document.querySelector('.canvas');
    link.href = canvas.toDataURL();
}
