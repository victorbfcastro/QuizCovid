var caixaPerguntas = document.getElementById("divPerguntas")
var opcao1 = document.getElementById("lbl1")
var opcao2 = document.getElementById("lbl2")
var opcao3 = document.getElementById("lbl3")
var opcao4 = document.getElementById("lbl4")
var resp = document.getElementById("resp")

var rodada = 0

var lista = [
    {
        p: "Onde covid-19 começou?",
        opc: ["Japão", "China", "Brasil", "Argentina"],
        resp: 2
    },

    {
        p: "Como é feita a transmissão?",
        opc: ["Através de contato pessoal e superfícies que entraram em contato com o vírus", "Através de uma ligação telefônica", "Através de pensamentos", "Nenhuma das opções anteriores"],
        resp: 1
    }
]

function carregarPergunta()
{
    caixaPerguntas.innerHTML = lista[rodada].p

    opcao1.style.background = "white"
    opcao2.style.background = "white"
    opcao3.style.background = "white"
    opcao4.style.background = "white"
    resp.innerHTML = ''

    for (var j = 0; j <= 3; j++)
    {
        switch (j)
        {
            case 0:
                opcao1.innerHTML = lista[rodada].opc[j]
                break
            case 1:
                opcao2.innerHTML = lista[rodada].opc[j]
                break
            case 2:
                opcao3.innerHTML = lista[rodada].opc[j]
                break
            case 3:
                opcao4.innerHTML = lista[rodada].opc[j]
                break
        }
    }
}


function proximo()
{
    var escolhido = Number(document.querySelector('input[name="opc"]:checked').value);
    var cor = ''

    if (escolhido == lista[rodada].resp)
    {
        resp.innerHTML = "Resposta Correta!"
        cor = "green"
    }
    else
    {
        resp.innerHTML = `Errou! A resposta certa é: ${lista[rodada].opc[lista[rodada].resp - 1]}`
        cor = "red"
    }

    switch (lista[rodada].resp)
    {
        case 1:
            opcao1.style.background = cor
            break
        case 2:
            opcao2.style.background = cor
            break
        case 3:
            opcao3.style.background = cor
            break
        case 4:
            opcao4.style.background = cor
            break
    }

    rodada += 1

    sleep(1500).then(() =>
    {
        carregarPergunta()
    })
}

function sleep(time)
{
    return new Promise((resolve) => setTimeout(resolve, time));
}