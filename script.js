const btnEl = document.getElementById('btn')
const animeContainerEl = document.querySelector('.anime-container')
const animeImageEl = document.querySelector('.anime-img')
const animeNmeEl = document.querySelector('.anime-name')


btnEl.addEventListener('click',function(){
    try {
        const response = fetch('https://api.catboys.com/img')
    } catch (error) {
        
    }
})