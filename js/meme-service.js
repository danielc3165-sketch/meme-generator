'use strict'

var gImgs = [{id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat']}] 
var gMeme = { 
selectedImgSrc: 'meme-imgs (square)/2.jpg', 
selectedLineIdx: 0, 
lines: getLines()
} 

var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}


function getLines(){
    var loadLines=loadFromStorage('lines')
    //console.log('loadLines',loadLines)
    if(loadLines&&loadLines!==[]) return loadLines
    
    else{
 return [ 
{ 
txt: 'I sometimes eat Falafel', 
size: 20, 
color: '',
pos:{x:0,y:0},
place:'right',
stroke:false,
font:'',
}, 
{ 
txt: 'I love pupis', 
size: 30, 
color: '',
pos:{x:0,y:0},
place:'left',
stroke:false,
font:'',
},
] 
}}

 function setLineTxt(txt,){
    gMeme.lines[gMeme.selectedLineIdx].txt=txt
    
 }

function setLineColor(color){
    gMeme.lines[gMeme.selectedLineIdx].color=color
}

 function setImg(imgSrc){
 gMeme.selectedImgSrc=imgSrc
 }

 function addLine(){
    var line={
    txt: `Text`, 
    size: 20, 
    color: '#000',
    pos:{x:0,y:0},
    place:'left',
    stroke:false,
    font:'',
  }

  gMeme.lines.push(line)
  //console.log('lines',gMeme.lines)
 }

 function deleatLine(){
     gMeme.lines.splice(gMeme.selectedLineIdx,1)
     //console.log(gMeme.selectedLineIdx)
 }

 function switchLine() {
    if(gMeme.selectedLineIdx===gMeme.lines.length-1) gMeme.selectedLineIdx=0
    else gMeme.selectedLineIdx++
    // console.log('idx',gMeme.selectedLineIdx)
 }

 function saveLinePos(ind,pos,size){

 }

 function changeSize(sign){
    if(sign=='+') {
    gMeme.lines[gMeme.selectedLineIdx].size++
  }else{
    gMeme.lines[gMeme.selectedLineIdx].size--
  }
 }

 function changePlace(place){
    gMeme.lines[gMeme.selectedLineIdx].place=place
 }