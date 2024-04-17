
let url = "https://pokeapi.co/api/v2/pokemon/zekrom";
axios.get(url).then(
    (response)=>{
        let img = document.createElement("img");
        img.src = response.data.sprites.front_shiny;
        img.style.width = "50%";
        document.querySelector('body').appendChild(img);
    }
)