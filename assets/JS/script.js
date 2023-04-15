let carDdigimon = document.querySelector('#carDdigimon')

fetch("https://digimon-api.vercel.app/api/digimon")
  .then((response) => response.json())
  .then((res) => {
    listaDigimon(res);
  })
  .then((error) => {
    console.log(error);
  });

  let nuevoArray = []

function listaDigimon (data){
    for (let index = 0; index < 10; index++) {
        nuevoArray.push(data[index])
        // console.log(data[index]);
        carDdigimon.innerHTML+=
        `
        <div class="">
            <div class="col" onmouseover="bigImg(this)" onmouseout="normalImg(this)">
                <div class="card">
                        <img src="${data[index].img}" class="card-img-top w-75 center" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data[index].name}</h5>
                        <p class="card-text">NIVEL : ${data[index].level}</p>
                        <button onclick="myFunction(${index})" id="open" class="btn btn-primary "  data-bs-toggle="modal" data-bs-target="#exampleModal">Ver</button>
                    </div>
                </div>
            </div>
            <br><br><br><br>
        </div>
        
        `
    }
    console.log(nuevoArray);
}


let nombre = document.querySelector('#nombreDigi')
let level = document.querySelector('#levelDigi')
let img = document.querySelector("#img")


function myFunction(i){
console.log(i);
const result = nuevoArray.filter((item,index) => index == i);
console.log(result);
nombre.innerHTML=result[0].name;
level.innerHTML="NIVEL : " + result[0].level
img.src=result[0].img

// let img_api = result[0].img
// img_digi.setAttribute("src",img_api)
}



function bigImg(x) {
    x.style.height = "100%";
    x.style.width = "105%";
  }
  
  function normalImg(x) {
    x.style.height = "100%";
    x.style.width = "90%";
  }


