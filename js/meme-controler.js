'use strict'


var gIconsIdx=3
var iconMode=false
var gElIcon
var gIconPos

function onInit() {
  renderMeme()
  renderGallery()
  updateEditor()
  bildIconsArr()
}

function renderMeme() {

  if(iconMode===true) return

  const canvas = document.querySelector('.canvas')
  const ctx = canvas.getContext('2d')
  var lines=gMeme.lines
  var elImg = new Image()
  
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  elImg.src = gMeme.selectedImgSrc
  ctx.drawImage(elImg, 0, 0, canvas.width, canvas.height)
  
  elImg.onload = function() {
    
    lines.forEach(({txt,size,color,place,stroke,font},idx)=>{
      if(font==='Oswald')ctx.font = `${font} ${size}px Arial`
      else if(font==='Arimo')ctx.font = `${font} ${size}px Arial `
      else if(font==='Playwrite AU VIC Guides')ctx.font = `${font} ${size} Arial`
      else ctx.font = `${size}px Arial`
      
      ctx.fillStyle = color
      ctx.strokeStyle= color
      ctx.lineWidth=0.5
      
      if (stroke){ 
      if (place === 'right') ctx.strokeText(txt,490-ctx.measureText(txt).width,30+50*(idx))
      else if (place === 'center') ctx.strokeText(txt,(500-ctx.measureText(txt).width)/2,30+50*(idx))
      else ctx.strokeText(txt,10,30+50*(idx))

      }else{
      if (place === 'right') ctx.fillText(txt,490-ctx.measureText(txt).width,30+50*(idx))
      else if (place === 'center') ctx.fillText(txt,(500-ctx.measureText(txt).width)/2,30+50*(idx))
      else ctx.fillText(txt,10,30+50*(idx))
      
      }
    })
   
   var idx=gMeme.selectedLineIdx
   ctx.strokeStyle= 'black'
  //  var currLine=gMeme.lines[idx]
   ctx.strokeRect(0,50*(idx), canvas.width, 50)

   
}


}

function onChangeText(elValue) {
    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setLineTxt(elValue)
    renderMeme()
  //console.log(elValue);
}

function onChangeColor(elValue) {
    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setLineColor(elValue)
    renderMeme()
  //console.log(elValue);
}

function downloadMeme(link){
    const canvas = document.querySelector('.canvas');
    link.href = canvas.toDataURL();
}

function onSave(){
  saveToStorage('lines',gMeme.lines)
  //console.log(gMeme.lines)
}

function onLoad(){
  gMeme.lines=getLines()
  renderMeme()
}

function onAddLine(){
  addLine()
  renderMeme()
}

function onSwitchLine(ev){
  const canvas = document.querySelector('.canvas')
  const ctx = canvas.getContext('2d')

  if(ev.type==='click'){
    switchLine()
    updateEditor()
    renderMeme()
  }else{
    var pos={x:ev.offsetX,y:ev.offsetY}
    
    if(iconMode===true){
        gIconPos=pos
    if(iconMode===true) ctx.drawImage(gElIcon,gIconPos.x,gIconPos.y)
      }


    var idx=Math.floor(pos.y/50)
    
    
    if(idx<gMeme.lines.length) {
      gMeme.selectedLineIdx=idx
    
      updateEditor()
      
      

      renderMeme()
     }
    else return
    //console.log('ind',idx)
  }  
}

function onSwitchPage1(el){
  document.querySelector('.gallery').style.display='block'
  document.querySelector('.editor').style.display='none'
   
}

function onSwitchPage2(){
  document.querySelector('.gallery').style.display='none'
  document.querySelector('.editor').style.display='grid'
}

function onChangeSize(sign){
  changeSize(sign)
  renderMeme()
}

function onChangePlace(place){
  console.log(place)
   changePlace(place)
   renderMeme()
}

function onStroke(){
  var stroke=gMeme.lines[gMeme.selectedLineIdx].stroke
  if(stroke===true) gMeme.lines[gMeme.selectedLineIdx].stroke=false
  else gMeme.lines[gMeme.selectedLineIdx].stroke=true
  // console.log(strock,gMeme.lines[gMeme.selectedLineIdx])
  renderMeme()
}

function onDeleatLine(){
  deleatLine()
  renderMeme()
}

function onCangeFont(elVal){
    gMeme.lines[gMeme.selectedLineIdx].font=elVal
    console.log(elVal)

    renderMeme()
    //console.log(gMeme.lines[gMeme.selectedLineIdx])
}

function updateEditor(){
    var color=gMeme.lines[gMeme.selectedLineIdx].color
    var txt=gMeme.lines[gMeme.selectedLineIdx].txt
    
    document.querySelector('.color-input').value=color
    document.querySelector('.text-input').value=txt
}

function bildIconsArr(idx=3){
  var arr=[]
  for(var i=0;i<12;i++){
    var srcString=`icons-png/smiley${i}.png`
    arr.push(srcString)
  }
  
  var cutArr=arr.splice(idx,4)
  var imgs=Array.from(document.querySelectorAll('.icons img'))
  
  
  var i=0
    imgs.forEach(img=>(img.src=cutArr[i++]))
  
  
  //console.log(imgs)

}

function onErrow(side){
  
 if(side==='left'&&gIconsIdx>0) gIconsIdx--
 else if(side==='right'&&gIconsIdx<6) gIconsIdx++
 else return
 console.log(gIconsIdx)
 bildIconsArr(gIconsIdx)
}

function onIcon(el){
    if(iconMode===false) {
      
      el.style.width='55px'
      iconMode=true
      gElIcon=el
    }
    else {
      if(el.style.width==='55px'){
        el.style.width='48px'
        iconMode=false
      }
else{
    var imgs=Array.from(document.querySelectorAll('.icons img'))
    imgs.forEach(img=>(img.style.width='48px'))
    el.style.width='55px'
    gElIcon=el
  }
}
}