let btn = document.getElementById('LM-btn')
let uberlagerung = document.getElementById('uberlagerung')

btn.addEventListener('click', () =>{
    uberlagerung.style.display = `grid`;
    uberlagerung.classList.add('animate-uberlagerung')
})