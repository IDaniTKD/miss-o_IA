const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "É o primeiro dia de aula em um novo colégio. Você ainda não conhece ninguém. O que você faz?",
        alternativas: [
            {
                texto: "Fica mais na sua e espera alguém puxar assunto.",
                afirmacao: "No começo, foi mais reservado e observador, tentando entender o ambiente."
            },
            {
                texto: "Puxa conversa com alguém da sua sala logo no intervalo.",
                afirmacao: "Logo fez amizades e se sentiu mais à vontade na nova escola."
            }
        ]
    },
    {
        enunciado: "Nas primeiras semanas, a professora de português propõe um trabalho em grupo. Como você contribui?",
        alternativas: [
            {
                texto: "Ajuda na organização e propõe ideias criativas.",
                afirmacao: "Foi visto como alguém proativo e criativo nos trabalhos em grupo."
            },
            {
                texto: "Prefere ficar mais nos bastidores, ajudando na parte escrita.",
                afirmacao: "Contribuiu com dedicação e responsabilidade, mesmo sem chamar atenção."
            }
        ]
    },
    {
        enunciado: "Você tem sua primeira prova de matemática e não entendeu bem a matéria. O que decide fazer?",
        alternativas: [
            {
                texto: "Pede ajuda a um colega ou professor antes da prova.",
                afirmacao: "Mostrou humildade e disposição para aprender com os outros."
            },
            {
                texto: "Estuda sozinho em casa assistindo vídeos e lendo o livro.",
                afirmacao: "Conseguiu se organizar e superar as dificuldades com esforço próprio."
            }
        ]
    },
    {
        enunciado: "Durante o semestre, há uma feira de ciências. Sua equipe precisa apresentar um projeto. Qual seu papel?",
        alternativas: [
            {
                texto: "Cuida da apresentação oral e fala com o público.",
                afirmacao: "Mostrou boa comunicação e desenvoltura ao falar sobre o projeto."
            },
            {
                texto: "Fica responsável pela parte técnica e montagem do experimento.",
                afirmacao: "Demonstrou atenção aos detalhes e domínio prático do conteúdo."
            }
        ]
    },
    {
        enunciado: "No fim do ano, a escola organiza um evento cultural com apresentações artísticas. Como você participa?",
        alternativas: [
            {
                texto: "Participa da peça de teatro ou da música.",
                afirmacao: "Mostrou talento artístico e coragem para se apresentar em público."
            },
            {
                texto: "Ajuda na organização e nos bastidores do evento.",
                afirmacao: "Foi essencial para que tudo funcionasse bem, mesmo sem estar no palco."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua Jornada Escolar:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();