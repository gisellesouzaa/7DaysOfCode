let nome = prompt("Qual o seu nome?")
const menssagem1 = 'Olá ' + nome + '! Vamos nos conhecer melhor?'
document.querySelector('#menssagem1').innerHTML = menssagem1

var stack = document.querySelector('input[name="stack"]:checked').value;
alert (stack);

// Se quer seguir para área de Front-End ou seguir para a área de Back-End.
let stack = prompt("você quer seguir para área de Frontend ou Backend?")


// 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. 
if (stack.toLowerCase() === "frontend"){
  let framework = prompt("Você quer aprender React ou aprender Vue?")
}

// Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
else if (stack.toLowerCase() === "backend"){
  let framework = prompt("Você quer aprender C# ou aprender Java?")
}

else {
  alert ("Opção inválida. Tente novamente.")
}

// 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

let escolha = prompt("você quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?[especializar/fullstack]")

// 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar<!DOCTYPE html>

let resposta = prompt("Você pretende se especializar em mais alguma tecnologia? [S/N]")

tecnologias = [];
i = 0;

while (resposta == "S"){
  tecnologias [i]= prompt("Qual tecnologia?")
  i++;
  resposta = prompt("Você pretende se especializar em mais alguma tecnologia? [S/N]")
} 
console.log(tecnologias)
alert ("Muito legal saber que você vai estudar as tecnologias: " + tecnologias + ". O aprendizado é a chave do sucesso.")



// tecnologias.forEach(tecnologias => {
//   console.log(tecnologias)
// });