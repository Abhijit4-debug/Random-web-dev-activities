const clos=document.querySelector('.close');
const trigger=document.querySelector('.trigger');
const m=document.querySelector('.modal-container');

trigger.addEventListener('click',() => {
    m.classList.add('show');
});

clos.addEventListener('click',() =>{
    m.classList.remove('show');
});