

const carritoAbrir = document.getElementById('boton-mesa');
const carritoCerrar = document.getElementById('mesaCerrar');

const btn = document.querySelector('#ordenar');

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const modalCarrito = document.getElementsByClassName('modal-mesa')[0]




carritoAbrir.addEventListener('click', ()=> {
    contenedorModal.classList.toggle('modal-active')
})
carritoCerrar.addEventListener('click', ()=> {
    contenedorModal.classList.toggle('modal-active')
})
modalCarrito.addEventListener('click',(e)=>{
    e.stopPropagation()
})
contenedorModal.addEventListener('click', ()=>{
    carritoCerrar.click()
})

btn.addEventListener('click', () => {
alert("ACA TENDRIA QUE ESTAR EL MODAL SWEETALERT")
})



