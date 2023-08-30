const key = "3a077d619cf822895eee518c8da8f100" //minha chave de conexão com a API
cidade = document.querySelector('.input-cidade')
btnBusca = document.querySelector('.botao-busca')
textoCidade = document.querySelector('.cidade')
temperatura = document.querySelector('.temp')
imgPrevisao = document.querySelector('.img-previsao')
textPrevisao = document.querySelector('.texto-previsao')


//evento

btnBusca.addEventListener('click',cliqueBotao)



//funções

//primeira função

function cliqueBotao() { //função para pegar o valor digitado no input
    const valorDigitado = cidade.value
    buscarCidade(valorDigitado)//Passar a variavel da função clique para a API
    // console.log(valorDigitado) 
}

//função de consumo de API
//async serve para fazer uma função assicrona que faz com que a função espere o processamento para avançar

async function buscarCidade(valorDigitado) { 
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valorDigitado}&appid=${key}&units=metric&lang=pt_br`).then(resposta=>resposta.json())
    console.log(dados)
    //adicionar o parametro metric e lang para traduzir e para transformar a temperatura para celsius
    //substituir os vlores q= pela variavel que pega a cidade e aapid= colocar a chave da API armazenada na variavel acima
    //await faz com que o fetch aguarde o processamento para avançar
    mostrarNaTela(dados)
}
// terceira função que vai mostrar os dados na dela
function mostrarNaTela(dados) {
    textoCidade.innerHTML = "Tempo em "+ dados.name //Printa a cidade na tela puxando da API(dados.name)
    temperatura.innerHTML = Math.floor(dados.main.temp)+ "ºC"
    imgPrevisao.src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    textPrevisao.innerHTML= `${dados.weather[0].description}`
}