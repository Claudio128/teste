function slide1(){
    document.getElementById("titulo").textContent="Temperatura Sr. Eduardo";
    document.getElementById('id').src="https://thingspeak.com/channels/1631164/charts/1?bgcolor=%23F8F8FF&color=%23d62020&days=30&dynamic=true&results=100&title=Temperatura+-+%C2%BAC&type=spline&xaxis=Tempo+Decorrido+%2F+Hora&yaxis=Graus+Celsios++-+%C2%BAC";
    setTimeout("slide2()", 5000);
    document.getElementById("botao").href="eduardo.html"; 
}

function slide2(){
    document.getElementById("titulo").textContent="Temperatura Claudio Andrade";
    document.getElementById('id').src="https://thingspeak.com/channels/1598550/charts/1?bgcolor=%23F8F8FF&color=%23d62020&days=30&dynamic=true&results=100&title=Temperatura+-+%C2%BAC&type=spline&xaxis=Tempo+Decorrido+%2F+Hora&yaxis=Graus+Celsios++-+%C2%BAC";
    setTimeout("slide3()", 5000)
    document.getElementById('botao').href="claudio.html"
}

function slide3(){
    document.getElementById("titulo").textContent="Temperatura Êsdras Jhonnatas";
    document.getElementById('id').src="https://thingspeak.com/channels/1629491/charts/1?bgcolor=%23F8F8FF&color=%23d62020&days=30&dynamic=true&results=100&title=Temperatura+-+%C2%BAC&type=spline&xaxis=Tempo+Decorrido+%2F+Hora&yaxis=Graus+Celsios++-+%C2%BAC";
    setTimeout("slide4()", 5000)
    document.getElementById('botao').href="esdras.html"
}

function slide4(){
    document.getElementById("titulo").textContent="Temperatura Clécio Lima";
    document.getElementById('id').src="https://thingspeak.com/channels/1629867/charts/1?bgcolor=%23F8F8FF&color=%23d62020&days=30&dynamic=true&results=100&title=Temperatura+-+%C2%BAC&type=spline&xaxis=Tempo+Decorrido+%2F+Hora&yaxis=Graus+Celsios++-+%C2%BAC";
    setTimeout("slide5()", 5000)
    document.getElementById('botao').href="clecio.html"
}

function slide5(){
    document.getElementById("titulo").textContent="Temperatura Marina Santos";
    document.getElementById('id').src="https://thingspeak.com/channels/1631161/charts/1?bgcolor=%23F8F8FF&color=%23d62020&days=30&dynamic=true&results=100&title=Temperatura+-+%C2%BAC&type=spline&xaxis=Tempo+Decorrido+%2F+Hora&yaxis=Graus+Celsios++-+%C2%BAC";
    setTimeout("slide6()", 5000)
    document.getElementById('botao').href="marina.html"
}
    
function slide6(){
    document.getElementById("titulo").textContent="Temperatura Prof. Lucivanio";
    document.getElementById('id').src="https://thingspeak.com/channels/1598674/charts/1?bgcolor=%23F8F8FF&color=%23d62020&days=30&dynamic=true&results=100&title=Temperatura+-+%C2%BAC&type=spline&xaxis=Tempo+Decorrido+%2F+Hora&yaxis=Graus+Celsios++-+%C2%BAC";
    setTimeout("slide7()", 5000)
    document.getElementById('botao').href="lucivanio.html"
}
    
function slide7(){
    document.getElementById("titulo").textContent="Temperatura Marcos Egito";
    document.getElementById('id').src="https://thingspeak.com/channels/1418948/charts/1?bgcolor=%23F8F8FF&color=%23d62020&days=30&dynamic=true&results=100&timescale=10&title=Temperatura+-+%C2%BAC&type=spline&xaxis=Tempo+Decorrido+%2F+Hora&yaxis=Graus+Celsios++-+%C2%BAC";
    setTimeout("slide1()", 5000)
    document.getElementById('botao').href="marcos.html"
}