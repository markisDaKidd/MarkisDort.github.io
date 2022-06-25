let dropdown = document.querySelector('#dropdown')
let curtain = document.querySelector('#dropdown-object')
let del=document.querySelector('#x-icon')


dropdown.addEventListener('click',()=>{
    // curtain.style.display='block'
    curtain.style.width='10.5rem'
})

del.onclick=()=>{
    curtain.style.width='0'
}