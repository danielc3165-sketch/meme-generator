'use strict'

function onInit() {
  renderMeme()
  renderGallery()
}

function renderGallery(){

    var html=''

    html+=
    `<h2>Gallery</h2>
    <img src="3.jpg" onclick="onImgSelect()"/>
    <img src="4.jpg" onclick="onImgSelect()"/>`

    document.querySelector('.gallery-container').innerHTML=html
}

function onImgSelect(){
    setImg()
    document.querySelector('.gallery').style.display='none'
    document.querySelector('.editor').style.display='block'
    renderMeme()
}