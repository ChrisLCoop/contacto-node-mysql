
var btn = document.querySelectorAll('.btn-actualizador');

function mostrarlista(){
    var clasemostrar =document.querySelector('.form-actualizar')

    /*
    var mostrar = document.querySelector('.form-actualizar');
    function togglelist(){
        mostrar.classList.toggle('mostrar-datos');
    }

    togglelist()*/
    
    console.log('prueba exitosa');
}

btn.forEach(function(button){
    button.addEventListener('click',mostrarlista);
});


/*

btn.addEventListener('click', (e) =>{
    mostrar.classList.toggle('mostrar-datos');
});*/

