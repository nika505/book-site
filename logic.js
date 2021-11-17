const menu = document.querySelector(".menu-active");
const menubut = document.querySelector(".menu");
const wrapper = document.querySelector('.wrapper');
const closedd = document.querySelector('i')
function doSomething(){
    wrapper.classList.remove('shown');
    menu.classList.add('shown')
}
function close(){
    wrapper.classList.add('shown');
    menu.classList.remove('shown')
}
closedd.addEventListener('click',close)
menubut.addEventListener('click',doSomething)