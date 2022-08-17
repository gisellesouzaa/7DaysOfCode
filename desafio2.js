let object = document.querySelector('input#desafio2')

object.addEventListener('click',clicar)

function clicar() {
    let nome = prompt("Qual o seu nome?")
    
    // Se quer seguir para área de Front-End ou seguir para a área de Back-End.
    let stack = prompt("Você quer seguir para área de Frontend ou Backend?")


    // 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. 
    if (stack.toLowerCase() === "frontend") {
        let framework = prompt("Você quer aprender React ou aprender Vue?")
    }

    // Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
    else if (stack.toLowerCase() === "backend") {
        let framework = prompt("Você quer aprender C# ou aprender Java?")
    }

    else {
        alert("Opção inválida. Tente novamente.")
    }

    // 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

    let escolha = prompt(`Você quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? Digite: \n1 Especializar \n2 Fullstack`)

    // 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar<!DOCTYPE html>

    let resposta = prompt("Você pretende aprender mais alguma tecnologia? [S/N]")

    tecnologias = [];
    i = 0;

    while (resposta.toLowerCase() == "s") {
        tecnologias[i] = prompt("Qual tecnologia?")
        i++;
        resposta = prompt("Você pretende aprender mais alguma tecnologia? [S/N]")
    }
    
    if (tecnologias == 0) {
        alert(`Gostei muito de te conhecer ${nome}! Lembre-se que o aprendizado é a chave do sucesso.`)
    }

    else{
        alert(`Gostei muito de te conhecer ${nome}! Legal saber que você quer estudar a(s) tecnologia(s): ${tecnologias}. O aprendizado é a chave do sucesso.`)
    }
}