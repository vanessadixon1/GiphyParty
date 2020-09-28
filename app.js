console.log("Let's get this party started!");
const form = document.querySelector('#formIntake');
const searchBtn = document.querySelector('.searchBtn');
const removeBtn = document.querySelector('.removeBtn');
const input = document.querySelector('#searches');
const returnSearch = document.querySelector('#returnSearch')


form.addEventListener('submit',function(e) {
    e.preventDefault();

    searchBtn.addEventListener('click',searchGiphy(input.value));

    form.reset();
});

removeBtn.addEventListener('click',function(e){
    e.preventDefault()

    const collectionImages = document.body.children[2].children
    const images = Array.from(collectionImages)

    for(let img of images) {
        img.remove()
    }
})

async function searchGiphy(giphy) {

        const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${giphy}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)

        const randomPic = Math.floor((Math.random() * 50) + 1)
        
        createGiphy(res.data.data[randomPic].images.downsized_medium.url)
}

function createGiphy(url) {
    const img = document.createElement('img');
    img.src = url;
    returnSearch.append(img)
}

const letters = document.querySelectorAll('.letters');
function randomColor() {
        const r = Math.floor((Math.random() *255) +1)
        const g = Math.floor((Math.random() *255) +1)
        const b = Math.floor((Math.random() *255) +1)
        return`rgb(${r},${g},${b})`
}

setInterval(function() {
    for(let letter of letters) {
        letter.style.color = randomColor()
    }
},1000)
