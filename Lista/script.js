function nuevaTarea() {
    let li = document.createElement("li");
    let tareaTexto = document.getElementById("input").value;
    let valor = document.createTextNode(tareaTexto);
    li.appendChild(valor);
    if (tareaTexto === '') {
    alert("Debes ingresar una tarea");
    }else{
      document.getElementById("lista").appendChild(li);
    }
    document.getElementById("input").value = "";
    let span = document.createElement("SPAN");
    let iconoCerrar = document.createTextNode("\u00D7");
    span.className = "cerrar";
    span.appendChild(iconoCerrar);
    li.appendChild(span);
    for (i = 0; i < cierra.length; i++) {
      cierra[i].onclick = function() {
          let div = this.parentElement;
          div.style.display = "none";
      }
    }
  }
  
function limpiarLista(){
    let lista = document.getElementsByTagName("ul");
    lista[0].innerHTML = "";
}


var listaTareas = document.getElementsByTagName("LI");

for (let i = 0; i < listaTareas.length; i++) {
  let span = document.createElement("SPAN");
  let iconoCerrar = document.createTextNode("\u00D7"); 
  span.className = "cerrar";
  span.appendChild(iconoCerrar);
  listaTareas[i].appendChild(span);
}

var cierra = document.getElementsByClassName("cerrar");
for (let i = 0; i < cierra.length; i++) {
  cierra[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(evento) {
  if (evento.target.tagName === 'LI') {
    evento.target.classList.toggle('checked');
  }
}, false);

