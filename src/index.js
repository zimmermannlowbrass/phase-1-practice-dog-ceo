console.log('%c HI', 'color: firebrick')

//Challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const init = () => {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => postFourDogPics(data))
}

function postFourDogPics(data) {
    let x = 0
    let len = data["message"].length
    let contain = document.querySelector('div')
    while (x < len){
        let dog = data["message"][x]
        let img = document.createElement('img')
        img.src = dog
        contain.appendChild(img)
        x ++      
    }
}
document.addEventListener('DOMContentLoaded', init)


//Challenge 2
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const init2 = () => {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => createListofDogs(data))
}

function createListofDogs(data) {
    const dogs = data["message"]
    for (let dog in dogs) {
        let h5 = document.createElement('li')
        h5.innerText = dog.toUpperCase()
        dogs[dog].forEach(function(breed) {
            let p = document.createElement('p')
            p.innerText = ` --- ${breed}`
            h5.appendChild(p)
        })
        document.querySelector('ul').appendChild(h5)
    }    
}
document.addEventListener('DOMContentLoaded', init2)


//Challenge 3

const init3 = () => {
    setTimeout(function(){
        const dogs = document.querySelectorAll('li')
        for (let dog of dogs) {
            dog.addEventListener('click',changeTheColor)
        }
    },2000)
} 

function changeTheColor(e) {
    if (!e.srcElement.style.color) {
        e.srcElement.style.color = 'red'
    } else {
        e.srcElement.style.color = null
    }
}
document.addEventListener('DOMContentLoaded', init3)


//Challenge 4
const init4 = () => {
    setTimeout(function(){
        addMoreLetters()
        const breedDropMenu = document.querySelector("#breed-dropdown")
        breedDropMenu.addEventListener('change', filerBreed)
    }, 3000)
}

function filerBreed (e) {
    const breeds = document.querySelectorAll('li')
    breeds.forEach(breed => {
        breed.style.display = "list-item"
        if (breed.innerText[0] !== e.target.value.toUpperCase()) {
            breed.style.display = "none"
        }
    })
}

document.addEventListener('DOMContentLoaded', init4)