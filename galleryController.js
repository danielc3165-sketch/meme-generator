'use strict'

function onInit() {
  renderMeme()
  renderGallery()
}

function renderGallery(){

    var html=''

    // html+=
    // `<h2>Gallery</h2>`
    for(var i=0;i<18;i++){
    html+= `<img class="gallery-img" src="meme-imgs (square)/${i+1}.jpg" onclick="onImgSelect(this)"/>`
    }

    document.querySelector('.gallery-container').innerHTML=html
}

function onImgSelect(img){
    var src=img.src
    console.log('src',img.src)
    setImg(src)
    document.querySelector('.gallery').style.display='none'
    document.querySelector('.editor').style.display='grid'
    renderMeme()
}

