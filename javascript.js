array1 = new Array ("https://thingspeak.com/channels/1631164/charts/1?bgcolor=%23F8F8FF&color=%23d62020&days=30&dynamic=true&results=100&title=Temperatura+-+%C2%BAC&type=spline&xaxis=Tempo+Decorrido+%2F+Hora&yaxis=Graus+Celsios++-+%C2%BAC","https://thingspeak.com/channels/1598550/charts/1?bgcolor=%23F8F8FF&color=%23d62020&days=30&dynamic=true&results=100&title=Temperatura+-+%C2%BAC&type=spline&xaxis=Tempo+Decorrido+%2F+Hora&yaxis=Graus+Celsios++-+%C2%BAC", "https://thingspeak.com/channels/1629491/charts/1?bgcolor=%23F8F8FF&color=%23d62020&days=30&dynamic=true&results=100&title=Temperatura+-+%C2%BAC&type=spline&xaxis=Tempo+Decorrido+%2F+Hora&yaxis=Graus+Celsios++-+%C2%BAC")

function comeco(){
document.getElementById('Id').src = array1[0]
document.form.texto.value="0"
}

function mais(){
document.form.texto.value = Math.floor ((document.form.texto.value) * 1 + 1)
if (document.form.texto.value > 2)
    {document.form.texto.value = 0}
}

function menos(){
document.form.texto.value = Math.floor ((document.form.texto.value) * 1 -1)
if (document.form.texto.value < 0)
    {document.form.texto.value = 2}
}

function regular(){
document.getElementById('Id').src = array1[document.form.texto.value];
setTimeout("regular()", 3000)
}

//setTimeout("slide2()", 5000);
//document.getElementById("botao").href="eduardo.html"; 