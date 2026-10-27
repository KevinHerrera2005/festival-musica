document.addEventListener('DOMContentLoaded', ()=>{
    scrollNac()
    scrolleo()
    crearGaleria()
    resaltarEnlace()

})
function scrollNac(){
    const navLinks=document.querySelectorAll('.navegacion-principal a')
    navLinks.forEach(Link=>{
        Link.addEventListener('click',e=>{
            e.preventDefault()
            const sectionscroll=e.target.getAttribute('href')
            const section=document.querySelector(sectionscroll)
            section.scrollIntoView({behavior: 'smooth'})
        })
    })
}

function resaltarEnlace(){
    document.addEventListener('scroll',()=>{
        const sections=document.querySelectorAll('section')
        const navLinks=document.querySelectorAll('.navegacion-principal a')
        let actual=''
        sections.forEach(section =>{
            const sectionTop=section.offsetTop;
            const sectionHeight=section.clientHeight;
            if(window.scrollY>=(sectionTop-sectionHeight/3)){
                actual=section.id
            }
        })
    navLinks.forEach(Link=>{
        if(Link.getAttribute('href')==='#'+actual){
            Link.classList.add('active')
        }else{
            Link.classList.remove('active') 
        }
     })
})
}
function scrolleo(){
    const header=document.querySelector('.header')
    const festival=document.querySelector('.sobre-festival')
    document.addEventListener('scroll',()=>{
        if(festival.getBoundingClientRect().bottom<1){
            header.classList.add('fixed')
        }else{
            header.classList.remove('fixed')
        }
    })

}

function crearGaleria(){
    let galeria=document.querySelector('.galeria-imagenes')
    for(let i=1;i<17;i++){
        const imagen=document.createElement('IMG')
        imagen.src=`src/img/gallery/full/${i}.jpg`
        imagen.onclick=function(){mostrarImagen(i)}
        galeria.appendChild(imagen)
    }

}
function mostrarImagen(i){
    const imagen=document.createElement('IMG')
    imagen.src=`src/img/gallery/full/${i}.jpg`

    const modal=document.createElement('DIV');
    modal.classList.add('modal')
    modal.onclick=cerrarModal
    //boton cerrar modal
    const cerrarModalBtn=document.createElement('BUTTON')
    cerrarModalBtn.textContent='x'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick=cerrarModal
    modal.appendChild(imagen)
    modal.appendChild(cerrarModalBtn)

    const body=document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)
    console.log(modal)
}
function cerrarModal(){
    const modal=document.querySelector('.modal');
    const body=document.querySelector('body');
    modal.classList.add('fadeOut')
    setTimeout(() => {
    modal?.remove();
    body.classList.remove('overflow-hidden')
    }, 500);
}