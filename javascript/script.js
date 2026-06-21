//select popup,overlay,plus button

var create=document.getElementById("create")
var overlay=document.querySelector(".overlay")
var popup=document.querySelector(".popup")

create.addEventListener(
    "click",function(){
    
overlay.style.display="block"
    popup.style.display="block"

    })
var closebook=document.getElementById("close-book")
closebook.addEventListener(
    "click",function(event){
event.preventDefault();
overlay.style.display="none"
    popup.style.display="none"
    }
)
//select book-name,author-input,description-input,add-book
var bookname=document.getElementById("book-name")
var authorinput=document.getElementById("author-input")
var descriptioninput=document.getElementById("description-input")
var addbook=document.getElementById("add-book")
var container=document.querySelector(".container")
var remove=document.getElementById("remove")
addbook.addEventListener(
    "click",function(event){

        event.preventDefault(); 
           var div= document.createElement("div")
           div.setAttribute("class","book")
            
           div.innerHTML=`<h2>${bookname.value}</h2>
            <h4>${authorinput.value}</h4>
            <p>${descriptioninput.value}</p>
            <button onclick="removebook(event)">Remove</button>`
            
            
            container.append(div)
            bookname.value=""
            authorinput.value=""
            descriptioninput.value=""
              
    }
)

//select remove button
function removebook(event){
    event.target.parentElement.remove()
}
    