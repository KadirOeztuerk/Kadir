const menu = document.querySelector('.menu')
            const close = document.querySelector('.close')
            const nav = document.querySelector('nav')

            menu.addEventListener('click', () => {
                nav.classList.add('open-nav')
            })

            close.addEventListener('click', () => {
                nav.classList.remove('open-nav')
            })


let downEl = document.querySelector(".down")

function scroly(){
    downEl.textContent = "Yeah";
    document.getElementById("sneakers").scrollIntoView();
    return false;
}


