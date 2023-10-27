const inputfiled = document.getElementById("input-field");
// console.log(inputfiled)
const  listitem = document.getElementById("listItem");
// console.log(listitem);
function clicked(){
    if(inputfiled.value === ""){
        alert("add somthing");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputfiled.value;
        listitem.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    inputfiled.value = "";
    datasave()
}
listitem.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toogle("checked");
        datasave()
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        datasave()
    }
  

},false);

function datasave(){
    localStorage.setItem("data",listitem.innerHTML);
}
function showdata(){
    listitem.innerHTML = localStorage.getItem("data")
}
showdata()