let object = document.querySelector('input#desafio4')
const elementoLista = document.querySelector("#listaCompras")

object.addEventListener('click', clicar)

function clicar() {

    let hortifruti = [];
    let cereais = [];
    let doces = [];
    let laticínios = [];
    let açougue = [];

    let continuar = true;
 
    do {
        let adicionar = prompt('você deseja adicionar uma comida na sua lista de compras? Digite: sim ou não')

        if (adicionar == 'sim'){

            let item = prompt('qual comida você deseja inserir?')

            let lista = prompt("Em qual categoria essa comida se encaixa?\n 1  hortifruti \n 2 cereais \n 3 doces \n 4 laticínios \n 5 açougue");
        
            if (lista === '1'){
                hortifruti.push(item);
            }
            else if (lista === '2'){
                cereais.push(item);
            }
            else if (lista === '3'){
                doces.push(item);
            }
            else if (lista === '4'){
                laticínios.push(item);
            }                        
            else if (lista === '5'){
                açougue.push(item);
            }           
            else {
                alert('Lista não identificada. Tente novamente.')
            }
        } 
        else if (adicionar == "não"){
            continuar = false
            break

        }

    } while(continuar == true);

    let mensagem = (`<strong>LISTA DE COMPRAS:</strong> <br><br> <strong>Hortifruti:</strong> ${hortifruti} <br><br> <strong>Cereais:</strong> ${cereais} <br><br> <strong>Doces:</strong> ${doces} <br><br> <strong>Laticínios:</strong> ${laticínios} <br><br> <strong>Açougue:</strong> ${açougue} <br><br>`);

    document.getElementById('listaCompras').innerHTML = mensagem;

    elementoLista.style.opacity = 0.9;
}