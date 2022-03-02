let miMesa = []

const contenedorPlatos = document.getElementById('la-carta');
const contenedorPedidos = document.getElementById('pedido-contenedor');

const contadorPedidos = document.getElementById('contadorPlatos');
const precioTotal = document.getElementById('precioTotal');

const selecPlatos = document.getElementById('selecPlatos');
const buscador = document.getElementById('search');



// FETCH
const fetchHP = characters => {
    const { dateOfBirth , gender } = characters.name;
    fetch(`http://hp-api.herokuapp.com/api/characters`)
    .then(response => response.json())
    .then(data => obtenido(data));
}

const obtenido = data=>{
    const{name,main:{species}}=data
    console.log(name,species);

}

const onLoad = () =>{
    navigator.fetchHP
}
console.log(fetchHP)
// filtro de busqueda

selecPlatos.addEventListener('change',()=>{
// operadores ternarios (if.....else)
    selecPlatos.value == 'all' ? mostrarPlatos(stockPlatos) : mostrarPlatos(stockPlatos.filter(el => el.tipo == selecPlatos.value))
})

// SEARCH

buscador.addEventListener('input', ()=>{
// operador ternario (if....else)
    buscador.value == "" ? mostrarPlatos(stockPlatos) : mostrarPlatos(stockPlatos.filter(el => el.nombre.toLocaleLowerCase().includes(buscador.value.toLocaleLowerCase())))
})

//==========================================

mostrarPlatos(stockPlatos);

function mostrarPlatos(array){
    contenedorPlatos.innerHTML='';
    for (const plato of array){
        let div = document.createElement('div');
        div.className = 'plato';
        div.innerHTML = `<div class="card">
        <div class="card-image">
            <img src=${plato.img}>
            <span class="card-title">${plato.nombre}</span>
        </div>
        <div class="card-content">
            <p>Tipo: ${plato.tipo}</p>
            <p>Salsa: ${plato.salsa}</p>
            <p> $${plato.precio}</p>
            <button id="botonAgregar${plato.id}" type="button" class="btn btn-warning">ORDENAR</button>
        </div>
    </div> `

    contenedorPlatos.appendChild(div);


    let btnAgregar = document.getElementById(`botonAgregar${plato.id}`)
    

    btnAgregar.addEventListener('click',()=>{
    // LIBRERÍA TOASTIFY
        agregarAmiMesa(plato.id)
        Toastify({

            text: "Agregaste a tu mesa " + plato.cantidad + " plato de " + plato.nombre + " con salsa " + plato.salsa,
            
            duration: 3000
            
            }).showToast();
    })
    }
}


function agregarAmiMesa(id){
    let repetido = miMesa.find(item => item.id == id)
    if(repetido){
        console.log(repetido);
        repetido.cantidad = repetido.cantidad + 1
        document.getElementById(`cantidad${repetido.id}`).innerHTML =   `<p id=cantidad${repetido.id}>Cantidad:${repetido.cantidad}</p>  `
        actualizarMesa()
    }else{

        let platoAgregar = stockPlatos.find(elemento => elemento.id == id)
        miMesa.push(platoAgregar)
        actualizarMesa()
        let div = document.createElement('div')
        div.className = 'platoEnMesa'
        div.innerHTML =  `
        <p>${platoAgregar.nombre}</p>
        <p>Salsa: ${platoAgregar.salsa}</p>
        <p>Precio: $${platoAgregar.precio}</p>
        <p id= cantidad${platoAgregar.id}>Cantidad: ${platoAgregar.cantidad}</p>
        <button id=botonEliminar${platoAgregar.id} class="boton-eliminar"><img src="./img/icons8-disposal-30.png" alt=""></button>
        `
        contenedorPedidos.appendChild(div)

        let btnEliminar = document.getElementById(`botonEliminar${platoAgregar.id}`)
        btnEliminar.addEventListener('click',()=>{
            console.log(platoAgregar.id);
            btnEliminar.parentElement.remove()
            miMesa = miMesa.filter(elemento => elemento.id != platoAgregar.id)
            actualizarMesa()
            localStorage.setItem('mesa', JSON.stringify(miMesa))
        })
    }
    localStorage.setItem('mesa', JSON.stringify(miMesa))
}

function actualizarMesa () {
    contadorPedidos.innerText = miMesa.reduce((acc,el) => acc + el.cantidad, 0)
    precioTotal.innerText = miMesa.reduce((acc,el) => acc + (el.precio * el.cantidad), 0)
}

function recuperar() {
    let recuperarMesa = JSON.parse(localStorage.getItem('mesa'))
    console.log(recuperarMesa);
    if(recuperarMesa){
        recuperarMesa.forEach(element => {
            agregarAmiMesa(element.id)
        });
    }
}
recuperar();