function aggiungiTask() {
    const taskContent = document.createElement("p")
    const cestino = document.createElement("button")
    taskContent.innerText = document.getElementById("newTask").value
    cestino.setAttribute("value","Elimina")
    cestino.setAttribute("onclick","rimuoviTask")
    cestino.setAttribute("class","buttonDelet")    
    const parent = document.querySelector("form")
    parent.appendChild(taskContent,cestino)   
}

function sottolinea (){
    const depenna = document.querySelectorAll("p")
    for (let i=0; i<depenna.length;i++){
        depenna[i].style.textDecorationLine = "line-through";
    }
}
package.addEventListener("click",sottolinea)


