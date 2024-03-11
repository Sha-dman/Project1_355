const loadtext = document.querySelector('.loading-text')
const bg = document.querySelector('.loading-screen')
let load = 1
const scale = (num, inMin, inMax, outMin, outMax) => {
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}
 // blur
let interval = setInterval(blurr, 15)

function blurr(){
    load++;

    if(load > 99){
        clearInterval(interval);
        loadtext.remove();
       // bg.remove();
    }
    loadtext.innerText = `${load}%`
    loadtext.style.opacity = scale(load, 0 , 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100 ,30, 0)}px)`
}
// expand
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) =>{
    panel.addEventListener("mouseover", () =>{
        removeActive()
        panel.classList.add('active')
    })
})

function removeActive(){
    panels.forEach(panels => {
        panels.classList.remove('active')
    })
}

// search
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener("click", () => {
    search.classList.toggle('active')
    input.focus()
})

