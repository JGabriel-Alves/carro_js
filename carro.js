document.addEventListener("DOMContentLoaded", function() {
    // Seu código JavaScript aqui
    const burnoutOn = document.getElementById("turnOn");
    const burnoutOff = document.getElementById("turnOff");
    const carro = document.getElementById("carro");
    const h1 = document.getElementById("h1");

    function isBroken(){
        return carro.src.indexOf("image3") > -1;
    }

    function turnOn(){
        if(!isBroken()){
            carro.src = "./img/image.png";
            h1.textContent = "NOSSA ELE É MUITO RADICAL!!!";
        }
    }

    function turnOff(){
        if(!isBroken()){
            carro.src = "./img/image2.png";
            h1.textContent = "Olha a caravan do Alemão!!";
        }
    }

    function broken(){
        carro.src = "./img/image3.png";
        h1.textContent = "Droga a Caravan quebrou :(";
    }

    burnoutOn.addEventListener("click", turnOn);
    burnoutOff.addEventListener("click", turnOff);
    carro.addEventListener("dblclick", broken)
});
