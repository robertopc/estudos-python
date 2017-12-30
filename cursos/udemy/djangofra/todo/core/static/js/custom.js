function data() {

    var horas = new Date().getHours();
    var minutos = new Date().getMinutes();
        minutos = minutos < 10 ? '0' + minutos : minutos ;
    var segundos = new Date().getSeconds();
    document.querySelector('#container-h1 span').innerHTML = horas + ':' + minutos + ':' + segundos;
}

setInterval(function() {

    data();
}, 1000);