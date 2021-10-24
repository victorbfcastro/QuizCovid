var caixaPerguntas = document.getElementById("divPerguntas")
var opcao1 = document.getElementById("lbl1")
var opcao2 = document.getElementById("lbl2")
var opcao3 = document.getElementById("lbl3")
var opcao4 = document.getElementById("lbl4")
var resp = document.getElementById("resp")
var pontuacao = 0
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
    if (rodada == 10)
    {
        finalizar()
    }
    else
    {
        var escolhido = Number(document.querySelector('input[name="opc"]:checked').value);
        var corResposta = "rgb(83, 197, 79)"

        if (escolhido == lista[rodada].resp)
        {
            pontuacao += 1
            resp.style.background = "rgb(83, 197, 79)"
            resp.style.color = "black"
            resp.innerHTML = "Resposta Correta!"
        }
        else
        {
            resp.style.background = "rgb(148, 42, 42)"
            resp.style.color = "white"
            resp.innerHTML = `Errou! A resposta certa é: ${lista[rodada].opc[lista[rodada].resp - 1]}`
        }

        switch (lista[rodada].resp)
        {
            case 1:
                opcao1.style.background = corResposta
                break
            case 2:
                opcao2.style.background = corResposta
                break
            case 3:
                opcao3.style.background = corResposta
                break
            case 4:
                opcao4.style.background = corResposta
                break
        }

        rodada += 1

        sleep(2000).then(() =>
        {
            carregarPergunta()
        })
    }
}

function finalizar()
{
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 

    modal.style.display = "block";


    // When the user clicks on <span> (x), close the modal
    span.onclick = function ()
    {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event)
    {
        if (event.target == modal)
        {
            modal.style.display = "none";
        }
    }
}

function sleep(time)
{
    return new Promise((resolve) => setTimeout(resolve, time));
}