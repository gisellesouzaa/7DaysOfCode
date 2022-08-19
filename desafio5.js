let object = document.querySelector('input#desafio5')

object.addEventListener('click', clicar)

function clicar() {
    // Funções
    function soma(n1, n2) {
        return Number(n1) + Number(n2)

    }

    function subtratrai(n1, n2) {
        return Number(n1) - Number(n2)
    }

    function multiplica(n1, n2) {
        return Number(n1) * Number(n2)
    }

    function divide(n1, n2) {
        return Number(n1) / Number(n2)
    }

    let n1 = "";
    let n2= "";
    let operacao = "";

    do {
        operacao = prompt("Escolha a operação matemática: \n 1 soma \n 2 subtração \n 3 multiplicação \n 4 divisão \n 5 sair")

        while (operacao != "1" && operacao != "2" && operacao != "3" && operacao != "4" && operacao != "5") {
            alert(`Operação não reconhecida!`);
            operacao = prompt(`Escolha a operação matemática que você quer realizar: \n 1 soma \n 2 subtração \n 3 multiplicação \n 4 divisão \n 5 sair"`);
            }
        if (operacao == "5"){
            break            
        }

        let n1 = prompt("Digite o primeiro valor para a operação:")
        let n2 = prompt("Digite o segundo valor para a operação:")

        const tipoCalculo = operacao;
        switch (tipoCalculo) {
            case '1':
                let resultado1 = soma(n1, n2)
                alert(`A soma de ${n1} + ${n2} = ${resultado1}`);
                break;
            case '2':
                let resultado2 = subtratrai(n1, n2)
                alert(`A subtração de ${n1} - ${n2} = ${resultado2}`);
                break;
            case '3':
                let resultado3 = multiplica(n1, n2)
                alert(`A multiplicação de ${n1} x ${n2} = ${resultado3}`);
                break;
            case '4':
                let resultado4 = divide(n1, n2)
                alert(`A divisão de ${n1} / ${n2} = ${resultado4}`);
                break;
            // default:
            //     break;
        }
    } while(operacao === "1" || operacao === "2" || operacao === "3" || operacao === "4");
    alert("Até a próxima!");
}

