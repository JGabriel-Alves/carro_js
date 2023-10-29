document.addEventListener("DOMContentLoaded", function() {

    //criando as variaveis e coletando os valores delas no HTML
    const burnoutBtn = document.getElementById("turnOnOff");
    const carro = document.getElementById("carro");
    const h1 = document.getElementById("h1");

    //Função para verificar se a image3 foi chamada
    function isBroken(){
        return carro.src.indexOf("image3") > -1;
    }

    //Essa função troca a imagem da Caravan e muda a tag H1 no HTML
    //Ela liga a Caravan
    function turnOn(){
        if(!isBroken()){
            carro.src = "./img/image.png";
            h1.textContent = "NOSSA ELE É MUITO RADICAL!!!";
        }
    }

    //Essa função "deliga" a Caravan
    function turnOff(){
        if(!isBroken()){
            carro.src = "./img/image2.png";
            h1.textContent = "Olha a caravan do Alemão!!";
        }
    }

    //Essa função "quebra" a Caravan
    function broken(){
        carro.src = "./img/image3.png";
        h1.textContent = "Droga a Caravan quebrou :(";
        burnoutBtn.disabled = true;
        burnoutBtn.textContent = "Cabo a brincadeira";
    }

    //Função para funcionar o botão para "desligar" e "ligar" a Caravan
    function turnOnOff(){
        //Verifica se o botão contem a string "Burnout ON", se sim, chama a função turnOn();
        if(burnoutBtn.textContent == "Burnout ON"){
            turnOn();
            burnoutBtn.textContent = "Burnout OFF";
        }
        else if(burnoutBtn.textContent == "Burnout OFF"){
            turnOff();
            burnoutBtn.textContent = "Burnout ON";
        }
    }

    //Adicionando os eventos do mouse
    burnoutBtn.addEventListener("click", turnOnOff);
    carro.addEventListener("dblclick", broken);
    
});
