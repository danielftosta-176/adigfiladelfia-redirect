/* 
ADIG FLADÉLFIA JAVASCRIPT!
FEITO POR DANIELFTOSTA176
*/

function startup() {
   setTimeout( function() {
    document.getElementById("titlec").innerHTML = "Bem-Vindo!"
    document.getElementById("parac").innerHTML = "Seu navegador foi aprovado!"
   }, 1000)
setTimeout( function() {
 window.location.href = "casa"
}, 1500)
}

function next() {
setTimeout( function() {
    document.getElementById("footerload").innerHTML = "Adig Filadelfia | Carregando."
}, 1000)
setTimeout( function() {
    document.getElementById("footerload").innerHTML = "Adig Filadelfia | Carregando.."
}, 1500)
setTimeout( function() {
    document.getElementById("footerload").innerHTML = "Adig Filadelfia | Carregando..."
}, 2000)
setTimeout( function() {
    document.getElementById("footerload").innerHTML = "Adig Filadelfia | ADIG - Assembleia de Deus da Ilha do Gorvenador"
}, 2300)
}
