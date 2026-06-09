'use strict'

function onInit() {
  renderMeme()
  renderGallery()
}

function onChangeText(elValue) {
    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');
    var color = document.querySelector('.color-input').value;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setLineTxt(elValue,color)
    renderMeme()
  //console.log(elValue);
}

function downloadMeme(link){
    const canvas = document.querySelector('.canvas');
    link.href = canvas.toDataURL();
}


function renderMeme() {
  const canvas = document.querySelector('.canvas');
  const ctx = canvas.getContext('2d');

    var linesObj=gMeme.lines[gMeme.selectedLineIdx]
    const txt=linesObj.txt
    const size=linesObj.size
    const color=linesObj.color


  var elImg = new Image();
  elImg.src = '2.jpg';
  elImg.onload = function() {
    ctx.drawImage(elImg, 0, 0, canvas.width, canvas.height);
    ctx.font = `${size}px Arial`;
    ctx.fillStyle=color
    ctx.fillText(txt, 10, 50);
  };

    

}