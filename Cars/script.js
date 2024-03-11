const imgs = document.getElementById('imgs')
const left = document.getElementById('next')
const right = document.getElementById('back')
const img = document.querySelectorAll('#imgs img')

let index = 0;
let interval = setInterval(run, 2000)
function run(){
    index++;
    changeImage()
}
function changeImage(){
    if(index > img.length -1){
        index = 0
    }
    else if(index < 0){
        index = img.length-1
    }
    imgs.style.transform =`translateX(${-index * 500}px)`
}
function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run,2000)
}
right.addEventListener('click', () =>{
    index--;
    changeImage()
    resetInterval()
})
left.addEventListener('click', () =>{
    index++;
    changeImage()
    resetInterval()
})
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))


const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll' , checkBoxes)
checkBoxes()
function checkBoxes(){
    const trigger = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < trigger){
            box.classList.add('show')
        }
        else box.classList.remove('show')
    })

}
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener("click", () => {
    search.classList.toggle('active')
    input.focus()
})

