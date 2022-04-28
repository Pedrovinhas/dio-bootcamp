const btn = document.querySelector('button')
const section = document.querySelector('section')
const url = 'https://thatcopy.pw/catapi/rest/'

btn.addEventListener('click', fetchAPI)


function fetchAPI() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        catImg = data.url

        section.innerHTML = `
        
        <img class="cat" src=${catImg}> 
        
        `
        console.log(catImg)
    })
}

