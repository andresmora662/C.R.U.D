let contador_editar=0;
let nota_editar=document.getElementById("nota_editar");

let arreglo_tareas = [];

// antes de js hacer html, eso es un primer paso.

/* volver objeto la lista ul de tareas */
let lista_ul_tareas=document.getElementById("listaTareas");


// -- en el sc4:
let boton_agregar=document.getElementById("agregar_o_editar");
let esta_editando=false;
let posicion_li=0;
//--

function agregarTarea() {


// -- en el sc4:
  if(!esta_editando){
//--

  /* primero creemos los elementos y luego vemos cual va dentro del cual */

    let un_li=document.createElement("li");
    
    let spam1=document.createElement("spam");
    let spam2=document.createElement("spam");
    let spam3=document.createElement("spam");
    let spam4=document.createElement("spam");
    let boton_eliminar=document.createElement("button");
    let boton_editar=document.createElement("button");


    //agregando clases:

    spam1.classList.add("mi-clase");
    spam2.classList.add("mi-clase");
    spam3.classList.add("mi-clase");
    spam4.classList.add("mi-clase");
    boton_eliminar.classList.add("mi-clase");
    boton_editar.classList.add("mi-clase");

    /*ahora miremos el texto dentro de cada elemento nuevo creado*/

    spam1.innerHTML="<b>Titulo: <b>";
    spam2.innerHTML=document.getElementById("inputTarea").value;
    spam3.innerHTML="<b>Descripcion: <b>";
    spam4.innerHTML=document.getElementById("inputDescripcion").value;

    boton_eliminar.innerHTML="Eliminar";
    boton_editar.innerHTML="Editar";

     /*ahora agreguemos los elementos a li*/

    un_li.appendChild(spam1);
    un_li.appendChild(spam2);
    un_li.appendChild(spam3);
    un_li.appendChild(spam4);
    un_li.appendChild(boton_eliminar);
    un_li.appendChild(boton_editar);

        /*ahora agreguemos li a ul*/
    lista_ul_tareas.appendChild(un_li);


    /*******************/

    let titulo_tarea = document.getElementById("inputTarea").value;
    let descripcion_tarea = document.getElementById("inputDescripcion").value;

    let objeto_tarea={};
    objeto_tarea.titulo=titulo_tarea;
    objeto_tarea.descripcion=descripcion_tarea;

    arreglo_tareas.push(objeto_tarea);
    localStorage.setItem("arreglo_tareas_clave", JSON.stringify(arreglo_tareas));
    /***** */

    //console.log(arreglo_tareas);
    console.log("el localstorage ahora tiene almacenado: ");
    console.log(JSON.parse(localStorage.getItem("arreglo_tareas_clave")));


    /******/
    // voy a agregar la funcion que se ejecuta al undir el boton eliminar. 
    //Para eliminar todo el li que contenga ese boton

    boton_eliminar.onclick = function() {
 
    // cambio el nombre del boton agregar por editar
    if(!esta_editando){  
      let padre = this.parentNode;
      

      
      posicion_li= Array.from(lista_ul_tareas.children).indexOf(padre);
      lista_ul_tareas.removeChild(padre);

      //console.log("la posicion a eliminar es: "+posicion_li);

      arreglo_tareas.splice(posicion_li, 1);
      localStorage.setItem("arreglo_tareas_clave", JSON.stringify(arreglo_tareas));
      
      console.log("el localstorage ahora tiene almacenado: ");
      console.log(JSON.parse(localStorage.getItem("arreglo_tareas_clave")));
    }else{
      
      

    }

    }

    /*******************/
    // voy a agregar la funcion que se ejecuta al undir el boton editar. 
    //Para actualizar o editar una tarea

    boton_editar.onclick = function() {

      // cambia nombre o texto del boton agregar
    
      boton_agregar.innerHTML="Editar";

      
      // capto los valores de la tarea y los pongo en las inputs: 

      let el_li=this.parentNode;

      document.getElementById("inputTarea").value=el_li.children[1].innerHTML;
   
      document.getElementById("inputDescripcion").value=el_li.children[3].innerHTML;
     
      
// -- en el sc4:
     esta_editando=true;
     posicion_li= Array.from(lista_ul_tareas.children).indexOf(el_li);
// --
      if(contador_editar==0){
        boton_agregar.classList.toggle('rojo');
        contador_editar++;
      }
     
    }
// -- en el sc4:
  }else{

    let el_li= lista_ul_tareas.children[posicion_li];
    el_li.children[1].innerHTML=document.getElementById("inputTarea").value;
    el_li.children[3].innerHTML=document.getElementById("inputDescripcion").value;

    esta_editando=false;
    boton_agregar.innerHTML="Agregar Tarea";

    arreglo_tareas[posicion_li].titulo=document.getElementById("inputTarea").value;
    arreglo_tareas[posicion_li].descripcion=document.getElementById("inputDescripcion").value;
    localStorage.setItem("arreglo_tareas_clave", JSON.stringify(arreglo_tareas));

    console.log("el localstorage ahora tiene almacenado: ");
    console.log(JSON.parse(localStorage.getItem("arreglo_tareas_clave")));
    
    boton_agregar.classList.toggle('rojo');
    contador_editar=0;

  }
//--
     /*******************/

    document.getElementById("inputTarea").value="";
    document.getElementById("inputDescripcion").value="";

}


function borrarTodasTareas() {

  if(!esta_editando){
    while (lista_ul_tareas.lastChild) {
      lista_ul_tareas.removeChild(lista_ul_tareas.lastChild);
    }

    localStorage.clear();
  
    console.log("el localstorage ahora tiene almacenado: ");
    console.log(JSON.parse(localStorage.getItem("arreglo_tareas_clave")));
    console.log("el localstorage ahora está VACÍO ");

    arreglo_tareas = [];
  }else{

    
  }

}


