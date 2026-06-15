'use strict'


function saveToStorage(key,obj){
     localStorage.setItem(key, JSON.stringify(obj))   
}


function loadFromStorage(key){
    return JSON.parse(localStorage.getItem(key))  
}




